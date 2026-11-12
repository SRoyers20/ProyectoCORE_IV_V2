/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  AppScreen, 
  Indicators, 
  InitialProfile, 
  Dilemma, 
  DilemmaOption, 
  DecisionRecord,
  HabitType,
  calculateVisibleStats
} from './types';
import { DILEMMAS } from './data/dilemmas';
import { calculateFinalProfile } from './data/finalArchetypes';
import { Navbar } from './components/Navbar';
import { WelcomeScreen } from './components/WelcomeScreen';
import { PurposeScreen } from './components/PurposeScreen';
import { ProfileSelection } from './components/ProfileSelection';
import { StaircaseBoard } from './components/StaircaseBoard';
import { DilemmaCard } from './components/DilemmaCard';
import { ConsequenceCard } from './components/ConsequenceCard';
import { ReflectionPanel } from './components/ReflectionPanel';
import { FinalResult } from './components/FinalResult';
import { JourneyReview } from './components/JourneyReview';
import { InstructionsModal } from './components/InstructionsModal';
import { ConfirmModal } from './components/ConfirmModal';
import { PersistentAudioPlayer } from './components/PersistentAudioPlayer';
import { assignJourneySong } from './data/journeySongs';
import { useAudio } from './context/AudioContext';

const DEFAULT_INDICATORS: Indicators = {
  libertad: 50,
  integridad: 50,
  conciencia: 50,
  responsabilidad: 50,
  relaciones: 50
};

export default function App() {
  const { stop } = useAudio();
  const [screen, setScreen] = useState<AppScreen>('welcome');
  const [initialProfile, setInitialProfile] = useState<InitialProfile | null>(null);
  const [indicators, setIndicators] = useState<Indicators>(DEFAULT_INDICATORS);
  const [habitsHistory, setHabitsHistory] = useState<HabitType[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [history, setHistory] = useState<DecisionRecord[]>([]);

  // Current active decision state
  const [activeDilemma, setActiveDilemma] = useState<Dilemma | null>(null);
  const [activeSelectedOption, setActiveSelectedOption] = useState<DilemmaOption | null>(null);

  // Modals state
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isRestartConfirmOpen, setIsRestartConfirmOpen] = useState(false);

  // Determine if a game has started and is in progress
  const isGameActive = completedSteps.length > 0 || screen === 'dilemma' || screen === 'consequence' || screen === 'reflection' || screen === 'staircase';

  // Helper to clamp values between 0 and 100
  const clampIndicator = (val: number): number => {
    return Math.min(Math.max(val, 10), 100);
  };

  // 4 Visible Indicators computed dynamically
  const visibleStats = calculateVisibleStats(indicators, habitsHistory);

  // Start experience flow
  const handleStartExperience = () => {
    setScreen('profile_selection');
  };

  const handleProfileSelected = (prof: InitialProfile) => {
    setInitialProfile(prof);
  };

  const handleProceedFromProfile = () => {
    setCurrentStep(1);
    setScreen('staircase');
  };

  // Open dilemma from staircase
  const handleEnterStep = (stepNumber: number) => {
    const dilemma = DILEMMAS.find((d) => d.step === stepNumber);
    if (dilemma) {
      setActiveDilemma(dilemma);
      setScreen('dilemma');
    }
  };

  // Choose an option in the dilemma
  const handleSelectOptionInDilemma = (option: DilemmaOption) => {
    if (!activeDilemma) return;

    setActiveSelectedOption(option);

    // Calculate new indicators (moderated updates)
    const newIndicators: Indicators = {
      libertad: clampIndicator(indicators.libertad + (option.effects.libertad ?? 0)),
      integridad: clampIndicator(indicators.integridad + (option.effects.integridad ?? 0)),
      conciencia: clampIndicator(indicators.conciencia + (option.effects.conciencia ?? 0)),
      responsabilidad: clampIndicator(indicators.responsabilidad + (option.effects.responsabilidad ?? 0)),
      relaciones: clampIndicator(indicators.relaciones + (option.effects.relaciones ?? 0))
    };

    const newHabits = [...habitsHistory, option.habitType];

    setIndicators(newIndicators);
    setHabitsHistory(newHabits);
    setScreen('consequence');
  };

  // Transition from consequence to reflection
  const handleProceedToReflection = () => {
    setScreen('reflection');
  };

  // Save student reflection and advance
  const handleSaveNoteAndAdvance = (studentReflection: string) => {
    if (!activeDilemma || !activeSelectedOption) return;

    const currentVisible = calculateVisibleStats(indicators, habitsHistory);

    // Record decision with full 5-block detail
    const record: DecisionRecord = {
      step: activeDilemma.step,
      theme: activeDilemma.theme,
      title: activeDilemma.title,
      bookConnection: activeDilemma.bookConnection,
      selectedOptionId: activeSelectedOption.id,
      selectedOptionLabel: activeSelectedOption.label,
      selectedOptionText: activeSelectedOption.text,
      selectedStance: activeSelectedOption.philosophicalStance,
      effects: activeSelectedOption.effects,
      habitType: activeSelectedOption.habitType,
      coreIVTheme: activeSelectedOption.coreIVTheme,
      consequence: activeSelectedOption.consequence,
      bookConnectionDetail: activeSelectedOption.bookConnectionDetail,
      coreIVConnectionDetail: activeSelectedOption.coreIVConnectionDetail,
      explanation: activeSelectedOption.explanation,
      reflectionQuestion: activeSelectedOption.reflection,
      studentReflection: studentReflection.trim() || undefined,
      indicatorsAfter: { ...indicators },
      visibleStatsAfter: { ...currentVisible }
    };

    const updatedHistory = [...history.filter(h => h.step !== activeDilemma.step), record];
    setHistory(updatedHistory);

    if (!completedSteps.includes(activeDilemma.step)) {
      setCompletedSteps([...completedSteps, activeDilemma.step]);
    }

    // Advance step or conclude
    if (activeDilemma.step < 10) {
      const nextStep = activeDilemma.step + 1;
      setCurrentStep(nextStep);
      setActiveDilemma(null);
      setActiveSelectedOption(null);
      setScreen('staircase');
    } else {
      // Completed step 10
      setScreen('final_result');
    }
  };

  // Restart handlers
  const handleRequestRestart = () => {
    if (completedSteps.length > 0) {
      setIsRestartConfirmOpen(true);
    } else {
      executeReset();
    }
  };

  const executeReset = () => {
    stop();
    setIsRestartConfirmOpen(false);
    setIndicators(DEFAULT_INDICATORS);
    setHabitsHistory([]);
    setCompletedSteps([]);
    setHistory([]);
    setCurrentStep(1);
    setActiveDilemma(null);
    setActiveSelectedOption(null);
    setScreen('welcome');
  };

  const currentDilemma = activeDilemma || DILEMMAS.find((d) => d.step === currentStep) || DILEMMAS[0];
  const finalProfile = calculateFinalProfile(indicators, visibleStats, habitsHistory);
  const assignedSong = assignJourneySong(history, visibleStats, habitsHistory);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-app)] text-[var(--color-text-primary)] transition-colors">
      {/* Top Navigation */}
      <Navbar
        currentScreen={screen}
        currentStep={currentStep}
        totalSteps={10}
        onNavigate={(target) => {
          if (target === 'staircase' && !isGameActive) {
            setScreen('welcome');
          } else {
            setScreen(target);
          }
        }}
        onOpenInstructions={() => setIsInstructionsOpen(true)}
        onRequestRestart={handleRequestRestart}
        isGameActive={isGameActive && screen !== 'final_result'}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-start">
        {screen === 'welcome' && (
          <WelcomeScreen
            onStart={handleStartExperience}
            onViewPurpose={() => setScreen('purpose')}
            onOpenInstructions={() => setIsInstructionsOpen(true)}
          />
        )}

        {screen === 'purpose' && (
          <PurposeScreen
            onBack={() => setScreen('welcome')}
            onProceed={() => setScreen('profile_selection')}
          />
        )}

        {screen === 'profile_selection' && (
          <ProfileSelection
            selectedProfile={initialProfile}
            onSelectProfile={handleProfileSelected}
            onProceed={handleProceedFromProfile}
            onBack={() => setScreen('welcome')}
          />
        )}

        {screen === 'staircase' && (
          <StaircaseBoard
            currentStep={currentStep}
            completedSteps={completedSteps}
            visibleStats={visibleStats}
            history={history}
            onEnterStep={handleEnterStep}
            onFinishJourney={() => setScreen('final_result')}
          />
        )}

        {screen === 'dilemma' && (
          <DilemmaCard
            dilemma={currentDilemma}
            onSelectOption={handleSelectOptionInDilemma}
            onBackToStaircase={() => setScreen('staircase')}
          />
        )}

        {screen === 'consequence' && activeSelectedOption && (
          <>
            <ConsequenceCard
              dilemma={currentDilemma}
              selectedOption={activeSelectedOption}
              onProceedToReflection={handleProceedToReflection}
            />
            <PersistentAudioPlayer song={assignedSong} titlePrefix="Banda Sonora · Retroalimentación" />
          </>
        )}

        {screen === 'reflection' && activeSelectedOption && (
          <ReflectionPanel
            dilemma={currentDilemma}
            selectedOption={activeSelectedOption}
            currentStep={currentStep}
            totalSteps={10}
            habitsHistory={habitsHistory}
            onSaveNoteAndAdvance={handleSaveNoteAndAdvance}
          />
        )}

        {screen === 'final_result' && (
          <FinalResult
            profile={finalProfile}
            visibleStats={visibleStats}
            history={history}
            habitsHistory={habitsHistory}
            initialProfile={initialProfile}
            onReviewJourney={() => setScreen('journey_review')}
            onRestart={handleRequestRestart}
          />
        )}

        {screen === 'journey_review' && (
          <JourneyReview
            history={history}
            visibleStats={visibleStats}
            onBackToResult={() => setScreen('final_result')}
            onRestart={handleRequestRestart}
          />
        )}
      </main>

      {/* Global Accessible Instructions Modal */}
      <InstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      />

      {/* Restart Confirmation Modal */}
      <ConfirmModal
        isOpen={isRestartConfirmOpen}
        title="¿Deseas reiniciar la experiencia?"
        message="Se borrarán los peldaños completados y tus indicadores volverán a 50. Si ya terminaste, puedes copiar tu informe antes de reiniciar."
        confirmLabel="Sí, reiniciar"
        cancelLabel="Continuar aquí"
        onConfirm={executeReset}
        onCancel={() => setIsRestartConfirmOpen(false)}
      />

      {/* Quiet Academic Footer */}
      <footer className="border-t border-[var(--color-border)] py-6 text-center text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-app)] transition-colors">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Core IV: Persona y su actuar · Experiencia individual de rol
          </span>
          <span className="italic">
            Inspirado en Harper Lee y Fiódor Dostoievski
          </span>
        </div>
      </footer>
    </div>
  );
}
