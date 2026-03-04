import { ILLUSTRATIONS } from '../../data/illustrations';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NextPrevIllustrationNavProps {
    currentSlug: string;
}

export const NextPrevIllustrationNav = ({ currentSlug }: NextPrevIllustrationNavProps) => {
    const currentIndex = ILLUSTRATIONS.findIndex(p => p.slug === currentSlug);
    const prev = ILLUSTRATIONS[currentIndex - 1];
    const next = ILLUSTRATIONS[currentIndex + 1];

    if (!prev && !next) return null;

    return (
        <nav className="project-nav" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
            <div className="container project-nav-flex" style={{ minHeight: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--spacing-lg)', flexWrap: 'nowrap' }}>
                {prev && (
                    <div className="project-nav-item" style={{ flex: '0 1 auto' }}>
                        <Link to={`/illustrations/${prev.slug}`} className="flex items-center gap-sm project-nav-link" style={{
                            padding: 'var(--spacing-md) var(--spacing-lg)',
                            transition: 'var(--transition-normal)',
                            borderRadius: 'var(--border-radius-lg)',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-secondary)',
                            textDecoration: 'none'
                        }}>
                            <ChevronLeft size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                            <div style={{ textAlign: 'left' }}>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', display: 'block' }}>Previous</span>
                                <h4 style={{ fontSize: '0.9rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{prev.title}</h4>
                            </div>
                        </Link>
                    </div>
                )}
                {next && (
                    <div className="project-nav-item" style={{ flex: '0 1 auto' }}>
                        <Link to={`/illustrations/${next.slug}`} className="flex items-center gap-sm project-nav-link" style={{
                            padding: 'var(--spacing-md) var(--spacing-lg)',
                            transition: 'var(--transition-normal)',
                            borderRadius: 'var(--border-radius-lg)',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-secondary)',
                            textDecoration: 'none'
                        }}>
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', display: 'block' }}>Next</span>
                                <h4 style={{ fontSize: '0.9rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{next.title}</h4>
                            </div>
                            <ChevronRight size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                        </Link>
                    </div>
                )}
            </div>
            <style>{`
                .project-nav-link:hover {
                    background: var(--bg-tertiary) !important;
                    border-color: var(--accent-primary) !important;
                }
                @media (max-width: 480px) {
                    .project-nav-flex {
                        gap: var(--spacing-xs) !important;
                    }
                    .project-nav-link {
                        padding: var(--spacing-sm) var(--spacing-md) !important;
                    }
                    .project-nav-link h4 {
                        maxWidth: 80px !important;
                        fontSize: 0.8rem !important;
                    }
                }
            `}</style>
        </nav>
    );
};
