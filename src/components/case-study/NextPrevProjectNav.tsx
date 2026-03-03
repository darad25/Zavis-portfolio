import { PROJECTS } from '../../data/projects';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NextPrevProjectNavProps {
    currentSlug: string;
}

export const NextPrevProjectNav = ({ currentSlug }: NextPrevProjectNavProps) => {
    const currentIndex = PROJECTS.findIndex(p => p.slug === currentSlug);
    const prev = PROJECTS[currentIndex - 1];
    const next = PROJECTS[currentIndex + 1];

    return (
        <nav style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '150px' }}>
                <div style={{ borderRight: '1px solid var(--border-color)', display: 'flex' }}>
                    {prev && (
                        <Link to={`/work/${prev.slug}`} className="flex items-center gap-md" style={{
                            padding: 'var(--spacing-xl)',
                            width: '100%',
                            transition: 'var(--transition-normal)'
                        }}>
                            <ChevronLeft size={32} style={{ color: 'var(--accent-primary)' }} />
                            <div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Previous</span>
                                <h4 style={{ fontSize: '1.1rem' }}>{prev.title}</h4>
                            </div>
                        </Link>
                    )}
                </div>
                <div style={{ display: 'flex' }}>
                    {next && (
                        <Link to={`/work/${next.slug}`} className="flex items-center justify-end gap-md" style={{
                            padding: 'var(--spacing-xl)',
                            width: '100%',
                            textAlign: 'right',
                            transition: 'var(--transition-normal)'
                        }}>
                            <div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Next</span>
                                <h4 style={{ fontSize: '1.1rem' }}>{next.title}</h4>
                            </div>
                            <ChevronRight size={32} style={{ color: 'var(--accent-primary)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};
