import React, { useState } from 'react';
import { Dilemma, DilemmaOption } from '../types';
import { ArrowRight, BookOpen, MessageSquareQuote, PenLine, Sparkles } from 'lucide-react';

interface ReflectionPanelProps {
  dilemma: Dilemma;
  selectedOption: DilemmaOption;
  currentStep: number;
  totalSteps: number;
  initialNote?: string;
  onSaveNoteAndAdvance: (note: string) => void;
}

export const ReflectionPanel: React.FC<ReflectionPanelProps> = ({
  dilemma,
  selectedOption,
  currentStep,
  totalSteps,
  initialNote = '',
  onSaveNoteAndAdvance
}) => {
  const [studentNote, setStudentNote] = useState(initialNote);
  const isFinalStep = currentStep >= totalSteps;

  const handleContinue = () => {
    onSaveNoteAndAdvance(studentNote);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-4 sm:py-6 text-left">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3">
        <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
          Pausa reflexiva · Peldaño {currentStep} de {totalSteps}
        </span>
        <span className="text-xs text-stone-500">
          {dilemma.theme}
        </span>
      </div>

      <div className="bg-white/95 border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* Literary Thought Hook */}
        <div className="flex items-start gap-3 p-4 bg-amber-50/60 border border-amber-200/70 rounded-xl">
          <MessageSquareQuote className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Pregunta de discernimiento personal
            </div>
            <p className="text-base sm:text-lg font-serif italic text-stone-900 leading-snug">
              «{selectedOption.reflection}»
            </p>
          </div>
        </div>

        {/* Optional Student Notebook / Text Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label 
              htmlFor="reflection-note"
              className="text-xs uppercase tracking-wider font-semibold text-stone-600 flex items-center gap-1.5"
            >
              <PenLine className="w-3.5 h-3.5 text-stone-500" />
              <span>Anota tu reflexión o vínculo con tu propia vida (opcional):</span>
            </label>
            <span className="text-[11px] text-stone-600">Se incluirá en tu reporte final</span>
          </div>

          <textarea
            id="reflection-note"
            rows={4}
            value={studentNote}
            onChange={(e) => setStudentNote(e.target.value)}
            placeholder="Escribe brevemente cómo resuena esta situación con tus vivencias, prioridades o con las obras analizadas en clase..."
            className="w-full p-3.5 bg-stone-50 border border-stone-300 rounded-xl text-sm text-stone-800 placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:bg-white transition-all resize-y"
          />
        </div>

        {/* Core IV Principle reminder */}
        <div className="p-3 bg-stone-100/70 border border-stone-200/80 rounded-xl text-xs text-stone-600 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
          <span>
            Recuerda: la realización personal no consiste en no equivocarse jamás, sino en aprender a examinar por qué hacemos lo que hacemos.
          </span>
        </div>

        {/* Button to proceed to next step or final */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-500 hidden sm:inline">
            {isFinalStep 
              ? 'Has completado los diez peldaños de la experiencia.'
              : `A continuación: Peldaño ${currentStep + 1} de ${totalSteps}.`}
          </span>

          <button
            onClick={handleContinue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 text-sm font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
          >
            {isFinalStep ? (
              <>
                <span>Ver resultado final y diagnóstico ético</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </>
            ) : (
              <>
                <span>Subir al Peldaño {currentStep + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
