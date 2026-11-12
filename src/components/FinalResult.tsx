import React, { useState } from 'react';
import { FinalProfile, CoreVisibleStats, DecisionRecord, InitialProfile } from '../types';
import { ValueStats } from './ValueStats';
import { ProgressDashboard } from './ProgressDashboard';
import { 
  Award, 
  BookOpen, 
  Check, 
  Copy, 
  Download, 
  History, 
  RotateCcw, 
  Scale, 
  Sparkles, 
  HelpCircle,
  MessageSquareQuote,
  Compass
} from 'lucide-react';

interface FinalResultProps {
  profile: FinalProfile;
  visibleStats: CoreVisibleStats;
  history: DecisionRecord[];
  initialProfile: InitialProfile | null;
  onReviewJourney: () => void;
  onRestart: () => void;
}

export const FinalResult: React.FC<FinalResultProps> = ({
  profile,
  visibleStats,
  history,
  initialProfile,
  onReviewJourney,
  onRestart
}) => {
  const [copied, setCopied] = useState(false);

  const generateReportText = (): string => {
    return `=======================================================
DECIDE TU CAMINO — INFORME DE EXPERIENCIA ÉTICA
Core IV – Persona y su actuar (Core Curriculum)
=======================================================

PERFIL ÉTICO RESULTANTE:
${profile.name.toUpperCase()}
"${profile.tagline}"

DESCRIPCIÓN DEL RECORRIDO:
${profile.description}

PUNTO DE PARTIDA INICIAL:
${initialProfile ? `${initialProfile.name} (${initialProfile.subtitle})` : 'No especificado'}

INDICADORES FINALES (CUATRO TEMAS CENTRALES DE CORE IV):
- Libertad responsable: ${visibleStats.libertadResponsable} / 100
- Consistencia:         ${visibleStats.consistencia} / 100
- Coherencia personal:  ${visibleStats.coherenciaPersonal} / 100
- Realización:          ${visibleStats.realizacion} / 100

FORTALEZAS IDENTIFICADAS:
1. ${profile.strengths[0]}
2. ${profile.strengths[1]}

ASPECTOS PARA EXAMINAR Y CRECIMIENTO:
1. ${profile.areasToReview[0]}
2. ${profile.areasToReview[1]}

CONEXIONES LITERARIAS:
• "Matar a un ruiseñor" (Harper Lee):
  ${profile.atticusConnection}

• "Crimen y castigo" (Fiódor Dostoievski):
  ${profile.raskolnikovConnection}

=======================================================
¿QUÉ ES UNA VIDA LOGRADA?
Una vida lograda no consiste únicamente en llegar primero, obtener reconocimiento o evitar las dificultades. Se construye cuando una persona toma decisiones libres y responsables, mantiene hábitos que la orientan hacia aquello que considera valioso, actúa con autenticidad y considera la dignidad de las demás personas.

¿CÓMO SE LLEGA A ELLA?
No se llega de una sola vez. Se construye mediante decisiones repetidas, pequeñas acciones coherentes y la disposición a reconocer errores, reparar daños y orientar la vida hacia un proyecto con sentido.

TU RECORRIDO NO DEFINE QUIÉN ERES PARA SIEMPRE:
Te muestra la dirección en la que has estado avanzando. La pregunta no es solo si llegaste a la meta, sino qué tipo de persona fuiste construyendo durante el camino.

PREGUNTAS DE CIERRE PERSONAL:
- ¿En qué momento actuaste por convicción?
- ¿En qué momento actuaste por miedo o conveniencia?
- ¿Qué patrón de decisiones estás construyendo?
- ¿Tus decisiones fueron realmente libres?
- ¿Consideraste la dignidad y el bienestar de los demás?
- ¿Qué principio debería orientar tu proyecto de vida?
- ¿Qué decisión de esta experiencia se parece más a una situación real de tu vida?
=======================================================

RECORRIDO DE LOS 10 PELDAÑOS:
${history.map((record) => `
Peldaño ${record.step}: ${record.theme} - "${record.title}"
Opción elegida: [${record.selectedOptionId.toUpperCase()}] ${record.selectedOptionLabel}
Consecuencia: ${record.consequence}
Conexión con el libro: ${record.bookConnectionDetail}
Conexión con Core IV: ${record.coreIVConnectionDetail}
${record.studentReflection ? `Reflexión del estudiante: "${record.studentReflection}"` : ''}
`).join('\n')}
=======================================================`;
  };

  const handleCopyReport = async () => {
    const text = generateReportText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownloadReport = () => {
    const text = generateReportText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `decide_tu_camino_core_iv_${profile.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const personalClosingQuestions = [
    '¿En qué momento actuaste por convicción?',
    '¿En qué momento actuaste por miedo o conveniencia?',
    '¿Qué patrón de decisiones estás construyendo?',
    '¿Tus decisiones fueron realmente libres?',
    '¿Consideraste la dignidad y el bienestar de los demás?',
    '¿Qué principio debería orientar tu proyecto de vida?',
    '¿Qué decisión de esta experiencia se parece más a una situación real de tu vida?'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 py-4 sm:py-8 text-left">
      {/* Top Banner */}
      <div className="text-center space-y-2 border-b border-[var(--color-border)] pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[var(--color-accent)]">
          <Award className="w-4 h-4" />
          <span>Diagnóstico de realización personal · Core IV</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)]">
          Tu camino ético: {profile.name}
        </h1>
        <p className="text-lg sm:text-xl font-serif italic text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          «{profile.tagline}»
        </p>
      </div>

      {/* Main Diagnostic Card */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors">
        
        {/* Description */}
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-muted)]">
            Interpretación reflexiva del recorrido
          </div>
          <p className="text-base sm:text-lg text-[var(--color-text-primary)] font-serif leading-relaxed">
            {profile.description}
          </p>
        </div>

        {/* Initial Profile link if exists */}
        {initialProfile && (
          <div className="p-3.5 bg-[var(--color-surface-subtle)] rounded-xl border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] flex items-center justify-between">
            <div>
              <span className="font-semibold text-[var(--color-text-primary)]">Punto de partida declarado:</span>{' '}
              {initialProfile.name} ({initialProfile.subtitle})
            </div>
            <span className="text-[var(--color-text-muted)] italic">10 peldaños recorridos</span>
          </div>
        )}

        {/* 4 Indicators Breakdown */}
        <div className="space-y-3 pt-2 border-t border-[var(--color-border-subtle)]">
          <div className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-muted)]">
            Indicadores consolidados de Core IV
          </div>
          <ValueStats stats={visibleStats} />
        </div>

        {/* Historical Progress Dashboard (recharts) */}
        <div className="pt-2">
          <ProgressDashboard history={history} currentStats={visibleStats} />
        </div>

        {/* Strengths and Growth Areas (2 and 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Fortalezas */}
          <div 
            className="p-5 rounded-xl border space-y-3 transition-colors"
            style={{
              backgroundColor: 'var(--color-positive-bg)',
              borderColor: 'var(--color-positive-border)'
            }}
          >
            <h3 className="font-serif font-bold text-base flex items-center gap-2" style={{ color: 'var(--color-positive-text)' }}>
              <Check className="w-4 h-4" />
              <span>Dos fortalezas observadas</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-positive-text)' }}>•</span>
                <span>{profile.strengths[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-positive-text)' }}>•</span>
                <span>{profile.strengths[1]}</span>
              </li>
            </ul>
          </div>

          {/* Aspectos a revisar */}
          <div className="p-5 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl space-y-3 transition-colors">
            <h3 className="font-serif font-bold text-base flex items-center gap-2 text-[var(--color-accent)]">
              <HelpCircle className="w-4 h-4" />
              <span>Dos aspectos para examinar</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>{profile.areasToReview[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>{profile.areasToReview[1]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Literary Connections (Lee and Dostoevsky) */}
        <div className="space-y-3 pt-4 border-t border-[var(--color-border-subtle)]">
          <div className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-muted)]">
            Conexión con las obras de referencia
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-2 transition-colors">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[var(--color-accent)]">
                <Scale className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span>Matar a un ruiseñor</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-serif">
                {profile.atticusConnection}
              </p>
            </div>

            <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-2 transition-colors">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[var(--color-accent)]">
                <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span>Crimen y castigo</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-serif">
                {profile.raskolnikovConnection}
              </p>
            </div>
          </div>
        </div>

        {/* CIERRE ACADÉMICO: ¿Qué es una vida lograda y cómo se llega a ella? */}
        <div className="p-6 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] border border-[var(--color-border-strong)] rounded-2xl space-y-5 shadow-sm">
          <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-4">
            <h3 className="text-lg font-serif font-bold text-[var(--color-accent)] flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>¿Qué es una vida lograda?</span>
            </h3>
            <p className="text-sm sm:text-base font-serif leading-relaxed text-[var(--color-text-primary)]">
              «Una vida lograda no consiste únicamente en llegar primero, obtener reconocimiento o evitar las dificultades. Se construye cuando una persona toma decisiones libres y responsables, mantiene hábitos que la orientan hacia aquello que considera valioso, actúa con autenticidad y considera la dignidad de las demás personas.»
            </p>
          </div>

          <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-4">
            <h3 className="text-lg font-serif font-bold text-[var(--color-accent)] flex items-center gap-2">
              <Compass className="w-5 h-5" />
              <span>¿Cómo se llega a ella?</span>
            </h3>
            <p className="text-sm sm:text-base font-serif leading-relaxed text-[var(--color-text-primary)]">
              «No se llega de una sola vez. Se construye mediante decisiones repetidas, pequeñas acciones coherentes y la disposición a reconocer errores, reparar daños y orientar la vida hacia un proyecto con sentido.»
            </p>
          </div>

          <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)] block">
              Tu recorrido no define quién eres para siempre
            </span>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Te muestra la dirección en la que has estado avanzando. La pregunta no es solo si llegaste a la meta, sino qué tipo de persona fuiste construyendo durante el camino.
            </p>
          </div>
        </div>

        {/* Preguntas personales de cierre */}
        <div className="space-y-3 pt-2">
          <div className="text-xs uppercase font-bold tracking-wider text-[var(--color-accent)] flex items-center gap-1.5">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Preguntas de reflexión personal para tu proyecto de vida:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {personalClosingQuestions.map((q, idx) => (
              <div 
                key={idx}
                className="p-3 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] font-serif italic"
              >
                {q}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onReviewJourney}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-xs sm:text-sm font-medium rounded-xl hover:bg-[var(--color-surface-subtle)] transition-colors shadow-2xs cursor-pointer"
            >
              <History className="w-4 h-4 text-[var(--color-accent)]" />
              <span>Revisar mis decisiones (10 peldaños)</span>
            </button>

            <button
              onClick={handleCopyReport}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-xs sm:text-sm font-medium rounded-xl hover:bg-[var(--color-surface-subtle)] transition-colors shadow-2xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[var(--color-stat-integridad)]" />
                  <span className="font-medium" style={{ color: 'var(--color-stat-integridad)' }}>¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[var(--color-text-muted)]" />
                  <span>Compartir o copiar mi reflexión</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadReport}
              className="inline-flex items-center gap-2 px-3 py-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-xs font-medium rounded-xl hover:bg-[var(--color-surface-subtle)] transition-colors cursor-pointer"
              title="Descargar informe textual para clase"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Descargar .txt</span>
            </button>
          </div>

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs text-[var(--color-text-muted)] hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors cursor-pointer ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar experiencia</span>
          </button>
        </div>
      </div>
    </div>
  );
};
