import { createContext, useContext, useState, useRef, useCallback, useEffect, type ReactNode } from 'react';

interface AudioControllerContextType {
    isEnabled: boolean;
    toggleAudio: () => void;
    playSelectSound: () => void;
    playCorrectSound: () => void;
    playCelebrateSound: () => void;
    playHarpSound: () => void;
}

const AudioControllerContext = createContext<AudioControllerContextType | null>(null);

export function AudioControllerProvider({ children }: { children: ReactNode }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const bgMusicRef = useRef<HTMLAudioElement | null>(null);
    const sfxRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

    useEffect(() => {
        // Initialize background music
        bgMusicRef.current = new Audio('/assets/audio/romantic-bg.mp3');
        bgMusicRef.current.loop = true;
        bgMusicRef.current.volume = 0.3;

        // Initialize sound effects
        sfxRefs.current = {
            select: new Audio('/assets/audio/sfx-select.mp3'),
            correct: new Audio('/assets/audio/sfx-correct.mp3'),
            celebrate: new Audio('/assets/audio/sfx-celebrate.mp3'),
            harp: new Audio('/assets/audio/sfx-harp-tiny.mp3')
        };

        Object.values(sfxRefs.current).forEach(sfx => {
            sfx.volume = 0.5;
        });

        return () => {
            bgMusicRef.current?.pause();
            Object.values(sfxRefs.current).forEach(sfx => sfx.pause());
        };
    }, []);

    const toggleAudio = useCallback(() => {
        setIsEnabled(prev => {
            const newState = !prev;
            if (newState) {
                bgMusicRef.current?.play().catch(() => {
                    // Ignore autoplay errors
                });
            } else {
                bgMusicRef.current?.pause();
            }
            return newState;
        });
    }, []);

    const playSelectSound = useCallback(() => {
        if (isEnabled && sfxRefs.current.select) {
            sfxRefs.current.select.currentTime = 0;
            sfxRefs.current.select.play().catch(() => {});
        }
    }, [isEnabled]);

    const playCorrectSound = useCallback(() => {
        if (isEnabled && sfxRefs.current.correct) {
            sfxRefs.current.correct.currentTime = 0;
            sfxRefs.current.correct.play().catch(() => {});
        }
    }, [isEnabled]);

    const playCelebrateSound = useCallback(() => {
        if (isEnabled && sfxRefs.current.celebrate) {
            sfxRefs.current.celebrate.currentTime = 0;
            sfxRefs.current.celebrate.play().catch(() => {});
        }
    }, [isEnabled]);

    const playHarpSound = useCallback(() => {
        if (isEnabled && sfxRefs.current.harp) {
            sfxRefs.current.harp.currentTime = 0;
            sfxRefs.current.harp.play().catch(() => {});
        }
    }, [isEnabled]);

    return (
        <AudioControllerContext.Provider
            value={{
                isEnabled,
                toggleAudio,
                playSelectSound,
                playCorrectSound,
                playCelebrateSound,
                playHarpSound
            }}
        >
            {children}
        </AudioControllerContext.Provider>
    );
}

export function useAudioControllerContext() {
    const context = useContext(AudioControllerContext);
    if (!context) {
        throw new Error('useAudioControllerContext must be used within AudioControllerProvider');
    }
    return context;
}
