import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ILLUSTRATIONS } from '../data/illustrations';
import { ChevronLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const IllustrationDetail = () => {
    const { slug } = useParams();
    const illustration = ILLUSTRATIONS.find(p => p.slug === slug);

    if (!illustration) {
        return <Navigate to="/illustrations" replace />;
    }

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="section container"
            style={{ paddingTop: 'var(--spacing-3xl)' }}
        >
            {/* Header / Meta */}
            <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <Link to="/work" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    marginBottom: 'var(--spacing-xl)',
                    fontSize: '0.9rem',
                    transition: 'var(--transition-fast)'
                }} className="hover-primary">
                    <ChevronLeft size={16} /> Back to Work
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {illustration.title}
                </motion.h1>

                <div className="flex" style={{ flexWrap: 'wrap', gap: '2rem' }}>
                    <div className="flex" style={{ alignItems: 'center', color: 'var(--text-secondary)', gap: '0.4rem' }}>
                        <Tag size={16} />
                        <span style={{ fontSize: '0.9rem' }}>{illustration.category}</span>
                    </div>
                    <div className="flex" style={{ alignItems: 'center', color: 'var(--text-secondary)', gap: '0.4rem' }}>
                        <Calendar size={16} />
                        <span style={{ fontSize: '0.9rem' }}>{illustration.year}</span>
                    </div>
                </div>
            </div>

            {/* Main Hero Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    margin: '0 auto var(--spacing-3xl) auto',
                    borderRadius: 'var(--border-radius-xl)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)'
                }}
            >
                {illustration.image.toLowerCase().endsWith('.mp4') ? (
                    <video
                        src={illustration.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                ) : (
                    <img
                        src={illustration.image}
                        alt={illustration.title}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                )}
            </motion.div>

            {/* Insight Section */}
            {illustration.insight && (
                <section style={{ marginBottom: 'var(--spacing-4xl)' }}>
                    <h2>Artist Insight</h2>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                        whiteSpace: 'pre-line'
                    }}>
                        {illustration.insight}
                    </p>
                </section>
            )}

            {/* Process Gallery */}
            {illustration.process && illustration.process.length > 0 && (
                <section style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{
                        marginBottom: 'var(--spacing-lg)',
                        marginTop: 'var(--spacing-2xl)',
                        whiteSpace: 'pre-line'
                    }}>
                        Creative Process
                    </h2>
                    <div className="grid grid-2" style={{ gap: 'var(--spacing-xl)' }}>
                        {illustration.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ marginBottom: 'var(--spacing-xl)' }}
                            >
                                <div style={{
                                    borderRadius: 'var(--border-radius-lg)',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border-color)',
                                    marginBottom: 'var(--spacing-md)',
                                    background: 'var(--bg-secondary)',
                                    width: '100%'
                                }}>
                                    {step.src.toLowerCase().endsWith('.mp4') ? (
                                        <video
                                            src={step.src}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
                                        />
                                    ) : (
                                        <img
                                            src={step.src}
                                            alt={step.caption || `Process step ${index + 1}`}
                                            style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
                                        />
                                    )}
                                </div>
                                {step.caption && (
                                    <p style={{
                                        textAlign: 'center',
                                        color: 'var(--text-tertiary)',
                                        fontSize: '0.95rem',
                                        maxWidth: '600px',
                                        margin: '0 auto'
                                    }}>
                                        {step.caption}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Footer Navigation */}
            <div style={{
                marginTop: 'var(--spacing-4xl)',
                paddingTop: 'var(--spacing-2xl)',
                borderTop: '1px solid var(--border-color)',
                textAlign: 'center'
            }}>
                <Link to="/work">
                    <Button variant="outline">
                        Explore More Work
                    </Button>
                </Link>
            </div>
        </motion.main>
    );
};
