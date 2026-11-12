import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, Info } from 'lucide-react';
import { INITIAL_PROFILES } from '../data/initialProfiles';
import { InitialProfile } from '../types';

interface ProfileSelectionProps {
  selectedProfile: InitialProfile | null;
  onSelectProfile: (profile: InitialProfile) => void;
  onProceed: () => void;
  onBack: () => void;
}

export const ProfileSelection: React.FC<ProfileSelectionProps> = ({
  selectedProfile,
  onSelectProfile,
  onProceed,
  onBack
}) => {
  const [currentSelected, setCurrentSelected] = useState<InitialProfile>(
    selectedProfile || INITIAL_PROFILES[3] // Default to "El Buscador Vocacional"
  );

  const handleSelect = (p: InitialProfile) => {
    setCurrentSelected(p);
    onSelectProfile(p);
  };

  const handleContinue = () => {
    onSelectProfile(currentSelected);
    onProceed();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 py-4 sm:py-8 text-left">
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </button>
      </div>

      <div className="space-y-3 border-b border-[var(--color-border)] pb-5">
        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
          Paso previo · Punto de partida
        </div>
        <h1 className="text-3xl font-serif font-bold text-[var(--color-text-primary)]">
          ¿Desde qué perspectiva inicias tu camino?
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
          Selecciona la actitud inicial que mejor describe tu momento actual como estudiante de Core IV.
        </p>

        {/* Required pedagogical clarification */}
        <div className="p-3.5 bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] rounded-xl text-xs text-[var(--color-text-primary)] space-y-1">
          <p className="font-medium">
            Esta elección no define quién eres ni determina tu resultado final. Solo servirá como punto de partida para observar cómo evoluciona tu forma de decidir a lo largo de los diez peldaños.
          </p>
          <p className="text-[var(--color-text-muted)]">
            No existe un perfil mejor que otro. Cada punto de partida representa una forma distinta de aproximarse a las decisiones. Lo importante es reflexionar sobre cómo tus elecciones se relacionan con tus principios, tus hábitos y tu proyecto de vida.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INITIAL_PROFILES.map((profile) => {
          const isChosen = currentSelected.id === profile.id;

          return (
            <div
              key={profile.id}
              onClick={() => handleSelect(profile)}
              className={`p-5 rounded-2xl border transition-all text-left cursor-pointer flex flex-col justify-between ${
                isChosen
                  ? 'bg-[var(--color-accent-subtle)] border-[var(--color-accent)] ring-2 ring-[var(--color-accent-border)] shadow-sm'
                  : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-subtle)] shadow-2xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-[var(--color-text-primary)] text-lg">
                    {profile.name}
                  </h3>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                    isChosen 
                      ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-primary-btn-text)]' 
                      : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                  }`}>
                    {isChosen && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                </div>

                <p className="text-xs font-medium text-[var(--color-accent)]">
                  {profile.subtitle}
                </p>

                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pt-1">
                  {profile.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--color-border-subtle)] flex flex-col gap-1">
                <span className="text-[11px] text-[var(--color-text-muted)] italic">
                  {profile.motto}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-[var(--color-surface-subtle)] border border-[var(--color-border)] rounded-xl text-xs text-[var(--color-text-secondary)] flex items-center gap-3">
        <Compass className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
        <span>
          Tus cuatro indicadores de partida (<strong className="text-[var(--color-text-primary)]">Libertad responsable, Consistencia, Coherencia personal y Realización</strong>) iniciarán neutralmente en <strong className="text-[var(--color-text-primary)]">50 sobre 100</strong>.
        </span>
      </div>

      <div className="pt-4 flex items-center justify-between border-t border-[var(--color-border)]">
        <button
          onClick={onBack}
          className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          Atrás
        </button>

        <button
          onClick={handleContinue}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-btn)] text-[var(--color-primary-btn-text)] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
        >
          <span>Comenzar en el Peldaño 1 (Circunstancias)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
