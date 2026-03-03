import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

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
                        <a href="https://x.com/Vee_Zavis" target="_blank" rel="noopener noreferrer" className="hover-lift" title="Twitter">
                            <Twitter size={24} />
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
