import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, Sparkles } from 'lucide-react';
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
          className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </button>
      </div>

      <div className="space-y-2 border-b border-stone-200 pb-5">
        <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
          Paso previo · Punto de partida
        </div>
        <h1 className="text-3xl font-serif font-bold text-stone-900">
          ¿Desde qué perspectiva inicias tu camino?
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed max-w-2xl">
          Selecciona la actitud inicial que mejor describe tu momento actual como estudiante de Core IV. Esta elección servirá como punto de partida para contrastar tu evolución tras los 10 peldaños.
        </p>
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
                  ? 'bg-amber-50/50 border-amber-600/80 ring-2 ring-amber-600/20 shadow-sm'
                  : 'bg-white/90 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/50 shadow-2xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-stone-900 text-lg">
                    {profile.name}
                  </h3>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                    isChosen ? 'bg-amber-700 border-amber-700 text-white' : 'border-stone-300 bg-white'
                  }`}>
                    {isChosen && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                </div>

                <p className="text-xs font-medium text-amber-800">
                  {profile.subtitle}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  {profile.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col gap-1">
                <span className="text-[11px] text-stone-500 italic">
                  {profile.motto}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-stone-100/70 border border-stone-200 rounded-xl text-xs text-stone-600 flex items-center gap-3">
        <Compass className="w-4 h-4 text-amber-800 shrink-0" />
        <span>
          Tus indicadores de partida iniciarán neutralmente en <strong className="text-stone-900">50 sobre 100</strong>. Tus decisiones en los próximos 10 peldaños determinarán tu perfil ético final.
        </span>
      </div>

      <div className="pt-4 flex items-center justify-between border-t border-stone-200">
        <button
          onClick={onBack}
          className="text-xs text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
        >
          Atrás
        </button>

        <button
          onClick={handleContinue}
          className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 text-sm font-medium rounded-xl hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
        >
          <span>Comenzar en el Peldaño 1 (Circunstancias)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
