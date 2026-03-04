import type { Project } from '../../types/project';
import { motion } from 'framer-motion';

interface CaseStudyHeaderProps {
    project: Project;
}

export const CaseStudyHeader = ({ project }: CaseStudyHeaderProps) => {
    return (
        <header className="container section" style={{ paddingTop: 'var(--spacing-3xl)' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <span style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        {project.type} • {project.year}
                    </span>
                    <h1>{project.title}</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        {project.summary}
                    </p>
                </div>

                <div className="grid grid-3" style={{
                    background: 'var(--bg-secondary)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--border-radius-lg)',
                    border: '1px solid var(--border-color)',
                    marginTop: 'var(--spacing-2xl)'
                }}>
                    <div>
                        <h4 style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)' }}>My Role</h4>
                        <p style={{ fontWeight: 500 }}>{project.role}</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)' }}>Timeline</h4>
                        <p style={{ fontWeight: 500 }}>{project.timeline}</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)' }}>Tools</h4>
                        <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                            {project.tools.map(tool => (
                                <span key={tool} style={{
                                    fontSize: '0.85rem',
                                    background: 'var(--bg-tertiary)',
                                    padding: '2px 8px',
                                    borderRadius: 'var(--border-radius-sm)'
                                }}>{tool}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </header>
    );
};
