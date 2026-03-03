export const SkillsStrip = () => {
    const skills = [
        'UI Design', 'UX Research', 'Design Systems', 'Prototyping', 'Illustration',
        'Responsive Web Design', 'Interaction Design (Micro interactions)', 'Framer Motion', 'Accessibility', 'Accessibility (WCAG)'
    ];

    return (
        <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
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
        </section>
    );
};
