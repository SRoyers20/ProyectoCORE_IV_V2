import React from 'react';
import { Compass, Repeat, ShieldCheck, Sparkles, BookOpen, CheckCircle2, X, User } from 'lucide-react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="instructions-title"
    >
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative transition-colors text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-surface-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] cursor-pointer"
          aria-label="Cerrar instrucciones"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-1">
            Guía de la experiencia · Core IV
          </div>
          <h2 id="instructions-title" className="text-2xl sm:text-3xl font-serif font-bold text-[var(--color-text-primary)]">
            ¿Cómo se vive «Decide tu Camino»?
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">
            Una experiencia individual de 7 a 12 minutos sobre libertad, hábitos, autenticidad y realización personal.
          </p>
          <div className="mt-3 p-3 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl flex items-center gap-2 text-xs text-[var(--color-text-primary)]">
            <User className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
            <span>
              <strong>No compites contra otras personas.</strong> Recorres tu propio camino, tomas decisiones y observas cómo estas configuran tu proyecto de vida.
            </span>
          </div>
        </div>

        <div className="space-y-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {/* Reglas de la escalera */}
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-2">
            <h3 className="font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[var(--color-accent)]" />
              1. La escalera de 10 peldaños
            </h3>
            <p>
              Comienzas en el peldaño 1, <em>Circunstancias</em>, y avanzas hasta el peldaño 10, <em>Realización personal</em>. En cada peldaño enfrentarás una situación universitaria con tensiones reales entre valores.
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              No avanzas por azar ni por turnos. Avanzas al tomar una decisión y reflexionar sobre sus consecuencias.
            </p>
          </div>

          {/* Sin respuestas correctas o incorrectas */}
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-2">
            <h3 className="font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
              2. No es un examen con respuestas "correctas"
            </h3>
            <p>
              Ninguna opción es simplemente "buena" o "mala". Cada elección representa una postura ética real, con ventajas inmediatas y costos morales, personales o relacionales.
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              Elige según lo que verdaderamente harías o defenderías. Después de cada decisión, la aplicación te mostrará una reflexión para ayudarte a comprender su relación con los temas de Core IV.
            </p>
          </div>

          {/* Los 4 Temas Centrales */}
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
              <Repeat className="w-4 h-4 text-[var(--color-accent)]" />
              3. Los cuatro temas centrales de Core IV
            </h3>
            <p className="text-xs text-[var(--color-text-muted)]">
              Tu recorrido será evaluado mediante cuatro indicadores que inician en 50 sobre 100:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li className="p-2.5 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]">
                <strong className="text-[var(--color-text-primary)] block mb-0.5">Libertad responsable:</strong>
                Capacidad de decidir con autonomía, sin someterse ciegamente al miedo, la presión social o la imposición.
              </li>
              <li className="p-2.5 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]">
                <strong className="text-[var(--color-text-primary)] block mb-0.5">Consistencia:</strong>
                Reconocimiento de los patrones que construyen tus decisiones repetidas. Los hábitos no son actos aislados: configuran una trayectoria.
              </li>
              <li className="p-2.5 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]">
                <strong className="text-[var(--color-text-primary)] block mb-0.5">Coherencia personal:</strong>
                Alineación entre tus principios, tus acciones y las decisiones que tomas. Ser auténtico no significa hacer cualquier cosa, sino actuar de acuerdo con lo que reconoces como valioso.
              </li>
              <li className="p-2.5 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]">
                <strong className="text-[var(--color-text-primary)] block mb-0.5">Realización:</strong>
                Capacidad de construir un proyecto de vida que integre tu bienestar, tus relaciones y tu contribución al bien de los demás.
              </li>
            </ul>
            <p className="text-[11px] text-[var(--color-text-muted)] italic pt-1">
              Los indicadores inician en 50 sobre 100. Tus decisiones modificarán estos valores, pero el resultado final no será una calificación moral definitiva: será una invitación a reflexionar sobre el camino que estás construyendo.
            </p>
          </div>

          {/* Diálogo con dos grandes obras */}
          <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl space-y-2">
            <h3 className="font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[var(--color-accent)]" />
              4. Diálogo con dos grandes obras
            </h3>
            <p>
              Los dilemas están inspirados en los conflictos de <strong className="text-[var(--color-text-primary)]">Matar a un ruiseñor</strong> y <strong className="text-[var(--color-text-primary)]">Crimen y castigo</strong>.
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              En <em>Matar a un ruiseñor</em>, Atticus Finch y Scout enfrentan la presión social, los prejuicios y la necesidad de actuar con integridad.
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              En <em>Crimen y castigo</em>, Raskólnikov enfrenta la tentación de justificar una acción injusta mediante una teoría intelectual y descubre el peso de la conciencia.
            </p>
          </div>

          {/* Dinámica de cada peldaño */}
          <div className="p-4 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl space-y-2 text-[var(--color-text-primary)]">
            <h3 className="font-semibold text-[var(--color-accent)] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
              5. Dinámica de cada peldaño
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-[var(--color-text-secondary)]">
              <li>Lee el contexto narrativo.</li>
              <li>Identifica la tensión ética principal.</li>
              <li>Elige una de las cuatro posturas posibles.</li>
              <li>Lee la consecuencia narrativa.</li>
              <li>Observa cómo cambian tus indicadores.</li>
              <li>Lee la retroalimentación sobre la conexión con los libros y Core IV.</li>
              <li>Responde la pregunta de reflexión.</li>
              <li>Pulsa «Subir al siguiente peldaño».</li>
            </ol>
            <p className="text-xs text-[var(--color-text-muted)] pt-1">
              Al finalizar los diez peldaños, recibirás tu perfil de recorrido, con la posibilidad de revisar tus decisiones, identificar patrones y reflexionar sobre tu proyecto de vida.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none cursor-pointer"
          >
            Entendido, continuar
          </button>
        </div>
      </div>
    </div>
  );
};
