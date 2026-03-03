import type { ReactNode } from 'react';
import { TopNav } from './TopNav';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

interface AppShellProps {
    children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <TopNav />
            <motion.main
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    flex: 1,
                    paddingTop: 'var(--header-height)',
                }}
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};
