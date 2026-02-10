import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { useAudioControllerContext } from '../context/AudioControllerContext';

export default function AudioToggle() {
    const { isEnabled, toggleAudio } = useAudioControllerContext();

    return (
        <Button
            onClick={toggleAudio}
            variant="outline"
            size="icon"
            className="rounded-full bg-card/80 backdrop-blur-sm hover:bg-romantic-blush hover:border-romantic-pink shadow-romantic"
            aria-label={isEnabled ? 'Mute audio' : 'Unmute audio'}
        >
            {isEnabled ? (
                <Volume2 className="w-5 h-5 text-romantic-pink" />
            ) : (
                <VolumeX className="w-5 h-5 text-muted-foreground" />
            )}
        </Button>
    );
}
