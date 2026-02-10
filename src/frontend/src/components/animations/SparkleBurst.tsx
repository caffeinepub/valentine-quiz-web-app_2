import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Sparkle {
    id: number;
    x: number;
    y: number;
    delay: number;
    scale: number;
}

export default function SparkleBurst() {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        const generatedSparkles: Sparkle[] = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 300,
            delay: Math.random() * 0.3,
            scale: 0.5 + Math.random() * 0.5
        }));
        setSparkles(generatedSparkles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="absolute animate-sparkle"
                    style={{
                        animationDelay: `${sparkle.delay}s`,
                        transform: `translate(${sparkle.x}px, ${sparkle.y}px) scale(${sparkle.scale})`
                    }}
                >
                    <Sparkles className="w-8 h-8 text-romantic-pink fill-romantic-pink" />
                </div>
            ))}
        </div>
    );
}

