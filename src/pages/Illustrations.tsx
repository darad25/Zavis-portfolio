import { motion } from 'framer-motion';
import { ILLUSTRATIONS } from '../data/illustrations';
import { IllustrationCard } from '../components/ui/IllustrationCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Illustrations() {
    return (
        <div className="section container">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', fontSize: '0.9rem' }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: 'var(--spacing-2xl)' }}
            >
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 'var(--spacing-md)' }}>Illustration Designs</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.1rem' }}>
                    A collection of digital art, vector illustrations, and experiments in visual storytelling.
                </p>
            </motion.div>

            <div className="grid grid-3">
                {ILLUSTRATIONS.map((illustration, index) => (
                    <IllustrationCard key={illustration.id} illustration={illustration} index={index} />
                ))}
            </div>
        </div>
    );
}
