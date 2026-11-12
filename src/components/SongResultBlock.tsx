import React from 'react';
import { JourneySong } from '../data/journeySongs';
import { useAudio } from '../context/AudioContext';
import { Headphones, Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface SongResultBlockProps {
  song: JourneySong;
}

export const SongResultBlock: React.FC<SongResultBlockProps> = ({ song }) => {
  const {
    isPlaying,
    isMuted,
    currentTime,
    duration,
    togglePlay,
    toggleMute,
    seek
  } = useAudio();

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    seek(time);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  return (
    <section 
      aria-labelledby="assigned-song-title" 
      className="p-6 sm:p-7 bg-[#F7F3EB] dark:bg-[#1B2332] border-2 border-[var(--color-accent-border)] rounded-2xl space-y-5 shadow-xs transition-colors"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border-subtle)] pb-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] flex items-center gap-1.5">
            <Headphones className="w-4 h-4" />
            <span>Tu canción ha sido…</span>
          </span>
          <h2 id="assigned-song-title" className="text-2xl sm:text-3xl font-serif font-bold text-[var(--color-text-primary)]">
            «{song.title}»
          </h2>
          <p className="text-sm font-medium text-[var(--color-accent)]">
            {song.artist}
          </p>
        </div>
        <div className="p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-xs text-[var(--color-text-secondary)] max-w-xs text-right sm:text-left shadow-2xs">
          <span className="font-semibold block text-[var(--color-text-primary)]">Asignación automática</span>
          Interpretación simbólica de tu patrón ético.
        </div>
      </div>

      <p className="text-sm sm:text-base font-serif italic text-[var(--color-text-primary)] leading-relaxed">
        {song.summaryReason}
      </p>

      {/* Synchronized Player / Controls Box */}
      <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-3 shadow-2xs">
        <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1.5 font-medium text-[var(--color-text-primary)]">
            <Music className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Pista asignada a tu camino:</span>
          </span>
          <span className="text-[11px] font-mono tabular-nums">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        {/* Custom Scrubber */}
        <div className="space-y-1">
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-[var(--color-surface-subtle)] rounded-lg appearance-none cursor-pointer accent-amber-600 dark:accent-amber-500"
            aria-label="Progreso de la canción"
          />
        </div>

        {/* Playback Button Bar */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
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
                  <span>Reproducir pista</span>
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
              {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          <span className="text-xs text-[var(--color-text-muted)] italic hidden sm:inline">
            Audio en calidad master (MP3 / M4A)
          </span>
        </div>
      </div>

      {/* Detailed Explanations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-1.5">
          <span className="font-semibold text-[var(--color-text-primary)] block text-xs uppercase tracking-wider text-[var(--color-accent)]">
            Por qué esta canción representa tu camino:
          </span>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {song.whyAssigned}
          </p>
        </div>

        <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-1.5">
          <span className="font-semibold text-[var(--color-text-primary)] block text-xs uppercase tracking-wider text-[var(--color-accent)]">
            Conexión con Core IV:
          </span>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {song.coreIVConnection}
          </p>
        </div>
      </div>

      {/* Closing Question of the Song */}
      <div className="p-4 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] block">
          Pregunta final de la canción:
        </span>
        <p className="text-sm sm:text-base font-serif italic text-[var(--color-text-primary)]">
          «{song.closingQuestion}»
        </p>
      </div>

      <p className="text-[11px] text-[var(--color-text-muted)] italic text-center">
        «Tu canción no define quién eres. Refleja la dirección que tomaste durante el recorrido y te invita a reflexionar sobre el camino que estás construyendo.»
      </p>
    </section>
  );
};
