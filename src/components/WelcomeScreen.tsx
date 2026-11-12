import React from 'react';
import { ArrowRight, BookOpen, Compass, Scale, Sparkles, Repeat, User } from 'lucide-react';
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
    <div className="w-full max-w-5xl mx-auto space-y-10 py-4 sm:py-8">
      {/* Editorial Header & Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Literary Title & Premise */}
        <div className="lg:col-span-7 space-y-5 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
            <span>Core IV</span>
            <span aria-hidden="true">·</span>
            <span>Persona y su actuar</span>
            <span aria-hidden="true">·</span>
            <span>Core Curriculum</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] tracking-tight leading-[1.08] text-balance">
            Decide tu Camino
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-[var(--color-text-secondary)] leading-snug">
            «Una experiencia sobre libertad, conciencia y realización personal»
          </p>

          <p className="text-base text-[var(--color-text-muted)] leading-relaxed max-w-xl">
            Asciende por una escalera simbólica de diez peldaños éticos. Explora cómo tus decisiones, circunstancias, principios y relaciones configuran tu proyecto de vida universitario y humano.
          </p>

          {/* Individual Experience Clarification Notice */}
          <div className="p-3.5 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl flex items-start gap-2.5 text-xs text-[var(--color-text-secondary)] leading-relaxed">
            <User className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[var(--color-text-primary)] font-semibold">Esta es una experiencia individual.</strong> No compites contra otras personas: recorres tu propio camino y construyes tu propio proyecto de vida.
            </span>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
            >
              <span>Comenzar experiencia</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewPurpose}
              className="inline-flex items-center justify-center px-5 py-3.5 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm font-medium rounded-xl hover:bg-[var(--color-surface-subtle)] transition-colors cursor-pointer"
            >
              Propósito académico
            </button>

            <button
              onClick={onOpenInstructions}
              className="inline-flex items-center justify-center text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] underline underline-offset-4 transition-colors cursor-pointer"
            >
              ¿Cómo se juega? (7-12 min)
            </button>
          </div>
        </div>

        {/* Right Column: High fidelity generated visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-lg bg-[var(--color-surface-subtle)] aspect-16/10 lg:aspect-4/3">
            <img
              src={heroImage}
              alt="Escalera simbólica de luz y piedra ascendiendo hacia la claridad ética"
              className="w-full h-full object-cover transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-stone-100 text-xs font-serif italic">
              «El camino no está trazado de antemano: se forja en el acto libre de responder.»
            </div>
          </div>
        </div>
      </div>

      {/* Literary Foundation Callout with Brief Context */}
      <div className="border-t border-b border-[var(--color-border)] py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[var(--color-accent)]">
            <Scale className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Matar a un ruiseñor · Harper Lee</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-[var(--color-text-primary)]">
            Atticus Finch y el coraje de la integridad
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Atticus Finch decide defender a Tom Robinson, un hombre negro acusado falsamente en una sociedad dominada por el prejuicio y la segregación. A través de los ojos de su hija Scout, la obra explora la tensión entre la opinión de la mayoría y la voz de la conciencia: <span className="italic">«¿Qué nos obliga a actuar con rectitud aunque sepamos que podemos perder?»</span>
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[var(--color-accent)]">
            <BookOpen className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Crimen y castigo · Fiódor Dostoievski</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-[var(--color-text-primary)]">
            Raskólnikov y los límites de la razón
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Rodión Raskólnikov intenta justificar una acción grave mediante una teoría intelectual que divide a la humanidad entre seres ordinarios y extraordinarios. Tras su acto, descubre el peso ineludible de la conciencia y la necesidad de asumir la responsabilidad para iniciar su redención humana.
          </p>
        </div>
      </div>

      {/* 4 Core IV Central Pillars (Explicit requirement) */}
      <div className="space-y-3">
        <div className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)] text-left">
          Cuatro temas estructurantes de Core IV
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Pillar 1: Libertad y Límites */}
          <div className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-2 transition-colors text-left">
            <div className="flex items-center gap-2 text-[var(--color-stat-libertad)]">
              <Compass className="w-4 h-4" />
              <h3 className="font-serif font-bold text-[var(--color-text-primary)] text-base">Toma de decisiones / Libertad</h3>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Las circunstancias influyen intensamente, pero jamás determinan por completo a la persona. Ser libre implica decidir con autonomía y asumir consecuencias.
            </p>
          </div>

          {/* Pillar 2: Hábitos que construyen (Required exact card) */}
          <div className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-2 transition-colors text-left">
            <div className="flex items-center gap-2 text-[var(--color-stat-integridad)]">
              <Repeat className="w-4 h-4" />
              <h3 className="font-serif font-bold text-[var(--color-text-primary)] text-base">Hábitos que construyen</h3>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Las decisiones pequeñas y repetidas no son neutras: van configurando una trayectoria. Lo que haces una vez puede parecer irrelevante, pero lo que repites termina definiendo el camino que recorres.
            </p>
          </div>

          {/* Pillar 3: Autenticidad Real */}
          <div className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-2 transition-colors text-left">
            <div className="flex items-center gap-2 text-[var(--color-stat-conciencia)]">
              <Sparkles className="w-4 h-4" />
              <h3 className="font-serif font-bold text-[var(--color-text-primary)] text-base">Autenticidad Real</h3>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Ser auténtico implica actuar de manera coherente con los propios principios y el bien, evitando el cinismo o el conformismo de la masa.
            </p>
          </div>

          {/* Pillar 4: Vida lograda */}
          <div className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-2 transition-colors text-left">
            <div className="flex items-center gap-2 text-[var(--color-accent)]">
              <Scale className="w-4 h-4" />
              <h3 className="font-serif font-bold text-[var(--color-text-primary)] text-base">Vida Lograda</h3>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              No equivale únicamente al éxito utilitario: se construye cuando se orientan las capacidades hacia un proyecto con sentido y servicio a los demás.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
