import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className="section container hero-section" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: 'var(--spacing-3xl)',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span style={{
                    fontSize: '1.9rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginBottom: 'var(--spacing-sm)',
                    display: 'block',
                }}>
                    Hi, I'm Ozavize,
                </span>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    lineHeight: 1.1,
                    maxWidth: '800px',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    I build digital products with <span style={{ color: 'var(--accent-primary)' }}>purpose</span> and precision.
                </h1>
                <p style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    marginBottom: 'var(--spacing-2xl)'
                }}>
                    UI/UX Designer specializing in complex systems, data rich dashboards and premium e-commerce experiences.
                </p>

                <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
                    <Link to="/work">
                        <Button variant="primary">
                            View My Work <ChevronRight size={18} />
                        </Button>
                    </Link>
                    <Button variant="outline" as="a" href="/resume.pdf" download>
                        Download CV <FileText size={18} />
                    </Button>
                </div>
            </motion.div>
            <style>{`
                @media (max-width: 768px) {
                    .hero-section {
                        min-height: 50vh !important;
                        justify-content: flex-start !important;
                        padding-top: var(--spacing-xl) !important;
                        padding-bottom: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
};
