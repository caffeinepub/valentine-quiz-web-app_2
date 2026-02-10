import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface Particle {
    id: number;
    x: number;
    y: number;
    type: 'heart' | 'sparkle';
    delay: number;
    duration: number;
}

export default function FinalRomanticCelebration() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generatedParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: -10,
            type: i % 2 === 0 ? 'heart' : 'sparkle',
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 2
        }));
        setParticles(generatedParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute animate-confetti"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`
                    }}
                >
                    {particle.type === 'heart' ? (
                        <Heart className="w-6 h-6 text-romantic-red fill-romantic-red" />
                    ) : (
                        <Sparkles className="w-6 h-6 text-romantic-pink fill-romantic-pink" />
                    )}
                </div>
            ))}
        </div>
    );
}

