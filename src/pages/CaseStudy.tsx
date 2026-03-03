import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { CaseStudyHeader } from '../components/case-study/CaseStudyHeader';
import { ProblemsSolved } from '../components/case-study/ProblemsSolved';
import { ScreensGallery } from '../components/case-study/ScreensGallery';
import { NextPrevProjectNav } from '../components/case-study/NextPrevProjectNav';
import { motion } from 'framer-motion';

export default function CaseStudy() {
    const { slug } = useParams();
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) return <Navigate to="/work" replace />;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <CaseStudyHeader project={project} />

            {/* Problem & Goals */}
            <section className="container section">
                <div className="grid grid-2">
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>The Problem</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{project.problem}</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>The Goals</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            {project.goals.map((goal, i) => (
                                <li key={i} style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    gap: 'var(--spacing-md)'
                                }}>
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>0{i + 1}.</span>
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Constraints & Decisions */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>Constraints</h3>
                            <div className="flex flex-col gap-sm">
                                {project.constraints.map((c, i) => (
                                    <p key={i} style={{ color: 'var(--text-secondary)' }}>• {c}</p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>Key UX Decisions</h3>
                            <div className="flex flex-col gap-sm">
                                {project.uxDecisions.map((d, i) => (
                                    <p key={i} style={{ color: 'var(--text-secondary)' }}>• {d}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProblemsSolved data={project.problemsSolved} />
            <ScreensGallery screens={project.screens} />

            {/* CTA Section */}
            <section className="container section" style={{ textAlign: 'center', background: 'var(--accent-soft)', borderRadius: 'var(--border-radius-lg)', marginBottom: 'var(--spacing-3xl)', padding: 'var(--spacing-2xl)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Want to see more?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>Check out the prototype or the live site.</p>
                <div className="flex gap-md justify-center">
                    {project.links.figma && (
                        <a href={project.links.figma} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Figma</a>
                    )}
                    {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Live Site</a>
                    )}
                </div>
            </section>

            <NextPrevProjectNav currentSlug={project.slug} />
        </motion.div>
    );
}
