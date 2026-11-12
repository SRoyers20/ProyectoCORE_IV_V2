import React from 'react';
import { HelpCircle, RotateCcw } from 'lucide-react';
import { AppScreen } from '../types';

interface NavbarProps {
  currentScreen: AppScreen;
  currentStep: number;
  totalSteps: number;
  onNavigate: (screen: AppScreen) => void;
  onOpenInstructions: () => void;
  onRequestRestart: () => void;
  isGameActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  currentStep,
  totalSteps,
  onNavigate,
  onOpenInstructions,
  onRequestRestart,
  isGameActive
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/90 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand single text element wordmark */}
        <button
          onClick={() => onNavigate('welcome')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight block group-hover:text-amber-900 transition-colors">
            Decide tu Camino
          </span>
        </button>

        {/* Zone 2: Clean navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('welcome')}
            className={`hover:text-stone-900 transition-colors cursor-pointer ${currentScreen === 'welcome' ? 'text-stone-900 font-semibold underline underline-offset-8 decoration-amber-700' : ''}`}
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate('purpose')}
            className={`hover:text-stone-900 transition-colors cursor-pointer ${currentScreen === 'purpose' ? 'text-stone-900 font-semibold underline underline-offset-8 decoration-amber-700' : ''}`}
          >
            Propósito
          </button>
          {isGameActive && (
            <button
              onClick={() => onNavigate('staircase')}
              className={`hover:text-stone-900 transition-colors cursor-pointer ${currentScreen === 'staircase' ? 'text-stone-900 font-semibold underline underline-offset-8 decoration-amber-700' : ''}`}
            >
              Escalera ({currentStep} de {totalSteps})
            </button>
          )}
          {currentScreen === 'final_result' && (
            <button
              onClick={() => onNavigate('final_result')}
              className="text-stone-900 font-semibold underline underline-offset-8 decoration-amber-700 cursor-pointer"
            >
              Resultado
            </button>
          )}
          {currentScreen === 'journey_review' && (
            <button
              onClick={() => onNavigate('journey_review')}
              className="text-stone-900 font-semibold underline underline-offset-8 decoration-amber-700 cursor-pointer"
            >
              Recorrido
            </button>
          )}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenInstructions}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200/90 rounded-lg hover:bg-stone-50 hover:text-stone-950 transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
            title="Ver instrucciones y reglas"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
            <span className="hidden sm:inline">¿Cómo se juega?</span>
            <span className="sm:hidden">Guía</span>
          </button>

          {isGameActive && (
            <button
              onClick={onRequestRestart}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-stone-600 hover:text-red-800 hover:bg-red-50/60 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              title="Reiniciar experiencia"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reiniciar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
