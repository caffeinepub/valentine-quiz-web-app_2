import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Trophy, Ticket, Heart } from 'lucide-react';
import ShareButton from '../ShareButton';

interface ResultPerfectScreenProps {
    onRestart: () => void;
}

export default function ResultPerfectScreen({ onRestart }: ResultPerfectScreenProps) {
    const [showRedeemMessage, setShowRedeemMessage] = useState(false);

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in zoom-in duration-700">
            <Card className="shadow-romantic-lg border-2 backdrop-blur-sm bg-card/95">
                <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                        <Trophy className="w-20 h-20 text-romantic-red animate-pulse-heart" />
                    </div>
                    <CardTitle className="text-4xl md:text-5xl font-bold text-romantic-pink">
                        OMG 5/5!!! 😭💖
                    </CardTitle>
                    <CardDescription className="text-xl md:text-2xl font-semibold text-foreground">
                        You are officially the BEST WIFE IN THE WORLD.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/assets/generated/valentine-meme-win.dim_1200x800.png"
                            alt="Celebration"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="bg-romantic-blush/50 rounded-2xl p-6 space-y-4 border-2 border-romantic-pink/30">
                        <div className="flex items-center justify-center gap-3">
                            <Ticket className="w-8 h-8 text-romantic-red" />
                            <h3 className="text-2xl font-bold text-romantic-pink">
                                You have won a DATE COUPON!
                            </h3>
                        </div>
                        <p className="text-center text-lg text-foreground">
                            Redeemable for: One full day of love, food, cuddles & surprises.
                        </p>
                        
                        {!showRedeemMessage ? (
                            <Button
                                onClick={() => setShowRedeemMessage(true)}
                                size="lg"
                                className="w-full text-lg py-6 bg-romantic-red hover:bg-romantic-red/90 text-white shadow-romantic transition-all hover:scale-105"
                            >
                                Redeem My Date 💌
                            </Button>
                        ) : (
                            <div className="bg-white/80 rounded-xl p-6 text-center space-y-3 animate-in fade-in zoom-in duration-500">
                                <Heart className="w-12 h-12 text-romantic-red mx-auto animate-pulse-heart" />
                                <p className="text-lg font-semibold text-romantic-pink">
                                    Your husband will contact you shortly for booking 😉
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                            onClick={onRestart}
                            variant="outline"
                            size="lg"
                            className="flex-1 hover:bg-romantic-blush hover:border-romantic-pink"
                        >
                            Take Quiz Again
                        </Button>
                        <ShareButton />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

