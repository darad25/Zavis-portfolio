import type { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    as?: 'button' | 'a';
    href?: string;
    download?: boolean;
    style?: CSSProperties;
}

export const Button = ({ children, variant = 'primary', onClick, as = 'button', href, download, style }: ButtonProps) => {
    const baseStyles: CSSProperties = {
        padding: 'var(--spacing-sm) var(--spacing-xl)',
        borderRadius: 'var(--border-radius-full)',
        fontWeight: 600,
        fontSize: '0.95rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-sm)',
        transition: 'var(--transition-fast)',
        border: 'none',
        textDecoration: 'none',
        cursor: 'pointer'
    };

    const variantStyles: CSSProperties = {};
    if (variant === 'primary') {
        variantStyles.background = 'var(--accent-primary)';
        variantStyles.color = '#ffffff';
    } else if (variant === 'secondary') {
        variantStyles.background = 'var(--bg-tertiary)';
        variantStyles.color = 'var(--text-primary)';
    } else if (variant === 'outline') {
        variantStyles.background = 'transparent';
        variantStyles.color = 'var(--text-primary)';
        variantStyles.border = '2px solid var(--border-color)';
    }

    const combinedStyles = { ...baseStyles, ...variantStyles, ...style };

    if (as === 'a') {
        return (
            <motion.a
                href={href}
                download={download}
                onClick={onClick}
                style={combinedStyles}
                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.98 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type="button"
            onClick={onClick}
            style={combinedStyles}
            whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    );
};
