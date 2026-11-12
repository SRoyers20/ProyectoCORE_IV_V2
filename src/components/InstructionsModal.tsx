import React from 'react';
import { BookOpen, Compass, Scale, ShieldCheck, HeartHandshake, CheckCircle2, X } from 'lucide-react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="instructions-title"
    >
      <div className="bg-[#FAF7F2] border border-stone-300 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700/40"
          aria-label="Cerrar instrucciones"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-1">
            Guía de la experiencia · Core IV
          </div>
          <h2 id="instructions-title" className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            ¿Cómo se vive «Decide tu Camino»?
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Una experiencia pedagógica de 7 a 12 minutos sobre libertad, conciencia y realización personal.
          </p>
        </div>

        <div className="space-y-6 text-sm text-stone-700 leading-relaxed">
          {/* Reglas de la escalera */}
          <div className="p-4 bg-white/70 border border-stone-200/80 rounded-xl space-y-2">
            <h3 className="font-semibold text-stone-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-700" />
              1. La escalera de 10 peldaños
            </h3>
            <p>
              Comienzas en el peldaño 1 (Circunstancias) y asciendes hasta el peldaño 10 (Realización personal). En cada peldaño enfrentarás una situación universitaria con tensiones reales entre valores.
            </p>
          </div>

          {/* Sin respuestas correctas o incorrectas */}
          <div className="p-4 bg-white/70 border border-stone-200/80 rounded-xl space-y-2">
            <h3 className="font-semibold text-stone-900 flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-700" />
              2. No es un examen con respuestas "correctas"
            </h3>
            <p>
              Ninguna opción es simplemente "buena" o "mala". Cada elección representa una postura ética real, con ventajas inmediatas y costos morales o relacionales. Elige según lo que verdaderamente harías o defenderías.
            </p>
          </div>

          {/* Los 5 Indicadores */}
          <div className="p-4 bg-white/70 border border-stone-200/80 rounded-xl space-y-3">
            <h3 className="font-semibold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              3. El sistema de 5 indicadores (inician en 50/100)
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong className="text-stone-900">Libertad:</strong> Capacidad de decidir con autonomía sin someterse ciegamente al miedo o a la imposición.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong className="text-stone-900">Integridad:</strong> Coherencia entre los principios éticos y la acción práctica concreta.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong className="text-stone-900">Conciencia:</strong> Capacidad de escuchar la voz interior y no autoengañarse con racionalizaciones.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200">
                <strong className="text-stone-900">Responsabilidad:</strong> Disposición a responder activamente por las consecuencias de los propios actos.
              </li>
              <li className="p-2 bg-stone-50 rounded border border-stone-200 sm:col-span-2">
                <strong className="text-stone-900">Relaciones:</strong> Cuidado de los vínculos humanos, solidaridad hacia los vulnerables y confianza comunitaria.
              </li>
            </ul>
          </div>

          {/* Conexión Literaria */}
          <div className="p-4 bg-white/70 border border-stone-200/80 rounded-xl space-y-2">
            <h3 className="font-semibold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-700" />
              4. Diálogo con dos grandes obras clásicas
            </h3>
            <p>
              Los dilemas están inspirados en los conflictos de <span className="italic">Matar a un ruiseñor</span> (Atticus Finch y Scout frente a la presión social y la justicia) y <span className="italic">Crimen y castigo</span> (Raskólnikov y la tentación de justificar actos injustos mediante la razón).
            </p>
          </div>

          {/* Pasos en cada peldaño */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2 text-stone-800">
            <h3 className="font-semibold text-amber-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-700" />
              5. Dinámica de avance en cada peldaño
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-stone-700">
              <li>Lee el contexto narrativo y ubica la tensión ética principal.</li>
              <li>Elige una de las cuatro posturas posibles.</li>
              <li>Revisa la consecuencia narrativa y la modificación de tus indicadores.</li>
              <li>Lee la pregunta de reflexión y pulsa «Subir al siguiente peldaño».</li>
              <li>Al finalizar los 10 peldaños recibirás tu perfil ético integral, con opción de revisar y copiar tu recorrido.</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-stone-900 text-stone-50 text-sm font-medium rounded-xl hover:bg-stone-800 transition-colors focus:ring-2 focus:ring-stone-500 focus:outline-none"
          >
            Entendido, continuar
          </button>
        </div>
      </div>
    </div>
  );
};
