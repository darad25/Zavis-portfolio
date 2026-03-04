export const SkillsStrip = () => {
    const skills = [
        'UI Design principles', 'UX Research', 'User Research & Usability Testing', 'Emotional Intelligence', 'Design Systems', 'Wireframing & Prototyping', 'Illustration ( Digital & Concept Sketches)',
        'Responsive Web Design', 'Interaction Design (Micro interactions)', 'Framer Motion', 'Accessibility', 'Accessibility (WCAG)', 'Communication & Collaboration', 'Empathy & Active Listening', 'Emotional Intelligence', 'Community Outreach & Support'
    ];

    return (
        <section className="section core-content-section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            <div className="container">
                <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Core Strengths</h2>
                <div className="flex gap-md items-center justify-center" style={{ flexWrap: 'wrap' }}>
                    {skills.map(skill => (
                        <div
                            key={skill}
                            style={{
                                padding: 'var(--spacing-sm) var(--spacing-lg)',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--border-radius-full)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: 'var(--text-secondary)'
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .core-content-section { display: none !important; }
                }
            `}</style>
        </section>
    );
};
