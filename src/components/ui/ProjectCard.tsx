import { motion } from 'framer-motion';
import type { Project } from '../../types/project';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hover-lift"
            style={{
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
            }}
        >
            <Link to={`/work/${project.slug}`} style={{ display: 'block' }}>
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        background: 'var(--bg-primary)',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                <div style={{ padding: 'var(--spacing-lg)' }}>
                    <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-xs)' }}>
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: 'var(--accent-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            {project.type}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{project.year}</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{project.title}</h3>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        {project.summary}
                    </p>

                    <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                        {project.tools.slice(0, 3).map(tool => (
                            <span key={tool} style={{
                                fontSize: '0.75rem',
                                padding: '2px 8px',
                                background: 'var(--bg-tertiary)',
                                borderRadius: 'var(--border-radius-sm)',
                                color: 'var(--text-secondary)'
                            }}>
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
