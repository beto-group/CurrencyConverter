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
            
            const markdownReadingView = findDirectChildByClass(viewContent, 'markdown-reading-view');
            if (markdownReadingView) {
                markdownReadingView.style.display = 'none';
            }
            viewContent.appendChild(currentEl);
        }
        
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

// Safe Math Expression Evaluator (Supports +, -, *, /, %, parens, decimals)
const evaluateExpression = (expr) => {
    if (!expr || typeof expr !== 'string') return 0;
    try {
        const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/[^0-9+\-*/.()% ]/g, '');
        if (!sanitized.trim()) return 0;

        // eslint-disable-next-line no-new-func
        const fn = new Function(`return (${sanitized});`);
        const res = fn();
        return isNaN(res) || !isFinite(res) ? 0 : res;
    } catch (e) {
        return 0;
    }
};

const CurrencyConverter = ({ platform = 'obsidian', dc, platformAPI = {} }) => {
    const containerRef = useRef(null);
    useFullTab(containerRef, platform);

    const [rates, setRates] = useState(DEFAULT_RATES);
    const [lastUpdated, setLastUpdated] = useState(null);
    const [isOnline, setIsOnline] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false);

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amountExpr, setAmountExpr] = useState('100');
    const [showKeypad, setShowKeypad] = useState(false);
    const [history, setHistory] = useState([]);

    // Load rates & history from cache on mount
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

        const savedHistory = localStorage.getItem('datacore_currency_history');
        if (savedHistory) {
            try { setHistory(JSON.parse(savedHistory)); } catch (e) {}
        }
        
        updateMcpState();
        syncRates();
        
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

    // Evaluate input math expression live
    const evaluatedBaseAmount = evaluateExpression(amountExpr);

    const calculateResult = () => {
        const rateFrom = rates[fromCurrency] || 1;
        const rateTo = rates[toCurrency] || 1;
        
        const usdVal = evaluatedBaseAmount / rateFrom;
        const finalVal = usdVal * rateTo;
        
        return finalVal.toFixed(2);
    };

    const convertedResultStr = calculateResult();

    // Pipe converted result back to input field for chained conversions
    const handlePipeResultToInput = () => {
        const res = convertedResultStr;
        setFromCurrency(toCurrency);
        setAmountExpr(res);

        // Add to history ledger
        const entry = {
            id: Date.now(),
            expr: amountExpr,
            baseVal: evaluatedBaseAmount.toFixed(2),
            from: fromCurrency,
            to: toCurrency,
            result: res,
            time: new Date().toLocaleTimeString()
        };
        const updated = [entry, ...history.slice(0, 9)];
        setHistory(updated);
        localStorage.setItem('datacore_currency_history', JSON.stringify(updated));
    };

    // Calculator Keypad Actions
    const handleKeypadPress = (val) => {
        if (val === 'AC') {
            setAmountExpr('');
        } else if (val === 'DEL') {
            setAmountExpr(prev => prev.length > 0 ? prev.slice(0, -1) : '');
        } else if (val === '=') {
            setAmountExpr(evaluatedBaseAmount.toString());
        } else {
            setAmountExpr(prev => prev + val);
        }
    };

    // Convert foreign amount & add directly into active math expression
    const handleAddForeignCurrency = (foreignCurrency, foreignAmount) => {
        const rateForeign = rates[foreignCurrency] || 1;
        const rateBase = rates[fromCurrency] || 1;
        const converted = (foreignAmount / rateForeign) * rateBase;
        const formatted = converted.toFixed(2);
        
        setAmountExpr(prev => {
            const trimmed = prev.trim();
            if (!trimmed || trimmed === '0') return formatted;
            if (['+', '-', '*', '/', '×', '÷'].some(op => trimmed.endsWith(op))) {
                return `${trimmed} ${formatted}`;
            }
            return `${trimmed} + ${formatted}`;
        });
    };

    const currencies = Object.keys(rates).sort();

    return (
        <SafeAgentLayer>
            <div className="currency-app" ref={containerRef} style={{ position: 'relative' }}>
                <div className="glass-card" style={{ maxWidth: '460px', margin: '0 auto' }}>
                    <div className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
                        {isOnline ? 'ONLINE' : 'OFFLINE MODE'}
                    </div>
                    
                    <h1 className="currency-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <span>CONVERT & CALC</span>
                        <span style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '12px', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.4)' }}>
                            PRO MATH
                        </span>
                    </h1>
                    
                    {/* FROM Input & Expression Bar */}
                    <div className="input-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <label>From Expression</label>
                            <button
                                onClick={() => setShowKeypad(!showKeypad)}
                                style={{
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    padding: '3px 8px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    backgroundColor: showKeypad ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 255, 255, 0.08)',
                                    color: showKeypad ? '#d8b4fe' : '#9ca3af',
                                    cursor: 'pointer'
                                }}
                            >
                                🧮 {showKeypad ? 'Hide Keypad' : 'Math Keypad'}
                            </button>
                        </div>

                        <div className="input-wrapper" style={{ flexDirection: 'column', gap: '6px', backgroundColor: 'rgba(6, 7, 10, 0.7)', padding: '10px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                                <CustomDropdown 
                                    options={currencies} 
                                    value={fromCurrency} 
                                    onChange={setFromCurrency}
                                />
                                <input 
                                    className="currency-input"
                                    type="text" 
                                    value={amountExpr} 
                                    onChange={e => setAmountExpr(e.target.value)}
                                    placeholder="e.g. 100 + 45 * 2"
                                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px' }}
                                />
                            </div>

                            {/* Evaluated Base Amount Sub-label */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#a1a1aa', padding: '0 4px', fontFamily: "'JetBrains Mono', monospace" }}>
                                <span>Evaluated = <strong>{evaluatedBaseAmount.toFixed(2)} {fromCurrency}</strong></span>
                                {amountExpr.match(/[+\-*/×÷]/) && <span style={{ color: '#38bdf8' }}>Math Active</span>}
                            </div>
                        </div>
                    </div>

                    {/* Integrated Financial Calculator Keypad Grid */}
                    {showKeypad && (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                            borderRadius: '14px',
                            padding: '12px',
                            margin: '10px 0'
                        }}>
                            {/* Keypad Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                                {['AC', '(', ')', 'DEL'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn)} style={{ padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#f87171', fontWeight: '800', fontSize: '13px', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                                {['7', '8', '9', '÷'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn === '÷' ? '/' : btn)} style={{ padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: ['÷'].includes(btn) ? 'rgba(6, 182, 212, 0.25)' : 'rgba(255,255,255,0.06)', color: ['÷'].includes(btn) ? '#38bdf8' : '#ffffff', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                                {['4', '5', '6', '×'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn === '×' ? '*' : btn)} style={{ padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: ['×'].includes(btn) ? 'rgba(6, 182, 212, 0.25)' : 'rgba(255,255,255,0.06)', color: ['×'].includes(btn) ? '#38bdf8' : '#ffffff', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                                {['1', '2', '3', '-'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn)} style={{ padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: ['-'].includes(btn) ? 'rgba(6, 182, 212, 0.25)' : 'rgba(255,255,255,0.06)', color: ['-'].includes(btn) ? '#38bdf8' : '#ffffff', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                                {['0', '.', '=', '+'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn)} style={{ padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: btn === '=' ? 'rgba(168, 85, 247, 0.4)' : btn === '+' ? 'rgba(6, 182, 212, 0.25)' : 'rgba(255,255,255,0.06)', color: btn === '=' ? '#d8b4fe' : btn === '+' ? '#38bdf8' : '#ffffff', fontWeight: '800', fontSize: '14px', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                            </div>

                            {/* Currency Multi-Math Quick Add Chips */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: '700', textTransform: 'uppercase' }}>
                                    + Add Foreign Amount to Expression:
                                </span>
                                <div style={{ display: 'flex', gap: '6px', overflowX: 'auto' }}>
                                    {['EUR', 'USD', 'JPY', 'GBP', 'CNY'].map(cur => (
                                        <button
                                            key={cur}
                                            onClick={() => handleAddForeignCurrency(cur, 50)}
                                            style={{
                                                padding: '4px 10px',
                                                borderRadius: '6px',
                                                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                                color: '#34d399',
                                                border: '1px solid rgba(16, 185, 129, 0.3)',
                                                fontSize: '11px',
                                                fontWeight: '700',
                                                cursor: 'pointer',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            + 50 {cur}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="swap-btn" onClick={handleSwap}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 3 21 3 21 8"></polyline>
                            <line x1="4" y1="21" x2="21" y2="3"></line>
                            <polyline points="21 16 21 21 16 21"></polyline>
                            <line x1="15" y1="15" x2="21" y2="21"></line>
                            <line x1="4" y1="4" x2="9" y2="9"></line>
                        </svg>
                    </div>

                    {/* TO Converted Output */}
                    <div className="input-group">
                        <label>To Converted Result</label>
                        <div className="input-wrapper">
                            <CustomDropdown 
                                options={currencies} 
                                value={toCurrency} 
                                onChange={setToCurrency}
                            />
                            <input 
                                className="currency-input"
                                type="text" 
                                value={convertedResultStr} 
                                readOnly
                                style={{ color: '#4ade80', fontWeight: '800', fontFamily: "'JetBrains Mono', monospace" }}
                            />
                        </div>
                    </div>

                    {/* Action Bar: Pipe Result & Sync */}
                    <div style={{ display: 'flex', gap: '8px', margin: '14px 0 6px 0' }}>
                        <button
                            onClick={handlePipeResultToInput}
                            style={{
                                flex: 1,
                                padding: '10px',
                                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                color: '#60a5fa',
                                border: '1px solid rgba(59, 130, 246, 0.4)',
                                borderRadius: '8px',
                                fontWeight: '700',
                                fontSize: '12px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            }}
                            title="Use converted output as new input for chained math"
                        >
                            ⬇ Pipe Result ({convertedResultStr} {toCurrency})
                        </button>

                        <button
                            className="sync-btn"
                            onClick={syncRates}
                            disabled={isSyncing}
                            style={{ flex: 1, margin: 0 }}
                        >
                            {isSyncing ? 'SYNCING...' : 'SYNC RATES'}
                        </button>
                    </div>
                    
                    {lastUpdated && (
                        <div className="last-updated">
                            Last synced: {lastUpdated.toLocaleTimeString()}
                        </div>
                    )}

                    {/* Calculation History Ledger */}
                    {history.length > 0 && (
                        <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '700', textTransform: 'uppercase' }}>
                                    📋 CONVERSION LEDGER HISTORY
                                </span>
                                <button
                                    onClick={() => { setHistory([]); localStorage.removeItem('datacore_currency_history'); }}
                                    style={{ backgroundColor: 'transparent', border: 'none', color: '#71717a', fontSize: '10px', cursor: 'pointer' }}
                                >
                                    Clear History
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '140px', overflowY: 'auto' }}>
                                {history.map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => { setFromCurrency(item.to); setAmountExpr(item.result); }}
                                        style={{
                                            backgroundColor: 'rgba(6, 7, 10, 0.6)',
                                            border: '1px solid rgba(255, 255, 255, 0.06)',
                                            borderRadius: '8px',
                                            padding: '8px 10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            fontSize: '11px',
                                            fontFamily: "'JetBrains Mono', monospace",
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <span style={{ color: '#a1a1aa' }}>
                                            {item.baseVal} {item.from} → <strong style={{ color: '#4ade80' }}>{item.result} {item.to}</strong>
                                        </span>
                                        <span style={{ color: '#71717a', fontSize: '10px' }}>{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SafeAgentLayer>
    );
};

export async function mount_app(container, platformAPI = {}) {
    const root = createRoot(container);
    root.render(<CurrencyConverter platformAPI={platformAPI} platform="obsidian" />);
    return function cleanup() {
        root.unmount();
    };
}

export function View(props) {
    return <CurrencyConverter {...props} />;
}

export default CurrencyConverter;

if (typeof document !== 'undefined' && document.getElementById('root')) {
    createRoot(document.getElementById('root')).render(<CurrencyConverter />);
}
