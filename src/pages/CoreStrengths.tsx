import { motion } from 'framer-motion';
import {
    Search, PenTool, Layout, Shield,
    Palette, ClipboardList, Brain, Layers, MonitorSmartphone,
    Zap, Activity, Accessibility, Ear, MessageSquare, Handshake
} from 'lucide-react';

export default function CoreStrengths() {
    const strengths = [
        {
            icon: <Palette size={32} />,
            title: 'UI Design Principles',
            description: 'Applying fundamental design theories in typography, color, and layout to create aesthetically pleasing interfaces.'
        },
        {
            icon: <Search size={32} />,
            title: 'UX Research',
            description: 'Conducting foundational research to understand user needs, mental models, and pain points.'
        },
        {
            icon: <ClipboardList size={32} />,
            title: 'User Research & Usability Testing',
            description: 'Planning and executing testing sessions to validate designs and observe real-world user interactions.'
        },
        {
            icon: <Layers size={32} />,
            title: 'Design Systems',
            description: 'Creating and maintaining scalable component libraries that ensure visual consistency across all platforms.'
        },
        {
            icon: <Layout size={32} />,
            title: 'Wireframing & Prototyping',
            description: 'Developing low and high-fidelity prototypes to visualize user flows and test complex interactions.'
        },
        {
            icon: <PenTool size={32} />,
            title: 'Illustration',
            description: 'Crafting custom digital illustrations and concept sketches that add personality and clarity to digital products.'
        },
        {
            icon: <MonitorSmartphone size={32} />,
            title: 'Responsive Web Design',
            description: 'Ensuring seamless user experiences across desktop, tablet, and mobile with adaptable layout strategies.'
        },
        {
            icon: <Zap size={32} />,
            title: 'Interaction Design',
            description: 'Focusing on micro-interactions that provide feedback and make the user experience feel alive and responsive.'
        },
        {
            icon: <Activity size={32} />,
            title: 'Framer Motion',
            description: 'Implementing advanced animations and transitions to create smooth, high-fidelity web experiences.'
        },
        {
            icon: <Accessibility size={32} />,
            title: 'Accessibility',
            description: 'Designing inclusive products that are usable by people with diverse range of abilities and hardware.'
        },
        {
            icon: <Shield size={32} />,
            title: 'Accessibility (WCAG)',
            description: 'Applying Web Content Accessibility Guidelines (WCAG) to ensure compliance and universal usability.'
        },
        {
            icon: <MessageSquare size={32} />,
            title: 'Communication & Collaboration',
            description: 'Effectively bridging the gap between design vision and technical execution through clear communication.'
        },
        {
            icon: <Ear size={32} />,
            title: 'Empathy & Active Listening',
            description: 'Deeply understanding stakeholder needs and user frustrations through focused, empathetic engagement.'
        },
        {
            icon: <Handshake size={32} />,
            title: 'Community Outreach & Support',
            description: 'Leveraging trauma emotional support experience to drive empathy-driven solutions and social impact.'
        },
        {
            icon: <Brain size={32} />,
            title: 'Emotional Intelligence',
            description: 'Applying psychological insights and empathy to bridge the gap between human behavior and digital interfaces.'
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container section"
        >
            <div style={{ marginBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-lg)' }}>Core Strengths</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                    A comprehensive overview of my technical skills and psychological approach to digital problem-solving.
                </p>
            </div>

            <div className="grid core-grid" style={{ marginTop: 'var(--spacing-4xl)' }}>
                {strengths.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass strength-card"
                        style={{
                            borderRadius: 'var(--border-radius-lg)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-sm)',
                            border: '1px solid var(--border-color)',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <div className="strength-icon" style={{ color: 'var(--accent-primary)', marginBottom: 'var(--spacing-xs)' }}>
                            {s.icon}
                        </div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{s.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>{s.description}</p>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .core-grid {
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--spacing-xl);
                }
                .strength-card {
                    padding: var(--spacing-xl);
                }
                @media (max-width: 1024px) {
                    .core-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 768px) {
                    h1 { font-size: 2.5rem !important; }
                    .core-grid { 
                        grid-template-columns: 1fr !important; 
                        gap: var(--spacing-md) !important;
                    }
                    .strength-card {
                        padding: var(--spacing-lg) !important;
                    }
                    .strength-icon svg {
                        width: 24px !important;
                        height: 24px !important;
                    }
                }
            `}</style>
        </motion.div>
    );
}
