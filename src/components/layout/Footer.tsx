import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-color)',
            padding: 'var(--spacing-3xl) 0',
            background: 'var(--bg-secondary)',
            marginTop: 'auto'
        }}>
            <div className="container grid grid-2">
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>Let's talk.</h3>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                        Open to new opportunities and interesting collaborations. Feel free to reach out anytime.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-lg)' }}>
                    <div className="flex gap-lg">
                        <a href="mailto:onaividebs.com" className="hover-lift" title="Email">
                            <Mail size={24} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover-lift" title="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/ozavize-onaivi-616333237?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover-lift" title="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://x.com/Vee_Zavis" target="_blank" rel="noopener noreferrer" className="hover-lift" title="X (Twitter)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                            </svg>
                        </a>
                    </div>

                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                        © {new Date().getFullYear()} All rights reserved. Built with Vite and React.
                    </p>
                </div>
            </div>
        </footer>
    );
};
