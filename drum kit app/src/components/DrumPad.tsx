import React, { useState, useEffect, useCallback } from 'react';

interface DrumPadProps {
  id: string;
  name: string;
  soundUrl: string;
  color: string;
  position: string;
}

const DrumPad: React.FC<DrumPadProps> = ({ id, name, soundUrl, color, position }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audioElement = new Audio(soundUrl);
    audioElement.addEventListener('canplaythrough', () => setIsLoaded(true));
    audioElement.addEventListener('error', (e) => {
      console.error(`Error loading audio for ${name}:`, e);
      setIsLoaded(false);
    });
    setAudio(audioElement);

    return () => {
      audioElement.remove();
    };
  }, [soundUrl, name]);

  const playSound = useCallback(() => {
    if (audio && isLoaded) {
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.error(`Error playing ${name}:`, error);
      });
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 150);
    }
  }, [audio, isLoaded, name]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === id[0].toLowerCase()) {
        playSound();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [id, playSound]);

  return (
    <button
      onClick={playSound}
      disabled={!isLoaded}
      className={`
        ${position}
        ${color}
        ${isPlaying ? 'scale-95 brightness-110' : ''}
        ${!isLoaded ? 'opacity-50 cursor-not-allowed' : ''}
        p-4 rounded-xl shadow-lg transition-all duration-150
        hover:brightness-110 hover:scale-[1.02]
        focus:outline-none focus:ring-4 focus:ring-white/20
      `}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-xl font-bold mb-2">{name}</span>
        <span className="text-sm opacity-75">
          {isLoaded ? `Press '${id[0]}'` : 'Loading...'}
        </span>
      </div>
    </button>
  );
};

export default DrumPad;