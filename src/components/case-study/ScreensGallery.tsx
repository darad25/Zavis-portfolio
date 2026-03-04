import type { Project } from '../../types/project';
import { motion } from 'framer-motion';

interface ScreensGalleryProps {
    screens: Project['screens'];
}

export const ScreensGallery = ({ screens }: ScreensGalleryProps) => {
    return (
        <section className="container section">
            <h2>Key Screens</h2>
            <div className="grid">
                {screens.map((screen, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{ marginBottom: 'var(--spacing-2xl)' }}
                    >
                        <div style={{
                            borderRadius: 'var(--border-radius-lg)',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            <img
                                src={screen.src}
                                alt={screen.alt}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                        {screen.caption && (
                            <p style={{
                                marginTop: 'var(--spacing-md)',
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                textAlign: 'center',
                                fontStyle: 'italic'
                            }}>
                                {screen.caption}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
