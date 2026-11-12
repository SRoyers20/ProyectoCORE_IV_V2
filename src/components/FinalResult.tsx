import React, { useState } from 'react';
import { FinalProfile, Indicators, DecisionRecord, InitialProfile } from '../types';
import { ValueStats } from './ValueStats';
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
  HeartHandshake, 
  HelpCircle,
  MessageSquareQuote
} from 'lucide-react';

interface FinalResultProps {
  profile: FinalProfile;
  indicators: Indicators;
  history: DecisionRecord[];
  initialProfile: InitialProfile | null;
  onReviewJourney: () => void;
  onRestart: () => void;
}

export const FinalResult: React.FC<FinalResultProps> = ({
  profile,
  indicators,
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

DESCRIPCIÓN DEL PERFIL:
${profile.description}

PUNTO DE PARTIDA INICIAL:
${initialProfile ? `${initialProfile.name} (${initialProfile.subtitle})` : 'No especificado'}

INDICADORES FINALES (Escala 0 a 100):
- Libertad:         ${indicators.libertad} / 100
- Integridad:       ${indicators.integridad} / 100
- Conciencia:       ${indicators.conciencia} / 100
- Responsabilidad:  ${indicators.responsabilidad} / 100
- Relaciones:       ${indicators.relaciones} / 100

FORTALEZAS IDENTIFICADAS:
1. ${profile.strengths[0]}
2. ${profile.strengths[1]}

ASPECTOS A REVISAR Y CRECIMIENTO:
1. ${profile.areasToReview[0]}
2. ${profile.areasToReview[1]}

CONEXIONES LITERARIAS:
• "Matar a un ruiseñor" (Harper Lee):
  ${profile.atticusConnection}

• "Crimen y castigo" (Fiódor Dostoievski):
  ${profile.raskolnikovConnection}

PREGUNTA DE CIERRE:
"${profile.closingQuestion}"

=======================================================
MENSAJE DE CIERRE:
"Tu camino no está definido por una sola decisión. La realización personal exige revisar lo que haces, comprender por qué lo haces y asumir cómo tus decisiones afectan a los demás."

INVITACIÓN A LA REFLEXIÓN:
"Reflexiona: ¿qué decisión de esta experiencia se parece más a una situación real de tu vida?"
=======================================================

RECORRIDO DE LOS 10 PELDAÑOS:
${history.map((record) => `
Peldaño ${record.step}: ${record.theme} - "${record.title}"
Opción elegida: [${record.selectedOptionId.toUpperCase()}] ${record.selectedOptionText}
Consecuencia: ${record.consequence}
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
      // Fallback
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

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 py-4 sm:py-8 text-left">
      {/* Top Banner */}
      <div className="text-center space-y-2 border-b border-stone-200 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-amber-800">
          <Award className="w-4 h-4 text-amber-700" />
          <span>Diagnóstico de realización personal · Core IV</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
          Tu camino ético: {profile.name}
        </h1>
        <p className="text-lg sm:text-xl font-serif italic text-stone-700 max-w-2xl mx-auto">
          «{profile.tagline}»
        </p>
      </div>

      {/* Main Diagnostic Card */}
      <div className="bg-white/95 border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* Description */}
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold tracking-wider text-stone-500">
            Interpretación cualitativa integral
          </div>
          <p className="text-base sm:text-lg text-stone-800 font-serif leading-relaxed">
            {profile.description}
          </p>
        </div>

        {/* Initial Profile link if exists */}
        {initialProfile && (
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-stone-600 flex items-center justify-between">
            <div>
              <span className="font-semibold text-stone-800">Punto de partida declarado:</span>{' '}
              {initialProfile.name} ({initialProfile.subtitle})
            </div>
            <span className="text-stone-600 italic">10 peldaños recorridos</span>
          </div>
        )}

        {/* Indicators Breakdown */}
        <div className="space-y-3 pt-2 border-t border-stone-100">
          <div className="text-xs uppercase font-bold tracking-wider text-stone-500">
            Indicadores consolidados tras tus diez decisiones
          </div>
          <ValueStats indicators={indicators} />
        </div>

        {/* Strengths and Growth Areas (2 and 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Fortalezas */}
          <div className="p-5 bg-emerald-50/50 border border-emerald-200/70 rounded-xl space-y-3">
            <h3 className="font-serif font-bold text-emerald-950 text-base flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>Dos fortalezas observadas</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-900 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>{profile.strengths[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>{profile.strengths[1]}</span>
              </li>
            </ul>
          </div>

          {/* Aspectos a revisar */}
          <div className="p-5 bg-amber-50/50 border border-amber-200/70 rounded-xl space-y-3">
            <h3 className="font-serif font-bold text-amber-950 text-base flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>Dos aspectos para examinar</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-900 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span>{profile.areasToReview[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span>{profile.areasToReview[1]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Literary Connections (Lee and Dostoevsky) */}
        <div className="space-y-3 pt-4 border-t border-stone-100">
          <div className="text-xs uppercase font-bold tracking-wider text-stone-500">
            Conexión con las obras de referencia
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-stone-50/90 border border-stone-200/90 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-stone-700">
                <Scale className="w-3.5 h-3.5 text-amber-800" />
                <span>Matar a un ruiseñor</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif">
                {profile.atticusConnection}
              </p>
            </div>

            <div className="p-4 bg-stone-50/90 border border-stone-200/90 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-stone-700">
                <BookOpen className="w-3.5 h-3.5 text-amber-800" />
                <span>Crimen y castigo</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif">
                {profile.raskolnikovConnection}
              </p>
            </div>
          </div>
        </div>

        {/* Closing Question */}
        <div className="p-4 bg-amber-50/60 border border-amber-200/90 rounded-xl space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
            Pregunta de cierre para tu proyecto de vida
          </div>
          <p className="text-sm sm:text-base font-serif italic text-stone-900">
            «{profile.closingQuestion}»
          </p>
        </div>

        {/* Mandatory Closing Message & Invitation */}
        <div className="p-6 bg-stone-900 text-stone-100 rounded-xl space-y-4 shadow-sm">
          <div className="flex items-start gap-3">
            <MessageSquareQuote className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                Mensaje de cierre · Core IV
              </div>
              <p className="text-base sm:text-lg font-serif italic text-stone-100 leading-snug">
                «Tu camino no está definido por una sola decisión. La realización personal exige revisar lo que haces, comprender por qué lo haces y asumir cómo tus decisiones afectan a los demás.»
              </p>
              <p className="text-xs sm:text-sm text-stone-300 font-sans pt-1">
                <strong className="text-amber-200">Reflexiona:</strong> ¿qué decisión de esta experiencia se parece más a una situación real de tu vida?
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onReviewJourney}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 text-stone-800 text-xs sm:text-sm font-medium rounded-xl hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer"
            >
              <History className="w-4 h-4 text-amber-800" />
              <span>Revisar mis decisiones (10 peldaños)</span>
            </button>

            <button
              onClick={handleCopyReport}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 text-stone-800 text-xs sm:text-sm font-medium rounded-xl hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-stone-600" />
                  <span>Compartir o copiar mi reflexión</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadReport}
              className="inline-flex items-center gap-2 px-3 py-2.5 text-stone-600 hover:text-stone-900 text-xs font-medium rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
              title="Descargar informe textual para clase"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Descargar .txt</span>
            </button>
          </div>

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs text-stone-600 hover:text-red-800 hover:bg-red-50/60 rounded-xl transition-colors cursor-pointer ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar experiencia</span>
          </button>
        </div>
      </div>
    </div>
  );
};
