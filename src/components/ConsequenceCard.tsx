import React from 'react';
import { Dilemma, DilemmaOption } from '../types';
import { ArrowRight, BookOpen, Bookmark, HelpCircle, CheckCircle, Quote, Download, FileText, Sparkles } from 'lucide-react';
import { downloadFeedbackPDF } from '../utils/exportFeedbackPdf';

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
  const handleExportPDF = () => {
    downloadFeedbackPDF({
      dilemmaStep: dilemma.step,
      dilemmaTheme: dilemma.theme,
      dilemmaTitle: dilemma.title,
      bookConnection: dilemma.bookConnection,
      selectedOptionLabel: selectedOption.label,
      selectedOptionText: selectedOption.text,
      consequence: selectedOption.consequence,
      bookConnectionDetail: selectedOption.bookConnectionDetail,
      coreIVConnectionDetail: selectedOption.coreIVConnectionDetail,
      reflectionQuestion: selectedOption.reflection
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-4 sm:py-6 text-left">
      {/* Step Indicator Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border)] pb-3">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)] block">
            Peldaño {dilemma.step} de 10 · Retroalimentación Formativa
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">
            Eje: {dilemma.theme}
          </span>
        </div>

        {/* PDF Download Button for this Feedback */}
        <button
          onClick={handleExportPDF}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-xs font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)] transition-colors cursor-pointer shadow-2xs"
          title="Descargar este feedback en formato PDF"
        >
          <Download className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>Descargar feedback (PDF)</span>
        </button>
      </div>

      {/* Main Consequence Display strictly implementing the 5 Structured Blocks */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
        
        {/* BLOQUE 1: Tu decisión */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
            <CheckCircle className="w-4 h-4 text-[var(--color-stat-integridad)]" />
            <span>1. Tu decisión:</span>
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
            <span>2. Consecuencia narrativa:</span>
          </div>
          <div className="p-4.5 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl text-[var(--color-text-primary)] text-sm sm:text-base font-serif italic leading-relaxed">
            «{selectedOption.consequence}»
          </div>
        </div>

        {/* BLOQUE 3: Conexión con el libro (Con mayor resalte visual y contextual) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[var(--color-accent)]">
              <BookOpen className="w-4 h-4 text-[var(--color-accent)]" />
              <span>3. Conexión con la obra literaria:</span>
            </span>
            <span className="text-[11px] font-semibold text-[var(--color-text-muted)] italic">
              {dilemma.bookConnection}
            </span>
          </div>

          <div className="p-4.5 bg-[#FAF4EB] dark:bg-[#1E2738] border-2 border-[var(--color-accent-border)] rounded-xl space-y-3 shadow-2xs transition-colors">
            {/* Resalte del trasfondo de la obra */}
            <div className="p-2.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[var(--color-text-primary)] font-medium">Clave literaria de la obra:</strong>{' '}
                {dilemma.literaryContext}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed font-serif">
              {selectedOption.bookConnectionDetail}
            </p>
          </div>
        </div>

        {/* BLOQUE 4: Conexión con Core IV */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-text-secondary)]">
            <Bookmark className="w-4 h-4 text-[var(--color-accent)]" />
            <span>4. Conexión con Core IV:</span>
          </div>
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] text-xs sm:text-sm leading-relaxed">
            {selectedOption.coreIVConnectionDetail}
          </div>
        </div>

        {/* BLOQUE 5: Pregunta de reflexión */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)]">
            <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
            <span>5. Pregunta de reflexión:</span>
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
            Puedes descargar tu tarjeta en PDF o avanzar a la pausa reflexiva.
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
