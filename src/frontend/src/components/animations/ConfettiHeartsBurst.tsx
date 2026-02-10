import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface Particle {
    id: number;
    x: number;
    y: number;
    rotation: number;
    delay: number;
}

export default function ConfettiHeartsBurst() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generatedParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            rotation: Math.random() * 360,
            delay: Math.random() * 0.2
        }));
        setParticles(generatedParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute animate-confetti"
                    style={{
                        animationDelay: `${particle.delay}s`,
                        transform: `translate(${particle.x}px, ${particle.y}px) rotate(${particle.rotation}deg)`
                    }}
                >
                    <Heart className="w-6 h-6 text-romantic-red fill-romantic-red" />
                </div>
            ))}
        </div>
    );
}

