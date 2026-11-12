import React from 'react';
import { ArrowRight, Check, Lock, ChevronRight, Compass, Award, User } from 'lucide-react';
import { DILEMMAS } from '../data/dilemmas';
import { CoreVisibleStats, DecisionRecord } from '../types';
import { ValueStats } from './ValueStats';
import { ProgressDashboard } from './ProgressDashboard';

interface StaircaseBoardProps {
  currentStep: number;
  completedSteps: number[];
  visibleStats: CoreVisibleStats;
  history: DecisionRecord[];
  onEnterStep: (stepNumber: number) => void;
  onFinishJourney?: () => void;
}

export const StaircaseBoard: React.FC<StaircaseBoardProps> = ({
  currentStep,
  completedSteps,
  visibleStats,
  history,
  onEnterStep,
  onFinishJourney
}) => {
  const isFinished = completedSteps.length >= 10;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 py-4 sm:py-6 text-left">
      {/* Top Header / Progress summary */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--color-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-1">
            <span>Escalera de decisiones</span>
            <span aria-hidden="true">·</span>
            <span>Experiencia individual</span>
            <span aria-hidden="true">·</span>
            <span>Core IV</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--color-text-primary)]">
            {isFinished ? 'Has completado los 10 peldaños' : `Peldaño actual: ${currentStep} de 10`}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
            {isFinished
              ? 'Tu recorrido ha concluido. Descubre el diagnóstico final de tu proyecto de vida.'
              : 'Asciende paso a paso. Cada elección moldea tus hábitos, tu libertad y tu camino hacia una vida lograda.'}
          </p>
        </div>

        {/* Global Progress Pill */}
        <div className="flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-border)] px-4 py-2.5 rounded-xl shadow-2xs self-start sm:self-auto transition-colors">
          <div className="text-right">
            <span className="text-[11px] text-[var(--color-text-muted)] uppercase font-semibold block">Progreso</span>
            <span className="text-sm font-bold text-[var(--color-text-primary)] tabular-nums">
              {completedSteps.length} / 10 peldaños
            </span>
          </div>
          <div className="w-12 h-12 relative flex items-center justify-center shrink-0">
            <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[var(--color-surface-muted)]"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                style={{ stroke: 'var(--color-accent)' }}
                className="transition-all duration-700"
                strokeDasharray={`${(completedSteps.length / 10) * 100}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-[11px] font-bold text-[var(--color-text-primary)] tabular-nums">
              {Math.round((completedSteps.length / 10) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* 4 Visible Indicators Stats Panel */}
      <ValueStats stats={visibleStats} />

      {/* Historical Evolution Chart using Recharts if at least 1 decision made */}
      {history.length > 0 && (
        <ProgressDashboard history={history} currentStats={visibleStats} />
      )}

      {/* Interactive Staircase Visualization */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)]">
          <h2 className="font-serif font-bold text-lg text-[var(--color-text-primary)] flex items-center gap-2">
            <Compass className="w-5 h-5 text-[var(--color-accent)]" />
            <span>Los diez peldaños del actuar humano</span>
          </h2>
          <span className="text-xs text-[var(--color-text-muted)]">
            De abajo hacia arriba: del contexto a la realización
          </span>
        </div>

        {/* Vertical/ascending stepped list */}
        <div className="space-y-3">
          {DILEMMAS.slice().reverse().map((dilemma) => {
            const stepNum = dilemma.step;
            const isCompleted = completedSteps.includes(stepNum);
            const isCurrent = currentStep === stepNum && !isFinished;
            const isPending = !isCompleted && !isCurrent;

            return (
              <div
                key={stepNum}
                onClick={() => {
                  if (isCurrent) onEnterStep(stepNum);
                }}
                className={`relative rounded-xl border p-3.5 sm:p-4 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isCurrent
                    ? 'bg-[var(--color-accent-subtle)] border-[var(--color-accent)] ring-2 ring-[var(--color-accent-border)] shadow-md cursor-pointer'
                    : isCompleted
                    ? 'bg-[var(--color-surface-subtle)] border-[var(--color-border)] text-[var(--color-text-secondary)]'
                    : 'bg-[var(--color-surface-subtle)] border-[var(--color-border-subtle)] text-[var(--color-text-muted)] opacity-65'
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
                        ? 'bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] shadow-xs'
                        : isCompleted
                        ? 'bg-[var(--color-stat-integridad)] text-white'
                        : 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4 stroke-[2.5]" /> : stepNum}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                        {dilemma.theme}
                      </span>
                      <span className="text-[var(--color-text-muted)] font-serif">·</span>
                      <span className="text-[var(--color-text-muted)] text-[11px] truncate max-w-[200px] sm:max-w-xs">
                        {dilemma.bookConnection.replace('Inspirado en el conflicto de ', '').replace('Inspirado en el conflicto interior de ', '')}
                      </span>
                    </div>
                    <div className="font-serif font-bold text-[var(--color-text-primary)] text-base leading-snug">
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-2xs cursor-pointer"
                    >
                      <span>Entrar al dilema</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {isCompleted && (
                    <span className="text-xs font-medium flex items-center gap-1" style={{ color: 'var(--color-stat-integridad)' }}>
                      <Check className="w-3.5 h-3.5" />
                      Completado
                    </span>
                  )}

                  {isPending && (
                    <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
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
        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[var(--color-text-muted)]">
            {isFinished ? (
              <span>Has completado todos los peldaños. Puedes consultar tu diagnóstico final.</span>
            ) : (
              <span>
                Para avanzar, pulsa <strong className="text-[var(--color-text-primary)]">«Entrar al dilema»</strong> en el peldaño activo ({currentStep}: {DILEMMAS.find(d => d.step === currentStep)?.theme}).
              </span>
            )}
          </div>

          <div>
            {isFinished ? (
              <button
                onClick={onFinishJourney}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-300" />
                <span>Ver resultado final</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => onEnterStep(currentStep)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
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
