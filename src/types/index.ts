export type IndicatorKey = 'libertad' | 'integridad' | 'conciencia' | 'responsabilidad' | 'relaciones';

export interface Indicators {
  libertad: number;
  integridad: number;
  conciencia: number;
  responsabilidad: number;
  relaciones: number;
}

export type IndicatorEffects = Partial<Record<IndicatorKey, number>>;

export type BookConnection = 
  | 'Inspirado en el conflicto de Atticus y Scout'
  | 'Inspirado en el conflicto interior de Raskólnikov'
  | 'Dilema transversal de Core IV';

export interface DilemmaOption {
  id: 'a' | 'b' | 'c' | 'd';
  label: string;
  text: string;
  philosophicalStance: string; // Brief note explaining the tension
  effects: IndicatorEffects;
  consequence: string; // Consecuencia narrativa
  explanation: string; // Explicación breve y neutral
  reflection: string; // Pregunta breve de reflexión específica
}

export interface Dilemma {
  id: number;
  step: number;
  theme: string;
  title: string;
  bookConnection: BookConnection;
  literaryContext: string; // Contexto literario o cita de fondo
  context: string; // 80-120 palabras de situación
  coreConflict: string; // El conflicto principal a identificar
  options: DilemmaOption[];
}

export interface InitialProfile {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  initialEmphasis: string;
  motto: string;
}

export interface DecisionRecord {
  step: number;
  theme: string;
  title: string;
  bookConnection: BookConnection;
  selectedOptionId: 'a' | 'b' | 'c' | 'd';
  selectedOptionText: string;
  selectedStance: string;
  effects: IndicatorEffects;
  consequence: string;
  explanation: string;
  reflectionQuestion: string;
  studentReflection?: string;
  indicatorsAfter: Indicators;
}

export interface FinalProfile {
  id: 'integridad_activa' | 'libertad_construccion' | 'razon_sin_conciencia' | 'responsabilidad_solidaria' | 'proyecto_busqueda';
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  areasToReview: string[];
  atticusConnection: string;
  raskolnikovConnection: string;
  closingQuestion: string;
}

export type AppScreen =
  | 'welcome'
  | 'purpose'
  | 'instructions'
  | 'profile_selection'
  | 'staircase' // Vista principal de la escalera
  | 'dilemma'   // Lectura del dilema
  | 'consequence' // Efectos y consecuencias inmediatas
  | 'reflection'  // Pausa reflexiva antes del siguiente peldaño
  | 'final_result' // Perfil final y síntesis
  | 'journey_review'; // Revisión histórica de los 10 pasos
