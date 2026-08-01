import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Calculator, ArrowDown, RefreshCw, ArrowUpDown, History, Trash2, Check, Sparkles } from 'lucide-react';
import { CustomDropdown } from './CustomDropdown';
import { CURRENCY_INFO } from './currencies';
import './styles.css';

// Local storage key for persistent history
const STORAGE_KEY = 'datacore_currency_history';

// Default fallback exchange rates (Base: USD)
const DEFAULT_RATES = {
    USD: 1.0,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 155.2,
    CAD: 1.37,
    AUD: 1.51,
    CHF: 0.91,
    CNY: 7.23,
    INR: 83.4,
    BRL: 5.15,
    SGD: 1.35,
    HKD: 7.82,
    IDR: 16100.0,
    VND: 25450.0,
    THB: 36.7,
    MYR: 4.72
};

export const SafeAgentLayer = ({ children }) => {
    return (
        <div className="safe-agent-layer" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {children}
        </div>
    );
};

export default function CurrencyConverter() {
    const [rates, setRates] = useState(DEFAULT_RATES);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    
    // Math expression input state (e.g. "100 + 45.50 * 2")
    const [amountExpr, setAmountExpr] = useState('100');
    const [showKeypad, setShowKeypad] = useState(false);
    
    const [lastUpdated, setLastUpdated] = useState(null);
    const [isOnline, setIsOnline] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false);
    const [history, setHistory] = useState([]);
    const containerRef = useRef(null);

    // Load saved conversion history on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                setHistory(JSON.parse(saved));
            }
        } catch (e) {
            console.warn("Failed to load currency history", e);
        }
    }, []);

    // Safe mathematical expression evaluator
    const evaluateMathExpression = (expr) => {
        try {
            if (!expr || !expr.trim()) return 0;
            // Clean invalid characters & sanitize expression
            const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/[^0-9.+\-*/() ]/g, '');
            if (!sanitized) return 0;
            
            // eslint-disable-next-line no-new-func
            const result = Function(`"use strict"; return (${sanitized})`)();
            if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
                return result;
            }
            return 0;
        } catch (err) {
            return 0;
        }
    };

    const evaluatedBaseAmount = evaluateMathExpression(amountExpr);

    // Calculate converted output
    const calculateConverted = () => {
        const rateFrom = rates[fromCurrency] || 1;
        const rateTo = rates[toCurrency] || 1;
        const amountInUSD = evaluatedBaseAmount / rateFrom;
        return amountInUSD * rateTo;
    };

    const convertedResultNum = calculateConverted();
    const convertedResultStr = convertedResultNum.toFixed(2);

    const syncRates = async () => {
        setIsSyncing(true);
        try {
            const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
            if (res.ok) {
                const data = await res.json();
                setRates(data.rates);
                setLastUpdated(new Date());
                setIsOnline(true);

                // Log to conversion history
                const newRecord = {
                    id: Date.now().toString(),
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    from: fromCurrency,
                    to: toCurrency,
                    expr: amountExpr,
                    result: convertedResultStr
                };
                setHistory(prev => {
                    const updated = [newRecord, ...prev.slice(0, 19)];
                    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch (e) {}
                    return updated;
                });
            } else {
                setIsOnline(false);
            }
        } catch (err) {
            console.warn("Using offline cached rates:", err);
            setIsOnline(false);
        } finally {
            setIsSyncing(false);
        }
    };

    useEffect(() => {
        syncRates();
    }, [fromCurrency]);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    // Pipe Converted Result back into Input for chained math
    const handlePipeResultToInput = () => {
        setFromCurrency(toCurrency);
        setAmountExpr(convertedResultStr);
    };

    // Calculator Keypad button press handler
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
                <div className="glass-card">
                    {/* Header Row: Minimalist Title & Subtle Status Dot */}
                    <div className="currency-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 10px rgba(168, 85, 247, 0.3)'
                            }}>
                                <Sparkles size={15} color="#ffffff" />
                            </div>
                            <div>
                                <h1 className="currency-title">Currency Converter</h1>
                                <div style={{ fontSize: '0.65rem', color: '#71717a', fontWeight: '500' }}>Pro Financial Math Engine</div>
                            </div>
                        </div>

                        {/* Subtle Online Status Dot */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: isOnline ? '#4ade80' : '#f59e0b', fontWeight: '600' }}>
                            <span style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: '50%',
                                backgroundColor: isOnline ? '#22c55e' : '#f59e0b',
                                boxShadow: isOnline ? '0 0 8px #22c55e' : 'none'
                            }}></span>
                            <span>{isOnline ? 'Online' : 'Offline'}</span>
                        </div>
                    </div>

                    {/* FROM Expression Section */}
                    <div className="input-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <label style={{ fontSize: '0.75rem', color: '#a1a1aa', fontWeight: '600' }}>From Expression</label>
                            <button
                                type="button"
                                onClick={() => setShowKeypad(!showKeypad)}
                                style={{
                                    fontSize: '0.7rem',
                                    fontWeight: '600',
                                    padding: '4px 8px',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(168, 85, 247, 0.3)',
                                    backgroundColor: showKeypad ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                                    color: showKeypad ? '#c084fc' : '#a1a1aa',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px'
                                }}
                            >
                                <Calculator size={13} />
                                {showKeypad ? 'Hide Keypad' : 'Keypad'}
                            </button>
                        </div>

                        <div className="input-wrapper" style={{ flexDirection: 'column', gap: '8px', padding: '10px', backgroundColor: '#09090b', borderRadius: '12px', border: '1px solid #27272a' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                                <CustomDropdown 
                                    options={currencies} 
                                    value={fromCurrency} 
                                    onChange={setFromCurrency}
                                />
                                <input 
                                    className="currency-input"
                                    type="text" 
                                    value={amountExpr} 
                                    onChange={(e) => setAmountExpr(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>

                            {/* Evaluated Base Amount Sub-label */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#71717a', padding: '0 4px', fontFamily: "'JetBrains Mono', monospace", width: '100%', boxSizing: 'border-box' }}>
                                <span>Evaluated = <strong style={{ color: '#e4e4e7' }}>{evaluatedBaseAmount.toFixed(2)} {fromCurrency}</strong></span>
                                {amountExpr.match(/[+\-*/×÷]/) && <span style={{ color: '#38bdf8', fontWeight: '700' }}>Math Active</span>}
                            </div>
                        </div>
                    </div>

                    {/* Integrated Financial Calculator Keypad Grid */}
                    {showKeypad && (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            backgroundColor: '#121215',
                            border: '1px solid #27272a',
                            borderRadius: '12px',
                            padding: '10px',
                            margin: '4px 0'
                        }}>
                            {/* Keypad Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                                {['AC', '(', ')', 'DEL'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn)} style={{ padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#f87171', fontWeight: '700', fontSize: '0.75rem', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                                {['7', '8', '9', '÷'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn === '÷' ? '/' : btn)} style={{ padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: ['÷'].includes(btn) ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.04)', color: ['÷'].includes(btn) ? '#38bdf8' : '#fafafa', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                                {['4', '5', '6', '×'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn === '×' ? '*' : btn)} style={{ padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: ['×'].includes(btn) ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.04)', color: ['×'].includes(btn) ? '#38bdf8' : '#fafafa', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                                {['1', '2', '3', '-'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn)} style={{ padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: ['-'].includes(btn) ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.04)', color: ['-'].includes(btn) ? '#38bdf8' : '#fafafa', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                                {['0', '.', '=', '+'].map(btn => (
                                    <button key={btn} onClick={() => handleKeypadPress(btn)} style={{ padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: btn === '=' ? 'rgba(168, 85, 247, 0.3)' : btn === '+' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.04)', color: btn === '=' ? '#c084fc' : btn === '+' ? '#38bdf8' : '#fafafa', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer' }}>
                                        {btn}
                                    </button>
                                ))}
                            </div>

                            {/* Multi-Currency Quick Add Chips */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '6px', borderTop: '1px solid #1c1c21' }}>
                                <span style={{ fontSize: '0.65rem', color: '#71717a', fontWeight: '600', textTransform: 'uppercase' }}>
                                    Add Foreign Amount:
                                </span>
                                <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
                                    {['EUR', 'USD', 'JPY', 'GBP', 'CNY'].map(cur => (
                                        <button
                                            key={cur}
                                            type="button"
                                            onClick={() => handleAddForeignCurrency(cur, 50)}
                                            style={{
                                                padding: '3px 8px',
                                                borderRadius: '5px',
                                                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                                                color: '#4ade80',
                                                border: '1px solid rgba(34, 197, 94, 0.25)',
                                                fontSize: '0.7rem',
                                                fontWeight: '600',
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

                    {/* Swap Button */}
                    <div 
                        className="swap-btn" 
                        onClick={handleSwap}
                        title="Swap currencies"
                        style={{ alignSelf: 'center', margin: '-2px 0' }}
                    >
                        <ArrowUpDown size={16} />
                    </div>

                    {/* TO Converted Output */}
                    <div className="input-group">
                        <label style={{ fontSize: '0.75rem', color: '#a1a1aa', fontWeight: '600' }}>To Converted Result</label>
                        <div className="input-wrapper" style={{ padding: '4px 10px', backgroundColor: '#09090b', borderRadius: '12px', border: '1px solid #27272a' }}>
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px', width: '100%' }}>
                        <button
                            type="button"
                            onClick={handlePipeResultToInput}
                            style={{
                                flex: 1,
                                minWidth: '120px',
                                padding: '10px 12px',
                                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                                color: '#60a5fa',
                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                borderRadius: '8px',
                                fontWeight: '700',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '5px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                            title="Use converted output as new input for chained math"
                        >
                            <ArrowDown size={13} />
                            Pipe Result ({convertedResultStr})
                        </button>

                        <button
                            type="button"
                            className="sync-btn"
                            onClick={syncRates}
                            disabled={isSyncing}
                            style={{
                                flex: 1,
                                minWidth: '110px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '5px',
                                margin: 0
                            }}
                        >
                            <RefreshCw size={13} className={isSyncing ? 'animate-spin' : ''} />
                            {isSyncing ? 'Syncing...' : 'Sync Rates'}
                        </button>
                    </div>

                    {lastUpdated && (
                        <div className="last-updated">
                            Last synced: {lastUpdated.toLocaleTimeString()}
                        </div>
                    )}

                    {/* Calculation History Ledger */}
                    {history.length > 0 && (
                        <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #27272a' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.7rem', color: '#a1a1aa', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <History size={13} />
                                    Conversion History
                                </span>
                                <button
                                    type="button"
                                    onClick={() => { setHistory([]); localStorage.removeItem(STORAGE_KEY); }}
                                    style={{ backgroundColor: 'transparent', border: 'none', color: '#71717a', fontSize: '0.65rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}
                                >
                                    <Trash2 size={11} /> Clear
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxHeight: '120px', overflowY: 'auto' }}>
                                {history.map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => { setFromCurrency(item.to); setAmountExpr(item.result); }}
                                        style={{
                                            backgroundColor: '#09090b',
                                            border: '1px solid #1c1c21',
                                            borderRadius: '6px',
                                            padding: '6px 10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            fontSize: '0.7rem',
                                            fontFamily: "'JetBrains Mono', monospace",
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div style={{ color: '#a1a1aa' }}>
                                            <span style={{ color: '#e4e4e7', fontWeight: '600' }}>{item.expr} {item.from}</span> → <span style={{ color: '#4ade80', fontWeight: '700' }}>{item.result} {item.to}</span>
                                        </div>
                                        <span style={{ fontSize: '0.65rem', color: '#52525b' }}>{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SafeAgentLayer>
    );
}

export function mount_app(container, platformAPI) {
    if (!container) return () => {};
    const root = ReactDOM.createRoot(container);
    root.render(<CurrencyConverter platformAPI={platformAPI} />);
    return () => {
        try {
            root.unmount();
        } catch (e) {}
    };
}
