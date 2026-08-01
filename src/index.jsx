import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Calculator, ArrowUpDown, RefreshCw, History, Trash2, Sparkles, Plus, ArrowRight, Globe, Settings2, X } from 'lucide-react';
import { CustomDropdown } from './CustomDropdown';
import { CURRENCY_INFO } from './currencies';
import './styles.css';

const STORAGE_KEY_HIST = 'datacore_currency_history_v2';
const STORAGE_KEY_CHIPS = 'datacore_currency_chips_v2';
const STORAGE_KEY_EQUIV = 'datacore_equivalent_currencies_v1';

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
    MYR: 4.72,
    TRY: 32.5,
    KRW: 1375.0,
    MXN: 16.8,
    RUB: 91.5
};

const DEFAULT_CHIPS = ['EUR', 'USD', 'GBP', 'JPY', 'CAD', 'AUD', 'CNY', 'BRL'];
const DEFAULT_EQUIV = ['EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CNY', 'BRL', 'INR', 'VND'];

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

    // Quick Currency Variable Amount & Custom Chips
    const [quickAmount, setQuickAmount] = useState('50');
    const [userChips, setUserChips] = useState(DEFAULT_CHIPS);
    const [showAddChipModal, setShowAddChipModal] = useState(false);
    const [selectedNewChip, setSelectedNewChip] = useState('VND');

    // Dynamic Equivalent Currencies Bar State
    const [equivCurrencies, setEquivCurrencies] = useState(DEFAULT_EQUIV);
    const [showAddEquivModal, setShowAddEquivModal] = useState(false);
    const [selectedNewEquiv, setSelectedNewEquiv] = useState('MYR');

    // Custom Currency Injector Drawer State
    const [showCustomInjector, setShowCustomInjector] = useState(false);
    const [customAmount, setCustomAmount] = useState('50');
    const [customCur, setCustomCur] = useState('EUR');
    const [customOp, setCustomOp] = useState('+');

    const [lastUpdated, setLastUpdated] = useState(null);
    const [isOnline, setIsOnline] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false);
    const [history, setHistory] = useState([]);
    const containerRef = useRef(null);

    // Load saved chips and conversion history on mount
    useEffect(() => {
        try {
            const savedHist = localStorage.getItem(STORAGE_KEY_HIST);
            if (savedHist) setHistory(JSON.parse(savedHist));

            const savedChips = localStorage.getItem(STORAGE_KEY_CHIPS);
            if (savedChips) setUserChips(JSON.parse(savedChips));

            const savedEquiv = localStorage.getItem(STORAGE_KEY_EQUIV);
            if (savedEquiv) setEquivCurrencies(JSON.parse(savedEquiv));
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

    // Calculate equivalent amount in any currency for current calculator result
    const getCalcResultEquivalent = (targetCur) => {
        const rateBase = rates[baseCurrency] || 1;
        const rateTarget = rates[targetCur] || 1;
        const amtInUSD = evaluatedCalcResult / rateBase;
        return (amtInUSD * rateTarget).toFixed(2);
    };

    // Calculate equivalent amount in any currency for pair amount
    const getPairAmountEquivalent = (targetCur) => {
        const amt = parseFloat(pairAmount) || 0;
        const rateFrom = rates[pairFromCur] || 1;
        const rateTarget = rates[targetCur] || 1;
        return ((amt / rateFrom) * rateTarget).toFixed(2);
    };

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
                try { localStorage.setItem(STORAGE_KEY_HIST, JSON.stringify(updated)); } catch (e) {}
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

        setShowCustomInjector(false);
    };

    // Add a custom currency chip to user's quick chips bar
    const handleAddUserChip = (currencyToAdd) => {
        if (!userChips.includes(currencyToAdd)) {
            const updated = [...userChips, currencyToAdd];
            setUserChips(updated);
            try { localStorage.setItem(STORAGE_KEY_CHIPS, JSON.stringify(updated)); } catch (e) {}
        }
        setShowAddChipModal(false);
    };

    // Remove custom currency chip
    const handleRemoveUserChip = (e, currencyToRemove) => {
        e.stopPropagation();
        const updated = userChips.filter(c => c !== currencyToRemove);
        setUserChips(updated);
        try { localStorage.setItem(STORAGE_KEY_CHIPS, JSON.stringify(updated)); } catch (e) {}
    };

    // Add custom equivalent currency
    const handleAddEquivCurrency = (currencyToAdd) => {
        if (!equivCurrencies.includes(currencyToAdd)) {
            const updated = [...equivCurrencies, currencyToAdd];
            setEquivCurrencies(updated);
            try { localStorage.setItem(STORAGE_KEY_EQUIV, JSON.stringify(updated)); } catch (e) {}
        }
        setShowAddEquivModal(false);
    };

    // Remove equivalent currency
    const handleRemoveEquivCurrency = (e, currencyToRemove) => {
        e.stopPropagation();
        const updated = equivCurrencies.filter(c => c !== currencyToRemove);
        setEquivCurrencies(updated);
        try { localStorage.setItem(STORAGE_KEY_EQUIV, JSON.stringify(updated)); } catch (e) {}
    };

    // Push pair conversion result into calculator
    const handlePushPairToCalc = () => {
        const amtNum = parseFloat(pairAmount) || 0;
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
    const matrixCurrencies = ['EUR', 'USD', 'GBP', 'JPY', 'CAD', 'AUD', 'CNY', 'BRL', 'INR', 'VND'];

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
                                background: '#27272a',
                                border: '1px solid #3f3f46',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Sparkles size={14} color="#fafafa" />
                            </div>
                            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                                Currency Studio
                            </span>
                        </div>

                        {/* Status Indicator */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: isOnline ? '#34d399' : '#f59e0b', fontWeight: '600' }}>
                            <span style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: '50%',
                                backgroundColor: isOnline ? '#10b981' : '#f59e0b'
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

                            {/* Large Minimalist Apple-Style Screen Display */}
                            <div className="calc-screen">
                                <div className="calc-expr">
                                    {calcExpr || '0'}
                                </div>
                                <div className="calc-result">
                                    {formattedCalcResult} <span style={{ fontSize: '0.9rem', color: '#71717a', fontWeight: '600' }}>{baseCurrency}</span>
                                </div>

                                {/* Live Dynamic Multi-Currency Equivalent Matrix Bar */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                    width: '100%',
                                    paddingTop: '8px',
                                    borderTop: '1px solid #1c1c21'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        gap: '6px',
                                        overflowX: 'auto',
                                        width: '100%',
                                        scrollbarWidth: 'none',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ fontSize: '0.6rem', color: '#71717a', fontWeight: '800', alignSelf: 'center', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                            Equivalents:
                                        </span>

                                        {equivCurrencies.filter(c => c !== baseCurrency).map(cur => {
                                            const eqVal = getCalcResultEquivalent(cur);
                                            return (
                                                <div
                                                    key={cur}
                                                    onClick={() => setBaseCurrency(cur)}
                                                    style={{
                                                        padding: '3px 8px',
                                                        borderRadius: '6px',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                                        border: '1px solid #27272a',
                                                        color: '#a1a1aa',
                                                        fontSize: '0.68rem',
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        cursor: 'pointer',
                                                        whiteSpace: 'nowrap',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '5px'
                                                    }}
                                                    title={`Click to set ${cur} as primary base currency`}
                                                >
                                                    <span style={{ color: '#ffffff', fontWeight: '700' }}>{cur}</span>
                                                    <span style={{ color: '#a1a1aa' }}>{eqVal}</span>
                                                    {equivCurrencies.length > 2 && (
                                                        <X
                                                            size={10}
                                                            style={{ opacity: 0.5, cursor: 'pointer', marginLeft: '2px' }}
                                                            onClick={(e) => handleRemoveEquivCurrency(e, cur)}
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}

                                        {/* + Add Equivalent Pill */}
                                        <button
                                            type="button"
                                            onClick={() => setShowAddEquivModal(!showAddEquivModal)}
                                            style={{
                                                padding: '3px 8px',
                                                borderRadius: '6px',
                                                backgroundColor: '#18181b',
                                                border: '1px solid #27272a',
                                                color: '#ffffff',
                                                fontSize: '0.68rem',
                                                fontWeight: '700',
                                                cursor: 'pointer',
                                                whiteSpace: 'nowrap',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '3px'
                                            }}
                                        >
                                            <Plus size={10} /> Add
                                        </button>
                                    </div>

                                    {/* Add Equivalent Currency Popover Drawer */}
                                    {showAddEquivModal && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '6px', borderTop: '1px solid #1c1c21', flexWrap: 'wrap' }}>
                                            <span style={{ fontSize: '0.65rem', color: '#a1a1aa', fontWeight: '600' }}>Add Equivalent:</span>
                                            <select
                                                value={selectedNewEquiv}
                                                onChange={(e) => setSelectedNewEquiv(e.target.value)}
                                                style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '6px', padding: '3px 6px', color: '#ffffff', fontSize: '0.7rem', outline: 'none' }}
                                            >
                                                {currencies.map(c => <option key={c} value={c}>{c} - {(CURRENCY_INFO[c] || {}).name || c}</option>)}
                                            </select>
                                            <button
                                                type="button"
                                                onClick={() => handleAddEquivCurrency(selectedNewEquiv)}
                                                style={{ padding: '3px 8px', borderRadius: '6px', backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer' }}
                                            >
                                                + Add
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowAddEquivModal(false)}
                                                style={{ padding: '3px 6px', borderRadius: '6px', backgroundColor: 'transparent', color: '#71717a', border: 'none', fontSize: '0.65rem', cursor: 'pointer' }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Currency Variable Quick Chips Bar */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#09090b', padding: '10px 12px', borderRadius: '12px', border: '1px solid #27272a' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ fontSize: '0.65rem', color: '#71717a', fontWeight: '800', textTransform: 'uppercase' }}>
                                            Variable Amount:
                                        </span>
                                        {/* Quick Amount Selector Pills */}
                                        <div style={{ display: 'flex', gap: '3px' }}>
                                            {['10', '50', '100', '500'].map(amt => (
                                                <button
                                                    key={amt}
                                                    type="button"
                                                    onClick={() => setQuickAmount(amt)}
                                                    style={{
                                                        padding: '2px 6px',
                                                        borderRadius: '4px',
                                                        backgroundColor: quickAmount === amt ? '#27272a' : 'transparent',
                                                        color: quickAmount === amt ? '#ffffff' : '#71717a',
                                                        border: '1px solid #27272a',
                                                        fontSize: '0.65rem',
                                                        fontWeight: '700',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {amt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '6px' }}>
                                        <button
                                            type="button"
                                            onClick={() => setShowAddChipModal(true)}
                                            style={{ fontSize: '0.65rem', color: '#ffffff', backgroundColor: '#18181b', border: '1px solid #27272a', padding: '3px 8px', borderRadius: '6px', cursor: 'pointer', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '3px' }}
                                        >
                                            <Plus size={11} /> Add Currency
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowCustomInjector(!showCustomInjector)}
                                            style={{ fontSize: '0.65rem', color: '#a1a1aa', backgroundColor: 'transparent', border: '1px solid #27272a', padding: '3px 8px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '3px' }}
                                        >
                                            <Settings2 size={11} /> Math Injector
                                        </button>
                                    </div>
                                </div>

                                {/* Dynamic User Currency Chips */}
                                <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px', scrollbarWidth: 'none' }}>
                                    {userChips.map(cur => (
                                        <div
                                            key={cur}
                                            onClick={() => handleInjectForeignVariable('+', quickAmount, cur)}
                                            style={{
                                                padding: '4px 8px',
                                                borderRadius: '6px',
                                                backgroundColor: '#18181b',
                                                color: '#ffffff',
                                                border: '1px solid #27272a',
                                                fontSize: '0.7rem',
                                                fontWeight: '700',
                                                cursor: 'pointer',
                                                whiteSpace: 'nowrap',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px'
                                            }}
                                        >
                                            <span>+ {quickAmount} {cur}</span>
                                            {userChips.length > 3 && (
                                                <X
                                                    size={11}
                                                    style={{ opacity: 0.5, cursor: 'pointer' }}
                                                    onClick={(e) => handleRemoveUserChip(e, cur)}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Custom Add Currency Chip Popover Modal */}
                                {showAddChipModal && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '8px', borderTop: '1px solid #1c1c21', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '0.7rem', color: '#a1a1aa', fontWeight: '600' }}>Select Currency:</span>
                                        <select
                                            value={selectedNewChip}
                                            onChange={(e) => setSelectedNewChip(e.target.value)}
                                            style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '6px', padding: '4px 8px', color: '#ffffff', fontSize: '0.75rem', outline: 'none' }}
                                        >
                                            {currencies.map(c => <option key={c} value={c}>{c} - {(CURRENCY_INFO[c] || {}).name || c}</option>)}
                                        </select>
                                        <button
                                            type="button"
                                            onClick={() => handleAddUserChip(selectedNewChip)}
                                            style={{ padding: '5px 10px', borderRadius: '6px', backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', fontSize: '0.7rem', fontWeight: '700', cursor: 'pointer' }}
                                        >
                                            + Add Chip
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowAddChipModal(false)}
                                            style={{ padding: '5px 8px', borderRadius: '6px', backgroundColor: 'transparent', color: '#71717a', border: 'none', fontSize: '0.7rem', cursor: 'pointer' }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}

                                {/* Advanced Math Injector Drawer */}
                                {showCustomInjector && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '8px', borderTop: '1px solid #1c1c21', flexWrap: 'wrap' }}>
                                        <select
                                            value={customOp}
                                            onChange={(e) => setCustomOp(e.target.value)}
                                            style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '6px', padding: '4px 6px', color: '#ffffff', fontSize: '0.75rem', fontWeight: '800', outline: 'none' }}
                                        >
                                            <option value="+">+</option>
                                            <option value="-">-</option>
                                            <option value="*">×</option>
                                            <option value="/">÷</option>
                                        </select>

                                        <input
                                            type="number"
                                            value={customAmount}
                                            onChange={(e) => setCustomAmount(e.target.value)}
                                            placeholder="Amount"
                                            style={{ width: '65px', background: '#18181b', border: '1px solid #27272a', borderRadius: '6px', padding: '4px 6px', color: '#fafafa', fontSize: '0.75rem', outline: 'none' }}
                                        />

                                        <select
                                            value={customCur}
                                            onChange={(e) => setCustomCur(e.target.value)}
                                            style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '6px', padding: '4px 6px', color: '#fafafa', fontSize: '0.75rem', outline: 'none' }}
                                        >
                                            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>

                                        <button
                                            type="button"
                                            onClick={() => handleInjectForeignVariable(customOp, customAmount, customCur)}
                                            style={{ flex: 1, padding: '5px 10px', borderRadius: '6px', backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', fontSize: '0.7rem', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' }}
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
                                        style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: '800', fontFamily: "'JetBrains Mono', monospace" }}
                                    />
                                </div>
                            </div>

                            {/* Multi-Currency Pair Comparison Grid */}
                            <div style={{ backgroundColor: '#09090b', padding: '12px', borderRadius: '12px', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <span style={{ fontSize: '0.65rem', color: '#71717a', fontWeight: '700', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <Globe size={12} /> Live Pair Equivalents ({pairAmount} {pairFromCur}):
                                </span>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                                    {matrixCurrencies.filter(c => c !== pairFromCur).map(targetCur => {
                                        const val = getPairAmountEquivalent(targetCur);
                                        const isSelected = targetCur === pairToCur;
                                        return (
                                            <div
                                                key={targetCur}
                                                onClick={() => setPairToCur(targetCur)}
                                                style={{
                                                    backgroundColor: isSelected ? '#27272a' : '#121215',
                                                    border: isSelected ? '1px solid #3f3f46' : '1px solid #1c1c21',
                                                    borderRadius: '8px',
                                                    padding: '6px 8px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.15s ease'
                                                }}
                                            >
                                                <span style={{ fontSize: '0.65rem', color: isSelected ? '#ffffff' : '#a1a1aa', fontWeight: '800' }}>{targetCur}</span>
                                                <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: '700', fontFamily: "'JetBrains Mono', monospace" }}>{val}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Action Bar: Push to Calculator & Sync */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', width: '100%', marginTop: '2px' }}>
                                <button
                                    type="button"
                                    onClick={handlePushPairToCalc}
                                    style={{
                                        flex: 1,
                                        padding: '12px',
                                        backgroundColor: '#27272a',
                                        color: '#ffffff',
                                        border: '1px solid #3f3f46',
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
                                        gap: '6px',
                                        backgroundColor: '#18181b',
                                        color: '#ffffff',
                                        border: '1px solid #27272a'
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
                                    onClick={() => { setHistory([]); localStorage.removeItem(STORAGE_KEY_HIST); }}
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
                                            <span style={{ color: '#e4e4e7', fontWeight: '600' }}>{item.expr}</span> = <span style={{ color: '#ffffff', fontWeight: '700' }}>{item.result} {item.from}</span>
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
