import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = 'hello@example.com';

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container section"
            style={{ textAlign: 'center', maxWidth: '600px', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-lg)' }}>Get in touch.</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-2xl)' }}>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div style={{
                background: 'var(--bg-secondary)',
                padding: 'var(--spacing-2xl)',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--border-color)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)' }}>Email Address</p>
                <div className="flex items-center justify-center gap-md">
                    <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>{email}</span>
                    <button
                        onClick={copyEmail}
                        style={{
                            padding: '8px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            color: copied ? '#10b981' : 'var(--text-primary)',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                </div>
            </div>

            <div className="flex justify-center gap-xl">
                {[
                    { icon: <Github />, label: 'GitHub', url: 'https://github.com' },
                    { icon: <Linkedin />, label: 'LinkedIn', url: 'https://linkedin.com' },
                    { icon: <Twitter />, label: 'Twitter', url: 'https://twitter.com' }
                ].map(social => (
                    <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover-lift"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
                    >
                        <div style={{ padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '50%' }}>
                            {social.icon}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{social.label}</span>
                    </a>
                ))}
            </div>
        </motion.div>
    );
}
