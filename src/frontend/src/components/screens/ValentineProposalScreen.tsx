import { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import ShareButton from '../ShareButton';

interface ValentineProposalScreenProps {
    onYesClick: () => void;
    showSuccess: boolean;
}

export default function ValentineProposalScreen({ onYesClick, showSuccess }: ValentineProposalScreenProps) {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);
    const noButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const moveNoButton = () => {
        if (!containerRef.current || !noButtonRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const button = noButtonRef.current.getBoundingClientRect();

        // Calculate safe boundaries (keep button within container)
        const maxX = container.width - button.width - 40;
        const maxY = container.height - button.height - 40;

        // Generate random position
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        setNoButtonPosition({ x: newX, y: newY });
        setIsNoButtonMoving(true);
    };

    // Handle both hover and touch events for iPad compatibility
    const handleNoInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        moveNoButton();
    };

    useEffect(() => {
        if (isNoButtonMoving) {
            const timer = setTimeout(() => setIsNoButtonMoving(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isNoButtonMoving]);

    if (showSuccess) {
        return (
            <div className="w-full max-w-2xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
                <div className="space-y-4">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-romantic-red animate-pulse-heart">
                        Good Choice! 💖
                    </h1>
                    <p className="text-2xl sm:text-3xl text-foreground/80">
                        I knew you'd say yes! 🥰
                    </p>
                </div>

                <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-romantic-lg">
                    <img
                        src="/assets/generated/valentine-good-choice-meme.dim_1200x800.png"
                        alt="Good choice meme"
                        className="w-full h-auto"
                    />
                </div>

                <div className="flex justify-center gap-3">
                    <Heart className="w-8 h-8 text-romantic-red animate-pulse-heart" fill="currentColor" />
                    <Heart className="w-8 h-8 text-romantic-pink animate-pulse-heart" fill="currentColor" style={{ animationDelay: '0.2s' }} />
                    <Heart className="w-8 h-8 text-romantic-red animate-pulse-heart" fill="currentColor" style={{ animationDelay: '0.4s' }} />
                </div>

                <div className="flex justify-center mt-8">
                    <ShareButton />
                </div>
            </div>
        );
    }

    return (
        <div 
            ref={containerRef}
            className="w-full max-w-2xl mx-auto text-center space-y-12 relative min-h-[600px] flex flex-col items-center justify-center"
        >
            <div className="space-y-6">
                <Heart className="w-20 h-20 sm:w-24 sm:h-24 mx-auto text-romantic-red animate-pulse-heart" fill="currentColor" />
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-romantic-red leading-tight">
                    Will You Be My Valentine? 💕
                </h1>
                
                <p className="text-xl sm:text-2xl text-foreground/70">
                    Choose wisely... 😊
                </p>
            </div>

            <div className="relative w-full h-32 flex items-center justify-center">
                <div className="flex items-center gap-8">
                    <Button
                        size="lg"
                        onClick={onYesClick}
                        className="bg-romantic-red hover:bg-romantic-red/90 text-white text-2xl px-12 py-8 h-auto rounded-full shadow-romantic-lg hover:scale-110 transition-all duration-300"
                    >
                        Yes! 💕
                    </Button>

                    <button
                        ref={noButtonRef}
                        onMouseEnter={handleNoInteraction}
                        onTouchStart={handleNoInteraction}
                        style={{
                            position: isNoButtonMoving ? 'absolute' : 'relative',
                            left: isNoButtonMoving ? `${noButtonPosition.x}px` : 'auto',
                            top: isNoButtonMoving ? `${noButtonPosition.y}px` : 'auto',
                            transition: isNoButtonMoving ? 'all 0.3s ease-out' : 'none',
                        }}
                        className="bg-muted hover:bg-muted text-muted-foreground text-2xl px-12 py-4 rounded-full shadow-lg cursor-pointer touch-manipulation"
                    >
                        No
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-8">
                <p className="text-sm text-muted-foreground italic">
                    (Hint: There's only one right answer 😉)
                </p>
                <ShareButton />
            </div>
        </div>
    );
}
