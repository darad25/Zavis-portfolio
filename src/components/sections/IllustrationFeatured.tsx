import { ILLUSTRATIONS } from '../../data/illustrations';
import { IllustrationCard } from '../ui/IllustrationCard';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const IllustrationFeatured = () => {
    // Show top 3 illustrations
    const featuredIllustrations = ILLUSTRATIONS.slice(0, 3);

    return (
        <section className="section container">
            <div className="flex justify-between items-end" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>Illustration Designs</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Exploring visual storytelling through digital art and vector illustrations.</p>
                </div>
                <Link to="/illustrations" className="desktop-only">
                    <Button variant="outline">
                        View All Illustrations <ArrowRight size={18} />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-3">
                {featuredIllustrations.map((illustration, index) => (
                    <IllustrationCard key={illustration.id} illustration={illustration} index={index} />
                ))}
            </div>

            <div style={{ marginTop: 'var(--spacing-2xl)', textAlign: 'center' }} className="mobile-only">
                <Link to="/illustrations">
                    <Button variant="outline" style={{ width: '100%' }}>
                        View All Illustrations <ArrowRight size={18} />
                    </Button>
                </Link>
            </div>
        </section>
    );
};
