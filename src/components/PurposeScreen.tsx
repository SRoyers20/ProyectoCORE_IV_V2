import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Compass, Scale, Repeat, Sparkles, User } from 'lucide-react';
import scalesImage from '../assets/images/literary_dialogue_scales_1791412465563.jpg';

interface PurposeScreenProps {
  onBack: () => void;
  onProceed: () => void;
}

export const PurposeScreen: React.FC<PurposeScreenProps> = ({ onBack, onProceed }) => {
  const coreFourThemes = [
    {
      title: '1. Toma de decisiones / Libertad',
      icon: Compass,
      description: 'La libertad no es actuar sin límites, sino la capacidad personal de discernir y comprometer la propia voluntad con aquello que es bueno y justo, asumiendo con madurez las consecuencias.'
    },
    {
      title: '2. Hábitos que construyen',
      icon: Repeat,
      description: 'Las decisiones pequeñas y repetidas no son neutras: van configurando una trayectoria. Lo que haces una vez parece irrelevante, pero lo que repites termina definiendo el camino que recorres.'
    },
    {
      title: '3. Autenticidad',
      icon: Sparkles,
      description: 'Actuar de manera coherente con los propios principios éticos y con el bien, resistiendo tanto la tentación de la conveniencia rápida como el miedo a la desaprobación social.'
    },
    {
      title: '4. Vida lograda',
      icon: Scale,
      description: 'La realización personal no equivale únicamente al éxito, al reconocimiento o al beneficio individual. Se alcanza integrando el propio bienestar con la dignidad y el servicio a los demás.'
    }
  ];

  const concepts = [
    'Libertad responsable', 'Circunstancias', 'Hábitos', 'Justicia',
    'Conciencia', 'Autenticidad', 'Consistencia', 'Presión social',
    'Verdad', 'Relaciones humanas', 'Proyecto de vida', 'Vida lograda'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 py-4 sm:py-8 text-left">
      {/* Top navigation back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </button>
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-3 border-b border-[var(--color-border)] pb-6">
        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
          Fundamento Académico · Core Curriculum
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text-primary)]">
          Propósito Formativo de Core IV
        </h1>
        <p className="text-lg font-serif italic text-[var(--color-text-secondary)]">
          «La toma libre de decisiones para la realización personal»
        </p>
      </div>

      {/* Dual Column: Core premise & visual */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            Al culminar el ciclo de formación del <strong className="text-[var(--color-text-primary)]">Core Curriculum</strong>, esta experiencia sitúa al estudiante ante el núcleo de la asignatura <span className="font-semibold text-[var(--color-text-primary)]">Persona y su actuar</span>: el discernimiento práctico individual.
          </p>
          <p>
            No se trata de un test con respuestas superficialmente correctas o incorrectas. Cada peldaño expone las tensiones reales entre valores que atraviesan la vida personal y profesional, invitándote a descubrir los hábitos que estás construyendo y el horizonte hacia una vida lograda.
          </p>
          <div className="p-4 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl text-xs text-[var(--color-text-primary)] space-y-1">
            <span className="font-bold text-[var(--color-accent)] block">Horizonte pedagógico:</span>
            Aprender a reflexionar antes de justificar, asumir antes de culpar y comprometerse antes de someterse.
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm bg-[var(--color-surface-subtle)] aspect-4/3">
            <img
              src={scalesImage}
              alt="Balanza de la justicia y libro sobre escritorio sobrio de madera"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Los Cuatro Temas Centrales de Core IV */}
      <div className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-[var(--color-text-primary)] flex items-center gap-2">
          <span>Los cuatro temas centrales de la clase</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreFourThemes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-1.5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  <h3 className="font-serif font-bold text-[var(--color-text-primary)] text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-6">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explicit Core Concepts Section */}
      <div className="space-y-3">
        <h2 className="text-lg font-serif font-bold text-[var(--color-text-primary)]">
          Conceptos éticos estructurantes
        </h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {concepts.map((concept) => (
            <span
              key={concept}
              className="px-3 py-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-secondary)] font-medium"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-4 flex items-center justify-between border-t border-[var(--color-border)]">
        <button
          onClick={onBack}
          className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          Regresar al inicio
        </button>

        <button
          onClick={onProceed}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
        >
          <span>Elegir punto de partida</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
