import React from 'react';
import { ArrowRight, BookOpen, Compass, Scale, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_staircase_path_1791412455525.jpg';

interface WelcomeScreenProps {
  onStart: () => void;
  onViewPurpose: () => void;
  onOpenInstructions: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStart,
  onViewPurpose,
  onOpenInstructions
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 py-4 sm:py-8">
      {/* Editorial Header & Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Literary Title & Premise */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800">
            <span>Core IV</span>
            <span aria-hidden="true">·</span>
            <span>Persona y su actuar</span>
            <span aria-hidden="true">·</span>
            <span>Core Curriculum</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.08] text-balance">
            Decide tu Camino
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-stone-700 leading-snug">
            «Una experiencia sobre libertad, conciencia y realización personal»
          </p>

          <p className="text-base text-stone-600 leading-relaxed max-w-xl">
            Asciende por una escalera simbólica de diez peldaños éticos. Explora cómo tus decisiones, circunstancias, principios y relaciones configuran tu proyecto de vida universitario y humano.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 text-stone-50 text-sm font-medium rounded-xl hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              <span>Comenzar experiencia</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewPurpose}
              className="inline-flex items-center justify-center px-5 py-3.5 bg-white border border-stone-300 text-stone-800 text-sm font-medium rounded-xl hover:bg-stone-50 transition-colors cursor-pointer"
            >
              Propósito académico
            </button>

            <button
              onClick={onOpenInstructions}
              className="inline-flex items-center justify-center text-xs text-stone-500 hover:text-stone-900 underline underline-offset-4 transition-colors cursor-pointer"
            >
              ¿Cómo se juega? (7-12 min)
            </button>
          </div>
        </div>

        {/* Right Column: High fidelity generated visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-lg bg-stone-100 aspect-16/10 lg:aspect-4/3">
            <img
              src={heroImage}
              alt="Escalera simbólica de luz y piedra ascendiendo hacia la claridad ética"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-stone-100 text-xs font-serif italic">
              «El camino no está trazado de antemano: se forja en el acto libre de responder.»
            </div>
          </div>
        </div>
      </div>

      {/* Literary Foundation Callout */}
      <div className="border-t border-b border-stone-200/90 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-stone-600">
            <Scale className="w-4 h-4 text-amber-800" />
            <span>Matar a un ruiseñor · Harper Lee</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-stone-900">
            Atticus Finch y el coraje de la integridad
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            La tensión entre defender la justicia y someterse a la masa. La pregunta que Scout aprende a formular: <span className="italic">«¿Qué nos obliga a actuar con rectitud aunque sepamos que podemos perder?»</span>
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-stone-600">
            <BookOpen className="w-4 h-4 text-amber-800" />
            <span>Crimen y castigo · Fiódor Dostoievski</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-stone-900">
            Raskólnikov y los límites de la razón
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            La tentación de justificar una mala acción con una teoría intelectual brillante. El peso ineludible de la conciencia y la verdad de que nadie escapa a su propia responsabilidad.
          </p>
        </div>
      </div>

      {/* 3 Pillars Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-5 bg-white/70 border border-stone-200 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-amber-800">
            <Compass className="w-4 h-4" />
            <h3 className="font-serif font-bold text-stone-900 text-base">Libertad y Límites</h3>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Las circunstancias influyen intensamente, pero jamás determinan por completo a la persona. Ser libre no es actuar sin consecuencias.
          </p>
        </div>

        <div className="p-5 bg-white/70 border border-stone-200 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <h3 className="font-serif font-bold text-stone-900 text-base">Autenticidad Real</h3>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Ser auténtico implica coherencia con el bien y los propios principios, no una mera extravagancia individualista.
          </p>
        </div>

        <div className="p-5 bg-white/70 border border-stone-200 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-indigo-800">
            <Scale className="w-4 h-4" />
            <h3 className="font-serif font-bold text-stone-900 text-base">Realización Personal</h3>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            La vida lograda trasciende el éxito utilitario o el aplauso externo: exige una vocación compartida con los demás.
          </p>
        </div>
      </div>
    </div>
  );
};
