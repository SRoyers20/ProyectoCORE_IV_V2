import React, { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react';
import { JourneySong } from '../data/journeySongs';

interface AudioContextType {
  currentSong: JourneySong | null;
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  autoplayBlocked: boolean;
  playSong: (song: JourneySong, autoPlay?: boolean) => void;
  togglePlay: () => void;
  toggleMute: () => void;
  seek: (time: number) => void;
  stop: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState<JourneySong | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Initialize or update audio element when currentSong changes
  const playSong = useCallback((song: JourneySong, autoPlay: boolean = true) => {
    // If the same song is already loaded, don't restart from 0 unless stopped
    if (currentSong?.id === song.id && audioRef.current) {
      if (autoPlay && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
          })
          .catch(() => {
            setIsPlaying(false);
            setAutoplayBlocked(true);
          });
      }
      return;
    }

    setCurrentSong(song);
    setCurrentTime(0);
    setAutoplayBlocked(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = song.mp3Src;
      audioRef.current.load();

      if (autoPlay) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setAutoplayBlocked(false);
            })
            .catch(() => {
              // Browser policy restricted unmuted playback until interaction
              setIsPlaying(false);
              setAutoplayBlocked(true);
            });
        }
      } else {
        setIsPlaying(false);
      }
    }
  }, [currentSong, isPlaying]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch((err) => {
          console.error("Playback error:", err);
        });
    }
  }, [isPlaying, currentSong]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }, [isMuted]);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => {
      setIsPlaying(true);
      setAutoplayBlocked(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        currentSong,
        isPlaying,
        isMuted,
        currentTime,
        duration,
        autoplayBlocked,
        playSong,
        togglePlay,
        toggleMute,
        seek,
        stop,
      }}
    >
      {/* Global persistent audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        loop
      >
        {currentSong && (
          <>
            <source src={currentSong.mp3Src} type="audio/mpeg" />
            <source src={currentSong.m4aSrc} type="audio/mp4" />
          </>
        )}
      </audio>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
