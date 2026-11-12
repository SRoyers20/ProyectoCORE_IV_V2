import React from 'react';
import { DecisionRecord } from '../types';
import { ArrowLeft, BookOpen, Check, History, RotateCcw, Sparkles } from 'lucide-react';

interface JourneyReviewProps {
  history: DecisionRecord[];
  onBackToResult: () => void;
  onRestart: () => void;
}

export const JourneyReview: React.FC<JourneyReviewProps> = ({
  history,
  onBackToResult,
  onRestart
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 py-4 sm:py-8 text-left">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <button
          onClick={onBackToResult}
          className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al resultado final</span>
        </button>

        <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
          10 decisiones registradas
        </span>
      </div>

      <div className="space-y-2">
        <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
          Recorrido de la escalera · Core IV
        </div>
        <h1 className="text-3xl font-serif font-bold text-stone-900">
          Revisión detallada de tus decisiones
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Examina cómo cada elección influyó en tu camino, las tensiones que priorizaste y las consecuencias que asumiste a lo largo de los diez peldaños.
        </p>
      </div>

      {/* Decision records list */}
      <div className="space-y-4">
        {history.map((record) => {
          const effectsList = Object.entries(record.effects).filter(([_, v]) => v !== 0);

          return (
            <div
              key={record.step}
              className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4"
            >
              {/* Step Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-stone-900 text-stone-50 font-bold text-xs flex items-center justify-center">
                    {record.step}
                  </span>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
                      {record.theme}
                    </span>
                    <h3 className="font-serif font-bold text-stone-900 text-base leading-tight">
                      {record.title}
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] text-stone-600 italic">
                  {record.bookConnection}
                </span>
              </div>

              {/* Chosen Option */}
              <div className="p-3.5 bg-stone-50/80 rounded-xl border border-stone-200/70 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-700">
                    Tu elección: Opción [{record.selectedOptionId.toUpperCase()}]
                  </span>
                  <span className="text-[11px] text-stone-600 font-serif italic">
                    {record.selectedStance}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-900 font-medium">
                  {record.selectedOptionText}
                </p>
              </div>

              {/* Consequence & Impact */}
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-stone-700 block text-xs uppercase tracking-wider mb-1">
                    Consecuencia narrativa:
                  </span>
                  <p className="p-3 bg-amber-50/50 rounded-lg border border-amber-200/60 font-serif italic text-stone-900">
                    «{record.consequence}»
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-xs text-stone-500 font-medium mr-1">Impacto:</span>
                  {effectsList.map(([k, v]) => (
                    <span
                      key={k}
                      className={`text-[11px] font-bold px-2 py-0.5 rounded border capitalize tabular-nums ${
                        Number(v) > 0
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-red-50 text-red-800 border-red-200'
                      }`}
                    >
                      {k}: {Number(v) > 0 ? `+${v}` : v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reflection question & optional student note */}
              <div className="pt-2 border-t border-stone-100 space-y-1.5 text-xs text-stone-600">
                <div className="italic text-stone-700">
                  <strong className="text-stone-900 font-sans not-italic">Pregunta de reflexión:</strong> «{record.reflectionQuestion}»
                </div>
                {record.studentReflection && (
                  <div className="p-2.5 bg-stone-100/60 rounded-lg border border-stone-200/80 text-stone-800">
                    <span className="font-semibold text-stone-700 block text-[11px] uppercase mb-0.5">Tu apunte personal:</span>
                    <p className="italic">"{record.studentReflection}"</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 flex items-center justify-between border-t border-stone-200">
        <button
          onClick={onBackToResult}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-stone-50 text-sm font-medium rounded-xl hover:bg-stone-800 transition-colors shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al diagnóstico final</span>
        </button>

        <button
          onClick={onRestart}
          className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-red-800 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar experiencia</span>
        </button>
      </div>
    </div>
  );
};
