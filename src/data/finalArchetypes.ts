import { FinalProfile, Indicators, CoreVisibleStats, HabitType } from '../types';

export const FINAL_PROFILES_MAP: Record<string, FinalProfile> = {
  integridad_activa: {
    id: 'integridad_activa',
    name: 'Integridad activa',
    tagline: 'Coherencia ética frente a la adversidad y los costos personales',
    description: 'Tu recorrido muestra una tendencia marcada hacia la coherencia entre tus principios y tus acciones, incluso cuando enfrentaste presión social o costos personales. Sin embargo, recuerda que la integridad también requiere prudencia, empatía y disposición a reconocer los propios límites.',
    strengths: [
      'Valentía moral para sostener la verdad y el trato justo aun frente a la desaprobación de la mayoría.',
      'Claridad de juicio que evita justificar medios cuestionables con fines aparentemente deseables.'
    ],
    areasToReview: [
      'Cuidar el riesgo de rigidez: procura que la firmeza ética esté siempre acompañada de prudencia y cercanía hacia la vulnerabilidad ajena.',
      'Construir comunidad: sostener causas difíciles en soledad puede aislarte si no buscas alianzas y diálogo constructivo.'
    ],
    atticusConnection: 'Tu actitud evoca la serenidad de Atticus Finch ante el tribunal de Maycomb: la convicción de que la conciencia no debe someterse a la regla de la mayoría.',
    raskolnikovConnection: 'Frente a las justificaciones de Raskólnikov para saltarse los límites morales, recuerdas que la dignidad de cada persona es un límite infranqueable.',
    closingQuestion: '¿Qué principio orientará tus decisiones cuando actuar correctamente implique perder comodidad, aprobación o ventajas profesionales?'
  },

  libertad_construccion: {
    id: 'libertad_construccion',
    name: 'Libertad en construcción',
    tagline: 'Deseo de autonomía que aún negocia con el peso de las circunstancias',
    description: 'Reconoces el valor de decidir por ti mismo, pero en momentos de incertidumbre permites que las circunstancias externas, los temores o la presión del entorno influyan intensamente en tu comportamiento. Te encuentras en un proceso clave de maduración hacia una libertad más responsable.',
    strengths: [
      'Aguda sensibilidad para percibir las limitaciones prácticas y las dificultades reales del contexto.',
      'Prudencia inicial para sopesar los riesgos y deseos genuinos de no actuar precipitadamente.'
    ],
    areasToReview: [
      'Evitar el determinismo: no confundir la influencia innegable de las circunstancias con una fatalidad que anule tu capacidad de responder.',
      'Asumir riesgos calculados en favor de lo que consideras justo, sin esperar a que el entorno sea completamente favorable.'
    ],
    atticusConnection: 'Como la pequeña Scout al descubrir la complejidad del mundo adulto, estás aprendiendo que siempre es posible dar un paso valiente guiado por la verdad.',
    raskolnikovConnection: 'Comprendes la angustia de Raskólnikov ante la precariedad de la vida, pero estás a tiempo de recordar que la dificultad no justifica claudicar en la humanidad.',
    closingQuestion: '¿Qué circunstancia actual estás utilizando como justificación para no dar el paso que tu conciencia te pide?'
  },

  razon_sin_conciencia: {
    id: 'razon_sin_conciencia',
    name: 'Razón sin conciencia',
    tagline: 'Habilidad analítica que corre el riesgo de instrumentalizar el bien',
    description: 'Tu recorrido refleja un pensamiento estratégico y una búsqueda de resultados eficientes, pero tus decisiones muestran la necesidad de examinar con mayor profundidad el impacto humano de tus elecciones. Con frecuencia la mente construye explicaciones sofisticadas para justificar atajos prácticos.',
    strengths: [
      'Capacidad estratégica, rapidez analítica y habilidad para encontrar soluciones prácticas en situaciones complejas.',
      'Objetividad para evaluar escenarios difíciles sin paralizarse por la duda inmediata.'
    ],
    areasToReview: [
      'Alerta contra la racionalización: una argumentación inteligente no convierte automáticamente una acción injusta en correcta.',
      'Recuperar la empatía relacional: las personas jamás deben ser tratadas como meros instrumentos de un proyecto personal.'
    ],
    atticusConnection: 'Te invita a recordar el consejo de Atticus a Scout: «Nunca entenderás a una persona de verdad hasta que no consideres las cosas desde su punto de vista... hasta que te metas en su piel».',
    raskolnikovConnection: 'Tu dilema es el núcleo del conflicto de Raskólnikov: la tentación intelectual de creerse por encima de las normas éticas ordinarias.',
    closingQuestion: '¿En qué momentos utilizas tu inteligencia o tu elocuencia para justificar atajos que en el fondo reconoces dudosos?'
  },

  responsabilidad_solidaria: {
    id: 'responsabilidad_solidaria',
    name: 'Responsabilidad solidaria',
    tagline: 'Sensibilidad al impacto compartido y compromiso con los demás',
    description: 'Tus decisiones reflejan una honda preocupación por el impacto de tus actos en los demás, mostrando disposición a asumir consecuencias, reparar daños y cuidar el tejido social. Concibes tu libertad no como aislamiento, sino como un servicio que cobra sentido en comunidad.',
    strengths: [
      'Capacidad de reparación y rendición de cuentas honesta cuando las cosas no resultan como se esperaba.',
      'Sensibilidad hacia las personas vulnerables y aptitud para tender puentes en medio de tensiones grupales.'
    ],
    areasToReview: [
      'Evitar la sobrecarga culposa: distinguir entre responder con madurez por lo propio y cargar con pesos ajenos que no te corresponden.',
      'Sostener convicciones firmes aun cuando complacer a todos sea imposible; el cuidado del bien común a veces exige decisiones difíciles.'
    ],
    atticusConnection: 'Reflejas la vocación solidaria de Atticus, quien asumió la defensa de Tom Robinson porque sentía que no podría ser un referente honesto si le daba la espalda a un semejante.',
    raskolnikovConnection: 'Evitas el trágico aislamiento de Raskólnikov; comprendes, como Sonia Marmeládova en la novela, que la vida plena florece en la compasión y la cercanía humana.',
    closingQuestion: '¿Cómo puedes cuidar tu propia paz interior y proyecto personal sin dejar de ser un apoyo generoso para los demás?'
  },

  proyecto_busqueda: {
    id: 'proyecto_busqueda',
    name: 'Proyecto de vida en búsqueda',
    tagline: 'Discernimiento activo en camino hacia la coherencia personal',
    description: 'Tu recorrido muestra que aún estás definiendo tu jerarquía de principios, pero revela una sincera disposición a examinarte, aprender de los errores y buscar mayor coherencia. No te conformas con fórmulas prefabricadas y buscas tu propia voz ética.',
    strengths: [
      'Apertura intelectual y honestidad para reconocer dudas y tensiones morales sin fingir certezas absolutas.',
      'Flexibilidad reflexiva y disposición al aprendizaje formativo durante el paso por la universidad.'
    ],
    areasToReview: [
      'Definir pilares no negociables: la mente abierta es virtuosa, pero un proyecto de vida sólido necesita cimientos estables.',
      'Pasar de la deliberación teórica al compromiso práctico: la ética se forja en los actos concretos del día a día.'
    ],
    atticusConnection: 'Compartes el proceso de Scout: estás aprendiendo a mirar el entorno con ojos críticos, descubriendo poco a poco qué es la justicia y qué es el prejuicio.',
    raskolnikovConnection: 'Te encuentras en la encrucijada donde Rodión debió elegir entre el encierro de sus teorías o la apertura a la realidad humana; tu búsqueda te orienta hacia la vida compartida.',
    closingQuestion: 'Al término de tu proceso de Core Curriculum: ¿qué pilares fundamentales formarán los cimientos sobre los que construirás tu ejercicio profesional?'
  }
};

export function calculateFinalProfile(
  indicators: Indicators,
  visibleStats: CoreVisibleStats,
  habitsHistory: HabitType[]
): FinalProfile {
  const { libertadResponsable, consistencia, coherenciaPersonal, realizacion } = visibleStats;

  // Evaluation criteria
  const isHighCoherence = coherenciaPersonal >= 58 && libertadResponsable >= 55;
  const isHighSolidarity = realizacion >= 58 && consistencia >= 52;
  const isHighRationalization = habitsHistory.filter(h => h === 'racionalizacion' || h === 'conveniencia').length >= 3;
  const isConstrained = libertadResponsable < 46;

  if (isHighRationalization && coherenciaPersonal < 52) {
    return FINAL_PROFILES_MAP.razon_sin_conciencia;
  }

  if (isHighCoherence) {
    return FINAL_PROFILES_MAP.integridad_activa;
  }

  if (isHighSolidarity) {
    return FINAL_PROFILES_MAP.responsabilidad_solidaria;
  }

  if (isConstrained) {
    return FINAL_PROFILES_MAP.libertad_construccion;
  }

  return FINAL_PROFILES_MAP.proyecto_busqueda;
}
