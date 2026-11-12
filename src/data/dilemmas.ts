import { Dilemma } from '../types';

export const DILEMMAS: Dilemma[] = [
  {
    id: 1,
    step: 1,
    theme: 'Circunstancias',
    title: 'La encrucijada de la urgencia',
    bookConnection: 'Inspirado en el conflicto interior de Raskólnikov',
    literaryContext: 'Al igual que Rodión Raskólnikov ante la miseria de San Petersburgo, la escasez extrema tienta a la razón a relativizar el daño ajeno.',
    coreConflict: 'Tensión entre la asfixia de una necesidad inmediata y el deber de no instrumentalizar a un tercero inocente.',
    context: 
      'Atraviesas un semestre de asfixia financiera y familiar. Las deudas amenazan la continuidad de tus estudios y la estabilidad de tu hogar. De pronto, un intermediario te ofrece acceder de forma ilícita a una beca de emergencia con fondos limitados; para otorgártela, desplazarán el expediente de otro postulante vulnerable que depende de esa ayuda para no desertar. La administración jamás descubrirá el cambio y tu alivio económico sería inmediato. Sabes que tus circunstancias son críticas y no buscaste esta precariedad, pero aceptar el beneficio condena en silencio a un compañero a perder su futuro.',
    options: [
      {
        id: 'a',
        label: 'Aceptar el beneficio',
        text: 'Aceptar la oportunidad: tu urgencia inmediata y familiar justifica aprovechar el recurso disponible.',
        philosophicalStance: 'Pragmatismo de supervivencia',
        effects: { libertad: -4, integridad: -8, conciencia: -6, responsabilidad: -3, relaciones: -5 },
        consequence: 'Aliviaste la crisis financiera inmediata de tu familia, pero la sospecha de haber perjudicado a alguien desprotegido se instala en tu ánimo.',
        explanation: 'Esta opción protege tu conveniencia y urgencia inmediata, pero debilita la integridad al tratar a otra persona como un medio sustituible.',
        reflection: '¿Hasta qué punto una circunstancia apremiante suspende nuestras obligaciones morales hacia los demás?'
      },
      {
        id: 'b',
        label: 'Rechazar tajantemente',
        text: 'Rechazar la propuesta y buscar alternativas de empleo o préstamos formales, aun con el costo del sacrificio.',
        philosophicalStance: 'Imperativo deontológico',
        effects: { libertad: 6, integridad: 8, conciencia: 7, responsabilidad: 6, relaciones: 2 },
        consequence: 'Conservas tu coherencia ética intacta, asumiendo el duro desafío de redoblar esfuerzos personales sin comprometer a otros.',
        explanation: 'Tu decisión fortaleció la integridad y la conciencia, asumiendo que las circunstancias difíciles no anulan el deber hacia la justicia.',
        reflection: '¿Qué convicción interior sostiene a una persona cuando actuar con rectitud prolonga su propia dificultad?'
      },
      {
        id: 'c',
        label: 'Aceptar y prometer restitución',
        text: 'Aceptar la beca bajo la promesa interior de devolver el dinero o compensar anónimamente al perjudicado cuando te gradúes.',
        philosophicalStance: 'Racionalización postergada',
        effects: { libertad: 0, integridad: -4, conciencia: -3, responsabilidad: 2, relaciones: -2 },
        consequence: 'Resolviste la urgencia presente con una promesa futura, pero descubres que las promesas no borran el daño causado a tiempo presente.',
        explanation: 'Intentas conciliar necesidad y conciencia mediante un compromiso diferido, lo que ilustra cómo la mente intenta mitigar la culpa.',
        reflection: '¿Puede una futura reparación moral borrar el impacto real de una injusticia cometida hoy?'
      },
      {
        id: 'd',
        label: 'Denunciar el mecanismo irregular',
        text: 'Rechazar la beca y acudir a la coordinación para advertir que el sistema de asignación está siendo manipulado.',
        philosophicalStance: 'Justicia institucional activa',
        effects: { libertad: 5, integridad: 7, conciencia: 6, responsabilidad: 8, relaciones: -4 },
        consequence: 'Protegiste la equidad de las becas para todos los estudiantes, aunque el intermediario y sus contactos te aíslen socialmente.',
        explanation: 'Asumiste un rol activo frente a la injusticia estructural, aceptando el costo de tensar relaciones para preservar el bien común.',
        reflection: '¿Qué exige mayor coraje: resistir una tentación privada o desafiar públicamente un sistema viciado?'
      }
    ]
  },
  {
    id: 2,
    step: 2,
    theme: 'Presión social',
    title: 'El veredicto de la multitud',
    bookConnection: 'Inspirado en el conflicto de Atticus y Scout',
    literaryContext: 'En Maycomb, la opinión del pueblo ya había condenado a Tom Robinson antes del juicio; solo Atticus Finch se atrevió a defender la verdad frente a sus propios vecinos.',
    coreConflict: 'Tensión entre la necesidad de pertenencia social y la valentía de defender a quien ha sido prejuzgado.',
    context: 
      'En tu comunidad universitaria se difunde un rumor demoledor que acusa a un estudiante de una falta académica grave y deshonesta. El grupo de mensajería mayoritario exige su expulsión pública e inicia una campaña de repudio y aislamiento. Tú conoces de primera mano antecedentes objetivos que demuestran que la versión difundida está descontextualizada y manipulada. Sin embargo, quienes intentan matizar el caso son tachados de cómplices, traidores y atacados en redes. Permanecer callado te garantiza mantener tu reputación intacta; hablar claro te convertirá en blanco del desprecio colectivo.',
    options: [
      {
        id: 'a',
        label: 'Callar y protegerte',
        text: 'Guardar silencio para preservar tu posición en el grupo y evitar represalias personales.',
        philosophicalStance: 'Conformismo defensivo',
        effects: { libertad: -6, integridad: -7, conciencia: -6, responsabilidad: -4, relaciones: 3 },
        consequence: 'Mantuviste intacta tu red de amistades y tu imagen social, pero sabes que permitiste la condena injusta de alguien inocente.',
        explanation: 'Esta opción protege tu conveniencia social inmediata, pero debilita la libertad interior al someter la verdad al miedo al rechazo.',
        reflection: '¿Cuánto de nuestra tranquilidad cotidiana depende del silencio cómplice ante los prejuicios de la mayoría?'
      },
      {
        id: 'b',
        label: 'Defender públicamente la verdad',
        text: 'Intervenir abiertamente en el debate, aportando los hechos y pidiendo un trato justo, sin importar el costo de popularidad.',
        philosophicalStance: 'Integridad cívica audaz',
        effects: { libertad: 8, integridad: 9, conciencia: 8, responsabilidad: 7, relaciones: -6 },
        consequence: 'Te enfrentas a duras críticas y exclusión temporal del grupo, pero abres una grieta de sensatez que frena el linchamiento.',
        explanation: 'Tu decisión fortaleció la integridad y la autenticidad, asumiendo el costo social de colocarse del lado de la justicia vulnerada.',
        reflection: '¿Por qué la opinión colectiva suele ser tan feroz cuando una voz solitaria le recuerda los límites de la justicia?'
      },
      {
        id: 'c',
        label: 'Apoyar en privado únicamente',
        text: 'Acercarte a la persona afectada en privado para ofrecerle tu empatía, pero evitando manifestarte ante la masa.',
        philosophicalStance: 'Solidaridad prudente / reservada',
        effects: { libertad: 1, integridad: -1, conciencia: 2, responsabilidad: 1, relaciones: 2 },
        consequence: 'Brindaste un consuelo humano a la víctima, aunque el linchamiento público continuó sin encontrar resistencia argumentada.',
        explanation: 'Muestras empatía relacional pero evitas el compromiso público, reflejando la tensión entre la compasión íntima y el deber de justicia.',
        reflection: '¿Basta con ser compasivo en secreto cuando la injusticia se comete a la vista de todos?'
      },
      {
        id: 'd',
        label: 'Dialogar con los líderes',
        text: 'Buscar a los moderadores o líderes más influyentes del grupo para mostrarles en privado la evidencia y pedir rectificación.',
        philosophicalStance: 'Mediación estratégica',
        effects: { libertad: 4, integridad: 6, conciencia: 5, responsabilidad: 6, relaciones: 5 },
        consequence: 'Lograste que varios líderes reconsideraran el tono y frenaran la sanción, protegiendo tanto la verdad como los puentes humanos.',
        explanation: 'Optaste por una responsabilidad articulada, empleando la prudencia y el diálogo institucional para desactivar la histeria colectiva.',
        reflection: '¿Cómo equilibrar la firmeza del testimonio ético con la sabiduría práctica para persuadir a otros?'
      }
    ]
  },
  {
    id: 3,
    step: 3,
    theme: 'Libertad',
    title: 'La orden y la convicción',
    bookConnection: 'Dilema transversal de Core IV',
    literaryContext: 'La libertad no consiste en la mera ausencia de coacción externa, sino en la capacidad personal de orientar la propia voluntad hacia lo bueno.',
    coreConflict: 'Tensión entre la obediencia debida a una figura de poder y la autonomía de la propia conciencia moral.',
    context: 
      'Un profesor respetado y director de tu área de titulación te encomienda coordinar un informe clave para un fondo de investigación. Al revisar los datos, notas que te pide omitir deliberadamente ciertos resultados desfavorables para garantizar que la universidad obtenga el financiamiento. Cuando le planteas tus dudas, te responde con tono paternalista: «Es una formalidad de trámite. Yo asumo la responsabilidad académica; tú solo sigue la instrucción si deseas tener una carta de recomendación impecable». La orden contradice de lleno tu honestidad profesional, pero desafiarla pondría en jaque tu graduación.',
    options: [
      {
        id: 'a',
        label: 'Acatar sin objeción',
        text: 'Cumplir la orden tal como se pidió: delegar la carga moral en quien posee la jerarquía y salvar tu futuro.',
        philosophicalStance: 'Heteronomía conformista',
        effects: { libertad: -7, integridad: -7, conciencia: -5, responsabilidad: -6, relaciones: 2 },
        consequence: 'Aseguraste la carta de recomendación y evitaste fricciones, pero cediste tu libertad de juicio a la voluntad arbitraria ajena.',
        explanation: 'Renunciaste a tu criterio moral en favor de la seguridad, evidenciando cómo el miedo a la autoridad puede erosionar la libertad.',
        reflection: '¿Se puede seguir siendo libre cuando uno se acostumbra a obedecer órdenes contrarias a lo que considera justo?'
      },
      {
        id: 'b',
        label: 'Cuestionar y proponer rigor',
        text: 'Reunirte con el profesor y presentarle los datos completos fundamentando por qué la transparencia fortalecerá el proyecto a largo plazo.',
        philosophicalStance: 'Autonomía dialógica constructiva',
        effects: { libertad: 7, integridad: 8, conciencia: 7, responsabilidad: 7, relaciones: 3 },
        consequence: 'El profesor reacciona con sorpresa; aunque hubo tensión inicial, valora tu madurez crítica y aceptan transparentar los límites.',
        explanation: 'Ejerciste la libertad con coraje y competencia técnica, demostrando que la discrepancia ética no equivale a desacato gratuito.',
        reflection: '¿Qué diferencia a la rebeldía estéril del ejercicio maduro y fundamentado de la libertad moral?'
      },
      {
        id: 'c',
        label: 'Renunciar al proyecto',
        text: 'Presentar tu renuncia discreta al encargo argumentando motivos personales o exceso de carga académica.',
        philosophicalStance: 'Retirada cautelosa',
        effects: { libertad: 2, integridad: 3, conciencia: 1, responsabilidad: -2, relaciones: -1 },
        consequence: 'Evitaste manchar tu nombre con datos manipulados, pero permitiste que el fraude continúe con otro estudiante más sumiso.',
        explanation: 'Protegiste tu conciencia individual mediante la evasión, dejando intacto el problema que afectará a terceros.',
        reflection: '¿Basta con mantener limpias las propias manos si nos desentendemos del daño que otros seguirán causando?'
      },
      {
        id: 'd',
        label: 'Denunciar ante el comité ético',
        text: 'Acudir directamente al comité de ética de la institución sin agotar previamente el diálogo personal con el docente.',
        philosophicalStance: 'Justicia formal vertical',
        effects: { libertad: 4, integridad: 6, conciencia: 4, responsabilidad: 5, relaciones: -7 },
        consequence: 'El financiamiento se detuvo y el profesor fue sancionado, generando un ambiente de desconfianza hostil en todo el departamento.',
        explanation: 'Priorizaste la regla estricta sobre el discernimiento prudencial del diálogo directo, con severas secuelas en la comunidad académica.',
        reflection: '¿Cuándo la apelación inmediata a la norma se convierte en un atajo para eludir la incomodidad de una conversación difícil?'
      }
    ]
  },
  {
    id: 4,
    step: 4,
    theme: 'Justicia',
    title: 'El testigo silencioso',
    bookConnection: 'Inspirado en el conflicto de Atticus y Scout',
    literaryContext: 'Atticus enseñaba a Scout que la verdadera valentía consiste en emprender una causa justa aun sabiendo de antemano que se puede perder.',
    coreConflict: 'Tensión entre la preservación del propio bienestar y el deber de salir en defensa de los más vulnerables.',
    context: 
      'Durante las prácticas profesionales en una prestigiosa empresa, eres testigo presencial de cómo un supervisor culpa falsamente a un pasante inmigrante por un grave error de inventario cometido por el propio supervisor. El joven no tiene redes de apoyo, teme ser deportado y está al borde de un despido deshonroso. El supervisor te llama aparte y te advierte con sutileza que quienes «saben cuidar la lealtad interna» obtienen plazas fijas al egresar. Intervenir como testigo ante recursos humanos significará perder esa codiciada vacante laboral y exponerte a represalias.',
    options: [
      {
        id: 'a',
        label: 'Mirar a otro lado',
        text: 'No involucrarte: no fue tu falta y tu prioridad en este momento debe ser tu propia inserción laboral.',
        philosophicalStance: 'Indiferencia pragmática',
        effects: { libertad: -5, integridad: -8, conciencia: -7, responsabilidad: -5, relaciones: -4 },
        consequence: 'El pasante fue despedido injustamente; tú conservaste la posibilidad del contrato, cargando con el peso del silencio.',
        explanation: 'Esta postura prioriza el interés particular a expensas de la justicia distributiva y la dignidad del vulnerable.',
        reflection: '¿Qué valor real tiene el éxito profesional si se cimienta sobre la ruina inmerecida de un semejante?'
      },
      {
        id: 'b',
        label: 'Testificar formalmente',
        text: 'Declarar la verdad ante Recursos Humanos con pruebas y fechas, respaldando plenamente al pasante.',
        philosophicalStance: 'Justicia testimonial valiente',
        effects: { libertad: 8, integridad: 9, conciencia: 9, responsabilidad: 8, relaciones: -3 },
        consequence: 'El pasante conserva su empleo; el supervisor te retira el apoyo para la plaza, pero la empresa reconoce tu probidad ética.',
        explanation: 'Tu decisión encarna la defensa del indefenso, reafirmando que la justicia exige asumir riesgos y costos personales.',
        reflection: '¿Qué nos obliga interiormente a hacer lo correcto cuando sabemos que nadie nos premiará por ello?'
      },
      {
        id: 'c',
        label: 'Apoyar al pasante fuera de la empresa',
        text: 'Ayudar al compañero a redactar un reclamo legal por su cuenta, pero pidiéndole que mantenga tu testimonio anónimo.',
        philosophicalStance: 'Apoyo condicionado a la seguridad',
        effects: { libertad: 1, integridad: 2, conciencia: 3, responsabilidad: 2, relaciones: 1 },
        consequence: 'El pasante tuvo mejores herramientas de defensa, pero el anonimato debilitó la credibilidad del testimonio ante la gerencia.',
        explanation: 'Buscaste auxiliar sin exponerte; refleja el intento humano de obrar el bien manteniendo un escudo de invulnerabilidad.',
        reflection: '¿Hasta qué punto un compromiso moral con la justicia puede ser eficaz si no está dispuesto a dar la cara?'
      },
      {
        id: 'd',
        label: 'Enfrentar directamente al supervisor',
        text: 'Hablar a solas con el supervisor y exigirle que rectifique su informe antes de que te veas obligado a acudir a la dirección.',
        philosophicalStance: 'Confrontación directa y oportunidad de enmienda',
        effects: { libertad: 6, integridad: 7, conciencia: 6, responsabilidad: 7, relaciones: 2 },
        consequence: 'El supervisor, sorprendido por tu firmeza y temeroso del escándalo, asume el error como una confusión administrativa.',
        explanation: 'Combinaste firmeza ética con una oportunidad para que el responsable enmendara su falta sin necesidad de litigio.',
        reflection: '¿Es posible apelar a la conciencia de quien ejerce el poder sin claudicar en la exigencia de justicia?'
      }
    ]
  },
  {
    id: 5,
    step: 5,
    theme: 'Racionalización',
    title: 'La teoría de los resultados útiles',
    bookConnection: 'Inspirado en el conflicto interior de Raskólnikov',
    literaryContext: 'Raskólnikov creía pertenecer a una élite capaz de quebrantar las normas morales ordinarias si el beneficio ulterior compensaba el acto.',
    coreConflict: 'Tensión entre el utilitarismo instrumental y el principio de que el fin no justifica la manipulación injusta.',
    context: 
      'Lideras un proyecto social universitario que construirá un comedor comunitario para decenas de familias necesitadas. Para obtener la donación principal que definirá el inicio de la obra, el patrocinador exige una certificación ambiental que tarda seis meses en tramitarse. Un asesor te sugiere falsificar una firma menor del sello: el terreno no tiene daño ecológico real, nadie lo investigará, y la falsificación permitirá que el comedor comience a alimentar a niños en dos semanas en lugar de esperar medio año. Te convences de que una mentira administrativa insignificante producirá un inmenso bien tangible.',
    options: [
      {
        id: 'a',
        label: 'Falsificar la firma',
        text: 'Firmar el documento: el bien de alimentar a decenas de familias es infinitamente superior a un trámite burocrático.',
        philosophicalStance: 'Utilitarismo instrumental',
        effects: { libertad: -4, integridad: -8, conciencia: -6, responsabilidad: -2, relaciones: 2 },
        consequence: 'El comedor abrió a tiempo y la comunidad aplaudió tu gestión, pero descubres que habituarse a falsificar abre una puerta sin retorno.',
        explanation: 'Justificaste un acto deshonesto por su utilidad social, cayendo en la clásica racionalización de que los fines nobles purifican los medios.',
        reflection: '¿Puede un proyecto de ayuda humana conservar su nobleza si sus cimientos están construidos sobre el engaño?'
      },
      {
        id: 'b',
        label: 'Esperar y respetar la legalidad',
        text: 'Rechazar la falsificación y esperar los plazos legales, explicando con transparencia la situación a la comunidad.',
        philosophicalStance: 'Coherencia de medios y fines',
        effects: { libertad: 6, integridad: 8, conciencia: 7, responsabilidad: 6, relaciones: -1 },
        consequence: 'Hubo frustración por la demora, pero el comedor se construyó con absoluta solidez jurídica y moral para el futuro.',
        explanation: 'Entendiste que la integridad exige coherencia entre lo que se busca y cómo se consigue, resistiendo la tentación del atajo.',
        reflection: '¿Por qué la paciencia ética frente a las dificultades suele ser más difícil que la audacia de quebrantar las reglas?'
      },
      {
        id: 'c',
        label: 'Presionar legalmente el trámite',
        text: 'Convocar a voluntarios y líderes comunitarios para solicitar pacíficamente una resolución prioritaria a la autoridad ambiental.',
        philosophicalStance: 'Activismo ciudadano legal',
        effects: { libertad: 7, integridad: 8, conciencia: 7, responsabilidad: 8, relaciones: 6 },
        consequence: 'La movilización aceleró el trámite legal a un mes; la comunidad se sintió partícipe y dueña del proceso cívico.',
        explanation: 'Canalizaste la urgencia hacia la acción participativa, demostrando que la solución ética suele exigir más creatividad y trabajo colectivo.',
        reflection: '¿Cómo evitar que la frustración burocrática nos empuje al cinismo o a la transgresión de nuestros propios principios?'
      },
      {
        id: 'd',
        label: 'Delegar la firma en otro',
        text: 'Permitir que el asesor gestione el trámite como él considere oportuno, evitando preguntar detalles para no enterarte.',
        philosophicalStance: 'Ignorancia deliberada / Lavado de manos',
        effects: { libertad: -6, integridad: -6, conciencia: -7, responsabilidad: -7, relaciones: -2 },
        consequence: 'El documento se presentó, pero tu intento de protegerte con una fingida ignorancia no acalló tu responsabilidad íntima.',
        explanation: 'La ignorancia voluntaria es una forma sutil de complicidad que busca disfrutar los beneficios de la falta sin asumir la culpa.',
        reflection: '¿Dejar de mirar lo que sabemos que está mal nos exime verdaderamente de la responsabilidad de haberlo permitido?'
      }
    ]
  },
  {
    id: 6,
    step: 6,
    theme: 'Conciencia',
    title: 'La voz en la habitación vacía',
    bookConnection: 'Inspirado en el conflicto interior de Raskólnikov',
    literaryContext: 'Tras su crimen, Raskólnikov descubre con espanto que ningún razonamiento filosófico puede sofocar el tormento silencioso de la conciencia humana.',
    coreConflict: 'Tensión entre el alivio de la impunidad externa y la exigencia íntima de reconciliarse con la verdad.',
    context: 
      'Semanas atrás, durante un concurso de diseño de alta competencia, encontraste en un laboratorio abierto el cuaderno de apuntes y bocetos de tu principal rival. En un impulso competitivo, revisaste sus conceptos y ajustaste tu propia entrega para neutralizar sus fortalezas y ganar el primer lugar. Tu rival no supo qué pasó, el jurado te premió con honores y nadie sospecha nada. Sin embargo, en el silencio de tus noches, la satisfacción del triunfo se evapora; cada felicitación se siente como una farsa y la mirada inocente de tu compañero te atormenta por dentro.',
    options: [
      {
        id: 'a',
        label: 'Convencerte de que era tuyo el mérito',
        text: 'Desestimar el malestar: la competencia es feroz, el cuaderno estaba expuesto y tu ejecución final fue obra de tu propio talento.',
        philosophicalStance: 'Autoengaño justificatorio',
        effects: { libertad: -5, integridad: -8, conciencia: -8, responsabilidad: -5, relaciones: -3 },
        consequence: 'Lograste sofocar el remordimiento momentáneamente, pero notas un distanciamiento cínico respecto a tu vocación.',
        explanation: 'Sofocar la conciencia debilita la autenticidad personal; cuando la razón trabaja para encubrir la falta, corrompe el juicio.',
        reflection: '¿Qué se pierde dentro de una persona cuando logra silenciar por completo la voz de su propia conciencia?'
      },
      {
        id: 'b',
        label: 'Confesar y renunciar al premio',
        text: 'Acercarte al compañero y al comité, explicar con franqueza lo ocurrido y poner el galardón a disposición.',
        philosophicalStance: 'Confesión y redención moral',
        effects: { libertad: 9, integridad: 9, conciencia: 9, responsabilidad: 8, relaciones: 4 },
        consequence: 'El bochorno inicial fue doloroso y perdiste el reconocimiento formal, pero recobraste la paz interior y el respeto genuino.',
        explanation: 'Asumir la verdad frente a la impunidad es el acto supremo de rectitud moral: devuelve la libertad que la culpa había secuestrado.',
        reflection: '¿Por qué la verdad, aun cuando acarrea pérdidas y vergüenza pública, es la única que otorga descanso duradero al espíritu?'
      },
      {
        id: 'c',
        label: 'Ofrecerle una oportunidad sin revelar la falta',
        text: 'Invitar a ese compañero a colaborar en tu proyecto premiado y compartir los beneficios económicos sin confesar la acción.',
        philosophicalStance: 'Reparación indirecta encubierta',
        effects: { libertad: 1, integridad: -2, conciencia: 2, responsabilidad: 3, relaciones: 3 },
        consequence: 'El compañero aceptó agradecido, pero la relación permanece construida sobre un secreto que te impide mirarlo de igual a igual.',
        explanation: 'Intentas expiar la falta con generosidad externa, eludiendo la vulnerabilidad de reconocer el error ante el ofendido.',
        reflection: '¿Puede haber una auténtica amistad cuando uno de los dos guarda una mentira fundamental sobre el otro?'
      },
      {
        id: 'd',
        label: 'Hacer una donación caritativa equivalente',
        text: 'Donar el monto del premio a una causa educativa benéfica para equilibrar la balanza kármica de tu conciencia.',
        philosophicalStance: 'Compensación abstracta',
        effects: { libertad: 0, integridad: -3, conciencia: 1, responsabilidad: 1, relaciones: -1 },
        consequence: 'Hiciste un bien objetivo a extraños, pero la persona concreta a la que agraviaste sigue desposeída de la justicia que le corresponde.',
        explanation: 'Tratas la culpa como una deuda mercantil sustituible, eludiendo la relación personal directa con el sujeto dañado.',
        reflection: '¿Por qué preferimos a veces beneficiar a desconocidos lejanos antes que pedir perdón a quien tenemos al lado?'
      }
    ]
  },
  {
    id: 7,
    step: 7,
    theme: 'Responsabilidad',
    title: 'El efecto dominó imprevisto',
    bookConnection: 'Dilema transversal de Core IV',
    literaryContext: 'Ser responsable implica hacerse cargo no solo de las intenciones iniciales, sino del impacto real que nuestras acciones suscitan en el mundo.',
    coreConflict: 'Tensión entre escudarse en la ausencia de mala intención y asumir la labor concreta de reparar un daño involuntario.',
    context: 
      'Organizas una actividad extracurricular de recaudación con buena fe. Por un error de cálculo logístico en las reservas, el evento causa un déficit de presupuesto imprevisto y la cancelación de un viaje académico programado para varios estudiantes de semestres menores. El error no fue intencionado ni hubo dolo de tu parte; podrías atribuirlo válidamente a fallas del proveedor o al clima y dejar que el departamento absorba las pérdidas sin que tu nombre se vea afectado. Los afectados están decepcionados y buscan explicaciones claras.',
    options: [
      {
        id: 'a',
        label: 'Culpar a imprevistos externos',
        text: 'Presentar un informe técnico enfatizando que los factores climáticos y del proveedor fueron las causas determinantes.',
        philosophicalStance: 'Exculpación circunstancial',
        effects: { libertad: -4, integridad: -5, conciencia: -4, responsabilidad: -8, relaciones: -3 },
        consequence: 'Salvaste tu reputación administrativa, pero los estudiantes menores perdieron la confianza en los líderes estudiantiles.',
        explanation: 'Eludir la responsabilidad culpando a las circunstancias rompe la solidaridad y debilita el crecimiento maduro del carácter.',
        reflection: '¿Cómo afecta a una comunidad cuando sus referentes nunca asumen un error propio?'
      },
      {
        id: 'b',
        label: 'Asumir el error y liderar la solución',
        text: 'Dar la cara ante los afectados, reconocer tu falta de previsión y proponer un plan conjunto para recuperar los fondos perdidos.',
        philosophicalStance: 'Responsabilidad reparadora activa',
        effects: { libertad: 7, integridad: 8, conciencia: 8, responsabilidad: 9, relaciones: 7 },
        consequence: 'Aunque hubo molestia inicial, tu honestidad generó respeto colectivo; con dos nuevas jornadas lograron salvar el viaje.',
        explanation: 'La responsabilidad auténtica no es pasiva culpa, sino disposición activa a responder por las consecuencias de los propios actos.',
        reflection: '¿Por qué la capacidad de pedir disculpas sinceras y trabajar por reparar el daño genera tanta autoridad moral?'
      },
      {
        id: 'c',
        label: 'Pagar de tu bolsillo en silencio',
        text: 'Cubrir en secreto con tus ahorros personales el déficit para que nadie se entere de que fallaste.',
        philosophicalStance: 'Sobrecarga culposa solitaria',
        effects: { libertad: 1, integridad: 3, conciencia: 2, responsabilidad: 4, relaciones: 0 },
        consequence: 'El viaje se realizó, pero quedaste endeudado y perdiste la oportunidad pedagógica de aprender a rendir cuentas con madurez.',
        explanation: 'Asumiste el costo material pero eludiste la rendición de cuentas compartida, prefiriendo el martirio solitario a la transparencia.',
        reflection: '¿Asumir la responsabilidad significa sacrificarse a solas o dialogar con verdad sobre los límites humanos?'
      },
      {
        id: 'd',
        label: 'Desentenderte formalmente',
        text: 'Indicar que tu rol era de voluntario no remunerado y que la coordinación general universitaria debe asumir el costo.',
        philosophicalStance: 'Desvinculación burocrática',
        effects: { libertad: -5, integridad: -6, conciencia: -5, responsabilidad: -7, relaciones: -6 },
        consequence: 'Creaste resentimiento en el equipo y dejaste a los estudiantes sin respuesta ni apoyo solidario.',
        explanation: 'Redujiste el compromiso comunitario a un mero contrato utilitario, destruyendo el sentido del servicio compartido.',
        reflection: '¿Qué queda del sentido de comunidad cuando cada cual se limita estrictamente a lo que le obliga la ley?'
      }
    ]
  },
  {
    id: 8,
    step: 8,
    theme: 'Autenticidad',
    title: 'El precio del aplauso',
    bookConnection: 'Inspirado en el conflicto de Atticus y Scout',
    literaryContext: 'Scout Finch aprende a mirar el mundo desde los zapatos del otro y a no traicionar su inocencia frente a las hipocresías elegantes del pueblo.',
    coreConflict: 'Tensión entre encajar en las expectativas de éxito del grupo y ser fiel a las convicciones profundas sobre el bien.',
    context: 
      'Eres parte de un colectivo estudiantil muy influyente que prepara su discurso electoral. Para ganar masivamente, la estrategia acordada consiste en apelar a la polarización, desacreditar con mofa a los adversarios y prometer medidas inviables que la gente desea oír. Todos te consideran el orador ideal y esperan que pronuncies el discurso con agresividad carismática. Sabes que esa retórica envenena la convivencia universitaria y contradice todo lo que has aprendido sobre el diálogo cívico, pero negarte te costará la exclusión inmediata del círculo de influencia.',
    options: [
      {
        id: 'a',
        label: 'Dar el discurso agresivo',
        text: 'Aceptar el rol: en la política estudiantil lo que cuenta es la victoria, y ya en el poder podrás gobernar con moderación.',
        philosophicalStance: 'Cinismo instrumental pragmático',
        effects: { libertad: -6, integridad: -8, conciencia: -6, responsabilidad: -5, relaciones: 4 },
        consequence: 'El discurso fue ovacionado y ganaron la elección, pero al verte en el espejo reconoces haber traicionado tu propio modo de ser.',
        explanation: 'Cambiaste tu convicción íntima por el aplauso efímero, demostrando cómo la presión del éxito colectivo puede desdibujar la autenticidad.',
        reflection: '¿Se puede llegar a fines nobles mediante discursos que siembran división y mentira?'
      },
      {
        id: 'b',
        label: 'Rechazar la mofa y proponer propuestas reales',
        text: 'Rehusar atacar a los otros; subir a la tribuna con un discurso centrado en propuestas viables y respeto democrático.',
        philosophicalStance: 'Autenticidad pública coherente',
        effects: { libertad: 8, integridad: 9, conciencia: 8, responsabilidad: 8, relaciones: -2 },
        consequence: 'Tu equipo te reprochó la falta de agresividad, pero varios sectores respetaron tu decencia y el debate subió de nivel.',
        explanation: 'Ser auténtico no es ser extravagante, sino mantener la coherencia moral entre el pensamiento privado y la acción pública.',
        reflection: '¿Por qué nos cuesta tanto ser nosotros mismos cuando el entorno premia la estridencia y la burla?'
      },
      {
        id: 'c',
        label: 'Ceder el lugar a otro orador',
        text: 'Decir que tienes problemas de salud y permitir que otro compañero pronuncie el discurso divisivo sin objetar nada.',
        philosophicalStance: 'Evasión neutralizadora',
        effects: { libertad: 1, integridad: 2, conciencia: 0, responsabilidad: -3, relaciones: 1 },
        consequence: 'El colectivo dio el discurso agresivo con otro vocero; no te aplaudieron a ti, pero tampoco levantaste tu voz.',
        explanation: 'Evitaste la transgresión personal directa sin confrontar la raíz del problema, manteniéndote en una zona de confort gris.',
        reflection: '¿Es suficiente no hacer el mal con nuestras propias manos mientras facilitamos que otros lo hagan?'
      },
      {
        id: 'd',
        label: 'Plantear el dilema internamente primero',
        text: 'Exigir una asamblea interna del equipo para argumentar por qué la estrategia divisiva les resta credibilidad a futuro.',
        philosophicalStance: 'Persuasión ética fraterna',
        effects: { libertad: 6, integridad: 7, conciencia: 6, responsabilidad: 7, relaciones: 5 },
        consequence: 'Lograste que el equipo modere el ataque más destructivo, demostrando que la autenticidad también puede influir positivamente.',
        explanation: 'Apostaste por transformar el grupo desde adentro mediante el diálogo fundamentado, sin caer en la capitulación ni en el aislamiento.',
        reflection: '¿Cómo cultivar la amistad y la lealtad sin convertirlas en complicidad con la mediocridad?'
      }
    ]
  },
  {
    id: 9,
    step: 9,
    theme: 'Integridad',
    title: 'La ventaja invisible',
    bookConnection: 'Dilema transversal de Core IV',
    literaryContext: 'Atticus Finch decía que antes de poder vivir con los demás, tenía que ser capaz de vivir consigo mismo: «La única cosa que no se rige por la regla de la mayoría es la conciencia».',
    coreConflict: 'Tensión entre maximizar una ganancia personal legítima en lo formal pero injusta en el fondo ético.',
    context: 
      'Estás postulando a un concurso nacional de titulación con financiamiento al extranjero. Al revisar las bases finales, descubres una laguna formal en el formulario digital: un casillero te permite omitir que recibiste una subvención previa, lo que te situaría automáticamente en el primer lugar de elegibilidad por puntaje de partida. Ninguna regla escrita califica expresamente esa omisión como ilegal ni serás sancionado; la ambigüedad del sistema corre a tu favor. Si declaras la verdad voluntariamente, el puntaje bajará y el primer lugar corresponderá a otra persona con mayores méritos acumulados.',
    options: [
      {
        id: 'a',
        label: 'Aprovechar el vacío legal',
        text: 'Aprovechar la ambigüedad: las reglas son públicas para todos y no estás violando ninguna norma explícita.',
        philosophicalStance: 'Legalismo formalista oportunista',
        effects: { libertad: -4, integridad: -8, conciencia: -7, responsabilidad: -4, relaciones: -3 },
        consequence: 'Obtuviste la beca al extranjero con formalidad impecable, sabiendo en lo íntimo que el mérito no te correspondía.',
        explanation: 'Confundir lo legal con lo ético es un error común; la integridad exige fidelidad al espíritu de la justicia, no al vacío de la letra.',
        reflection: '¿Qué diferencia a una persona simplemente astuta de una persona auténticamente íntegra?'
      },
      {
        id: 'b',
        label: 'Declarar la verdad y competir en justicia',
        text: 'Completar el formulario con absoluta veracidad y notificar formalmente a los organizadores la laguna detectada.',
        philosophicalStance: 'Integridad incondicional',
        effects: { libertad: 8, integridad: 9, conciencia: 8, responsabilidad: 8, relaciones: 4 },
        consequence: 'Quedaste en segundo lugar y la beca la ganó quien la merecía; tu honestidad fue elogiada en acta por el comité evaluador.',
        explanation: 'Elegiste la coherencia antes que el privilegio fácil, encarnando el principio de que la integridad práctica vale más que el éxito tramposo.',
        reflection: '¿Prefieres ganar un galardón sabiendo que hiciste trampa u obtener un digno segundo lugar sabiendo que diste lo mejor?'
      },
      {
        id: 'c',
        label: 'Consultar informalmente al evaluador',
        text: 'Preguntarle discretamente a un miembro del jurado si es necesario ponerlo, buscando que otro decida por ti.',
        philosophicalStance: 'Externalización del discernimiento',
        effects: { libertad: 1, integridad: 1, conciencia: 0, responsabilidad: -1, relaciones: 1 },
        consequence: 'El jurado te dio una respuesta vaga y quedaste en la misma incertidumbre, habiendo demostrado falta de autonomía ética.',
        explanation: 'Intentaste evadir el peso del discernimiento buscando una autorización externa que lavara tu responsabilidad.',
        reflection: '¿Por qué buscamos con tanta insistencia que otros nos den permiso para hacer lo que en el fondo sabemos dudoso?'
      },
      {
        id: 'd',
        label: 'Retirar tu postulación por completo',
        text: 'Desistir de participar para no tener que lidiar con la tentación ni con el riesgo de perjudicar a nadie.',
        philosophicalStance: 'Abstención preventiva drástica',
        effects: { libertad: 2, integridad: 4, conciencia: 3, responsabilidad: -1, relaciones: 0 },
        consequence: 'No cometiste falta alguna, pero abandonaste tus legítimas aspiraciones por temor a la tensión del discernimiento moral.',
        explanation: 'La integridad madura no huye del mundo ni de los desafíos; sabe competir y participar con limpieza en medio de las reglas.',
        reflection: '¿Ser bueno significa retirarse del juego o aprender a jugar con impecable honestidad y juego limpio?'
      }
    ]
  },
  {
    id: 10,
    step: 10,
    theme: 'Realización personal',
    title: 'El horizonte del proyecto de vida',
    bookConnection: 'Dilema transversal de Core IV',
    literaryContext: 'Al culminar el Core Curriculum, la pregunta central de Persona y su actuar resuena: ¿Qué significa realmente una vida lograda y con sentido?',
    coreConflict: 'Tensión entre definir la realización personal como acumulación de éxito externo o como una vocación de servicio, coherencia y bien común.',
    context: 
      'Has llegado al último peldaño de tu recorrido universitario. Te encuentras redactando tu manifiesto de egreso y proyectando los próximos diez años de tu vida profesional y personal. Recuerdas las decisiones que tomaste: momentos donde el pragmatismo te ofreció atajos y momentos donde la conciencia te exigió sacrificios. Ante ti se abren distintas ofertas y caminos de vida. Tu proyecto personal no será una hoja en blanco, sino la síntesis de qué valores estás dispuesto a defender cuando las circunstancias se vuelvan adversas.',
    options: [
      {
        id: 'a',
        label: 'Éxito individual y estatus',
        text: 'Priorizar ante todo el posicionamiento profesional, la seguridad financiera y el reconocimiento social como metas centrales.',
        philosophicalStance: 'Éxito y seguridad individual',
        effects: { libertad: 2, integridad: -2, conciencia: -1, responsabilidad: 0, relaciones: -2 },
        consequence: 'Definiste un camino de metas tangibles y solvencia, pero corres el riesgo de medir tu valía únicamente por indicadores externos.',
        explanation: 'El éxito y la seguridad son bienes válidos, pero la realización personal plena trasciende la mera acumulación de ventajas privadas.',
        reflection: '¿De qué sirve alcanzar la cima de una profesión si en el ascenso se ha perdido la capacidad de amar y ser justo?'
      },
      {
        id: 'b',
        label: 'Vocación de justicia y servicio',
        text: 'Orientar tu profesión hacia la transformación social y el servicio a los demás, asumiendo la austeridad o los conflictos que conlleve.',
        philosophicalStance: 'Compromiso social transformador',
        effects: { libertad: 7, integridad: 8, conciencia: 8, responsabilidad: 9, relaciones: 7 },
        consequence: 'Trazaste un horizonte donde tu talento se pone al servicio del bien común, encontrando sentido en dignificar la vida de otros.',
        explanation: 'Comprendiste que la realización personal se expande cuando la libertad se entrega por convicción a causas que trascienden el yo.',
        reflection: '¿En qué medida el sentido de tu propia vida está vinculado al bienestar de las personas con las que compartes tu mundo?'
      },
      {
        id: 'c',
        label: 'Búsqueda del equilibrio personal',
        text: 'Procurar una vida tranquila, cuidando la integridad de tus afectos cercanos y tu paz mental sin pretensiones heroicas.',
        philosophicalStance: 'Armonía y cuidado de lo próximo',
        effects: { libertad: 6, integridad: 6, conciencia: 6, responsabilidad: 5, relaciones: 8 },
        consequence: 'Cultivaste un espacio de relaciones sólidas y serenidad interior, cuidando lo próximo con bondad cotidiana.',
        explanation: 'Cuidar el entorno cercano y la paz interior es fundamental, siempre que no derive en indiferencia hacia los dramas lejanos.',
        reflection: '¿Cómo mantener la paz interior sin volverse indiferente ante las heridas del mundo que nos rodea?'
      },
      {
        id: 'd',
        label: 'Integridad práctica innegociable',
        text: 'Cimentar tu proyecto en la coherencia moral estricta: ninguna ganancia, ascenso o presión social te hará violar tu conciencia.',
        philosophicalStance: 'Primacía de la conciencia ética',
        effects: { libertad: 8, integridad: 9, conciencia: 8, responsabilidad: 7, relaciones: 5 },
        consequence: 'Elegiste el camino de Atticus Finch: podrás mirarte al espejo cada noche con la certeza de haber vivido en la verdad.',
        explanation: 'Hiciste de la integridad el eje rector de tu vida, entendiendo que la libertad madura es aquella que se compromete con el bien.',
        reflection: '¿Qué legado deseas dejar en quienes caminen contigo a lo largo de los años?'
      }
    ]
  }
];
