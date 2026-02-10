import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import ShareButton from '../ShareButton';

interface ResultTeaseScreenProps {
    score: number;
    onValentineAccepted: () => void;
    onRestart: () => void;
}

export default function ResultTeaseScreen({ score, onValentineAccepted, onRestart }: ResultTeaseScreenProps) {
    const [noClickCount, setNoClickCount] = useState(0);

    const handleNoClick = () => {
        setNoClickCount(prev => prev + 1);
    };

    const getPromptText = () => {
        if (noClickCount === 0) return "Will you still be my Valentine? 💘";
        if (noClickCount === 1) return "Are you sure?? 🥺";
        return "You have no escape 😌";
    };

    // Calculate button sizes based on click count
    const yesSize = Math.min(100 + noClickCount * 30, 300);
    const noSize = Math.max(100 - noClickCount * 20, 20);

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in zoom-in duration-700">
            <Card className="shadow-romantic-lg border-2 backdrop-blur-sm bg-card/95">
                <CardHeader className="text-center space-y-4">
                    <CardTitle className="text-3xl md:text-4xl font-bold text-romantic-pink">
                        Hmm… not perfect 👀
                    </CardTitle>
                    <CardDescription className="text-lg md:text-xl text-foreground">
                        You scored {score}/5
                    </CardDescription>
                    <p className="text-lg text-muted-foreground">
                        You need to do better… but I still love you.
                    </p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/assets/generated/valentine-meme-tease.dim_1200x800.png"
                            alt="Teasing"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="bg-romantic-blush/50 rounded-2xl p-8 space-y-6 border-2 border-romantic-pink/30">
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-romantic-pink">
                            {getPromptText()}
                        </h3>
                        
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <Button
                                onClick={onValentineAccepted}
                                size="lg"
                                style={{
                                    width: `${yesSize}px`,
                                    height: `${Math.min(yesSize * 0.4, 80)}px`,
                                    fontSize: `${Math.min(yesSize * 0.15, 24)}px`
                                }}
                                className="bg-romantic-pink hover:bg-romantic-pink/90 text-white shadow-romantic transition-all duration-300 hover:scale-105"
                            >
                                Yes 💖
                            </Button>
                            <Button
                                onClick={handleNoClick}
                                variant="outline"
                                size="lg"
                                style={{
                                    width: `${noSize}px`,
                                    height: `${Math.min(noSize * 0.4, 80)}px`,
                                    fontSize: `${Math.min(noSize * 0.15, 24)}px`,
                                    minWidth: '20px',
                                    minHeight: '20px'
                                }}
                                className="border-romantic-red text-romantic-red hover:bg-romantic-red/10 transition-all duration-300"
                            >
                                {noSize > 40 ? 'No 😈' : '😈'}
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                            onClick={onRestart}
                            variant="outline"
                            size="lg"
                            className="flex-1 hover:bg-romantic-blush hover:border-romantic-pink"
                        >
                            Try Again
                        </Button>
                        <ShareButton />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

