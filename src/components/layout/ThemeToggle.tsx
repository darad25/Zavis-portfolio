import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            style={{
                position: 'relative',
                padding: '8px',
                borderRadius: 'var(--border-radius-md)',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                overflow: 'hidden',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};
