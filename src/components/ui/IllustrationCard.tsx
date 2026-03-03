import { motion } from 'framer-motion';
import type { Illustration } from '../../types/illustration';

interface IllustrationCardProps {
    illustration: Illustration;
    index: number;
}

export const IllustrationCard = ({ illustration, index }: IllustrationCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="hover-lift"
            style={{
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
            }}
        >
            <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                <img
                    src={illustration.image}
                    alt={illustration.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xs)' }}>
                    <span style={{
                        fontSize: '0.7rem',
                        color: 'var(--accent-primary)',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                    }}>
                        {illustration.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{illustration.year}</span>
                </div>
                <h3 style={{ fontSize: '1rem' }}>{illustration.title}</h3>
                {illustration.description && (
                    <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        marginTop: 'var(--spacing-xs)',
                        lineHeight: 1.4
                    }}>
                        {illustration.description}
                    </p>
                )}
            </div>
        </motion.div>
    );
};
