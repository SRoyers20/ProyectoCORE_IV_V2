import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';
import { DecisionRecord, CoreVisibleStats } from '../types';
import { TrendingUp, Compass, Repeat, ShieldCheck, Sparkles } from 'lucide-react';

interface ProgressDashboardProps {
  history: DecisionRecord[];
  currentStats: CoreVisibleStats;
  compact?: boolean;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  history,
  currentStats,
  compact = false
}) => {
  // Build time series starting at step 0 (initial point 50/50/50/50)
  const chartData = [
    {
      stepLabel: 'Inicio',
      stepNumber: 0,
      'Libertad responsable': 50,
      'Consistencia': 50,
      'Coherencia personal': 50,
      'Realización': 50
    },
    ...history.map((record) => ({
      stepLabel: `P${record.step}`,
      stepNumber: record.step,
      theme: record.theme,
      'Libertad responsable': record.visibleStatsAfter.libertadResponsable,
      'Consistencia': record.visibleStatsAfter.consistencia,
      'Coherencia personal': record.visibleStatsAfter.coherenciaPersonal,
      'Realización': record.visibleStatsAfter.realizacion
    }))
  ];

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[var(--color-accent)]" />
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-[var(--color-text-primary)]">
              Evolución acumulada de tus indicadores
            </h3>
            <p className="text-xs text-[var(--color-text-muted)]">
              Impacto histórico a lo largo de los diez peldaños de la escalera
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
          <span className="tabular-nums font-semibold text-[var(--color-text-primary)]">
            {history.length} de 10 peldaños registrados
          </span>
        </div>
      </div>

      {/* Chart container */}
      <div className="w-full h-64 sm:h-72 pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 15, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-border-subtle)"
              opacity={0.7}
            />
            <XAxis
              dataKey="stepLabel"
              tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }}
              axisLine={{ stroke: 'var(--color-border)' }}
            />
            <YAxis
              domain={[20, 100]}
              tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }}
              axisLine={{ stroke: 'var(--color-border)' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                borderRadius: '0.75rem',
                color: 'var(--color-text-primary)',
                fontSize: '0.75rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
              labelStyle={{ fontWeight: 'bold', color: 'var(--color-accent)' }}
            />
            <Legend
              wrapperStyle={{ fontSize: '0.75rem', paddingTop: '8px' }}
            />
            <Line
              type="monotone"
              dataKey="Libertad responsable"
              stroke="#D97706"
              strokeWidth={2.5}
              dot={{ r: 3, fill: '#D97706' }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Consistencia"
              stroke="#10B981"
              strokeWidth={2.5}
              dot={{ r: 3, fill: '#10B981' }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Coherencia personal"
              stroke="#6366F1"
              strokeWidth={2.5}
              dot={{ r: 3, fill: '#6366F1' }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Realización"
              stroke="#F59E0B"
              strokeWidth={2.5}
              dot={{ r: 3, fill: '#F59E0B' }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Snapshot summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[var(--color-border-subtle)] text-xs">
        <div className="p-2.5 rounded-lg bg-[var(--color-surface-subtle)] flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Libertad resp.
          </span>
          <span className="font-bold tabular-nums text-[var(--color-text-primary)]">
            {currentStats.libertadResponsable}
          </span>
        </div>

        <div className="p-2.5 rounded-lg bg-[var(--color-surface-subtle)] flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
            <Repeat className="w-3.5 h-3.5 text-emerald-600" />
            Consistencia
          </span>
          <span className="font-bold tabular-nums text-[var(--color-text-primary)]">
            {currentStats.consistencia}
          </span>
        </div>

        <div className="p-2.5 rounded-lg bg-[var(--color-surface-subtle)] flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            Coherencia
          </span>
          <span className="font-bold tabular-nums text-[var(--color-text-primary)]">
            {currentStats.coherenciaPersonal}
          </span>
        </div>

        <div className="p-2.5 rounded-lg bg-[var(--color-surface-subtle)] flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Realización
          </span>
          <span className="font-bold tabular-nums text-[var(--color-text-primary)]">
            {currentStats.realizacion}
          </span>
        </div>
      </div>
    </div>
  );
};
