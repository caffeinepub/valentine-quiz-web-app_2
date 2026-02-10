import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { useAudioControllerContext } from '../../context/AudioControllerContext';

interface ValentineProposalScreenProps {
    onYesClick?: () => void;
}

export default function ValentineProposalScreen({ onYesClick }: ValentineProposalScreenProps) {
    const [confirmed, setConfirmed] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const noButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { playHarpSound } = useAudioControllerContext();

    const moveNoButton = () => {
        if (!containerRef.current || !noButtonRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const button = noButtonRef.current.getBoundingClientRect();

        // Calculate safe boundaries (keep button within container with padding)
        const padding = 20;
        const maxX = container.width - button.width - padding * 2;
        const maxY = container.height - button.height - padding * 2;

        // Generate random position
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        setNoButtonPosition({ x: newX, y: newY });
    };

    const handleYesClick = () => {
        playHarpSound();
        setConfirmed(true);
        if (onYesClick) {
            onYesClick();
        }
    };

    // Reset position when component mounts
    useEffect(() => {
        setNoButtonPosition({ x: 0, y: 0 });
    }, []);

    if (confirmed) {
        return (
            <div className="w-full max-w-2xl mx-auto px-4">
                <Card className="bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-romantic-lg">
                    <CardContent className="p-8 md:p-12 text-center space-y-6">
                        <div className="flex justify-center">
                            <Heart className="w-20 h-20 text-romantic-red fill-romantic-red animate-pulse-heart" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-romantic-red">
                            Good choice
                        </h1>
                        <div className="rounded-2xl overflow-hidden shadow-romantic-lg">
                            <img
                                src="/assets/generated/valentine-good-choice-meme.dim_1200x800.png"
                                alt="Good choice meme"
                                className="w-full h-auto"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-4" ref={containerRef}>
            <Card className="bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-romantic-lg">
                <CardContent className="p-8 md:p-12 text-center space-y-8">
                    <div className="flex justify-center">
                        <Heart className="w-16 h-16 md:w-20 md:h-20 text-romantic-pink fill-romantic-pink animate-pulse-heart" />
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold text-romantic-red leading-tight">
                        Will you be my Valentine? 💖
                    </h1>
                    
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Choose wisely... 😊
                    </p>

                    <div className="relative min-h-[200px] md:min-h-[250px] flex items-center justify-center">
                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                            <Button
                                size="lg"
                                onClick={handleYesClick}
                                className="bg-romantic-pink hover:bg-romantic-pink/90 text-white text-xl md:text-2xl px-12 py-6 md:px-16 md:py-8 rounded-3xl shadow-romantic-lg hover:shadow-romantic transition-all duration-300 hover:scale-105 min-w-[140px] md:min-w-[180px]"
                            >
                                Yes! 💕
                            </Button>

                            <button
                                ref={noButtonRef}
                                onPointerEnter={moveNoButton}
                                onPointerDown={moveNoButton}
                                onTouchStart={moveNoButton}
                                className="absolute bg-muted hover:bg-muted text-muted-foreground text-xl md:text-2xl px-12 py-6 md:px-16 md:py-8 rounded-3xl shadow-lg transition-all duration-200 min-w-[140px] md:min-w-[180px] cursor-pointer"
                                style={{
                                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                                    transition: 'transform 0.3s ease-out',
                                }}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
