import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import ShareButton from '../ShareButton';

interface WelcomeScreenProps {
    onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in duration-700">
            <Card className="shadow-romantic-lg border-2 backdrop-blur-sm bg-card/95">
                <CardHeader className="text-center space-y-4 pb-4">
                    <div className="flex justify-center">
                        <div className="relative">
                            <Heart className="w-20 h-20 text-romantic-red fill-romantic-red animate-pulse-heart" />
                            <div className="absolute inset-0 animate-ping opacity-20">
                                <Heart className="w-20 h-20 text-romantic-red fill-romantic-red" />
                            </div>
                        </div>
                    </div>
                    <CardTitle className="text-4xl md:text-5xl font-bold text-romantic-pink">
                        How Well Do You Know Your Husband? 💖
                    </CardTitle>
                    <CardDescription className="text-lg md:text-xl text-muted-foreground">
                        A tiny test made with love just for you
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                    <Button
                        onClick={onStart}
                        size="lg"
                        className="w-full text-lg py-6 bg-romantic-pink hover:bg-romantic-pink/90 text-white shadow-romantic transition-all hover:scale-105 hover:shadow-romantic-lg"
                    >
                        Start the Love Test →
                    </Button>
                    
                    <div className="flex justify-center pt-2">
                        <ShareButton />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

