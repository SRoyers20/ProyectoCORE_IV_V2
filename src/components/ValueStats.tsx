import React from 'react';
import { CoreVisibleStats } from '../types';
import { Compass, Repeat, ShieldCheck, Sparkles } from 'lucide-react';

interface ValueStatsProps {
  stats: CoreVisibleStats;
  compact?: boolean;
}

interface StatItem {
  key: keyof CoreVisibleStats;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  colorVar: string;
}

const VISIBLE_STATS_CONFIG: StatItem[] = [
  {
    key: 'libertadResponsable',
    label: 'Libertad responsable',
    icon: Compass,
    description: 'Capacidad de decidir con autonomía y asumir consecuencias.',
    colorVar: 'var(--color-stat-libertad)'
  },
  {
    key: 'consistencia',
    label: 'Consistencia',
    icon: Repeat,
    description: 'Patrón que están construyendo tus decisiones repetidas.',
    colorVar: 'var(--color-stat-integridad)'
  },
  {
    key: 'coherenciaPersonal',
    label: 'Coherencia personal',
    icon: ShieldCheck,
    description: 'Alineación entre tus principios y tus acciones.',
    colorVar: 'var(--color-stat-conciencia)'
  },
  {
    key: 'realizacion',
    label: 'Realización',
    icon: Sparkles,
    description: 'Equilibrio entre tu bienestar, tus relaciones y tu contribución al bien común.',
    colorVar: 'var(--color-accent)'
  }
];

export const ValueStats: React.FC<ValueStatsProps> = ({ stats, compact = false }) => {
  if (compact) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
        {VISIBLE_STATS_CONFIG.map(({ key, label, icon: Icon, colorVar }) => {
          const value = stats[key];

          return (
            <div 
              key={key} 
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-2.5 flex flex-col justify-between shadow-2xs transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] mb-1">
                <span className="flex items-center gap-1.5 font-medium truncate">
                  <Icon className="w-3.5 h-3.5 text-[var(--color-text-muted)] shrink-0" />
                  {label}
                </span>
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-base font-semibold text-[var(--color-text-primary)] tabular-nums">
                  {value}
                </span>
                <span className="text-[10px] text-[var(--color-text-muted)] tabular-nums">/ 100</span>
              </div>
              <div className="w-full bg-[var(--color-surface-subtle)] rounded-full h-1.5 overflow-hidden">
                <div 
                  className="h-full transition-all duration-500 rounded-full"
                  style={{ 
                    width: `${Math.min(Math.max(value, 0), 100)}%`,
                    backgroundColor: colorVar
                  }}
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
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 shadow-xs transition-colors">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--color-border-subtle)]">
        <div>
          <h4 className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold">
            Cuatro Temas Centrales · Core IV
          </h4>
          <p className="text-sm font-serif text-[var(--color-text-primary)]">
            Evolución de tu camino ético (Punto de partida: 50 / 100)
          </p>
        </div>
        <span className="text-xs text-[var(--color-text-muted)] italic hidden sm:inline">
          No es una calificación moral: muestra una tendencia
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        {VISIBLE_STATS_CONFIG.map(({ key, label, icon: Icon, description, colorVar }) => {
          const value = stats[key];

          return (
            <div 
              key={key} 
              className="p-3 bg-[var(--color-surface-subtle)] rounded-xl border border-[var(--color-border)] flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[var(--color-text-primary)] flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                    {label}
                  </span>
                </div>
                <p className="text-[11px] text-[var(--color-text-muted)] line-clamp-2 mb-2 leading-tight">
                  {description}
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between text-xs mb-1">
                  <span className="text-lg font-bold text-[var(--color-text-primary)] tabular-nums">
                    {value}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">sobre 100</span>
                </div>
                <div className="w-full bg-[var(--color-surface-muted)] rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-full transition-all duration-500 rounded-full"
                    style={{ 
                      width: `${Math.min(Math.max(value, 0), 100)}%`,
                      backgroundColor: colorVar
                    }}
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
