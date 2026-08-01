import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Calculator, ArrowUpDown, RefreshCw, History, Trash2, Check, Sparkles, Plus, ArrowRight, ArrowDown } from 'lucide-react';
import { CustomDropdown } from './CustomDropdown';
import { CURRENCY_INFO } from './currencies';
import './styles.css';

const STORAGE_KEY = 'datacore_currency_history';

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
    // Mode State: 'calculator' vs 'exchange'
    const [activeTab, setActiveTab] = useState('calculator');

    const [rates, setRates] = useState(DEFAULT_RATES);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    
    // Pair Exchange States
    const [pairFromCur, setPairFromCur] = useState('USD');
    const [pairToCur, setPairToCur] = useState('EUR');
    const [pairAmount, setPairAmount] = useState('100');

    // Calculator Expression State
    const [calcExpr, setCalcExpr] = useState('100 + 50');

    // Quick Currency Variable Injector Modal/Popover State
    const [showVarModal, setShowVarModal] = useState(false);
    const [varAmount, setVarAmount] = useState('50');
    const [varCur, setVarCur] = useState('EUR');
    const [varOp, setVarOp] = useState('+');

    const [lastUpdated, setLastUpdated] = useState(null);
    const [isOnline, setIsOnline] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false);
    const [history, setHistory] = useState([]);
    const containerRef = useRef(null);

    // Load saved conversion history on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) setHistory(JSON.parse(saved));
        } catch (e) {}
    }, []);

    // Safe mathematical expression evaluator
    const evaluateMathExpression = (expr) => {
        try {
            if (!expr || !expr.trim()) return 0;
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

    const evaluatedCalcResult = evaluateMathExpression(calcExpr);
    const formattedCalcResult = evaluatedCalcResult.toFixed(2);

    // Pair Conversion Calculation
    const calculatePairResult = () => {
        const amt = parseFloat(pairAmount) || 0;
        const rateFrom = rates[pairFromCur] || 1;
        const rateTo = rates[pairToCur] || 1;
        return (amt / rateFrom) * rateTo;
    };

    const pairResultNum = calculatePairResult();
    const pairResultStr = pairResultNum.toFixed(2);

    const syncRates = async () => {
        setIsSyncing(true);
        try {
            const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
            if (res.ok) {
                const data = await res.json();
                setRates(data.rates);
                setLastUpdated(new Date());
                setIsOnline(true);
            } else {
                setIsOnline(false);
            }
        } catch (err) {
            setIsOnline(false);
        } finally {
            setIsSyncing(false);
        }
    };

    useEffect(() => {
        syncRates();
    }, [baseCurrency]);

    // Keypad press handler
    const handleKeypress = (val) => {
        if (val === 'AC') {
            setCalcExpr('');
        } else if (val === 'DEL') {
            setCalcExpr(prev => prev.length > 0 ? prev.slice(0, -1) : '');
        } else if (val === '=') {
            const resultStr = formattedCalcResult;
            setCalcExpr(resultStr);

            // Log to calculation history tape
            const newRecord = {
                id: Date.now().toString(),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                from: baseCurrency,
                expr: calcExpr,
                result: resultStr
            };
            setHistory(prev => {
                const updated = [newRecord, ...prev.slice(0, 19)];
                try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch (e) {}
                return updated;
            });
        } else {
            setCalcExpr(prev => prev + val);
        }
    };

    // Inject foreign currency converted value as a variable into calculator
    const handleInjectForeignVariable = (op, amount, currency) => {
        const amtNum = parseFloat(amount) || 0;
        if (amtNum <= 0) return;

        const rateForeign = rates[currency] || 1;
        const rateBase = rates[baseCurrency] || 1;
        const converted = (amtNum / rateForeign) * rateBase;
        const formatted = converted.toFixed(2);

        setCalcExpr(prev => {
            const trimmed = prev.trim();
            if (!trimmed || trimmed === '0') return formatted;
            if (['+', '-', '*', '/', '×', '÷'].some(o => trimmed.endsWith(o))) {
                return `${trimmed.slice(0, -1).trim()} ${op} ${formatted}`;
            }
            return `${trimmed} ${op} ${formatted}`;
        });

        setShowVarModal(false);
    };

    // Push pair conversion result into calculator
    const handlePushPairToCalc = () => {
        const amtNum = parseFloat(pairAmount) || 0;
        const rateTo = rates[pairToCur] || 1;
        const rateBase = rates[baseCurrency] || 1;
        const convertedToBase = (amtNum / (rates[pairFromCur] || 1)) * rateBase;
        const formatted = convertedToBase.toFixed(2);

        setCalcExpr(prev => {
            const trimmed = prev.trim();
            if (!trimmed || trimmed === '0') return formatted;
            return `${trimmed} + ${formatted}`;
        });

        setActiveTab('calculator');
    };

    const currencies = Object.keys(rates).sort();

    return (
        <SafeAgentLayer>
            <div className="currency-app" ref={containerRef} style={{ position: 'relative' }}>
                <div className="studio-card">
                    {/* Top Header: Title & Status */}
                    <div className="studio-header">
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
                            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                                Currency Studio
                            </span>
                        </div>

                        {/* Status Indicator */}
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

                    {/* Mode Switcher Tabs */}
                    <div className="tab-switcher">
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'calculator' ? 'active' : ''}`}
                            onClick={() => setActiveTab('calculator')}
                        >
                            <Calculator size={14} /> Calculator
                        </button>
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'exchange' ? 'active' : ''}`}
                            onClick={() => setActiveTab('exchange')}
                        >
                            <ArrowUpDown size={14} /> Currency Pair
                        </button>
                    </div>

                    {/* TAB 1: 🧮 CALCULATOR STUDIO */}
                    {activeTab === 'calculator' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                            {/* Base Currency Selection Bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2px' }}>
                                <span style={{ fontSize: '0.75rem', color: '#a1a1aa', fontWeight: '600' }}>Target Base Currency:</span>
                                <CustomDropdown
                                    options={currencies}
                                    value={baseCurrency}
                                    onChange={setBaseCurrency}
                                />
                            </div>

                            {/* Large Apple-Style Screen Display */}
                            <div className="calc-screen">
                                <div className="calc-expr">
                                    {calcExpr || '0'}
                                </div>
                                <div className="calc-result">
                                    {formattedCalcResult} <span style={{ fontSize: '1rem', color: '#71717a', fontWeight: '600' }}>{baseCurrency}</span>
                                </div>
                            </div>

                            {/* Currency Variable Chips Row */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', backgroundColor: '#09090b', padding: '10px', borderRadius: '12px', border: '1px solid #27272a' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.65rem', color: '#71717a', fontWeight: '700', textTransform: 'uppercase' }}>
                                        + Currency Variables:
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setShowVarModal(!showVarModal)}
                                        style={{ fontSize: '0.65rem', color: '#c084fc', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '3px' }}
                                    >
                                        <Plus size={11} /> Custom Injector
                                    </button>
                                </div>

                                <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
                                    {['EUR', 'USD', 'JPY', 'GBP', 'CNY', 'CAD'].map(cur => (
                                        <button
                                            key={cur}
                                            type="button"
                                            onClick={() => handleInjectForeignVariable('+', 50, cur)}
                                            style={{
                                                padding: '4px 10px',
                                                borderRadius: '6px',
                                                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                                                color: '#4ade80',
                                                border: '1px solid rgba(34, 197, 94, 0.25)',
                                                fontSize: '0.7rem',
                                                fontWeight: '700',
                                                cursor: 'pointer',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            + 50 {cur}
                                        </button>
                                    ))}
                                </div>

                                {/* Custom Currency Variable Injector Drawer */}
                                {showVarModal && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '8px', borderTop: '1px solid #1c1c21', flexWrap: 'wrap' }}>
                                        <select
                                            value={varOp}
                                            onChange={(e) => setVarOp(e.target.value)}
                                            style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '6px', padding: '4px 6px', color: '#c084fc', fontSize: '0.75rem', fontWeight: '800', outline: 'none' }}
                                        >
                                            <option value="+">+</option>
                                            <option value="-">-</option>
                                            <option value="*">×</option>
                                            <option value="/">÷</option>
                                        </select>

                                        <input
                                            type="number"
                                            value={varAmount}
                                            onChange={(e) => setVarAmount(e.target.value)}
                                            placeholder="Amount"
                                            style={{ width: '65px', background: '#18181b', border: '1px solid #27272a', borderRadius: '6px', padding: '4px 6px', color: '#fafafa', fontSize: '0.75rem', outline: 'none' }}
                                        />

                                        <select
                                            value={varCur}
                                            onChange={(e) => setVarCur(e.target.value)}
                                            style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '6px', padding: '4px 6px', color: '#fafafa', fontSize: '0.75rem', outline: 'none' }}
                                        >
                                            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>

                                        <button
                                            type="button"
                                            onClick={() => handleInjectForeignVariable(varOp, varAmount, varCur)}
                                            style={{ flex: 1, padding: '5px 10px', borderRadius: '6px', backgroundColor: '#a855f7', color: '#ffffff', border: 'none', fontSize: '0.7rem', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' }}
                                        >
                                            Inject into Formula
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Full 4x5 Tactile Keypad */}
                            <div className="calc-keypad">
                                <button type="button" className="key-btn action" onClick={() => handleKeypress('AC')}>AC</button>
                                <button type="button" className="key-btn action" onClick={() => handleKeypress('(')}>(</button>
                                <button type="button" className="key-btn action" onClick={() => handleKeypress(')')}>)</button>
                                <button type="button" className="key-btn action" onClick={() => handleKeypress('DEL')}>DEL</button>

                                <button type="button" className="key-btn" onClick={() => handleKeypress('7')}>7</button>
                                <button type="button" className="key-btn" onClick={() => handleKeypress('8')}>8</button>
                                <button type="button" className="key-btn" onClick={() => handleKeypress('9')}>9</button>
                                <button type="button" className="key-btn op" onClick={() => handleKeypress(' / ')}>÷</button>

                                <button type="button" className="key-btn" onClick={() => handleKeypress('4')}>4</button>
                                <button type="button" className="key-btn" onClick={() => handleKeypress('5')}>5</button>
                                <button type="button" className="key-btn" onClick={() => handleKeypress('6')}>6</button>
                                <button type="button" className="key-btn op" onClick={() => handleKeypress(' * ')}>×</button>

                                <button type="button" className="key-btn" onClick={() => handleKeypress('1')}>1</button>
                                <button type="button" className="key-btn" onClick={() => handleKeypress('2')}>2</button>
                                <button type="button" className="key-btn" onClick={() => handleKeypress('3')}>3</button>
                                <button type="button" className="key-btn op" onClick={() => handleKeypress(' - ')}>-</button>

                                <button type="button" className="key-btn" onClick={() => handleKeypress('0')}>0</button>
                                <button type="button" className="key-btn" onClick={() => handleKeypress('.')}>.</button>
                                <button type="button" className="key-btn equal" onClick={() => handleKeypress('=')}>=</button>
                                <button type="button" className="key-btn op" onClick={() => handleKeypress(' + ')}>+</button>
                            </div>
                        </div>
                    )}

                    {/* TAB 2: 💱 CURRENCY PAIR EXCHANGE */}
                    {activeTab === 'exchange' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
                            {/* FROM Currency Pair Box */}
                            <div className="pair-box">
                                <span style={{ fontSize: '0.75rem', color: '#a1a1aa', fontWeight: '600' }}>You Send / Convert:</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CustomDropdown
                                        options={currencies}
                                        value={pairFromCur}
                                        onChange={setPairFromCur}
                                    />
                                    <input
                                        className="currency-input"
                                        type="number"
                                        value={pairAmount}
                                        onChange={(e) => setPairAmount(e.target.value)}
                                        placeholder="0.00"
                                        style={{ fontSize: '1.4rem', fontWeight: '700' }}
                                    />
                                </div>
                            </div>

                            {/* Swap Button */}
                            <div
                                className="swap-circle"
                                onClick={() => {
                                    const temp = pairFromCur;
                                    setPairFromCur(pairToCur);
                                    setPairToCur(temp);
                                }}
                                title="Swap Pair"
                            >
                                <ArrowUpDown size={18} />
                            </div>

                            {/* TO Currency Pair Box */}
                            <div className="pair-box">
                                <span style={{ fontSize: '0.75rem', color: '#a1a1aa', fontWeight: '600' }}>You Receive:</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CustomDropdown
                                        options={currencies}
                                        value={pairToCur}
                                        onChange={setPairToCur}
                                    />
                                    <input
                                        className="currency-input"
                                        type="text"
                                        value={pairResultStr}
                                        readOnly
                                        style={{ color: '#4ade80', fontSize: '1.4rem', fontWeight: '800', fontFamily: "'JetBrains Mono', monospace" }}
                                    />
                                </div>
                            </div>

                            {/* Action Bar: Push to Calculator & Sync */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', width: '100%', marginTop: '4px' }}>
                                <button
                                    type="button"
                                    onClick={handlePushPairToCalc}
                                    style={{
                                        flex: 1,
                                        padding: '12px',
                                        backgroundColor: 'rgba(168, 85, 247, 0.2)',
                                        color: '#c084fc',
                                        border: '1px solid rgba(168, 85, 247, 0.4)',
                                        borderRadius: '10px',
                                        fontWeight: '800',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <ArrowRight size={15} /> Push Result ({pairResultStr} {pairToCur}) to Calc
                                </button>

                                <button
                                    type="button"
                                    className="sync-btn"
                                    onClick={syncRates}
                                    disabled={isSyncing}
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <RefreshCw size={14} className={isSyncing ? 'animate-spin' : ''} />
                                    {isSyncing ? 'Syncing...' : 'Sync Rates'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Calculation History Tape Ledger */}
                    {history.length > 0 && (
                        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #27272a' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.7rem', color: '#a1a1aa', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <History size={13} />
                                    Calculation History Tape
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
                                        onClick={() => { setCalcExpr(item.expr); setActiveTab('calculator'); }}
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
                                        title="Click to restore into Calculator"
                                    >
                                        <div style={{ color: '#a1a1aa' }}>
                                            <span style={{ color: '#e4e4e7', fontWeight: '600' }}>{item.expr}</span> = <span style={{ color: '#4ade80', fontWeight: '700' }}>{item.result} {item.from}</span>
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
