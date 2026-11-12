import React, { useState } from 'react';
import { useAudio } from '../context/AudioContext';
import { JourneySong } from '../data/journeySongs';
import { Play, Pause, Volume2, VolumeX, Music, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface PersistentAudioPlayerProps {
  song?: JourneySong;
  titlePrefix?: string;
}

export const PersistentAudioPlayer: React.FC<PersistentAudioPlayerProps> = ({
  song,
  titlePrefix = 'Banda Sonora Asignada'
}) => {
  const {
    currentSong,
    isPlaying,
    isMuted,
    currentTime,
    duration,
    autoplayBlocked,
    togglePlay,
    toggleMute,
    seek
  } = useAudio();

  const [isMinimized, setIsMinimized] = useState(false);

  const displaySong = song || currentSong;
  if (!displaySong) return null;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const mins = Math.floor(secs / 60);
    const rem = Math.floor(secs % 60);
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Minimized Compact Badge
  if (isMinimized) {
    return (
      <aside
        aria-label="Controles de audio minimizados"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={() => setIsMinimized(false)}
          type="button"
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[var(--color-surface)]/95 backdrop-blur-md border-2 border-[var(--color-accent-border)] shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-xs text-[var(--color-text-primary)] cursor-pointer"
          title="Abrir controles de audio completos"
        >
          <div
            className={`p-1.5 rounded-full flex items-center justify-center transition-colors ${
              isPlaying
                ? 'bg-[var(--color-accent)] text-white shadow-xs'
                : 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300'
            }`}
          >
            <Music className="w-3.5 h-3.5" />
          </div>

          <div className="flex flex-col text-left max-w-[130px] sm:max-w-[180px]">
            <span className="font-serif font-bold text-xs truncate leading-tight">
              {displaySong.title}
            </span>
            <span className="text-[10px] text-[var(--color-text-muted)] truncate">
              {isPlaying ? formatTime(currentTime) : 'Pausado'}
            </span>
          </div>

          {/* Equalizer animation mini */}
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-3 px-1" aria-hidden="true">
              <span className="w-0.5 bg-[var(--color-accent)] rounded-full animate-bounce h-2" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 bg-[var(--color-accent)] rounded-full animate-bounce h-3" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 bg-[var(--color-accent)] rounded-full animate-bounce h-1.5" style={{ animationDelay: '300ms' }} />
            </div>
          )}

          <ChevronUp className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-colors" />
        </button>
      </aside>
    );
  }

  // Expanded Persistent Pop-up
  return (
    <aside
      aria-label="Controles persistentes de reproducción de audio"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-84 bg-[var(--color-surface)]/95 backdrop-blur-md border-2 border-[var(--color-accent-border)] rounded-2xl shadow-2xl p-4 space-y-3 transition-all animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* Header row with minimize */}
      <div className="flex items-start justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`p-2 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              isPlaying
                ? 'bg-[var(--color-accent)] text-white shadow-sm'
                : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            <Music className="w-4 h-4" />
          </div>

          <div className="truncate">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-accent)] block flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>{titlePrefix}</span>
            </span>
            <div className="font-serif font-bold text-sm text-[var(--color-text-primary)] truncate">
              «{displaySong.title}»
            </div>
            <div className="text-[11px] text-[var(--color-text-muted)] truncate">
              {displaySong.artist}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsMinimized(true)}
          className="p-1 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)] transition-colors cursor-pointer"
          title="Minimizar reproductor a barra flotante"
          aria-label="Minimizar reproductor"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Autoplay prompt banner if blocked by browser policy */}
      {autoplayBlocked && !isPlaying && (
        <div
          onClick={togglePlay}
          className="p-2 rounded-lg bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] text-[11px] text-[var(--color-accent)] font-medium flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity"
        >
          <span>Toca aquí para iniciar la canción</span>
          <Play className="w-3.5 h-3.5 fill-current" />
        </div>
      )}

      {/* Progress scrubber bar */}
      <div className="space-y-1">
        <input
          type="range"
          min={0}
          max={duration || 100}
          step={0.1}
          value={currentTime}
          onChange={(e) => seek(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-[var(--color-surface-subtle)] rounded-lg appearance-none cursor-pointer accent-[var(--color-accent)] focus:outline-none"
          aria-label="Barra de avance de la canción"
        />
        <div className="flex justify-between items-center text-[10px] text-[var(--color-text-muted)] font-mono tabular-nums">
          <span>{formatTime(currentTime)}</span>
          <span className="italic hidden sm:inline text-[9px] text-[var(--color-text-secondary)]">
            {isPlaying ? 'Reproduciendo en segundo plano' : 'En pausa'}
          </span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls bar */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
            aria-label={isPlaying ? 'Pausar canción' : 'Reproducir canción'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Reproducir</span>
              </>
            )}
          </button>

          <button
            onClick={toggleMute}
            type="button"
            className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-subtle)] transition-colors cursor-pointer"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-500" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Animated equalizer waves when playing */}
        {isPlaying ? (
          <div className="flex items-end gap-1 h-4 pr-1" aria-label="Audio reproduciéndose">
            <span className="w-1 bg-[var(--color-accent)] rounded-full animate-bounce h-2" style={{ animationDelay: '0ms' }} />
            <span className="w-1 bg-[var(--color-accent)] rounded-full animate-bounce h-4" style={{ animationDelay: '120ms' }} />
            <span className="w-1 bg-[var(--color-accent)] rounded-full animate-bounce h-3" style={{ animationDelay: '240ms' }} />
            <span className="w-1 bg-[var(--color-accent)] rounded-full animate-bounce h-2" style={{ animationDelay: '360ms' }} />
          </div>
        ) : (
          <span className="text-[10px] text-[var(--color-text-muted)] italic">
            Audio local
          </span>
        )}
      </div>
    </aside>
  );
};
