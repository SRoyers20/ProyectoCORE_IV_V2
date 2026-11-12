import React from 'react';
import { Dilemma, DilemmaOption } from '../types';
import { ArrowRight, BookOpen, Bookmark, HelpCircle, CheckCircle, Quote } from 'lucide-react';

interface ConsequenceCardProps {
  dilemma: Dilemma;
  selectedOption: DilemmaOption;
  onProceedToReflection: () => void;
}

export const ConsequenceCard: React.FC<ConsequenceCardProps> = ({
  dilemma,
  selectedOption,
  onProceedToReflection
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-4 sm:py-6 text-left">
      {/* Step Indicator Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
        <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)]">
          Peldaño {dilemma.step} de 10 · Retroalimentación Formativa
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">
          Eje: {dilemma.theme}
        </span>
      </div>

      {/* Main Consequence Display strictly implementing the 5 Structured Blocks */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
        
        {/* BLOQUE 1: Tu decisión */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
            <CheckCircle className="w-4 h-4 text-[var(--color-stat-integridad)]" />
            <span>Tu decisión:</span>
          </div>
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-1.5 transition-colors">
            <div className="font-serif font-bold text-[var(--color-text-primary)] text-base sm:text-lg">
              «{selectedOption.label}»
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {selectedOption.text}
            </p>
          </div>
        </div>

        {/* BLOQUE 2: Consecuencia narrativa */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)]">
            <Quote className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Consecuencia narrativa:</span>
          </div>
          <div className="p-4.5 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl text-[var(--color-text-primary)] text-sm sm:text-base font-serif italic leading-relaxed">
            «{selectedOption.consequence}»
          </div>
        </div>

        {/* BLOQUE 3: Conexión con el libro */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-text-secondary)]">
            <BookOpen className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Conexión con el libro:</span>
          </div>
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] text-xs sm:text-sm leading-relaxed font-serif">
            {selectedOption.bookConnectionDetail}
          </div>
        </div>

        {/* BLOQUE 4: Conexión con Core IV */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-text-secondary)]">
            <Bookmark className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Conexión con Core IV:</span>
          </div>
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] text-xs sm:text-sm leading-relaxed">
            {selectedOption.coreIVConnectionDetail}
          </div>
        </div>

        {/* BLOQUE 5: Pregunta de reflexión */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)]">
            <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Pregunta de reflexión:</span>
          </div>
          <div className="p-4 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl">
            <p className="text-sm sm:text-base font-serif italic text-[var(--color-text-primary)] leading-snug">
              «{selectedOption.reflection}»
            </p>
          </div>
        </div>

        {/* Action Button to Proceed to Reflection */}
        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
          <span className="text-xs text-[var(--color-text-muted)] hidden sm:inline">
            El feedback invita a analizar tu decisión éticamente, no a clasificarla con una nota moral.
          </span>
          <button
            onClick={onProceedToReflection}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-xs cursor-pointer ml-auto"
          >
            <span>Continuar a la pausa reflexiva</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
