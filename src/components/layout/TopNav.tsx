import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
];

export const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--header-height)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
        }}>
            <div className="container flex justify-between items-center" style={{ width: '100%' }}>
                <Link to="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)',
                    letterSpacing: '4px',
                }}>
                    OZAVIZE DEBORAH ONAIVI PORTFOLIO
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: 'none', gap: 'var(--spacing-xl)', alignItems: 'center' }} className="desktop-only">
                    <div className="flex gap-lg">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    fontWeight: 500,
                                    fontSize: '1.1rem',
                                    color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                    position: 'relative'
                                }}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="active-nav"
                                        style={{
                                            position: 'absolute',
                                            bottom: -4,
                                            left: 0,
                                            right: 0,
                                            height: 2,
                                            background: 'var(--accent-primary)'
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-only flex items-center gap-md">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass"
                        style={{
                            position: 'absolute',
                            top: 'var(--header-height)',
                            left: 0,
                            right: 0,
                            padding: 'var(--spacing-lg)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-md)',
                            borderTop: 'none'
                        }}
                    >
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    padding: 'var(--spacing-sm) 0',
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .desktop-only { display: none !important; }
        .mobile-only { display: flex !important; }
        @media (min-width: 768px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>
        </nav>
    );
};
