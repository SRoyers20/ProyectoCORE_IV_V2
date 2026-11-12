import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Compass, Scale, Shield, Sparkles } from 'lucide-react';
import scalesImage from '../assets/images/literary_dialogue_scales_1791412465563.jpg';

interface PurposeScreenProps {
  onBack: () => void;
  onProceed: () => void;
}

export const PurposeScreen: React.FC<PurposeScreenProps> = ({ onBack, onProceed }) => {
  const concepts = [
    'Libertad', 'Circunstancias', 'Responsabilidad', 'Justicia',
    'Conciencia', 'Autenticidad', 'Integridad práctica', 'Presión social',
    'Verdad', 'Relaciones humanas', 'Proyecto de vida', 'Realización personal'
  ];

  const corePremises = [
    {
      title: 'Circunstancias vs. Determinismo',
      description: 'Las circunstancias influyen poderosamente en las decisiones, pero jamás determinan de forma absoluta a la persona: siempre subsiste un margen de respuesta libre.'
    },
    {
      title: 'Libertad con límites y consecuencias',
      description: 'Ser libre no significa actuar sin restricciones ni responsabilidades; la auténtica libertad asume el costo real de sus elecciones.'
    },
    {
      title: 'Autenticidad orientada al bien',
      description: 'La autenticidad no consiste en seguir cualquier impulso caprichoso, sino en actuar de manera coherente con los propios principios y el bien común.'
    },
    {
      title: 'Límites de la racionalización',
      description: 'Una inteligencia brillante, una excusa elaborada o una causa colectiva no convierten automáticamente una acción injusta en algo éticamente correcto.'
    },
    {
      title: 'Realización personal no es mero éxito',
      description: 'La vida lograda no equivale a la acumulación de estatus, popularidad o ventajas privadas a costa del prójimo.'
    },
    {
      title: 'Impacto comunitario ineludible',
      description: 'Ninguna decisión se agota en la esfera privada del individuo: cada acto tiene un eco visible en las personas y la comunidad.'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 py-4 sm:py-8 text-left">
      {/* Top navigation back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </button>
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-3 border-b border-stone-200 pb-6">
        <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
          Fundamento Académico · Core Curriculum
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Propósito Formativo de Core IV
        </h1>
        <p className="text-lg font-serif italic text-stone-700">
          «La toma libre de decisiones para la realización personal»
        </p>
      </div>

      {/* Dual Column: Core premise & visual */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-4 text-sm text-stone-700 leading-relaxed">
          <p>
            Al culminar el ciclo de formación del <strong className="text-stone-900">Core Curriculum</strong>, esta experiencia sitúa al estudiante ante el núcleo de la asignatura <span className="font-semibold text-stone-900">Persona y su actuar</span>: el discernimiento práctico.
          </p>
          <p>
            Lejos de funcionar como un test convencional con opciones obvias, cada dilema reproduce las tensiones vivas que atraviesan la vida universitaria y profesional. Aquí no se califica una memoria dogmática, sino la madurez para navegar contradicciones, asumir renuncias y comprender que todo proyecto de vida auténtico se apoya en la fidelidad a la verdad.
          </p>
          <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs text-stone-800 space-y-1">
            <span className="font-bold text-amber-900 block">Horizonte pedagógico:</span>
            Aprender a reflexionar antes de justificar, asumir antes de culpar y comprometerse antes de someterse.
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-sm bg-stone-100 aspect-4/3">
            <img
              src={scalesImage}
              alt="Balanza de la justicia y libro sobre escritorio sobrio de madera"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Explicit Core Concepts Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-stone-900">
          Conceptos éticos estructurantes
        </h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {concepts.map((concept) => (
            <span
              key={concept}
              className="px-3 py-1.5 bg-white border border-stone-200/90 rounded-lg text-stone-700 font-medium"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* 6 Essential Understandings */}
      <div className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-stone-900">
          Seis claves de discernimiento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {corePremises.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white/80 border border-stone-200 rounded-xl space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <h3 className="font-serif font-bold text-stone-900 text-sm">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pl-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-4 flex items-center justify-between border-t border-stone-200">
        <button
          onClick={onBack}
          className="text-xs text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
        >
          Regresar al inicio
        </button>

        <button
          onClick={onProceed}
          className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 text-sm font-medium rounded-xl hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
        >
          <span>Elegir punto de partida</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
