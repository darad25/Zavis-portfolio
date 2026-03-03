import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

export default function Resume() {
    const experience = [
        {
            company: 'Design Studio X',
            role: 'Senior Product Designer',
            period: '2022 — Present',
            desc: 'Leading design for fintech platforms and complex SaaS dashboards.'
        },
        {
            company: 'TechFlow Systems',
            role: 'UI Designer',
            period: '2019 — 2022',
            desc: 'Collaborated with engineering to build an internal logistics console.'
        },
        {
            company: 'Bright Ideas Agency',
            role: 'Junior Designer',
            period: '2017 — 2019',
            desc: 'Visual design for luxury e-commerce brands.'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container section"
            style={{ maxWidth: '800px' }}
        >
            <div className="flex justify-between items-end" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <div>
                    <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Resume</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>My professional journey and technical expertise.</p>
                </div>
                <Button variant="primary" as="a" href="/resume.pdf" download>
                    <Download size={18} /> Download PDF
                </Button>
            </div>

            <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <div className="flex items-center gap-md" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <Briefcase size={24} color="var(--accent-primary)" />
                    <h2 style={{ fontSize: '1.75rem' }}>Experience</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>
                    {experience.map((job, i) => (
                        <div key={i} style={{ position: 'relative', paddingLeft: 'var(--spacing-2xl)' }}>
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                top: 8,
                                bottom: -40,
                                width: 2,
                                background: i === experience.length - 1 ? 'linear-gradient(to bottom, var(--border-color), transparent)' : 'var(--border-color)'
                            }} />
                            <div style={{
                                position: 'absolute',
                                left: -4,
                                top: 8,
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                                border: '4px solid var(--bg-primary)'
                            }} />

                            <div className="flex justify-between items-start" style={{ marginBottom: '4px' }}>
                                <h3 style={{ fontSize: '1.25rem' }}>{job.role}</h3>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>{job.period}</span>
                            </div>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>{job.company}</p>
                            <p style={{ color: 'var(--text-secondary)' }}>{job.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)' }}>
                <div>
                    <div className="flex items-center gap-md" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <GraduationCap size={24} color="var(--accent-primary)" />
                        <h2 style={{ fontSize: '1.5rem' }}>Education</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                        <div>
                            <p style={{ fontWeight: 600 }}>University of Design</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>BFA in Graphic Design, 2017</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xl)' }}>Skills</h2>
                    <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                        {['Visual Design', 'UX Research', 'Interaction Design', 'Storytelling', 'Frontend Dev', 'Design Systems'].map(skill => (
                            <span key={skill} style={{
                                padding: '4px 12px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--border-radius-sm)',
                                fontSize: '0.875rem'
                            }}>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
