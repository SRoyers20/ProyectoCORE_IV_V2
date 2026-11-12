import { DecisionRecord, CoreVisibleStats, HabitType } from '../types';

export interface JourneySong {
  id: 'stairway_to_heaven' | 'fortunate_son' | 'spirit_in_the_sky' | 'the_chain' | 'roadhouse_blues' | 'la_woman';
  title: string;
  artist: string;
  mp3Src: string;
  m4aSrc: string;
  summaryReason: string;
  whyAssigned: string;
  coreIVConnection: string;
  closingQuestion: string;
}

export const JOURNEY_SONGS: Record<string, JourneySong> = {
  stairway_to_heaven: {
    id: 'stairway_to_heaven',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    mp3Src: '/audio/stairway-to-heaven.mp3',
    m4aSrc: '/audio/stairway-to-heaven.m4a',
    summaryReason: 'Esta canción fue asignada porque tu recorrido muestra una búsqueda de sentido, una disposición a reflexionar sobre tus actos y un interés por construir un proyecto de vida más coherente.',
    whyAssigned: 'Esta canción representa un recorrido orientado hacia la búsqueda de sentido, la transformación personal y la construcción de un proyecto de vida. Tus decisiones muestran una disposición a reflexionar sobre tus actos y a buscar coherencia entre tus principios y tus acciones.',
    coreIVConnection: 'Realización personal y autenticidad.',
    closingQuestion: '¿Qué escalones estás dispuesto a construir para acercarte a la vida que consideras valiosa?'
  },
  fortunate_son: {
    id: 'fortunate_son',
    title: 'Fortunate Son',
    artist: 'CCR',
    mp3Src: '/audio/fortunate-son.mp3',
    m4aSrc: '/audio/fortunate-son.m4a',
    summaryReason: 'Esta canción fue asignada porque tu recorrido muestra un fuerte espíritu crítico, resistencia a la imposición y valentía para defender la justicia frente a la presión social.',
    whyAssigned: 'Esta canción representa un recorrido marcado por el cuestionamiento de la autoridad, la resistencia a la presión social y la defensa de la justicia. Tus decisiones muestran una tendencia a pensar críticamente antes de obedecer o seguir a la mayoría.',
    coreIVConnection: 'Libertad responsable y toma de decisiones.',
    closingQuestion: '¿Qué límites estás dispuesto a cuestionar cuando una norma o una autoridad contradice tus principios?'
  },
  spirit_in_the_sky: {
    id: 'spirit_in_the_sky',
    title: 'Spirit in the Sky',
    artist: 'Norman Greenbaum',
    mp3Src: '/audio/spirit-in-the-sky.mp3',
    m4aSrc: '/audio/spirit-in-the-sky.m4a',
    summaryReason: 'Esta canción fue asignada porque tu recorrido muestra capacidad para reconocer errores, asumir la reparación de daños y orientar tu camino hacia la reconciliación moral.',
    whyAssigned: 'Esta canción representa un recorrido orientado hacia el reconocimiento de errores, la búsqueda de reparación y la posibilidad de redención. Tus decisiones muestran una disposición a confrontar la conciencia y buscar una vida con sentido.',
    coreIVConnection: 'Conciencia, responsabilidad y vida lograda.',
    closingQuestion: '¿Qué errores estás dispuesto a reconocer para construir una vida más coherente?'
  },
  the_chain: {
    id: 'the_chain',
    title: 'The Chain',
    artist: 'Fleetwood Mac',
    mp3Src: '/audio/the-chain.mp3',
    m4aSrc: '/audio/the-chain.m4a',
    summaryReason: 'Esta canción fue asignada porque tu recorrido priorizó la valoración de las relaciones, la solidaridad activa y el cuidado compartido hacia los demás.',
    whyAssigned: 'Esta canción representa un recorrido marcado por la valoración de las relaciones, la solidaridad y la responsabilidad hacia los demás. Tus decisiones muestran una tendencia a considerar el impacto de tus acciones en quienes te rodean.',
    coreIVConnection: 'Realización personal, relaciones y responsabilidad compartida.',
    closingQuestion: '¿Qué vínculos estás fortaleciendo o debilitando con las decisiones que tomas?'
  },
  roadhouse_blues: {
    id: 'roadhouse_blues',
    title: 'Roadhouse Blues',
    artist: 'The Doors',
    mp3Src: '/audio/roadhouse-blues.mp3',
    m4aSrc: '/audio/roadhouse-blues.m4a',
    summaryReason: 'Esta canción fue asignada porque tu recorrido refleja decisiones rápidas, resolución práctica y una energía orientada a responder a las urgencias inmediatas del contexto.',
    whyAssigned: 'Esta canción representa un recorrido con una mayor tendencia a la acción inmediata, el riesgo y la búsqueda de experiencias. No es un juicio moral: refleja una energía de decisión rápida y orientación hacia la conveniencia presente.',
    coreIVConnection: 'Libertad y toma de decisiones.',
    closingQuestion: '¿Qué decisiones estás tomando por impulso y cuáles estás tomando realmente por convicción?'
  },
  la_woman: {
    id: 'la_woman',
    title: 'L.A. Woman',
    artist: 'The Doors',
    mp3Src: '/audio/la-woman.mp3',
    m4aSrc: '/audio/la-woman.m4a',
    summaryReason: 'Esta canción fue asignada porque tu recorrido expresa una búsqueda abierta, exploración de opciones y una honesta deliberación para definir tus propios principios.',
    whyAssigned: 'Esta canción representa un recorrido de búsqueda, exploración y definición personal. Tus decisiones muestran que todavía estás construyendo tu proyecto de vida y explorando qué valores quieres priorizar.',
    coreIVConnection: 'Búsqueda de autenticidad y construcción de proyecto de vida.',
    closingQuestion: '¿Qué valores estás descubriendo mientras construyes tu propio camino?'
  }
};

/**
 * Assigns one of the 6 songs according to decision patterns across the 10 steps.
 */
export function assignJourneySong(
  history: DecisionRecord[],
  visibleStats: CoreVisibleStats,
  habitsHistory: HabitType[]
): JourneySong {
  const scores: Record<string, number> = {
    stairway_to_heaven: 0,
    fortunate_son: 0,
    spirit_in_the_sky: 0,
    the_chain: 0,
    roadhouse_blues: 0,
    la_woman: 0
  };

  // 1. Analyze decisions taken across the 10 steps
  for (const record of history) {
    const { habitType, coreIVTheme, selectedOptionId, step } = record;

    // A. Stairway to Heaven indicators:
    // Búsqueda de sentido, conciencia, coherencia personal, proyecto de vida
    if (coreIVTheme === 'Autenticidad' || coreIVTheme === 'Vida lograda') {
      scores.stairway_to_heaven += 2;
    }
    if (habitType === 'integridad') {
      scores.stairway_to_heaven += 3;
    }
    if (step === 6 || step === 10) {
      if (selectedOptionId === 'b' || selectedOptionId === 'd') {
        scores.stairway_to_heaven += 3;
      }
    }

    // B. Fortunate Son indicators:
    // Resistencia a la imposición, pensamiento crítico, cuestionamiento de autoridad, rechazo a presión social
    if (step === 2 || step === 3 || step === 4) {
      if (selectedOptionId === 'b') {
        scores.fortunate_son += 4;
      }
    }
    if (habitType === 'integridad' && (step === 2 || step === 3)) {
      scores.fortunate_son += 3;
    }
    if (coreIVTheme === 'Toma de decisiones / libertad' && habitType === 'integridad') {
      scores.fortunate_son += 2;
    }

    // C. Spirit in the Sky indicators:
    // Reconocimiento de error, reparación, redención, reconciliación con la conciencia
    if (habitType === 'reconocimiento_error') {
      scores.spirit_in_the_sky += 5;
    }
    if (step === 6 && (selectedOptionId === 'b' || selectedOptionId === 'c')) {
      scores.spirit_in_the_sky += 4;
    }
    if (step === 7 && selectedOptionId === 'b') {
      scores.spirit_in_the_sky += 4;
    }

    // D. The Chain indicators:
    // Valoración de las relaciones, solidaridad, cuidado de los demás, responsabilidad compartida
    if (habitType === 'solidaria') {
      scores.the_chain += 4;
    }
    if (step === 10 && (selectedOptionId === 'b' || selectedOptionId === 'c')) {
      scores.the_chain += 3;
    }
    if (step === 2 && selectedOptionId === 'd') {
      scores.the_chain += 3;
    }

    // E. Roadhouse Blues indicators:
    // Decisiones impulsivas, búsqueda de conveniencia inmediata, riesgo, acción rápida
    if (habitType === 'conveniencia') {
      scores.roadhouse_blues += 4;
    }
    if (habitType === 'racionalizacion') {
      scores.roadhouse_blues += 2;
    }
    if (step === 1 && selectedOptionId === 'a') {
      scores.roadhouse_blues += 3;
    }
    if (step === 9 && selectedOptionId === 'a') {
      scores.roadhouse_blues += 3;
    }

    // F. L.A. Woman indicators:
    // Búsqueda, exploración, ambigüedad, evitación, indefinición de principios
    if (habitType === 'evitacion') {
      scores.la_woman += 4;
    }
    if (step === 10 && selectedOptionId === 'c') {
      scores.la_woman += 3;
    }
    if (step === 3 && selectedOptionId === 'c') {
      scores.la_woman += 3;
    }
    if (step === 8 && selectedOptionId === 'c') {
      scores.la_woman += 3;
    }
  }

  // 2. Factor in the level of the four visible indicators
  if (visibleStats.coherenciaPersonal >= 60) scores.stairway_to_heaven += 4;
  if (visibleStats.libertadResponsable >= 60) scores.fortunate_son += 4;
  if (visibleStats.realizacion >= 60) scores.the_chain += 4;
  if (visibleStats.coherenciaPersonal < 48 && visibleStats.libertadResponsable < 48) scores.roadhouse_blues += 3;
  if (visibleStats.consistencia < 48) scores.la_woman += 3;

  // 3. Find song with highest score
  const sortedSongs = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const highestScore = scores[sortedSongs[0]];
  const tiedSongs = sortedSongs.filter((songKey) => scores[songKey] === highestScore);

  if (tiedSongs.length === 1) {
    return JOURNEY_SONGS[tiedSongs[0]];
  }

  // 4. Secondary tie-breaking criteria explicitly requested:
  // - Mayor indicador de coherencia personal → “Stairway to Heaven”.
  // - Mayor indicador de libertad responsable → “Fortunate Son”.
  // - Mayor indicador de realización → “The Chain”.
  // - Mayor número de decisiones de racionalización → “Roadhouse Blues”.
  // - Mayor número de decisiones de exploración → “L.A. Woman”.
  // - Mayor número de decisiones de reparación → “Spirit in the Sky”.
  const rationalizationCount = habitsHistory.filter(h => h === 'racionalizacion').length;
  const errorRecognitionCount = habitsHistory.filter(h => h === 'reconocimiento_error').length;
  const avoidanceCount = habitsHistory.filter(h => h === 'evitacion').length;

  if (tiedSongs.includes('stairway_to_heaven') && visibleStats.coherenciaPersonal >= Math.max(visibleStats.libertadResponsable, visibleStats.realizacion)) {
    return JOURNEY_SONGS.stairway_to_heaven;
  }
  if (tiedSongs.includes('fortunate_son') && visibleStats.libertadResponsable >= Math.max(visibleStats.coherenciaPersonal, visibleStats.realizacion)) {
    return JOURNEY_SONGS.fortunate_son;
  }
  if (tiedSongs.includes('the_chain') && visibleStats.realizacion >= Math.max(visibleStats.coherenciaPersonal, visibleStats.libertadResponsable)) {
    return JOURNEY_SONGS.the_chain;
  }
  if (tiedSongs.includes('spirit_in_the_sky') && errorRecognitionCount > 0) {
    return JOURNEY_SONGS.spirit_in_the_sky;
  }
  if (tiedSongs.includes('roadhouse_blues') && rationalizationCount > 0) {
    return JOURNEY_SONGS.roadhouse_blues;
  }
  if (tiedSongs.includes('la_woman') && avoidanceCount > 0) {
    return JOURNEY_SONGS.la_woman;
  }

  return JOURNEY_SONGS[tiedSongs[0]];
}
