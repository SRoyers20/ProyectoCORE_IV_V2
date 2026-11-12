import { FinalProfile, Indicators } from '../types';

export const FINAL_PROFILES_MAP: Record<string, FinalProfile> = {
  integridad_activa: {
    id: 'integridad_activa',
    name: 'Integridad activa',
    tagline: 'Coherencia ética frente a la adversidad y los costos personales',
    description: 'La persona procura actuar conforme a sus principios incluso cuando enfrenta presión social, incomprensión o altos costos personales. Demuestras una notable solidez moral que te permite resistir el conformismo y la conveniencia inmediata.',
    strengths: [
      'Valentía moral para sostener la verdad y el juego limpio aun frente a la desaprobación mayoritaria.',
      'Claridad de conciencia que rechaza la justificación de medios turbios para alcanzar fines cómodos.'
    ],
    areasToReview: [
      'Evitar el rigorismo inflexible: procura que la firmeza de principios esté siempre acompañada de prudencia pedagógica y empatía hacia la debilidad ajena.',
      'Cuidar el desgaste emocional: sostener causas difíciles en soledad puede aislarte si no construyes alianzas y espacios de descanso comunitario.'
    ],
    atticusConnection: 'Encarnas la serenidad de Atticus Finch ante el tribunal de Maycomb: comprendes que la conciencia es la única instancia humana que jamás debe someterse a la regla de la mayoría.',
    raskolnikovConnection: 'Eres el reverso luminoso de Raskólnikov: mientras él intentó inventar una teoría intelectual para saltarse los límites morales, tú reconoces que la dignidad de cada persona es un límite infranqueable.',
    closingQuestion: '¿Qué principio innegociable debe orientar tus decisiones cuando actuar correctamente implique perder comodidad, aprobación o ventajas profesionales?'
  },

  libertad_construccion: {
    id: 'libertad_construccion',
    name: 'Libertad en construcción',
    tagline: 'Deseo de autonomía que aún negocia con el peso de las circunstancias',
    description: 'La persona reconoce la importancia de decidir por sí misma, pero todavía permite que las circunstancias externas, los miedos o la presión del entorno influyan fuertemente en su comportamiento. Estás en un proceso crucial de maduración hacia una autonomía más plena.',
    strengths: [
      'Realismo y aguda sensibilidad para percibir las limitaciones prácticas y las dificultades del contexto.',
      'Deseo genuino de no equivocarse y prudencia inicial para sopesar los riesgos antes de dar un paso.'
    ],
    areasToReview: [
      'Riesgo de resignación o parálisis: no confundir la influencia innegable de las circunstancias con un determinismo que te despoje de tu capacidad de responder.',
      'Desarrollar mayor coraje para asumir riesgos calculados en favor de lo que íntimamente consideras justo, sin esperar a que el entorno sea perfecto.'
    ],
    atticusConnection: 'Como la pequeña Scout cuando contempla la hostilidad del pueblo, descubres que el mundo es complejo y temible, pero que siempre es posible dar un paso valiente si nos guía el amor a la verdad.',
    raskolnikovConnection: 'Experimentas la misma angustia de Raskólnikov ante la precariedad de la vida, pero estás a tiempo de recordar que la miseria económica no autoriza a claudicar en la propia humanidad.',
    closingQuestion: '¿Qué circunstancia actual de tu vida estás utilizando como justificación para no dar el paso que tu conciencia te pide?'
  },

  razon_sin_conciencia: {
    id: 'razon_sin_conciencia',
    name: 'Razón sin conciencia',
    tagline: 'Habilidad analítica que corre el riesgo de instrumentalizar el bien',
    description: 'La persona analiza con agudeza, diseña argumentos sofisticados y busca resultados eficientes, pero debe examinar mejor las consecuencias humanas profundas de sus decisiones. Tiende a racionalizar actos dudosos amparándose en su utilidad o en vacíos normativos.',
    strengths: [
      'Capacidad estratégica, pensamiento resolutivo y gran agilidad para encontrar salidas viables a problemas complejos.',
      'Habilidad para no dejarse nublar por sentimentalismos superficiales al evaluar escenarios de acción.'
    ],
    areasToReview: [
      'Alerta contra la racionalización: una inteligencia brillante o un buen argumento no convierten automáticamente una mala acción en una acción correcta.',
      'Recuperar la escucha del corazón y la empatía: las personas jamás son variables matemáticas o instrumentos descartables al servicio de un proyecto.'
    ],
    atticusConnection: 'Te beneficiaría contemplar el consejo de Atticus a Scout: «Nunca entenderás a una persona de verdad hasta que no consideres las cosas desde su punto de vista... hasta que no te metas en su piel».',
    raskolnikovConnection: 'Tu dilema es el núcleo de la tragedia de Raskólnikov: el joven brillante que creyó que su inteligencia lo colocaba por encima de las leyes morales elementales, solo para descubrir que la conciencia destruye cualquier sofisma.',
    closingQuestion: '¿En qué momentos de tu día a día utilizas tu elocuencia o inteligencia para justificar atajos que en el fondo sabes que no son correctos?'
  },

  responsabilidad_solidaria: {
    id: 'responsabilidad_solidaria',
    name: 'Responsabilidad solidaria',
    tagline: 'Sensibilidad al impacto compartido y compromiso con los demás',
    description: 'La persona considera profundamente el impacto de sus acciones en los demás y está dispuesta a asumir consecuencias, reparar daños y cuidar los vínculos humanos. Concibes tu libertad como un don que adquiere plenitud en el servicio y la justicia comunitaria.',
    strengths: [
      'Profunda capacidad de reparación y rendición de cuentas honesta cuando las cosas no resultan según lo previsto.',
      'Cuidado genuino de las personas vulnerables y aptitud para tender puentes en medio del conflicto colectivo.'
    ],
    areasToReview: [
      'Evitar la sobrecarga culposa: distinguir claramente entre responder con madurez por lo propio y asumir como culpa personal sufrimientos que escapan a tu control.',
      'Sostener la firmeza de principios incluso cuando complacer a todos sea imposible; a veces, amar la verdad decepcionará a personas queridas.'
    ],
    atticusConnection: 'Reflejas la vocación solidaria de Atticus, quien asumió la defensa de Tom Robinson no por vanidad, sino porque sentía que no podría volver a mirar a sus hijos a los ojos si se negaba a ayudar a un semejante.',
    raskolnikovConnection: 'Evitas el trágico aislamiento que casi destruye a Raskólnikov; comprendes, como Sonia Marmeládova en la novela, que la redención humana solo es posible a través del amor compasivo y el perdón compartido.',
    closingQuestion: '¿Cómo puedes cuidar tu propia salud interior y proyecto personal sin dejar de ser un apoyo generoso y justo para los demás?'
  },

  proyecto_busqueda: {
    id: 'proyecto_busqueda',
    name: 'Proyecto de vida en búsqueda',
    tagline: 'Discernimiento activo en camino hacia la coherencia personal',
    description: 'La persona aún está definiendo sus principios y jerarquía de valores, pero muestra una sincera disposición para conocerse, aprender del error y tomar decisiones más coherentes. No te conformas con respuestas prefabricadas y buscas tu propia voz ética.',
    strengths: [
      'Humildad intelectual y honestidad para reconocer dudas, contradicciones y áreas en las que aún necesitas crecer.',
      'Flexibilidad reflexiva y apertura al diálogo universitario y al discernimiento formativo.'
    ],
    areasToReview: [
      'Definir convicciones no negociables: la apertura de mente es virtuosa, pero un proyecto de vida sólido requiere pilares firmes sobre los cuales construir.',
      'Pasar de la deliberación teórica al compromiso práctico: la ética se forja en los actos concretos del día a día, no solo en las intenciones.'
    ],
    atticusConnection: 'Compartes el camino de aprendizaje de Scout: estás aprendiendo a mirar el mundo adulto con ojos críticos, descubriendo poco a poco qué es la auténtica justicia y qué es el prejuicio.',
    raskolnikovConnection: 'Te encuentras en la encrucijada donde Raskólnikov debió elegir entre el encierro soberbio de sus ideas o la apertura honesta a la realidad; tu búsqueda te orienta a no cometer su error de aislamiento.',
    closingQuestion: 'Al término de tu proceso de Core Curriculum: ¿qué pilares fundamentales formarán los cimientos sobre los que construirás tu ejercicio profesional?'
  }
};

export function calculateFinalProfile(indicators: Indicators): FinalProfile {
  const { libertad, integridad, conciencia, responsabilidad, relaciones } = indicators;

  // Evaluation scores for each profile
  const scores = {
    integridad_activa: (integridad * 1.5) + (conciencia * 1.2) + (libertad * 0.8),
    responsabilidad_solidaria: (responsabilidad * 1.4) + (relaciones * 1.3) + (conciencia * 0.9),
    razon_sin_conciencia: 0,
    libertad_construccion: 0,
    proyecto_busqueda: 0
  };

  // Check specific condition flags
  const isHighRationalization = (conciencia < 48 || integridad < 46) && (libertad >= 45);
  const isConstrained = libertad < 46 || (circunstanciaPressure(indicators));
  
  if (isHighRationalization) {
    scores.razon_sin_conciencia = 280 + (50 - conciencia) * 2.5 + (50 - integridad) * 2.5;
  }

  if (isConstrained) {
    scores.libertad_construccion = 270 + (50 - libertad) * 3;
  }

  // Balanced search profile if standard deviations are low or near middle
  const values = [libertad, integridad, conciencia, responsabilidad, relaciones];
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / values.length;
  
  if (variance < 40 && Math.abs(avg - 50) < 12) {
    scores.proyecto_busqueda = 300;
  } else {
    scores.proyecto_busqueda = 200 + (100 - variance);
  }

  // Find max scored profile
  let bestProfileKey = 'proyecto_busqueda';
  let highestScore = -Infinity;

  for (const [key, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score;
      bestProfileKey = key;
    }
  }

  return FINAL_PROFILES_MAP[bestProfileKey] || FINAL_PROFILES_MAP.proyecto_busqueda;
}

function circunstanciaPressure(ind: Indicators): boolean {
  // If integrity or freedom took significant hits
  return ind.libertad <= 45 && ind.responsabilidad < 50;
}
