import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';
import { CURRENCY_INFO } from './currencies';

export const CustomDropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOptions = options.filter(opt => {
        const info = CURRENCY_INFO[opt] || { name: opt, symbol: opt };
        const query = search.toLowerCase();
        return opt.toLowerCase().includes(query) || info.name.toLowerCase().includes(query);
    });

    const selectedInfo = CURRENCY_INFO[value] || { name: value, symbol: value };
    const countryCode = value === 'EUR' ? 'EU' : (value === 'BTC' ? '⚡' : value.substring(0, 2));

    return (
        <div 
            className="custom-dropdown" 
            ref={dropdownRef}
            style={{ position: 'relative', width: 'auto', flexShrink: 0 }}
        >
            <button 
                type="button"
                className="dropdown-trigger" 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    color: '#fafafa',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    margin: 0
                }}
            >
                {/* Sleek Minimalist ISO Country Badge */}
                <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #27272a 0%, #18181b 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: '800',
                    color: '#a1a1aa',
                    letterSpacing: '0.5px',
                    flexShrink: 0
                }}>
                    {countryCode}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', minWidth: '0' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fafafa', lineHeight: 1 }}>
                        {value}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#71717a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '65px', marginTop: '2px' }}>
                        {selectedInfo.name}
                    </span>
                </div>

                <span style={{ fontSize: '0.8rem', color: '#a1a1aa', fontWeight: '600', marginLeft: '2px' }}>
                    {selectedInfo.symbol}
                </span>

                <ChevronDown size={14} style={{ color: '#71717a', transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none', marginLeft: '2px', flexShrink: 0 }} />
            </button>
            
            {isOpen && (
                <div 
                    className="dropdown-menu-override"
                    style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        width: '260px',
                        background: '#121215',
                        border: '1px solid #27272a',
                        borderRadius: '10px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        zIndex: 999999,
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ padding: '8px', borderBottom: '1px solid #1c1c21', position: 'relative' }}>
                        <Search size={14} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#71717a' }} />
                        <input 
                            type="text" 
                            placeholder="Search currency..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                            style={{
                                width: '100%',
                                background: '#09090b',
                                border: '1px solid #27272a',
                                borderRadius: '6px',
                                padding: '6px 8px 6px 30px',
                                color: '#fafafa',
                                outline: 'none',
                                fontSize: '0.8rem',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <ul style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: '4px 0',
                        maxHeight: '260px',
                        overflowY: 'auto'
                    }}>
                        {filteredOptions.length > 0 ? filteredOptions.map(opt => {
                            const info = CURRENCY_INFO[opt] || { name: opt, symbol: opt };
                            const code = opt === 'EUR' ? 'EU' : (opt === 'BTC' ? '⚡' : opt.substring(0, 2));
                            const isSelected = opt === value;
                            return (
                                <li 
                                    key={opt} 
                                    onClick={() => {
                                        onChange(opt);
                                        setIsOpen(false);
                                        setSearch('');
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '8px 12px',
                                        cursor: 'pointer',
                                        background: isSelected ? 'rgba(168, 85, 247, 0.15)' : 'transparent',
                                        borderLeft: isSelected ? '2px solid #a855f7' : '2px solid transparent',
                                        transition: 'all 0.15s ease'
                                    }}
                                    onMouseEnter={e => !isSelected && (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
                                    onMouseLeave={e => !isSelected && (e.currentTarget.style.background = 'transparent')}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{
                                            width: '22px',
                                            height: '22px',
                                            borderRadius: '5px',
                                            background: isSelected ? '#a855f7' : '#1c1c21',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '9px',
                                            fontWeight: '800',
                                            color: isSelected ? '#ffffff' : '#9ca3af'
                                        }}>
                                            {code}
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: 600, color: isSelected ? '#ffffff' : '#e4e4e7', fontSize: '0.85rem' }}>{opt}</span>
                                            <span style={{ fontSize: '0.65rem', color: '#71717a' }}>{info.name}</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ fontWeight: 500, color: '#71717a', fontSize: '0.75rem', background: '#18181b', padding: '2px 5px', borderRadius: '4px' }}>
                                            {info.symbol}
                                        </span>
                                        {isSelected && <Check size={14} color="#a855f7" />}
                                    </div>
                                </li>
                            );
                        }) : (
                            <li style={{ padding: '16px', textAlign: 'center', color: '#71717a', fontSize: '0.8rem' }}>No matching currency</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};
