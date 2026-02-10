import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { questions } from '../../data/loveQuizQuestions';
import ConfettiHeartsBurst from '../animations/ConfettiHeartsBurst';
import SparkleBurst from '../animations/SparkleBurst';
import { useAudioControllerContext } from '../../context/AudioControllerContext';

interface QuizScreenProps {
    onComplete: (score: number) => void;
}

export default function QuizScreen({ onComplete }: QuizScreenProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showCelebration, setShowCelebration] = useState(false);
    const [showSparkle, setShowSparkle] = useState(false);
    const { playCorrectSound, playSelectSound } = useAudioControllerContext();

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleOptionSelect = (optionIndex: number) => {
        playSelectSound();
        
        const isCorrect = optionIndex === currentQuestion.correctAnswer;
        const newAnswers = [...selectedAnswers, optionIndex];
        setSelectedAnswers(newAnswers);

        if (isCorrect) {
            playCorrectSound();
            setShowCelebration(true);
            
            // Special sparkle for Q4 "Everything"
            if (currentQuestionIndex === 3 && optionIndex === 3) {
                setShowSparkle(true);
                setTimeout(() => setShowSparkle(false), 1000);
            }
        }

        setTimeout(() => {
            setShowCelebration(false);
            
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                // Calculate final score
                const finalScore = newAnswers.reduce((score, answer, index) => {
                    return score + (answer === questions[index].correctAnswer ? 1 : 0);
                }, 0);
                onComplete(finalScore);
            }
        }, 1500);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
            {showCelebration && <ConfettiHeartsBurst />}
            {showSparkle && <SparkleBurst />}
            
            <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            <Card className="shadow-romantic-lg border-2 backdrop-blur-sm bg-card/95">
                <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl text-center text-romantic-pink">
                        {currentQuestion.question}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => handleOptionSelect(index)}
                            variant="outline"
                            className="w-full text-left justify-start h-auto py-4 px-6 text-base md:text-lg hover:bg-romantic-blush hover:border-romantic-pink hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-romantic"
                        >
                            <span className="font-semibold mr-3 text-romantic-pink">
                                {String.fromCharCode(65 + index)}.
                            </span>
                            {option}
                        </Button>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
