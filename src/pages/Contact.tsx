import { motion } from 'framer-motion';
import { Github, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = 'onaividebs@gmail.com';

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
            style={{ textAlign: 'center', maxWidth: '600px', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}
        >
            <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-lg)' }}>Get in touch.</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-2xl)' }}>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div style={{
                background: 'var(--bg-secondary)',
                padding: 'var(--spacing-xl) var(--spacing-lg)',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--border-color)',
                width: '100%',
                maxWidth: '450px',
                margin: '0 auto var(--spacing-xl)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: 'var(--spacing-md)', letterSpacing: '0.05em' }}>Email Address</p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-md)',
                    width: '100%',
                    flexWrap: 'wrap'
                }}>
                    <span style={{
                        fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        wordBreak: 'break-all'
                    }}>{email}</span>
                    <button
                        onClick={copyEmail}
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            color: copied ? '#10b981' : 'var(--text-primary)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'all 0.2s ease'
                        }}
                        aria-label="Copy email address"
                    >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                </div>
            </div>

            <div className="flex justify-center flex-wrap" style={{ gap: 'clamp(1rem, 5vw, 3rem)' }}>
                {[
                    { icon: <Github />, label: 'GitHub', url: 'https://github.com' },
                    { icon: <Linkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/ozavize-onaivi-616333237?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
                    {
                        icon: (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                            </svg>
                        ),
                        label: 'X',
                        url: 'https://x.com/Vee_Zavis'
                    }
                ].map(social => (
                    <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover-lift"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '50%'
                        }}>
                            {social.icon}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{social.label}</span>
                    </a>
                ))}
            </div>
        </motion.div>
    );
}
