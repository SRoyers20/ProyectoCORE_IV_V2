import React from 'react';
import { ArrowRight, Check, Lock, ChevronRight, BookOpen, Compass, Award } from 'lucide-react';
import { DILEMMAS } from '../data/dilemmas';
import { Indicators, IndicatorEffects } from '../types';
import { ValueStats } from './ValueStats';

interface StaircaseBoardProps {
  currentStep: number; // 1 to 10
  completedSteps: number[]; // array of completed step numbers
  indicators: Indicators;
  recentEffects?: IndicatorEffects | null;
  onEnterStep: (stepNumber: number) => void;
  onFinishJourney?: () => void;
}

export const StaircaseBoard: React.FC<StaircaseBoardProps> = ({
  currentStep,
  completedSteps,
  indicators,
  recentEffects,
  onEnterStep,
  onFinishJourney
}) => {
  const isFinished = completedSteps.length >= 10;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 py-4 sm:py-6 text-left">
      {/* Top Header / Progress summary */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-800 mb-1">
            <span>Escalera de decisiones</span>
            <span aria-hidden="true">·</span>
            <span>Core IV</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            {isFinished ? 'Has completado los 10 peldaños' : `Peldaño actual: ${currentStep} de 10`}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {isFinished
              ? 'Tu recorrido ha concluido. Descubre el diagnóstico final de tu proyecto de vida.'
              : 'Asciende paso a paso. Cada elección moldea tu libertad y tu conciencia moral.'}
          </p>
        </div>

        {/* Global Progress Pill */}
        <div className="flex items-center gap-3 bg-white border border-stone-200/90 px-4 py-2.5 rounded-xl shadow-2xs self-start sm:self-auto">
          <div className="text-right">
            <span className="text-[11px] text-stone-500 uppercase font-semibold block">Progreso</span>
            <span className="text-sm font-bold text-stone-900 tabular-nums">
              {completedSteps.length} / 10 completados
            </span>
          </div>
          <div className="w-12 h-12 relative flex items-center justify-center shrink-0">
            <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-stone-200"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-amber-700 transition-all duration-700"
                strokeDasharray={`${(completedSteps.length / 10) * 100}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-[11px] font-bold text-stone-800 tabular-nums">
              {Math.round((completedSteps.length / 10) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Live Value Stats Panel */}
      <ValueStats indicators={indicators} recentEffects={recentEffects} />

      {/* Interactive Staircase Visualization */}
      <div className="bg-white/90 border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-stone-100">
          <h2 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-800" />
            <span>Los diez peldaños del actuar humano</span>
          </h2>
          <span className="text-xs text-stone-500">
            De abajo hacia arriba: del contexto a la realización
          </span>
        </div>

        {/* Vertical/ascending stepped list (from 10 down to 1 visually, or 1 to 10 with clear ascending metaphor) */}
        <div className="space-y-3">
          {DILEMMAS.slice().reverse().map((dilemma) => {
            const stepNum = dilemma.step;
            const isCompleted = completedSteps.includes(stepNum);
            const isCurrent = currentStep === stepNum && !isFinished;
            const isPending = !isCompleted && !isCurrent;

            // Visual step width offset to simulate an ascending staircase
            // Peldaño 10 is at the top, wide or pinnacle
            return (
              <div
                key={stepNum}
                onClick={() => {
                  if (isCurrent) onEnterStep(stepNum);
                }}
                className={`relative rounded-xl border p-3.5 sm:p-4 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isCurrent
                    ? 'bg-amber-50/60 border-amber-600/90 ring-2 ring-amber-700/20 shadow-md cursor-pointer'
                    : isCompleted
                    ? 'bg-stone-50/90 border-stone-200 text-stone-700'
                    : 'bg-stone-50/40 border-stone-200/60 text-stone-600 opacity-80'
                }`}
                style={{
                  marginLeft: `${(10 - stepNum) * 1}%`,
                  marginRight: `${(stepNum - 1) * 1}%`
                }}
              >
                {/* Left Side: Step Number, Theme & Title */}
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isCurrent
                        ? 'bg-stone-900 text-stone-50 shadow-xs'
                        : isCompleted
                        ? 'bg-emerald-700 text-white'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4 stroke-[2.5]" /> : stepNum}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold uppercase tracking-wider text-stone-700">
                        {dilemma.theme}
                      </span>
                      <span className="text-stone-600 font-serif">·</span>
                      <span className="text-stone-600 text-[11px] truncate max-w-[200px] sm:max-w-xs">
                        {dilemma.bookConnection.replace('Inspirado en el conflicto de ', '').replace('Inspirado en el conflicto interior de ', '')}
                      </span>
                    </div>
                    <div className="font-serif font-bold text-stone-900 text-base leading-snug">
                      {dilemma.title}
                    </div>
                  </div>
                </div>

                {/* Right Side: Status Tag & Action */}
                <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                  {isCurrent && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEnterStep(stepNum);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-stone-50 text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors shadow-2xs cursor-pointer"
                    >
                      <span>Entrar al dilema</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {isCompleted && (
                    <span className="text-xs text-emerald-800 font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Completado
                    </span>
                  )}

                  {isPending && (
                    <span className="text-xs text-stone-600 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" />
                      Pendiente
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Action Banner */}
        <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-500">
            {isFinished ? (
              <span>Has completado todos los peldaños. Puedes consultar tu diagnóstico completo.</span>
            ) : (
              <span>
                Para avanzar, pulsa <strong className="text-stone-800">«Entrar al dilema»</strong> en el peldaño activo ({currentStep}: {DILEMMAS.find(d => d.step === currentStep)?.theme}).
              </span>
            )}
          </div>

          <div>
            {isFinished ? (
              <button
                onClick={onFinishJourney}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-stone-50 text-sm font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Ver resultado final</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => onEnterStep(currentStep)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-stone-50 text-sm font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
              >
                <span>Responder Peldaño {currentStep}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
