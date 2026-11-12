import React from 'react';
import { DecisionRecord, CoreVisibleStats } from '../types';
import { ArrowLeft, RotateCcw, BookOpen, Bookmark, Sparkles } from 'lucide-react';
import { ProgressDashboard } from './ProgressDashboard';

interface JourneyReviewProps {
  history: DecisionRecord[];
  visibleStats: CoreVisibleStats;
  onBackToResult: () => void;
  onRestart: () => void;
}

export const JourneyReview: React.FC<JourneyReviewProps> = ({
  history,
  visibleStats,
  onBackToResult,
  onRestart
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 py-4 sm:py-8 text-left">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
        <button
          onClick={onBackToResult}
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al resultado final</span>
        </button>

        <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
          10 decisiones registradas
        </span>
      </div>

      <div className="space-y-2">
        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
          Recorrido de la escalera · Core IV
        </div>
        <h1 className="text-3xl font-serif font-bold text-[var(--color-text-primary)]">
          Revisión detallada de tus decisiones
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          Examina cómo cada elección influyó en tu camino, las tensiones que priorizaste y las consecuencias que asumiste a lo largo de los diez peldaños.
        </p>
      </div>

      {/* Historical Evolution Chart */}
      <ProgressDashboard history={history} currentStats={visibleStats} />

      {/* Decision records list with full 5-block detail */}
      <div className="space-y-4">
        {history.map((record) => {
          return (
            <div
              key={record.step}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 transition-colors"
            >
              {/* Step Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] font-bold text-xs flex items-center justify-center">
                    {record.step}
                  </span>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-accent)]">
                      {record.theme}
                    </span>
                    <h3 className="font-serif font-bold text-[var(--color-text-primary)] text-base leading-tight">
                      {record.title}
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] text-[var(--color-text-muted)] italic">
                  {record.bookConnection}
                </span>
              </div>

              {/* Bloque 1: Chosen Option */}
              <div className="p-3.5 bg-[var(--color-surface-subtle)] rounded-xl border border-[var(--color-border)] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--color-text-secondary)]">
                    1. Tu decisión: [{record.selectedOptionId.toUpperCase()}] {record.selectedOptionLabel}
                  </span>
                  <span className="text-[11px] text-[var(--color-text-muted)] font-serif italic">
                    {record.selectedStance}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-primary)] font-medium">
                  {record.selectedOptionText}
                </p>
              </div>

              {/* Bloque 2: Consequence */}
              <div className="space-y-1 text-xs sm:text-sm">
                <span className="font-semibold text-[var(--color-accent)] block text-xs uppercase tracking-wider">
                  2. Consecuencia narrativa:
                </span>
                <p className="p-3 bg-[var(--color-accent-subtle)] rounded-lg border border-[var(--color-accent-border)] font-serif italic text-[var(--color-text-primary)]">
                  «{record.consequence}»
                </p>
              </div>

              {/* Bloque 3: Book Connection */}
              <div className="space-y-1 text-xs">
                <span className="font-semibold text-[var(--color-text-secondary)] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>3. Conexión con el libro:</span>
                </span>
                <p className="p-2.5 bg-[var(--color-surface-subtle)] rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] font-serif">
                  {record.bookConnectionDetail}
                </p>
              </div>

              {/* Bloque 4: Core IV Connection */}
              <div className="space-y-1 text-xs">
                <span className="font-semibold text-[var(--color-text-secondary)] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Bookmark className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>4. Conexión con Core IV ({record.coreIVTheme}):</span>
                </span>
                <p className="p-2.5 bg-[var(--color-surface-subtle)] rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)]">
                  {record.coreIVConnectionDetail}
                </p>
              </div>

              {/* Bloque 5: Reflection question & optional student note */}
              <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-1.5 text-xs text-[var(--color-text-muted)]">
                <div className="italic text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)] font-sans not-italic">5. Pregunta de reflexión:</strong> «{record.reflectionQuestion}»
                </div>
                {record.studentReflection && (
                  <div className="p-2.5 bg-[var(--color-surface-subtle)] rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)]">
                    <span className="font-semibold text-[var(--color-text-secondary)] block text-[11px] uppercase mb-0.5">Tu apunte personal:</span>
                    <p className="italic">"{record.studentReflection}"</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 flex items-center justify-between border-t border-[var(--color-border)]">
        <button
          onClick={onBackToResult}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al diagnóstico final</span>
        </button>

        <button
          onClick={onRestart}
          className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-red-400 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar experiencia</span>
        </button>
      </div>
    </div>
  );
};
