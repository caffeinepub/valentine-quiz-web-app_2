import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Heart, Sparkles } from 'lucide-react';
import FinalRomanticCelebration from '../animations/FinalRomanticCelebration';
import ShareButton from '../ShareButton';

interface FinalCelebrationScreenProps {
    onRestart: () => void;
}

export default function FinalCelebrationScreen({ onRestart }: FinalCelebrationScreenProps) {
    return (
        <>
            <FinalRomanticCelebration />
            <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in zoom-in duration-700">
                <Card className="shadow-romantic-lg border-2 backdrop-blur-sm bg-card/95">
                    <CardHeader className="text-center space-y-6 pb-8">
                        <div className="flex justify-center gap-4">
                            <Heart className="w-16 h-16 text-romantic-red fill-romantic-red animate-pulse-heart" />
                            <Sparkles className="w-16 h-16 text-romantic-pink animate-pulse-heart" />
                            <Heart className="w-16 h-16 text-romantic-red fill-romantic-red animate-pulse-heart" />
                        </div>
                        <CardTitle className="text-4xl md:text-6xl font-bold text-romantic-pink leading-tight">
                            YAY!!! You are my Valentine forever 💖🌹
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-romantic-blush/50 rounded-2xl p-8 text-center space-y-4 border-2 border-romantic-pink/30">
                            <p className="text-2xl md:text-3xl font-semibold text-romantic-pink">
                                I knew you couldn't resist! 😊
                            </p>
                            <p className="text-lg text-muted-foreground">
                                You're stuck with me forever now! 💕
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button
                                onClick={onRestart}
                                variant="outline"
                                size="lg"
                                className="flex-1 hover:bg-romantic-blush hover:border-romantic-pink"
                            >
                                Start Over
                            </Button>
                            <ShareButton />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

