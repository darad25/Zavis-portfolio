import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FeaturedWork = () => {
    const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 4);

    return (
        <section className="section container featured-section">
            <style>{`
                @media (max-width: 768px) {
                    .featured-section {
                        padding-top: 40px !important;
                    }
                }
            `}</style>
            <div className="flex justify-between items-end" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>Featured Work</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Selected projects that showcase my approach to solving complex problems.</p>
                </div>
                <Link to="/work" className="desktop-only">
                    <Button variant="outline">
                        View All Projects <ArrowRight size={18} />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-2">
                {featuredProjects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

            <div style={{ marginTop: 'var(--spacing-2xl)', textAlign: 'center' }} className="mobile-only">
                <Link to="/work">
                    <Button variant="outline" style={{ width: '100%' }}>
                        View All Projects <ArrowRight size={18} />
                    </Button>
                </Link>
            </div>
        </section>
    );
};
