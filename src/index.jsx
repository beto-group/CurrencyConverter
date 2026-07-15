import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { CustomDropdown } from './CustomDropdown';
import './styles.css';

// DOM Utilities for FullTab Reparenting
const findNearestAncestorWithClass = (element, className) => {
    if (!element) return null;
    let current = element.parentNode;
    while (current) {
        if (current.classList && current.classList.contains(className)) return current;
        current = current.parentNode;
    }
    return null;
};

const findDirectChildByClass = (element, className) => {
    if (!element) return null;
    for (let i = 0; i < element.children.length; i++) {
        if (element.children[i].classList.contains(className)) return element.children[i];
    }
    return null;
};

function useFullTab(ref, platform) {
    useLayoutEffect(() => {
        if (platform !== 'obsidian') return;
        const currentEl = ref.current;
        if (!currentEl) return;
        const workspaceLeaf = findNearestAncestorWithClass(currentEl, 'workspace-leaf');
        if (!workspaceLeaf) return;
        
        const leafContent = findDirectChildByClass(workspaceLeaf, 'workspace-leaf-content');
        if (leafContent) {
            leafContent.style.padding = '0';
            leafContent.style.margin = '0';
            leafContent.style.overflow = 'hidden';
            leafContent.style.display = 'flex';
            leafContent.style.flexDirection = 'column';
        }
        
        const viewContent = findDirectChildByClass(leafContent, 'view-content');
        if (viewContent) {
            viewContent.style.padding = '0';
            viewContent.style.margin = '0';
            viewContent.style.overflow = 'hidden';
            
            // Move our component to directly under viewContent for true edge-to-edge
            const markdownReadingView = findDirectChildByClass(viewContent, 'markdown-reading-view');
            if (markdownReadingView) {
                markdownReadingView.style.display = 'none'; // Hide markdown wrapper
            }
            viewContent.appendChild(currentEl);
        }
        
        // Hide status bar
        const statusBar = document.querySelector('.status-bar');
        if (statusBar) statusBar.style.display = 'none';
        
        return () => {
            if (statusBar) statusBar.style.display = '';
            if (leafContent) leafContent.style = '';
            const markdownReadingView = findDirectChildByClass(viewContent, 'markdown-reading-view');
            if (markdownReadingView) markdownReadingView.style.display = '';
        };
    }, [platform]);
}

const SafeAgentLayer = ({ children }) => {
    return (
        <div className="agent-layer-safe-zone" style={{ width: '100%', height: '100%' }}>
            {children}
        </div>
    );
};

const DEFAULT_RATES = {
    "USD": 1,
    "EUR": 0.92,
    "GBP": 0.78,
    "JPY": 150.5,
    "AUD": 1.53,
    "CAD": 1.35,
    "CHF": 0.88,
    "CNY": 7.19,
    "INR": 82.9
};

const CurrencyConverter = ({ platform = 'obsidian', dc }) => {
    const containerRef = useRef(null);
    useFullTab(containerRef, platform);

    const [rates, setRates] = useState(DEFAULT_RATES);
    const [lastUpdated, setLastUpdated] = useState(null);
    const [isOnline, setIsOnline] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false);

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState('1.00');

    // Load from cache on mount
    useEffect(() => {
        const cached = localStorage.getItem('datacore_currency_rates');
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                if (parsed.rates) setRates(parsed.rates);
                if (parsed.timestamp) setLastUpdated(new Date(parsed.timestamp));
            } catch (e) {
                console.error("Cache parsing error", e);
            }
        }
        
        // MCP Bridge heartbeat
        updateMcpState();

        // Initial sync
        syncRates();
        
        // Network listeners
        const updateOnlineStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        setIsOnline(navigator.onLine);
        
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    const updateMcpState = async () => {
        if (platform === 'obsidian' && dc?.io?.write) {
            try {
                await dc.io.write('_resources/data/mcp_state.json', JSON.stringify({
                    component: "CurrencyConverter",
                    status: "active",
                    lastHeartbeat: new Date().toISOString()
                }, null, 2));
            } catch (e) {
                console.error("MCP update failed", e);
            }
        }
    };

    const syncRates = async () => {
        if (!navigator.onLine) {
            setIsOnline(false);
            return;
        }
        setIsSyncing(true);
        try {
            // Priority 1: Try to hit our Sovereign NodeJS Sidecar
            let fetchedRates = null;
            try {
                const sovRes = await fetch('http://localhost:3457/api/rates');
                if (sovRes.ok) {
                    const sovData = await sovRes.json();
                    if (sovData && sovData.rates) fetchedRates = sovData.rates;
                }
            } catch (e) {
                console.log("Sovereign sidecar unavailable, falling back to public API...");
            }
            
            // Priority 2: Direct public API fetch
            if (!fetchedRates) {
                const res = await fetch('https://open.er-api.com/v6/latest/USD');
                const data = await res.json();
                if (data && data.rates) fetchedRates = data.rates;
            }

            if (fetchedRates) {
                setRates(fetchedRates);
                const timestamp = Date.now();
                setLastUpdated(new Date(timestamp));
                localStorage.setItem('datacore_currency_rates', JSON.stringify({
                    rates: fetchedRates,
                    timestamp: timestamp
                }));
            }
        } catch (error) {
            console.error("Failed to sync rates", error);
        } finally {
            setIsSyncing(false);
        }
    };

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const calculateResult = () => {
        const val = parseFloat(amount);
        if (isNaN(val)) return '0.00';
        
        const rateFrom = rates[fromCurrency] || 1;
        const rateTo = rates[toCurrency] || 1;
        
        const usdVal = val / rateFrom;
        const finalVal = usdVal * rateTo;
        
        return finalVal.toFixed(2);
    };

    const currencies = Object.keys(rates).sort();

    return (
        <SafeAgentLayer>
            <div className="currency-app" ref={containerRef}>
                <div className="glass-card">
                    <div className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
                        {isOnline ? 'ONLINE' : 'OFFLINE MODE'}
                    </div>
                    
                    <h1 className="currency-title">CONVERT</h1>
                    
                    <div className="input-group">
                        <label>From</label>
                        <div className="input-wrapper">
                            <CustomDropdown 
                                options={currencies} 
                                value={fromCurrency} 
                                onChange={setFromCurrency}
                            />
                            <input 
                                className="currency-input"
                                type="number" 
                                value={amount} 
                                onChange={e => setAmount(e.target.value)}
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <div className="swap-btn" onClick={handleSwap}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 3 21 3 21 8"></polyline>
                            <line x1="4" y1="21" x2="21" y2="3"></line>
                            <polyline points="21 16 21 21 16 21"></polyline>
                            <line x1="15" y1="15" x2="21" y2="21"></line>
                            <line x1="4" y1="4" x2="9" y2="9"></line>
                        </svg>
                    </div>

                    <div className="input-group">
                        <label>To</label>
                        <div className="input-wrapper">
                            <CustomDropdown 
                                options={currencies} 
                                value={toCurrency} 
                                onChange={setToCurrency}
                            />
                            <input 
                                className="currency-input"
                                type="text" 
                                value={calculateResult()} 
                                readOnly
                                style={{ color: '#fafafa' }}
                            />
                        </div>
                    </div>

                    <button className="sync-btn" onClick={syncRates} disabled={isSyncing}>
                        {isSyncing ? 'SYNCING...' : 'SYNC RATES'}
                    </button>
                    
                    {lastUpdated && (
                        <div className="last-updated">
                            Last synced: {lastUpdated.toLocaleTimeString()}
                        </div>
                    )}
                </div>
            </div>
        </SafeAgentLayer>
    );
};

export async function mount_app(container, dc) {
    const root = createRoot(container);
    root.render(<CurrencyConverter dc={dc} platform="obsidian" />);
    return function cleanup() {
        root.unmount();
    };
}
