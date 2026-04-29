import { Lesson } from './types'

export const lessons: Lesson[] = [
  // ─── HISTORIA ───────────────────────────────────────────────────
  {
    id: 'hist-001',
    title: 'La caída del Imperio Romano',
    emoji: '🏛️',
    category: 'Historia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['roma', 'imperio', 'occidente'],
    createdAt: '2024-01-01',
    content: `## La caída del Imperio Romano de Occidente

El Imperio Romano fue una de las civilizaciones más poderosas de la historia. En su apogeo, controlaba territorios desde Britania hasta Mesopotamia. Pero en el año **476 d.C.**, el último emperador romano de Occidente, **Rómulo Augústulo**, fue depuesto por el caudillo germano Odoacro.

### ¿Por qué cayó?

Los historiadores debaten las causas desde hace siglos. Las principales teorías incluyen:

**1. Presiones militares externas**
Las invasiones bárbaras erosionaron las fronteras durante décadas. Los visigodos saquearon Roma en el 410, y los hunos bajo Atila aterrorizaron Europa en el siglo V.

**2. Crisis económica**
El coste del ejército era insostenible. Roma devaluó su moneda, generando inflación, y el comercio decayó significativamente.

**3. Inestabilidad política**
Entre los años 235 y 284 d.C., hubo más de 50 emperadores en lo que se conoce como la "Crisis del siglo III". Muchos murieron asesinados.

**4. La división del Imperio**
En el 285 d.C., Diocleciano dividió el Imperio en dos partes. El Imperio de Oriente (Bizancio) sobreviviría otros **1.000 años**, hasta 1453.

### Un dato curioso
La fecha del 476 d.C. fue básicamente ignorada por sus contemporáneos. Para ellos, el Imperio simplemente... seguía cambiando, como había hecho siempre.`,
    quiz: [
      {
        id: 'hist-001-q1',
        type: 'multiple',
        question: '¿En qué año cayó el Imperio Romano de Occidente?',
        options: ['395 d.C.', '410 d.C.', '476 d.C.', '1453 d.C.'],
        correctAnswer: 2,
        explanation: 'El año 476 d.C. es la fecha convencional de la caída del Imperio Romano de Occidente, cuando Rómulo Augústulo fue depuesto por Odoacro.',
      },
      {
        id: 'hist-001-q2',
        type: 'truefalse',
        question: '¿El Imperio Romano de Oriente (Bizancio) cayó al mismo tiempo que el de Occidente?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El Imperio Romano de Oriente, conocido como Bizancio, sobrevivió casi 1.000 años más, hasta 1453 d.C.',
      },
      {
        id: 'hist-001-q3',
        type: 'multiple',
        question: '¿Quién depuso al último emperador romano de Occidente?',
        options: ['Atila el Huno', 'Odoacro', 'Alarico', 'Teodosio'],
        correctAnswer: 1,
        explanation: 'Odoacro, un caudillo germano, depuso a Rómulo Augústulo en el 476 d.C., poniendo fin al Imperio Romano de Occidente.',
      },
    ],
  },
  {
    id: 'hist-002',
    title: 'La Revolución Francesa en 5 minutos',
    emoji: '⚔️',
    category: 'Historia',
    duration: 5,
    difficulty: 'principiante',
    tags: ['revolución', 'francia', 'libertad'],
    createdAt: '2024-01-02',
    content: `## La Revolución Francesa: Libertad, Igualdad, Fraternidad

En 1789, Francia era una monarquía absoluta gobernada por **Luis XVI**. La sociedad estaba dividida en tres "estados": el clero, la nobleza y el pueblo llano (el Tercer Estado, que era el 97% de la población).

### El detonante

Francia estaba en bancarrota tras apoyar la Revolución Americana. La cosecha de 1788 fue catastrófica y el pan escaseaba. El pueblo tenía hambre y estaba harto.

El **14 de julio de 1789**, una multitud tomó la Bastilla, una prisión símbolo del poder real. Esta fecha es hoy el **Día Nacional de Francia**.

### La Declaración de los Derechos del Hombre
En agosto de 1789, la Asamblea aprobó este documento histórico que proclamaba que todos los hombres nacen libres e iguales. Fue una revolución ideológica que cambió el mundo.

### El Terror (1793-1794)
El movimiento radical liderado por **Robespierre** ejecutó a miles de personas en la guillotina, incluyendo al propio rey Luis XVI y a la reina María Antonieta.

Irónicamente, Robespierre también acabó guillotinado.

### La llegada de Napoleón
El caos de la Revolución abrió el camino para que **Napoleón Bonaparte** tomara el poder en 1799, poniendo fin a la fase revolucionaria y comenzando una nueva era imperial.

### Legado
La Revolución Francesa exportó al mundo los ideales de democracia, derechos humanos y separación de poderes que todavía rigen nuestras sociedades.`,
    quiz: [
      {
        id: 'hist-002-q1',
        type: 'multiple',
        question: '¿Qué evento simbólico marcó el inicio de la Revolución Francesa?',
        options: ['La ejecución de Luis XVI', 'La toma de la Bastilla', 'La Declaración de los Derechos del Hombre', 'La llegada de Napoleón'],
        correctAnswer: 1,
        explanation: 'La toma de la Bastilla el 14 de julio de 1789 es el símbolo del inicio de la Revolución. Hoy es el Día Nacional de Francia.',
      },
      {
        id: 'hist-002-q2',
        type: 'truefalse',
        question: '¿Robespierre murió de vejez tras liderar el período conocido como "El Terror"?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Robespierre fue guillotinado en 1794, víctima del mismo sistema que había instaurado.',
      },
      {
        id: 'hist-002-q3',
        type: 'multiple',
        question: '¿Cuál era el eslogan de la Revolución Francesa?',
        options: ['Paz, Pan y Tierra', 'Libertad, Igualdad, Fraternidad', 'Un hombre, un voto', 'Dios, Patria y Rey'],
        correctAnswer: 1,
        explanation: '"Liberté, Égalité, Fraternité" (Libertad, Igualdad, Fraternidad) fue el lema de la Revolución y sigue siendo el lema oficial de Francia.',
      },
    ],
  },

  // ─── CIENCIA ────────────────────────────────────────────────────
  {
    id: 'cien-001',
    title: 'Por qué el cielo es azul',
    emoji: '🌤️',
    category: 'Ciencia',
    duration: 3,
    difficulty: 'principiante',
    tags: ['física', 'luz', 'atmósfera'],
    createdAt: '2024-01-03',
    content: `## ¿Por qué el cielo es azul?

Esta pregunta parece simple, pero la respuesta nos lleva a la física de la luz.

### La luz solar no es blanca (o sí lo es)

La luz del Sol parece blanca, pero en realidad contiene todos los colores del arcoíris: rojo, naranja, amarillo, verde, azul y violeta. Puedes verlo cuando llueve y aparece un arcoíris.

### El fenómeno: Dispersión de Rayleigh

Cuando la luz solar entra en la atmósfera, choca con las moléculas de nitrógeno y oxígeno. Estas moléculas **dispersan** la luz, pero no de forma uniforme.

La clave es que la luz azul tiene **longitud de onda corta**, y la dispersión es inversamente proporcional a la cuarta potencia de la longitud de onda. En palabras simples: la luz azul se dispersa **mucho más** que la roja.

Entonces la luz azul se esparce en todas direcciones por el cielo, mientras la roja pasa casi directamente. ¡Por eso el cielo es azul!

### ¿Por qué los atardeceres son rojos?

Al atardecer, la luz viaja a través de **mucho más** atmósfera para llegar a tus ojos. Para entonces, toda la luz azul ya se dispersó. Solo queda la roja y la naranja, que crean esos hermosos atardeceres.

### ¿Y por qué la luz violeta no hace el cielo morado?

¡Buena pregunta! La luz violeta se dispersa incluso más que la azul. Pero nuestros ojos son menos sensibles al violeta, y además parte de él es absorbida por la atmósfera. El resultado: percibimos azul.`,
    quiz: [
      {
        id: 'cien-001-q1',
        type: 'multiple',
        question: '¿Qué fenómeno físico explica por qué el cielo es azul?',
        options: ['Reflexión total', 'Dispersión de Rayleigh', 'Efecto Doppler', 'Refracción de Snell'],
        correctAnswer: 1,
        explanation: 'La Dispersión de Rayleigh describe cómo las moléculas de la atmósfera dispersan la luz de longitud de onda corta (azul) mucho más que la de longitud de onda larga (roja).',
      },
      {
        id: 'cien-001-q2',
        type: 'truefalse',
        question: '¿Los atardeceres son rojos porque la luz roja se dispersa más que la azul?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Es al revés: la luz azul se dispersa más. En los atardeceres, la luz viaja por más atmósfera, dispersando toda la luz azul y dejando pasar principalmente la roja.',
      },
      {
        id: 'cien-001-q3',
        type: 'multiple',
        question: '¿Qué tipo de longitud de onda tiene la luz azul comparada con la roja?',
        options: ['Más larga', 'Igual', 'Más corta', 'Depende de la hora del día'],
        correctAnswer: 2,
        explanation: 'La luz azul tiene longitud de onda más corta que la roja. Esta diferencia es la clave de la Dispersión de Rayleigh.',
      },
    ],
  },
  {
    id: 'cien-002',
    title: 'ADN: El manual de instrucciones de la vida',
    emoji: '🧬',
    category: 'Ciencia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['biología', 'genética', 'células'],
    createdAt: '2024-01-04',
    content: `## ADN: El manual de instrucciones de la vida

El **ADN (Ácido Desoxirribonucleico)** es una molécula que contiene las instrucciones genéticas para el desarrollo y funcionamiento de todos los seres vivos.

### ¿Cómo está estructurado?

El ADN tiene forma de **doble hélice**, como una escalera retorcida. Esto lo descubrieron **Watson y Crick** en 1953 (con la crucial ayuda de los rayos X de **Rosalind Franklin**).

Los "peldaños" de esa escalera están formados por pares de **bases nitrogenadas**:
- Adenina (A) siempre con Timina (T)
- Guanina (G) siempre con Citosina (C)

### Genes y cromosomas

El ADN se enrolla en estructuras llamadas **cromosomas**. Los humanos tenemos **46 cromosomas** en casi todas nuestras células (23 pares).

Un **gen** es un fragmento específico de ADN que contiene instrucciones para fabricar una proteína. Tenemos aproximadamente **20.000-25.000 genes**.

### Datos impresionantes

- Si estiraras todo el ADN de una célula humana, mediría **2 metros**
- Todo el ADN de tu cuerpo, extendido, llegaría del Sol a Plutón y de regreso (¡16 veces!)
- Compartimos el **98.7%** del ADN con los chimpancés
- Compartimos el **50%** del ADN con... ¡los plátanos!

### CRISPR: Editando el código de la vida

Desde 2012, la tecnología **CRISPR-Cas9** permite editar el ADN con una precisión sin precedentes, abriendo posibilidades para curar enfermedades genéticas.`,
    quiz: [
      {
        id: 'cien-002-q1',
        type: 'multiple',
        question: '¿Qué forma tiene la molécula de ADN?',
        options: ['Espiral simple', 'Doble hélice', 'Esfera tridimensional', 'Cadena lineal'],
        correctAnswer: 1,
        explanation: 'El ADN tiene estructura de doble hélice, descubierta por Watson y Crick en 1953.',
      },
      {
        id: 'cien-002-q2',
        type: 'truefalse',
        question: '¿Los seres humanos compartimos más del 98% del ADN con los chimpancés?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Compartimos aproximadamente el 98.7% del ADN con los chimpancés, lo que refleja nuestra estrecha relación evolutiva.',
      },
      {
        id: 'cien-002-q3',
        type: 'multiple',
        question: '¿Cuántos cromosomas tiene una célula humana normal?',
        options: ['23', '46', '64', '92'],
        correctAnswer: 1,
        explanation: 'Las células humanas tienen 46 cromosomas, organizados en 23 pares. La mitad proviene de la madre y la mitad del padre.',
      },
    ],
  },

  // ─── TECNOLOGÍA ─────────────────────────────────────────────────
  {
    id: 'tech-001',
    title: 'Cómo funciona Internet',
    emoji: '🌐',
    category: 'Tecnología',
    duration: 4,
    difficulty: 'principiante',
    tags: ['internet', 'redes', 'TCP/IP'],
    createdAt: '2024-01-05',
    content: `## ¿Cómo funciona Internet?

Internet no es una nube etérea: es una red física de cables, servidores y satélites que conectan millones de dispositivos.

### Los cables que cruzan el mundo

El 99% del tráfico de Internet viaja a través de **cables submarinos de fibra óptica** que cruzan los océanos. Hay más de 400 de estos cables tendidos en el fondo del mar, transmitiendo datos a la velocidad de la luz.

### El idioma de Internet: TCP/IP

Para que los dispositivos puedan comunicarse, necesitan hablar el mismo idioma. Ese idioma es el protocolo **TCP/IP**:

- **IP (Internet Protocol)**: Cada dispositivo tiene una dirección IP única (como una dirección postal). Por ejemplo: 192.168.1.1
- **TCP (Transmission Control Protocol)**: Divide los datos en pequeños paquetes, los envía por diferentes rutas y los reensambla en destino.

### ¿Qué pasa cuando escribes "google.com"?

1. Tu navegador consulta un **DNS** (como una guía telefónica) para convertir "google.com" en una dirección IP
2. Tu computadora envía una petición a esa IP
3. El servidor de Google responde enviando los archivos de la página
4. Tu navegador interpreta esos archivos y muestra la página

Todo esto ocurre en **menos de 1 segundo**.

### La "nube"

Cuando guardas algo "en la nube", en realidad lo estás guardando en servidores físicos (enormes edificios llenos de computadoras) que operan empresas como Amazon, Google o Microsoft.`,
    quiz: [
      {
        id: 'tech-001-q1',
        type: 'multiple',
        question: '¿Qué porcentaje del tráfico de Internet viaja por cables submarinos de fibra óptica?',
        options: ['50%', '75%', '90%', '99%'],
        correctAnswer: 3,
        explanation: 'El 99% del tráfico internacional de Internet viaja a través de cables submarinos de fibra óptica, no por satélite como mucha gente cree.',
      },
      {
        id: 'tech-001-q2',
        type: 'truefalse',
        question: '¿La "nube" almacena los datos en el aire o de forma virtual sin ubicación física?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La "nube" es en realidad servidores físicos en grandes edificios llamados centros de datos, operados por empresas como Amazon Web Services, Google o Microsoft Azure.',
      },
      {
        id: 'tech-001-q3',
        type: 'multiple',
        question: '¿Cuál es la función principal del DNS en Internet?',
        options: ['Encriptar los datos', 'Convertir nombres de dominio en direcciones IP', 'Comprimir archivos', 'Gestionar contraseñas'],
        correctAnswer: 1,
        explanation: 'El DNS (Domain Name System) actúa como la guía telefónica de Internet, traduciendo nombres como "google.com" a direcciones IP numéricas.',
      },
    ],
  },
  {
    id: 'tech-002',
    title: 'Inteligencia Artificial: Desmitificando la IA',
    emoji: '🤖',
    category: 'Tecnología',
    duration: 5,
    difficulty: 'intermedio',
    tags: ['IA', 'machine learning', 'redes neuronales'],
    createdAt: '2024-01-06',
    content: `## Inteligencia Artificial: Desmitificando la IA

La **Inteligencia Artificial (IA)** no es ciencia ficción: es una tecnología que ya usas todos los días sin darte cuenta.

### ¿Qué es realmente la IA?

La IA es la capacidad de las máquinas para realizar tareas que normalmente requerirían inteligencia humana: reconocer imágenes, entender texto, tomar decisiones.

La mayoría de la IA moderna funciona con **Aprendizaje Automático (Machine Learning)**: en lugar de programar reglas explícitas, se le muestran miles de ejemplos y el sistema aprende los patrones por sí solo.

### Redes Neuronales

Las redes neuronales están inspiradas en el cerebro humano. Son capas de "neuronas" artificiales que procesan información. Cada neurona recibe señales, las procesa y pasa el resultado a la siguiente capa.

Las **Redes Neuronales Profundas (Deep Learning)** tienen muchas capas y pueden aprender patrones extremadamente complejos.

### IA en tu vida diaria

- **Recomendaciones** de Netflix, Spotify o YouTube
- **Reconocimiento facial** de tu teléfono
- **Filtros de spam** en tu correo
- **Traducción automática** (Google Translate)
- **Asistentes de voz** (Siri, Alexa)
- **ChatGPT y modelos de lenguaje**

### La IA actual vs. la de películas

La IA actual es **"IA estrecha"**: muy buena en tareas específicas, pero sin comprensión real del mundo. No tiene consciencia ni sentimientos.

La **"IA general"** (como la de las películas) que iguala la inteligencia humana en todo, aún no existe.`,
    quiz: [
      {
        id: 'tech-002-q1',
        type: 'multiple',
        question: '¿En qué se inspiran las redes neuronales artificiales?',
        options: ['Los chips de computadora', 'El cerebro humano', 'Los circuitos eléctricos', 'Los algoritmos matemáticos'],
        correctAnswer: 1,
        explanation: 'Las redes neuronales artificiales están inspiradas en el cerebro humano, con capas de neuronas artificiales que procesan y transmiten información.',
      },
      {
        id: 'tech-002-q2',
        type: 'truefalse',
        question: '¿La IA actual que usamos en el día a día tiene consciencia y puede entender el mundo como los humanos?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La IA actual es "IA estrecha": excelente en tareas específicas pero sin comprensión real del mundo ni consciencia. La "IA general" equivalente a la inteligencia humana aún no existe.',
      },
      {
        id: 'tech-002-q3',
        type: 'multiple',
        question: '¿Cómo aprende principalmente la IA moderna (Machine Learning)?',
        options: ['Con reglas programadas manualmente', 'Viendo muchos ejemplos y encontrando patrones', 'Copiando el código de internet', 'Con instrucciones de sus creadores'],
        correctAnswer: 1,
        explanation: 'El Machine Learning funciona mostrándole al sistema miles de ejemplos. El sistema aprende a reconocer patrones por sí solo, sin que se programen reglas explícitas.',
      },
    ],
  },

  // ─── ARTE ────────────────────────────────────────────────────────
  {
    id: 'arte-001',
    title: 'Por qué La Mona Lisa es tan famosa',
    emoji: '🖼️',
    category: 'Arte',
    duration: 3,
    difficulty: 'principiante',
    tags: ['renacimiento', 'da vinci', 'pintura'],
    createdAt: '2024-01-07',
    content: `## Por qué La Mona Lisa es tan famosa

La **Mona Lisa** de Leonardo da Vinci es probablemente la pintura más famosa del mundo. Pero ¿por qué? No es la más grande, ni la más colorida. La historia de su fama es fascinante.

### El cuadro en sí

Pintada entre 1503 y 1519, retrata a **Lisa Gherardini**, esposa de un comerciante florentino. Mide apenas 77 × 53 cm.

Lo que la hace técnicamente brillante:
- **Sfumato**: Técnica de Da Vinci que crea bordes difuminados, dando una sensación de profundidad y misterio. Por eso la sonrisa parece cambiar según cómo la mires.
- **Perspectiva atmosférica**: El fondo se vuelve más azulado y difuso con la distancia, como en la realidad.

### La sonrisa misteriosa

¿Está sonriendo o no? Depende de adónde mires. Estudios con tecnología moderna sugieren que Da Vinci pintó múltiples capas de expresión superpuestas, creando ambigüedad intencional.

### El robo que la hizo famosa

En 1911, **Vincenzo Peruggia**, un empleado del Louvre, robó la Mona Lisa. Estuvo desaparecida **2 años**. Cuando fue recuperada, las noticias sobre el robo la habían convertido en una celebridad mundial.

Antes del robo, era apreciada por expertos pero no era "la pintura más famosa del mundo".

### Hoy en el Louvre

Más de **9 millones** de personas la visitan cada año. Está detrás de un vidrio blindado y muchos visitantes confiesan decepcionarse: es más pequeña de lo que esperaban.`,
    quiz: [
      {
        id: 'arte-001-q1',
        type: 'multiple',
        question: '¿Qué evento hizo que La Mona Lisa se volviera mundialmente famosa en el siglo XX?',
        options: ['Su exposición en Nueva York', 'Un robo en 1911', 'Aparecer en un billete', 'Un documental de televisión'],
        correctAnswer: 1,
        explanation: 'El robo de La Mona Lisa en 1911 por Vincenzo Peruggia, y la cobertura mediática durante los 2 años que estuvo desaparecida, la convirtieron en una celebridad mundial.',
      },
      {
        id: 'arte-001-q2',
        type: 'multiple',
        question: '¿Qué técnica de Da Vinci crea los bordes difuminados de la Mona Lisa?',
        options: ['Chiaroscuro', 'Sfumato', 'Impasto', 'Fresco'],
        correctAnswer: 1,
        explanation: 'El Sfumato es la técnica de Da Vinci que crea transiciones suaves sin bordes definidos, dando profundidad y el famoso misterio a la sonrisa.',
      },
      {
        id: 'arte-001-q3',
        type: 'truefalse',
        question: '¿La Mona Lisa es uno de los cuadros más grandes del Louvre?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La Mona Lisa mide apenas 77 × 53 cm. Muchos visitantes quedan sorprendidos por lo pequeña que es en realidad.',
      },
    ],
  },

  // ─── MÚSICA ─────────────────────────────────────────────────────
  {
    id: 'mus-001',
    title: 'Por qué la música nos produce escalofríos',
    emoji: '🎵',
    category: 'Música',
    duration: 3,
    difficulty: 'principiante',
    tags: ['neurociencia', 'emoción', 'dopamina'],
    createdAt: '2024-01-08',
    content: `## Por qué la música nos produce escalofríos

¿Alguna vez escuchaste una canción y sentiste un escalofrío que te recorrió la espalda? Este fenómeno tiene nombre científico: **"frissons"** (del francés "escalofríos").

### La neurociencia del escalofrío musical

Cuando escuchamos música que nos produce escalofríos, el cerebro libera **dopamina**, el mismo neurotransmisor del placer, las recompensas y las adicciones.

Un estudio de 2011 en la Universidad McGill demostró que la música activa el **sistema límbico** (el centro emocional del cerebro) de la misma forma que la comida, el sexo o las drogas.

### ¿Por qué nos da escalofríos y no a todos?

Solo el **50-70%** de las personas experimenta frissons. Las investigaciones sugieren que está relacionado con:

- **Apertura a la experiencia**: Las personas más abiertas a nuevas experiencias son más propensas a sentirlos
- **Empatía**: Las personas más empáticas los sienten con más frecuencia
- **Conexiones fuertes entre la corteza auditiva y la emocional**

### Los momentos más "escalofriantes"

Los frissons suelen ocurrir cuando la música hace algo **inesperado pero satisfactorio**:
- Una nota inesperada que resuelve la tensión
- Un crescendo que llega al climax
- La voz humana alcanzando su límite
- Una armonía que nadie esperaba

### Dato fascinante

Las personas que experimentan frissons tienen, en promedio, **cerebros ligeramente diferentes**: la corteza auditiva tiene más conexiones con el sistema límbico. La música literalmente los conecta más.`,
    quiz: [
      {
        id: 'mus-001-q1',
        type: 'multiple',
        question: '¿Qué neurotransmisor libera el cerebro cuando la música nos produce escalofríos?',
        options: ['Serotonina', 'Adrenalina', 'Dopamina', 'Oxitocina'],
        correctAnswer: 2,
        explanation: 'La música que nos produce escalofríos activa la liberación de dopamina, el mismo neurotransmisor del placer y las recompensas.',
      },
      {
        id: 'mus-001-q2',
        type: 'multiple',
        question: '¿Qué porcentaje aproximado de personas experimenta frissons (escalofríos musicales)?',
        options: ['10-20%', '30-40%', '50-70%', '80-90%'],
        correctAnswer: 2,
        explanation: 'Aproximadamente el 50-70% de las personas experimenta frissons. No todos tienen esta capacidad, y parece estar relacionada con rasgos de personalidad específicos.',
      },
      {
        id: 'mus-001-q3',
        type: 'truefalse',
        question: '¿Las personas que sienten escalofríos con la música tienen cerebros estructuralmente diferentes?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Las personas que experimentan frissons tienen, en promedio, más conexiones entre la corteza auditiva y el sistema límbico (el centro emocional).',
      },
    ],
  },

  // ─── GEOGRAFÍA ──────────────────────────────────────────────────
  {
    id: 'geo-001',
    title: 'Por qué Australia tiene fauna tan extraña',
    emoji: '🦘',
    category: 'Geografía',
    duration: 4,
    difficulty: 'principiante',
    tags: ['australia', 'evolución', 'marsupiales'],
    createdAt: '2024-01-09',
    content: `## Por qué Australia tiene fauna tan extraña

Australia tiene canguros, koalas, ornitorrincos y más de 10.000 especies de arañas. ¿Por qué su fauna es tan diferente al resto del mundo?

### La respuesta está en la deriva continental

Hace unos **45 millones de años**, Australia se separó del supercontinente Gondwana y quedó completamente aislada. Sin competidores de otros continentes, los animales australianos evolucionaron por su cuenta.

### Los marsupiales tomaron el control

En la mayoría del mundo, los **mamíferos placentarios** (como nosotros) desplazaron a otros grupos. En Australia, aislada del mundo, los **marsupiales** pudieron diversificarse libremente:

- **Canguro**: Salta para ahorrar energía en el árido interior
- **Koala**: Se especializó en eucaliptos, que son tóxicos para otros animales
- **Wombat**: Sus heces son cúbicas (el único animal del mundo)
- **Diablo de Tasmania**: El mamífero carnívoro de tierra más grande de Australia

### El ornitorrinco: El animal más raro del planeta

El **ornitorrinco** tiene pico de pato, cola de castor, patas de nutria, pone huevos (¡es un mamífero que pone huevos!) y los machos tienen espolones venenosos. Cuando los científicos europeos vieron el primer espécimen, creyeron que alguien lo había cosido de partes de distintos animales.

### Un ecosistema frágil

El aislamiento que creó esta fauna única también la hace extremadamente vulnerable. Las especies invasoras (conejos, zorros, gatos) introducidas por los humanos han devastado la fauna nativa.`,
    quiz: [
      {
        id: 'geo-001-q1',
        type: 'multiple',
        question: '¿Hace cuántos años aproximadamente se separó Australia del supercontinente Gondwana?',
        options: ['5 millones', '45 millones', '200 millones', '400 millones'],
        correctAnswer: 1,
        explanation: 'Australia se separó de Gondwana hace unos 45 millones de años, lo que permitió que su fauna evolucionara de forma completamente independiente.',
      },
      {
        id: 'geo-001-q2',
        type: 'truefalse',
        question: '¿El ornitorrinco es el único mamífero que pone huevos?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso, aunque casi. El ornitorrinco pertenece al grupo de los monotremas, junto con los equidnas (o erizos australianos). Son los únicos mamíferos que ponen huevos.',
      },
      {
        id: 'geo-001-q3',
        type: 'multiple',
        question: '¿Cuál es el único animal del mundo que produce heces de forma cúbica?',
        options: ['Canguro', 'Koala', 'Wombat', 'Diablo de Tasmania'],
        correctAnswer: 2,
        explanation: 'El wombat produce heces cúbicas, un fenómeno único en el reino animal. Los científicos creen que sirve para marcar territorio con más efectividad.',
      },
    ],
  },

  // ─── FILOSOFÍA ──────────────────────────────────────────────────
  {
    id: 'filo-001',
    title: 'El dilema del tranvía: ¿Matarías a uno para salvar a cinco?',
    emoji: '🚃',
    category: 'Filosofía',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['ética', 'dilema moral', 'utilitarismo'],
    createdAt: '2024-01-10',
    content: `## El dilema del tranvía

Un tranvía sin frenos se dirige a toda velocidad hacia **5 personas** atadas a la vía. Puedes accionar una palanca para desviar el tranvía a otra vía, donde hay **1 persona** atada.

**¿Accionas la palanca?**

### El resultado de los estudios

Cuando se pregunta a miles de personas en todo el mundo, aproximadamente el **90%** dice que accionaría la palanca. Salvar 5 vidas a costa de 1 parece lógico.

### La variante del puente

Ahora imagina que estás en un puente sobre la vía. Junto a ti hay una persona corpulenta. Si la empujas, su cuerpo detendrá el tranvía y salvará a los 5. **¿La empujas?**

Matemáticamente es idéntico: 1 muerte vs. 5. Pero ahora solo el **10%** dice que lo haría.

### ¿Por qué cambia todo?

Esta diferencia revela dos sistemas morales en tensión:

**Utilitarismo** (Bentham, Mill): Lo correcto es maximizar el bienestar total. Salvar 5 > salvar 1. Siempre accionas la palanca y siempre empujas.

**Deontología** (Kant): Hay acciones intrínsecamente malas, independientemente del resultado. Usar a una persona como medio para un fin es siempre incorrecto.

Nuestro cerebro aplica el **utilitarismo** cuando la acción es indirecta (palanca) pero la **deontología** cuando es directa y personal (empujar).

### ¿Por qué importa?

Este dilema no es académico: los programadores de coches autónomos deben codificar estas decisiones. Si un accidente es inevitable, ¿a quién salva el coche?`,
    quiz: [
      {
        id: 'filo-001-q1',
        type: 'multiple',
        question: '¿Qué corriente filosófica defiende "salvar al mayor número de personas siempre"?',
        options: ['Deontología', 'Existencialismo', 'Utilitarismo', 'Nihilismo'],
        correctAnswer: 2,
        explanation: 'El utilitarismo, desarrollado por Bentham y Mill, sostiene que la acción correcta es la que maximiza el bienestar total, lo que implica salvar al mayor número de personas.',
      },
      {
        id: 'filo-001-q2',
        type: 'truefalse',
        question: '¿En los estudios, la mayoría de las personas está dispuesta a empujar físicamente a alguien para salvar cinco vidas?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Aunque matemáticamente es idéntico al caso de la palanca, solo el 10% dice estar dispuesto a empujar físicamente a alguien, revelando nuestra distinción entre acción directa e indirecta.',
      },
      {
        id: 'filo-001-q3',
        type: 'multiple',
        question: '¿El dilema del tranvía tiene aplicaciones prácticas en qué tecnología moderna?',
        options: ['Inteligencia artificial general', 'Vehículos autónomos', 'Realidad virtual', 'Criptografía'],
        correctAnswer: 1,
        explanation: 'Los programadores de vehículos autónomos deben tomar decisiones similares: cuando un accidente es inevitable, ¿cómo debe elegir el coche a quién proteger?',
      },
    ],
  },

  // ─── LITERATURA ─────────────────────────────────────────────────
  {
    id: 'lit-001',
    title: 'Don Quijote: El primer antihéroe moderno',
    emoji: '📖',
    category: 'Literatura',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['cervantes', 'novela', 'españa'],
    createdAt: '2024-01-11',
    content: `## Don Quijote: El primer antihéroe moderno

Publicada en **1605**, "El ingenioso hidalgo don Quijote de la Mancha" de **Miguel de Cervantes** es considerada la primera novela moderna del mundo occidental y la obra más influyente de la literatura en lengua española.

### ¿De qué trata?

Alonso Quijano, un hidalgo manchego de mediana edad, enloquece por leer demasiados libros de caballería. Se convierte en el "Caballero Don Quijote de la Mancha" y sale a vivir aventuras con su escudero **Sancho Panza**.

El resultado son aventuras tragicómicas donde Don Quijote ve gigantes (molinos de viento), castillos (ventas) y ejércitos enemigos (rebaños de ovejas).

### Por qué es revolucionaria

**1. La autoficción y la metaficción**
Cervantes incluye a un autor ficticio árabe, "Cide Hamete Benengeli", que supuestamente escribió la historia original. Es una de las primeras novelas que reflexiona sobre su propia naturaleza como ficción.

**2. El antihéroe**
Don Quijote no es un héroe clásico. Es un viejo ridículo que fracasa constantemente. Pero en su fracaso hay una nobleza que lo hace memorable.

**3. Dos mundos en conflicto**
Don Quijote representa el idealismo, los sueños, la fantasía. Sancho representa el pragmatismo y la realidad. Su relación es el corazón de la novela.

### Su impacto

Shakespeare y Cervantes murieron el mismo año (1616). Hoy, el español es el segundo idioma más hablado del mundo en parte gracias al poder cultural que Don Quijote le dio.`,
    quiz: [
      {
        id: 'lit-001-q1',
        type: 'multiple',
        question: '¿En qué año fue publicada la primera parte de Don Quijote?',
        options: ['1492', '1550', '1605', '1700'],
        correctAnswer: 2,
        explanation: 'La primera parte de Don Quijote fue publicada en 1605. La segunda parte apareció en 1615, un año antes de la muerte de Cervantes.',
      },
      {
        id: 'lit-001-q2',
        type: 'truefalse',
        question: '¿Don Quijote confunde molinos de viento con gigantes?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. El episodio de los molinos de viento es uno de los más famosos. Don Quijote los confunde con gigantes y arremete contra ellos, convirtiéndose en símbolo del idealismo frente a la realidad.',
      },
      {
        id: 'lit-001-q3',
        type: 'multiple',
        question: '¿Quién es el escudero de Don Quijote?',
        options: ['Dulcinea del Toboso', 'Cide Hamete Benengeli', 'Sancho Panza', 'Rocinante'],
        correctAnswer: 2,
        explanation: 'Sancho Panza es el escudero de Don Quijote. Representa el pragmatismo y la sensatez frente al idealismo de su amo, creando una de las parejas más icónicas de la literatura.',
      },
    ],
  },

  // ─── CURIOSIDADES ───────────────────────────────────────────────
  {
    id: 'cur-001',
    title: 'Por qué bostezamos (y por qué es contagioso)',
    emoji: '🥱',
    category: 'Curiosidades',
    duration: 2,
    difficulty: 'principiante',
    tags: ['biología', 'cerebro', 'social'],
    createdAt: '2024-01-12',
    content: `## Por qué bostezamos (y por qué es contagioso)

Todos bostezamos. Los humanos, los perros, los peces, los reptiles... incluso los fetos en el útero bostezan. Pero durante siglos, nadie supo bien por qué.

### La teoría clásica (y probablemente incorrecta)

La teoría tradicional decía que bostezamos cuando hay poco oxígeno en el cerebro. Pero estudios han demostrado que respirar oxígeno puro no reduce los bostezos.

### La teoría moderna: refrescamos el cerebro

La hipótesis más aceptada hoy es la **termorregulación cerebral**. Cuando el cerebro se calienta (por somnolencia, aburrimiento o transiciones de sueño), bostezar refresca el cerebro. El aire frío que entra actúa como un ventilador.

Evidencia: bostezamos más en ambientes cálidos y menos en ambientes fríos. Ponerse una compresa fría en la frente reduce los bostezos.

### ¿Por qué son contagiosos?

El bostezo contagioso es fascinante porque está relacionado con la **empatía**. Los estudios muestran que:

- Los niños menores de 4 años no "contagian" bostezos (aún no tienen empatía desarrollada)
- Las personas con autismo o psicopatía contagian menos
- Bostezamos más al ver bostezar a personas cercanas que a extraños
- ¡Los perros bostezan cuando lo hacen sus dueños!

Solo el hecho de **leer sobre bostezos** ya te da ganas de bostezar. ¿Ya bostezaste?`,
    quiz: [
      {
        id: 'cur-001-q1',
        type: 'multiple',
        question: '¿Cuál es la hipótesis moderna más aceptada sobre por qué bostezamos?',
        options: ['Para aumentar el oxígeno en la sangre', 'Para refrescar el cerebro', 'Para estirar los músculos faciales', 'Como señal de hambre'],
        correctAnswer: 1,
        explanation: 'La hipótesis de la termorregulación cerebral es la más aceptada actualmente: bostezamos para refrescar el cerebro cuando su temperatura sube por somnolencia o transiciones de sueño.',
      },
      {
        id: 'cur-001-q2',
        type: 'truefalse',
        question: '¿Los bostezos contagiosos están relacionados con la empatía?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Los estudios muestran que los bostezos contagiosos están ligados a la empatía: los niños menores de 4 años y personas con menor capacidad empática contagian y "se contagian" menos.',
      },
      {
        id: 'cur-001-q3',
        type: 'multiple',
        question: '¿Qué hace que bostezamos MENOS según los estudios de termorregulación?',
        options: ['Estar en un ambiente cálido', 'Estar en un ambiente frío', 'Estar cansado', 'Tener una compresa caliente en la frente'],
        correctAnswer: 1,
        explanation: 'Los ambientes fríos reducen los bostezos, porque no hay necesidad de "enfriar" el cerebro. De hecho, ponerse una compresa fría en la frente también reduce la frecuencia de bostezos.',
      },
    ],
  },

  // ─── ECONOMÍA ───────────────────────────────────────────────────
  {
    id: 'econ-001',
    title: 'Inflación: Por qué el dinero pierde valor',
    emoji: '💸',
    category: 'Economía',
    duration: 4,
    difficulty: 'principiante',
    tags: ['inflación', 'dinero', 'economía básica'],
    createdAt: '2024-01-13',
    content: `## Inflación: Por qué el dinero pierde valor

Si tu abuelo guardó $100 en 1970, hoy compraría mucho menos que entonces. Esto se llama **inflación**: el aumento general y sostenido de los precios a lo largo del tiempo.

### ¿Cómo funciona?

Imagina una isla con 10 manzanas y $10 en circulación. Cada manzana cuesta $1.

Si de repente hay $20 pero siguen habiendo 10 manzanas, cada manzana ahora cuesta $2. El dinero vale la mitad.

La inflación ocurre cuando hay **más dinero persiguiendo la misma cantidad de bienes**.

### Causas principales

**1. Exceso de dinero en circulación**
Los bancos centrales imprimen dinero → hay más dinero → los precios suben.

**2. Demanda excesiva**
Si todos quieren comprar lo mismo al mismo tiempo, los vendedores suben los precios.

**3. Costos de producción**
Si sube el precio del petróleo, sube el costo de producir casi todo, y esos costos se trasladan al consumidor.

### ¿La inflación es siempre mala?

Sorprendentemente, **no**. Un poco de inflación (2-3% anual) es considerada saludable porque:
- Incentiva gastar e invertir en lugar de guardar dinero
- Permite ajustar salarios sin tener que bajarlos nominalmente
- Facilita el pago de deudas antiguas

Lo destructivo es la **hiperinflación**: Zimbabue tuvo una inflación del 89.7 **septillones** de % en 2008, y Alemania en 1923 necesitaba carretillas de dinero para comprar pan.

### El IPC

El **Índice de Precios al Consumidor (IPC)** mide la inflación seguiendo el precio de una canasta de productos representativos a lo largo del tiempo.`,
    quiz: [
      {
        id: 'econ-001-q1',
        type: 'multiple',
        question: '¿Qué sucede con los precios cuando hay más dinero circulando pero la misma cantidad de bienes?',
        options: ['Los precios bajan', 'Los precios se mantienen igual', 'Los precios suben', 'Los precios fluctúan aleatoriamente'],
        correctAnswer: 2,
        explanation: 'Cuando hay más dinero persiguiendo la misma cantidad de bienes, los precios suben: cada unidad monetaria vale menos porque hay más de ellas.',
      },
      {
        id: 'econ-001-q2',
        type: 'truefalse',
        question: '¿Una inflación moderada del 2-3% anual es considerada positiva por los economistas?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Una inflación baja y estable incentiva gastar e invertir, facilita el ajuste de precios y salarios, y es el objetivo de la mayoría de los bancos centrales.',
      },
      {
        id: 'econ-001-q3',
        type: 'multiple',
        question: '¿Qué mide el Índice de Precios al Consumidor (IPC)?',
        options: ['El PIB del país', 'El precio promedio de las acciones', 'La inflación a través de una canasta de productos', 'El salario mínimo'],
        correctAnswer: 2,
        explanation: 'El IPC mide la inflación siguiendo la evolución del precio de una "canasta" de productos y servicios representativos del consumo típico de una familia.',
      },
    ],
  },

  // ─── NATURALEZA ─────────────────────────────────────────────────
  {
    id: 'nat-001',
    title: 'Los árboles se comunican bajo tierra',
    emoji: '🌳',
    category: 'Naturaleza',
    duration: 3,
    difficulty: 'principiante',
    tags: ['bosque', 'hongos', 'plantas'],
    createdAt: '2024-01-14',
    content: `## Los árboles se comunican bajo tierra

Lo que parece un bosque tranquilo esconde una red de comunicación compleja y fascinante. Los árboles no son seres solitarios e independientes: están conectados en una red que la bióloga Suzanne Simard llamó la **"Wood Wide Web"**.

### La red micorrízica

Los árboles se conectan a través de **hongos micorrízicos**, que forman una red de filamentos (micelio) en el suelo. Esta red cubre distancias enormes: un metro cúbico de suelo forestal puede contener hasta **800 km** de filamentos fúngicos.

Los hongos ayudan a los árboles a absorber agua y nutrientes. A cambio, los árboles les dan azúcares producidos por la fotosíntesis. Es una relación simbiótica perfecta.

### ¿Cómo "hablan"?

Los árboles usan esta red para:

**Compartir nutrientes**: Los árboles grandes y sanos (llamados "árboles madre") transfieren carbono y nutrientes a los más jóvenes y débiles.

**Enviar señales de alarma**: Cuando un árbol es atacado por insectos, envía señales químicas a través de la red. Los árboles vecinos aumentan sus defensas antes de ser atacados.

**Reconocer parientes**: Los árboles priorizan compartir nutrientes con sus propios descendientes.

### Suzanne Simard y el descubrimiento

La bióloga canadiense Suzanne Simard demostró en 1997 que los abetos transferían carbono entre sí. Su trabajo fue inicialmente rechazado por la comunidad científica pero hoy es ampliamente aceptado.

Su historia inspiró la novela "La ovación" de Richard Powers, ganadora del Premio Pulitzer.`,
    quiz: [
      {
        id: 'nat-001-q1',
        type: 'multiple',
        question: '¿Cómo se llama la red subterránea que conecta a los árboles?',
        options: ['Red de raíces primarias', 'Red micorrízica', 'Sistema linfático vegetal', 'Red de fotosíntesis'],
        correctAnswer: 1,
        explanation: 'La red micorrízica está formada por hongos cuyo micelio conecta las raíces de los árboles, permitiendo el intercambio de nutrientes y señales químicas.',
      },
      {
        id: 'nat-001-q2',
        type: 'truefalse',
        question: '¿Los árboles pueden enviar señales de alarma a árboles vecinos a través de la red fúngica?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Los árboles bajo ataque de insectos envían señales químicas a través de la red micorrízica, permitiendo que los árboles vecinos refuercen sus defensas antes de ser atacados.',
      },
      {
        id: 'nat-001-q3',
        type: 'multiple',
        question: '¿Qué reciben los hongos a cambio de conectar y nutrir a los árboles?',
        options: ['Agua del subsuelo', 'Azúcares producidos por fotosíntesis', 'Minerales del suelo', 'Oxígeno de las hojas'],
        correctAnswer: 1,
        explanation: 'Los hongos reciben azúcares (carbohidratos) que los árboles producen mediante la fotosíntesis. Es una relación simbiótica: los hongos dan minerales y agua; los árboles dan azúcares.',
      },
    ],
  },

  // ─── CINE ────────────────────────────────────────────────────────
  {
    id: 'cine-001',
    title: 'Cómo se inventó el cine',
    emoji: '🎬',
    category: 'Cine',
    duration: 3,
    difficulty: 'principiante',
    tags: ['lumière', 'historia del cine', 'fotografía'],
    createdAt: '2024-01-15',
    content: `## Cómo se inventó el cine

El **28 de diciembre de 1895** es la fecha oficial del nacimiento del cine. Los hermanos **Auguste y Louis Lumière** proyectaron en el Salon Indien del Gran Café de París la primera película pública de la historia.

### El cinematógrafo

Los Lumière inventaron el **cinematógrafo**, un aparato que era a la vez cámara, copiadora y proyector. Su primera película pública: "La salida de los obreros de la fábrica Lumière en Lyon".

La película de 46 segundos que más impresionó al público fue **"La llegada de un tren a La Ciotat"**: el tren que llegaba a la pantalla hizo que algunos espectadores huyeran aterrorizados, convencidos de que el tren iba a aplastarse.

### ¿Solo los Lumière?

Thomas Edison también trabajó en el mismo período. Su kinetoscopio (1891) permitía ver películas, pero solo a una persona a la vez mirando por un visor. La genialidad de los Lumière fue la **proyección para audiencias**.

### El primer efecto especial

**Georges Méliès**, un mago que vio la proyección de los Lumière, comprendió el potencial narrativo del cine. Inventó el corte de edición por accidente (la cámara se atascó mientras filmaba el tráfico parisino, creando un "salto" en la imagen) y lo convirtió en una herramienta artística.

Su película **"Viaje a la Luna" (1902)** fue el primer largometraje de ciencia ficción e incluyó los primeros efectos especiales de la historia.

### El cine mudo y sonoro

El cine fue mudo hasta 1927, cuando se estrenó **"El cantante de jazz"**, la primera película con sonido sincronizado.`,
    quiz: [
      {
        id: 'cine-001-q1',
        type: 'multiple',
        question: '¿Cuándo se considera el nacimiento oficial del cine?',
        options: ['1 enero de 1900', '28 de diciembre de 1895', '15 de marzo de 1888', '4 de julio de 1891'],
        correctAnswer: 1,
        explanation: 'El 28 de diciembre de 1895, los hermanos Lumière realizaron la primera proyección pública de cine en el Grand Café de París, fecha considerada el nacimiento del cine.',
      },
      {
        id: 'cine-001-q2',
        type: 'multiple',
        question: '¿Quién inventó los primeros efectos especiales cinematográficos?',
        options: ['Thomas Edison', 'Los hermanos Lumière', 'Georges Méliès', 'D.W. Griffith'],
        correctAnswer: 2,
        explanation: 'Georges Méliès, un mago que vio las proyecciones de los Lumière, inventó los efectos especiales, incluyendo los primeros en su película "Viaje a la Luna" (1902).',
      },
      {
        id: 'cine-001-q3',
        type: 'truefalse',
        question: '¿El cine fue sonoro desde su creación en 1895?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El cine fue mudo durante sus primeros 32 años. El primer largometraje con sonido sincronizado fue "El cantante de jazz" en 1927.',
      },
    ],
  },

  // ─── MATEMÁTICAS ─────────────────────────────────────────────────
  {
    id: 'mat-001',
    title: 'El número Pi: Mucho más que 3.14',
    emoji: '🔢',
    category: 'Matemáticas',
    duration: 3,
    difficulty: 'principiante',
    tags: ['pi', 'geometría', 'números'],
    createdAt: '2024-01-16',
    content: `## El número Pi: Mucho más que 3.14

**π (Pi)** es probablemente el número más famoso de las matemáticas. Es la relación entre la circunferencia de cualquier círculo y su diámetro. Siempre es la misma: aproximadamente **3.14159265...**

### ¿Por qué es especial?

Pi es un número **irracional**: no puede expresarse como una fracción exacta. Su expansión decimal es infinita y no tiene ningún patrón repetitivo: 3.14159265358979323846...

También es un número **trascendente**: no es la solución de ninguna ecuación polinómica con coeficientes enteros. Hay infinitos números irracionales, pero muy pocos son trascendentes.

### Datos fascinantes

- Se han calculado más de **100 billones de dígitos** de Pi (récord de 2022)
- Los primeros 39 dígitos son suficientes para calcular la circunferencia del universo observable con una precisión de menos de un átomo de hidrógeno
- Aparece en lugares inesperados: la distribución de alturas humanas, la forma de los meandros de los ríos, la física cuántica

### ¿Desde cuándo lo conocemos?

- Los babilonios usaron Pi ≈ 3.125 hace 4,000 años
- Arquímedes calculó que era entre 3 10/71 y 3 1/7 (¡notable para el siglo III a.C.!)
- La letra griega π fue adoptada en 1706

### El Día de Pi

El **14 de marzo** (3/14 en formato americano) se celebra el Día Internacional de Pi. No casualmente, es también el cumpleaños de **Albert Einstein**.`,
    quiz: [
      {
        id: 'mat-001-q1',
        type: 'multiple',
        question: '¿Qué relación geométrica representa el número Pi?',
        options: ['Área/radio', 'Circunferencia/diámetro', 'Diagonal/lado', 'Volumen/superficie'],
        correctAnswer: 1,
        explanation: 'Pi (π) es la constante que resulta de dividir la circunferencia de cualquier círculo por su diámetro. Esta relación es siempre la misma, independientemente del tamaño del círculo.',
      },
      {
        id: 'mat-001-q2',
        type: 'truefalse',
        question: '¿Pi es un número racional que puede expresarse como una fracción exacta?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Pi es irracional: no puede expresarse como fracción exacta. Su expansión decimal es infinita y sin patrones repetitivos.',
      },
      {
        id: 'mat-001-q3',
        type: 'multiple',
        question: '¿Cuándo se celebra el Día Internacional de Pi?',
        options: ['31 de enero', '14 de marzo', '22 de julio', '1 de abril'],
        correctAnswer: 1,
        explanation: 'El Día de Pi se celebra el 14 de marzo (3/14 en formato americano, que corresponde a los primeros dígitos de Pi: 3.14).',
      },
    ],
  },

  // ─── SOCIEDAD ───────────────────────────────────────────────────
  {
    id: 'soc-001',
    title: 'La psicología del conformismo: Experimento de Asch',
    emoji: '👥',
    category: 'Sociedad',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['psicología social', 'conformismo', 'presión de grupo'],
    createdAt: '2024-01-17',
    content: `## La psicología del conformismo: El experimento de Asch

En la década de 1950, el psicólogo **Solomon Asch** realizó uno de los experimentos más reveladores de la psicología social. Su objetivo: descubrir cuánto nos influye el grupo, incluso cuando el grupo está equivocado.

### El experimento

A un participante se le mostraban dos tarjetas:
- **Tarjeta A**: Una línea de referencia
- **Tarjeta B**: Tres líneas (1, 2, 3), una de las cuales era idéntica a la de la tarjeta A

La respuesta correcta era **obvia**. Cualquier persona sin presión de grupo acertaba el 99% de las veces.

### El giro

Lo que el participante no sabía: el resto del grupo eran **actores** instruidos para dar la respuesta incorrecta unanimemente.

### Resultados perturbadores

- El **75%** de los participantes cedió al menos una vez a la presión del grupo
- El **32%** de las respuestas individuales se conformaron con la respuesta incorrecta del grupo
- Solo el **25%** resistió completamente la presión

### ¿Por qué cedemos?

Los participantes explicaron dos razones:
1. **Duda genuina**: "¿Estoy viendo mal yo?"
2. **Miedo al rechazo**: "No quiero parecer diferente o ridículo"

### Implicaciones

Este experimento explica fenómenos como:
- La **propaganda política**: las masas aceptan falsedades si todos las repiten
- El **comportamiento de burbuja** en inversiones
- El **acoso escolar**: la bystander effect, donde nadie actúa porque nadie actúa`,
    quiz: [
      {
        id: 'soc-001-q1',
        type: 'multiple',
        question: '¿Qué porcentaje de participantes en el experimento de Asch cedió al menos una vez a la presión del grupo?',
        options: ['25%', '50%', '75%', '95%'],
        correctAnswer: 2,
        explanation: 'El 75% de los participantes cedió al menos una vez a la presión del grupo, a pesar de que la respuesta correcta era visualmente obvia.',
      },
      {
        id: 'soc-001-q2',
        type: 'truefalse',
        question: '¿En el experimento de Asch, los otros participantes eran reales y genuinamente se equivocaban?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Los demás "participantes" eran actores instruidos para dar la respuesta incorrecta deliberadamente, para medir cómo reaccionaba el participante real.',
      },
      {
        id: 'soc-001-q3',
        type: 'multiple',
        question: '¿Cuáles fueron las dos razones principales por las que los participantes cedieron a la presión grupal?',
        options: ['Cansancio y falta de atención', 'Duda genuina y miedo al rechazo social', 'Desinterés y prisa', 'Confianza en el grupo y lógica incorrecta'],
        correctAnswer: 1,
        explanation: 'Los participantes explicaron que cedieron por duda genuina ("¿Estaré viendo mal?") y por miedo al rechazo social (no querer parecer diferente o ridículo).',
      },
    ],
  },

  // ─── IDIOMAS ────────────────────────────────────────────────────
  {
    id: 'idio-001',
    title: 'Por qué aprender un idioma cambia tu cerebro',
    emoji: '🗣️',
    category: 'Idiomas',
    duration: 3,
    difficulty: 'principiante',
    tags: ['neurociencia', 'bilingüismo', 'cerebro'],
    createdAt: '2024-01-18',
    content: `## Por qué aprender un idioma cambia tu cerebro

Aprender un idioma no es solo una habilidad práctica: transforma físicamente tu cerebro y te protege del deterioro cognitivo.

### El cerebro bilingüe es diferente

Los estudios de neuroimagen muestran que los bilingües tienen **más materia gris** en el córtex parietal inferior, área asociada con la atención y la conciencia.

El cerebro bilingüe constantemente gestiona dos sistemas de lenguaje simultáneamente, lo que fortalece el **sistema ejecutivo**: la capacidad de concentración, multitarea y resolución de problemas.

### La ventaja bilingüe

Los bilingües muestran ventajas en:
- **Atención selectiva**: Son mejores filtrando información irrelevante
- **Tarea de switching**: Cambian entre tareas más eficientemente
- **Memoria de trabajo**: Mayor capacidad para retener y manipular información

### El escudo contra el Alzheimer

Los estudios muestran que los bilingües desarrollan los síntomas del Alzheimer en promedio **4-5 años más tarde** que los monolingües. El aprendizaje de idiomas crea una "reserva cognitiva".

### ¿Cuándo es mejor aprender?

El cerebro tiene **períodos críticos**: antes de los 7 años, aprender una lengua es casi tan fácil como la materna. Entre 7-18 años sigue siendo muy eficiente. Después de los 18, se requiere más esfuerzo consciente pero los beneficios cognitivos son igualmente reales.

### No hay excusas

Para construir vocabulario básico, necesitas solo **3.000 palabras** (cubrirás el 95% del habla cotidiana). 15 minutos al día de práctica constante produce resultados medibles en 6 meses.`,
    quiz: [
      {
        id: 'idio-001-q1',
        type: 'multiple',
        question: '¿Cuántos años más tarde en promedio desarrollan síntomas de Alzheimer los bilingües comparados con los monolingües?',
        options: ['1-2 años', '2-3 años', '4-5 años', '10 años'],
        correctAnswer: 2,
        explanation: 'Los estudios muestran que los bilingües desarrollan los síntomas del Alzheimer aproximadamente 4-5 años más tarde que los monolingües, gracias a la "reserva cognitiva" que crea el manejo de dos idiomas.',
      },
      {
        id: 'idio-001-q2',
        type: 'truefalse',
        question: '¿Los beneficios cognitivos de aprender idiomas solo aplican si se aprende antes de los 18 años?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Aunque aprender idiomas es más fácil de niño, los beneficios cognitivos del bilingüismo se obtienen a cualquier edad. El esfuerzo mayor en adultos tiene sus propias recompensas cerebrales.',
      },
      {
        id: 'idio-001-q3',
        type: 'multiple',
        question: '¿Cuántas palabras aproximadamente necesitas para cubrir el 95% del habla cotidiana en un idioma?',
        options: ['500', '1.000', '3.000', '10.000'],
        correctAnswer: 2,
        explanation: 'Con aproximadamente 3.000 palabras puedes comprender el 95% del habla cotidiana en cualquier idioma. El vocabulario de alta frecuencia es sorprendentemente manejable.',
      },
    ],
  },

  // ─── HISTORIA 3 ─────────────────────────────────────────────────
  {
    id: 'hist-003',
    title: 'La Gran Muralla China: Mitos y realidades',
    emoji: '🏯',
    category: 'Historia',
    duration: 3,
    difficulty: 'principiante',
    tags: ['china', 'arquitectura', 'mitos'],
    createdAt: '2024-01-19',
    content: `## La Gran Muralla China: Mitos y realidades

La Gran Muralla China es una de las construcciones más impresionantes de la historia humana. Y también una de las más malentendidas.

### Los hechos reales

- **Longitud total**: Con todos sus ramales y secciones, supera los **21.196 km**
- **Construcción**: No fue construida de una vez. Distintas dinastías la fueron ampliando durante **2.000 años** (siglo VII a.C. - siglo XVII d.C.)
- **Trabajadores**: Millones de soldados, campesinos y prisioneros trabajaron en su construcción. Se estima que **400.000 personas** murieron durante su construcción y fueron enterradas dentro de los propios muros.

### El gran mito: ¿Se ve desde el espacio?

**No**. Este es uno de los mitos más extendidos. La muralla tiene entre 4 y 9 metros de ancho, lo que la hace imposible de ver a simple vista desde la órbita terrestre (unos 400 km de altitud).

Los propios astronautas chinos lo confirmaron. Incluso el astronauta Yang Liwei, el primero chino en el espacio (2003), no pudo verla.

### ¿Funcionó militarmente?

Parcialmente. Fue más útil para:
- **Controlar el tráfico** y cobrar impuestos
- **Comunicar señales** (torres de humo y fuego)
- **Ralentizar** invasiones, no detenerlas

Los mongoles la atravesaron con facilidad en el siglo XIII. Gengis Kan supuestamente dijo: "La fortaleza de la muralla depende del valor de quienes la defienden".`,
    quiz: [
      {
        id: 'hist-003-q1',
        type: 'truefalse',
        question: '¿La Gran Muralla China puede verse a simple vista desde el espacio?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Este es uno de los mitos más extendidos. La muralla es demasiado estrecha (4-9 m) para verse a simple vista desde la órbita terrestre. Los astronautas chinos lo confirmaron.',
      },
      {
        id: 'hist-003-q2',
        type: 'multiple',
        question: '¿Cuánto tiempo llevó construir la Gran Muralla China en su totalidad?',
        options: ['100 años', '500 años', 'Alrededor de 2.000 años', '50 años'],
        correctAnswer: 2,
        explanation: 'La Gran Muralla fue construida y ampliada durante aproximadamente 2.000 años por distintas dinastías, desde el siglo VII a.C. hasta el siglo XVII d.C.',
      },
      {
        id: 'hist-003-q3',
        type: 'multiple',
        question: '¿Qué longitud total tiene la Gran Muralla China incluyendo todos sus ramales?',
        options: ['5.000 km', '10.000 km', 'Más de 21.000 km', '50.000 km'],
        correctAnswer: 2,
        explanation: 'Con todos sus ramales y secciones, la Gran Muralla China supera los 21.196 km de longitud total.',
      },
    ],
  },

  // ─── CIENCIA 3 ──────────────────────────────────────────────────
  {
    id: 'cien-003',
    title: 'Los agujeros negros: Devoradores del cosmos',
    emoji: '🕳️',
    category: 'Ciencia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['astrofísica', 'espacio', 'gravedad'],
    createdAt: '2024-01-20',
    content: `## Los agujeros negros: Devoradores del cosmos

Un **agujero negro** es una región del espacio donde la gravedad es tan intensa que nada, ni siquiera la luz, puede escapar. Son los objetos más extremos del universo.

### Cómo se forman

La mayoría de los agujeros negros se forman cuando una **estrella masiva** (al menos 20 veces la masa del Sol) agota su combustible nuclear y colapsa sobre sí misma. La estrella implosiona en un punto de densidad infinita llamado **singularidad**.

### El horizonte de eventos

El punto de no retorno se llama **horizonte de eventos**. Una vez que la materia cruza esta frontera, no hay forma de escapar. Para un observador externo, el tiempo se ralentiza infinitamente en el horizonte de eventos (dilatación gravitacional del tiempo).

### Primera fotografía

En 2019, el **Telescopio de Horizonte de Eventos** (una red de radiotelescopios que cubría todo el planeta) capturó la **primera imagen directa** de un agujero negro: el del centro de la galaxia M87, con una masa de **6.500 millones** de soles.

### Tipos de agujeros negros

- **Estelares**: Masa de 3-20 soles. Se forman por supernovas.
- **Supermasivos**: Millones o miles de millones de veces la masa del Sol. En el centro de casi todas las galaxias. El de nuestra Vía Láctea se llama **Sagitario A***.
- **Intermedios**: Un tipo intermedio descubierto recientemente.

### ¿Qué hay dentro?

Honestamente: no lo sabemos. Las leyes de la física tal como las conocemos dejan de funcionar en la singularidad.`,
    quiz: [
      {
        id: 'cien-003-q1',
        type: 'multiple',
        question: '¿Qué es el horizonte de eventos de un agujero negro?',
        options: ['La superficie visible del agujero negro', 'El punto de no retorno más allá del cual nada puede escapar', 'La zona donde la luz se dobla', 'El borde exterior de la galaxia'],
        correctAnswer: 1,
        explanation: 'El horizonte de eventos es el punto de no retorno: la frontera más allá de la cual la gravedad es tan fuerte que nada, ni la luz, puede escapar.',
      },
      {
        id: 'cien-003-q2',
        type: 'truefalse',
        question: '¿La primera fotografía directa de un agujero negro se tomó en 2019?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. En 2019, el Telescopio de Horizonte de Eventos capturó la primera imagen directa de un agujero negro: el del centro de la galaxia M87.',
      },
      {
        id: 'cien-003-q3',
        type: 'multiple',
        question: '¿Cómo se llama el agujero negro supermasivo en el centro de nuestra galaxia, la Vía Láctea?',
        options: ['Andrómeda A*', 'Sagitario A*', 'Centauro X-1', 'M87*'],
        correctAnswer: 1,
        explanation: 'El agujero negro supermasivo en el centro de la Vía Láctea se llama Sagitario A*. Tiene una masa de aproximadamente 4 millones de veces la del Sol.',
      },
    ],
  },

  // ─── MÁS LECCIONES ───────────────────────────────────────────────
  {
    id: 'cur-002',
    title: 'El sueño: Por qué dormimos y qué pasa cuando lo hacemos',
    emoji: '😴',
    category: 'Curiosidades',
    duration: 4,
    difficulty: 'principiante',
    tags: ['sueño', 'cerebro', 'salud'],
    createdAt: '2024-01-21',
    content: `## El sueño: Por qué dormimos y qué pasa cuando lo hacemos

Pasamos aproximadamente **un tercio de nuestra vida durmiendo**. Durante décadas, los científicos creyeron que el sueño era simplemente un estado de reposo. Ahora sabemos que es una de las actividades más complejas y esenciales de la biología.

### Las fases del sueño

El sueño se divide en ciclos de aproximadamente **90 minutos**, cada uno con varias fases:

**Sueño No-REM (N1, N2, N3)**
- N1: Transición vigilia-sueño. Fácil de despertar.
- N2: Sueño ligero. La temperatura corporal baja, el corazón se ralentiza.
- N3: Sueño profundo o de ondas lentas. Muy difícil despertar. El cuerpo se repara.

**Sueño REM (Rapid Eye Movement)**
El período donde ocurren la mayoría de los sueños vívidos. Los ojos se mueven rápidamente bajo los párpados. El cerebro está casi tan activo como en vigilia.

### ¿Para qué sirve el sueño?

**Consolidación de la memoria**: Durante el sueño, el cerebro procesa y almacena la información del día. Los estudiantes que duermen bien después de estudiar retienen hasta un **40% más** de información.

**Limpieza del cerebro**: El **sistema glinfático** (descubierto en 2013) elimina proteínas tóxicas del cerebro durante el sueño, incluyendo el beta-amiloide asociado al Alzheimer.

**Reparación celular**: Las hormonas del crecimiento se liberan principalmente durante el sueño profundo.

### Privación de sueño

Estar despierto 17 horas seguidas equivale cognitivamente a tener **0.05% de alcohol en sangre** (el límite legal en muchos países). Después de 24 horas, equivale a 0.10%.`,
    quiz: [
      {
        id: 'cur-002-q1',
        type: 'multiple',
        question: '¿Cuánto dura aproximadamente un ciclo completo de sueño?',
        options: ['30 minutos', '60 minutos', '90 minutos', '120 minutos'],
        correctAnswer: 2,
        explanation: 'Un ciclo completo de sueño dura aproximadamente 90 minutos e incluye las fases N1, N2, N3 (sueño profundo) y REM. Una noche normal incluye 4-6 ciclos.',
      },
      {
        id: 'cur-002-q2',
        type: 'truefalse',
        question: '¿Dormir bien después de estudiar puede mejorar la retención de información hasta un 40%?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. El sueño consolida la memoria: los estudiantes que duermen bien después de estudiar retienen significativamente más información que quienes se quedan despiertos.',
      },
      {
        id: 'cur-002-q3',
        type: 'multiple',
        question: '¿Qué sistema cerebral elimina proteínas tóxicas durante el sueño?',
        options: ['Sistema límbico', 'Sistema reticular activador', 'Sistema glinfático', 'Sistema nervioso autónomo'],
        correctAnswer: 2,
        explanation: 'El sistema glinfático, descubierto en 2013, actúa durante el sueño para eliminar proteínas tóxicas del cerebro, incluyendo el beta-amiloide asociado al Alzheimer.',
      },
    ],
  },
  {
    id: 'filo-002',
    title: 'Estoicismo: La filosofía que te hace más resiliente',
    emoji: '🏛️',
    category: 'Filosofía',
    duration: 4,
    difficulty: 'principiante',
    tags: ['estoicismo', 'resiliencia', 'marco aurelio'],
    createdAt: '2024-01-22',
    content: `## Estoicismo: La filosofía que te hace más resiliente

El **estoicismo** nació en Atenas alrededor del año 300 a.C. con **Zenón de Citio** y se convirtió en la filosofía dominante del mundo romano. Hoy, 2.300 años después, está más vigente que nunca.

### La idea central

Los estoicos distinguen entre lo que **está en nuestro control** y lo que **no lo está**.

- **En tu control**: Tus pensamientos, juicios, deseos, acciones
- **Fuera de tu control**: El clima, la opinión de otros, el pasado, la muerte, la economía

La clave: **enfócate exclusivamente en lo primero e ignora lo segundo**. Suena simple; es profundamente difícil.

### Los tres grandes estoicos romanos

**Marco Aurelio** (121-180 d.C.): El emperador filósofo. Su diario privado, "Meditaciones", es uno de los libros más leídos de filosofía práctica. Gobernó el mayor imperio del mundo mientras practicaba la humildad y el desapego.

**Epicteto** (50-135 d.C.): Nació esclavo. Su filosofía: "Soy esclavo, pero mi mente es libre". Sus enseñanzas fueron recopiladas por su discípulo Arriano en el "Enchiridion".

**Séneca** (4 a.C.-65 d.C.): Filósofo y consejero de Nerón. Sus cartas a Lucilio son una guía práctica para vivir bien.

### Herramientas estoicas prácticas

**Memento Mori**: "Recuerda que morirás". No como pensamiento oscuro, sino como recordatorio de vivir plenamente.

**Visualización negativa**: Imagina perder lo que tienes para apreciarlo más.

**El dios interior**: Actuar siempre de acuerdo con los valores más altos, independientemente de las circunstancias.`,
    quiz: [
      {
        id: 'filo-002-q1',
        type: 'multiple',
        question: '¿Cuál es el principio central del estoicismo?',
        options: ['Buscar el placer y evitar el dolor', 'Distinguir entre lo que está y no está en nuestro control', 'Todo es vanidad y nada tiene sentido', 'Vivir en armonía con la naturaleza ignorando a la sociedad'],
        correctAnswer: 1,
        explanation: 'El estoicismo se basa en distinguir entre lo que está en nuestro control (pensamientos, acciones) y lo que no (opiniones ajenas, circunstancias externas), para enfocarse solo en lo primero.',
      },
      {
        id: 'filo-002-q2',
        type: 'multiple',
        question: '¿Quién fue Marco Aurelio?',
        options: ['Un esclavo griego que se convirtió en filósofo', 'El fundador del estoicismo', 'Un emperador romano que practicaba el estoicismo', 'El discípulo principal de Aristóteles'],
        correctAnswer: 2,
        explanation: 'Marco Aurelio fue emperador del Imperio Romano (121-180 d.C.) y uno de los grandes filósofos estoicos. Su diario privado "Meditaciones" sigue siendo una obra fundamental.',
      },
      {
        id: 'filo-002-q3',
        type: 'truefalse',
        question: '¿Epicteto nació como hombre libre en una familia noble griega?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Epicteto nació esclavo, lo que hace su filosofía aún más poderosa: incluso en la esclavitud, sostenía que la mente permanece libre si así lo eliges.',
      },
    ],
  },
  {
    id: 'geo-002',
    title: 'Antártida: El continente del misterio',
    emoji: '🧊',
    category: 'Geografía',
    duration: 3,
    difficulty: 'principiante',
    tags: ['antártida', 'clima', 'exploración'],
    createdAt: '2024-01-23',
    content: `## Antártida: El continente del misterio

La **Antártida** es el continente más frío, más seco, más ventoso y más alto del planeta. Y a pesar de estar cubierto de hielo, es técnicamente un **desierto**.

### Datos extremos

- **Temperatura más baja registrada**: -89.2°C (estación soviética Vostok, 1983)
- **Vientos**: Pueden superar los 300 km/h
- **Altitud promedio**: 2.300 metros (el continente más alto)
- **Hielo**: Contiene el **70%** del agua dulce del planeta en forma de hielo
- **Sin dueño**: Es el único continente sin gobierno propio ni habitantes permanentes

### El Tratado Antártico (1959)

En plena Guerra Fría, 12 países firmaron el **Tratado Antártico**, declarando el continente como zona desmilitarizada, dedicada a la investigación científica, con libertad de exploración para todos.

Hoy, 54 países son parte del tratado. No hay ejércitos ni países que posean territorio allí.

### Vida en el hielo

A pesar del extremo frío, hay vida:
- **Pingüinos**: 5 millones de pingüinos viven en las costas
- **Focas leopardo**: Uno de los depredadores más temibles del océano austral
- **Bacterias extremófilas**: Viven en lagos subglaciales bajo kilómetros de hielo

### El lago Vostok

Bajo 4 kilómetros de hielo existe el **lago Vostok**, un lago líquido del tamaño de Ontario que lleva aislado más de **15 millones de años**. Los científicos lo estudian porque podría albergar formas de vida desconocidas.`,
    quiz: [
      {
        id: 'geo-002-q1',
        type: 'multiple',
        question: '¿Qué porcentaje del agua dulce del planeta está en la Antártida en forma de hielo?',
        options: ['30%', '50%', '70%', '90%'],
        correctAnswer: 2,
        explanation: 'La Antártida contiene aproximadamente el 70% de toda el agua dulce del planeta en forma de hielo. Si se derritiera, el nivel del mar subiría unos 60 metros.',
      },
      {
        id: 'geo-002-q2',
        type: 'truefalse',
        question: '¿La Antártida pertenece a varios países que se dividen el territorio?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El Tratado Antártico de 1959 declara la Antártida como zona internacional desmilitarizada dedicada a la ciencia, sin soberanía de ningún país.',
      },
      {
        id: 'geo-002-q3',
        type: 'multiple',
        question: '¿Cuántos millones de años lleva aislado el lago Vostok bajo el hielo antártico?',
        options: ['1 millón', '5 millones', '15 millones', '100 millones'],
        correctAnswer: 2,
        explanation: 'El lago Vostok lleva aproximadamente 15 millones de años aislado bajo 4 kilómetros de hielo, lo que lo hace un candidato fascinante para el estudio de formas de vida extremas.',
      },
    ],
  },
  {
    id: 'tech-003',
    title: 'Blockchain: Más allá de las criptomonedas',
    emoji: '⛓️',
    category: 'Tecnología',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['blockchain', 'criptomonedas', 'descentralización'],
    createdAt: '2024-01-24',
    content: `## Blockchain: Más allá de las criptomonedas

El **blockchain** (cadena de bloques) es una tecnología que la mayoría asocia solo con Bitcoin. Pero es mucho más profundo que eso: es un nuevo paradigma para almacenar y verificar información.

### ¿Qué es un blockchain?

Un blockchain es una base de datos **distribuida** y **descentralizada**. En lugar de estar en un servidor central (como el de un banco), está copiada simultáneamente en miles de computadoras en todo el mundo.

**La cadena**: La información se agrupa en "bloques". Cada bloque contiene un identificador criptográfico (hash) del bloque anterior, formando una cadena. Cambiar un bloque histórico requeriría cambiar todos los que le siguen, en miles de computadoras al mismo tiempo.

**El resultado**: Una base de datos prácticamente **inmutable** sin necesitar una autoridad central de confianza.

### ¿Por qué es revolucionario?

Históricamente, para hacer transacciones sin conocer a la otra parte necesitamos un **intermediario de confianza**: el banco, el notario, PayPal. El blockchain permite hacer esto sin intermediarios.

### Aplicaciones más allá del Bitcoin

- **Contratos inteligentes**: Programas que se ejecutan automáticamente cuando se cumplen condiciones (Ethereum)
- **Cadenas de suministro**: Rastrear el origen de alimentos o medicamentos de forma inmutable
- **Registros médicos**: Datos de salud portables y seguros
- **Votación**: Elecciones auditables y transparentes
- **NFTs**: Certificados digitales de propiedad (con controversia sobre su utilidad real)

### Las limitaciones

Alto consumo de energía (Bitcoin usa más electricidad que Argentina), lentitud comparada con bases de datos tradicionales, y escalabilidad limitada.`,
    quiz: [
      {
        id: 'tech-003-q1',
        type: 'multiple',
        question: '¿Qué hace que un blockchain sea prácticamente imposible de modificar?',
        options: ['Está encriptado con contraseña', 'Está guardado en un servidor ultra-seguro', 'Cada bloque contiene el hash del bloque anterior y está copiado en miles de computadoras', 'Solo puede ser accedido por expertos'],
        correctAnswer: 2,
        explanation: 'Modificar un bloque requeriría cambiar todos los bloques posteriores en miles de copias simultáneamente, lo que es computacionalmente imposible en la práctica.',
      },
      {
        id: 'tech-003-q2',
        type: 'truefalse',
        question: '¿El blockchain requiere siempre un intermediario central (banco, institución) para funcionar?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La innovación clave del blockchain es precisamente eliminar la necesidad de intermediarios de confianza, permitiendo transacciones directas entre partes que no se conocen.',
      },
      {
        id: 'tech-003-q3',
        type: 'multiple',
        question: '¿Qué son los "contratos inteligentes" en el contexto del blockchain?',
        options: ['Contratos legales redactados por IA', 'Programas que se ejecutan automáticamente cuando se cumplen condiciones predefinidas', 'Acuerdos entre mineros de criptomonedas', 'Contratos firmados digitalmente'],
        correctAnswer: 1,
        explanation: 'Los contratos inteligentes son programas almacenados en blockchain que se ejecutan automáticamente cuando se cumplen las condiciones programadas, sin necesidad de intermediarios.',
      },
    ],
  },
  {
    id: 'arte-002',
    title: 'La música de Bach: Matemática pura convertida en arte',
    emoji: '🎹',
    category: 'Arte',
    duration: 3,
    difficulty: 'intermedio',
    tags: ['barroco', 'bach', 'contrapunto'],
    createdAt: '2024-01-25',
    content: `## La música de Bach: Matemática pura convertida en arte

**Johann Sebastian Bach** (1685-1750) es considerado por muchos el compositor más grande de la historia. Su música combina una complejidad matemática asombrosa con una profunda expresividad emocional.

### El genio del contrapunto

Bach fue el maestro absoluto del **contrapunto**: el arte de combinar múltiples melodías independientes simultáneamente que suenan bien juntas.

En su **"El Arte de la Fuga"**, escrita al final de su vida, desarrolló un único tema musical de todas las formas matemáticamente posibles. La obra quedó inconclusa en el momento que Bach firmó su nombre usando las notas B-A-C-H (en nomenclatura alemana).

### Las Variaciones Goldberg

Escritas en 1741, consisten en un aria y 30 variaciones que forman un sistema matemático perfecto. Las variaciones están organizadas en grupos de tres, con cada tercer número siendo un cánon en un intervalo diferente.

El neurocientífico **Oliver Sacks** describió escuchar las Variaciones Goldberg como "matemática hecha audible, el equivalente sonoro de ver las demostraciones de Euclides".

### Su redescubrimiento

Bach fue relativamente ignorado después de su muerte. Fue **Felix Mendelssohn** quien en 1829 dirigió la primera representación del "Mateo Passion" desde la muerte de Bach, iniciando el renacimiento de su música.

### El legado

Las obras de Bach aparecen en la **sonda Voyager** (lanzada al espacio en 1977) como representación de la música humana para posibles civilizaciones extraterrestres. Una elección que dice mucho.`,
    quiz: [
      {
        id: 'arte-002-q1',
        type: 'multiple',
        question: '¿Qué técnica musical era la especialidad de Bach?',
        options: ['La sonata romántica', 'El contrapunto', 'El jazz armónico', 'La música modal'],
        correctAnswer: 1,
        explanation: 'Bach fue el maestro del contrapunto: el arte de combinar múltiples melodías independientes simultáneamente que suenan armoniosas juntas.',
      },
      {
        id: 'arte-002-q2',
        type: 'truefalse',
        question: '¿Bach fue reconocido y famoso en toda Europa durante su vida?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Bach fue relativamente ignorado después de su muerte. Fue Mendelssohn quien en 1829, 79 años después, inició el redescubrimiento y la valoración de su música.',
      },
      {
        id: 'arte-002-q3',
        type: 'multiple',
        question: '¿En qué objeto espacial se incluyó música de Bach como representación de la humanidad?',
        options: ['Estación Espacial Internacional', 'Telescopio Hubble', 'Sonda Voyager', 'Satélite Galileo'],
        correctAnswer: 2,
        explanation: 'La sonda Voyager, lanzada en 1977, lleva una placa de oro con sonidos de la Tierra para posibles civilizaciones extraterrestres. Incluye música de Bach, entre otros.',
      },
    ],
  },
  {
    id: 'nat-002',
    title: 'El increíble viaje del salmón',
    emoji: '🐟',
    category: 'Naturaleza',
    duration: 3,
    difficulty: 'principiante',
    tags: ['salmón', 'migración', 'ciclo de vida'],
    createdAt: '2024-01-26',
    content: `## El increíble viaje del salmón

El ciclo de vida del salmón es uno de los fenómenos naturales más extraordinarios: estos peces nacen en agua dulce, migran al océano, y años después regresan exactamente al mismo río donde nacieron para reproducirse y morir.

### El viaje de ida

Los salmones nacen en ríos de agua fría y cristalina. Pasan los primeros 1-3 años allí como alevines. Luego, algo los impulsa a descender río abajo hacia el océano.

En el océano, los salmones pueden viajar **miles de kilómetros**, engordando y creciendo durante 1-4 años. Algunos recorren el Pacífico completo.

### El regreso

Entonces ocurre lo extraordinario: los salmones regresan **exactamente al río donde nacieron**, con una precisión asombrosa.

¿Cómo lo logran? A través de varios sentidos:
- **Olfato**: Memorizan el olor químico específico de su río natal
- **Campo magnético**: Usan el campo magnético terrestre como GPS
- **Luz solar**: Orienta su navegación en mar abierto

### El sacrificio final

Cuando regresan a su río natal, los salmones ya no comen. Toda su energía se dedica a remontar la corriente, saltar cascadas y encontrar pareja.

Después de desovar, los salmones mueren. Pero su muerte no es el fin: sus cuerpos fertilizan el bosque ribereño, alimentan a osos, águilas y otros animales, y sus nutrientes (nitrógeno marino) se incorporan a los árboles del bosque.

Un bosque viejo sin salmones literalmente empobrece sus árboles.`,
    quiz: [
      {
        id: 'nat-002-q1',
        type: 'multiple',
        question: '¿Cómo encuentran los salmones el camino de regreso a su río natal?',
        options: ['Solo por el color del agua', 'Por olfato, campo magnético y luz solar', 'Siguiendo a otros peces más viejos', 'Por instinto genético sin información sensorial'],
        correctAnswer: 1,
        explanation: 'Los salmones usan múltiples sistemas de navegación: memorizan el olor de su río natal, usan el campo magnético como GPS y la luz solar para orientarse en mar abierto.',
      },
      {
        id: 'nat-002-q2',
        type: 'truefalse',
        question: '¿Después de desovar, los salmones continúan viviendo varios años más en el río?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Los salmones del Pacífico mueren después de desovar. Su muerte es parte del ciclo: sus cuerpos fertilizan el ecosistema ribereño, alimentando bosques y animales.',
      },
      {
        id: 'nat-002-q3',
        type: 'multiple',
        question: '¿Qué beneficio aportan los cuerpos muertos de los salmones al bosque?',
        options: ['Aumentan la acidez del suelo', 'Introducen nitrógeno marino que fertiliza los árboles', 'Crean presas naturales en los ríos', 'Atraen insectos que polinizan las plantas'],
        correctAnswer: 1,
        explanation: 'Los cuerpos de los salmones muertos introducen nitrógeno marino (un nutriente escaso en bosques) que fertiliza directamente los árboles del bosque ribereño. Un bosque sin salmones literalmente se empobrece.',
      },
    ],
  },
  {
    id: 'mat-002',
    title: 'La paradoja de Zenón: ¿Puedes llegar al otro lado de la habitación?',
    emoji: '🏹',
    category: 'Matemáticas',
    duration: 3,
    difficulty: 'intermedio',
    tags: ['paradojas', 'infinito', 'cálculo'],
    createdAt: '2024-01-27',
    content: `## La paradoja de Zenón: ¿Puedes llegar al otro lado de la habitación?

En el siglo V a.C., el filósofo griego **Zenón de Elea** propuso una serie de paradojas sobre el movimiento que confundieron a los mejores pensadores durante 2.000 años.

### La paradoja de Aquiles y la tortuga

Aquiles (el guerrero más veloz) compite con una tortuga. Siendo deportivo, le da una ventaja de 100 metros.

Cuando Aquiles recorre esos 100 metros, la tortuga habrá avanzado, digamos, 10 metros. Aquiles recorre esos 10 metros, pero la tortuga avanzó 1 metro más. Y así...

**La paradoja**: Aquiles siempre tiene que alcanzar primero el punto donde la tortuga estaba, pero para entonces la tortuga ya se habrá movido. Entonces, ¿Aquiles nunca puede alcanzar a la tortuga?

### La paradoja de la flecha

Una flecha en vuelo. En cualquier instante de tiempo, la flecha ocupa exactamente su propio espacio (no se mueve). Si en cada instante está inmóvil, ¿cómo es que se mueve?

### La resolución matemática

Estas paradojas confundieron a los griegos porque no tenían el concepto de **series convergentes**.

La suma infinita: **1/2 + 1/4 + 1/8 + 1/16 + ...** converge a exactamente **1**. Infinitos pasos pueden sumar un número finito.

El cálculo diferencial de Newton y Leibniz en el siglo XVII finalmente dio las herramientas matemáticas para resolver estas paradojas.

### Su importancia

Zenón forzó a los matemáticos a pensar rigurosamente sobre el **infinito**, los **límites** y la **continuidad**, conceptos que son los cimientos del cálculo moderno.`,
    quiz: [
      {
        id: 'mat-002-q1',
        type: 'multiple',
        question: 'En la paradoja de Aquiles y la tortuga, ¿cuál es el error aparente de razonamiento?',
        options: ['Que la tortuga es más lenta que Aquiles', 'Que sumar infinitos pasos debe dar un resultado infinito', 'Que el tiempo no existe', 'Que Aquiles no puede correr'],
        correctAnswer: 1,
        explanation: 'El error es asumir que infinitas sumas deben dar un resultado infinito. En realidad, infinitos pasos cada vez más pequeños pueden sumar un número finito (como 1/2+1/4+1/8+...=1).',
      },
      {
        id: 'mat-002-q2',
        type: 'truefalse',
        question: '¿Las paradojas de Zenón fueron resueltas completamente por los filósofos griegos de su época?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Las paradojas de Zenón no fueron resueltas satisfactoriamente hasta el siglo XVII, cuando Newton y Leibniz desarrollaron el cálculo diferencial y el concepto de límites.',
      },
      {
        id: 'mat-002-q3',
        type: 'multiple',
        question: '¿A qué número converge la serie infinita 1/2 + 1/4 + 1/8 + 1/16 + ...?',
        options: ['0', '0.5', '1', 'Infinito'],
        correctAnswer: 2,
        explanation: 'La serie 1/2 + 1/4 + 1/8 + ... converge exactamente a 1. Esta es la clave matemática para resolver la paradoja de Zenón: infinitos pasos finitos pueden sumar un número finito.',
      },
    ],
  },
  {
    id: 'soc-002',
    title: 'Redes sociales y cerebro: La dopamina digital',
    emoji: '📱',
    category: 'Sociedad',
    duration: 4,
    difficulty: 'principiante',
    tags: ['redes sociales', 'dopamina', 'adicción'],
    createdAt: '2024-01-28',
    content: `## Redes sociales y cerebro: La dopamina digital

¿Por qué es tan difícil soltar el teléfono? No es un problema de fuerza de voluntad: las redes sociales están **diseñadas deliberadamente** para ser adictivas, usando los mismos mecanismos del juego y las apuestas.

### El bucle de dopamina

Las redes sociales explotan el sistema de recompensa del cerebro:

1. Publicas algo (inversión de ego)
2. **Incertidumbre**: ¿Gustará? (el componente de apuesta)
3. Llegan likes, comentarios (recompensa variable)
4. Dopamina → quieres más

La **recompensa variable** es la clave. Las máquinas tragamonedas son tan adictivas precisamente porque no sabes cuándo llegará la recompensa. El scroll infinito funciona igual.

### El diseño intencional

El ex presidente de Facebook Sean Parker admitió en 2017: "Estábamos explotando conscientemente una vulnerabilidad en la psicología humana". El objetivo explícito de estas plataformas es **maximizar el tiempo de pantalla**.

Funciones como las notificaciones de "X personas vieron tu perfil", el scroll infinito, el contador de likes visible, el "typing..." indicator → todos diseñados para generar ansiedad y engagement.

### Los efectos documentados

- Correlación entre uso intensivo de redes y **depresión** (especialmente en adolescentes)
- Reducción de la **capacidad de atención**
- Aumento de la **comparación social** y el FOMO (miedo a perderse algo)
- **Distorsión de la realidad**: El algoritmo muestra contenido extremo para maximizar engagement

### Uso consciente

Las investigaciones sugieren que el uso activo (crear contenido, conectar con amigos) tiene efectos mucho menos negativos que el uso **pasivo** (scrollear consumiendo infinitamente).`,
    quiz: [
      {
        id: 'soc-002-q1',
        type: 'multiple',
        question: '¿Por qué el scroll infinito es tan adictivo según las investigaciones?',
        options: ['Porque el contenido siempre es interesante', 'Porque usa recompensas variables, como las máquinas tragamonedas', 'Porque quema calorías', 'Porque activa el sistema visual'],
        correctAnswer: 1,
        explanation: 'El scroll infinito usa el principio de recompensa variable: como en las tragamonedas, no sabes cuándo encontrarás algo interesante. Esta incertidumbre es lo que lo hace irresistible.',
      },
      {
        id: 'soc-002-q2',
        type: 'truefalse',
        question: '¿Sean Parker, ex presidente de Facebook, admitió que las redes sociales explotan vulnerabilidades psicológicas?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. En 2017, Sean Parker admitió que Facebook fue diseñado explícitamente para explotar "una vulnerabilidad en la psicología humana" para maximizar el tiempo de uso.',
      },
      {
        id: 'soc-002-q3',
        type: 'multiple',
        question: '¿Qué tipo de uso de redes sociales es más perjudicial para la salud mental?',
        options: ['Uso activo (crear contenido, interactuar)', 'Uso pasivo (scrollear y consumir)', 'Uso nocturno exclusivamente', 'Uso en grupos pequeños'],
        correctAnswer: 1,
        explanation: 'Las investigaciones muestran que el uso pasivo (scrollear y consumir sin interactuar) tiene efectos más negativos en la salud mental que el uso activo de creación y conexión real.',
      },
    ],
  },
  {
    id: 'hist-004',
    title: 'La Ruta de la Seda: El primer mundo globalizado',
    emoji: '🐪',
    category: 'Historia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['comercio', 'asia', 'globalización'],
    createdAt: '2024-01-29',
    content: `## La Ruta de la Seda: El primer mundo globalizado

Mucho antes de internet, Amazon o los buques portacontenedores, existió un sistema de rutas comerciales que conectó civilizaciones desde China hasta el Mediterráneo durante más de 1.500 años: **La Ruta de la Seda**.

### No era una sola ruta

El nombre es engañoso. La "Ruta de la Seda" era en realidad una **red de rutas** terrestres y marítimas que cruzaba Asia Central, el Oriente Medio y llegaba a Europa y África. El término fue acuñado por el geógrafo alemán Ferdinand von Richthofen en 1877.

### ¿Qué se comerciaba?

La seda china era el producto más valioso (de ahí el nombre), pero se comerciaba mucho más:

**De Este a Oeste**: Seda, porcelana, especias, papel, pólvora, brújula
**De Oeste a Este**: Vidrio, lana, oro, plata, caballos, uva y vino

### Más que mercancías

La Ruta de la Seda fue la primera red de globalización cultural. Por ella viajaron:
- **Religiones**: El budismo se extendió de India a China. El Islam llegó a Asia Central.
- **Tecnología**: El papel, la imprenta y la pólvora llegaron a Europa desde China
- **Arte y música**: Instrumentos, estilos arquitectónicos, narraciones
- **Enfermedades**: La Peste Negra viajó desde Asia Central a Europa en el siglo XIV

### Marco Polo

El veneciano **Marco Polo** viajó a la corte del Kublai Khan (1271-1295). Su libro "Los viajes de Marco Polo" fue una revelación para Europa y posiblemente inspiró a Cristóbal Colón.`,
    quiz: [
      {
        id: 'hist-004-q1',
        type: 'truefalse',
        question: '¿La Ruta de la Seda era una única ruta bien definida entre China y Europa?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La "Ruta de la Seda" era en realidad una red de rutas terrestres y marítimas que se ramificaban por Asia Central, Oriente Medio, Europa y África.',
      },
      {
        id: 'hist-004-q2',
        type: 'multiple',
        question: '¿Qué enfermedad devastadora viajó de Asia a Europa a través de la Ruta de la Seda?',
        options: ['La viruela', 'La malaria', 'La Peste Negra', 'El cólera'],
        correctAnswer: 2,
        explanation: 'La Peste Negra (causada por la bacteria Yersinia pestis) viajó desde Asia Central a Europa en el siglo XIV a través de las rutas comerciales, matando entre el 30-60% de la población europea.',
      },
      {
        id: 'hist-004-q3',
        type: 'multiple',
        question: '¿Qué tecnologías de origen chino llegaron a Europa principalmente a través de la Ruta de la Seda?',
        options: ['El telescopio, la electricidad y el motor de vapor', 'El papel, la imprenta y la pólvora', 'El hierro, el bronce y el acero', 'La rueda, la escritura y el calendario'],
        correctAnswer: 1,
        explanation: 'El papel, la imprenta y la pólvora son inventos chinos que llegaron a Europa a través de la Ruta de la Seda, transformando radicalmente la civilización occidental.',
      },
    ],
  },
  {
    id: 'cien-004',
    title: 'Relatividad: El tiempo no es lo que crees',
    emoji: '⏱️',
    category: 'Ciencia',
    duration: 5,
    difficulty: 'avanzado',
    tags: ['einstein', 'relatividad', 'física'],
    createdAt: '2024-01-30',
    content: `## Relatividad: El tiempo no es lo que crees

En 1905, un joven empleado de una oficina de patentes llamado **Albert Einstein** publicó cuatro artículos que cambiaron nuestra comprensión del universo para siempre. Uno de ellos fue la **Teoría de la Relatividad Especial**.

### La intuición incorrecta

Antes de Einstein, se creía que el tiempo era absoluto: un segundo duraba lo mismo para todos en cualquier parte del universo. Einstein demostró que esto es **falso**.

### Los dos postulados de la Relatividad Especial

1. Las leyes de la física son las mismas para todos los observadores en movimiento uniforme
2. La velocidad de la luz en el vacío es la misma para todos los observadores: **299.792 km/s**, independientemente de su movimiento

De estas dos ideas aparentemente simples se derivan consecuencias extraordinarias.

### El tiempo se dilata

Si dos personas tienen relojes idénticos y una viaja a alta velocidad, su reloj irá **más lento**. Esto no es una ilusión: el tiempo transcurre realmente más despacio.

**El experimento mental del gemelo**: Si uno de dos gemelos viaja cerca de la velocidad de la luz durante 10 años (del viajero), puede regresar y encontrar que en la Tierra pasaron 100 años. Su hermano gemelo murió de viejo.

### Esto es real, no ficción

Los **GPS satellites** experimentan dilatación temporal tanto por la relatividad especial (velocidad) como por la relatividad general (gravedad). Sin correcciones relativistas, los GPS estarían **desincronizados en kilómetros** por día.

### E=mc²

La ecuación más famosa de la física: energía es igual a masa multiplicada por la velocidad de la luz al cuadrado. Una pequeña cantidad de masa contiene **energía enorme**. Esto fundamenta tanto las bombas atómicas como la energía nuclear civil.`,
    quiz: [
      {
        id: 'cien-004-q1',
        type: 'multiple',
        question: '¿Qué dice la dilatación temporal de la relatividad especial?',
        options: ['El tiempo pasa más rápido a mayor velocidad', 'El tiempo pasa más lento a mayor velocidad', 'El tiempo es constante independientemente de la velocidad', 'El tiempo solo cambia cerca de agujeros negros'],
        correctAnswer: 1,
        explanation: 'La dilatación temporal: cuanto más rápido se mueve un objeto, más lento transcurre el tiempo para él en comparación con un observador en reposo.',
      },
      {
        id: 'cien-004-q2',
        type: 'truefalse',
        question: '¿Los sistemas GPS necesitan correcciones relativistas para funcionar con precisión?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Sin correcciones relativistas (por velocidad y gravedad), los satélites GPS acumularían errores de kilómetros por día. La relatividad es física práctica, no solo teoría.',
      },
      {
        id: 'cien-004-q3',
        type: 'multiple',
        question: '¿Qué representa "c" en la ecuación E=mc²?',
        options: ['La masa del objeto', 'La velocidad de la luz', 'La constante gravitacional', 'La carga eléctrica'],
        correctAnswer: 1,
        explanation: 'En E=mc², "c" representa la velocidad de la luz en el vacío: aproximadamente 299.792 km/s. Al elevarla al cuadrado, convierte pequeñas cantidades de masa en cantidades enormes de energía.',
      },
    ],
  },
]

export const categories = [...new Set(lessons.map(l => l.category))]

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find(l => l.id === id)
}

export function getLessonsByCategory(category: string): Lesson[] {
  return lessons.filter(l => l.category === category)
}

export function searchLessons(query: string): Lesson[] {
  const q = query.toLowerCase()
  return lessons.filter(l =>
    l.title.toLowerCase().includes(q) ||
    l.content.toLowerCase().includes(q) ||
    l.tags.some(t => t.toLowerCase().includes(q)) ||
    l.category.toLowerCase().includes(q)
  )
}
