import { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'UI Design', 'Mobile', 'Dashboard', 'E-commerce', 'Research'];

export const WorkGallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = PROJECTS.filter(project => {
        if (activeCategory === 'All') return true;
        return project.type.includes(activeCategory);
    });

    return (
        <section className="section container">
            <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Selected Work</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
                    A collection of digital products and experiments I've worked on over the years.
                </p>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-sm no-scrollbar" style={{
                marginBottom: 'var(--spacing-2xl)',
                overflowX: 'auto',
                paddingBottom: 'var(--spacing-sm)',
                WebkitOverflowScrolling: 'touch'
            }}>
                {CATEGORIES.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        style={{
                            padding: 'var(--spacing-sm) var(--spacing-lg)',
                            borderRadius: 'var(--border-radius-full)',
                            background: activeCategory === category ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                            color: activeCategory === category ? '#ffffff' : 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            transition: 'var(--transition-fast)'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-2"
                style={{ minHeight: '400px' }}
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map(project => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl) 0' }}>
                    <p style={{ color: 'var(--text-tertiary)' }}>No projects found in this category yet.</p>
                </div>
            )}
        </section>
    );
};
