import { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { ILLUSTRATIONS } from '../../data/illustrations';
import { ProjectCard } from '../ui/ProjectCard';
import { IllustrationCard } from '../ui/IllustrationCard';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['Designs', 'Illustrations'];

export const WorkGallery = () => {
    const [activeCategory, setActiveCategory] = useState('Designs');

    const showProjects = activeCategory === 'Designs';
    const showIllustrations = activeCategory === 'Illustrations';

    return (
        <section className="section container">
            <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Selected Work</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
                    A collection of digital products and visual experiments I've worked on over the years.
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
                    {showProjects && PROJECTS.map(project => (
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

                    {showIllustrations && ILLUSTRATIONS.map((illustration, index) => (
                        <motion.div
                            layout
                            key={illustration.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <IllustrationCard illustration={illustration} index={index} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {(showProjects ? PROJECTS.length : 0) + (showIllustrations ? ILLUSTRATIONS.length : 0) === 0 && (
                <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl) 0' }}>
                    <p style={{ color: 'var(--text-tertiary)' }}>No projects found in this category yet.</p>
                </div>
            )}
        </section>
    );
};
