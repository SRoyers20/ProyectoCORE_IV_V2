import React from 'react';
import { Dilemma, DilemmaOption, CoreVisibleStats } from '../types';
import { ArrowRight, BookOpen, Bookmark, HelpCircle } from 'lucide-react';
import { ValueStats } from './ValueStats';

interface ConsequenceCardProps {
  dilemma: Dilemma;
  selectedOption: DilemmaOption;
  visibleStats: CoreVisibleStats;
  onProceedToReflection: () => void;
}

export const ConsequenceCard: React.FC<ConsequenceCardProps> = ({
  dilemma,
  selectedOption,
  visibleStats,
  onProceedToReflection
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-4 sm:py-6 text-left">
      {/* Step Indicator Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
        <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)]">
          Peldaño {dilemma.step} de 10 · Retroalimentación formativa
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">
          Tema: {dilemma.theme}
        </span>
      </div>

      {/* Main Consequence Display with the 5 Required Blocks */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
        
        {/* BLOQUE 1: Tu decisión */}
        <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-1">
          <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
            1. Tu decisión tomada:
          </div>
          <div className="font-serif font-bold text-[var(--color-text-primary)] text-base">
            «{selectedOption.label}»
          </div>
          <p className="text-xs text-[var(--color-text-secondary)]">
            {selectedOption.text}
          </p>
        </div>

        {/* BLOQUE 2: Consecuencia narrativa */}
        <div className="space-y-1.5">
          <div className="text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)]">
            2. Consecuencia narrativa:
          </div>
          <div className="p-4 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl text-[var(--color-text-primary)] text-sm sm:text-base font-serif italic leading-relaxed">
            «{selectedOption.consequence}»
          </div>
        </div>

        {/* BLOQUE 3: Conexión con el libro */}
        <div className="space-y-1.5">
          <div className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>3. Conexión con la obra literaria ({dilemma.bookConnection.replace('Inspirado en el conflicto de ', '').replace('Inspirado en el conflicto interior de ', '')}):</span>
          </div>
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] text-xs sm:text-sm leading-relaxed font-serif">
            {selectedOption.bookConnectionDetail}
          </div>
        </div>

        {/* BLOQUE 4: Conexión con Core IV */}
        <div className="space-y-1.5">
          <div className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>4. Conexión con los temas de Core IV:</span>
          </div>
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] text-xs sm:text-sm leading-relaxed">
            {selectedOption.coreIVConnectionDetail}
          </div>
        </div>

        {/* BLOQUE 5: Pregunta de reflexión */}
        <div className="p-4 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>5. Pregunta de reflexión:</span>
          </div>
          <p className="text-sm sm:text-base font-serif italic text-[var(--color-text-primary)]">
            «{selectedOption.reflection}»
          </p>
        </div>

        {/* Actualización de los 4 indicadores visibles */}
        <div className="space-y-2 pt-2 border-t border-[var(--color-border-subtle)]">
          <div className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
            Evolución de tus cuatro indicadores:
          </div>
          <ValueStats stats={visibleStats} compact />
        </div>

        {/* Proceed to Reflection */}
        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-end">
          <button
            onClick={onProceedToReflection}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
          >
            <span>Continuar a la pausa reflexiva</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
