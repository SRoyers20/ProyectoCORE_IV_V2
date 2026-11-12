import React from 'react';
import { Indicators, IndicatorEffects } from '../types';
import { Compass, ShieldCheck, Sparkles, Scale, Users } from 'lucide-react';

interface ValueStatsProps {
  indicators: Indicators;
  recentEffects?: IndicatorEffects | null;
  compact?: boolean;
}

interface StatConfig {
  key: keyof Indicators;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  colorClass: string;
}

const STATS_CONFIG: StatConfig[] = [
  {
    key: 'libertad',
    label: 'Libertad',
    icon: Compass,
    description: 'Autonomía de la voluntad y resistencia a la imposición',
    colorClass: 'bg-amber-600'
  },
  {
    key: 'integridad',
    label: 'Integridad',
    icon: ShieldCheck,
    description: 'Coherencia práctica entre principios éticos y acción',
    colorClass: 'bg-emerald-700'
  },
  {
    key: 'conciencia',
    label: 'Conciencia',
    icon: Sparkles,
    description: 'Claridad interior sin autoengaños ni racionalizaciones',
    colorClass: 'bg-indigo-700'
  },
  {
    key: 'responsabilidad',
    label: 'Responsabilidad',
    icon: Scale,
    description: 'Capacidad de asumir las consecuencias y reparar el daño',
    colorClass: 'bg-stone-700'
  },
  {
    key: 'relaciones',
    label: 'Relaciones',
    icon: Users,
    description: 'Cuidado de los otros, solidaridad y confianza comunitaria',
    colorClass: 'bg-teal-700'
  }
];

export const ValueStats: React.FC<ValueStatsProps> = ({ indicators, recentEffects, compact = false }) => {
  if (compact) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 w-full">
        {STATS_CONFIG.map(({ key, label, icon: Icon, colorClass }) => {
          const value = indicators[key];
          const delta = recentEffects ? recentEffects[key] : undefined;

          return (
            <div 
              key={key} 
              className="bg-white/80 border border-stone-200/90 rounded-xl p-2.5 flex flex-col justify-between shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs text-stone-600 mb-1">
                <span className="flex items-center gap-1.5 font-medium truncate">
                  <Icon className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  {label}
                </span>
                {delta !== undefined && delta !== 0 && (
                  <span className={`text-[10px] font-semibold tabular-nums ${delta > 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                    {delta > 0 ? `+${delta}` : delta}
                  </span>
                )}
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-base font-semibold text-stone-900 tabular-nums">
                  {value}
                </span>
                <span className="text-[10px] text-stone-600 tabular-nums">/ 100</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                <div 
                  className={`h-full ${colorClass} transition-all duration-500`}
                  style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
                  role="progressbar"
                  aria-valuenow={value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Nivel de ${label}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-white/90 border border-stone-200 rounded-2xl p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
        <div>
          <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
            Indicadores Personales · Core IV
          </h4>
          <p className="text-sm font-serif text-stone-800">
            Brújula ética en evolución (Base: 50 / 100)
          </p>
        </div>
        <span className="text-xs text-stone-600 italic hidden sm:inline">
          Evoluciona con cada elección
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {STATS_CONFIG.map(({ key, label, icon: Icon, description, colorClass }) => {
          const value = indicators[key];
          const delta = recentEffects ? recentEffects[key] : undefined;

          return (
            <div 
              key={key} 
              className="p-3 bg-stone-50/70 rounded-xl border border-stone-200/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-stone-600" />
                    {label}
                  </span>
                  {delta !== undefined && delta !== 0 && (
                    <span 
                      className={`text-xs font-bold tabular-nums px-1.5 py-0.2 rounded ${
                        delta > 0 ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60' : 'bg-red-50 text-red-800 border border-red-200/60'
                      }`}
                    >
                      {delta > 0 ? `+${delta}` : delta}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-stone-500 line-clamp-2 mb-2 leading-tight">
                  {description}
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between text-xs mb-1">
                  <span className="text-lg font-bold text-stone-900 tabular-nums">
                    {value}
                  </span>
                  <span className="text-[10px] text-stone-600">sobre 100</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full ${colorClass} transition-all duration-500`}
                    style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Nivel de ${label}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
