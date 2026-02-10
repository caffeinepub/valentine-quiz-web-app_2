import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
}

export default function FloatingHeartsBackground() {
    const [hearts, setHearts] = useState<FloatingHeart[]>([]);

    useEffect(() => {
        const generatedHearts: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 8 + Math.random() * 4,
            size: 20 + Math.random() * 20
        }));
        setHearts(generatedHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute animate-float-slow opacity-20"
                    style={{
                        left: `${heart.left}%`,
                        bottom: '-50px',
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`
                    }}
                >
                    <Heart
                        className="text-romantic-pink fill-romantic-pink"
                        style={{ width: heart.size, height: heart.size }}
                    />
                </div>
            ))}
        </div>
    );
}

