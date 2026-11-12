import React from 'react';
import { Dilemma, DilemmaOption, Indicators } from '../types';
import { ArrowRight, Compass, ShieldAlert, Sparkles, Scale, Users, ShieldCheck } from 'lucide-react';
import { ValueStats } from './ValueStats';

interface ConsequenceCardProps {
  dilemma: Dilemma;
  selectedOption: DilemmaOption;
  indicators: Indicators;
  onProceedToReflection: () => void;
}

export const ConsequenceCard: React.FC<ConsequenceCardProps> = ({
  dilemma,
  selectedOption,
  indicators,
  onProceedToReflection
}) => {
  const effectEntries = Object.entries(selectedOption.effects) as [keyof Indicators, number][];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-4 sm:py-6 text-left">
      {/* Step Indicator Header */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3">
        <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
          Peldaño {dilemma.step} de 10 · Consecuencias de tu elección
        </span>
        <span className="text-xs text-stone-500">
          Tema: {dilemma.theme}
        </span>
      </div>

      {/* Main Consequence Display */}
      <div className="bg-white/95 border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* User Choice Reminder */}
        <div className="p-4 bg-stone-50/80 border border-stone-200/80 rounded-xl space-y-1">
          <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-500">
            Tu postura elegida
          </div>
          <div className="font-serif font-bold text-stone-900 text-base">
            {selectedOption.label}
          </div>
          <div className="text-xs text-stone-600">
            {selectedOption.text}
          </div>
        </div>

        {/* Narrative Outcome */}
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800">
            Consecuencia narrativa
          </div>
          <div className="p-4 bg-amber-50/50 border border-amber-200/80 rounded-xl text-stone-900 text-sm sm:text-base font-serif italic leading-relaxed">
            «{selectedOption.consequence}»
          </div>
        </div>

        {/* Neutral Ethical Explanation */}
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
            Discernimiento ético neutral
          </div>
          <div className="p-4 bg-white border border-stone-200 rounded-xl text-stone-700 text-xs sm:text-sm leading-relaxed">
            {selectedOption.explanation}
          </div>
        </div>

        {/* Indicator impact list */}
        <div className="space-y-3 pt-2 border-t border-stone-100">
          <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
            Impacto en tus indicadores:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {effectEntries.map(([key, delta]) => {
              const isPositive = delta > 0;
              const isZero = delta === 0;

              return (
                <div
                  key={key}
                  className={`p-2.5 rounded-xl border flex flex-col justify-between ${
                    isZero
                      ? 'bg-stone-50 border-stone-200 text-stone-600'
                      : isPositive
                      ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                      : 'bg-red-50/70 border-red-200 text-red-900'
                  }`}
                >
                  <span className="text-[11px] font-semibold capitalize">
                    {key}
                  </span>
                  <span className="text-base font-bold tabular-nums">
                    {isPositive ? `+${delta}` : delta}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mini stats view */}
        <div className="pt-2">
          <ValueStats indicators={indicators} recentEffects={selectedOption.effects} compact />
        </div>

        {/* Proceed to Reflection */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-end">
          <button
            onClick={onProceedToReflection}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 text-sm font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
          >
            <span>Ir a la pausa de reflexión</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
