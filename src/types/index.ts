export type IndicatorKey = 'libertad' | 'integridad' | 'conciencia' | 'responsabilidad' | 'relaciones';

export interface Indicators {
  libertad: number;
  integridad: number;
  conciencia: number;
  responsabilidad: number;
  relaciones: number;
}

export type IndicatorEffects = Partial<Record<IndicatorKey, number>>;

// The 4 Core IV visible themes requested by the curriculum
export interface CoreVisibleStats {
  libertadResponsable: number; // libertad + responsabilidad
  consistencia: number;        // hábitos + repetición de decisiones
  coherenciaPersonal: number;  // autenticidad + integridad
  realizacion: number;         // conciencia + relaciones + integridad práctica
}

export type CoreIVCentralTheme = 
  | 'Toma de decisiones / libertad'
  | 'Hábitos'
  | 'Autenticidad'
  | 'Vida lograda';

export type HabitType = 
  | 'integridad'
  | 'conveniencia'
  | 'presion_social'
  | 'evitacion'
  | 'solidaria'
  | 'racionalizacion'
  | 'reconocimiento_error';

export type BookConnection = 
  | 'Inspirado en el conflicto de Atticus y Scout'
  | 'Inspirado en el conflicto interior de Raskólnikov'
  | 'Dilema transversal de Core IV';

export interface DilemmaOption {
  id: 'a' | 'b' | 'c' | 'd';
  label: string;
  text: string;
  philosophicalStance: string;
  effects: IndicatorEffects;
  habitType: HabitType;
  coreIVTheme: CoreIVCentralTheme;
  consequence: string; // Bloque 2: Consecuencia narrativa
  bookConnectionDetail: string; // Bloque 3: Conexión con el libro
  coreIVConnectionDetail: string; // Bloque 4: Conexión con Core IV
  explanation: string;
  reflection: string; // Bloque 5: Pregunta de reflexión
}

export interface Dilemma {
  id: number;
  step: number;
  theme: string;
  title: string;
  bookConnection: BookConnection;
  literaryContext: string;
  context: string;
  coreConflict: string;
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
  selectedOptionLabel: string;
  selectedOptionText: string;
  selectedStance: string;
  effects: IndicatorEffects;
  habitType: HabitType;
  coreIVTheme: CoreIVCentralTheme;
  consequence: string;
  bookConnectionDetail: string;
  coreIVConnectionDetail: string;
  explanation: string;
  reflectionQuestion: string;
  studentReflection?: string;
  indicatorsAfter: Indicators;
  visibleStatsAfter: CoreVisibleStats;
}

export interface FinalProfile {
  id: 'integridad_activa' | 'libertad_construccion' | 'razon_sin_conciencia' | 'responsabilidad_solidaria' | 'proyecto_busqueda';
  name: string;
  tagline: string;
  description: string;
  strengths: [string, string];
  areasToReview: [string, string];
  atticusConnection: string;
  raskolnikovConnection: string;
  closingQuestion: string;
}

export type AppScreen =
  | 'welcome'
  | 'purpose'
  | 'instructions'
  | 'profile_selection'
  | 'staircase'
  | 'dilemma'
  | 'consequence'
  | 'reflection'
  | 'final_result'
  | 'journey_review';

// Helper to compute the 4 visible indicators from internal 5 indicators and habit patterns
export function calculateVisibleStats(
  indicators: Indicators,
  habitsHistory: HabitType[]
): CoreVisibleStats {
  const { libertad, integridad, conciencia, responsabilidad, relaciones } = indicators;

  // 1. Libertad responsable = promedio ponderado de libertad y responsabilidad
  const libertadResponsable = Math.round((libertad * 0.5) + (responsabilidad * 0.5));

  // 2. Consistencia = hábitos + repetición de decisiones (inicia en 50, se ajusta según coherencia de hábitos)
  // Contamos la frecuencia del hábito predominante o si mantiene patrones virtuosos vs evasivos
  const integrityCount = habitsHistory.filter(h => h === 'integridad' || h === 'solidaria' || h === 'reconocimiento_error').length;
  const inconsistentCount = habitsHistory.filter(h => h === 'conveniencia' || h === 'evitacion' || h === 'racionalizacion').length;
  const habitDelta = (integrityCount * 4) - (inconsistentCount * 3);
  const consistencia = Math.min(Math.max(Math.round(50 + habitDelta), 10), 100);

  // 3. Coherencia personal = autenticidad + integridad (conciencia e integridad)
  const coherenciaPersonal = Math.round((integridad * 0.55) + (conciencia * 0.45));

  // 4. Realización = equilibrio entre bienestar, relaciones y contribución al bien común
  const realizacion = Math.round((conciencia * 0.3) + (relaciones * 0.4) + (integridad * 0.3));

  return {
    libertadResponsable: Math.min(Math.max(libertadResponsable, 10), 100),
    consistencia: Math.min(Math.max(consistencia, 10), 100),
    coherenciaPersonal: Math.min(Math.max(coherenciaPersonal, 10), 100),
    realizacion: Math.min(Math.max(realizacion, 10), 100)
  };
}
