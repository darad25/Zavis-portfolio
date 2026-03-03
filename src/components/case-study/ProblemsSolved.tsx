import type { Project } from '../../types/project';
import { User, Accessibility, CheckCircle } from 'lucide-react';

interface ProblemsSolvedProps {
    data: Project['problemsSolved'];
}

export const ProblemsSolved = ({ data }: ProblemsSolvedProps) => {
    const sections = [
        { title: 'UX Decisions', items: data.ux, icon: <User size={20} />, color: '#2563eb' },
        { title: 'Accessibility', items: data.accessibility, icon: <Accessibility size={20} />, color: '#10b981' },
        { title: 'Delivery', items: data.delivery, icon: <CheckCircle size={20} />, color: '#8b5cf6' }
    ];

    return (
        <section className="container section">
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-2xl)' }}>Problems Solved</h2>
            <div className="grid grid-3">
                {sections.map(section => (
                    <div key={section.title} style={{
                        padding: 'var(--spacing-xl)',
                        background: 'var(--bg-secondary)',
                        borderRadius: 'var(--border-radius-lg)',
                        border: '1px solid var(--border-color)'
                    }}>
                        <div style={{
                            width: 40,
                            height: 40,
                            borderRadius: 'var(--border-radius-md)',
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: section.color,
                            marginBottom: 'var(--spacing-md)',
                            border: '1px solid var(--border-color)'
                        }}>
                            {section.icon}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>{section.title}</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            {section.items.map((item, i) => (
                                <li key={i} style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    gap: 'var(--spacing-sm)'
                                }}>
                                    <span style={{ color: section.color }}>•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
