import { type ReactNode } from 'react';
import FloatingHeartsBackground from './animations/FloatingHeartsBackground';
import AudioToggle from './AudioToggle';
import { AudioControllerProvider } from '../context/AudioControllerContext';

interface RomanticLayoutProps {
    children: ReactNode;
}

export default function RomanticLayout({ children }: RomanticLayoutProps) {
    const currentYear = new Date().getFullYear();
    const appIdentifier = encodeURIComponent(
        typeof window !== 'undefined' ? window.location.hostname : 'valentine-quiz'
    );

    return (
        <AudioControllerProvider>
            <div className="relative min-h-screen romantic-gradient overflow-hidden">
                <FloatingHeartsBackground />
                
                <div className="absolute top-4 right-4 z-50">
                    <AudioToggle />
                </div>

                <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
                    {children}
                </main>

                <footer className="relative z-10 py-6 text-center text-sm text-muted-foreground">
                    <p>
                        © {currentYear} · Built with{' '}
                        <span className="text-romantic-red inline-block animate-pulse-heart">❤️</span> using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </footer>
            </div>
        </AudioControllerProvider>
    );
}
