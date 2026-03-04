import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

export default function Resume() {
    const skills = [
        'Emotional Intelligence', 'Communication & Collaboration', 'Empathy & Active Listening',
        'UI/UX Design Principles', 'Figma', 'Illustration (Digital & Concept Sketches)',
        'Wireframing & Prototyping', 'User Research & Usability Testing', 'Community Outreach & Support'
    ];

    const professionalExperience = [
        {
            company: 'Dev and Design',
            role: 'Illustrator',
            period: 'October 2025 - November 2025',
            items: [
                'Developed basic conceptual sketches to support UI layouts and digital storytelling.',
                'Designed custom illustrations and silhouettes for client projects, including brand visuals and digital storytelling assets.'
            ]
        },
        {
            company: 'Living Vines Mental Health Organization, Lagos',
            role: 'Assistant Psychologist (Volunteer)',
            period: 'January 2024 – Present',
            items: [
                'Provide emotional support to individuals experiencing stress, anxiety, or emotional difficulties through listening, encouragement, and supportive conversations.',
                'Participate in mental health outreach programs, school visits, and community campaigns to “preach the word of mental health” and reduce stigma.',
                'Assist senior psychologists during counselling related activities and follow ups, under supervision.',
                'Help organize and support psychoeducational sessions on topics such as emotional regulation, stress management, and self-care.',
                'Contribute to planning and coordination of outreach events, including logistics, communication, and engagement with participants.'
            ]
        },
        {
            company: 'Product Design University (PDU) Africa',
            role: 'Junior Designer',
            period: 'August 2024 – January 2025',
            items: [
                'Conducted user research through feedback collection, surveys, and usability observations to understand user needs and identify pain points.',
                'Created structured wireframes and user flows that translated ideas into clear and intuitive user experiences.',
                'Designed clean, user-centered interface screens and visual elements using Figma.',
                'Built interactive prototypes to demonstrate functionality and gather feedback from the design team and stakeholders.',
                'Collaborated with senior designers and developers to ensure accurate implementation of UI components and interaction patterns.'
            ]
        }
    ];

    const education = [
        {
            school: 'University of Lagos, Nigeria',
            degree: 'Bachelor of Science (B.Sc.) – Psychology',
            period: '2021 – 2025'
        }
    ];

    const certifications = [
        { title: 'Illustration', school: 'Dev and Design', date: 'Nov, 2025' },
        { title: 'UI/UX Design', school: 'PDU Africa', date: 'Jan, 2025' },
        { title: 'Introduction to UI/UX', school: 'PDU Bootcamp', date: 'Sep, 2025' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container section"
            style={{ maxWidth: '900px' }}
        >
            <div style={{ marginBottom: 'var(--spacing-4xl)' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Resume</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: 'var(--spacing-2xl)' }}>
                    A psychology graduate with a unique blend of emotional intelligence and creative problem solving skills, bridging the gap between human behavior and digital experiences.
                </p>
            </div>

            {/* Experience Section */}
            <div style={{ marginBottom: 'var(--spacing-4xl)' }}>
                <div className="resume-section-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                    <Briefcase size={28} color="var(--accent-primary)" />
                    <h2 style={{ fontSize: '2rem', margin: 0 }}>Professional Experience</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3xl)' }}>
                    {professionalExperience.map((job, i) => (
                        <div key={i} style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: 'var(--spacing-lg)', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                left: `-9px`,
                                top: '0',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: 'var(--bg-primary)',
                                border: '3px solid var(--accent-primary)'
                            }} />

                            <div className="flex justify-between items-start" style={{ flexWrap: 'wrap', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{job.role}</h3>
                                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', fontWeight: 500 }}>{job.period}</span>
                            </div>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>{job.company}</p>

                            <ul className="resume-list" style={{ paddingLeft: '2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                {job.items.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: 'var(--spacing-xs)' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="resume-grid" style={{ display: 'grid', alignItems: 'start' }}>
                {/* Left Column: Skills & Education */}
                <div>
                    <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                            <Heart size={24} color="var(--accent-primary)" />
                            <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Skills</h2>
                        </div>
                        <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                            {skills.map(skill => (
                                <span key={skill} style={{
                                    padding: '6px 14px',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: 'var(--border-radius-md)',
                                    fontSize: '0.9rem'
                                }}>{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                            <GraduationCap size={24} color="var(--accent-primary)" />
                            <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Education</h2>
                        </div>
                        {education.map((edu, i) => (
                            <div key={i}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{edu.school}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{edu.degree}</p>
                                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>{edu.period}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Certifications */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                        <Award size={24} color="var(--accent-primary)" />
                        <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Certifications</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                        {certifications.map((cert, i) => (
                            <div key={i} style={{ padding: 'var(--spacing-md)', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-color)' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{cert.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{cert.school}</p>
                                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                .resume-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: var(--spacing-4xl);
                    column-gap: 5rem;
                    margin-top: 5rem;
                }
                @media (max-width: 768px) {
                    .resume-grid {
                        grid-template-columns: 1fr;
                        gap: var(--spacing-2xl);
                        margin-top: var(--spacing-2xl);
                    }
                    .resume-section-header h2 {
                        font-size: 1.5rem !important;
                    }
                    .resume-list {
                        padding-left: 1.25rem !important;
                    }
                }
            `}</style>
        </motion.div>
    );
}
