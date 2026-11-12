import React, { useRef, useState, useEffect } from 'react';
import { JourneySong } from '../data/journeySongs';
import { Volume2, VolumeX, Play, Pause, Music, X } from 'lucide-react';

interface FloatingFeedbackPlayerProps {
  song: JourneySong;
}

export const FloatingFeedbackPlayer: React.FC<FloatingFeedbackPlayerProps> = ({ song }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      // Auto-play when reaching the feedback screen
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Browser policy may require a click; user can click the popup
            setIsPlaying(false);
          });
      }
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [song]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          type="button"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-accent-border)] shadow-lg hover:scale-105 transition-all text-xs text-[var(--color-text-primary)] cursor-pointer"
          title="Abrir reproductor de música asignada"
        >
          <div className={`p-1.5 rounded-full ${isPlaying ? 'bg-amber-600 text-white animate-pulse' : 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300'}`}>
            <Music className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-xs hidden sm:inline truncate max-w-[140px]">
            {song.title}
          </span>
        </button>
      </div>
    );
  }

  return (
    <aside 
      aria-label="Reproductor de audio de retroalimentación"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-80 bg-[var(--color-surface)]/95 backdrop-blur-md border-2 border-[var(--color-accent-border)] rounded-2xl shadow-2xl p-3.5 space-y-2 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} preload="auto" loop>
        <source src={song.mp3Src} type="audio/mpeg" />
        <source src={song.m4aSrc} type="audio/mp4" />
      </audio>

      {/* Top row */}
      <div className="flex items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className={`p-1.5 rounded-full shrink-0 ${isPlaying ? 'bg-amber-600 text-white animate-pulse' : 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300'}`}>
            <Music className="w-3.5 h-3.5" />
          </div>
          <div className="truncate">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-accent)] block">
              Banda Sonora · Core IV
            </span>
            <div className="font-serif font-bold text-xs text-[var(--color-text-primary)] truncate">
              {song.title}
            </div>
            <div className="text-[10px] text-[var(--color-text-muted)] truncate">
              {song.artist}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsMinimized(true)}
          className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] rounded-md transition-colors cursor-pointer"
          title="Minimizar reproductor"
          aria-label="Minimizar reproductor"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between pt-0.5">
        <button
          onClick={togglePlay}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 fill-current" />
              <span>Pausar</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-current" />
              <span>Reproducir</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[11px] text-[var(--color-text-muted)]">
            {isPlaying ? 'Sonando' : 'Pausado'}
          </span>
          <button
            onClick={toggleMute}
            type="button"
            className="p-1.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-subtle)] transition-colors cursor-pointer"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </aside>
  );
};
