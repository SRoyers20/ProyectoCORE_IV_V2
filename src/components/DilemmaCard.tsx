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
          className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la escalera</span>
        </button>
      </div>

      {/* Main Card Container */}
      <div className="bg-white/95 border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* Step Badge & Thematic Tag */}
        <div className="space-y-2 border-b border-stone-100 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
              Peldaño {dilemma.step} de 10 · {dilemma.theme}
            </span>

            {/* Book Connection Tag - Required visible label */}
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-600 font-medium">
              <BookOpen className="w-3.5 h-3.5 text-amber-800 shrink-0" />
              <span>{dilemma.bookConnection}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
            {dilemma.title}
          </h1>

          <div className="text-xs text-stone-500 italic">
            {dilemma.literaryContext}
          </div>
        </div>

        {/* Narrative Context (80-120 words) */}
        <div className="p-4 sm:p-5 bg-stone-50/90 border border-stone-200/80 rounded-xl space-y-3">
          <div className="text-[11px] uppercase font-bold tracking-wider text-stone-500">
            Situación y contexto
          </div>
          <p className="text-sm sm:text-base text-stone-800 font-serif leading-relaxed">
            {dilemma.context}
          </p>

          <div className="pt-2 border-t border-stone-200/60 flex items-start gap-2 text-xs text-amber-900/90 font-sans">
            <Compass className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-stone-900">Conflicto central:</strong>{' '}
              {dilemma.coreConflict}
            </div>
          </div>
        </div>

        {/* 4 Choices */}
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-stone-500">
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
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3.5 focus:outline-none focus:ring-2 focus:ring-amber-700/30 ${
                    isSelected
                      ? 'bg-amber-50/60 border-amber-700/80 ring-1 ring-amber-700/40 shadow-xs'
                      : 'bg-white border-stone-200/90 hover:border-stone-300 hover:bg-stone-50/50'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border transition-colors ${
                      isSelected
                        ? 'bg-amber-800 border-amber-800 text-white'
                        : 'border-stone-300 bg-stone-50 text-stone-600'
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : option.id.toUpperCase()}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-stone-900 text-sm">
                        {option.label}
                      </span>
                      <span className="text-[11px] text-stone-600 italic">
                        {option.philosophicalStance}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
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
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-800">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-700" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-500 hidden sm:inline">
            Tus indicadores se actualizarán tras confirmar tu decisión.
          </span>

          <button
            onClick={handleConfirm}
            className="w-full sm:w-auto px-6 py-3 bg-stone-900 text-stone-50 text-sm font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
          >
            Confirmar decisión y ver consecuencias
          </button>
        </div>
      </div>
    </div>
  );
};
