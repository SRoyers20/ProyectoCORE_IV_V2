import React, { useState } from 'react';
import { Dilemma, DilemmaOption } from '../types';
import { ArrowLeft, BookOpen, Check, Compass, AlertCircle } from 'lucide-react';

interface DilemmaCardProps {
  dilemma: Dilemma;
  onSelectOption: (option: DilemmaOption) => void;
  onBackToStaircase: () => void;
}

export const DilemmaCard: React.FC<DilemmaCardProps> = ({
  dilemma,
  onSelectOption,
  onBackToStaircase
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<'a' | 'b' | 'c' | 'd' | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleChoose = (optId: 'a' | 'b' | 'c' | 'd') => {
    setSelectedOptionId(optId);
    if (validationError) setValidationError(null);
  };

  const handleConfirm = () => {
    if (!selectedOptionId) {
      setValidationError('Por favor selecciona una de las cuatro posturas para continuar.');
      return;
    }

    const opt = dilemma.options.find(o => o.id === selectedOptionId);
    if (opt) {
      onSelectOption(opt);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-4 sm:py-6 text-left">
      {/* Top back navigation */}
      <div>
        <button
          onClick={onBackToStaircase}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la escalera</span>
        </button>
      </div>

      {/* Main Card Container */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
        {/* Step Badge & Thematic Tag */}
        <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)]">
              Peldaño {dilemma.step} de 10 · {dilemma.theme}
            </span>

            {/* Book Connection Tag - Required visible label */}
            <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] font-medium">
              <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
              <span>{dilemma.bookConnection}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--color-text-primary)] leading-tight">
            {dilemma.title}
          </h1>

          {/* Enhanced Literary Context Box */}
          <div className="p-3.5 bg-[#FAF4EB] dark:bg-[#1E2738] border-2 border-[var(--color-accent-border)] rounded-xl flex items-start gap-2.5 transition-colors">
            <BookOpen className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)] block">
                Trasfondo Literario: {dilemma.bookConnection.replace('Inspirado en el conflicto de ', '').replace('Inspirado en el conflicto interior de ', '')}
              </span>
              <p className="text-xs sm:text-sm text-[var(--color-text-primary)] font-serif leading-relaxed">
                {dilemma.literaryContext}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Context (80-120 words) */}
        <div className="p-4 sm:p-5 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-3 transition-colors">
          <div className="text-[11px] uppercase font-bold tracking-wider text-[var(--color-text-muted)]">
            Situación y contexto
          </div>
          <p className="text-sm sm:text-base text-[var(--color-text-primary)] font-serif leading-relaxed">
            {dilemma.context}
          </p>

          <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-start gap-2 text-xs text-[var(--color-text-secondary)] font-sans">
            <Compass className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-[var(--color-text-primary)]">Conflicto central:</strong>{' '}
              {dilemma.coreConflict}
            </div>
          </div>
        </div>

        {/* 4 Choices */}
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-muted)]">
            ¿Qué decides hacer? Selecciona una postura:
          </div>

          <div className="space-y-2.5">
            {dilemma.options.map((option) => {
              const isSelected = selectedOptionId === option.id;

              return (
                <div
                  key={option.id}
                  onClick={() => handleChoose(option.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleChoose(option.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] ${
                    isSelected
                      ? 'bg-[var(--color-accent-subtle)] border-[var(--color-accent)] ring-1 ring-[var(--color-accent-border)] shadow-xs'
                      : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-subtle)]'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border transition-colors ${
                      isSelected
                        ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-primary-btn-text)]'
                        : 'border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : option.id.toUpperCase()}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-[var(--color-text-primary)] text-sm">
                        {option.label}
                      </span>
                      <span className="text-[11px] text-[var(--color-text-muted)] italic">
                        {option.philosophicalStance}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {option.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Validation warning */}
        {validationError && (
          <div className="p-3 rounded-xl flex items-center gap-2 text-xs border" style={{
            backgroundColor: 'var(--color-negative-bg)',
            borderColor: 'var(--color-negative-border)',
            color: 'var(--color-negative-text)'
          }}>
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
          <span className="text-xs text-[var(--color-text-muted)] hidden sm:inline">
            Tus indicadores se actualizarán tras confirmar tu decisión.
          </span>

          <button
            onClick={handleConfirm}
            className="w-full sm:w-auto px-6 py-3 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
          >
            Confirmar decisión y ver consecuencias
          </button>
        </div>
      </div>
    </div>
  );
};
