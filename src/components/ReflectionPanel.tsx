import React, { useState } from 'react';
import { Dilemma, DilemmaOption, HabitType } from '../types';
import { ArrowRight, MessageSquareQuote, PenLine, Repeat, Sparkles } from 'lucide-react';

interface ReflectionPanelProps {
  dilemma: Dilemma;
  selectedOption: DilemmaOption;
  currentStep: number;
  totalSteps: number;
  habitsHistory: HabitType[];
  initialNote?: string;
  onSaveNoteAndAdvance: (note: string) => void;
}

export const ReflectionPanel: React.FC<ReflectionPanelProps> = ({
  dilemma,
  selectedOption,
  currentStep,
  totalSteps,
  habitsHistory,
  initialNote = '',
  onSaveNoteAndAdvance
}) => {
  const [studentNote, setStudentNote] = useState(initialNote);
  const isFinalStep = currentStep >= totalSteps;

  // Habit pattern calculation
  const habitCounts = habitsHistory.reduce((acc, h) => {
    acc[h] = (acc[h] || 0) + 1;
    return acc;
  }, {} as Record<HabitType, number>);

  // Determine if a pattern has emerged (3 or more similar choices)
  let patternMessage: string | null = null;
  if (habitCounts['evitacion'] && habitCounts['evitacion'] >= 3) {
    patternMessage = 'Has tomado varias decisiones orientadas a evitar el conflicto directo. Esto no define quién eres, pero muestra una tendencia que puede influir en tu proyecto de vida.';
  } else if (habitCounts['conveniencia'] && habitCounts['conveniencia'] >= 3) {
    patternMessage = 'Tus elecciones recientes han priorizado con frecuencia la conveniencia inmediata. Reflexiona si esta tendencia responde a una verdadera libertad o a una reacción ante la presión del momento.';
  } else if (habitCounts['racionalizacion'] && habitCounts['racionalizacion'] >= 2) {
    patternMessage = 'Has elegido opciones con justificaciones futuras o utilitarias. Observa cómo la mente puede habituarse a posponer la responsabilidad ética.';
  } else if (habitCounts['integridad'] && habitCounts['integridad'] >= 3) {
    patternMessage = 'Estás construyendo un patrón constante de firmeza ética. Recuerda acompañar esta convicción con prudencia y diálogo constructivo hacia los demás.';
  } else if (habitCounts['solidaria'] && habitCounts['solidaria'] >= 3) {
    patternMessage = 'Se observa un hábito persistente de buscar el bien común y tender puentes. Es un cimiento valioso para una vida lograda.';
  }

  const handleContinue = () => {
    onSaveNoteAndAdvance(studentNote);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-4 sm:py-6 text-left">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
        <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)]">
          Pausa reflexiva · Peldaño {currentStep} de {totalSteps}
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">
          Tema: {dilemma.theme}
        </span>
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
        
        {/* Core Question Callout */}
        <div className="flex items-start gap-3 p-4 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl">
          <MessageSquareQuote className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Pregunta de discernimiento personal
            </div>
            <p className="text-base sm:text-lg font-serif italic text-[var(--color-text-primary)] leading-snug">
              «{selectedOption.reflection}»
            </p>
          </div>
        </div>

        {/* MECÁNICA DE HÁBITOS: Casilla especial "El peso de lo repetido" */}
        <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
            <Repeat className="w-4 h-4 text-[var(--color-stat-integridad)]" />
            <span>El peso de lo repetido · Mecánica de hábitos</span>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
            Las decisiones pequeñas se acumulan. Revisa el patrón que has construido hasta ahora: lo que eliges de manera repetida va configurando tus hábitos y modelando tu carácter.
          </p>

          {patternMessage && (
            <div className="mt-2 p-3 rounded-lg border text-xs" style={{
              backgroundColor: 'var(--color-accent-subtle)',
              borderColor: 'var(--color-accent-border)',
              color: 'var(--color-text-primary)'
            }}>
              <strong className="block text-[var(--color-accent)] font-semibold mb-0.5">
                Patrón detectado en tu recorrido:
              </strong>
              {patternMessage}
            </div>
          )}
        </div>

        {/* Optional Student Notebook / Text Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label 
              htmlFor="reflection-note"
              className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-secondary)] flex items-center gap-1.5"
            >
              <PenLine className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
              <span>Anota tu reflexión personal o vínculo con tu vida universitaria:</span>
            </label>
            <span className="text-[11px] text-[var(--color-text-muted)]">Opcional · Quedará guardado en tu reporte</span>
          </div>

          <textarea
            id="reflection-note"
            rows={4}
            value={studentNote}
            onChange={(e) => setStudentNote(e.target.value)}
            placeholder="Escribe brevemente cómo resuena esta situación con tus vivencias, con los temas de Core IV o con las obras analizadas en clase..."
            className="w-full p-3.5 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:bg-[var(--color-surface)] transition-all resize-y"
          />
        </div>

        {/* Core IV Principle reminder */}
        <div className="p-3 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-xs text-[var(--color-text-muted)] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
          <span>
            Recuerda: la realización personal no consiste en no equivocarse jamás, sino en aprender a examinar por qué hacemos lo que hacemos y asumir cómo nuestras decisiones afectan a los demás.
          </span>
        </div>

        {/* Button to proceed to next step or final */}
        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
          <span className="text-xs text-[var(--color-text-muted)] hidden sm:inline">
            {isFinalStep 
              ? 'Has completado los diez peldaños de la experiencia.'
              : `A continuación: Peldaño ${currentStep + 1} de ${totalSteps}.`}
          </span>

          <button
            onClick={handleContinue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
          >
            {isFinalStep ? (
              <>
                <span>Ver resultado final y diagnóstico ético</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
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
