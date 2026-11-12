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
      {/* Literary Foundation Callout with Enhanced Context */}
      <div className="border-t border-b border-[var(--color-border)] py-8 space-y-4">
        <div className="text-left space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)] block">
            Diálogo con la Gran Literatura
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[var(--color-text-primary)]">
            Dos Obras Fundamentales sobre la Conciencia y la Justicia
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-2xl">
            Los diez peldaños de esta experiencia están inspirados en las tensiones éticas de dos clásicos imperecederos. Conoce el contexto que iluminará tus decisiones:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Card 1: To Kill a Mockingbird */}
          <div className="p-6 bg-[#FAF4EB] dark:bg-[#1A2230] border-2 border-[var(--color-accent-border)] rounded-2xl space-y-3.5 shadow-xs text-left transition-colors">
            <div className="flex items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                <Scale className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Matar a un ruiseñor</span>
              </div>
              <span className="text-[11px] text-[var(--color-text-muted)] font-serif italic">Harper Lee (1960)</span>
            </div>
            
            <h3 className="text-lg font-serif font-bold text-[var(--color-text-primary)] leading-snug">
              Atticus Finch y el coraje de la integridad frente a la masa
            </h3>

            <div className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] space-y-1.5 leading-relaxed">
              <p>
                <strong className="text-[var(--color-text-primary)]">Trama y conflicto:</strong> En el sur racista de Alabama (década de 1930), el abogado Atticus Finch asume la defensa penal de Tom Robinson, un jornalero negro acusado falsamente de violación. El pueblo de Maycomb exige una condena rápida sin juicio justo.
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">Lección para Core IV:</strong> A través de los ojos de Scout, la novela demuestra que la conciencia personal no puede negociarse ante la presión de la mayoría: <span className="italic">«Antes de poder vivir con los demás, tengo que poder vivir conmigo mismo»</span>.
              </p>
            </div>
          </div>

          {/* Card 2: Crime and Punishment */}
          <div className="p-6 bg-[#FAF4EB] dark:bg-[#1A2230] border-2 border-[var(--color-accent-border)] rounded-2xl space-y-3.5 shadow-xs text-left transition-colors">
            <div className="flex items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                <BookOpen className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Crimen y castigo</span>
              </div>
              <span className="text-[11px] text-[var(--color-text-muted)] font-serif italic">Fiódor Dostoievski (1866)</span>
            </div>

            <h3 className="text-lg font-serif font-bold text-[var(--color-text-primary)] leading-snug">
              Raskólnikov y los peligros de la racionalización moral
            </h3>

            <div className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] space-y-1.5 leading-relaxed">
              <p>
                <strong className="text-[var(--color-text-primary)]">Trama y conflicto:</strong> Rodión Raskólnikov, un brillante estudiante de Derecho asfixiado por la miseria de San Petersburgo, formula una teoría según la cual los «hombres extraordinarios» tienen derecho moral a transgredir la ley si con ello logran un fin útil.
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">Lección para Core IV:</strong> Tras cometer el crimen, descubre que la razón no puede acallar la voz de la conciencia humana. La verdadera libertad no radica en la soberbia de saltarse los límites, sino en la redención a través de la verdad y el amor solidario.
              </p>
            </div>
          </div>
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
