import React, { useState, useEffect, useRef } from 'react';
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
        const info = CURRENCY_INFO[opt] || { name: opt, symbol: opt, flag: '🌍' };
        const query = search.toLowerCase();
        return opt.toLowerCase().includes(query) || info.name.toLowerCase().includes(query);
    });

    const selectedInfo = CURRENCY_INFO[value] || { name: value, symbol: value, flag: '🌍' };

    return (
        <div 
            className="custom-dropdown" 
            ref={dropdownRef}
            style={{ position: 'relative', width: '140px', flexShrink: 0 }}
        >
            <div 
                className="dropdown-trigger" 
                onClick={() => setIsOpen(!isOpen)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', cursor: 'pointer', height: '100%' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.05rem', color: '#fafafa' }}>{selectedInfo.flag} {value}</span>
                    <span style={{ fontSize: '0.65rem', color: '#a1a1aa', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '70px', marginTop: '2px' }}>{selectedInfo.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 500, color: '#71717a' }}>{selectedInfo.symbol}</span>
                    <svg style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none', color: '#52525b' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
            
            {isOpen && (
                <div 
                    className="dropdown-menu-override"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '280px',
                        background: '#18181b', // Zinc 900
                        border: '1px solid #3f3f46', // Zinc 700
                        borderRadius: '10px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
                        zIndex: 999999,
                        marginTop: '8px',
                        display: 'block' // Fix Safari flex bugs!
                    }}
                >
                    <div style={{ padding: '8px', borderBottom: '1px solid #27272a' }}>
                        <input 
                            type="text" 
                            placeholder="Search currency..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                            style={{
                                width: '100%',
                                background: '#09090b',
                                border: '1px solid #3f3f46',
                                borderRadius: '6px',
                                padding: '8px 10px',
                                color: '#fafafa',
                                outline: 'none',
                                fontSize: '0.85rem',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <ul style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        maxHeight: '300px',
                        overflowY: 'auto',
                        display: 'block' // Bulletproof
                    }}>
                        {filteredOptions.length > 0 ? filteredOptions.map(opt => {
                            const info = CURRENCY_INFO[opt] || { name: opt, symbol: opt, flag: '🌍' };
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
                                        padding: '10px 16px',
                                        cursor: 'pointer',
                                        background: opt === value ? '#27272a' : 'transparent',
                                        borderBottom: '1px solid #27272a'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#27272a'}
                                    onMouseLeave={e => e.currentTarget.style.background = opt === value ? '#27272a' : 'transparent'}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: 600, color: '#fafafa', fontSize: '0.95rem' }}>{info.flag} {opt}</span>
                                        <span style={{ fontSize: '0.7rem', color: '#a1a1aa' }}>{info.name}</span>
                                    </div>
                                    <span style={{ fontWeight: 500, color: '#a1a1aa', fontSize: '0.8rem', background: '#27272a', padding: '2px 6px', borderRadius: '4px' }}>{info.symbol}</span>
                                </li>
                            );
                        }) : (
                            <li style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>No results found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};
