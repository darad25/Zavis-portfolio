import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

export default function About() {
    const tools = [
        { name: 'Figma', category: 'Design' },
        { name: 'React', category: 'Development' },
        { name: 'TypeScript', category: 'Development' },
        { name: 'Framer Motion', category: 'Animation' },
        { name: 'Dovetail', category: 'Research' },
        { name: 'Storybook', category: 'Testing' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container section"
        >
            <div className="grid grid-2" style={{ alignItems: 'center', marginBottom: 'var(--spacing-3xl)' }}>
                <div>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-lg)' }}>Designing for impact.</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        <p>
                            I'm Jane Doe, a multidisciplinary designer and front-end enthusiast based in New York. With over 6 years of experience, I specialize in creating intuitive interfaces for complex systems.
                        </p>
                        <p>
                            My approach blends rigorous UX research with high-fidelity UI design, ensuring that every pixel serves a purpose. I believe that good design is invisible—it should empower users without getting in their way.
                        </p>
                        <p>
                            When I'm not pushing pixels, you can find me exploring local coffee shops or experimenting with generative art.
                        </p>
                    </div>
                </div>
                <div style={{ padding: 'var(--spacing-xl)' }}>
                    <div style={{
                        aspectRatio: '1/1',
                        borderRadius: 'var(--border-radius-lg)',
                        overflow: 'hidden',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                            alt="Jane Doe"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-2" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)' }}>My Workflow</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                        {[
                            { title: '01. Discover & Define', desc: 'Understanding the problem through stakeholder interviews and user research.' },
                            { title: '02. Ideate & Wireframe', desc: 'Rapidly iterating on solutions and exploring information architecture.' },
                            { title: '03. Design & Prototype', desc: 'Crafting high-fidelity components and interactive flows.' },
                            { title: '04. Test & Refine', desc: 'Validating assumptions through usability testing and feedback loops.' }
                        ].map(step => (
                            <div key={step.title}>
                                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>{step.title}</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-2xl)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-color)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-lg)' }}>Tools I Love</h2>
                    <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                        {tools.map(tool => (
                            <div key={tool.name} style={{
                                padding: 'var(--spacing-md)',
                                background: 'var(--bg-primary)',
                                borderRadius: 'var(--border-radius-md)',
                                border: '1px solid var(--border-color)'
                            }}>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>{tool.category}</span>
                                <p style={{ fontWeight: 600 }}>{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl) 0', borderTop: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Let's build something together.</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', fontSize: '1.2rem' }}>Currently open to freelance projects and full-time opportunities.</p>
                <div className="flex gap-lg justify-center">
                    <Link to="/contact">
                        <Button variant="primary">Get in Touch <ArrowRight size={18} /></Button>
                    </Link>
                    <a href="mailto:hello@example.com">
                        <Button variant="outline"><Mail size={18} /> Email Me</Button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
