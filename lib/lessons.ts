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
  // ─── HISTORIA 5-12 ──────────────────────────────────────────────
  {
    id: 'hist-005',
    title: 'El Imperio Mongol: La conquista más grande de la historia',
    emoji: '🏹',
    category: 'Historia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['mongolia', 'gengis kan', 'conquistas'],
    createdAt: '2025-01-01',
    content: `## El Imperio Mongol: La conquista más grande de la historia

El **Imperio Mongol** fue el mayor imperio contiguo de la historia. En su apogeo (siglo XIII) se extendía desde el océano Pacífico hasta Europa del Este, cubriendo más de **24 millones de km²** y gobernando a un cuarto de la población mundial.

### Gengis Kan: de la miseria al poder absoluto

**Temujin** nació alrededor de 1162 en las estepas mongolas. A los 9 años, su padre fue envenenado por una tribu rival y su familia fue abandonada en la estepa para morir. Sobrevivió en condiciones extremas, fue capturado y esclavizado, y escapó.

Décadas después, este mismo hombre había unificado todas las tribus mongolas y tomó el título de **Gengis Kan** ("Gobernante Universal") en 1206.

### La máquina de guerra mongola

Los ejércitos mongoles eran extraordinariamente eficaces:

**Movilidad**: Sus jinetes podían cubrir hasta 100 km por día, velocidades inimaginables para los ejércitos medievales.

**Comunicaciones**: Un sistema de postas a caballo (yam) permitía transmitir mensajes a través de todo el imperio en días.

**Flexibilidad táctica**: Usaban la fingida retirada para atraer al enemigo a emboscadas.

**Ingeniería de asedio**: Absorbían ingenieros chinos y persas para atacar ciudades amuralladas.

### La Pax Mongolica

Una vez establecido el Imperio, vino un período de estabilidad comercial llamado **Pax Mongolica** (1250-1350). La Ruta de la Seda era más segura que nunca. Las ideas, mercancías y enfermedades (como la Peste Negra) fluían de extremo a extremo.

### El legado contradictorio

Los mongoles destruyeron **Bagdad** en 1258, quemando la Biblioteca de la Casa de la Sabiduría, uno de los mayores depósitos de conocimiento del mundo islámico. Pero también establecieron la primera forma de correo postal regular y promovieron el comercio transcontinental.

Gengis Kan muere en 1227. Su imperio se dividió en cuatro kanatos que siguieron gobernando por generaciones.`,
    quiz: [
      {
        id: 'hist-005-q1',
        type: 'multiple',
        question: '¿Cuál fue la extensión máxima del Imperio Mongol?',
        options: ['8 millones de km²', '15 millones de km²', '24 millones de km²', '40 millones de km²'],
        correctAnswer: 2,
        explanation: 'En su apogeo, el Imperio Mongol cubría más de 24 millones de km², convirtiéndose en el mayor imperio contiguo de la historia. Gobernaba a un cuarto de la población mundial.',
      },
      {
        id: 'hist-005-q2',
        type: 'truefalse',
        question: '¿Gengis Kan nació en una familia noble y poderosa de las estepas mongolas?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Temujin (Gengis Kan) nació en condiciones humildes, quedó huérfano a los 9 años, fue abandonado y esclavizado. Su ascenso desde la miseria absoluta es uno de los más extraordinarios de la historia.',
      },
      {
        id: 'hist-005-q3',
        type: 'multiple',
        question: '¿Qué fue la "Pax Mongolica"?',
        options: ['Un tratado de paz entre los cuatro kanatos', 'Un período de estabilidad comercial en la Ruta de la Seda bajo dominio mongol', 'La rendición de Gengis Kan ante China', 'El nombre del sistema postal mongol'],
        correctAnswer: 1,
        explanation: 'La Pax Mongolica (1250-1350) fue un período de relativa estabilidad que hizo más segura la Ruta de la Seda, permitiendo un flujo sin precedentes de comercio, ideas y cultura entre Asia y Europa.',
      },
      {
        id: 'hist-005-q4',
        type: 'multiple',
        question: '¿Qué ciudad importante destruyeron los mongoles en 1258, quemando su gran biblioteca?',
        options: ['Jerusalén', 'Constantinopla', 'Bagdad', 'El Cairo'],
        correctAnswer: 2,
        explanation: 'Los mongoles destruyeron Bagdad en 1258, quemando la Casa de la Sabiduría, uno de los mayores centros del conocimiento islámico medieval. Fue un golpe devastador para la civilización islámica.',
      },
    ],
  },
  {
    id: 'hist-006',
    title: 'La Segunda Guerra Mundial en 5 minutos',
    emoji: '🌍',
    category: 'Historia',
    duration: 5,
    difficulty: 'principiante',
    tags: ['segunda guerra mundial', 'hitler', 'holocausto'],
    createdAt: '2025-01-01',
    content: `## La Segunda Guerra Mundial en 5 minutos

La **Segunda Guerra Mundial** (1939-1945) fue el conflicto más devastador de la historia humana: entre 70 y 85 millones de personas murieron, el 3% de la población mundial de entonces.

### Los antecedentes

Alemania quedó humillada tras la Primera Guerra Mundial. El **Tratado de Versalles** (1919) le impuso reparaciones económicas aplastantes y la culpó de la guerra. La crisis económica de 1929 hundió aún más al país.

En ese caldo de cultivo, **Adolf Hitler** y el Partido Nazi ascendieron prometiendo restaurar la grandeza alemana. En 1933, Hitler llegó al poder democráticamente. Una vez dentro, eliminó la democracia.

### La guerra estalla

El **1 de septiembre de 1939**, Alemania invadió Polonia. Francia y el Reino Unido le declararon la guerra dos días después.

En dos años, Alemania conquistó Francia, invadió la URSS y los japoneses (aliados de Alemania) atacaron **Pearl Harbor** en diciembre de 1941, arrastrando a Estados Unidos al conflicto.

### El punto de inflexión

Tres batallas cambiaron el curso de la guerra:

**Batalla de Stalingrado** (1942-43): La URSS resistió durante meses en condiciones apocalípticas. La derrota alemana aquí marcó el inicio del retroceso nazi en el Este.

**El Alamein** (1942): Las fuerzas aliadas detuvieron el avance alemán hacia Egipto.

**Día D** (6 junio 1944): El mayor desembarco anfibio de la historia. 150.000 soldados aliados en las playas de Normandía, Francia.

### El Holocausto

El régimen nazi implementó el asesinato sistemático de **6 millones de judíos** y millones más de gitanos, discapacitados, homosexuales y opositores políticos. Fue el genocidio más documentado de la historia.

### El fin

Alemania se rindió el **8 de mayo de 1945** (Día VE). Japón se rindió el 2 de septiembre tras las bombas atómicas sobre Hiroshima y Nagasaki.`,
    quiz: [
      {
        id: 'hist-006-q1',
        type: 'multiple',
        question: '¿Cuántas personas murieron aproximadamente en la Segunda Guerra Mundial?',
        options: ['10-20 millones', '30-40 millones', '70-85 millones', 'Más de 100 millones'],
        correctAnswer: 2,
        explanation: 'Entre 70 y 85 millones de personas murieron en la Segunda Guerra Mundial, el 3% de la población mundial de la época, convirtiéndolo en el conflicto más letal de la historia.',
      },
      {
        id: 'hist-006-q2',
        type: 'truefalse',
        question: '¿Hitler llegó al poder en Alemania mediante un golpe de estado militar?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Hitler llegó al poder democráticamente en 1933 como canciller. Fue después de ganar elecciones cuando eliminó la democracia y concentró todo el poder.',
      },
      {
        id: 'hist-006-q3',
        type: 'multiple',
        question: '¿Qué evento llevó a Estados Unidos a entrar en la Segunda Guerra Mundial?',
        options: ['La invasión de Polonia', 'La caída de Francia', 'El ataque japonés a Pearl Harbor', 'La invasión de la URSS'],
        correctAnswer: 2,
        explanation: 'El ataque japonés a la base naval de Pearl Harbor el 7 de diciembre de 1941 llevó a Estados Unidos a declarar la guerra a Japón, y por tanto a entrar en el conflicto mundial.',
      },
      {
        id: 'hist-006-q4',
        type: 'multiple',
        question: '¿Cuántos judíos fueron asesinados en el Holocausto?',
        options: ['1 millón', '3 millones', '6 millones', '10 millones'],
        correctAnswer: 2,
        explanation: 'El Holocausto nazi asesinó sistemáticamente a 6 millones de judíos europeos, junto con millones más de otras minorías. Fue el genocidio más documentado y organizado de la historia.',
      },
    ],
  },
  {
    id: 'hist-007',
    title: 'La Revolución Industrial: Cómo cambió el mundo para siempre',
    emoji: '🏭',
    category: 'Historia',
    duration: 4,
    difficulty: 'principiante',
    tags: ['revolución industrial', 'vapor', 'capitalismo'],
    createdAt: '2025-01-01',
    content: `## La Revolución Industrial: Cómo cambió el mundo para siempre

La **Revolución Industrial** (1760-1840) fue la transformación más rápida y profunda de las condiciones de vida humanas desde la invención de la agricultura. En menos de un siglo, la humanidad pasó de una economía agraria a una industrial.

### Antes de la Revolución

En 1750, el 80% de la humanidad trabajaba en la agricultura, como había sido desde hacía 10.000 años. La producción era manual o con tracción animal. Una familia hacía su propia ropa, cultivaba su comida.

### El detonante: el carbón y el vapor

Todo cambió con la **máquina de vapor** de James Watt (mejorada en 1769). Por primera vez en la historia, los humanos podían convertir energía térmica (carbón quemándose) en trabajo mecánico a escala ilimitada.

El **carbón** de las minas inglesas alimentaba estas máquinas. Inglaterra tenía tanto carbón accesible que su explotación se volvió el motor del mundo.

### La fábrica cambia todo

El sistema de fábricas concentró a los trabajadores en un lugar con máquinas especializadas. Esto creó:

- **Producción en serie**: Más rápida y barata que el trabajo artesanal
- **División del trabajo**: Cada persona hace una pequeña parte del proceso
- **El obrero industrial**: Una nueva clase social que vendía su tiempo por un salario

### Las consecuencias sociales

Las ciudades crecieron explosivamente. Londres pasó de 1 millón a 6 millones de habitantes en el siglo XIX. Las condiciones eran brutales: trabajo infantil común, jornadas de 14-16 horas, barrios insalubres.

Esto generó el movimiento obrero, los sindicatos, y las ideas de **Karl Marx** sobre el capitalismo y la lucha de clases.

### El legado

La Revolución Industrial multiplicó la riqueza global pero también creó la desigualdad moderna y el cambio climático (al quemar combustibles fósiles a escala masiva).`,
    quiz: [
      {
        id: 'hist-007-q1',
        type: 'multiple',
        question: '¿Qué invento fue el motor central de la Revolución Industrial?',
        options: ['El telégrafo', 'La locomotora', 'La máquina de vapor', 'La imprenta'],
        correctAnswer: 2,
        explanation: 'La máquina de vapor (perfeccionada por James Watt en 1769) fue el invento central: permitió convertir energía del carbón en trabajo mecánico ilimitado, impulsando fábricas, minas y ferrocarriles.',
      },
      {
        id: 'hist-007-q2',
        type: 'truefalse',
        question: '¿Antes de la Revolución Industrial, la mayoría de la humanidad trabajaba en la industria manufacturera?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. En 1750, aproximadamente el 80% de la humanidad trabajaba en la agricultura, como había sido durante los 10.000 años previos desde la invención de la agricultura.',
      },
      {
        id: 'hist-007-q3',
        type: 'multiple',
        question: '¿Qué combustible fue el principal motor energético de la Revolución Industrial?',
        options: ['Petróleo', 'Gas natural', 'Carbón', 'Madera'],
        correctAnswer: 2,
        explanation: 'El carbón fue el combustible que alimentó la Revolución Industrial. Inglaterra tenía grandes reservas accesibles, y el carbón quemado en máquinas de vapor fue lo que transformó la economía mundial.',
      },
      {
        id: 'hist-007-q4',
        type: 'multiple',
        question: '¿Qué pensador elaboró sus teorías sobre el capitalismo observando las condiciones de la Revolución Industrial?',
        options: ['Adam Smith', 'Karl Marx', 'John Locke', 'David Hume'],
        correctAnswer: 1,
        explanation: 'Karl Marx desarrolló su crítica al capitalismo observando las duras condiciones de los obreros industriales. Su obra "El Capital" analiza el sistema económico creado por la Revolución Industrial.',
      },
    ],
  },
  {
    id: 'hist-008',
    title: 'Cleopatra: El mito y la mujer real',
    emoji: '👑',
    category: 'Historia',
    duration: 3,
    difficulty: 'intermedio',
    tags: ['egipto', 'cleopatra', 'roma'],
    createdAt: '2025-01-01',
    content: `## Cleopatra: El mito y la mujer real

**Cleopatra VII** (69-30 a.C.) es probablemente la figura femenina más famosa de la antigüedad. Pero la Cleopatra que conocemos de películas y novelas tiene poco que ver con la mujer real, que fue una de las gobernantes más inteligentes y hábiles de su época.

### La mujer real

Cleopatra no era egipcia de origen: era griega macedónica, descendiente del general **Ptolomeo**, uno de los sucesores de Alejandro Magno. Su familia gobernaba Egipto desde el 305 a.C.

Lo extraordinario: Cleopatra fue la **primera de su dinastía en aprender egipcio**. También hablaba nueve idiomas incluyendo etíope, árabe y hebreo. Era una polígota excepcional en una época en que los gobernantes rara vez aprendían la lengua de sus súbditos.

### La estratega política

Cleopatra heredó un Egipto en problemas: con deudas con Roma y una guerra civil con su hermano menor (con quien estaba obligada a casarse, según la costumbre). Roma era la superpotencia del momento.

Su relación con **Julio César** no fue un capricho romántico: fue un movimiento estratégico para asegurar el apoyo romano y mantenerse en el poder. Funcionó: César la respaldó y ella consolidó el trono.

Tras el asesinato de César (44 a.C.), Cleopatra se alió con **Marco Antonio**, el hombre más poderoso de Roma. Tuvieron tres hijos juntos. Fueron el equivalente antiguo de una alianza geopolítica.

### La derrota y la muerte

Cuando **Octavio** (futuro Augusto) derrotó a Marco Antonio en la Batalla de Actium (31 a.C.), el fin estaba cerca. Antes de ser llevada cautiva a Roma para el desfile triunfal de Octavio, Cleopatra se suicidó.

La leyenda dice que se dejó morder por una **serpiente áspid**. Los historiadores modernos creen que fue veneno administrado por ella misma.

### El fin de una era

Con su muerte, Egipto se convirtió en una provincia romana. La era de los faraones terminó para siempre.`,
    quiz: [
      {
        id: 'hist-008-q1',
        type: 'truefalse',
        question: '¿Cleopatra era egipcia de origen étnico, descendiente de los faraones?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Cleopatra era griega macedónica, descendiente de Ptolomeo, general de Alejandro Magno. Su familia llevaba gobernando Egipto desde el 305 a.C. pero eran de origen griego.',
      },
      {
        id: 'hist-008-q2',
        type: 'multiple',
        question: '¿Qué habilidad excepcional tenía Cleopatra que la distinguía de su dinastía?',
        options: ['Era la primera mujer faraón', 'Era la primera de su dinastía en hablar egipcio', 'Inventó un sistema de escritura nuevo', 'Fue la primera en aliarse con Roma'],
        correctAnswer: 1,
        explanation: 'Cleopatra fue la primera de la dinastía ptolemaica en aprender el idioma egipcio. También hablaba nueve idiomas en total, algo extraordinario para una gobernante de la época.',
      },
      {
        id: 'hist-008-q3',
        type: 'multiple',
        question: '¿Cuál fue la batalla que marcó el fin del poder de Cleopatra y Marco Antonio?',
        options: ['Batalla de Zama', 'Batalla de Farsalia', 'Batalla de Actium', 'Batalla de Filipos'],
        correctAnswer: 2,
        explanation: 'La Batalla de Actium (31 a.C.) fue la derrota decisiva de Marco Antonio y Cleopatra frente a Octavio (futuro Augusto). Tras ella, ambos se suicidaron y Egipto pasó a ser provincia romana.',
      },
      {
        id: 'hist-008-q4',
        type: 'truefalse',
        question: '¿La alianza de Cleopatra con Julio César fue principalmente motivada por amor romántico?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Los historiadores modernos consideran la relación con César principalmente como un movimiento estratégico para conseguir apoyo romano y mantener su trono en medio de una guerra civil. Fue política más que romance.',
      },
    ],
  },
  {
    id: 'hist-009',
    title: 'La Guerra Fría: Dos superpotencias al borde del abismo',
    emoji: '☢️',
    category: 'Historia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['guerra fría', 'urss', 'estados unidos'],
    createdAt: '2025-01-01',
    content: `## La Guerra Fría: Dos superpotencias al borde del abismo

La **Guerra Fría** (1947-1991) fue la rivalidad global entre dos superpotencias: los **Estados Unidos** (capitalismo, democracia liberal) y la **Unión Soviética** (comunismo, partido único). Nunca se enfrentaron directamente, pero el mundo estuvo al borde de la destrucción nuclear en múltiples ocasiones.

### El origen

Tras la Segunda Guerra Mundial, Europa quedó dividida. La URSS instaló gobiernos comunistas en los países del Este europeo que había liberado. Winston Churchill lo llamó el **"Telón de Acero"**: una división invisible entre el Este comunista y el Oeste capitalista.

### La carrera armamentística

Ambas potencias desarrollaron arsenales nucleares capaces de destruir el mundo varias veces. En su punto máximo, existían más de **70.000 armas nucleares** en el mundo.

La doctrina era la **MAD** (Mutually Assured Destruction): si uno ataca, el otro destruye al primero. El miedo mutuo era el único freno.

### La Crisis de los Misiles en Cuba (1962)

El momento más peligroso de la historia moderna. La URSS instaló misiles nucleares en Cuba, a 150 km de Florida. El presidente Kennedy los descubrió y exigió su retirada.

Durante **13 días**, el mundo estuvo al borde de la guerra nuclear. En un submarino soviético, el oficial **Vasili Arjipov** se negó a autorizar el lanzamiento de un torpedo nuclear (se necesitaban tres firmas y él fue el único que dijo no). Un hombre salvó al mundo.

### La carrera espacial

La rivalidad también fue tecnológica: la URSS lanzó el **Sputnik** (1957), el primer satélite artificial. Los EE.UU. respondieron con la NASA. En 1969, el hombre llegó a la Luna.

### El fin

La URSS se derrumbó entre 1989 y 1991, en parte por sus enormes gastos militares y económicos, el estancamiento económico y los movimientos populares en el Este europeo. El **Muro de Berlín** cayó el 9 de noviembre de 1989.`,
    quiz: [
      {
        id: 'hist-009-q1',
        type: 'multiple',
        question: '¿Qué significan las siglas MAD en el contexto de la Guerra Fría?',
        options: ['Military Armament Division', 'Mutually Assured Destruction', 'Massive Artillery Deployment', 'Military Alliance Defense'],
        correctAnswer: 1,
        explanation: 'MAD significa "Mutually Assured Destruction" (Destrucción Mutua Asegurada): la doctrina de que si una superpotencia ataca, la otra la destruye completamente. El miedo mutuo era el único freno.',
      },
      {
        id: 'hist-009-q2',
        type: 'truefalse',
        question: '¿Durante la Crisis de los Misiles en Cuba, EE.UU. y la URSS se enfrentaron militarmente en combate directo?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La Guerra Fría se llamó "fría" precisamente porque las dos superpotencias nunca se enfrentaron directamente en combate. La crisis se resolvió diplomáticamente tras 13 días de tensión extrema.',
      },
      {
        id: 'hist-009-q3',
        type: 'multiple',
        question: '¿Quién fue Vasili Arjipov y por qué es importante en la Historia?',
        options: ['El líder soviético que ordenó retirar los misiles de Cuba', 'El oficial soviético que se negó a lanzar un torpedo nuclear, posiblemente salvando al mundo', 'El cosmonauta que orbitó la Tierra por primera vez', 'El ingeniero que diseñó el Sputnik'],
        correctAnswer: 1,
        explanation: 'Vasili Arjipov fue el oficial soviético en un submarino durante la Crisis de Cuba que se negó a firmar la autorización para lanzar un torpedo nuclear. Era necesaria unanimidad de tres oficiales. Su "no" posiblemente evitó la Tercera Guerra Mundial.',
      },
      {
        id: 'hist-009-q4',
        type: 'multiple',
        question: '¿Qué evento simbólico marcó el fin práctico de la Guerra Fría en Europa?',
        options: ['La renuncia de Gorbachov', 'La reunificación alemana', 'La caída del Muro de Berlín', 'La disolución de la OTAN'],
        correctAnswer: 2,
        explanation: 'La caída del Muro de Berlín el 9 de noviembre de 1989 fue el símbolo del fin de la Guerra Fría. El muro había dividido Berlín (y simbólicamente al mundo) desde 1961.',
      },
    ],
  },
  {
    id: 'hist-010',
    title: 'El Renacimiento: El renacer de la humanidad',
    emoji: '🎨',
    category: 'Historia',
    duration: 3,
    difficulty: 'principiante',
    tags: ['renacimiento', 'italia', 'humanismo'],
    createdAt: '2025-01-01',
    content: `## El Renacimiento: El renacer de la humanidad

El **Renacimiento** (siglos XIV-XVII) fue un movimiento cultural e intelectual que comenzó en **Italia** y se extendió por toda Europa. Significó el redescubrimiento de la cultura clásica griega y romana, y el inicio de una nueva forma de ver al ser humano.

### ¿Por qué Italia?

Italia tenía las condiciones perfectas:
- **Ciudades-estado ricas**: Florencia, Venecia y Milán acumulaban enormes riquezas comerciales
- **Familias mecenas**: Los **Médicis** en Florencia financiaban artistas y pensadores
- **Herencia clásica**: Italia estaba literalmente rodeada de ruinas romanas
- **La caída de Constantinopla** (1453): Los eruditos griegos huyeron a Italia trayendo manuscritos clásicos

### El humanismo

La gran novedad filosófica fue el **humanismo**: poner al ser humano, no a Dios, en el centro del pensamiento. Esto no era ateísmo, sino una valoración nueva de las capacidades humanas, la razón y la búsqueda del conocimiento.

El ideal renacentista: el **"uomo universale"** o hombre universal, capaz de sobresalir en múltiples disciplinas.

### Los gigantes del Renacimiento

**Leonardo da Vinci** (1452-1519): Pintor, escultor, arquitecto, ingeniero, anatomista, músico. La Mona Lisa y La Última Cena. Sus cuadernos de diseño incluyen prototipos de helicóptero, tanque y paracaídas.

**Miguel Ángel** (1475-1564): La bóveda de la Capilla Sixtina tardó cuatro años pintarla (1508-1512), tumbado boca arriba en un andamio.

**Galileo Galilei** (1564-1642): Sus observaciones astronómicas confirmaron el heliocentrismo (la Tierra gira alrededor del Sol). Fue condenado por la Iglesia.

### El legado

El Renacimiento preparó el terreno para la Reforma Protestante, la Revolución Científica y la Ilustración: los tres movimientos que crearon el mundo moderno.`,
    quiz: [
      {
        id: 'hist-010-q1',
        type: 'multiple',
        question: '¿Cuál fue la filosofía central del Renacimiento que puso al ser humano en el centro del pensamiento?',
        options: ['El escolasticismo', 'El humanismo', 'El empirismo', 'El racionalismo'],
        correctAnswer: 1,
        explanation: 'El humanismo fue la filosofía central del Renacimiento: valorizaba las capacidades humanas, la razón y el conocimiento. No negaba a Dios, pero ponía al ser humano y sus logros en primer plano.',
      },
      {
        id: 'hist-010-q2',
        type: 'truefalse',
        question: '¿Miguel Ángel pintó la bóveda de la Capilla Sixtina de pie en un andamio?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Miguel Ángel pintó la bóveda tumbado boca arriba en un andamio durante cuatro años (1508-1512). El trabajo fue enormemente difícil y dañó permanentemente su vista y su postura.',
      },
      {
        id: 'hist-010-q3',
        type: 'multiple',
        question: '¿Por qué la familia Médicis fue fundamental para el Renacimiento?',
        options: ['Inventaron la imprenta', 'Financiaron artistas y pensadores como mecenas', 'Conquistaron Grecia y rescataron los textos clásicos', 'Fundaron las primeras universidades de Europa'],
        correctAnswer: 1,
        explanation: 'Los Médicis, familia de banqueros de Florencia, financiaron artistas, escultores y filósofos como mecenas. Sin su patrocinio, figuras como Botticelli o Brunelleschi no habrían podido desarrollar su obra.',
      },
      {
        id: 'hist-010-q4',
        type: 'multiple',
        question: '¿Qué evento ayudó a llevar manuscritos griegos clásicos a Italia, impulsando el Renacimiento?',
        options: ['La conquista árabe de España', 'La caída de Constantinopla en 1453', 'Las Cruzadas del siglo XII', 'La invención de la imprenta'],
        correctAnswer: 1,
        explanation: 'Cuando los turcos otomanos conquistaron Constantinopla en 1453, eruditos griegos huyeron a Italia llevando consigo manuscritos de textos clásicos griegos que Europa había olvidado, catalizando el Renacimiento.',
      },
    ],
  },
  {
    id: 'hist-011',
    title: 'Alejandro Magno: El conquistador que lloró porque no había más mundos',
    emoji: '⚔️',
    category: 'Historia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['alejandro magno', 'grecia', 'conquistas'],
    createdAt: '2025-01-01',
    content: `## Alejandro Magno: El conquistador que lloró porque no había más mundos

**Alejandro III de Macedonia** (356-323 a.C.) conquistó el mayor imperio de la antigüedad en solo 13 años, sin perder una sola batalla. Murió a los 32 años sin haber sido derrotado militarmente jamás.

### La formación de un genio

Alejandro tuvo el mejor maestro posible: **Aristóteles**, el filósofo más importante de la antigüedad. Bajo su tutela estudió filosofía, ciencia, medicina y literatura. Homero, especialmente la Ilíada, fue su libro de cabecera de por vida. Se identificaba con Aquiles.

Su padre, el rey **Filipo II de Macedonia**, había ya unificado Grecia bajo su control. Alejandro heredó un reino poderoso y un ejército formidable.

### La conquista

A los 20 años, Alejandro heredó el trono. A los 22, cruzó al Asia Menor y comenzó una campaña que no se detendría hasta la India.

**Puntos clave de la conquista:**
- Persia (el mayor imperio del mundo): derrotada en tres batallas decisivas
- Egipto: lo recibieron como un liberador, fue coronado faraón
- Fundó más de 70 ciudades llamadas **Alejandría**, sembrando la cultura griega por Asia
- Llegó hasta el río Indo, en el actual Pakistán

### La visión: un mundo unido

Lo que diferencia a Alejandro de otros conquistadores es su visión. No solo quería dominar otros pueblos: quería fusionar culturas. Se casó con **Roxana**, una princesa persa, y alentó a sus generales a casarse con mujeres locales.

Adoptó costumbres persas, se vistió como los persas, incorporó soldados persas a su ejército. Esto escandalizó a muchos macedonios.

### La muerte misteriosa

En **Babilonia**, en junio del 323 a.C., Alejandro enfermó repentinamente y murió 12 días después. Tenía 32 años. Las causas debatidas: fiebre tifoidea, envenenamiento, complicaciones por sus múltiples heridas de guerra, o alcoholismo severo.

Su imperio se fragmentó inmediatamente entre sus generales.`,
    quiz: [
      {
        id: 'hist-011-q1',
        type: 'multiple',
        question: '¿Quién fue el famoso maestro de Alejandro Magno?',
        options: ['Sócrates', 'Platón', 'Aristóteles', 'Pitágoras'],
        correctAnswer: 2,
        explanation: 'Aristóteles, el filósofo más influyente de la antigüedad, fue el tutor personal de Alejandro entre los 13 y los 16 años. Le enseñó filosofía, ciencia, retórica y medicina.',
      },
      {
        id: 'hist-011-q2',
        type: 'truefalse',
        question: '¿Alejandro Magno fue derrotado militarmente en alguna batalla durante sus 13 años de campaña?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Alejandro Magno no perdió ninguna batalla en toda su carrera militar, lo que lo convierte en uno de los estrategas militares más extraordinarios de la historia.',
      },
      {
        id: 'hist-011-q3',
        type: 'multiple',
        question: '¿Qué política cultural caracterizó la conquista de Alejandro, diferenciándolo de otros conquistadores?',
        options: ['Destruir todas las culturas conquistadas e imponer la griega', 'Fusionar culturas: adoptar costumbres locales y mezclar pueblos', 'Esclavizar a todos los pueblos derrotados', 'No mezclarse con los pueblos conquistados'],
        correctAnswer: 1,
        explanation: 'Alejandro buscó fusionar culturas: se casó con una princesa persa, adoptó costumbres persas, fundó ciudades mixtas griego-orientales y alentó la mezcla cultural. Esta visión fue revolucionaria y polémica.',
      },
      {
        id: 'hist-011-q4',
        type: 'multiple',
        question: '¿A qué edad murió Alejandro Magno?',
        options: ['25 años', '32 años', '45 años', '55 años'],
        correctAnswer: 1,
        explanation: 'Alejandro Magno murió a los 32 años en Babilonia, en junio del 323 a.C., por causas aún debatidas (posiblemente fiebre tifoidea o envenenamiento). Su muerte temprana dejó su enorme imperio sin sucesor claro.',
      },
    ],
  },
  {
    id: 'hist-012',
    title: 'La Primera Guerra Mundial: Por qué un asesinato paralizó el mundo',
    emoji: '🪖',
    category: 'Historia',
    duration: 5,
    difficulty: 'avanzado',
    tags: ['primera guerra mundial', 'imperios', 'trincheras'],
    createdAt: '2025-01-01',
    content: `## La Primera Guerra Mundial: Por qué un asesinato paralizó el mundo

El **28 de junio de 1914**, en Sarajevo, un joven bosnio llamado **Gavrilo Princip** disparó y mató al Archiduque **Francisco Fernando**, heredero del Imperio Austro-Húngaro. Seis semanas después, Europa entera estaba en guerra.

### El sistema de alianzas: un mecanismo automático de destrucción

La pregunta real no es por qué Princip disparó, sino por qué ese disparo desencadenó una guerra mundial. La respuesta: el sistema de alianzas europeo.

Europa estaba dividida en dos bloques:
- **Triple Alianza**: Alemania, Austria-Hungría, Italia
- **Triple Entente**: Francia, Rusia, Reino Unido

Cuando Austria-Hungría declaró la guerra a Serbia (acusándola de estar detrás del asesinato), el sistema se activó automáticamente:
- Rusia movilizó sus tropas en apoyo a Serbia
- Alemania declaró la guerra a Rusia
- Francia (aliada de Rusia) fue atacada por Alemania
- Alemania invadió Bélgica (neutral) para atacar Francia
- El Reino Unido entró por la violación de la neutralidad belga

Un asesinato → 8 millones de soldados movilizados en semanas.

### La guerra de trincheras

Nadie esperaba esta guerra. Los generales creían que sería breve y gloriosa. En cambio, los avances tecnológicos (ametralladoras, artillería pesada, gas mostaza) hacían los ataques frontales suicidas.

El resultado: trincheras. Dos líneas paralelas de pozos que cruzaban Europa de norte a sur. El frente occidental apenas se movió **kilómetros** en cuatro años a costa de **millones de muertos**.

**Batalla del Somme** (1916): El primer día, el ejército británico sufrió **57.470 bajas** (19.240 muertos). En toda la batalla murieron más de un millón de personas.

### Las consecuencias

La guerra terminó el **11 de noviembre de 1918** con la derrota de Alemania. El Tratado de Versalles humilló a Alemania y sembró las semillas de la Segunda Guerra Mundial.

Además: cayeron cuatro imperios (Austro-Húngaro, Ruso, Otomano y Alemán), redibujando el mapa del mundo.`,
    quiz: [
      {
        id: 'hist-012-q1',
        type: 'multiple',
        question: '¿Por qué el asesinato del Archiduque Francisco Fernando desencadenó una guerra mundial?',
        options: ['Porque era el hombre más poderoso del mundo', 'Porque el sistema de alianzas europeas activó automáticamente compromisos militares en cadena', 'Porque Serbia atacó inmediatamente a toda Europa', 'Porque Alemania había planeado la guerra y solo esperaba una excusa'],
        correctAnswer: 1,
        explanation: 'El sistema de alianzas europeas creó un mecanismo automático: cuando Austria-Hungría atacó Serbia, Rusia intervino, lo que forzó a Alemania, luego a Francia y finalmente al Reino Unido a entrar en guerra en semanas.',
      },
      {
        id: 'hist-012-q2',
        type: 'truefalse',
        question: '¿Los generales europeos en 1914 anticiparon correctamente que la guerra duraría cuatro años?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La mayoría de los líderes militares y políticos creían que la guerra sería breve ("estará terminada para Navidad"). Nadie anticipó que las ametralladoras y artillería convertirían la guerra en cuatro años de carnicería en las trincheras.',
      },
      {
        id: 'hist-012-q3',
        type: 'multiple',
        question: '¿Cuántas bajas sufrió el ejército británico solo en el primer día de la Batalla del Somme?',
        options: ['5.000', '20.000', '57.470', '100.000'],
        correctAnswer: 2,
        explanation: 'El 1 de julio de 1916, el primer día de la Batalla del Somme, el ejército británico sufrió 57.470 bajas (19.240 muertos). Es el día más sangriento de la historia del ejército británico.',
      },
      {
        id: 'hist-012-q4',
        type: 'multiple',
        question: '¿Cuáles fueron los cuatro imperios que colapsaron como consecuencia de la Primera Guerra Mundial?',
        options: ['Español, Portugués, Francés y Británico', 'Austro-Húngaro, Ruso, Otomano y Alemán', 'Romano, Griego, Persa y Egipcio', 'Chino, Japonés, Indio y Árabe'],
        correctAnswer: 1,
        explanation: 'La Primera Guerra Mundial terminó con cuatro grandes imperios: el Austro-Húngaro, el Ruso (reemplazado por la URSS), el Otomano (dando origen a Turquía y los estados árabes modernos) y el Alemán.',
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

  // ─── CIENCIA 5-12 ───────────────────────────────────────────────
  {
    id: 'cien-005',
    title: 'La teoría de la evolución de Darwin explicada simple',
    emoji: '🦎',
    category: 'Ciencia',
    duration: 4,
    difficulty: 'principiante',
    tags: ['darwin', 'evolución', 'selección natural'],
    createdAt: '2025-01-01',
    content: `## La teoría de la evolución de Darwin explicada simple

En 1859, **Charles Darwin** publicó "El origen de las especies", uno de los libros más importantes de la historia de la ciencia. Su idea central es tan elegante como revolucionaria: todas las especies de seres vivos descienden de ancestros comunes y se transforman a través del tiempo mediante la **selección natural**.

### La gran idea: selección natural

El mecanismo es simple. Funciona en tres pasos:

**1. Variación**: Los individuos de una especie no son idénticos. Unos son más rápidos, otros más resistentes al frío, otros tienen mejor visión.

**2. Herencia**: Esas variaciones se transmiten de padres a hijos.

**3. Selección**: En cada ambiente, algunos rasgos ayudan a sobrevivir y reproducirse más que otros. Los individuos con esos rasgos tienen más descendencia. Con el tiempo, el rasgo útil se vuelve más común en la población.

No hay un "plan". No hay "objetivo". Solo: el ambiente favorece ciertos rasgos, y esos rasgos se propagan.

### Un ejemplo concreto: las jirafas

La explicación pre-darwiniana (Lamarck): Las jirafas estiraron el cuello para llegar a las hojas altas, y ese cuello más largo se transmitió a los hijos.

La explicación darwiniana: En la población de jirafas ancestrales había variación natural en el largo del cuello. Las que tenían el cuello algo más largo llegaban a más hojas, comían más, sobrevivían mejor y tenían más cría. Generación tras generación, el cuello promedio se fue alargando.

### La evidencia

La teoría de la evolución está respaldada por múltiples campos independientes:

- **Fósiles**: Muestran formas de vida anteriores y las transiciones entre especies
- **Genética**: El ADN de todas las especies muestra un ancestro común
- **Anatomía comparada**: El brazo humano, la aleta de ballena y el ala de murciélago tienen los mismos huesos
- **Evolución en tiempo real**: Las bacterias evolucionan resistencia a antibióticos en meses

### La evolución y los humanos

Los humanos compartimos el **98.7% de nuestro ADN** con los chimpancés. No descendemos de los chimpancés actuales, sino que ambos descendemos de un ancestro común que vivió hace unos 6-7 millones de años.`,
    quiz: [
      {
        id: 'cien-005-q1',
        type: 'multiple',
        question: '¿Cuáles son los tres elementos necesarios para que funcione la selección natural?',
        options: ['Mutación, migración y deriva genética', 'Variación, herencia y selección', 'Adaptación, reproducción y extinción', 'Genes, cromosomas y ADN'],
        correctAnswer: 1,
        explanation: 'La selección natural requiere: variación (individuos diferentes), herencia (esas diferencias se transmiten) y selección (el ambiente favorece ciertos rasgos). Con estos tres elementos, la evolución ocurre inevitablemente.',
      },
      {
        id: 'cien-005-q2',
        type: 'truefalse',
        question: '¿Según Darwin, la evolución tiene un objetivo o dirección predeterminada?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La evolución no tiene objetivo ni dirección. La selección natural simplemente favorece rasgos que ayudan a sobrevivir en el ambiente actual. No hay progreso hacia un fin determinado.',
      },
      {
        id: 'cien-005-q3',
        type: 'multiple',
        question: '¿Qué porcentaje de ADN comparten los humanos con los chimpancés?',
        options: ['85%', '92%', '98.7%', '100%'],
        correctAnswer: 2,
        explanation: 'Los humanos compartimos el 98.7% de nuestro ADN con los chimpancés, lo que refleja nuestro ancestro común de hace 6-7 millones de años. Esta similitud genética es una evidencia clave de la evolución.',
      },
      {
        id: 'cien-005-q4',
        type: 'truefalse',
        question: '¿La evolución de las bacterias resistentes a antibióticos es un ejemplo de selección natural en tiempo real?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Las bacterias que sobreviven a un antibiótico se reproducen y transmiten esa resistencia. En meses podemos observar evolución real, lo que confirma los mecanismos que Darwin propuso.',
      },
    ],
  },
  {
    id: 'cien-006',
    title: 'El átomo: Lo que hay dentro de la materia',
    emoji: '⚛️',
    category: 'Ciencia',
    duration: 3,
    difficulty: 'principiante',
    tags: ['átomo', 'física', 'partículas'],
    createdAt: '2025-01-01',
    content: `## El átomo: Lo que hay dentro de la materia

Todo lo que existe —tu cuerpo, el agua, el aire, las estrellas— está hecho de **átomos**. Son tan pequeños que en un solo grano de arena hay más átomos que granos de arena en todas las playas del mundo.

### El modelo actual del átomo

Un átomo tiene dos partes principales:

**El núcleo** (en el centro):
- **Protones**: Con carga positiva. Su número define el elemento (1 protón = hidrógeno, 6 protones = carbono, 79 protones = oro).
- **Neutrones**: Sin carga. Aportan masa al núcleo.

**Los electrones** (en la "nube exterior"):
- Con carga negativa.
- No orbitan como planetas (error del modelo antiguo): existen como **nubes de probabilidad**. Solo sabemos dónde tienen más probabilidad de estar.

### La escala del vacío

Los átomos son casi completamente **vacío**. Si el núcleo del átomo fuera una naranja en el centro de un estadio de fútbol, los electrones serían del tamaño de mosquitos volando alrededor de las gradas del estadio exterior.

Todo lo que parece sólido en el mundo es mayormente espacio vacío. La materia sólida lo parece porque las fuerzas electromagnéticas entre átomos crean resistencia al tacto.

### La historia del descubrimiento

- **Demócrito** (siglo V a.C.): Propuso filosóficamente que la materia no se podía dividir infinitamente. Lo llamó "átomo" (indivisible).
- **Dalton** (1803): Demostró científicamente que los elementos se combinan en proporciones fijas → existencia de átomos.
- **Thomson** (1897): Descubrió el electrón. Los átomos tenían partes más pequeñas.
- **Rutherford** (1911): Descubrió el núcleo. El átomo tenía un centro denso.
- **Bohr** (1913): Modelo cuántico del átomo con niveles de energía.

### Los elementos y la tabla periódica

Hay **118 elementos** conocidos. Los primeros 94 ocurren naturalmente. Todo lo que existe en el universo es una combinación de estos elementos.`,
    quiz: [
      {
        id: 'cien-006-q1',
        type: 'multiple',
        question: '¿Qué determina a qué elemento pertenece un átomo?',
        options: ['El número de neutrones', 'El número de protones', 'El número de electrones', 'La masa total del átomo'],
        correctAnswer: 1,
        explanation: 'El número de protones en el núcleo define el elemento. 1 protón = hidrógeno, 6 protones = carbono, 79 protones = oro. Si cambia el número de protones, el elemento cambia.',
      },
      {
        id: 'cien-006-q2',
        type: 'truefalse',
        question: '¿Los electrones orbitan el núcleo del átomo como los planetas al Sol, en trayectorias definidas?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Los electrones no tienen órbitas definidas. Existen como "nubes de probabilidad": solo podemos conocer la probabilidad de encontrarlos en cierta región. Este es un resultado de la mecánica cuántica.',
      },
      {
        id: 'cien-006-q3',
        type: 'multiple',
        question: '¿Qué proporción del volumen de un átomo está compuesta por materia real (no espacio vacío)?',
        options: ['50%', '10%', '1%', 'Menos del 0.001%'],
        correctAnswer: 3,
        explanation: 'Los átomos son mayoritariamente espacio vacío. El núcleo ocupa apenas una billonésima parte del volumen del átomo. Todo lo que parece sólido lo es gracias a las fuerzas electromagnéticas, no a la materia.',
      },
      {
        id: 'cien-006-q4',
        type: 'multiple',
        question: '¿Cuántos elementos químicos hay en la tabla periódica actualmente?',
        options: ['92', '100', '118', '150'],
        correctAnswer: 2,
        explanation: 'La tabla periódica tiene 118 elementos confirmados. Los primeros 94 ocurren naturalmente en la Tierra; los últimos han sido sintetizados en laboratorios de física nuclear.',
      },
    ],
  },
  {
    id: 'cien-007',
    title: 'Las vacunas: Cómo engañamos al sistema inmune',
    emoji: '💉',
    category: 'Ciencia',
    duration: 3,
    difficulty: 'principiante',
    tags: ['vacunas', 'inmunología', 'salud pública'],
    createdAt: '2025-01-01',
    content: `## Las vacunas: Cómo engañamos al sistema inmune

Las vacunas son uno de los inventos más transformadores de la historia de la medicina. Han erradicado enfermedades que mataban millones cada año y han salvado más vidas que casi cualquier otra intervención médica.

### El sistema inmune: tu ejército personal

Tu cuerpo tiene un sistema de defensa sofisticado. Cuando un patógeno (bacteria, virus) entra al cuerpo, el sistema inmune:

1. **Detecta** al invasor (reconoce proteínas específicas llamadas antígenos)
2. **Produce anticuerpos** que se unen específicamente a ese invasor
3. **Destruye** al patógeno
4. **Recuerda**: los linfocitos B de memoria quedan en tu cuerpo por años, listos para responder mucho más rápido en el próximo encuentro

El problema: la primera vez que el cuerpo enfrenta un patógeno, tarda días en organizar la respuesta. Para muchas enfermedades graves, ese tiempo es demasiado.

### La idea de la vacuna: entrenamiento sin riesgo

Una vacuna le presenta al sistema inmune un "simulacro" del patógeno peligroso. Puede ser:

- **Patógeno muerto o debilitado**: Como la vacuna antigripal
- **Fragmentos del patógeno** (proteínas): Como la vacuna de la hepatitis B
- **ARN mensajero** (instrucciones para producir una proteína del patógeno): Como las vacunas COVID de Pfizer/Moderna

En todos los casos, el sistema inmune aprende sin enfermarse de verdad. Cuando llega el patógeno real, ya tiene el ejército entrenado y listo.

### Los logros de las vacunas

- La **viruela** fue la primera enfermedad erradicada globalmente por vacunación (declarada erradicada en 1980)
- La **polio** ha sido eliminada de casi todo el mundo
- El **sarampión**, antes una de las causas principales de muerte infantil, fue reducido en más del 99%

### La inmunidad de rebaño

Cuando suficientes personas en una comunidad son inmunes (vacunadas o recuperadas), el virus no puede propagarse, protegiendo también a quienes no pueden vacunarse (bebés, inmunosuprimidos).`,
    quiz: [
      {
        id: 'cien-007-q1',
        type: 'multiple',
        question: '¿Cuál es el principio fundamental de cómo funciona una vacuna?',
        options: ['Mata directamente al virus antes de que entre al cuerpo', 'Entrena al sistema inmune con un simulacro del patógeno, sin causar la enfermedad', 'Fortalece los glóbulos blancos con minerales', 'Crea una barrera física contra los patógenos'],
        correctAnswer: 1,
        explanation: 'Las vacunas presentan al sistema inmune un simulacro del patógeno (virus muerto, fragmentos o instrucciones genéticas), permitiendo que el cuerpo aprenda a combatirlo sin sufrir la enfermedad real.',
      },
      {
        id: 'cien-007-q2',
        type: 'truefalse',
        question: '¿La viruela fue completamente erradicada del mundo gracias a la vacunación?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. La viruela fue declarada oficialmente erradicada por la OMS en 1980, convirtiéndose en la primera (y hasta ahora única) enfermedad infecciosa humana erradicada globalmente gracias a la vacunación.',
      },
      {
        id: 'cien-007-q3',
        type: 'multiple',
        question: '¿Qué tecnología nueva usaron las vacunas COVID de Pfizer/Moderna?',
        options: ['Virus vivo atenuado', 'Virus completamente muerto', 'ARN mensajero (instrucciones genéticas)', 'Anticuerpos sintéticos directos'],
        correctAnswer: 2,
        explanation: 'Las vacunas de ARNm (como las de Pfizer/Moderna) usan instrucciones genéticas para que las propias células del cuerpo produzcan temporalmente una proteína del virus, entrenando al sistema inmune.',
      },
      {
        id: 'cien-007-q4',
        type: 'multiple',
        question: '¿Qué es la "inmunidad de rebaño"?',
        options: ['La inmunidad que desarrollan los animales de granja', 'La protección colectiva cuando suficiente gente es inmune y el virus no puede propagarse', 'La inmunidad heredada genéticamente', 'La resistencia natural sin vacunas'],
        correctAnswer: 1,
        explanation: 'La inmunidad de rebaño ocurre cuando una proporción suficiente de la población es inmune (vacunada o recuperada), lo que impide la propagación del virus y protege también a quienes no pueden vacunarse.',
      },
    ],
  },
  {
    id: 'cien-008',
    title: 'El cerebro humano: La máquina más compleja del universo',
    emoji: '🧠',
    category: 'Ciencia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['neurociencia', 'cerebro', 'neuronas'],
    createdAt: '2025-01-01',
    content: `## El cerebro humano: La máquina más compleja del universo

El cerebro humano contiene aproximadamente **86.000 millones de neuronas**. Cada neurona puede conectarse con hasta **10.000 otras**. El número total de conexiones (sinapsis) supera los **100 billones**: más que las estrellas de la Vía Láctea.

### La neurona: la unidad básica

Una neurona es una célula especializada con tres partes:
- **Dendritas**: Reciben señales de otras neuronas
- **Cuerpo celular**: Procesa la información
- **Axón**: Transmite la señal a otras neuronas

Las señales viajan como impulsos eléctricos a velocidades de hasta **120 m/s**. En las sinapsis (conexiones), la señal se transmite mediante neurotransmisores químicos: dopamina, serotonina, norepinefrina.

### Las regiones del cerebro

**Corteza prefrontal**: Planificación, toma de decisiones, control de impulsos, personalidad. Lo último que madura (a los 25 años).

**Sistema límbico**: Emociones y memoria. La **amígdala** procesa el miedo y las amenazas. El **hipocampo** es esencial para formar nuevos recuerdos.

**Cerebelo**: Coordinación motora, equilibrio. Ocupa el 10% del volumen pero tiene el 50% de las neuronas.

**Tallo cerebral**: Funciones automáticas: respiración, ritmo cardíaco, ciclos de sueño.

### Neuroplasticidad: el cerebro que se remodela

El cerebro no es fijo. Cada experiencia, aprendizaje o hábito modifica físicamente las conexiones neuronales. Esta capacidad se llama **neuroplasticidad**.

Los músicos profesionales tienen más materia gris en las áreas motoras relacionadas con sus instrumentos. Los taxistas londinenses (que memorizan la ciudad compleja) tienen hipocampos agrandados.

### Lo que aún no entendemos

La **conciencia** sigue siendo uno de los grandes misterios de la ciencia: cómo procesos físicos (neuronas disparando) generan experiencia subjetiva (lo que se siente ser tú).

El cerebro usa solo el **20% de la energía corporal** pese a representar el 2% del peso. El mito del "solo usamos el 10% del cerebro" es completamente falso.`,
    quiz: [
      {
        id: 'cien-008-q1',
        type: 'multiple',
        question: '¿Cuántas neuronas contiene aproximadamente el cerebro humano?',
        options: ['1.000 millones', '10.000 millones', '86.000 millones', '1 billón'],
        correctAnswer: 2,
        explanation: 'El cerebro humano contiene aproximadamente 86.000 millones de neuronas, y cada una puede conectarse con hasta 10.000 otras, creando más de 100 billones de conexiones sinápticas.',
      },
      {
        id: 'cien-008-q2',
        type: 'truefalse',
        question: '¿Los seres humanos usamos solo el 10% de nuestro cerebro?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Este es uno de los mitos más extendidos sobre el cerebro. Prácticamente todas las áreas del cerebro tienen funciones conocidas y están activas. El cerebro usa el 20% de la energía del cuerpo pese a ser el 2% del peso.',
      },
      {
        id: 'cien-008-q3',
        type: 'multiple',
        question: '¿Qué es la neuroplasticidad?',
        options: ['La capacidad del cerebro de crecer en tamaño con la edad', 'La capacidad del cerebro de modificar sus conexiones con la experiencia y el aprendizaje', 'La resistencia del cerebro a enfermedades', 'La velocidad de transmisión de señales nerviosas'],
        correctAnswer: 1,
        explanation: 'La neuroplasticidad es la capacidad del cerebro de remodelar físicamente sus conexiones en respuesta a experiencias, aprendizaje y hábitos. Es la base biológica de por qué podemos aprender cosas nuevas a cualquier edad.',
      },
      {
        id: 'cien-008-q4',
        type: 'multiple',
        question: '¿A qué edad termina de madurar la corteza prefrontal humana?',
        options: ['16 años', '18 años', '21 años', '25 años'],
        correctAnswer: 3,
        explanation: 'La corteza prefrontal, responsable de la planificación, control de impulsos y toma de decisiones, termina de madurar alrededor de los 25 años. Esto explica en parte por qué los adolescentes toman decisiones más impulsivas.',
      },
    ],
  },
  {
    id: 'cien-009',
    title: 'El cambio climático: La ciencia detrás del calentamiento global',
    emoji: '🌡️',
    category: 'Ciencia',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['cambio climático', 'co2', 'efecto invernadero'],
    createdAt: '2025-01-01',
    content: `## El cambio climático: La ciencia detrás del calentamiento global

El **cambio climático antropogénico** (causado por los humanos) es el mayor desafío científico y político del siglo XXI. El consenso científico es abrumador: más del **97% de los climatólogos** está de acuerdo en que el calentamiento global es real y que las actividades humanas son su causa principal.

### El efecto invernadero natural y el amplificado

La Tierra tiene un **efecto invernadero natural**: algunos gases (CO₂, vapor de agua, metano) en la atmósfera atrapan parte del calor solar, manteniendo la temperatura promedio en +15°C en lugar de los -18°C que habría sin ellos. Sin él, la vida como la conocemos sería imposible.

El problema: desde la Revolución Industrial, hemos estado añadiendo CO₂ a la atmósfera quemando combustibles fósiles. La concentración de CO₂ pasó de **280 ppm** (partes por millón) antes de la industrialización a más de **420 ppm** hoy.

Resultado: el efecto invernadero se amplifica y la Tierra se calienta.

### Las evidencias

- La temperatura media global ha subido **1.1°C** desde la era preindustrial
- Los 20 años más calurosos de los que tenemos registro son los 20 últimos años
- El hielo ártico se ha reducido en un **40%** desde 1979
- El nivel del mar ha subido **20 cm** en el último siglo

### Las consecuencias

**Actuales**: Olas de calor más frecuentes e intensas, sequías, huracanes más potentes, acidificación de los océanos, extinción de especies.

**Proyectadas** (si no actuamos): Subida del nivel del mar de 0.5 a 1 metro para 2100, desplazamiento de millones de personas, colapso de ecosistemas.

### ¿Por qué 1.5°C importa tanto?

El **Acuerdo de París** fijó como objetivo limitar el calentamiento a 1.5°C. La diferencia entre 1.5°C y 2°C de calentamiento es enorme: el doble de zonas sin agua, el 10x más de ecosistemas terrestres afectados.

### La solución

Transición a energías renovables, eficiencia energética, y captura de carbono. Las tecnologías existen; el desafío es político y económico.`,
    quiz: [
      {
        id: 'cien-009-q1',
        type: 'multiple',
        question: '¿Cuánto ha aumentado la concentración de CO₂ en la atmósfera desde la era preindustrial?',
        options: ['De 280 a 320 ppm', 'De 280 a 420 ppm', 'De 200 a 300 ppm', 'De 350 a 500 ppm'],
        correctAnswer: 1,
        explanation: 'La concentración de CO₂ pasó de aproximadamente 280 ppm (partes por millón) antes de la industrialización a más de 420 ppm hoy. Este aumento es la causa principal del calentamiento global.',
      },
      {
        id: 'cien-009-q2',
        type: 'truefalse',
        question: '¿El efecto invernadero es un fenómeno 100% negativo creado por los humanos?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El efecto invernadero natural es indispensable para la vida: sin él, la temperatura media de la Tierra sería de -18°C. El problema es el efecto invernadero amplificado por las emisiones humanas de CO₂.',
      },
      {
        id: 'cien-009-q3',
        type: 'multiple',
        question: '¿Qué porcentaje de los climatólogos coincide en que el calentamiento global es real y de origen humano?',
        options: ['51%', '75%', '90%', 'Más del 97%'],
        correctAnswer: 3,
        explanation: 'El consenso científico sobre el cambio climático antropogénico supera el 97% entre los climatólogos. Es uno de los consensos más sólidos de la historia de la ciencia.',
      },
      {
        id: 'cien-009-q4',
        type: 'multiple',
        question: '¿Cuánto ha subido la temperatura media global desde la era preindustrial?',
        options: ['0.3°C', '1.1°C', '2.5°C', '4°C'],
        correctAnswer: 1,
        explanation: 'La temperatura media global ha aumentado aproximadamente 1.1°C desde la era preindustrial. Aunque parece poco, este cambio tiene consecuencias masivas en ecosistemas, océanos y clima extremo.',
      },
    ],
  },
  {
    id: 'cien-010',
    title: 'La mecánica cuántica: Cuando la realidad deja de tener sentido',
    emoji: '🌀',
    category: 'Ciencia',
    duration: 5,
    difficulty: 'avanzado',
    tags: ['cuántica', 'física', 'partículas'],
    createdAt: '2025-01-01',
    content: `## La mecánica cuántica: Cuando la realidad deja de tener sentido

La **mecánica cuántica** es la física de lo muy pequeño: átomos, electrones, fotones. Y describe una realidad que viola completamente nuestra intuición. El propio **Niels Bohr** dijo: "Si la mecánica cuántica no te ha sorprendido, es que no la has entendido".

### La superposición: estar en dos lugares a la vez

En el mundo cuántico, una partícula puede estar en múltiples estados simultáneamente hasta que se la mide. Esto se llama **superposición**.

El famoso experimento del **doble rendija**: cuando lanzas electrones uno a uno hacia dos rendijas, el patrón de impacto muestra que cada electrón pasa por las dos rendijas al mismo tiempo (patrón de interferencia). Pero si pones un detector para saber por cuál rendija pasa... el patrón desaparece. El mero acto de observar cambia el resultado.

### La incertidumbre de Heisenberg

El **principio de incertidumbre de Heisenberg** establece que no es posible conocer simultáneamente con precisión perfecta la posición Y el momento (velocidad × masa) de una partícula.

No es un problema de medición. Es una propiedad fundamental de la realidad: la partícula genuinamente no tiene una posición y velocidad definidas al mismo tiempo.

### El entrelazamiento cuántico

Dos partículas pueden estar **entrelazadas**: cuando mides una propiedad de una, la otra instantáneamente tiene la propiedad correlacionada, sin importar la distancia. Einstein lo llamó "acción fantasmal a distancia" y no le gustaba nada.

El entrelazamiento ha sido confirmado experimentalmente a distancias de más de 1.200 km.

### ¿Por qué no lo vemos en la vida cotidiana?

Los efectos cuánticos se promedian y cancelan cuando hay muchas partículas juntas. Los objetos macroscópicos (mesas, pelotas) siguen la física clásica de Newton. Pero en la escala de los átomos, las reglas son completamente diferentes.

### Las aplicaciones

La mecánica cuántica no es solo filosófica:
- Los **transistores** (base de todos los computadores) funcionan gracias a efectos cuánticos
- El **láser** es pura mecánica cuántica
- La **resonancia magnética médica (MRI)** usa propiedades cuánticas del spin nuclear
- La **computación cuántica** emergente promete velocidades inimaginables`,
    quiz: [
      {
        id: 'cien-010-q1',
        type: 'multiple',
        question: '¿Qué es la superposición cuántica?',
        options: ['Cuando dos partículas ocupan el mismo lugar', 'Cuando una partícula puede estar en múltiples estados simultáneamente hasta ser medida', 'Cuando una partícula viaja más rápido que la luz', 'Cuando los electrones orbitan en múltiples capas'],
        correctAnswer: 1,
        explanation: 'La superposición es la propiedad cuántica por la cual una partícula puede existir en múltiples estados simultáneamente. Al ser medida, "colapsa" a un estado definido. Esto viola completamente nuestra intuición clásica.',
      },
      {
        id: 'cien-010-q2',
        type: 'truefalse',
        question: '¿El principio de incertidumbre de Heisenberg se debe solo a imperfecciones en los instrumentos de medición?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La incertidumbre de Heisenberg no es un problema técnico de medición: es una propiedad fundamental de la realidad. Las partículas genuinamente no tienen posición y velocidad definidas simultáneamente.',
      },
      {
        id: 'cien-010-q3',
        type: 'multiple',
        question: '¿Cuál de estas tecnologías cotidianas funciona gracias a la mecánica cuántica?',
        options: ['Los motores de combustión', 'Los transistores y computadores', 'Los motores eléctricos', 'Los puentes de acero'],
        correctAnswer: 1,
        explanation: 'Los transistores, la unidad básica de todos los computadores modernos, funcionan gracias a efectos cuánticos como el efecto túnel. Sin mecánica cuántica, no existirían computadores, smartphones ni internet.',
      },
      {
        id: 'cien-010-q4',
        type: 'multiple',
        question: '¿Qué fenómeno cuántico describió Einstein como "acción fantasmal a distancia"?',
        options: ['La superposición', 'La incertidumbre de Heisenberg', 'El entrelazamiento cuántico', 'La dualidad onda-partícula'],
        correctAnswer: 2,
        explanation: 'Einstein llamó "acción fantasmal a distancia" al entrelazamiento cuántico: dos partículas entrelazadas correlacionan sus propiedades instantáneamente sin importar la distancia. Einstein nunca estuvo cómodo con esto, aunque ha sido confirmado experimentalmente.',
      },
    ],
  },
  {
    id: 'cien-011',
    title: 'Los virus: Entre lo vivo y lo no vivo',
    emoji: '🦠',
    category: 'Ciencia',
    duration: 3,
    difficulty: 'intermedio',
    tags: ['virus', 'biología', 'pandemia'],
    createdAt: '2025-01-01',
    content: `## Los virus: Entre lo vivo y lo no vivo

Los **virus** son las entidades más abundantes del planeta Tierra. En un litro de agua de mar hay hasta **100.000 millones** de virus. Son más pequeños que las bacterias (que son pequeñas), y plantean una pregunta filosófica fascinante: ¿están vivos?

### ¿Qué es un virus?

Un virus es esencialmente **información genética protegida**:

- Material genético en su interior (ADN o ARN)
- Una cubierta proteica llamada **cápside** que lo protege
- Algunos tienen además una envuelta lipídica (membrana grasa)

El SARS-CoV-2 (COVID-19) mide aproximadamente **100 nanómetros**. Un nanómetro es una millonésima parte de un milímetro. Mil virus en fila cabrían en el grosor de un cabello.

### ¿Están vivos?

Los virus no tienen células, no tienen metabolismo propio, no pueden reproducirse solos. Fuera de un huésped, son inertes como una piedra.

Pero dentro de una célula viva, el virus toma el control de la maquinaria celular y se reproduce a sí mismo. ¿Eso los hace vivos?

Los biólogos generalmente los clasifican como "entidades en el límite de la vida": no son completamente vivos, pero tampoco son completamente inertes.

### Cómo infectan

1. El virus **reconoce** una proteína específica en la superficie de la célula huésped
2. **Inyecta** su material genético dentro de la célula
3. Usa la maquinaria de la célula para **copiar** su genoma miles de veces
4. Las nuevas copias **ensamblan** nuevas partículas virales
5. La célula explota liberando cientos de virus que infectan nuevas células

### Los virus y la evolución

Los virus no son solo enemigos. El **8% de nuestro ADN humano** proviene de virus que infectaron a nuestros ancestros hace millones de años y se integraron en nuestro genoma. Algunos de esos genes virales son esenciales para funciones como el desarrollo de la placenta.`,
    quiz: [
      {
        id: 'cien-011-q1',
        type: 'multiple',
        question: '¿Por qué los virus no se consideran completamente "vivos"?',
        options: ['Porque son demasiado pequeños', 'Porque no tienen células, metabolismo propio ni pueden reproducirse sin un huésped', 'Porque no tienen ADN', 'Porque no evolucionan'],
        correctAnswer: 1,
        explanation: 'Los virus carecen de células, no tienen metabolismo propio y no pueden reproducirse sin infectar una célula huésped. Por eso se los considera "entidades en el límite de la vida", ni completamente vivos ni completamente inertes.',
      },
      {
        id: 'cien-011-q2',
        type: 'truefalse',
        question: '¿Parte de nuestro ADN humano proviene de virus que infectaron a nuestros ancestros?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Aproximadamente el 8% del ADN humano tiene origen viral: son secuencias de virus (retrovirus endógenos) que infectaron a ancestros nuestros hace millones de años y se integraron permanentemente en el genoma.',
      },
      {
        id: 'cien-011-q3',
        type: 'multiple',
        question: '¿Qué es la cápside de un virus?',
        options: ['El material genético del virus', 'La cubierta proteica que protege el material genético', 'La enzima que replica el virus', 'El receptor que reconoce las células huésped'],
        correctAnswer: 1,
        explanation: 'La cápside es la cubierta de proteínas que rodea y protege el material genético del virus (ADN o ARN). Es la "carcasa" que da forma al virus y le permite sobrevivir fuera de una célula.',
      },
      {
        id: 'cien-011-q4',
        type: 'multiple',
        question: '¿Cuántos virus aproximadamente hay en un litro de agua de mar?',
        options: ['Mil', 'Un millón', 'Mil millones', '100.000 millones'],
        correctAnswer: 3,
        explanation: 'En un litro de agua de mar pueden existir hasta 100.000 millones de virus, lo que los convierte en las entidades más abundantes del planeta. Los virus dominan numéricamente cualquier ecosistema en la Tierra.',
      },
    ],
  },
  {
    id: 'cien-012',
    title: 'El Big Bang: Cómo nació el universo',
    emoji: '💥',
    category: 'Ciencia',
    duration: 4,
    difficulty: 'principiante',
    tags: ['cosmología', 'big bang', 'universo'],
    createdAt: '2025-01-01',
    content: `## El Big Bang: Cómo nació el universo

Hace aproximadamente **13.800 millones de años**, el universo comenzó en un estado de temperatura y densidad infinitas. En una fracción de segundo, se expandió explosivamente. A esto lo llamamos el **Big Bang**.

### Lo que el Big Bang no es

El Big Bang no fue una explosión en el espacio. Fue la **expansión del espacio mismo**. No ocurrió en un lugar: ocurrió en todos los lugares simultáneamente (que en ese momento era un punto de densidad infinita).

Tampoco sabemos qué hubo "antes": el tiempo mismo comenzó en el Big Bang. Preguntar qué hubo antes es como preguntar qué hay al norte del Polo Norte.

### Las primeras fracciones de segundo

- **0 segundos**: Singularidad — densidad infinita, temperatura infinita
- **10⁻⁴³ segundos** (tiempo de Planck): El universo tenía el tamaño de un punto. Las cuatro fuerzas fundamentales eran una sola.
- **1 segundo**: Se forman los primeros protones y neutrones
- **3 minutos**: Nucleosíntesis: los protones y neutrones forman los primeros núcleos de hidrógeno y helio
- **380.000 años**: El universo se enfría lo suficiente para que los electrones se unan a los núcleos → primeros átomos. La luz puede viajar libremente. Este es el **fondo cósmico de microondas**.

### Las evidencias del Big Bang

**Expansión del universo**: En 1929, **Edwin Hubble** descubrió que las galaxias se alejan de nosotros. Si retrocedes el tiempo, todo estaba junto.

**Fondo cósmico de microondas**: La "luz fósil" del Big Bang, predicha en 1948 y descubierta accidentalmente en 1965. Es una radiación de microondas que viene uniformemente de todas las direcciones del cielo.

**Abundancia de elementos ligeros**: El Big Bang predice exactamente las proporciones de hidrógeno y helio que observamos en el universo.

### El destino del universo

El universo sigue expandiéndose, y esa expansión está **acelerando** (energía oscura). Las teorías sugieren que el universo podría terminar en un "Big Freeze", un "Big Rip" o un "Big Crunch", dependiendo de propiedades que aún no entendemos completamente.`,
    quiz: [
      {
        id: 'cien-012-q1',
        type: 'truefalse',
        question: '¿El Big Bang fue una explosión que ocurrió en un punto específico del espacio vacío?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El Big Bang no fue una explosión en el espacio: fue la expansión del espacio mismo. No ocurrió en un lugar: ocurrió en todos los lugares a la vez. El espacio, el tiempo y la materia comenzaron todos en ese evento.',
      },
      {
        id: 'cien-012-q2',
        type: 'multiple',
        question: '¿Qué descubrimiento de Edwin Hubble en 1929 apoyó la teoría del Big Bang?',
        options: ['Que el Sol estaba en el centro de la galaxia', 'Que las galaxias se alejan de nosotros: el universo se expande', 'Que el universo era eterno e inmutable', 'Que había millones de galaxias además de la Vía Láctea'],
        correctAnswer: 1,
        explanation: 'Hubble descubrió que las galaxias se alejan de nosotros, y las más distantes se alejan más rápido. Si el universo se expande, hace 13.800 millones de años todo debía estar junto: evidencia del Big Bang.',
      },
      {
        id: 'cien-012-q3',
        type: 'multiple',
        question: '¿Qué es el "fondo cósmico de microondas"?',
        options: ['La radiación de las estrellas más lejanas', 'La "luz fósil" del Big Bang que llena todo el universo', 'Los rayos gamma emitidos por agujeros negros', 'La radiación emitida por el Sol'],
        correctAnswer: 1,
        explanation: 'El fondo cósmico de microondas es la radiación térmica remanente del Big Bang, emitida cuando el universo tenía 380.000 años y se enfrió lo suficiente para formar átomos. Fue predicho teóricamente y descubierto accidentalmente en 1965.',
      },
      {
        id: 'cien-012-q4',
        type: 'multiple',
        question: '¿Hace cuánto tiempo ocurrió el Big Bang?',
        options: ['4.500 millones de años', '6.000 millones de años', '13.800 millones de años', '100.000 millones de años'],
        correctAnswer: 2,
        explanation: 'El Big Bang ocurrió hace aproximadamente 13.800 millones de años. Esta edad se ha calculado con gran precisión usando las mediciones del fondo cósmico de microondas y la tasa de expansión del universo.',
      },
    ],
  },

  // ─── TECNOLOGÍA 4-11 ────────────────────────────────────────────
  {
    id: 'tech-004',
    title: 'Cómo funciona un motor de búsqueda como Google',
    emoji: '🔍',
    category: 'Tecnología',
    duration: 3,
    difficulty: 'principiante',
    tags: ['google', 'búsqueda', 'algoritmos'],
    createdAt: '2025-01-01',
    content: `## Cómo funciona un motor de búsqueda como Google

Cuando escribís algo en Google y obtenés millones de resultados en 0.3 segundos, parece magia. No lo es: es una ingeniería extraordinaria que funciona en tres etapas fundamentales.

### Etapa 1: El rastreo (Crawling)

Google tiene programas automatizados llamados **"arañas" o "crawlers"** (el principal se llama Googlebot). Estos programas navegan por internet siguiendo los enlaces de página en página, leyendo el contenido y descubriendo páginas nuevas.

El proceso es continuo: el índice de Google actualiza miles de millones de páginas constantemente.

### Etapa 2: El indexado (Indexing)

El rastreador descubrió la página; ahora Google la **analiza y almacena** en un índice gigantesco.

El índice de Google contiene cientos de miles de millones de páginas web y ocupa millones de terabytes en sus centros de datos. Para cada página, Google registra:
- Las palabras que contiene y su frecuencia
- La estructura (títulos, encabezados)
- Las imágenes y otros contenidos
- Qué otras páginas enlazan a ella

### Etapa 3: El ranking (clasificación)

Cuando buscás, Google consulta su índice y usa más de **200 factores** para ordenar los resultados. El más famoso es el **PageRank**.

**PageRank**: Cada enlace de una página a otra cuenta como un "voto". Los enlaces de páginas más importantes valen más. Una página con muchos enlaces de páginas confiables es probablemente valiosa.

Otros factores importantes: relevancia del contenido, velocidad de carga, adaptación a móviles, frescura del contenido, localización del usuario.

### El desafío del spam SEO

Millones de personas intentan "engañar" a Google para que sus páginas aparezcan primero. Google constantemente actualiza sus algoritmos para penalizar el contenido de baja calidad.

### La escala

Google procesa más de **8.500 millones** de búsquedas al día. Sus centros de datos consumen tanta electricidad como una ciudad mediana.`,
    quiz: [
      {
        id: 'tech-004-q1',
        type: 'multiple',
        question: '¿Cuál es la función de los "crawlers" o arañas de Google?',
        options: ['Escribir contenido para las páginas web', 'Navegar por internet siguiendo enlaces y descubrir nuevas páginas', 'Cifrar los datos de los usuarios', 'Gestionar los anuncios publicitarios'],
        correctAnswer: 1,
        explanation: 'Los crawlers (como Googlebot) son programas que navegan automáticamente por internet siguiendo enlaces de página en página, leyendo el contenido y descubriendo nuevas páginas para indexar.',
      },
      {
        id: 'tech-004-q2',
        type: 'truefalse',
        question: '¿Google busca en internet en tiempo real cuando hacés una búsqueda?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Google consulta un índice precomputado que construyó previamente rastreando internet. La búsqueda en tiempo real sería imposible dada la escala de internet. El índice se actualiza constantemente en segundo plano.',
      },
      {
        id: 'tech-004-q3',
        type: 'multiple',
        question: '¿Qué es el PageRank de Google?',
        options: ['El número de veces que una página aparece en búsquedas', 'Un sistema que mide la importancia de una página basándose en cuántos enlaces apuntan a ella', 'La velocidad de carga de una página web', 'El ranking de popularidad entre usuarios registrados'],
        correctAnswer: 1,
        explanation: 'PageRank es el algoritmo original de Google que mide la importancia de una página contando cuántos otros sitios enlazan a ella, y cuán importantes son esos sitios. Un enlace desde una web confiable vale más que muchos de sitios desconocidos.',
      },
      {
        id: 'tech-004-q4',
        type: 'multiple',
        question: '¿Cuántas búsquedas procesa Google aproximadamente por día?',
        options: ['100 millones', '1.000 millones', '8.500 millones', '100.000 millones'],
        correctAnswer: 2,
        explanation: 'Google procesa más de 8.500 millones de búsquedas al día, lo que equivale a unas 99.000 búsquedas por segundo. Sus centros de datos distribuidos por el mundo hacen posible esta escala.',
      },
    ],
  },
  {
    id: 'tech-005',
    title: 'Criptografía: El arte de los mensajes secretos',
    emoji: '🔐',
    category: 'Tecnología',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['criptografía', 'seguridad', 'cifrado'],
    createdAt: '2025-01-01',
    content: `## Criptografía: El arte de los mensajes secretos

Cada vez que usás WhatsApp, entrás a tu banco online o hacés una compra en internet, la **criptografía** protege tu información. Es el arte de convertir información legible en información ilegible para quien no tiene la clave.

### Una historia de 4.000 años

- **Julio César** (siglo I a.C.) usaba un cifrado de sustitución: desplazaba cada letra 3 posiciones (A→D, B→E...). Rudimentario, pero funcionaba para su época.
- **Enigma** (Segunda Guerra Mundial): La máquina alemana que cifraba comunicaciones militares. Descifrarla en Bletchley Park (con la contribución clave de **Alan Turing**) fue crucial para ganar la guerra.
- **Criptografía moderna**: Matemáticas tan complejas que ninguna computadora actual puede romperlas en tiempo razonable.

### Criptografía simétrica vs asimétrica

**Simétrica**: La misma clave cifra y descifra. Rápida pero tiene un problema: ¿cómo compartís la clave de forma segura por primera vez?

**Asimétrica (clave pública/privada)**: Cada usuario tiene dos claves matemáticamente relacionadas:
- **Clave pública**: La comparte con todos
- **Clave privada**: Solo la conoce el usuario

Cualquiera puede cifrar un mensaje con tu clave pública, pero solo vos podés descifrarlo con tu clave privada. Es como una caja con ranura: cualquiera puede meter papeles, solo el dueño puede sacarlos.

### RSA: El estándar más usado

El algoritmo **RSA** (Rivest–Shamir–Adleman, 1977) se basa en un hecho matemático: es muy fácil multiplicar dos números primos enormes, pero casi imposible factorizarlos (descomponerlos) en sus factores originales cuando el resultado tiene cientos de dígitos.

### El candado verde del navegador

Cuando ves 🔒 en tu navegador, eso significa que tu conexión usa **TLS** (Transport Layer Security): una combinación de criptografía asimétrica (para intercambiar claves) y simétrica (para cifrar los datos en la comunicación). Sin él, tu contraseña viajaría visible por internet.`,
    quiz: [
      {
        id: 'tech-005-q1',
        type: 'multiple',
        question: '¿Cuál es la diferencia principal entre criptografía simétrica y asimétrica?',
        options: ['La simétrica es más segura', 'La simétrica usa la misma clave para cifrar y descifrar; la asimétrica usa par de claves pública/privada', 'La asimétrica solo funciona en internet', 'La simétrica no puede descifrar mensajes'],
        correctAnswer: 1,
        explanation: 'La criptografía simétrica usa la misma clave para cifrar y descifrar (rápida pero con problema de distribución de clave). La asimétrica usa un par de claves: pública (para cifrar) y privada (para descifrar).',
      },
      {
        id: 'tech-005-q2',
        type: 'truefalse',
        question: '¿Alan Turing contribuyó decisivamente a descifrar la máquina Enigma nazi durante la Segunda Guerra Mundial?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Alan Turing lideró el equipo en Bletchley Park que desarrolló métodos para descifrar Enigma. Su trabajo se estima que acortó la guerra 2-4 años y salvó millones de vidas.',
      },
      {
        id: 'tech-005-q3',
        type: 'multiple',
        question: '¿En qué principio matemático se basa el algoritmo RSA?',
        options: ['Es fácil multiplicar números primos grandes pero muy difícil factorizar el resultado', 'Las raíces cuadradas de números primos son irracionalmente largas', 'Los logaritmos de números grandes son impredecibles', 'La división de primos produce siempre números únicos'],
        correctAnswer: 0,
        explanation: 'RSA se basa en la asimetría de la factorización: multiplicar dos números primos enormes es trivial, pero descomponer el resultado en sus factores originales es computacionalmente imposible con la tecnología actual.',
      },
      {
        id: 'tech-005-q4',
        type: 'multiple',
        question: '¿Qué garantiza el candado 🔒 en la barra del navegador?',
        options: ['Que la web es confiable y legítima', 'Que la conexión está cifrada con TLS y nadie puede leer los datos en tránsito', 'Que el sitio ha sido verificado por Google', 'Que tu contraseña está guardada de forma segura en el servidor'],
        correctAnswer: 1,
        explanation: 'El candado indica una conexión TLS activa: los datos entre tu navegador y el servidor están cifrados. Nadie que intercepte la comunicación puede leer tu contraseña, número de tarjeta o mensajes.',
      },
    ],
  },
  {
    id: 'tech-006',
    title: "La nube: Qué es realmente 'estar en la nube'",
    emoji: '☁️',
    category: 'Tecnología',
    duration: 3,
    difficulty: 'principiante',
    tags: ['nube', 'cloud computing', 'servidores'],
    createdAt: '2025-01-01',
    content: `## La nube: Qué es realmente "estar en la nube"

"Subir a la nube", "guardar en la nube", "computación en la nube". Estas frases se usan constantemente pero pocos saben qué significan realmente. La respuesta es más concreta (y menos poética) de lo que parece.

### La nube es una computadora de otra persona

La definición honesta de "la nube": computadoras y servidores físicos que pertenecen a una empresa (Amazon, Google, Microsoft) y que vos alquilás por internet para almacenar datos o ejecutar programas.

Cuando guardás una foto en Google Photos, esa foto viaja por internet y se almacena en un disco duro dentro de uno de los enormes centros de datos de Google, ubicados en lugares como Oregon, Iowa o Irlanda.

### Los centros de datos

Los **data centers** son edificios enormes llenos de servidores. Pueden ocupar el tamaño de varios campos de fútbol. Tienen:
- Sistemas redundantes de energía eléctrica (generadores de respaldo, baterías)
- Refrigeración masiva (las computadoras generan muchísimo calor)
- Seguridad física extrema
- Conexiones de fibra óptica de altísima velocidad

Amazon Web Services (AWS), Microsoft Azure y Google Cloud controlan juntos más del **60%** del mercado mundial de la nube.

### Los tipos de servicio en la nube

**IaaS** (Infraestructura como servicio): Alquilás servidores virtuales. Vos gestionás el sistema operativo y el software. (AWS EC2, Google Compute Engine)

**PaaS** (Plataforma como servicio): Solo te preocupás de tu código. La nube gestiona el servidor, la base de datos, la escalabilidad. (Google App Engine, Heroku)

**SaaS** (Software como servicio): Usás una aplicación por internet sin instalar nada. (Gmail, Spotify, Office 365, Netflix)

### Las ventajas

- **Escalabilidad**: Tu servicio puede crecer de 10 a 10 millones de usuarios sin cambiar infraestructura física
- **Costo**: Pagás solo lo que usás (sin comprar servidores propios)
- **Disponibilidad**: Redundancia geográfica → si falla un data center, otro toma el relevo`,
    quiz: [
      {
        id: 'tech-006-q1',
        type: 'multiple',
        question: '¿Qué significa realmente "guardar algo en la nube"?',
        options: ['Que el dato se distribuye en millones de dispositivos personales', 'Que el dato se almacena en servidores físicos de empresas como Google o Amazon', 'Que el dato se convierte en señal de radio y viaja por el aire', 'Que el dato se comprime y ocupa menos espacio'],
        correctAnswer: 1,
        explanation: '"La nube" son servidores físicos en centros de datos de empresas como Google, Amazon o Microsoft. Cuando subís algo "a la nube", viaja por internet y se almacena en discos duros en esos edificios.',
      },
      {
        id: 'tech-006-q2',
        type: 'truefalse',
        question: '¿Netflix es un ejemplo de Software como Servicio (SaaS)?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Netflix es un SaaS clásico: usás el servicio por internet sin instalar software complejo, y la empresa gestiona toda la infraestructura. Pagás una suscripción por el acceso.',
      },
      {
        id: 'tech-006-q3',
        type: 'multiple',
        question: '¿Qué porcentaje del mercado mundial de la nube controlan AWS, Azure y Google Cloud juntos?',
        options: ['30%', '45%', 'Más del 60%', 'Casi el 100%'],
        correctAnswer: 2,
        explanation: 'Amazon Web Services, Microsoft Azure y Google Cloud controlan juntos más del 60% del mercado mundial de cloud computing, lo que los convierte en una infraestructura crítica de internet.',
      },
      {
        id: 'tech-006-q4',
        type: 'multiple',
        question: '¿Cuál es la principal ventaja de la escalabilidad en la nube?',
        options: ['Los datos nunca se pueden perder', 'El servicio puede crecer de 10 a millones de usuarios sin cambiar infraestructura física propia', 'La conexión es siempre más rápida que una computadora local', 'Los datos están protegidos por leyes internacionales'],
        correctAnswer: 1,
        explanation: 'La escalabilidad permite que un servicio crezca de 10 a millones de usuarios ajustando recursos en minutos, sin que la empresa tenga que comprar nuevos servidores físicos. Es una de las principales razones por las que las startups usan la nube.',
      },
    ],
  },
  {
    id: 'tech-007',
    title: 'Los algoritmos: Las recetas que gobiernan el mundo digital',
    emoji: '⚙️',
    category: 'Tecnología',
    duration: 3,
    difficulty: 'principiante',
    tags: ['algoritmos', 'programación', 'lógica'],
    createdAt: '2025-01-01',
    content: `## Los algoritmos: Las recetas que gobiernan el mundo digital

Un **algoritmo** es simplemente una secuencia finita de instrucciones para resolver un problema. El término puede sonar técnico, pero llevas toda la vida usando algoritmos: una receta de cocina es un algoritmo. Las instrucciones para llegar a un lugar son un algoritmo.

### ¿Por qué importan tanto hoy?

Los algoritmos digitales toman decisiones que afectan tu vida cotidiana:
- Qué ves en tu feed de Instagram o TikTok
- Qué películas te recomienda Netflix
- Si tu solicitud de crédito es aprobada
- Qué noticias aparecen primero en tu búsqueda
- Cuánto te cobran por un vuelo (varía según algoritmos de precios dinámicos)

### Las características de un buen algoritmo

**Corrección**: Resuelve el problema que se supone que debe resolver.
**Eficiencia**: Lo hace en el menor tiempo y usando los menores recursos posibles.
**Claridad**: Las instrucciones son precisas y no ambiguas.

### Un ejemplo: el algoritmo de ordenamiento

Tenés una lista de números desordenada: [5, 2, 8, 1, 9]. Querés ordenarla.

**Burbuja** (el más simple): Comparás cada par adyacente y los intercambiás si están en orden incorrecto. Repetís hasta que esté ordenado. Lento pero fácil de entender.

**QuickSort** (el más usado en práctica): Elegís un elemento "pivote", ponés los menores a la izquierda y los mayores a la derecha, y repetís recursivamente. Mucho más rápido.

Para 1 millón de números, la diferencia es enorme: Burbuja tarda **horas**; QuickSort tarda **segundos**.

### El problema del sesgo algorítmico

Los algoritmos aprenden de datos históricos. Si esos datos contienen sesgos humanos (racismo, sexismo), el algoritmo los amplifica.

Ejemplo real: algoritmos de contratación entrenados con datos históricos de empresas que principalmente contrataban hombres → discriminaban a mujeres automáticamente.`,
    quiz: [
      {
        id: 'tech-007-q1',
        type: 'multiple',
        question: '¿Cuál es la definición más precisa de un algoritmo?',
        options: ['Un programa de computadora complejo', 'Una secuencia finita de instrucciones para resolver un problema', 'El código que corre en servidores de internet', 'Una fórmula matemática para calcular resultados'],
        correctAnswer: 1,
        explanation: 'Un algoritmo es simplemente una secuencia finita de instrucciones para resolver un problema. Una receta de cocina, las instrucciones de un mueble IKEA, o el código de un buscador son todos algoritmos.',
      },
      {
        id: 'tech-007-q2',
        type: 'truefalse',
        question: '¿Una receta de cocina puede considerarse un algoritmo?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Una receta es un algoritmo clásico: tiene un conjunto definido de instrucciones secuenciales, condiciones ("si la masa está lista"), y un resultado final. Los algoritmos no son exclusivos de las computadoras.',
      },
      {
        id: 'tech-007-q3',
        type: 'multiple',
        question: '¿Por qué el algoritmo QuickSort es mejor que el de Burbuja para grandes conjuntos de datos?',
        options: ['Porque usa menos código', 'Porque es más fácil de programar', 'Porque es exponencialmente más rápido: segundos vs horas para millones de elementos', 'Porque nunca comete errores'],
        correctAnswer: 2,
        explanation: 'La eficiencia importa enormemente a escala. Para un millón de números, el ordenamiento por Burbuja puede tardar horas mientras que QuickSort termina en segundos. Esta diferencia se amplía exponencialmente con más datos.',
      },
      {
        id: 'tech-007-q4',
        type: 'multiple',
        question: '¿Qué es el "sesgo algorítmico"?',
        options: ['Cuando un algoritmo favorece ciertos usuarios premium', 'Cuando un algoritmo aprende y replica sesgos discriminatorios presentes en los datos de entrenamiento', 'Cuando el algoritmo comete errores matemáticos', 'Cuando el algoritmo es demasiado lento'],
        correctAnswer: 1,
        explanation: 'El sesgo algorítmico ocurre cuando un algoritmo de machine learning aprende patrones discriminatorios de datos históricos. Si los datos reflejan desigualdades pasadas, el algoritmo las perpetúa y amplifica automáticamente.',
      },
    ],
  },
  {
    id: 'tech-008',
    title: 'Redes neuronales: Cómo aprende una máquina',
    emoji: '🤖',
    category: 'Tecnología',
    duration: 5,
    difficulty: 'avanzado',
    tags: ['inteligencia artificial', 'machine learning', 'redes neuronales'],
    createdAt: '2025-01-01',
    content: `## Redes neuronales: Cómo aprende una máquina

Los sistemas de inteligencia artificial que reconocen tu cara, traducen idiomas, generan imágenes y conversan están basados en **redes neuronales artificiales**. Son la tecnología más transformadora de la década.

### La inspiración: el cerebro biológico

Las redes neuronales artificiales están inspiradas (libremente) en el cerebro. Una **neurona artificial** recibe entradas numéricas, las pondera, y produce una salida.

Una red neuronal típica tiene:
- **Capa de entrada**: Recibe los datos (píxeles de una imagen, palabras de un texto)
- **Capas ocultas**: Procesan la información en múltiples niveles de abstracción
- **Capa de salida**: Produce el resultado (un número, una categoría, texto)

### El aprendizaje: retropropagación

Una red neuronal **aprende** ajustando millones de parámetros (los "pesos" de las conexiones) mediante un proceso iterativo:

1. La red hace una predicción
2. Se calcula el **error** (qué tan equivocada estaba)
3. El error se propaga hacia atrás (**backpropagation**), ajustando los pesos para reducirlo
4. Se repite millones de veces con millones de ejemplos

Una red que clasifica imágenes de perros y gatos ve millones de imágenes etiquetadas. Al principio falla constantemente; gradualmente sus pesos se ajustan hasta que clasifica correctamente.

### El poder del "deep learning"

Las redes con muchas capas ocultas (docenas o cientos) se llaman **deep learning** (aprendizaje profundo). Cada capa aprende representaciones más abstractas:

En una red que reconoce caras:
- Capa 1: detecta bordes
- Capa 5: detecta ojos y narices
- Capa 10: reconoce caras completas

### Los transformers y los LLMs

La arquitectura **Transformer** (2017) revolucionó el procesamiento del lenguaje. Los **Large Language Models** como GPT-4 o Claude son redes neuronales masivas (cientos de miles de millones de parámetros) entrenadas en la mayor parte de texto escrito en internet.

### Las limitaciones

Las redes neuronales pueden:
- "Alucinar" (inventar hechos con confianza)
- Perpetuar sesgos de los datos de entrenamiento
- Ser cajas negras: difícil entender por qué toman ciertas decisiones`,
    quiz: [
      {
        id: 'tech-008-q1',
        type: 'multiple',
        question: '¿Cómo aprende una red neuronal artificial?',
        options: ['Se programa manualmente con todas las reglas posibles', 'Ajusta millones de parámetros basándose en el error de sus predicciones, en un proceso iterativo', 'Copia directamente la estructura del cerebro humano', 'Aprende de un solo ejemplo perfectamente elegido'],
        correctAnswer: 1,
        explanation: 'Las redes neuronales aprenden por retropropagación: hacen predicciones, calculan el error, y ajustan millones de parámetros para reducirlo. Este proceso se repite millones de veces con millones de ejemplos.',
      },
      {
        id: 'tech-008-q2',
        type: 'truefalse',
        question: '¿Las redes neuronales artificiales replican exactamente el funcionamiento del cerebro biológico?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Las redes neuronales artificiales están inspiradas vagamente en el cerebro, pero funcionan de manera muy diferente. Son modelos matemáticos simplificados, no simulaciones del cerebro real.',
      },
      {
        id: 'tech-008-q3',
        type: 'multiple',
        question: '¿Qué arquitectura revolucionó el procesamiento del lenguaje en 2017 y dio lugar a los LLMs actuales?',
        options: ['La red neuronal convolucional (CNN)', 'La red neuronal recurrente (RNN)', 'El Transformer', 'La máquina de Boltzmann'],
        correctAnswer: 2,
        explanation: 'La arquitectura Transformer (2017, Google) revolucionó el procesamiento del lenguaje y es la base de modelos como GPT-4, Claude, Gemini y otros LLMs. Introdujo el mecanismo de "atención" que permite procesar contexto largo.',
      },
      {
        id: 'tech-008-q4',
        type: 'multiple',
        question: '¿Qué significa que un modelo de IA "alucina"?',
        options: ['Que genera imágenes de forma creativa', 'Que inventa información falsa con total confianza', 'Que procesa datos a velocidades extremas', 'Que imita emociones humanas'],
        correctAnswer: 1,
        explanation: 'Las "alucinaciones" en IA se refieren a cuando un modelo genera información completamente falsa pero la presenta con total confianza. Es una limitación importante de los LLMs actuales que los hace poco confiables para hechos verificables sin supervisión.',
      },
    ],
  },
  {
    id: 'tech-009',
    title: 'Open Source: El software que construyó internet',
    emoji: '🔓',
    category: 'Tecnología',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['open source', 'linux', 'colaboración'],
    createdAt: '2025-01-01',
    content: `## Open Source: El software que construyó internet

La mayor parte de la infraestructura digital del mundo —los servidores de internet, Android, la mayoría de los supercomputadores del mundo, el navegador Chrome, el lenguaje Python— está construida con software de **código abierto (open source)**. Es uno de los experimentos de colaboración más exitosos de la historia.

### ¿Qué es el código abierto?

El **código fuente** de un programa son las instrucciones legibles por humanos que los programadores escriben. El software propietario (como Windows o macOS) mantiene ese código secreto.

El software **open source** publica su código fuente libremente. Cualquier persona puede:
- Ver cómo funciona
- Modificarlo
- Distribuirlo (según la licencia)
- Contribuir a mejorarlo

### Linux: El corazón de internet

**Linus Torvalds**, un estudiante finlandés de 21 años, creó el kernel (núcleo) de Linux en 1991 como proyecto personal y lo publicó libremente.

Hoy, Linux corre en:
- El **96%** de los 500 supercomputadores más potentes del mundo
- La mayoría de los servidores web de internet
- Android (que es Linux modificado) → **3.000 millones** de dispositivos
- Las estaciones espaciales

Microsoft, que antes llamó al software open source "un cáncer", hoy es uno de los mayores contribuidores al ecosistema open source.

### El modelo de colaboración

Miles de programadores de todo el mundo contribuyen al mismo proyecto sin conocerse:
- Se reportan **errores (bugs)** públicamente
- Se proponen mejoras (**pull requests**)
- La comunidad revisa, discute y acepta o rechaza cambios

### Las licencias

No todo open source es igual. Las **licencias** determinan las reglas:
- **GPL**: El software derivado también debe ser open source
- **MIT / Apache**: Podés usar el código en software propietario
- **Creative Commons**: Para contenido no-código

### El impacto económico

Se estima que recrear el software open source existente costaría más de **4 billones de dólares**. Es una de las mayores contribuciones voluntarias a la humanidad.`,
    quiz: [
      {
        id: 'tech-009-q1',
        type: 'multiple',
        question: '¿Qué porcentaje de los 500 supercomputadores más potentes del mundo usa Linux?',
        options: ['25%', '50%', '75%', '96%'],
        correctAnswer: 3,
        explanation: 'El 96% de los 500 supercomputadores más potentes del mundo corre Linux. Además, la mayoría de servidores web, Android (3.000 millones de dispositivos) y la infraestructura crítica de internet usan Linux.',
      },
      {
        id: 'tech-009-q2',
        type: 'truefalse',
        question: '¿Linus Torvalds creó Linux siendo un estudiante de 21 años en 1991?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Linus Torvalds, estudiante finlandés de 21 años, creó el kernel de Linux en 1991 como proyecto personal y lo publicó libremente. Es uno de los proyectos open source más exitosos de la historia.',
      },
      {
        id: 'tech-009-q3',
        type: 'multiple',
        question: '¿Cuál es la diferencia entre una licencia GPL y una licencia MIT?',
        options: ['GPL es gratuita; MIT requiere pago', 'GPL exige que el software derivado también sea open source; MIT permite uso en software propietario', 'GPL es para empresas; MIT para individuos', 'GPL es más antigua; MIT es más moderna'],
        correctAnswer: 1,
        explanation: 'La licencia GPL (copyleft) exige que cualquier software que use código GPL también sea open source. La licencia MIT es más permisiva: el código puede incorporarse en software propietario comercial sin esa obligación.',
      },
      {
        id: 'tech-009-q4',
        type: 'multiple',
        question: '¿Cuánto costaría recrear todo el software open source existente según estimaciones?',
        options: ['100 millones de dólares', '10.000 millones de dólares', 'Más de 4 billones de dólares', 'Es imposible de calcular'],
        correctAnswer: 2,
        explanation: 'Se estima que recrear el software open source existente costaría más de 4 billones de dólares. Esta cifra ilustra el valor masivo de la colaboración voluntaria global en el ecosistema open source.',
      },
    ],
  },
  {
    id: 'tech-010',
    title: 'GPS: Cómo sabe tu teléfono dónde estás',
    emoji: '📡',
    category: 'Tecnología',
    duration: 3,
    difficulty: 'principiante',
    tags: ['gps', 'satélites', 'navegación'],
    createdAt: '2025-01-01',
    content: `## GPS: Cómo sabe tu teléfono dónde estás

El GPS (Sistema de Posicionamiento Global) es una de las tecnologías más utilizadas del mundo. Cada vez que tu teléfono te dice dónde estás, un sistema de **31 satélites** orbitando la Tierra está calculando tu posición con precisión de metros.

### La historia

El GPS fue desarrollado por el **Departamento de Defensa de Estados Unidos** a partir de los años 70 y declarado totalmente operativo en 1995. Originalmente era solo militar. En 1983, tras el derribo del vuelo Korean Air 007 (un avión civil que entró en espacio soviético por error de navegación), el presidente Reagan ordenó que el GPS fuera disponible para uso civil al completarse.

Hoy es completamente gratuito para cualquier persona con un receptor.

### El principio: trilateración

Tu teléfono necesita señales de al menos **4 satélites** para calcular tu posición en 3D (latitud, longitud y altitud).

El proceso:
1. Cada satélite transmite continuamente una señal con su posición exacta y la hora exacta
2. Tu GPS recibe esa señal y calcula **cuánto tardó en llegar** → convierte ese tiempo en distancia
3. Con la distancia a un satélite, estás en algún punto de una esfera alrededor de ese satélite
4. Con la distancia a tres satélites, las esferas se intersectan en un punto (o dos, pero uno es absurdo)
5. El cuarto satélite corrige el error del reloj de tu teléfono

### La relatividad en el GPS

Aquí entra Einstein. Los satélites GPS están a 20.200 km de altura y se mueven a 14.000 km/h. Por:
- **Relatividad especial** (velocidad): Sus relojes van **7 microsegundos más lentos** por día que los terrestres
- **Relatividad general** (gravedad menor): Sus relojes van **45 microsegundos más rápidos** por día

Neto: los relojes satellitales van **38 microsegundos más rápidos** por día. Sin corrección, el GPS acumularía **11 km de error** por día.

### La precisión

El GPS civil tiene precisión de 3-5 metros. Los sistemas diferenciales militares o de ingeniería llegan a centímetros.`,
    quiz: [
      {
        id: 'tech-010-q1',
        type: 'multiple',
        question: '¿Cuántos satélites necesita tu teléfono como mínimo para calcular tu posición en 3D?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 3,
        explanation: 'Se necesitan al menos 4 satélites: 3 para calcular latitud, longitud y altitud por trilateración, y un cuarto para corregir el error del reloj interno del receptor GPS.',
      },
      {
        id: 'tech-010-q2',
        type: 'truefalse',
        question: '¿El GPS requiere que tu teléfono envíe datos a los satélites para funcionar?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El GPS es un sistema de solo recepción: los satélites transmiten señales constantemente y tu receptor las escucha, pero no envía nada. Por eso el GPS funciona sin conexión a internet y sin revelar tu posición a nadie.',
      },
      {
        id: 'tech-010-q3',
        type: 'multiple',
        question: '¿Qué error de posición acumularía el GPS por día si no se aplicaran correcciones relativistas?',
        options: ['10 centímetros', '1 metro', '11 kilómetros', '100 kilómetros'],
        correctAnswer: 2,
        explanation: 'Sin correcciones de relatividad especial y general, los relojes de los satélites GPS estarían desfasados 38 microsegundos por día, causando errores de posición de aproximadamente 11 km diarios. La relatividad de Einstein es física práctica.',
      },
      {
        id: 'tech-010-q4',
        type: 'multiple',
        question: '¿Qué evento histórico llevó al presidente Reagan a ordenar que el GPS fuera disponible para uso civil?',
        options: ['La guerra del Golfo Pérsico', 'El derribo del vuelo Korean Air 007 por error de navegación', 'La misión Apollo a la Luna', 'La crisis de los misiles en Cuba'],
        correctAnswer: 1,
        explanation: 'En 1983, un avión civil coreano fue derribado al entrar en espacio soviético por error de navegación. Reagan ordenó que el GPS (entonces solo militar) fuera disponible para aviación civil al completarse, para evitar tragedias similares.',
      },
    ],
  },
  {
    id: 'tech-011',
    title: 'Ciberseguridad: Por qué tus contraseñas no son suficientes',
    emoji: '🛡️',
    category: 'Tecnología',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['ciberseguridad', 'contraseñas', 'hacking'],
    createdAt: '2025-01-01',
    content: `## Ciberseguridad: Por qué tus contraseñas no son suficientes

Cada año se filtran miles de millones de contraseñas. Las empresas más grandes del mundo son hackeadas regularmente. La ciberseguridad es la batalla más importante del mundo digital, y la mayoría de las personas son el eslabón más débil.

### Los ataques más comunes

**Phishing**: El ataque #1 en efectividad. Un correo o mensaje que parece legítimo (tu banco, Netflix, el trabajo) te lleva a una página falsa donde ingresás tus credenciales. El 91% de los ciberataques exitosos comienzan con phishing.

**Fuerza bruta**: Probar millones de combinaciones de contraseñas automáticamente. Una contraseña de 6 caracteres se rompe en segundos hoy. De 12 caracteres aleatorios: siglos.

**Man-in-the-middle**: Un atacante intercepta la comunicación entre vos y el servidor. Por eso es crucial usar HTTPS y evitar WiFi público para operaciones sensibles.

**Ransomware**: Malware que cifra todos tus archivos y pide un rescate para darte la clave. Hospitales y empresas han pagado millones.

### Por qué las contraseñas solas fallan

Las empresas no guardan tu contraseña en texto plano (o no deberían). Guardan un **hash**: el resultado de una función matemática aplicada a tu contraseña. Si te hackean, obtienen los hashes.

El problema: si usás "123456" o "password", tu hash ya está en tablas precomputadas (rainbow tables). En segundos, tu contraseña real.

Las **filtraciones de datos** son el problema mayor: si usás la misma contraseña en varios sitios y uno es hackeado, todos tus otros servicios quedan expuestos.

### Las mejores prácticas

**1. Gestor de contraseñas** (1Password, Bitwarden): Genera y almacena contraseñas únicas y complejas para cada servicio. Solo necesitás recordar una.

**2. Autenticación de dos factores (2FA)**: Incluso si alguien tiene tu contraseña, necesita también tu teléfono para entrar. Actívalo siempre que sea posible.

**3. Actualizaciones de software**: El 60% de los ataques exitosos explotan vulnerabilidades ya parchadas. Las actualizaciones son parches de seguridad.

**4. Desconfianza por defecto**: Si algo parece urgente, demasiado bueno o pide información sensible → verificá antes de actuar.`,
    quiz: [
      {
        id: 'tech-011-q1',
        type: 'multiple',
        question: '¿Qué porcentaje de los ciberataques exitosos comienza con phishing?',
        options: ['25%', '50%', '75%', '91%'],
        correctAnswer: 3,
        explanation: 'El 91% de los ciberataques exitosos comienzan con phishing: correos, mensajes o llamadas que engañan a la víctima para que revele credenciales o ejecute malware. El factor humano es el eslabón más débil.',
      },
      {
        id: 'tech-011-q2',
        type: 'truefalse',
        question: '¿Las empresas responsables guardan tus contraseñas en texto plano en sus bases de datos?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Las empresas responsables guardan solo el "hash" de tu contraseña: el resultado de una función matemática unidireccional. Aunque roben la base de datos, no pueden obtener directamente tu contraseña original.',
      },
      {
        id: 'tech-011-q3',
        type: 'multiple',
        question: '¿Qué es la autenticación de dos factores (2FA)?',
        options: ['Usar dos contraseñas diferentes', 'Verificar tu identidad con algo que sabés (contraseña) más algo que tenés (teléfono)', 'Cambiar la contraseña dos veces por semana', 'Tener dos cuentas de email'],
        correctAnswer: 1,
        explanation: 'El 2FA combina algo que sabés (contraseña) con algo que tenés (código en tu teléfono, huella digital). Aunque alguien robe tu contraseña, no puede acceder sin el segundo factor.',
      },
      {
        id: 'tech-011-q4',
        type: 'multiple',
        question: '¿Por qué usar la misma contraseña en múltiples sitios es peligroso?',
        options: ['Porque es más fácil olvidarla', 'Porque si uno de esos sitios es hackeado, todos tus servicios quedan expuestos', 'Porque los sitios comparten contraseñas entre sí', 'Porque Google penaliza las contraseñas repetidas'],
        correctAnswer: 1,
        explanation: 'La reutilización de contraseñas es uno de los mayores riesgos: si una empresa es hackeada y tu contraseña se filtra, los atacantes prueban esas credenciales en cientos de otros servicios automáticamente (credential stuffing).',
      },
    ],
  },

  // ─── ARTE (arte-003 → arte-007) ─────────────────────────────────
  {
    id: 'arte-003',
    title: 'El arte abstracto: ¿Por qué un cuadrado vale millones?',
    emoji: '🟥',
    category: 'Arte',
    duration: 3,
    difficulty: 'principiante',
    tags: ['arte abstracto', 'kandinsky', 'malevich', 'valor'],
    createdAt: '2025-01-01',
    content: `## El cuadrado negro de Malevich

En 1915, el artista ruso **Kazimir Malevich** exhibió un cuadrado negro sobre fondo blanco. El escándalo fue total: "¿Eso es arte?". Hoy es una obra icónica en museos de primer nivel. ¿Qué pasó?

### Qué es el arte abstracto

El arte abstracto renuncia a representar objetos reconocibles. No pinta árboles ni caras — pinta **formas, colores, emociones, conceptos**. La pregunta no es "¿a qué se parece?" sino "¿qué te provoca?"

### El camino hacia la abstracción

A comienzos del siglo XX, artistas como **Kandinsky**, **Mondrian** y **Malevich** querían llegar a la esencia pura de la pintura, libre de la narrativa. Kandinsky creía que el color y la forma actuaban directamente sobre el alma como lo hace la música.

### Por qué vale millones

El valor del arte nunca fue sólo técnico. Depende de:
- **Historia e influencia**: si cambió cómo el mundo pinta.
- **Escasez**: obras únicas, artistas muertos, mercado limitado.
- **Consenso cultural**: galerías, críticos, coleccionistas que construyen legitimidad.
- **Significado atribuido**: una obra que desafió algo en su época.

Un Rothko no vale 80 millones por su dificultad técnica, sino porque representa una ruptura cultural.

### Idea clave

El arte abstracto no es una estafa ni genialidad pura: es una conversación sobre qué cuenta como arte y quién lo decide.`,
    quiz: [
      {
        id: 'arte-003-q1',
        type: 'multiple',
        question: '¿Qué buscaba el arte abstracto al alejarse de la representación?',
        options: ['Pintar más rápido', 'Llegar a la esencia de forma, color y emoción sin narrativa figurativa', 'Copiar la fotografía', 'Reproducir la naturaleza con más precisión'],
        correctAnswer: 1,
        explanation: 'La abstracción apostó a la experiencia directa del color y la forma, sin mediación de objetos reconocibles.',
      },
      {
        id: 'arte-003-q2',
        type: 'truefalse',
        question: '¿Kandinsky creía que el color y la forma podían actuar sobre el alma como la música?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Era su teoría central: una pintura podía generar experiencias emocionales puras, como un acorde musical.',
      },
      {
        id: 'arte-003-q3',
        type: 'multiple',
        question: '¿De qué depende principalmente el valor millonario de una obra?',
        options: ['Sólo del tiempo que tardó en hacerse', 'De historia, influencia, escasez y consenso cultural', 'Del tamaño del lienzo', 'Del número de colores usados'],
        correctAnswer: 1,
        explanation: 'El valor del arte es construido culturalmente: influencia histórica, mercado, legitimación crítica.',
      },
      {
        id: 'arte-003-q4',
        type: 'multiple',
        question: '¿Qué artista es famoso por el "Cuadrado negro"?',
        options: ['Mondrian', 'Malevich', 'Kandinsky', 'Rothko'],
        correctAnswer: 1,
        explanation: 'Kazimir Malevich pintó el Cuadrado negro en 1915 como manifiesto del suprematismo.',
      },
    ],
  },
  {
    id: 'arte-004',
    title: 'Van Gogh: El genio que no vendió un cuadro en vida',
    emoji: '🌻',
    category: 'Arte',
    duration: 3,
    difficulty: 'principiante',
    tags: ['van gogh', 'postimpresionismo', 'pintura'],
    createdAt: '2025-01-01',
    content: `## La leyenda incómoda

**Vincent van Gogh** murió en 1890 con apenas 37 años, prácticamente desconocido. Durante toda su vida vendió una sola pintura — probablemente "El viñedo rojo". Hoy sus obras se subastan por decenas de millones.

### Una vida al borde

Van Gogh fue predicador, comerciante de arte y maestro antes de dedicarse a pintar con 27 años. Pintar a menudo era lo único que le daba sentido. Sufrió episodios psiquiátricos severos — durante uno de ellos se cortó parte de la oreja izquierda.

### El estilo

Sus obras se reconocen al instante:
- **Pinceladas visibles, densas, dinámicas** — el color se aplica directo del tubo, creando textura.
- **Colores intensos y no naturales** — el cielo puede ser añil puro, las estrellas brillos dorados.
- **Perspectiva expresiva** — las cosas se curvan, vibran, parecen vivas.

Su influencia sobre el **expresionismo** del siglo XX fue enorme.

### La ironía del mercado

Murió pensando que había fracasado. Su hermano **Theo**, que lo sostuvo económicamente toda la vida, murió seis meses después. Sin Theo, probablemente no hubiéramos visto La noche estrellada.

### Para pensar

El caso de Van Gogh es extremo, pero ilustra algo sobre el arte: la apreciación y el valor llegan en tiempos que no siempre coinciden con la vida del creador.`,
    quiz: [
      {
        id: 'arte-004-q1',
        type: 'truefalse',
        question: '¿Van Gogh vendió decenas de pinturas durante su vida?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Se estima que vendió una sola pintura en vida, aunque produjo más de 900 obras.',
      },
      {
        id: 'arte-004-q2',
        type: 'multiple',
        question: '¿Qué característica visual define el estilo de Van Gogh?',
        options: ['Líneas perfectamente rectas', 'Pinceladas gruesas, dinámicas y colores intensos no naturales', 'Tonos pastel suaves', 'Pintura invisible, sin textura'],
        correctAnswer: 1,
        explanation: 'Su pincelada es inmediatamente reconocible: densa, expresiva, con colores que van más allá de la realidad.',
      },
      {
        id: 'arte-004-q3',
        type: 'multiple',
        question: '¿Quién sostuvo económicamente a Van Gogh durante toda su carrera?',
        options: ['Su madre', 'Su hermano Theo', 'Un mecenas anónimo', 'El gobierno holandés'],
        correctAnswer: 1,
        explanation: 'Theo van Gogh enviaba dinero a Vincent regularmente. Sin ese apoyo, su obra no habría existido.',
      },
      {
        id: 'arte-004-q4',
        type: 'multiple',
        question: '¿Qué movimiento artístico influyó Van Gogh fuertemente?',
        options: ['El cubismo', 'El expresionismo del siglo XX', 'El barroco', 'El neoclasicismo'],
        correctAnswer: 1,
        explanation: 'Su uso del color y la deformación expresiva anticipó y nutrió el expresionismo alemán.',
      },
    ],
  },
  {
    id: 'arte-005',
    title: 'La arquitectura gótica: Piedra que toca el cielo',
    emoji: '⛪',
    category: 'Arte',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['gótico', 'arquitectura', 'catedral', 'medieval'],
    createdAt: '2025-01-01',
    content: `## La ambición de piedra

Entre los siglos XII y XVI, los constructores medievales resolvieron un problema que parecía imposible: levantar edificios de piedra de decenas de metros de altura con paredes casi transparentes. La solución fue la **arquitectura gótica**.

### El problema técnico

Las iglesias románicas anteriores tenían muros gruesos y oscuros para soportar el peso del techo. Los góticos querían luz — luz como metáfora divina. Para tenerla, necesitaban ventanas enormes. Para tener ventanas, necesitaban muros delgados. Para que no colapsaran, necesitaban redistribuir el peso.

### Las soluciones

- **Arco ojival**: más apuntado que el semicircular, transmite peso hacia abajo en vez de hacia los lados.
- **Bóveda de crucería**: distribuye el peso por nervios hacia puntos específicos.
- **Arbotante**: arco exterior que "empuja" contra los muros desde afuera, neutralizando el empuje del techo.

Con estas tres innovaciones, los muros podían llenarse de **vidrieras** de colores.

### Las grandes catedrales

Notre-Dame de París, la Sagrada Família de Gaudí (neo-gótica), Chartres, Colonia. Construcciones que tardaron décadas o siglos en terminarse, con generaciones de artesanos sin ver el resultado.

### Legado

El gótico fue la primera arquitectura que usó la ingeniería estructural de forma explícita para lograr efectos estéticos. En ese sentido, es la madre de la arquitectura moderna.`,
    quiz: [
      {
        id: 'arte-005-q1',
        type: 'multiple',
        question: '¿Qué problema quería resolver la arquitectura gótica?',
        options: ['Construir más barato', 'Tener muros delgados con grandes ventanas sin que el edificio colapsara', 'Imitar la arquitectura romana', 'Construir más rápido'],
        correctAnswer: 1,
        explanation: 'Querían luz y altura, lo que requería muros delgados. La ingeniería gótica redistribuyó el peso para hacerlo posible.',
      },
      {
        id: 'arte-005-q2',
        type: 'multiple',
        question: '¿Qué es un arbotante?',
        options: ['Una ventana circular', 'Un arco exterior que neutraliza el empuje del techo', 'Un tipo de vidrio coloreado', 'Una columna interior'],
        correctAnswer: 1,
        explanation: 'El arbotante es el arco que se ve "volando" fuera de las catedrales, apuntalando los muros.',
      },
      {
        id: 'arte-005-q3',
        type: 'truefalse',
        question: '¿Las catedrales góticas solían terminarse en pocos años?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Muchas tardaron décadas o siglos. Colonia tardó más de 600 años.',
      },
      {
        id: 'arte-005-q4',
        type: 'multiple',
        question: '¿Qué simbolizaba la luz en las catedrales góticas?',
        options: ['El poder del rey', 'Lo divino: la presencia de Dios iluminando el espacio sagrado', 'El calor del fuego', 'La riqueza de la ciudad'],
        correctAnswer: 1,
        explanation: 'La teología medieval de la luz (especialmente de Suger de Saint-Denis) veía la luz como manifestación de lo divino.',
      },
    ],
  },
  {
    id: 'arte-006',
    title: 'El impresionismo: La revolución de la luz y el color',
    emoji: '🎨',
    category: 'Arte',
    duration: 3,
    difficulty: 'principiante',
    tags: ['impresionismo', 'monet', 'renoir', 'pintura'],
    createdAt: '2025-01-01',
    content: `## El insulto que se convirtió en nombre

En 1874, un grupo de pintores rechazados por el Salón oficial de París organizó su propia exposición. Un crítico, burlándose de la obra "Impresión, sol naciente" de **Claude Monet**, usó el título para ridiculizar a todos: los llamó "impresionistas". Ellos adoptaron el nombre con orgullo.

### Qué cambió

La pintura académica apuntaba a la representación perfecta, con acabados suaves y escenas históricas o mitológicas. Los impresionistas querían algo distinto:
- Pintar la **luz natural cambiante**, no la ideal.
- Trabajar **al aire libre** (en plein air), no en estudio.
- Capturar un **momento fugaz**, no una composición eterna.
- Usar **pinceladas visibles y colores vibrantes**, no mezclas suaves.

### Los protagonistas

**Monet** (series de la catedral de Rouen, los nenúfares), **Renoir** (escenas de vida parisina), **Degas** (bailarinas), **Pissarro**, **Sisley**. Cada uno con su voz propia pero compartiendo la sensibilidad.

### Tecnología y contexto

Los tubos de pintura al óleo portátiles (inventados en 1841) hicieron posible pintar afuera fácilmente. Sin la industrialización, no hay impresionismo.

### Legado

Abrió la puerta a todo lo que vino: postimpresionismo, fauvismo, cubismo. El impresionismo es el bisagra entre la pintura clásica y la moderna.`,
    quiz: [
      {
        id: 'arte-006-q1',
        type: 'multiple',
        question: '¿De dónde viene el nombre "impresionismo"?',
        options: ['Un manifiesto del grupo', 'Una burla de un crítico al título de una obra de Monet', 'El nombre de una galería', 'Una palabra del latín clásico'],
        correctAnswer: 1,
        explanation: 'El crítico Louis Leroy lo usó en tono despectivo, pero los pintores lo adoptaron.',
      },
      {
        id: 'arte-006-q2',
        type: 'truefalse',
        question: '¿Los impresionistas preferían trabajar en estudio con modelos posando?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El plein air (al aire libre) era fundamental: querían capturar la luz real del momento.',
      },
      {
        id: 'arte-006-q3',
        type: 'multiple',
        question: '¿Qué invento tecnológico facilitó el trabajo impresionista?',
        options: ['La cámara fotográfica', 'Los tubos de pintura al óleo portátiles', 'El caballete de madera', 'El lienzo sintético'],
        correctAnswer: 1,
        explanation: 'Los tubos (1841) permitían llevar pintura fresca al campo sin prepararla en el momento.',
      },
      {
        id: 'arte-006-q4',
        type: 'multiple',
        question: '¿Qué artista es famoso por sus series de nenúfares?',
        options: ['Renoir', 'Monet', 'Degas', 'Pissarro'],
        correctAnswer: 1,
        explanation: 'Monet pintó sus nenúfares en Giverny a lo largo de décadas, creando una de las series más icónicas del arte occidental.',
      },
    ],
  },
  {
    id: 'arte-007',
    title: 'Fotografía: El arte de congelar el tiempo',
    emoji: '📷',
    category: 'Arte',
    duration: 2,
    difficulty: 'principiante',
    tags: ['fotografía', 'arte', 'tecnología'],
    createdAt: '2025-01-01',
    content: `## Una fracción de segundo que dura para siempre

La fotografía apareció a mediados del siglo XIX y cambió todo: cómo documentamos la historia, cómo nos vemos a nosotros mismos y qué esperamos del arte visual.

### Cómo funciona

Una cámara captura luz que atraviesa un lente y registra una imagen en un sensor (digital) o en película química. La variable clave es **la cantidad de luz y el tiempo de exposición**.

Los tres parámetros básicos:
- **ISO**: sensibilidad del sensor. Alto ISO = más sensible = más ruido.
- **Apertura (f/)**: cuánto se abre el lente. Afecta la profundidad de campo.
- **Velocidad de obturación**: el tiempo que entra la luz. Lento = movimiento borroso o más luz.

### ¿Es arte?

Cuando apareció, muchos pintores creyeron que el arte había muerto. En cambio, liberó a la pintura de la obligación de ser documental — y empujó el impresionismo, el cubismo y la abstracción.

Hoy la fotografía es un lenguaje artístico pleno: composición, luz, momento decisivo, punto de vista.

### Henri Cartier-Bresson y el "momento decisivo"

Cartier-Bresson decía que fotografiar era reconocer en una fracción de segundo el significado de un evento y la organización precisa de las formas que lo expresan. Eso sigue siendo válido con un celular.`,
    quiz: [
      {
        id: 'arte-007-q1',
        type: 'multiple',
        question: '¿Qué parámetro controla cuánto se abre el lente?',
        options: ['ISO', 'Apertura (f/)', 'Velocidad de obturación', 'Resolución'],
        correctAnswer: 1,
        explanation: 'La apertura determina cuánta luz entra y la profundidad de campo de la imagen.',
      },
      {
        id: 'arte-007-q2',
        type: 'truefalse',
        question: '¿La fotografía "mató" la pintura cuando apareció?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La libró de la obligación documental y empujó movimientos como el impresionismo y el cubismo.',
      },
      {
        id: 'arte-007-q3',
        type: 'multiple',
        question: '¿Qué es el "momento decisivo" según Cartier-Bresson?',
        options: ['El instante de comprar la cámara', 'La fracción de segundo donde coinciden el significado del evento y la organización visual perfecta', 'El momento de revelar la foto', 'Cuando se elige el filtro'],
        correctAnswer: 1,
        explanation: 'Cartier-Bresson definió así la esencia de la fotografía: reconocer y capturar ese instante irrepetible.',
      },
      {
        id: 'arte-007-q4',
        type: 'multiple',
        question: '¿Qué sucede con una velocidad de obturación muy lenta?',
        options: ['La imagen queda oscura', 'El movimiento aparece borroso o entra más luz', 'La foto pierde color', 'Se eleva el ISO automáticamente'],
        correctAnswer: 1,
        explanation: 'A más tiempo de exposición, los objetos en movimiento se desenfocan y la imagen recibe más luz.',
      },
    ],
  },

  // ─── MÚSICA (mus-002 → mus-007) ──────────────────────────────────
  {
    id: 'mus-002',
    title: 'El jazz: La música que nació de la libertad',
    emoji: '🎷',
    category: 'Música',
    duration: 3,
    difficulty: 'principiante',
    tags: ['jazz', 'improvisación', 'Nueva Orleans'],
    createdAt: '2025-01-01',
    content: `## Nueva Orleans, siglo XIX

El jazz nació en el cruce de **culturas africanas, europeas y caribeñas** en Nueva Orleans. Las comunidades afroamericanas fusionaron el blues, el ragtime y la tradición europea de armonía para crear algo completamente nuevo.

### La clave: la improvisación

En la música clásica, el intérprete toca lo que está escrito. En el jazz, el músico **improvisa en tiempo real** sobre una estructura armónica compartida. Cada noche, cada ejecución es única. Es conversación musical.

### Cómo funciona

Un estándar de jazz tiene:
- Una **melodía** (el "tema").
- Una secuencia de **acordes** (los cambios).
- Los músicos tocan el tema, luego improvisan sobre los cambios, luego vuelven al tema.

La improvisación no es caos: usa escalas, frases y un vocabulario musical aprendido durante años.

### Las eras

- **Dixieland** (1900s-20s): colectivo, alegre, Nueva Orleans.
- **Swing** (30s-40s): big bands, Glenn Miller, Benny Goodman.
- **Bebop** (40s-50s): Charlie Parker, Dizzy Gillespie. Más complejo, virtuoso.
- **Cool jazz** (50s): Miles Davis, introspectivo.
- **Free jazz** (60s): rompe todas las reglas.

### Por qué importa

El jazz fue la primera música "de autor" afroamericana reconocida globalmente, e influyó sobre absolutamente todo lo que vino: rock, soul, hip-hop, electrónica.`,
    quiz: [
      {
        id: 'mus-002-q1',
        type: 'multiple',
        question: '¿Qué hace al jazz único frente a la música clásica?',
        options: ['Usa instrumentos más grandes', 'La improvisación en tiempo real como elemento central', 'Tiene compases más lentos', 'Es más antiguo'],
        correctAnswer: 1,
        explanation: 'La improvisación es el corazón del jazz: el músico crea en el momento, no interpreta un texto fijo.',
      },
      {
        id: 'mus-002-q2',
        type: 'truefalse',
        question: '¿La improvisación en jazz es aleatoria y sin estructura?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Se improvisa sobre una estructura de acordes y con un vocabulario musical construido en años de práctica.',
      },
      {
        id: 'mus-002-q3',
        type: 'multiple',
        question: '¿En qué ciudad nació el jazz?',
        options: ['Chicago', 'Nueva York', 'Nueva Orleans', 'Memphis'],
        correctAnswer: 2,
        explanation: 'Nueva Orleans, con su mezcla única de culturas, fue la cuna del jazz a finales del siglo XIX.',
      },
      {
        id: 'mus-002-q4',
        type: 'multiple',
        question: '¿Cuál era el estilo bebop?',
        options: ['Simple, lento y comercial', 'Virtuoso y armónicamente complejo', 'Únicamente vocal', 'Música de baile lenta'],
        correctAnswer: 1,
        explanation: 'El bebop, de Parker y Gillespie, elevó la complejidad técnica y harmónica a otro nivel.',
      },
    ],
  },
  {
    id: 'mus-003',
    title: 'Beethoven: Componer sinfonías siendo sordo',
    emoji: '🎹',
    category: 'Música',
    duration: 3,
    difficulty: 'principiante',
    tags: ['beethoven', 'clásica', 'sordera'],
    createdAt: '2025-01-01',
    content: `## La tragedia que se convirtió en milagro

**Ludwig van Beethoven** comenzó a perder la audición alrededor de los 28 años. Para los 44-45, era completamente sordo. Sin embargo, en ese período de total silencio compuso algunas de sus obras más grandes, incluyendo la **Novena Sinfonía** — que no escuchó nunca.

### El momento de la crisis

En 1802, Beethoven escribió un testamento conocido como el "Testamento de Heiligenstadt", en el que contemplaba el suicidio. Salir de esa crisis fue una transformación personal y artística. Comenzó su "período heroico".

### Cómo componía siendo sordo

- Usaba una **varilla de madera** apoyada en el piano que mordía para sentir las vibraciones.
- Tenía un profundo conocimiento interno de la música: años de práctica habían construido un "oído interno".
- Las partituras muestran correcciones intensas: componía sin poder verificar con los oídos.

### La Novena Sinfonía

Estrenada en 1824, completamente sordo, el público ovacionó durante minutos. Cuenta la leyenda que alguien tuvo que girarlo para que viera el aplauso, porque no lo oía.

El último movimiento, con el "Himno a la alegría", es hoy el himno de la Unión Europea.

### Lo que enseña

La adversidad extrema no es garantía de grandeza, pero Beethoven demuestra que la creación artística puede descansar en estructuras internas construidas durante años.`,
    quiz: [
      {
        id: 'mus-003-q1',
        type: 'multiple',
        question: '¿A qué edad empezó Beethoven a perder la audición?',
        options: ['A los 15 años', 'Alrededor de los 28 años', 'Desde que nació', 'A los 60 años'],
        correctAnswer: 1,
        explanation: 'La pérdida auditiva comenzó gradualmente alrededor de los 28 años y se volvió total hacia los 44-45.',
      },
      {
        id: 'mus-003-q2',
        type: 'truefalse',
        question: '¿Beethoven pudo escuchar el estreno de su Novena Sinfonía?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Ya era completamente sordo. Tuvo que ser girado para ver el aplauso del público.',
      },
      {
        id: 'mus-003-q3',
        type: 'multiple',
        question: '¿Qué técnica usaba Beethoven para "sentir" el piano siendo sordo?',
        options: ['Guantes especiales', 'Una varilla de madera apoyada en el piano que mordía para sentir vibraciones', 'Un asistente que le describía los sonidos', 'Nada: inventaba de memoria'],
        correctAnswer: 1,
        explanation: 'Se apoyaba en las vibraciones físicas para captar algo de lo que tocaba.',
      },
      {
        id: 'mus-003-q4',
        type: 'multiple',
        question: '¿Qué es hoy el "Himno a la alegría" de Beethoven?',
        options: ['El himno de Francia', 'El himno de la Unión Europea', 'El himno de las Naciones Unidas', 'El himno de Alemania'],
        correctAnswer: 1,
        explanation: 'Desde 1985, el "Himno a la alegría" del último movimiento de la Novena es el himno oficial de la UE.',
      },
    ],
  },
  {
    id: 'mus-004',
    title: 'Por qué el rock and roll cambió la cultura del siglo XX',
    emoji: '🎸',
    category: 'Música',
    duration: 3,
    difficulty: 'principiante',
    tags: ['rock', 'cultura', 'juventud', 'historia'],
    createdAt: '2025-01-01',
    content: `## No era sólo música

Cuando **Elvis Presley** movió las caderas en televisión en 1956, millones de jóvenes se volvieron locos y millones de adultos se indignaron. Eso no era accidental: el rock and roll era una ruptura cultural, no sólo sonora.

### De dónde vino

El rock nació de la fusión del **rhythm and blues** afroamericano y la música country blanca del sur de Estados Unidos. **Chuck Berry**, **Little Richard**, **Fats Domino** definieron el sonido; Elvis lo masificó.

### Por qué fue disruptivo

- **Sonido nuevo**: guitarra eléctrica distorsionada, batería potente, volumen alto.
- **Cuerpo**: el rock invitaba a moverse libremente, algo chocante en los 50.
- **Juventud como categoría**: antes el mercado de adolescentes no existía; el rock lo creó.
- **Raza**: unificó audiencias que la segregación mantenía separadas, aunque con tensiones.

### Las olas siguientes

Los **Beatles**, los **Rolling Stones**, **Led Zeppelin**, **Hendrix**, el punk, el metal, el grunge… cada década trajo una versión nueva del impulso original. El rock funcionó como espejo y catalizador de tensiones culturales de cada época.

### El legado

Más que un género, el rock fue la primera cultura juvenil global, la prueba de que la música podía cuestionar el orden establecido. Sin él, no se entiende el feminismo de los 70, el antirracismo de los 80 o los movimientos contraculturales hasta hoy.`,
    quiz: [
      {
        id: 'mus-004-q1',
        type: 'multiple',
        question: '¿De qué fusión musical surgió el rock and roll?',
        options: ['Clásico europeo y gospel', 'Rhythm and blues afroamericano y country blanco del sur de EE.UU.', 'Jazz y ópera', 'Salsa y reggae'],
        correctAnswer: 1,
        explanation: 'El rock combinó el r&b afroamericano con el country blanco del sur, creando algo nuevo.',
      },
      {
        id: 'mus-004-q2',
        type: 'truefalse',
        question: '¿El mercado de adolescentes ya estaba bien definido antes del rock?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El rock fue clave en construir a los jóvenes como categoría cultural y de consumo diferenciada.',
      },
      {
        id: 'mus-004-q3',
        type: 'multiple',
        question: '¿Qué artista masificó el rock en los años 50?',
        options: ['Chuck Berry', 'Elvis Presley', 'Little Richard', 'Fats Domino'],
        correctAnswer: 1,
        explanation: 'Elvis llegó a audiencias masivas con el sonido y la imagen rock, aunque los pioneros fueran artistas afroamericanos.',
      },
      {
        id: 'mus-004-q4',
        type: 'multiple',
        question: '¿Por qué la guitarra eléctrica distorsionada era disruptiva?',
        options: ['Porque era más cara', 'Por el volumen y el sonido agresivo que desafiaban las normas de la música convencional', 'Porque era más fácil de aprender', 'Porque reemplazó al piano clásico'],
        correctAnswer: 1,
        explanation: 'El sonido eléctrico y potente era una ruptura con los ideales de delicadeza y orden de la música popular anterior.',
      },
    ],
  },
  {
    id: 'mus-005',
    title: 'La música clásica y su efecto en el cerebro',
    emoji: '🧠',
    category: 'Música',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['música clásica', 'neurociencia', 'cerebro'],
    createdAt: '2025-01-01',
    content: `## ¿Realmente te hace más inteligente?

El famoso "Efecto Mozart" de los 90 — que escuchar Mozart sube el IQ — fue muy exagerado por los medios. El estudio original era modesto (mejora temporal en una tarea específica) y no replicó bien. Aun así, la música y el cerebro tienen una relación fascinante.

### Lo que sabemos con evidencia

- **Tocar música** (no sólo escuchar) aumenta la densidad de materia gris en varias regiones del cerebro.
- Los músicos tienen mejor **memoria de trabajo**, mayor **precisión motora** fina y conexiones más fuertes entre hemisferios.
- La música activa simultáneamente áreas visuales, motoras, emocionales y auditivas — pocas actividades lo hacen así.

### Emoción y recompensa

La música puede provocar **escalofríos** (frisson): una respuesta física real a la emoción musical. Libera dopamina en el núcleo accumbens — el mismo circuito de la comida y el sexo.

### Música y dolor

Escuchar música que nos gusta puede reducir la percepción del dolor. Se usa como apoyo en procedimientos médicos y recuperación posquirúrgica.

### Músicoterapia

Campo reconocido que usa la música activa o pasiva para trabajar con personas con Parkinson, Alzheimer, autismo, depresión y trauma. No es magia: tiene mecanismos neurológicos documentados.

### Conclusión

El efecto Mozart era un mito simplificado. La relación cerebro-música es mucho más profunda y real, especialmente cuando hacés música activamente.`,
    quiz: [
      {
        id: 'mus-005-q1',
        type: 'multiple',
        question: '¿Qué demostró más claramente la neurociencia sobre la música?',
        options: ['Escuchar Mozart sube el IQ permanentemente', 'Tocar música activamente modifica el cerebro y mejora habilidades cognitivas', 'La música clásica cura enfermedades', 'Sólo los músicos tienen emociones'],
        correctAnswer: 1,
        explanation: 'La práctica musical (no sólo escuchar) produce cambios estructurales en el cerebro.',
      },
      {
        id: 'mus-005-q2',
        type: 'truefalse',
        question: '¿El "Efecto Mozart" demostró que escuchar música clásica aumenta el IQ de forma permanente?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. El estudio era modesto y poco replicable. Los medios exageraron mucho las conclusiones.',
      },
      {
        id: 'mus-005-q3',
        type: 'multiple',
        question: '¿Qué es el "frisson" musical?',
        options: ['Una escala francesa', 'La respuesta física de escalofríos al sentir una emoción intensa con la música', 'Un instrumento de percusión', 'Un compás musical complejo'],
        correctAnswer: 1,
        explanation: 'El frisson es la respuesta física real (piel de gallina, escalofríos) que provoca la emoción musical intensa, asociada a liberación de dopamina.',
      },
      {
        id: 'mus-005-q4',
        type: 'multiple',
        question: '¿En qué área médica se usa la musicoterapia con evidencia documentada?',
        options: ['Cirugía cardíaca directa', 'Parkinson, Alzheimer, depresión y trauma', 'Corrección de visión', 'Huesos rotos'],
        correctAnswer: 1,
        explanation: 'La musicoterapia tiene protocolos y evidencia en neurología, salud mental y rehabilitación.',
      },
    ],
  },
  {
    id: 'mus-006',
    title: 'El flamenco: El alma hecha arte',
    emoji: '💃',
    category: 'Música',
    duration: 3,
    difficulty: 'intermedio',
    tags: ['flamenco', 'España', 'gitano', 'cultura'],
    createdAt: '2025-01-01',
    content: `## Un arte de raíces múltiples

El flamenco nació en Andalucía (sur de España) en los siglos XVIII-XIX, en la confluencia de culturas **gitana, árabe, judía sefardí y española**. No tiene un único origen limpio: es una síntesis de siglos.

### Tres elementos

El flamenco tradicional descansa en tres pilares:
- **Cante**: la voz, la parte más importante. El "duende" — esa cualidad de arrastrar el alma — vive aquí.
- **Toque**: la guitarra flamenca, diferente de la clásica por su sonido percusivo y más brillante.
- **Baile**: movimiento de brazos, palmas, zapateado. Cada gesto tiene significado.

A estos se añaden el **cajón** (instrumento peruano adoptado en los 70) y las palmas.

### El "duende"

**Federico García Lorca** escribió sobre el duende en el flamenco: esa fuerza oscura que trae el arte verdadero, que no se puede fingir y que a veces lleva al artista y al público a un estado casi ritual.

### Palos (estilos)

Hay decenas: soleá, siguiriyas, bulerías, tangos, rumba… Cada uno tiene su compás particular, su carácter emocional, su velocidad. El aprendizaje lleva años.

### Hoy

En 2010, la UNESCO declaró al flamenco **Patrimonio Cultural Inmaterial de la Humanidad**. Sigue vivo, en tensión productiva entre tradición y experimentación.`,
    quiz: [
      {
        id: 'mus-006-q1',
        type: 'multiple',
        question: '¿Cuáles son los tres elementos clásicos del flamenco?',
        options: ['Piano, violín y danza', 'Cante, toque y baile', 'Trompeta, percusión y voz', 'Guitarra, flauta y zapateo'],
        correctAnswer: 1,
        explanation: 'Cante (voz), toque (guitarra) y baile son los tres pilares del flamenco clásico.',
      },
      {
        id: 'mus-006-q2',
        type: 'truefalse',
        question: '¿El flamenco fue declarado Patrimonio de la Humanidad por la UNESCO?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. La UNESCO lo declaró Patrimonio Cultural Inmaterial de la Humanidad en 2010.',
      },
      {
        id: 'mus-006-q3',
        type: 'multiple',
        question: '¿Qué describió García Lorca como "duende" en el flamenco?',
        options: ['Un personaje mitológico', 'Esa fuerza oscura e inimitable que arrastra el alma del artista y del público', 'Un tipo de compás', 'El sonido de la guitarra'],
        correctAnswer: 1,
        explanation: 'El duende es lo que distingue el arte verdadero de la mera técnica: una presencia casi inexplicable.',
      },
      {
        id: 'mus-006-q4',
        type: 'multiple',
        question: '¿De qué culturas se nutre el flamenco?',
        options: ['Sólo de la española', 'De la confluencia gitana, árabe, judía sefardí y española en Andalucía', 'De la italiana y la francesa', 'Sólo de la árabe'],
        correctAnswer: 1,
        explanation: 'El flamenco es una síntesis de siglos de contacto entre culturas en el sur de España.',
      },
    ],
  },
  {
    id: 'mus-007',
    title: 'Cómo se graba un disco: De la melodía al streaming',
    emoji: '🎙️',
    category: 'Música',
    duration: 3,
    difficulty: 'principiante',
    tags: ['grabación', 'producción musical', 'streaming'],
    createdAt: '2025-01-01',
    content: `## El camino de una canción

Desde que una melodía existe en la cabeza de un artista hasta que la escuchás en Spotify hay decenas de pasos. Acá el recorrido simplificado.

### Pre-producción

El artista trabaja la canción: estructura, arreglos, instrumentación. Se puede hacer con demos caseras o en sesiones pagadas. Buena pre-producción ahorra tiempo y plata en estudio.

### Grabación

En un **estudio de grabación**, los instrumentos se graban por separado para poder editar cada uno. Un baterista puede grabar su parte, luego el bajo, la guitarra, las voces. Cada pista queda separada.

El **ingeniero de sonido** maneja los micrófonos, la consola y el software (DAW: *Digital Audio Workstation*).

### Mezcla

Un **mixer** toma todas las pistas grabadas y las combina: iguala volúmenes, ajusta ecualizador, agrega efectos (reverb, delay, compresión). Es un trabajo artístico tanto como técnico.

### Masterización

El paso final antes de distribuir. El **masterizador** optimiza el sonido para que funcione en distintos sistemas (auriculares baratos, sistema de cine, radios, streaming) y normaliza el volumen.

### Distribución digital

Hoy la música llega al oyente a través de distribuidoras digitales (DistroKid, TuneCore, etc.) que suben el archivo a Spotify, Apple Music, YouTube y el resto. El artista recibe fracciones de centavo por stream.`,
    quiz: [
      {
        id: 'mus-007-q1',
        type: 'multiple',
        question: '¿Por qué se graban los instrumentos por separado?',
        options: ['Para ahorrar cables', 'Para poder editar cada pista independientemente', 'Porque los micrófonos son pequeños', 'Porque así lo exige Spotify'],
        correctAnswer: 1,
        explanation: 'Tener pistas separadas permite corregir, ajustar y mezclar cada instrumento sin afectar al resto.',
      },
      {
        id: 'mus-007-q2',
        type: 'multiple',
        question: '¿Qué hace el masterizador?',
        options: ['Compone la letra', 'Optimiza el sonido final para funcionar en distintos sistemas y normaliza el volumen', 'Toca todos los instrumentos', 'Diseña la portada'],
        correctAnswer: 1,
        explanation: 'El mastering prepara la mezcla para distribución, asegurando consistencia en todo tipo de reproductores.',
      },
      {
        id: 'mus-007-q3',
        type: 'truefalse',
        question: '¿Una canción va directamente de grabarse al streaming sin pasos intermedios?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Hay etapas de mezcla y masterización antes de distribuir.',
      },
      {
        id: 'mus-007-q4',
        type: 'multiple',
        question: '¿Qué es un DAW?',
        options: ['Un tipo de micrófono', 'Software de audio digital para grabar y editar música', 'Un amplificador de guitarra', 'Una plataforma de streaming'],
        correctAnswer: 1,
        explanation: 'DAW (Digital Audio Workstation) es el software donde se graban, editan y mezclan las pistas.',
      },
    ],
  },

  // ─── CINE (cine-002 → cine-007) ──────────────────────────────────
  {
    id: 'cine-002',
    title: 'Los efectos especiales: La magia detrás de la pantalla',
    emoji: '🎬',
    category: 'Cine',
    duration: 3,
    difficulty: 'principiante',
    tags: ['efectos especiales', 'CGI', 'Hollywood'],
    createdAt: '2025-01-01',
    content: `## Magia con ciencia

Desde la primera película de los Lumière, el cine inventó trucos para crear ilusiones. En 130 años pasó de telas pintadas a mundos completamente virtuales.

### Efectos prácticos

Los efectos **prácticos** se logran en el set: maquillaje, prótesis, explosiones reales, maquetas, trajes elaborados. La saga Alien, Mad Max o Star Wars original usaron efectos prácticos magistrales.

### CGI

**Computer-Generated Imagery**: imágenes generadas por computadora. Desde Jurassic Park (1993) cambió el cine para siempre. Hoy permite crear personajes, mundos y acciones imposibles de filmar.

El proceso:
1. **Modelado 3D**: se crea el objeto digital.
2. **Rigging**: se le agrega un "esqueleto" para animarlo.
3. **Texturizado**: colores y superficies.
4. **Renderizado**: la computadora calcula la imagen final (puede tardar horas por fotograma).
5. **Composición**: se integra con el material filmado.

### Motion capture

Los actores usan trajes con sensores que capturan sus movimientos. Los personajes digitales heredan esa actuación. Gollum, Avatar, Thanos.

### El debate

Muchos directores prefieren efectos prácticos porque tienen "peso" físico real y envejecen mejor que el CGI de épocas anteriores. El mejor resultado suele ser combinar ambos.`,
    quiz: [
      {
        id: 'cine-002-q1',
        type: 'multiple',
        question: '¿Qué son los efectos prácticos?',
        options: ['Efectos hechos por computadora', 'Efectos logrados físicamente en el set (maquillaje, explosiones, maquetas)', 'Efectos de audio', 'Efectos en postproducción digital'],
        correctAnswer: 1,
        explanation: 'Son los efectos reales, físicos, que ocurren frente a la cámara.',
      },
      {
        id: 'cine-002-q2',
        type: 'multiple',
        question: '¿Qué película es considerada un hito en el uso del CGI moderno?',
        options: ['Star Wars (1977)', 'Jurassic Park (1993)', 'Avatar (2009)', 'Titanic (1997)'],
        correctAnswer: 1,
        explanation: 'Jurassic Park popularizó el CGI fotorrealista, cambiando permanentemente los efectos especiales.',
      },
      {
        id: 'cine-002-q3',
        type: 'multiple',
        question: '¿Qué es el "motion capture"?',
        options: ['Una cámara de alta velocidad', 'Capturar los movimientos de actores reales para animar personajes digitales', 'Una técnica de iluminación', 'Un micrófono inalámbrico'],
        correctAnswer: 1,
        explanation: 'El motion capture transfiere la actuación humana a un personaje digital.',
      },
      {
        id: 'cine-002-q4',
        type: 'truefalse',
        question: '¿El CGI siempre da mejores resultados que los efectos prácticos?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Muchos directores y espectadores prefieren efectos prácticos por su peso físico real. La combinación suele ser lo mejor.',
      },
    ],
  },
  {
    id: 'cine-003',
    title: 'Hitchcock: El maestro del suspenso',
    emoji: '🕊️',
    category: 'Cine',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['Hitchcock', 'suspenso', 'cine clásico'],
    createdAt: '2025-01-01',
    content: `## El director que estudió el miedo

**Alfred Hitchcock** (1899-1980) dirigió 53 películas y convirtió el suspenso en una ciencia. A diferencia de muchos directores, pensaba en términos psicológicos: no le importaba tanto lo que pasa en pantalla como lo que pasa en la mente del espectador.

### La diferencia entre sorpresa y suspenso

Hitchcock lo explicó con una famosa distinción:
- **Sorpresa**: dos personas charlan, estalla una bomba. El espectador tiene 10 segundos de impacto.
- **Suspenso**: el espectador sabe que hay una bomba bajo la mesa, los personajes no. Ahora son 10 minutos de tensión.

El suspenso requiere que el espectador sepa más que los personajes.

### Sus técnicas

- **El MacGuffin**: un objeto o meta que impulsa la trama pero cuyo contenido no importa (la maleta de Pulp Fiction es posterior, pero heredó el concepto).
- **Punto de vista subjetivo**: cámara como los ojos del personaje.
- **Montaje de tensión**: cortes precisos para controlar la respiración del espectador.

### Sus obras maestras

*Vértigo*, *Psicosis*, *Con la muerte en los talones*, *La ventana indiscreta*. Casi todas tienen un fallo, una obsesión, una trampa psicológica del protagonista.

### Legado

Hitchcock inventó el lenguaje del thriller moderno. Nolan, De Palma, Fincher: todos son sus deudores.`,
    quiz: [
      {
        id: 'cine-003-q1',
        type: 'multiple',
        question: '¿Cómo define Hitchcock el suspenso frente a la sorpresa?',
        options: ['Son lo mismo', 'El suspenso ocurre cuando el espectador sabe algo que los personajes no saben', 'La sorpresa dura más que el suspenso', 'El suspenso requiere música dramática'],
        correctAnswer: 1,
        explanation: 'Darle al espectador información que los personajes no tienen genera tensión sostenida.',
      },
      {
        id: 'cine-003-q2',
        type: 'multiple',
        question: '¿Qué es el "MacGuffin"?',
        options: ['Un personaje secundario', 'Un objeto o meta que impulsa la trama pero cuyo contenido real no importa', 'Una técnica de iluminación', 'Un tipo de final sorpresa'],
        correctAnswer: 1,
        explanation: 'El MacGuffin es el pretexto narrativo: lo que todos quieren, sin importar qué sea.',
      },
      {
        id: 'cine-003-q3',
        type: 'truefalse',
        question: '¿Hitchcock ganó varios Oscars al Mejor Director?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Paradójicamente, nunca ganó el Oscar al Mejor Director, aunque sí recibió el Irving G. Thalberg Memorial Award.',
      },
      {
        id: 'cine-003-q4',
        type: 'multiple',
        question: '¿Cuál es una película emblemática de Hitchcock?',
        options: ['Ciudadano Kane', 'Psicosis', 'El Padrino', 'Casablanca'],
        correctAnswer: 1,
        explanation: 'Psicosis (1960) es una de sus obras más influyentes, pionera del thriller psicológico moderno.',
      },
    ],
  },
  {
    id: 'cine-004',
    title: 'El neorrealismo italiano: Cuando el cine tocó la realidad',
    emoji: '🇮🇹',
    category: 'Cine',
    duration: 4,
    difficulty: 'avanzado',
    tags: ['neorrealismo', 'cine italiano', 'Rossellini', 'De Sica'],
    createdAt: '2025-01-01',
    content: `## Cine entre las ruinas

Al terminar la Segunda Guerra Mundial, Italia estaba destruida — física y moralmente. Un grupo de cineastas respondió con algo nuevo: filmar la realidad tal cual era, sin estudios ni actores profesionales.

### Qué fue el neorrealismo

El neorrealismo italiano (1945-1955) fue un movimiento cinematográfico que propuso:
- **Exteriores reales** en lugar de decorados.
- **Actores no profesionales** mezclados con actores.
- **Temas sociales**: desempleo, miseria, supervivencia.
- **Narración abierta**: sin finales felices forzados.

### Las obras clave

- **Roma ciudad abierta** (Rossellini, 1945): filmada durante la ocupación alemana.
- **Ladrón de bicicletas** (De Sica, 1948): un obrero pierde su bicicleta, que necesita para trabajar. Simple, devastador.
- **La tierra tiembla** (Visconti, 1948): pescadores sicilianos reales como protagonistas.

### Por qué importa

El neorrealismo demostró que el cine podía ser una forma de **testimonio social**, no sólo entretenimiento. Influyó sobre la Nueva Ola francesa, el cine latinoamericano de los 60-70, Scorsese, Ken Loach.

Hoy, el cine iraní, el cine social latinoamericano y el trabajo de directores como los hermanos Dardenne siguen esa herencia.`,
    quiz: [
      {
        id: 'cine-004-q1',
        type: 'multiple',
        question: '¿En qué contexto histórico nació el neorrealismo?',
        options: ['La Belle Époque italiana', 'La posguerra italiana, con el país devastado material y moralmente', 'El fascismo en su apogeo', 'La prosperidad de los años 60'],
        correctAnswer: 1,
        explanation: 'El neorrealismo respondió a la destrucción y la crisis de identidad de la Italia de posguerra.',
      },
      {
        id: 'cine-004-q2',
        type: 'truefalse',
        question: '¿Los neorrealistas preferían actores profesionales en estudios?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Preferían exteriores reales y actores no profesionales para lograr autenticidad.',
      },
      {
        id: 'cine-004-q3',
        type: 'multiple',
        question: '¿De qué trata "Ladrón de bicicletas"?',
        options: ['Un policía persiguiendo criminales', 'Un obrero que pierde la bicicleta con la que trabaja', 'Una historia de amor en Roma', 'Un niño que aprende a andar en bici'],
        correctAnswer: 1,
        explanation: 'Es un drama minimalista sobre la desesperación de un obrero ante la pérdida de su herramienta de trabajo.',
      },
      {
        id: 'cine-004-q4',
        type: 'multiple',
        question: '¿Qué cine contemporáneo hereda el espíritu del neorrealismo?',
        options: ['Las superproducciones de Marvel', 'El cine social de los hermanos Dardenne y Ken Loach', 'El cine de animación japonés', 'Los musicales de Hollywood'],
        correctAnswer: 1,
        explanation: 'Directores como los Dardenne (Bélgica) y Loach (UK) siguen filmando realidad social sin artificios.',
      },
    ],
  },
  {
    id: 'cine-005',
    title: 'Pixar: Cómo se hacen las películas animadas por computadora',
    emoji: '🤖',
    category: 'Cine',
    duration: 3,
    difficulty: 'principiante',
    tags: ['Pixar', 'animación', 'CGI', 'storytelling'],
    createdAt: '2025-01-01',
    content: `## La revolución silenciosa

Cuando **Toy Story** se estrenó en 1995, fue la primera película de animación completamente generada por computadora. Veintitantos años después, es difícil imaginar el cine animado sin CGI.

### Cómo se hace una película de Pixar

**1. Historia**: Pixar empieza siempre por la historia. Tienen un proceso de revisión brutal ("story trust") donde la película se reescribe decenas de veces.

**2. Diseño de personajes y mundo**: equipos de artistas definen cada personaje, su paleta de color, su estilo de movimiento.

**3. Modelado 3D**: los artistas digitales construyen cada personaje y objeto en el espacio tridimensional.

**4. Rigging y animación**: los animadores dan vida a los modelos, fotograma a fotograma. Un animador profesional puede hacer 3-4 segundos buenos por semana.

**5. Iluminación**: se define la fuente de luz de cada escena. Es decisivo para la emoción.

**6. Renderizado**: las computadoras calculan la imagen final. Una escena compleja puede tardar horas por fotograma.

### El secreto de Pixar

Según sus propios creativos: las mejores películas de Pixar funcionan porque hablan de algo universalmente humano (pérdida, miedo, identidad) a través de personajes simples. Los niños ven la aventura; los adultos ven la metáfora.

### Regla del 22 de Emma Coats (Pixar)

"Podés excusar cualquier cosa si la historia avanza. Pero si la historia se detiene, ningún efecto visual sirve."`,
    quiz: [
      {
        id: 'cine-005-q1',
        type: 'multiple',
        question: '¿Cuál fue la primera película completamente animada por computadora?',
        options: ['Shrek', 'Toy Story', 'El rey león', 'Bambi'],
        correctAnswer: 1,
        explanation: 'Toy Story (1995) fue la primera película de animación 100% CGI de largo metraje.',
      },
      {
        id: 'cine-005-q2',
        type: 'multiple',
        question: '¿Cuánto puede tardar un buen animador en producir material terminado?',
        options: ['10 minutos por segundo', '3-4 segundos por semana', '1 hora por fotograma', 'Un minuto por día'],
        correctAnswer: 1,
        explanation: 'La animación de calidad es lentísima: semanas de trabajo para pocos segundos de pantalla.',
      },
      {
        id: 'cine-005-q3',
        type: 'truefalse',
        question: '¿Pixar empieza el proceso por los efectos visuales?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Empieza siempre por la historia, que se revisa y reescribe muchas veces antes de entrar en producción.',
      },
      {
        id: 'cine-005-q4',
        type: 'multiple',
        question: '¿Por qué las películas de Pixar funcionan para adultos y niños?',
        options: ['Porque tienen dos idiomas', 'Porque trabajan temas humanos universales en capas que cada edad lee distinto', 'Porque son muy largas', 'Porque usan actores famosos'],
        correctAnswer: 1,
        explanation: 'La superficie es la aventura para los niños; la metáfora sobre pérdida, miedo o identidad es para los adultos.',
      },
    ],
  },
  {
    id: 'cine-006',
    title: 'El Método Stanislavski: Cómo actúan los grandes actores',
    emoji: '🎭',
    category: 'Cine',
    duration: 3,
    difficulty: 'intermedio',
    tags: ['actuación', 'Stanislavski', 'método'],
    createdAt: '2025-01-01',
    content: `## Antes de Stanislavski

Hasta el siglo XIX, la actuación teatral era declarativa: el actor anunciaba sus emociones con gestos grandes y voz proyectada al fondo del teatro. Era convencional, no psicológico.

### La revolución de Stanislavski

**Konstantin Stanislavski** (1863-1938) creó el primer sistema de actuación basado en la psicología interior del personaje. Su pregunta central: ¿cómo hace el actor para sentir algo real cada noche?

### Los pilares del método

- **"Si mágico"**: el actor se pregunta "¿qué haría yo si estuviera en esta situación?". No imita, se imagina de verdad.
- **Memoria emocional**: usar recuerdos propios para activar emociones genuinas en escena.
- **Objetivos y obstáculos**: cada personaje quiere algo; hay algo que se lo impide. La tensión dramática sale de eso.
- **Acción física**: las emociones siguen a las acciones físicas, no al revés. Empezá a hacer, el sentir viene.

### La versión americana: "El Método"

Lee Strasberg radicalizó las ideas de Stanislavski en el Actor's Studio. Actores como **Marlon Brando**, **Al Pacino** y **Dustin Hoffman** se formaron allí. Famoso por la anécdota de Hoffman que llegó exhausto al set de Maratón de la Muerte; Olivier le dijo: "¿Por qué no prueba actuar?"

### Hoy

La mayoría de los actores de cine y teatro usan variaciones del método, conscientemente o no. Es el lenguaje base de la actuación contemporánea.`,
    quiz: [
      {
        id: 'cine-006-q1',
        type: 'multiple',
        question: '¿Qué pregunta central propone Stanislavski al actor?',
        options: ['¿Cómo me muevo en el escenario?', '¿Qué haría yo si estuviera realmente en esta situación?', '¿Cómo proyecto la voz?', '¿Qué dice el guion exactamente?'],
        correctAnswer: 1,
        explanation: 'El "si mágico" pide al actor que se imagine genuinamente en la situación del personaje.',
      },
      {
        id: 'cine-006-q2',
        type: 'truefalse',
        question: '¿La "memoria emocional" implica usar recuerdos propios para generar emoción en escena?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. El actor conecta con vivencias propias para activar emociones auténticas.',
      },
      {
        id: 'cine-006-q3',
        type: 'multiple',
        question: '¿Qué institución radicalizó el método en EE.UU.?',
        options: ['La Sorbona', "El Actor's Studio", 'Broadway', 'La Academia de Hollywood'],
        correctAnswer: 1,
        explanation: "Lee Strasberg dirigió el Actor's Studio donde se formaron Brando, Pacino y muchos más.",
      },
      {
        id: 'cine-006-q4',
        type: 'multiple',
        question: '¿Qué dice Stanislavski sobre la relación entre acción y emoción?',
        options: ['La emoción debe venir primero', 'Las emociones siguen a las acciones físicas: empezá a actuar y el sentir llegará', 'No importa la emoción real', 'La emoción debe fingirse'],
        correctAnswer: 1,
        explanation: 'Uno de sus hallazgos: hacer físicamente algo dispara la emoción correspondiente.',
      },
    ],
  },
  {
    id: 'cine-007',
    title: 'Kubrick: El director que lo controlaba todo',
    emoji: '🔭',
    category: 'Cine',
    duration: 4,
    difficulty: 'avanzado',
    tags: ['Kubrick', 'cine', 'perfeccionismo'],
    createdAt: '2025-01-01',
    content: `## El perfeccionismo como método

**Stanley Kubrick** (1928-1999) dirigió sólo 13 largometrajes en 46 años. Cada uno es un experimento de género, cada uno redefinió lo que el cine podía hacer. Era conocido por su control total: escribía, fotografiaba, editaba, supervisaba la distribución.

### La gama de géneros

El cine de Kubrick no repite ningún género:
- **Espartaco** (1960): épico histórico
- **Lolita** (1962): drama literario
- **¿Teléfono rojo? Volamos hacia Moscú** (1964): sátira política
- **2001: Una odisea del espacio** (1968): ciencia ficción filosófica
- **La naranja mecánica** (1971): distopía violenta
- **El resplandor** (1980): terror psicológico
- **Full Metal Jacket** (1987): bélica
- **Eyes Wide Shut** (1999): drama erótico-existencial

### Las takes infinitas

Kubrick era famoso por hacer decenas (a veces centenas) de takes de la misma escena. Actores como Jack Nicholson y Shelley Duvall describieron el proceso como agotador y transformador.

### Lo visual como lenguaje

Kubrick vino de la fotografía. Cada encuadre es una imagen compuesta con la misma atención que una fotografía artística. La **simetría**, los **travellings lentos**, los **close-ups perturbadores** son su firma.

### Legado

Hay pocos directores con su coherencia artística y su rango. Influenció a prácticamente todo el cine de autor de las décadas siguientes.`,
    quiz: [
      {
        id: 'cine-007-q1',
        type: 'multiple',
        question: '¿Cuántos largometrajes dirigió Kubrick en su carrera?',
        options: ['Más de 50', '13 en 46 años', '5 en 20 años', '30 en su etapa madura'],
        correctAnswer: 1,
        explanation: 'Kubrick fue un director de producción lenta y cuidadosa: 13 películas a lo largo de décadas.',
      },
      {
        id: 'cine-007-q2',
        type: 'truefalse',
        question: '¿Kubrick se especializó en un único género cinematográfico?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Exploró épica, sátira, ciencia ficción, terror, bélica y drama en profundidad distinta.',
      },
      {
        id: 'cine-007-q3',
        type: 'multiple',
        question: '¿De qué disciplina venía Kubrick antes del cine?',
        options: ['La pintura', 'La fotografía', 'El teatro', 'La música'],
        correctAnswer: 1,
        explanation: 'Empezó como fotógrafo para revistas, lo que marcó su sensibilidad visual y de encuadre.',
      },
      {
        id: 'cine-007-q4',
        type: 'multiple',
        question: '¿Por qué eran exhaustivos los rodajes de Kubrick?',
        options: ['Porque usaba muchos actores', 'Por sus decenas o centenas de takes de la misma escena buscando la perfección', 'Porque filmaba en exteriores peligrosos', 'Porque el equipo era pequeño'],
        correctAnswer: 1,
        explanation: 'Su perfeccionismo producía rodajes agotadores pero imágenes definitivas.',
      },
    ],
  },

  // ─── LITERATURA (lit-002 → lit-005) ─────────────────────────────
  {
    id: 'lit-002',
    title: 'Shakespeare: Por qué todavía importa 400 años después',
    emoji: '📜',
    category: 'Literatura',
    duration: 3,
    difficulty: 'principiante',
    tags: ['Shakespeare', 'teatro', 'literatura'],
    createdAt: '2025-01-01',
    content: `## El escritor más citado del mundo

**William Shakespeare** (1564-1616) escribió 37 obras de teatro y 154 sonetos. Cuatrocientos años después, sus obras se representan cada año en casi todos los países del mundo. ¿Por qué?

### Lo que inventó (o popularizó)

- Más de **1.700 palabras** del inglés moderno fueron usadas por primera vez por él (lonely, generous, bedroom, lonely, uncomfortable…).
- Formas dramáticas que mezclan tragedia y comedia dentro de la misma obra.
- Personajes psicológicamente complejos y contradictorios, no arquetipos planos.

### Las grandes obras

- **Hamlet**: el príncipe que duda. La pregunta del ser.
- **Otelo**: los celos que destruyen.
- **Macbeth**: la ambición que corrompe.
- **El rey Lear**: el poder y la vejez.
- **Romeo y Julieta**: el amor imposible.
- **El mercader de Venecia**: justicia y misericordia.

### Por qué sigue hablando

Sus temas son perennes: el poder, los celos, la traición, el amor, la muerte, la identidad. Hamlet preguntando "ser o no ser" no habla del siglo XVII; habla de cualquier momento en que alguien duda si seguir.

### Las teorías

Hay quienes dudan de que "un guante de Stratford" haya podido escribir textos de tanta erudición. Candidatos alternativos: Francis Bacon, el conde de Oxford. La academia mayoritaria sigue con Shakespeare, pero el debate es apasionante.`,
    quiz: [
      {
        id: 'lit-002-q1',
        type: 'multiple',
        question: '¿Cuántas obras de teatro escribió Shakespeare?',
        options: ['15', '37', '52', '10'],
        correctAnswer: 1,
        explanation: 'Se le atribuyen 37 obras de teatro y 154 sonetos.',
      },
      {
        id: 'lit-002-q2',
        type: 'truefalse',
        question: '¿Shakespeare introdujo más de mil palabras nuevas al inglés?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Se le atribuye el primer uso de más de 1.700 palabras del inglés moderno.',
      },
      {
        id: 'lit-002-q3',
        type: 'multiple',
        question: '¿Cuál es el tema central de Otelo?',
        options: ['La ambición política', 'Los celos que llevan a la destrucción', 'El amor adolescente', 'El poder y la vejez'],
        correctAnswer: 1,
        explanation: 'Otelo es el drama de los celos manipulados por Yago hasta la tragedia.',
      },
      {
        id: 'lit-002-q4',
        type: 'multiple',
        question: '¿Por qué las obras de Shakespeare siguen siendo representadas?',
        options: ['Porque son obligatorias por ley', 'Porque sus temas (poder, celos, amor, muerte, identidad) son universales', 'Porque son más baratas de producir', 'Porque no hay dramaturgos nuevos'],
        correctAnswer: 1,
        explanation: 'La universalidad y la profundidad psicológica de sus personajes les dan vigencia permanente.',
      },
    ],
  },
  {
    id: 'lit-003',
    title: 'El realismo mágico: García Márquez y la realidad que se dobla',
    emoji: '🦋',
    category: 'Literatura',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['García Márquez', 'realismo mágico', 'literatura latinoamericana'],
    createdAt: '2025-01-01',
    content: `## La realidad latinoamericana es otra

En 1967 se publicó **Cien años de soledad** de **Gabriel García Márquez**. En el primer capítulo, un personaje que murió en la guerra aparece de visita. Nadie lo trata como algo extraordinario.

Eso es el **realismo mágico**: lo sobrenatural conviviendo con lo cotidiano sin que nadie se sorprenda.

### Qué lo define

- **Lo mágico como normal**: fantasmas, levitaciones, lluvias de mariposas amarillas son narradas con la misma prosa naturalista que un almuerzo.
- **Fundamento cultural**: en muchas culturas latinoamericanas (indígenas, africanas, caribeñas), lo sobrenatural no está separado de la vida. El realismo mágico toma eso en serio.
- **Crítica velada**: a veces lo mágico es metáfora. La "plaga del olvido" en Macondo es el colonialismo, la represión, la memoria borrada.

### Los autores

García Márquez, **Isabel Allende** (La casa de los espíritus), **Juan Rulfo** (Pedro Páramo, precursor), **Günter Grass** (El tambor de hojalata, versión europea).

### La influencia

El boom latinoamericano de los 60-70 colocó la literatura en español en el centro mundial. García Márquez recibió el Nobel en 1982.

### Para reflexionar

El realismo mágico dice algo sobre la epistemología: hay culturas donde la frontera entre lo natural y lo sobrenatural es distinta. La literatura puede explorar eso sin pedir disculpas.`,
    quiz: [
      {
        id: 'lit-003-q1',
        type: 'multiple',
        question: '¿Qué caracteriza al realismo mágico?',
        options: ['Describir sólo lo sobrenatural', 'Lo mágico convive con lo cotidiano sin que nadie se sorprenda', 'Negar la realidad', 'Describir sólo lo realista sin fantasía'],
        correctAnswer: 1,
        explanation: 'El realismo mágico integra lo sobrenatural en la realidad cotidiana con normalidad narrativa.',
      },
      {
        id: 'lit-003-q2',
        type: 'truefalse',
        question: '¿García Márquez ganó el Premio Nobel de Literatura?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Lo recibió en 1982.',
      },
      {
        id: 'lit-003-q3',
        type: 'multiple',
        question: '¿Qué puede representar lo mágico en estas obras?',
        options: ['Sólo entretenimiento infantil', 'Metáforas de procesos históricos como represión o colonialismo', 'Errores del autor', 'Sólo tradiciones religiosas'],
        correctAnswer: 1,
        explanation: 'Lo sobrenatural a menudo codifica crítica política o histórica difícil de expresar directamente.',
      },
      {
        id: 'lit-003-q4',
        type: 'multiple',
        question: '¿Qué obra es precursora del realismo mágico latinoamericano?',
        options: ['Don Quijote', 'Pedro Páramo de Juan Rulfo', 'La Ilíada', 'El Principito'],
        correctAnswer: 1,
        explanation: 'Pedro Páramo (1955) de Rulfo anticipó el estilo que García Márquez llevaría a su máxima expresión.',
      },
    ],
  },
  {
    id: 'lit-004',
    title: '1984 de Orwell: La novela que predijo el mundo digital',
    emoji: '👁️',
    category: 'Literatura',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['Orwell', '1984', 'distopía', 'vigilancia'],
    createdAt: '2025-01-01',
    content: `## Escrita en 1949, ambientada en el futuro

**George Orwell** terminó 1984 en 1948, enfermo de tuberculosis y pesimista sobre el rumbo político del siglo. Invirtió los dos últimos dígitos del año para dar título a su distopía. No podía imaginar que describe tan bien ciertos aspectos del siglo XXI.

### El mundo de Oceanía

El Partido lo controla todo:
- **El Gran Hermano**: líder omnipresente, quizás ficticio.
- **La Telepantalla**: te vigila en casa, en el trabajo, en todas partes.
- **La Neolengua**: un idioma diseñado para hacer ciertos pensamientos imposibles.
- **La policía del pensamiento**: persigue el "crimen del pensamiento".
- **La doble verdad (doublethink)**: creer dos cosas contradictorias al mismo tiempo sin notarlo.

### Por qué habla de hoy

- **Vigilancia masiva**: Snowden reveló en 2013 que la NSA y el GCHQ espiaban comunicaciones de millones. Las cámaras y el reconocimiento facial crecen.
- **Redes sociales**: el historial de todo lo que decís existe y puede usarse contra vos.
- **Desinformación institucional**: el concepto de "noticias falsas" como herramienta política.
- **Lenguaje que moldea pensamiento**: la idea de la Neolengua sigue siendo un tema de lingüística cognitiva.

### Las frases que entraron al idioma

"El Gran Hermano te vigila", "la guerra es la paz", "doublethink", "Orwelliano" como adjetivo del abuso autoritario.`,
    quiz: [
      {
        id: 'lit-004-q1',
        type: 'multiple',
        question: '¿Qué es la "Neolengua" en 1984?',
        options: ['Un idioma extranjero', 'Un idioma diseñado para hacer imposibles ciertos pensamientos', 'El idioma del pueblo', 'Una lengua antigua'],
        correctAnswer: 1,
        explanation: 'La Neolengua es la herramienta de control más sofisticada: al reducir el lenguaje, elimina la capacidad de conceptualizar ciertos pensamientos.',
      },
      {
        id: 'lit-004-q2',
        type: 'truefalse',
        question: '¿Orwell escribió 1984 en los años 70?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La terminó en 1948 (de ahí el nombre, invirtiendo los dígitos).',
      },
      {
        id: 'lit-004-q3',
        type: 'multiple',
        question: '¿Qué es el "doublethink"?',
        options: ['Pensar dos veces antes de actuar', 'Creer dos ideas contradictorias simultáneamente sin percibir la contradicción', 'Tener dos opiniones políticas', 'Un examen de consciencia'],
        correctAnswer: 1,
        explanation: 'El doublethink es la capacidad de sostener creencias contradictorias sin reconocer la tensión entre ellas.',
      },
      {
        id: 'lit-004-q4',
        type: 'multiple',
        question: '¿Qué evento real del siglo XXI resonó especialmente con el libro?',
        options: ['La caída de la URSS', 'Las revelaciones de Snowden sobre vigilancia masiva de la NSA', 'La crisis financiera de 2008', 'La invención de internet'],
        correctAnswer: 1,
        explanation: 'Las revelaciones de Snowden en 2013 sobre espionaje masivo refrescaron la vigencia de la novela.',
      },
    ],
  },
  {
    id: 'lit-005',
    title: 'Los mitos griegos y lo que nos dicen de nosotros mismos',
    emoji: '⚡',
    category: 'Literatura',
    duration: 3,
    difficulty: 'principiante',
    tags: ['mitología', 'Grecia', 'psicología'],
    createdAt: '2025-01-01',
    content: `## Historias de hace 3.000 años que no se van

Los griegos no tenían Netflix pero tenían algo igual de adictivo: mitos. Historias de dioses, héroes, monstruos y tragedias que respondían las preguntas que siempre nos hacemos.

### Qué son los mitos

No son simplemente "cuentos inventados". Son el intento de una cultura de **explicar el mundo, definir valores y procesar emociones** que no tienen otra salida.

¿Por qué hay guerra? Troya. ¿Por qué el ser humano sufre? Prometeo robo el fuego. ¿Qué pasa si te da demasiado poder? Midas, Ícaro. ¿Qué es la obsesión? Sísifo empujando la roca.

### Los arquetipos que viven hoy

- **Narciso**: la autoabsorción destructiva. Hoy tenemos el término clínico.
- **Edipo**: el conflicto con los padres que Freud convirtió en sistema.
- **El talón de Aquiles**: la vulnerabilidad oculta.
- **La caja de Pandora**: la curiosidad que desata el caos.
- **El laberinto de Dédalo**: el problema que atrapa a quien lo construyó.

### Psicología disfrazada

Carl Jung propuso que los mitos expresan **arquetipos del inconsciente colectivo**: estructuras psíquicas universales compartidas por todos los humanos. El héroe, la sombra, el trickster.

### Por qué no mueren

Porque hablan de lo que no cambia: el deseo de poder, el miedo a la muerte, el amor que destruye, la soberbia que cae. Eso no tiene fecha de vencimiento.`,
    quiz: [
      {
        id: 'lit-005-q1',
        type: 'multiple',
        question: '¿Qué función cumplían los mitos en la cultura griega?',
        options: ['Sólo entretener', 'Explicar el mundo, definir valores y procesar emociones colectivas', 'Registrar leyes', 'Describir geografía'],
        correctAnswer: 1,
        explanation: 'Los mitos eran tecnología cultural para procesar lo que no se podía explicar de otro modo.',
      },
      {
        id: 'lit-005-q2',
        type: 'multiple',
        question: '¿Qué mito representa la soberbia que termina en caída?',
        options: ['Narciso', 'Ícaro', 'Sísifo', 'Prometeo'],
        correctAnswer: 1,
        explanation: 'Ícaro voló demasiado cerca del sol con alas de cera. El mito de la soberbia y sus consecuencias.',
      },
      {
        id: 'lit-005-q3',
        type: 'truefalse',
        question: '¿Jung creía que los mitos expresan estructuras universales del inconsciente?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Jung llamó "arquetipos" a esas estructuras: patrones universales que aparecen en mitos de todas las culturas.',
      },
      {
        id: 'lit-005-q4',
        type: 'multiple',
        question: '¿Qué mito da nombre a un término psicológico relacionado con el conflicto parental?',
        options: ['Narciso', 'Edipo', 'Aquiles', 'Sísifo'],
        correctAnswer: 1,
        explanation: 'Freud tomó el mito de Edipo para nombrar el complejo que describe el conflicto emocional del niño con sus padres.',
      },
    ],
  },

  // ─── GEOGRAFÍA (geo-003 → geo-004) ──────────────────────────────
  {
    id: 'geo-003',
    title: 'El Amazonas: El pulmón del planeta en peligro',
    emoji: '🌳',
    category: 'Geografía',
    duration: 3,
    difficulty: 'principiante',
    tags: ['Amazonas', 'deforestación', 'biodiversidad'],
    createdAt: '2025-01-01',
    content: `## El bosque más grande del mundo

La cuenca amazónica cubre aproximadamente **7 millones de km²** repartidos entre nueve países (Brasil tiene el 60%). Contiene el 10% de toda la biodiversidad conocida del planeta.

### Por qué es "el pulmón del planeta"

La selva amazónica:
- Absorbe enormes cantidades de **CO₂** y produce oxígeno.
- Genera su propia lluvia: los árboles "transpiran" y crean los llamados **ríos voladores** — corrientes de humedad que riegan el continente.
- Almacena carbono que, si se libera, aceleraría el cambio climático.

### La crisis

En los últimos 50 años se deforestó más del **20% de la selva original**. Las causas:
- Ganadería extensiva y agricultura (soja, principalmente para alimentar ganado de exportación).
- Minería ilegal, especialmente de oro, que contamina ríos con mercurio.
- Infraestructura (rutas, represas).
- Incendios, algunos deliberados para limpiar tierra.

### El punto de no retorno

Científicos alertan sobre un **punto de inflexión**: si la deforestación supera el 25-30%, el sistema deja de generar lluvia suficiente para sostenerse. Se "sabanizaría" — perdería su capacidad de regenerarse.

### Lo que está en juego

No sólo biodiversidad local: el Amazonas regula el clima de Sudamérica y contribuye al ciclo hidrológico global. Su colapso no sería sólo un problema brasileño.`,
    quiz: [
      {
        id: 'geo-003-q1',
        type: 'multiple',
        question: '¿Qué porcentaje de la biodiversidad mundial alberga la Amazonia?',
        options: ['1%', '10%', '50%', '25%'],
        correctAnswer: 1,
        explanation: 'Se estima que la Amazonia contiene alrededor del 10% de la biodiversidad conocida del planeta.',
      },
      {
        id: 'geo-003-q2',
        type: 'truefalse',
        question: '¿La selva amazónica genera su propia lluvia a través de los llamados "ríos voladores"?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. La transpiración de los árboles crea corrientes de humedad que riegan regiones lejanas.',
      },
      {
        id: 'geo-003-q3',
        type: 'multiple',
        question: '¿Cuál es la principal causa de deforestación en la Amazonia?',
        options: ['El turismo', 'La ganadería extensiva y la agricultura de exportación', 'La construcción de viviendas', 'El ecoturismo'],
        correctAnswer: 1,
        explanation: 'La expansión ganadera y el cultivo de soja son los motores principales de la deforestación.',
      },
      {
        id: 'geo-003-q4',
        type: 'multiple',
        question: '¿Qué pasaría si la deforestación supera el punto de no retorno?',
        options: ['La selva se regeneraría sola', 'El sistema dejaría de generar lluvia suficiente y se "sabanizaría"', 'Sólo afectaría a las especies locales', 'El clima mundial mejoraría'],
        correctAnswer: 1,
        explanation: 'Sin suficiente cobertura forestal, el ciclo del agua se rompería y la selva podría convertirse en sabana.',
      },
    ],
  },
  {
    id: 'geo-004',
    title: 'Japón: Por qué es el país más peculiar del mundo',
    emoji: '⛩️',
    category: 'Geografía',
    duration: 3,
    difficulty: 'principiante',
    tags: ['Japón', 'cultura', 'tecnología', 'tradición'],
    createdAt: '2025-01-01',
    content: `## La contradicción hecha país

Japón tiene máquinas expendedoras en la cima de montañas remotas. Tiene monjes budistas que usan iPhone. Tiene ciudades ultramodernas junto a templos de 1.000 años. Es el país de los mangas, los robots y también de las ceremonias del té que no cambiaron en siglos.

### La geografía

Un archipiélago de 6.852 islas, cuatro principales. Es una de las zonas sísmicas más activas del mundo: tiene unos 1.500 temblores por año. Ha aprendido a construir en consecuencia.

### La economía

Tercera economía del mundo durante décadas (hoy cuarta o quinta según el año). Su reconstrucción posguerra fue uno de los milagros económicos del siglo XX, centrado en la manufactura, luego en la tecnología.

### Conceptos culturales que no tienen equivalente

- **Ikigai**: la razón de ser, el cruce entre lo que amás, en lo que sos bueno, lo que el mundo necesita y lo que te pueden pagar.
- **Wabi-sabi**: la belleza en lo imperfecto, lo efímero, lo incompleto.
- **Kaizen**: mejora continua, incremental, constante.
- **Honne y tatemae**: lo que uno realmente piensa (honne) versus lo que muestra socialmente (tatemae).

### El problema demográfico

Japón tiene una de las poblaciones más envejecidas del mundo y una tasa de natalidad muy baja. Tiene más pañales de adultos vendidos que de bebés. Es un experimento en tiempo real de qué pasa cuando una sociedad envejece rápido.`,
    quiz: [
      {
        id: 'geo-004-q1',
        type: 'multiple',
        question: '¿Qué significa el concepto japonés "ikigai"?',
        options: ['Una forma de cocina', 'La razón de ser: el cruce entre pasión, talento, necesidad y remuneración', 'El arte del jardín', 'Un ritual de meditación'],
        correctAnswer: 1,
        explanation: 'Ikigai es el concepto que describe el propósito de vida como intersección de cuatro elementos.',
      },
      {
        id: 'geo-004-q2',
        type: 'truefalse',
        question: '¿Japón es una de las zonas sísmicas más activas del planeta?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Tiene alrededor de 1.500 temblores por año y ha desarrollado arquitectura antisísmica avanzada.',
      },
      {
        id: 'geo-004-q3',
        type: 'multiple',
        question: '¿Qué describe el concepto "wabi-sabi"?',
        options: ['Un plato tradicional', 'La belleza en lo imperfecto, efímero e incompleto', 'Una técnica marcial', 'Un festival de primavera'],
        correctAnswer: 1,
        explanation: 'Wabi-sabi es la estética de la imperfección: encontrar belleza en lo transitorio y lo inacabado.',
      },
      {
        id: 'geo-004-q4',
        type: 'multiple',
        question: '¿Cuál es uno de los desafíos demográficos más serios de Japón?',
        options: ['Superpoblación', 'Envejecimiento acelerado y baja natalidad', 'Alta inmigración sin integrar', 'Falta de educación'],
        correctAnswer: 1,
        explanation: 'Japón tiene una de las poblaciones más envejecidas del mundo, con más adultos mayores que niños.',
      },
    ],
  },

  // ─── FILOSOFÍA (filo-003 → filo-006) ────────────────────────────
  {
    id: 'filo-003',
    title: 'Platón y la alegoría de la caverna: ¿Y si todo lo que ves es mentira?',
    emoji: '🕳️',
    category: 'Filosofía',
    duration: 4,
    difficulty: 'principiante',
    tags: ['platón', 'caverna', 'realidad', 'conocimiento'],
    createdAt: '2025-01-01',
    content: `## La alegoría de la caverna

Imaginá unos prisioneros encadenados desde la infancia en una caverna, mirando una pared. Detrás de ellos arde un fuego, y entre el fuego y los prisioneros pasan objetos que proyectan sombras. Esas **sombras** son lo único que conocen. Para ellos, son la realidad.

### El prisionero que escapa

**Platón** propone: ¿qué pasa si uno se libera y sale? Primero la luz lo enceguece. Luego ve los objetos reales. Finalmente, el sol. Cuando vuelve a contar lo que vio, los demás no le creen — incluso lo amenazan.

### Qué quiso decir

- Las **sombras** = lo que percibimos por los sentidos.
- El **mundo exterior** = el mundo de las ideas, lo verdadero.
- El **filósofo** = quien se atreve a cuestionar lo evidente.

### Por qué sigue importando

Vivís en cavernas modernas: redes sociales, algoritmos, opiniones heredadas. La pregunta de Platón sigue viva: **¿estás viendo la realidad o sombras?**`,
    quiz: [
      {
        id: 'filo-003-q1',
        type: 'multiple',
        question: '¿Qué representan las sombras en la alegoría?',
        options: ['Los sueños', 'Lo que percibimos por los sentidos', 'El pasado', 'La imaginación'],
        correctAnswer: 1,
        explanation: 'Las sombras representan el mundo sensible: lo que captamos por los sentidos sin cuestionarlo, una imagen incompleta de lo real.',
      },
      {
        id: 'filo-003-q2',
        type: 'truefalse',
        question: '¿Los demás prisioneros reciben con entusiasmo al que regresa con la verdad?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Lo rechazan e incluso lo amenazan. Platón usa esto para mostrar la resistencia humana a abandonar las certezas heredadas.',
      },
      {
        id: 'filo-003-q3',
        type: 'multiple',
        question: '¿Qué simboliza el sol fuera de la caverna?',
        options: ['La muerte', 'La idea suprema del bien y la verdad', 'El tiempo', 'El cuerpo'],
        correctAnswer: 1,
        explanation: 'El sol es la idea del Bien: la fuente última de inteligibilidad. Iluminar todo lo demás depende de él.',
      },
      {
        id: 'filo-003-q4',
        type: 'multiple',
        question: '¿Qué papel juega el filósofo en esta alegoría?',
        options: ['El que enciende el fuego', 'El que escapa, ve la verdad y vuelve a contarla', 'El carcelero', 'Un prisionero más'],
        correctAnswer: 1,
        explanation: 'El filósofo es el que se libera de las cadenas, accede al conocimiento verdadero y regresa para tratar de liberar a los demás.',
      },
    ],
  },
  {
    id: 'filo-004',
    title: 'Nietzsche y el superhombre: Más allá del bien y el mal',
    emoji: '🦅',
    category: 'Filosofía',
    duration: 4,
    difficulty: 'avanzado',
    tags: ['nietzsche', 'superhombre', 'moral', 'ética'],
    createdAt: '2025-01-01',
    content: `## Nietzsche y el Übermensch

Friedrich Nietzsche escribió a fines del siglo XIX una de las frases más malinterpretadas de la filosofía: **"Dios ha muerto"**. No celebraba un crimen: diagnosticaba un colapso. Si Dios — entendido como fundamento absoluto de la moral — ya no convence, ¿de dónde sacamos los valores?

### El superhombre (Übermensch)

No es un superhéroe. No es un dictador. Es el ser humano capaz de **crear sus propios valores** en lugar de heredarlos. Para Nietzsche, la mayoría vive bajo una "moral de rebaño": obedece valores que ni siquiera eligió.

### Más allá del bien y el mal

Las dicotomías "bueno/malo" como categorías absolutas son sospechosas. Nietzsche distingue:

- **Moral de esclavos**: humildad, obediencia, resentimiento.
- **Moral de señores**: afirmación, fuerza, creación.

No es una apología de la crueldad: es una crítica a confundir debilidad con virtud.

### El eterno retorno

Vivir como si todo lo que hacés fuera a repetirse infinitas veces. Si esa idea te aplasta, algo estás haciendo mal. Si te entusiasma, estás creando tu vida.`,
    quiz: [
      {
        id: 'filo-004-q1',
        type: 'multiple',
        question: '¿Qué significa la frase "Dios ha muerto" según Nietzsche?',
        options: ['Una celebración del ateísmo', 'El diagnóstico de que el fundamento absoluto de la moral perdió credibilidad', 'Una profecía religiosa', 'Una metáfora sobre la naturaleza'],
        correctAnswer: 1,
        explanation: 'Nietzsche no celebra: diagnostica. Si Dios deja de funcionar como cimiento de los valores, hay que repensar de dónde vienen.',
      },
      {
        id: 'filo-004-q2',
        type: 'truefalse',
        question: '¿El "superhombre" de Nietzsche es un ser de raza superior?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Es una distorsión nazi posterior. Para Nietzsche es alguien capaz de crear sus propios valores, no una categoría racial.',
      },
      {
        id: 'filo-004-q3',
        type: 'multiple',
        question: '¿Qué propone el experimento del "eterno retorno"?',
        options: ['Reencarnar literalmente', 'Vivir como si cada acto fuera a repetirse infinitas veces', 'Repetir rutinas para mejorar', 'Evitar el cambio'],
        correctAnswer: 1,
        explanation: 'Es un test ético: si tu vida actual fuera a repetirse para siempre, ¿la afirmarías o no? Una herramienta para revelar lo que realmente valorás.',
      },
      {
        id: 'filo-004-q4',
        type: 'multiple',
        question: '¿Qué crítica hace Nietzsche a la "moral de rebaño"?',
        options: ['Que es demasiado individualista', 'Que la gente obedece valores que no eligió ni examinó', 'Que es opcional', 'Que es demasiado nueva'],
        correctAnswer: 1,
        explanation: 'Critica la obediencia automática a valores heredados: para él, la salud filosófica empieza por cuestionarlos y crear los propios.',
      },
    ],
  },
  {
    id: 'filo-005',
    title: 'El libre albedrío: ¿Realmente tomás tus propias decisiones?',
    emoji: '🧠',
    category: 'Filosofía',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['libre albedrío', 'determinismo', 'neurociencia'],
    createdAt: '2025-01-01',
    content: `## ¿Sos vos quien decide?

Sentís que elegís: qué comer, qué decir, a quién amar. Pero la pregunta filosófica más incómoda es: **¿es esa elección realmente libre, o es el resultado inevitable de causas anteriores?**

### El determinismo

Toda decisión tiene causas: tu genética, tu infancia, tu cultura, tu estado de ánimo, lo que comiste hoy. Si todas esas causas están dadas, ¿podrías haber elegido otra cosa?

### El experimento de Libet

En los 80, Benjamin Libet midió la actividad cerebral antes de una decisión consciente. Descubrió algo perturbador: **el cerebro inicia la acción cientos de milisegundos antes de que la persona "decida" conscientemente hacerla**. La conciencia llega tarde a la fiesta.

### Compatibilismo

Hay una salida. Filósofos como Daniel Dennett dicen: aunque haya causas, lo que importa es si actuás según tus deseos, sin coacción externa. Esa es la libertad útil — no una libertad mágica sin causas.

### Por qué importa

Justicia, mérito, culpa, responsabilidad: todos los pilares sociales suponen que elegimos. Si no hay libre albedrío puro, ¿cómo deberían cambiar las leyes, la educación, la moral?`,
    quiz: [
      {
        id: 'filo-005-q1',
        type: 'multiple',
        question: '¿Qué descubrió Libet en sus experimentos?',
        options: ['Que el cerebro no influye en las decisiones', 'Que la actividad cerebral precede a la decisión consciente', 'Que las decisiones son completamente azarosas', 'Que dormir mejora las decisiones'],
        correctAnswer: 1,
        explanation: 'Libet midió que la actividad neural que precede a un movimiento aparece antes de la conciencia subjetiva de "haber decidido", lo que cuestiona el rol de la conciencia.',
      },
      {
        id: 'filo-005-q2',
        type: 'truefalse',
        question: '¿El compatibilismo niega la existencia de causas en las decisiones?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Acepta que hay causas, pero define la libertad como actuar según los propios deseos sin coacción externa.',
      },
      {
        id: 'filo-005-q3',
        type: 'multiple',
        question: '¿Qué postura sostiene el determinismo?',
        options: ['Toda elección es totalmente libre', 'Toda elección está condicionada por causas previas', 'Las decisiones son aleatorias', 'No existen las decisiones'],
        correctAnswer: 1,
        explanation: 'El determinismo afirma que cada evento — incluyendo nuestras decisiones — es consecuencia de causas anteriores.',
      },
      {
        id: 'filo-005-q4',
        type: 'multiple',
        question: '¿Por qué es importante el debate sobre el libre albedrío?',
        options: ['Porque define el horario laboral', 'Porque sostiene conceptos como mérito, culpa y responsabilidad', 'Porque resuelve la física cuántica', 'Porque depende del idioma'],
        correctAnswer: 1,
        explanation: 'Casi toda la ética, el derecho y la educación asumen que elegimos. Si esa premisa cambia, sus fundamentos también deben revisarse.',
      },
    ],
  },
  {
    id: 'filo-006',
    title: 'La paradoja de Theseus: ¿Seguís siendo vos si cambiás todo?',
    emoji: '⛵',
    category: 'Filosofía',
    duration: 3,
    difficulty: 'principiante',
    tags: ['identidad', 'theseus', 'paradoja'],
    createdAt: '2025-01-01',
    content: `## El barco de Theseus

Los atenienses conservaban el barco del héroe Theseus en el puerto. Con los años, las tablas se pudrían y eran reemplazadas. Tras décadas, **ninguna tabla original quedaba**. Pregunta: ¿es el mismo barco?

### Y si rebobinamos…

Imaginá que alguien recogió cada tabla descartada y reconstruyó otro barco con ellas. Ahora hay dos. **¿Cuál es el barco de Theseus?**

### Por qué te importa

Tu cuerpo reemplaza casi todas sus células en pocos años. Tus opiniones, gustos y memorias cambian. ¿Sos la misma persona que a los 8 años? Spoiler: probablemente no del todo, y sin embargo decimos que sí.

### Tres respuestas clásicas

- **Continuidad material**: si los componentes son distintos, no es el mismo objeto.
- **Continuidad de forma/función**: si cumple la misma función y mantiene la estructura, sí lo es.
- **Continuidad narrativa**: lo que importa es la historia que conecta los estados sucesivos.

No hay respuesta única. La paradoja muestra que la "identidad" no es algo dado, sino algo que decidimos cómo definir.`,
    quiz: [
      {
        id: 'filo-006-q1',
        type: 'multiple',
        question: '¿Qué pone en cuestión la paradoja de Theseus?',
        options: ['La existencia de Dios', 'Qué hace que un objeto siga siendo el mismo a través del cambio', 'La velocidad de la luz', 'El origen del lenguaje'],
        correctAnswer: 1,
        explanation: 'La paradoja interroga el concepto de identidad: cómo algo puede mantenerse "el mismo" si todos sus componentes cambian.',
      },
      {
        id: 'filo-006-q2',
        type: 'truefalse',
        question: '¿La paradoja tiene una única respuesta correcta aceptada universalmente?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Hay varias respuestas válidas según qué criterio de identidad elijamos: material, formal o narrativo.',
      },
      {
        id: 'filo-006-q3',
        type: 'multiple',
        question: '¿Cuál es un ejemplo cotidiano del problema?',
        options: ['Cambiar las baterías del control remoto', 'Tu propio cuerpo, que renueva sus células sin que dejes de ser "vos"', 'Comprar un libro nuevo', 'Llover en verano'],
        correctAnswer: 1,
        explanation: 'Tus células se renuevan continuamente y, sin embargo, te seguís considerando la misma persona. Es la versión biológica de la paradoja.',
      },
      {
        id: 'filo-006-q4',
        type: 'multiple',
        question: '¿Qué propone la "continuidad narrativa" como criterio de identidad?',
        options: ['Que sólo importa la materia original', 'Que la identidad se sostiene por la historia que conecta los estados sucesivos', 'Que la identidad no existe', 'Que sólo importa el nombre'],
        correctAnswer: 1,
        explanation: 'La continuidad narrativa dice que somos "el mismo" si hay una historia coherente que conecta cómo fuimos con cómo somos.',
      },
    ],
  },

  // ─── CURIOSIDADES (cur-003 → cur-007) ───────────────────────────
  {
    id: 'cur-003',
    title: 'Por qué olvidamos los sueños al despertar',
    emoji: '💤',
    category: 'Curiosidades',
    duration: 2,
    difficulty: 'principiante',
    tags: ['sueño', 'memoria', 'cerebro'],
    createdAt: '2025-01-01',
    content: `## El olvido programado

Soñás cada noche, pero al despertar la mayoría se evapora en segundos. ¿Por qué?

### El problema químico

Durante el sueño REM (cuando soñás), tu cerebro tiene niveles bajísimos de **noradrenalina**, un neurotransmisor crítico para fijar recuerdos. Sin ella, lo que pasa en tu mente no se "graba" en la memoria de largo plazo.

### El problema del paso

Para recordar un sueño tenés que pasar de "dormido" a "despierto" sin perder el contenido. Si te despertás bruscamente o pasás directamente a otra tarea, el recuerdo se borra.

### Cómo recordarlos

- Despertarse lentamente, sin moverse mucho.
- Escribir lo que recordás antes de hacer cualquier otra cosa.
- Repetirlo en voz alta apenas abrís los ojos.

Con práctica, mucha gente logra recordar 1-2 sueños por noche. No es magia: es entrenar la transición.`,
    quiz: [
      {
        id: 'cur-003-q1',
        type: 'multiple',
        question: '¿Por qué cuesta recordar los sueños?',
        options: ['Porque no son reales', 'Porque la noradrenalina, clave para fijar recuerdos, está muy baja en REM', 'Porque dormimos boca arriba', 'Porque no usamos el cerebro al dormir'],
        correctAnswer: 1,
        explanation: 'Sin noradrenalina suficiente, el cerebro no consolida lo soñado en la memoria de largo plazo.',
      },
      {
        id: 'cur-003-q2',
        type: 'truefalse',
        question: '¿Despertarse de golpe ayuda a recordar mejor los sueños?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Un despertar brusco rompe la transición y borra el contenido. Mejor levantarse de a poco y "anclar" el recuerdo.',
      },
      {
        id: 'cur-003-q3',
        type: 'multiple',
        question: '¿Cuál es una técnica eficaz para recordar sueños?',
        options: ['Tomar café antes de dormir', 'Anotarlos apenas te despertás', 'Mirar el celular al despertar', 'Comer azúcar antes de dormir'],
        correctAnswer: 1,
        explanation: 'Anotar el sueño en los primeros segundos atrapa el contenido antes de que se desvanezca. Es la técnica más recomendada.',
      },
      {
        id: 'cur-003-q4',
        type: 'multiple',
        question: '¿En qué fase del sueño ocurren los sueños más vívidos?',
        options: ['Sueño profundo', 'Sueño REM', 'Justo al acostarse', 'Microsueños'],
        correctAnswer: 1,
        explanation: 'La fase REM (rapid eye movement) es la asociada a los sueños narrativos más vívidos.',
      },
    ],
  },
  {
    id: 'cur-004',
    title: 'La paradoja de Fermi: ¿Dónde están todos los extraterrestres?',
    emoji: '👽',
    category: 'Curiosidades',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['fermi', 'aliens', 'universo'],
    createdAt: '2025-01-01',
    content: `## La pregunta del almuerzo

Cuenta la historia que en 1950, durante un almuerzo en Los Álamos, el físico **Enrico Fermi** miró a sus colegas y soltó: **"¿Dónde están todos?"**. Hablaban de extraterrestres.

### El problema

El universo observable tiene unas **200 mil millones de galaxias**. Sólo en la Vía Láctea hay miles de millones de estrellas con planetas. Si la vida inteligente es posible — y nosotros somos prueba de ello — debería haber surgido **muchas veces**, en muchos lugares, hace mucho tiempo.

Una civilización con apenas un millón de años de ventaja podría haber colonizado toda la galaxia. Y sin embargo… **silencio**.

### Posibles respuestas

- **Estamos solos**: la vida inteligente es muchísimo más rara de lo que creemos.
- **El gran filtro**: hay una barrera que casi nadie supera (¿biología compleja? ¿guerra nuclear?).
- **Zoológico cósmico**: nos observan, pero no se contactan.
- **No sabemos escuchar**: usan tecnologías que ni imaginamos.
- **Llegamos tarde / temprano**: las civilizaciones suben y caen, y no coincidimos en el tiempo.

Nadie tiene la respuesta. Pero la pregunta de Fermi sigue siendo una de las más inquietantes de la ciencia.`,
    quiz: [
      {
        id: 'cur-004-q1',
        type: 'multiple',
        question: '¿Quién formuló la paradoja?',
        options: ['Albert Einstein', 'Enrico Fermi', 'Carl Sagan', 'Stephen Hawking'],
        correctAnswer: 1,
        explanation: 'Enrico Fermi planteó la pregunta en 1950 durante un almuerzo informal con colegas en Los Álamos.',
      },
      {
        id: 'cur-004-q2',
        type: 'truefalse',
        question: '¿La paradoja afirma que los extraterrestres no existen?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La paradoja es la tensión entre la alta probabilidad estadística y la falta de evidencia. No afirma una conclusión.',
      },
      {
        id: 'cur-004-q3',
        type: 'multiple',
        question: '¿Qué es el "gran filtro"?',
        options: ['Un telescopio', 'Una hipótesis sobre una barrera evolutiva difícil de superar', 'Un instrumento musical', 'Una ley física'],
        correctAnswer: 1,
        explanation: 'El "gran filtro" es la idea de que existe alguna etapa muy difícil de superar, lo que explicaría la aparente escasez de civilizaciones.',
      },
      {
        id: 'cur-004-q4',
        type: 'multiple',
        question: '¿Qué dato refuerza la paradoja?',
        options: ['La cantidad enorme de estrellas con planetas en la galaxia', 'Que la Tierra es plana', 'Que el sol es joven', 'Que no hay otros planetas'],
        correctAnswer: 1,
        explanation: 'La gran cantidad de mundos potencialmente habitables hace estadísticamente esperable encontrar señales — y sin embargo no las hallamos.',
      },
    ],
  },
  {
    id: 'cur-005',
    title: 'Por qué nos da miedo lo desconocido (y por qué eso nos salvó)',
    emoji: '🌑',
    category: 'Curiosidades',
    duration: 3,
    difficulty: 'principiante',
    tags: ['miedo', 'evolución', 'cerebro'],
    createdAt: '2025-01-01',
    content: `## El miedo es un radar

¿Por qué un ruido en la oscuridad te eriza la piel antes de saber qué fue? Porque tu cerebro **prefiere equivocarse cien veces creyendo que hay un peligro**, que una sola vez ignorando uno real.

### La amígdala

Una pequeña región en forma de almendra dispara la respuesta de miedo en milisegundos. Activa adrenalina, aumenta el pulso, agudiza los sentidos. Todo antes de que la corteza prefrontal "razone" qué pasa.

### Sesgo de negatividad

Tu mente da más peso a lo amenazante que a lo positivo. **Sobrevivieron** quienes tenían ese sesgo: los relajados frente al ruido en los matorrales, no.

### El precio actual

Hoy ese mecanismo se dispara con cosas que no te van a comer: hablar en público, mirar el celular antes de un examen, leer noticias. La señal es la misma, el peligro real no.

### Cómo trabajarlo

- Reconocer la respuesta corporal sin pelearla.
- Respirar lento (le dice al cerebro: no estás corriendo).
- Exposición gradual: el cerebro re-aprende qué es realmente peligroso.`,
    quiz: [
      {
        id: 'cur-005-q1',
        type: 'multiple',
        question: '¿Qué estructura del cerebro dispara el miedo rápido?',
        options: ['El cerebelo', 'La amígdala', 'El hipocampo', 'La pituitaria'],
        correctAnswer: 1,
        explanation: 'La amígdala procesa amenazas a gran velocidad y desencadena la respuesta de lucha o huida.',
      },
      {
        id: 'cur-005-q2',
        type: 'truefalse',
        question: '¿El sesgo de negatividad fue evolutivamente útil?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Reaccionar exageradamente a amenazas potenciales aumentaba la supervivencia, aunque hoy a veces sea un costo psicológico.',
      },
      {
        id: 'cur-005-q3',
        type: 'multiple',
        question: '¿Por qué respirar lento ayuda con el miedo?',
        options: ['Porque enfría el cuerpo', 'Porque le señala al cerebro que no hay urgencia', 'Porque distrae', 'Porque cansa'],
        correctAnswer: 1,
        explanation: 'La respiración pausada activa el sistema parasimpático y reduce la respuesta de alarma.',
      },
      {
        id: 'cur-005-q4',
        type: 'multiple',
        question: '¿Qué técnica reentrena la respuesta de miedo?',
        options: ['Evitar el estímulo para siempre', 'Exposición gradual y controlada', 'Discutir con uno mismo', 'Comer mucho'],
        correctAnswer: 1,
        explanation: 'La exposición progresiva permite que el cerebro re-evalúe el estímulo y aprenda que no implica un peligro real.',
      },
    ],
  },
  {
    id: 'cur-006',
    title: 'El efecto placebo: Cuando creer cura',
    emoji: '💊',
    category: 'Curiosidades',
    duration: 3,
    difficulty: 'intermedio',
    tags: ['placebo', 'medicina', 'mente'],
    createdAt: '2025-01-01',
    content: `## Pastillas que no son pastillas

Una pastilla de azúcar, una inyección de suero, una falsa cirugía. Si el paciente cree que es un tratamiento real, **una proporción significativa mejora**. Eso es el efecto placebo, y no es magia.

### Qué pasa en el cuerpo

La expectativa de mejora activa zonas del cerebro que liberan endorfinas, dopamina y otros neurotransmisores. **El dolor disminuye literalmente**, no sólo "en la cabeza".

### Cuándo funciona mejor

- Dolor crónico, fatiga, ansiedad, depresión leve.
- Cuanto más ritual rodea al "tratamiento" (color, formato, médico convincente), más fuerte el efecto.
- Las inyecciones tienen más placebo que las pastillas. Las cirugías placebo, todavía más.

### Su hermano oscuro: el nocebo

Si esperás efectos negativos, también los tenés. Un paciente al que se le advierten efectos secundarios suele reportarlos, aunque tome agua.

### Implicancias

Todo ensayo clínico serio compara droga **contra placebo**: si no supera al placebo, no se aprueba. Pero también enseña algo profundo: la **expectativa** es parte del tratamiento, no un ruido.`,
    quiz: [
      {
        id: 'cur-006-q1',
        type: 'multiple',
        question: '¿Qué es un placebo?',
        options: ['Un fármaco potente', 'Un tratamiento sin sustancia activa que produce efectos por la expectativa', 'Una vitamina', 'Una vacuna'],
        correctAnswer: 1,
        explanation: 'El placebo es un tratamiento sin compuesto activo que provoca efectos por la creencia del paciente.',
      },
      {
        id: 'cur-006-q2',
        type: 'truefalse',
        question: '¿El efecto placebo es puramente psicológico, sin cambios reales en el cuerpo?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Provoca cambios neuroquímicos medibles: liberación de endorfinas y dopamina, por ejemplo.',
      },
      {
        id: 'cur-006-q3',
        type: 'multiple',
        question: '¿Qué es el efecto nocebo?',
        options: ['Un tipo de vacuna', 'La aparición de efectos negativos por esperar lo peor', 'Un placebo natural', 'Un robot médico'],
        correctAnswer: 1,
        explanation: 'El nocebo es lo opuesto: la expectativa negativa genera síntomas adversos reales.',
      },
      {
        id: 'cur-006-q4',
        type: 'multiple',
        question: '¿Por qué los ensayos clínicos comparan contra placebo?',
        options: ['Para ahorrar dinero', 'Para asegurar que el efecto del fármaco supere al de la mera expectativa', 'Para enmascarar al paciente', 'Para confundir al laboratorio'],
        correctAnswer: 1,
        explanation: 'Si una droga no supera al placebo, no se puede afirmar que su efecto venga del compuesto activo.',
      },
    ],
  },
  {
    id: 'cur-007',
    title: 'Por qué nos encanta la música triste cuando estamos tristes',
    emoji: '🎶',
    category: 'Curiosidades',
    duration: 3,
    difficulty: 'principiante',
    tags: ['música', 'emociones', 'psicología'],
    createdAt: '2025-01-01',
    content: `## La paradoja de la música triste

Suena contradictorio: estás mal, ponés una canción triste, y te sentís **mejor**. ¿Por qué buscamos voluntariamente algo que parece intensificar el dolor?

### Catarsis controlada

La música triste te da permiso a sentir lo que sentís sin que la realidad te empeore más. Lloras con la canción, no con tu vida concreta. **Procesás la emoción a una distancia segura**.

### Empatía y compañía

Una canción triste suena como alguien diciendo "yo también pasé por esto". Activa redes cerebrales de empatía y reduce la sensación de soledad.

### Prolactina

Algunos estudios sugieren que la música melancólica libera prolactina, una hormona asociada al consuelo. Puede ser parte de por qué llorar con música deja sensación de alivio.

### Belleza estructural

La tristeza musical suele ser hermosa en su forma: armonías, progresiones, voces. Apreciás la belleza al mismo tiempo que sentís la emoción. Eso convierte el dolor en algo soportable, casi querido.`,
    quiz: [
      {
        id: 'cur-007-q1',
        type: 'multiple',
        question: '¿Qué función emocional cumple la música triste?',
        options: ['Distraer del problema', 'Permitir procesar emociones a distancia segura', 'Curar enfermedades', 'Aumentar la ansiedad'],
        correctAnswer: 1,
        explanation: 'Funciona como catarsis controlada: dejás salir la emoción sin que las consecuencias sean reales.',
      },
      {
        id: 'cur-007-q2',
        type: 'truefalse',
        question: '¿Escuchar música triste sólo empeora el ánimo?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Para muchas personas tiene un efecto regulador y de consuelo, no solo intensificador.',
      },
      {
        id: 'cur-007-q3',
        type: 'multiple',
        question: '¿Qué hormona se ha asociado al efecto consolador de la música melancólica?',
        options: ['Adrenalina', 'Prolactina', 'Insulina', 'Tiroxina'],
        correctAnswer: 1,
        explanation: 'La prolactina aparece en contextos de consuelo y podría ser parte del efecto reparador de llorar con música.',
      },
      {
        id: 'cur-007-q4',
        type: 'multiple',
        question: '¿Qué red cerebral se activa con la música emocional?',
        options: ['La motora únicamente', 'Las redes asociadas a empatía y emoción', 'Sólo la visual', 'Sólo la auditiva primaria'],
        correctAnswer: 1,
        explanation: 'La música emocional activa circuitos vinculados a empatía, recompensa y procesamiento emocional.',
      },
    ],
  },

  // ─── ECONOMÍA (econ-002 → econ-005) ─────────────────────────────
  {
    id: 'econ-002',
    title: 'El capitalismo en 5 minutos: Cómo funciona el sistema',
    emoji: '🏦',
    category: 'Economía',
    duration: 4,
    difficulty: 'principiante',
    tags: ['capitalismo', 'mercado', 'empresa'],
    createdAt: '2025-01-01',
    content: `## ¿Qué es el capitalismo?

Un sistema económico donde los **medios de producción** (fábricas, tierras, capital) son **propiedad privada** y se asignan recursos a través del **mercado**: la oferta y la demanda.

### Las piezas

- **Propiedad privada**: las personas y empresas pueden tener bienes y usarlos.
- **Mercado libre**: precios que emergen del juego entre quienes ofrecen y quienes compran.
- **Búsqueda de ganancia**: el motor que impulsa a las empresas a producir y mejorar.
- **Competencia**: empresas distintas pelean por el mismo cliente; eso (en teoría) baja precios y eleva calidad.

### La idea de Adam Smith

En 1776 propuso que cada uno persiguiendo su interés particular termina, sin proponérselo, beneficiando al conjunto: la **mano invisible** del mercado.

### Ventajas y críticas

**A favor**: innovación, productividad, expansión del consumo.

**En contra**: desigualdad creciente, externalidades (contaminación), ciclos de crisis, mercantilización de cosas que tal vez no deberían ser mercancías (salud, educación, ambiente).

### Capitalismos

No hay uno solo. El sueco, el estadounidense y el chino son todos "capitalistas" pero con reglas, impuestos y regulaciones muy distintas. El sistema admite muchas variantes.`,
    quiz: [
      {
        id: 'econ-002-q1',
        type: 'multiple',
        question: '¿Cuál es una característica central del capitalismo?',
        options: ['Propiedad colectiva forzosa', 'Propiedad privada de los medios de producción', 'Ausencia de mercados', 'Precios fijados por decreto'],
        correctAnswer: 1,
        explanation: 'La propiedad privada de los medios de producción es uno de los rasgos definitorios del capitalismo.',
      },
      {
        id: 'econ-002-q2',
        type: 'truefalse',
        question: '¿Existe un único modelo capitalista en el mundo?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Hay variedades muy distintas: desde modelos nórdicos con fuerte Estado hasta modelos liberales con poca regulación.',
      },
      {
        id: 'econ-002-q3',
        type: 'multiple',
        question: '¿Qué es la "mano invisible" de Adam Smith?',
        options: ['Una metáfora del Estado', 'La idea de que el interés individual puede generar beneficio colectivo en un mercado', 'Una institución financiera', 'Un robot industrial'],
        correctAnswer: 1,
        explanation: 'Smith sostuvo que la coordinación a través de los mercados puede producir resultados socialmente útiles sin un planificador central.',
      },
      {
        id: 'econ-002-q4',
        type: 'multiple',
        question: '¿Cuál es una crítica frecuente al capitalismo?',
        options: ['Que produce poca innovación', 'Que tiende a generar desigualdad y externalidades como contaminación', 'Que prohíbe la competencia', 'Que elimina la propiedad privada'],
        correctAnswer: 1,
        explanation: 'Las críticas más extendidas señalan la desigualdad, las crisis y los costos ambientales no contabilizados.',
      },
    ],
  },
  {
    id: 'econ-003',
    title: 'La crisis del 2008: Cómo los bancos casi destruyeron el mundo',
    emoji: '📉',
    category: 'Economía',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['crisis', '2008', 'bancos', 'subprime'],
    createdAt: '2025-01-01',
    content: `## El año en que casi todo explotó

En 2008, el sistema financiero mundial estuvo a punto de colapsar. **Lehman Brothers**, un banco de inversión de 158 años, quebró en una noche. Le siguió una recesión global.

### Qué pasó

Durante años, los bancos estadounidenses dieron hipotecas a personas que **no podían pagarlas** ("subprime"). Empaquetaron miles de esas hipotecas en productos financieros (**MBS, CDO**), las calificaron como seguras y las vendieron en todo el mundo.

### El truco

Las agencias calificadoras (que cobraban de los mismos bancos) les ponían **AAA**: "tan seguro como deuda del gobierno". No lo eran.

### Cuando explotó

Cuando los precios de las casas dejaron de subir, la gente empezó a no pagar. Los productos financieros que dependían de esas hipotecas se desplomaron. Muchos bancos descubrieron que tenían **billones** en activos sin valor real.

### Consecuencias

- Millones perdieron casa, empleo o ahorros.
- El Estado **rescató bancos con dinero público** (la frase "demasiado grandes para caer").
- Aumentó la desigualdad y la desconfianza institucional.
- Dejó cicatrices políticas que todavía moldean el debate público.

### Lección

Cuando una crisis se vuelve "demasiado compleja para entenderla" y todos dicen "esta vez es distinto", hay que preocuparse.`,
    quiz: [
      {
        id: 'econ-003-q1',
        type: 'multiple',
        question: '¿Qué tipo de hipotecas estuvieron en el centro de la crisis?',
        options: ['Hipotecas a empresas', 'Hipotecas subprime', 'Hipotecas verdes', 'Hipotecas estatales'],
        correctAnswer: 1,
        explanation: 'Las hipotecas subprime, otorgadas a personas con baja capacidad de pago, fueron el ingrediente clave.',
      },
      {
        id: 'econ-003-q2',
        type: 'truefalse',
        question: '¿Las agencias calificadoras advirtieron a tiempo del riesgo?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Calificaron como AAA productos altamente riesgosos, en parte por conflictos de interés con quienes les pagaban.',
      },
      {
        id: 'econ-003-q3',
        type: 'multiple',
        question: '¿Qué banco icónico quebró en 2008?',
        options: ['Goldman Sachs', 'Lehman Brothers', 'Bank of America', 'JP Morgan'],
        correctAnswer: 1,
        explanation: 'La quiebra de Lehman Brothers en septiembre de 2008 es el símbolo del estallido.',
      },
      {
        id: 'econ-003-q4',
        type: 'multiple',
        question: '¿Qué significa "demasiado grande para caer"?',
        options: ['Que un banco gana mucho', 'Que su quiebra causaría tanto daño que el Estado lo termina rescatando', 'Que tiene oficinas grandes', 'Que tiene cuentas en el extranjero'],
        correctAnswer: 1,
        explanation: 'Si la caída de una entidad arrastraría a la economía, el Estado interviene aunque eso socialice las pérdidas.',
      },
    ],
  },
  {
    id: 'econ-004',
    title: 'El mercado de valores: ¿Qué es realmente una acción?',
    emoji: '📈',
    category: 'Economía',
    duration: 3,
    difficulty: 'principiante',
    tags: ['acciones', 'bolsa', 'inversión'],
    createdAt: '2025-01-01',
    content: `## Una acción es un pedacito de empresa

Cuando comprás una **acción** de una empresa, no estás comprando una promesa: estás comprando una **fracción real de propiedad**. Si la empresa vale 100 millones y emitió 1 millón de acciones, cada acción representa un millonésimo de la empresa.

### Qué te da

- **Derecho a una parte de las ganancias** (dividendos, si la empresa los reparte).
- **Voto** en algunas decisiones importantes (proporcional a tus acciones).
- **Posibilidad de revender** la acción a otro inversor en la bolsa.

### Por qué cambia el precio

El precio en la bolsa refleja las **expectativas** del mercado: ganancias futuras, contexto económico, sentimiento, miedo, codicia. Por eso se mueve a veces con noticias que nada tienen que ver con la empresa misma.

### Riesgo y retorno

Históricamente las acciones rinden más que los bonos o los plazos fijos en períodos largos, pero con muchísima más volatilidad. Pueden caer 50% y tardar años en recuperarse.

### Idea clave

No es un casino. Es ser dueño de una pequeña parte de un negocio. Si entendés el negocio, entendés mejor la acción.`,
    quiz: [
      {
        id: 'econ-004-q1',
        type: 'multiple',
        question: '¿Qué representa una acción?',
        options: ['Una deuda de la empresa con vos', 'Una fracción de propiedad de la empresa', 'Un seguro', 'Un préstamo al Estado'],
        correctAnswer: 1,
        explanation: 'Una acción es propiedad fraccional de la empresa que la emite.',
      },
      {
        id: 'econ-004-q2',
        type: 'truefalse',
        question: '¿El precio de una acción refleja sólo el valor presente real de la empresa?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Refleja también expectativas futuras y el sentimiento del mercado, lo que puede causar fuertes desvíos.',
      },
      {
        id: 'econ-004-q3',
        type: 'multiple',
        question: '¿Qué es un dividendo?',
        options: ['Una multa', 'Una porción de las ganancias que la empresa reparte entre sus accionistas', 'Un impuesto', 'Una comisión bancaria'],
        correctAnswer: 1,
        explanation: 'El dividendo es la parte de las ganancias que la empresa decide distribuir entre quienes la poseen.',
      },
      {
        id: 'econ-004-q4',
        type: 'multiple',
        question: '¿Cuál es un riesgo importante de invertir en acciones?',
        options: ['No hay riesgos', 'Su precio puede caer fuerte y tardar años en recuperarse', 'Que dejen de existir las empresas', 'Que se vuelvan ilegales'],
        correctAnswer: 1,
        explanation: 'La volatilidad es alta y las recuperaciones pueden tardar años, especialmente si se vende en pánico.',
      },
    ],
  },
  {
    id: 'econ-005',
    title: 'La economía del comportamiento: Por qué no somos tan racionales',
    emoji: '🧩',
    category: 'Economía',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['kahneman', 'sesgos', 'decisiones'],
    createdAt: '2025-01-01',
    content: `## La revolución de Kahneman y Tversky

La economía clásica suponía un "homo economicus": un humano racional, informado y egoísta. **Daniel Kahneman** y **Amos Tversky** demostraron que la realidad es muy distinta.

### Sistema 1 y Sistema 2

- **Sistema 1**: rápido, automático, intuitivo. Decide en segundos.
- **Sistema 2**: lento, esforzado, racional. Lo usás cuando hacés una cuenta complicada.

La mayoría del tiempo decidís con el Sistema 1, lleno de **sesgos**.

### Sesgos famosos

- **Aversión a la pérdida**: te duele perder $100 más de lo que te alegra ganar $100.
- **Anclaje**: el primer número que ves condiciona tu valoración (precios "originales", descuentos).
- **Sesgo de confirmación**: buscás información que confirme lo que ya creés.
- **Falacia del costo hundido**: seguís un mal plan porque "ya invertiste demasiado".

### Implicancias

Esto no es un defecto curioso: **explica decisiones de millones de personas y políticas públicas**. Saberlo te ayuda a decidir mejor: a notar cuándo el Sistema 1 está en el volante y conviene pasar al Sistema 2.`,
    quiz: [
      {
        id: 'econ-005-q1',
        type: 'multiple',
        question: '¿Qué demuestra la economía del comportamiento?',
        options: ['Que somos perfectamente racionales', 'Que las decisiones humanas suelen estar guiadas por sesgos predecibles', 'Que los precios no importan', 'Que la economía es exacta'],
        correctAnswer: 1,
        explanation: 'Kahneman y Tversky mostraron que las decisiones reales se desvían sistemáticamente del modelo racional.',
      },
      {
        id: 'econ-005-q2',
        type: 'truefalse',
        question: '¿La aversión a la pérdida implica que perder duele más que ganar lo equivalente?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Tendemos a sentir las pérdidas con más intensidad emocional que las ganancias del mismo monto.',
      },
      {
        id: 'econ-005-q3',
        type: 'multiple',
        question: '¿Qué describe el sesgo de anclaje?',
        options: ['Quedarse en un puerto', 'Que el primer número visto condiciona la valoración posterior', 'Olvidar precios anteriores', 'Buscar la oferta más barata'],
        correctAnswer: 1,
        explanation: 'Si ves $1000 tachados y luego $500, el ancla cambia tu percepción del precio actual.',
      },
      {
        id: 'econ-005-q4',
        type: 'multiple',
        question: '¿Qué es la falacia del costo hundido?',
        options: ['Vender barato lo que costó caro', 'Seguir invirtiendo recursos en algo malo porque "ya invertiste mucho"', 'Comprar al final del día', 'Olvidar lo que costó algo'],
        correctAnswer: 1,
        explanation: 'Es perseverar irracionalmente porque ya gastaste tiempo o dinero, en vez de evaluar el valor futuro.',
      },
    ],
  },

  // ─── NATURALEZA (nat-003 → nat-006) ─────────────────────────────
  {
    id: 'nat-003',
    title: 'Los océanos: El mundo que casi no conocemos',
    emoji: '🌊',
    category: 'Naturaleza',
    duration: 4,
    difficulty: 'principiante',
    tags: ['océano', 'mar', 'biodiversidad'],
    createdAt: '2025-01-01',
    content: `## Cubren más del 70% de la Tierra

…y conocemos mejor la superficie de Marte que sus profundidades. Más del **80% del océano** sigue sin explorar en detalle.

### Estratos

- **Zona epipelágica** (0-200 m): donde llega la luz, el lugar de la mayoría de la vida marina.
- **Zona mesopelágica** (200-1000 m): penumbra, animales bioluminiscentes.
- **Zona batial y abisal** (>1000 m): oscuridad total, presión enorme.
- **Hadal** (>6000 m): fosas como la de las Marianas (~11.000 m).

### Por qué importa

- Producen aproximadamente la mitad del **oxígeno** de la atmósfera (en gran parte por fitoplancton).
- Regulan el **clima**: absorben calor y CO₂.
- Albergan **biodiversidad** que ni siquiera nombramos: se descubren miles de especies por año.

### Amenazas

- **Acidificación** por absorber CO₂.
- **Calentamiento** que blanquea corales y desplaza especies.
- **Sobrepesca** que vacía ecosistemas enteros.
- **Plásticos**: hay islas flotantes del tamaño de países.

Cuidar los océanos no es estética: es supervivencia humana.`,
    quiz: [
      {
        id: 'nat-003-q1',
        type: 'multiple',
        question: '¿Aproximadamente qué porcentaje del océano sigue inexplorado en detalle?',
        options: ['10%', 'Más del 80%', '50%', '5%'],
        correctAnswer: 1,
        explanation: 'Más del 80% del océano todavía no fue mapeado en alta resolución.',
      },
      {
        id: 'nat-003-q2',
        type: 'truefalse',
        question: '¿El océano produce parte importante del oxígeno que respiramos?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. El fitoplancton oceánico aporta aproximadamente la mitad del oxígeno atmosférico.',
      },
      {
        id: 'nat-003-q3',
        type: 'multiple',
        question: '¿Qué es la acidificación oceánica?',
        options: ['La pérdida de sal del agua', 'El descenso del pH del océano por absorción de CO₂', 'El aumento de oxígeno', 'La evaporación masiva'],
        correctAnswer: 1,
        explanation: 'Al absorber CO₂, el agua del océano se vuelve más ácida, dañando especialmente a organismos calcáreos.',
      },
      {
        id: 'nat-003-q4',
        type: 'multiple',
        question: '¿Cuál es la fosa más profunda conocida?',
        options: ['Fosa de Puerto Rico', 'Fosa de las Marianas', 'Fosa de Atacama', 'Fosa Sur'],
        correctAnswer: 1,
        explanation: 'La Fosa de las Marianas alcanza unos 11 km de profundidad.',
      },
    ],
  },
  {
    id: 'nat-004',
    title: 'Las abejas: Por qué su extinción nos afecta a todos',
    emoji: '🐝',
    category: 'Naturaleza',
    duration: 3,
    difficulty: 'principiante',
    tags: ['abejas', 'polinización', 'ecosistema'],
    createdAt: '2025-01-01',
    content: `## Pequeñas y vitales

Las abejas y otros polinizadores son responsables de la **polinización de aproximadamente un tercio** de los cultivos que comemos. Sin ellas, no habría manzanas, almendras, café, tomate, palta y muchísimas otras cosas.

### Cómo funciona

Una abeja vuela entre flores buscando néctar. En su cuerpo se pega el polen, que transporta a otras flores. Esa transferencia permite que las plantas formen frutos y semillas.

### Por qué están en problemas

- **Pesticidas** (especialmente neonicotinoides) que afectan su sistema nervioso.
- **Pérdida de hábitat**: monocultivos sin flores silvestres.
- **Enfermedades y parásitos**, como el ácaro Varroa.
- **Cambio climático** que altera floraciones y temperaturas.

### Qué se puede hacer

- Sembrar flores nativas, aunque sea en una maceta.
- Evitar pesticidas en huertas urbanas.
- Apoyar a apicultores locales.
- Dejar zonas sin cortar para que las flores silvestres florezcan.

### Albert Einstein (probablemente apócrifo)

Suele atribuírsele la frase: "Si las abejas desaparecen, al hombre le quedan 4 años de vida". No hay registro real de que la haya dicho — pero la idea, sin polinización masiva, es preocupantemente cercana.`,
    quiz: [
      {
        id: 'nat-004-q1',
        type: 'multiple',
        question: '¿Qué función crítica cumplen las abejas en los ecosistemas?',
        options: ['Hacer miel únicamente', 'Polinizar cultivos y plantas silvestres', 'Cazar otros insectos', 'Producir oxígeno'],
        correctAnswer: 1,
        explanation: 'Sin polinización no hay producción de muchos frutos y semillas; eso afecta cadenas tróficas enteras.',
      },
      {
        id: 'nat-004-q2',
        type: 'truefalse',
        question: '¿Los pesticidas neonicotinoides están entre las amenazas para las abejas?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Afectan su sistema nervioso y se asocian con el colapso de colmenas.',
      },
      {
        id: 'nat-004-q3',
        type: 'multiple',
        question: '¿Qué hábito ayuda a proteger polinizadores?',
        options: ['Usar más insecticidas en jardines', 'Sembrar flores nativas', 'Eliminar arbustos', 'Cubrir el suelo con cemento'],
        correctAnswer: 1,
        explanation: 'Más flores nativas significa más alimento y refugio para abejas y otros polinizadores.',
      },
      {
        id: 'nat-004-q4',
        type: 'multiple',
        question: '¿Qué parásito afecta seriamente a las abejas?',
        options: ['Mosca tse-tse', 'Ácaro Varroa', 'Pulga común', 'Garrapata estrella'],
        correctAnswer: 1,
        explanation: 'El ácaro Varroa destructor debilita colmenas enteras y transmite virus.',
      },
    ],
  },
  {
    id: 'nat-005',
    title: 'La fotosíntesis: La máquina perfecta que alimenta la vida',
    emoji: '🌱',
    category: 'Naturaleza',
    duration: 3,
    difficulty: 'principiante',
    tags: ['fotosíntesis', 'plantas', 'energía'],
    createdAt: '2025-01-01',
    content: `## Plantas comiendo luz

La **fotosíntesis** es una de las reacciones químicas más importantes del planeta: convierte luz solar, agua y CO₂ en azúcares y oxígeno. Sin ella, no habría vida compleja en la Tierra.

### La fórmula simplificada

\`\`\`
6 CO₂ + 6 H₂O + luz  →  C₆H₁₂O₆ (glucosa) + 6 O₂
\`\`\`

Las plantas literalmente **fabrican su comida** con luz.

### Dónde ocurre

En los **cloroplastos**, organelos verdes presentes en hojas y tallos. La **clorofila** captura la luz (especialmente las longitudes rojas y azules; la verde la refleja, por eso las plantas son verdes).

### Dos etapas

- **Reacciones lumínicas**: usan la luz para producir energía química (ATP) y romper agua.
- **Ciclo de Calvin**: usan esa energía para fijar el CO₂ y producir azúcar.

### Por qué te importa

- El **oxígeno** que respirás viene mayormente de organismos que hacen fotosíntesis.
- Toda la cadena alimentaria empieza con plantas (incluso si comés sólo carne, ese animal comió plantas).
- Los **combustibles fósiles** son fotosíntesis vieja: plantas y plancton de hace millones de años, comprimidos.`,
    quiz: [
      {
        id: 'nat-005-q1',
        type: 'multiple',
        question: '¿Cuál es el subproducto principal de la fotosíntesis?',
        options: ['Dióxido de carbono', 'Oxígeno', 'Nitrógeno', 'Hidrógeno'],
        correctAnswer: 1,
        explanation: 'Las plantas liberan oxígeno como subproducto, que es esencial para la respiración aeróbica.',
      },
      {
        id: 'nat-005-q2',
        type: 'truefalse',
        question: '¿La clorofila absorbe principalmente la luz verde?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La refleja (por eso vemos las plantas verdes). Absorbe sobre todo en el rojo y el azul.',
      },
      {
        id: 'nat-005-q3',
        type: 'multiple',
        question: '¿Dónde ocurre la fotosíntesis dentro de la célula vegetal?',
        options: ['En las mitocondrias', 'En los cloroplastos', 'En el núcleo', 'En la membrana'],
        correctAnswer: 1,
        explanation: 'Los cloroplastos contienen la maquinaria fotosintética y la clorofila.',
      },
      {
        id: 'nat-005-q4',
        type: 'multiple',
        question: '¿Qué se necesita además de luz para hacer fotosíntesis?',
        options: ['Sólo agua', 'Agua y CO₂', 'Sólo CO₂', 'Nitrógeno y oxígeno'],
        correctAnswer: 1,
        explanation: 'La planta combina agua absorbida por las raíces con CO₂ del aire, usando la luz como energía.',
      },
    ],
  },
  {
    id: 'nat-006',
    title: 'Los volcanes: La furia interna de la Tierra',
    emoji: '🌋',
    category: 'Naturaleza',
    duration: 3,
    difficulty: 'principiante',
    tags: ['volcanes', 'geología', 'tectónica'],
    createdAt: '2025-01-01',
    content: `## Por qué entra en erupción

Bajo la corteza terrestre hay **magma**: roca derretida a más de 1.000 °C. Cuando encuentra una fisura, sube. Si los gases atrapados en él logran escapar violentamente, hay erupción.

### Dónde ocurren

La mayoría se concentra en bordes de **placas tectónicas**:

- **Cinturón de Fuego del Pacífico**: aproximadamente el 75% de los volcanes activos del mundo.
- **Dorsales oceánicas**: donde nace nueva corteza.
- **Puntos calientes** (Hawaii): plumas de magma que atraviesan placas.

### Tipos

- **Hawaiana**: lava fluida, erupciones poco explosivas.
- **Estromboliana**: pequeñas explosiones recurrentes.
- **Vulcaniana / pliniana**: muy explosivas, columnas de ceniza enormes (Vesubio, Pinatubo).

### Para bien y para mal

- Crean **suelos fértiles** (las laderas volcánicas suelen ser de las más productivas del mundo).
- Forman islas (Islandia, Hawaii).
- Pero también arrasan ciudades, alteran el clima global y generan tsunamis.

### Vesubio, año 79

La erupción del Vesubio enterró Pompeya y Herculano bajo metros de ceniza, conservando un retrato detallado de la vida romana hasta hoy.`,
    quiz: [
      {
        id: 'nat-006-q1',
        type: 'multiple',
        question: '¿Qué es el magma?',
        options: ['Agua hirviendo', 'Roca derretida bajo la superficie', 'Un tipo de mineral', 'Un gas atmosférico'],
        correctAnswer: 1,
        explanation: 'El magma es roca fundida que, al salir a la superficie, se llama lava.',
      },
      {
        id: 'nat-006-q2',
        type: 'truefalse',
        question: '¿La mayoría de los volcanes activos están dentro del Cinturón de Fuego del Pacífico?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Aproximadamente tres cuartos de los volcanes activos del mundo están allí.',
      },
      {
        id: 'nat-006-q3',
        type: 'multiple',
        question: '¿Qué fenómeno enterró Pompeya?',
        options: ['Un terremoto', 'La erupción del Vesubio en 79 d.C.', 'Una inundación', 'Una nevada'],
        correctAnswer: 1,
        explanation: 'La erupción del Vesubio en el año 79 sepultó Pompeya y Herculano bajo metros de ceniza.',
      },
      {
        id: 'nat-006-q4',
        type: 'multiple',
        question: '¿Qué tipo de erupción suele ser más explosiva?',
        options: ['Hawaiana', 'Pliniana', 'Submarina suave', 'Estromboliana'],
        correctAnswer: 1,
        explanation: 'Las erupciones plinianas generan columnas eruptivas enormes y son altamente explosivas.',
      },
    ],
  },

  // ─── SOCIEDAD (soc-003 → soc-006) ───────────────────────────────
  {
    id: 'soc-003',
    title: 'El efecto bystander: Por qué nadie ayuda cuando hay muchos',
    emoji: '👥',
    category: 'Sociedad',
    duration: 3,
    difficulty: 'intermedio',
    tags: ['psicología social', 'ayuda', 'difusión de responsabilidad'],
    createdAt: '2025-01-01',
    content: `## El caso que disparó la investigación

En 1964, **Kitty Genovese** fue asesinada en Nueva York. La prensa contó (con muchas exageraciones, hoy sabemos) que decenas de vecinos vieron algo y nadie llamó. Eso disparó décadas de estudios sobre **por qué la gente no actúa cuando hay otros**.

### El experimento clásico

Los psicólogos John Darley y Bibb Latané demostraron en laboratorio: si un voluntario está **solo** en una habitación que se llena de humo, casi siempre avisa. Si hay **otras personas haciendo silencio**, la mayoría se queda callada esperando a que alguien más reaccione.

### Por qué pasa

- **Difusión de responsabilidad**: cuanta más gente hay, menos siente cada uno que le toca.
- **Ignorancia pluralista**: si los demás no reaccionan, supongo que no es grave.
- **Miedo a quedar mal**: actuar y equivocarse cuesta socialmente.

### Cómo romperlo

Si necesitás ayuda en público, **señalá a una persona específica**: "Vos, el de la campera roja: llamá una ambulancia". Le sacás el efecto multitud y le devolvés responsabilidad concreta.`,
    quiz: [
      {
        id: 'soc-003-q1',
        type: 'multiple',
        question: '¿Qué postula el efecto bystander?',
        options: ['Que más testigos siempre implica más ayuda', 'Que la presencia de muchos testigos puede reducir la probabilidad de que alguien intervenga', 'Que los testigos siempre mienten', 'Que la ayuda depende del clima'],
        correctAnswer: 1,
        explanation: 'A más testigos, más se diluye la responsabilidad individual y menor la probabilidad de actuar.',
      },
      {
        id: 'soc-003-q2',
        type: 'truefalse',
        question: '¿Pedir ayuda señalando a alguien en concreto aumenta la chance de obtenerla?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Personalizar el pedido rompe la difusión de responsabilidad.',
      },
      {
        id: 'soc-003-q3',
        type: 'multiple',
        question: '¿Qué es la "ignorancia pluralista"?',
        options: ['No saber idiomas', 'Asumir que algo no es grave porque los demás no reaccionan', 'No conocer a los vecinos', 'Una corriente filosófica'],
        correctAnswer: 1,
        explanation: 'Si nadie alrededor se inmuta, lo interpretamos como señal de que no está pasando nada importante.',
      },
      {
        id: 'soc-003-q4',
        type: 'multiple',
        question: '¿Quiénes desarrollaron los experimentos clásicos sobre este efecto?',
        options: ['Pavlov y Skinner', 'Darley y Latané', 'Milgram y Asch', 'Freud y Jung'],
        correctAnswer: 1,
        explanation: 'John Darley y Bibb Latané fueron los pioneros en estudiar el efecto experimentalmente.',
      },
    ],
  },
  {
    id: 'soc-004',
    title: 'La desinformación: Cómo las fake news se propagan',
    emoji: '📰',
    category: 'Sociedad',
    duration: 3,
    difficulty: 'principiante',
    tags: ['fake news', 'desinformación', 'medios'],
    createdAt: '2025-01-01',
    content: `## La mentira viaja más rápido

Un estudio del MIT analizó millones de tuits y encontró que las **noticias falsas se difunden hasta 6 veces más rápido y más lejos** que las verdaderas. ¿Por qué?

### Razones

- **Sorpresa**: las fake news cuentan algo más impactante que la realidad.
- **Emoción**: provocan rabia, miedo o asombro, emociones que disparan compartir.
- **Sesgo de confirmación**: si confirma lo que ya creías, dudás menos.
- **Algoritmos**: las plataformas amplifican lo que retiene atención, no lo que es cierto.

### Tipos

- **Misinformation**: información errónea sin intención maliciosa.
- **Disinformation**: información falsa creada para engañar.
- **Malinformation**: información verdadera sacada de contexto para causar daño.

### Cómo defenderte

1. **Lee más allá del titular**.
2. **Verificá la fuente**: ¿es un medio conocido? ¿quién lo escribió?
3. **Buscá la noticia en otros lados**: si es real, otros la cubren.
4. **Cuidado con la urgencia**: si te dicen "compartilo ya", suele ser señal de manipulación.
5. **Usá fact-checkers** locales serios.

La desinformación no se vence consumiendo más información, sino consumiéndola **mejor**.`,
    quiz: [
      {
        id: 'soc-004-q1',
        type: 'multiple',
        question: '¿Qué encontró el estudio del MIT sobre fake news?',
        options: ['Que viajan más lento que las noticias verdaderas', 'Que se difunden mucho más rápido y lejos que las verdaderas', 'Que sólo afectan a personas mayores', 'Que sólo aparecen en TV'],
        correctAnswer: 1,
        explanation: 'El estudio mostró que las falsedades superaban con creces el alcance de las noticias verídicas.',
      },
      {
        id: 'soc-004-q2',
        type: 'truefalse',
        question: '¿Las emociones intensas favorecen que la gente comparta una noticia?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Las emociones fuertes (sorpresa, rabia, miedo) aumentan mucho la probabilidad de compartir.',
      },
      {
        id: 'soc-004-q3',
        type: 'multiple',
        question: '¿Cuál es una buena defensa contra la desinformación?',
        options: ['Compartir todo lo que parece urgente', 'Verificar la fuente y leer más allá del titular', 'Confiar en cualquier captura de pantalla', 'No leer nada'],
        correctAnswer: 1,
        explanation: 'Verificar fuente y contenido real reduce mucho el riesgo de difundir falsedades.',
      },
      {
        id: 'soc-004-q4',
        type: 'multiple',
        question: '¿Qué diferencia a la "disinformation" de la "misinformation"?',
        options: ['Ninguna', 'La disinformation es falsedad creada con intención de engañar; la misinformation es error sin malicia', 'La disinformation es siempre verdad', 'La misinformation está prohibida'],
        correctAnswer: 1,
        explanation: 'La intencionalidad es la clave: una busca engañar, la otra es error involuntario.',
      },
    ],
  },
  {
    id: 'soc-005',
    title: 'La soledad moderna: La epidemia silenciosa del siglo XXI',
    emoji: '🪟',
    category: 'Sociedad',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['soledad', 'salud mental', 'comunidad'],
    createdAt: '2025-01-01',
    content: `## Más conectados, más solos

Nunca tuvimos tantas formas de comunicarnos. Y sin embargo, las tasas de soledad reportada **crecen en casi todos los países que la miden**. Reino Unido y Japón crearon ministerios específicos para abordarla.

### Soledad ≠ estar solo

Estar **solo** es una situación. La **soledad** es una sensación: percibir que las relaciones que tenés no satisfacen tu necesidad social. Podés estar rodeado de gente y sentirte solo.

### Lo que hace al cuerpo

Estudios la asocian con efectos comparables a fumar 15 cigarrillos diarios: mayor riesgo cardiovascular, peor sueño, deterioro cognitivo, depresión.

### Por qué creció

- **Vida urbana** sin tejidos comunitarios.
- **Trabajo remoto y desplazamientos largos** que aíslan.
- **Redes sociales**: conexión cuantitativa, no cualitativa. Comparás tu interior con el exterior curado de los demás.
- **Pérdida de "terceros lugares"**: clubes, iglesias, plazas, cafés barriales.

### Antídotos posibles

- **Vínculos profundos** sobre cantidad de contactos.
- **Actividades en común** (deporte, voluntariado, talleres).
- **Conversaciones honestas**: nombrar la soledad ya es romperla un poco.
- **Diseñar la vida**: poner amigos en la agenda como ponés reuniones.`,
    quiz: [
      {
        id: 'soc-005-q1',
        type: 'multiple',
        question: '¿Qué diferencia hay entre estar solo y soledad?',
        options: ['Ninguna', 'Estar solo es la situación; la soledad es la sensación de que las relaciones no son suficientes', 'Estar solo siempre es peor', 'La soledad sólo afecta a mayores'],
        correctAnswer: 1,
        explanation: 'Una es objetiva, la otra subjetiva. Podés estar acompañado y sentir soledad.',
      },
      {
        id: 'soc-005-q2',
        type: 'truefalse',
        question: '¿La soledad crónica tiene efectos físicos en la salud?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. Se asocia con mayor riesgo cardiovascular, peor sueño y deterioro cognitivo.',
      },
      {
        id: 'soc-005-q3',
        type: 'multiple',
        question: '¿Qué son los "terceros lugares"?',
        options: ['Trabajos secundarios', 'Espacios fuera del hogar y el trabajo donde la comunidad se encuentra', 'Vacaciones', 'Lugares en mapas'],
        correctAnswer: 1,
        explanation: 'Cafés, plazas, clubes y centros comunitarios — espacios sociales informales que se han ido perdiendo.',
      },
      {
        id: 'soc-005-q4',
        type: 'multiple',
        question: '¿Qué estrategia ayuda contra la soledad?',
        options: ['Acumular contactos en redes sociales', 'Cultivar vínculos profundos y actividades compartidas', 'Quedarse aislado para recuperar energía', 'Cambiar de trabajo seguido'],
        correctAnswer: 1,
        explanation: 'La calidad de los vínculos importa más que el número de contactos digitales.',
      },
    ],
  },
  {
    id: 'soc-006',
    title: 'El lenguaje corporal: Lo que tu cuerpo dice sin palabras',
    emoji: '🤝',
    category: 'Sociedad',
    duration: 3,
    difficulty: 'principiante',
    tags: ['lenguaje corporal', 'comunicación', 'gestos'],
    createdAt: '2025-01-01',
    content: `## Comunicás aunque no hables

La gente lee tu cuerpo todo el tiempo: postura, gestos, mirada, microexpresiones. Mucho antes de procesar tus palabras, ya te interpretaron.

### Componentes clave

- **Postura**: erguida transmite confianza; encogida, sumisión.
- **Mirada**: el contacto visual moderado conecta. Su ausencia o exceso incomoda.
- **Manos**: visibles generan confianza; escondidas activan duda.
- **Microexpresiones**: gestos faciales involuntarios de fracciones de segundo que delatan la emoción real.

### Cuidado con los mitos

- **Cruzar los brazos** no siempre significa "estar a la defensiva". A veces es frío, a veces comodidad.
- **No mirar a los ojos** no siempre es mentira: puede ser timidez, autismo, o respeto cultural.
- Los gestos varían **muchísimo entre culturas**.

### Cómo mejorarlo

1. **Respirá lento** antes de hablar: el cuerpo se ordena solo.
2. **Apoyá los pies en el piso** y hombros relajados.
3. **Sostené la mirada** unos segundos más de lo que naturalmente harías.
4. **Sonreí con los ojos**, no sólo con la boca (la sonrisa Duchenne).

### Lo más importante

Tu cuerpo no miente bien. Si no te creés lo que decís, lo va a contar igual. La autenticidad es la mejor estrategia comunicativa.`,
    quiz: [
      {
        id: 'soc-006-q1',
        type: 'multiple',
        question: '¿Qué son las microexpresiones?',
        options: ['Gestos planificados', 'Expresiones faciales involuntarias muy breves que revelan emoción real', 'Bostezos', 'Sólo sonrisas'],
        correctAnswer: 1,
        explanation: 'Duran fracciones de segundo y suelen escapar al control consciente.',
      },
      {
        id: 'soc-006-q2',
        type: 'truefalse',
        question: '¿Cruzar los brazos siempre significa estar a la defensiva?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Puede deberse a frío, comodidad o costumbre. Hay que leerlo en contexto.',
      },
      {
        id: 'soc-006-q3',
        type: 'multiple',
        question: '¿Qué es la sonrisa Duchenne?',
        options: ['Una sonrisa forzada', 'La sonrisa genuina que también involucra los músculos alrededor de los ojos', 'Una técnica de yoga', 'Un saludo francés'],
        correctAnswer: 1,
        explanation: 'Es la sonrisa auténtica, difícil de fingir, que activa los músculos orbiculares del ojo.',
      },
      {
        id: 'soc-006-q4',
        type: 'multiple',
        question: '¿Qué influye fuertemente en la interpretación de gestos?',
        options: ['La altura', 'La cultura', 'El número de zapatos', 'El idioma musical'],
        correctAnswer: 1,
        explanation: 'Muchos gestos cambian de significado entre culturas; lo que asiente en una, niega en otra.',
      },
    ],
  },

  // ─── MATEMÁTICAS (mat-003 → mat-005) ────────────────────────────
  {
    id: 'mat-003',
    title: 'La secuencia de Fibonacci: El patrón escondido en la naturaleza',
    emoji: '🌻',
    category: 'Matemáticas',
    duration: 3,
    difficulty: 'principiante',
    tags: ['fibonacci', 'naturaleza', 'patrón'],
    createdAt: '2025-01-01',
    content: `## La regla más simple del mundo

La secuencia empieza así: **0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…**

La regla: **cada número es la suma de los dos anteriores**.

### Quién fue Fibonacci

Leonardo de Pisa (siglo XIII), apodado Fibonacci, la introdujo en Europa con un problema sobre cría de conejos. La secuencia ya era conocida en la matemática india, pero él la popularizó en Occidente.

### Aparece en la naturaleza

- Pétalos de flores (3, 5, 8, 13…).
- Espirales de girasoles, piñas y caracoles.
- Disposición de hojas alrededor de un tallo.

¿Por qué? Porque es una manera **muy eficiente** de empaquetar elementos sin huecos ni superposiciones.

### Y la proporción áurea

Si dividís un número de Fibonacci por el anterior, el cociente se acerca cada vez más a un número mágico: aproximadamente **1.618**, llamado **número áureo (φ)**. Aparece en arte, arquitectura y biología.

### Idea clave

No es magia mística: es matemática que captura un patrón **óptimo de crecimiento**. La naturaleza llegó a él por evolución, no por estética.`,
    quiz: [
      {
        id: 'mat-003-q1',
        type: 'multiple',
        question: '¿Cuál es la regla de la secuencia de Fibonacci?',
        options: ['Multiplicar por dos', 'Cada número es la suma de los dos anteriores', 'Sumar el día del mes', 'Restar uno cada paso'],
        correctAnswer: 1,
        explanation: 'F(n) = F(n-1) + F(n-2), partiendo de 0 y 1.',
      },
      {
        id: 'mat-003-q2',
        type: 'truefalse',
        question: '¿La razón entre números consecutivos de Fibonacci tiende al número áureo (~1.618)?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. A medida que avanzás en la secuencia, el cociente se aproxima a φ.',
      },
      {
        id: 'mat-003-q3',
        type: 'multiple',
        question: '¿Por qué aparece tanto en la naturaleza?',
        options: ['Casualidad', 'Porque es una forma eficiente de empaquetar y crecer', 'Porque las plantas saben matemática', 'Porque siempre aparece en lo verde'],
        correctAnswer: 1,
        explanation: 'Es una solución óptima a problemas de empaquetado y disposición que la evolución encontró.',
      },
      {
        id: 'mat-003-q4',
        type: 'multiple',
        question: '¿Cuál es el sexto término de la secuencia (empezando en 0, 1)?',
        options: ['5', '8', '13', '3'],
        correctAnswer: 0,
        explanation: 'Secuencia: 0, 1, 1, 2, 3, 5… El sexto término es 5.',
      },
    ],
  },
  {
    id: 'mat-004',
    title: 'La probabilidad: Por qué somos pésimos evaluando riesgos',
    emoji: '🎲',
    category: 'Matemáticas',
    duration: 4,
    difficulty: 'intermedio',
    tags: ['probabilidad', 'riesgo', 'estadística'],
    createdAt: '2025-01-01',
    content: `## La intuición miente

Tu cerebro evolucionó para sobrevivir en la sabana, no para razonar sobre 0,001%. Por eso somos torpes con probabilidades pequeñas, eventos raros y números grandes.

### Errores típicos

- **Heurística de disponibilidad**: pensás que es probable lo que recordás fácil. Por eso tememos más a los aviones que a los autos, aunque los autos sean mucho más peligrosos por kilómetro.
- **Falacia del jugador**: creer que la moneda "está por salir cara" después de varias cruces. La moneda no tiene memoria.
- **Confusión de probabilidad condicional**: P(A|B) no es lo mismo que P(B|A). Es lo que falla en muchos diagnósticos médicos.

### El problema de los falsos positivos

Imaginá un test 99% preciso para una enfermedad que afecta a 1 de cada 10.000. Si das positivo, ¿estás enfermo? La intuición dice "casi seguro". La matemática dice **menos del 1%**, porque hay muchos más sanos que enfermos, y un 1% de falsos positivos sobre tantos sanos llena el resultado.

### Por qué importa

- **Decisiones médicas**, **inversiones**, **políticas públicas** todas dependen de probabilidades.
- Aprender lo básico te protege contra publicidad engañosa, pánico colectivo y promesas irreales.

### Idea clave

No alcanza con sentir; con probabilidades hay que **calcular**. O al menos, dudar de la primera intuición.`,
    quiz: [
      {
        id: 'mat-004-q1',
        type: 'multiple',
        question: '¿Qué describe la "heurística de disponibilidad"?',
        options: ['Calcular probabilidad exacta', 'Estimar la probabilidad por la facilidad con que recordamos ejemplos', 'Tirar una moneda', 'Revisar estadísticas oficiales'],
        correctAnswer: 1,
        explanation: 'Lo más vívido en la memoria parece más probable, aunque no lo sea.',
      },
      {
        id: 'mat-004-q2',
        type: 'truefalse',
        question: '¿La moneda tiene "memoria" y compensa cuando salieron muchas cruces seguidas?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Cada tirada es independiente; creer lo contrario es la falacia del jugador.',
      },
      {
        id: 'mat-004-q3',
        type: 'multiple',
        question: '¿Por qué un test 99% preciso puede dar pocos verdaderos positivos cuando la enfermedad es muy rara?',
        options: ['Porque el test está mal diseñado', 'Porque los falsos positivos sobre la población sana grande superan a los verdaderos positivos sobre los pocos enfermos', 'Porque la enfermedad no existe', 'Porque la probabilidad no se aplica a tests'],
        correctAnswer: 1,
        explanation: 'Si los enfermos son pocos, incluso una tasa baja de falsos positivos genera muchos resultados engañosos.',
      },
      {
        id: 'mat-004-q4',
        type: 'multiple',
        question: '¿Qué actitud recomienda este tema con probabilidades?',
        options: ['Confiar siempre en la primera intuición', 'Dudar de la intuición y, cuando sea posible, calcular', 'Adivinar', 'Ignorarla'],
        correctAnswer: 1,
        explanation: 'La intuición humana sistemáticamente se equivoca con probabilidades; calcular o consultar datos es la salida.',
      },
    ],
  },
  {
    id: 'mat-005',
    title: 'Los números imaginarios: Matemática que parece ciencia ficción',
    emoji: '🔮',
    category: 'Matemáticas',
    duration: 4,
    difficulty: 'avanzado',
    tags: ['números imaginarios', 'complejos', 'matemática'],
    createdAt: '2025-01-01',
    content: `## El "imposible"

¿Cuál es la raíz cuadrada de **-1**? Si pensás "no existe", estás bien acompañado: durante siglos los matemáticos también pensaron eso. Hasta que decidieron darle un nombre y trabajar con él.

### Definición

Se llama **i** a un número tal que **i² = -1**. No es una raíz "real" — es **imaginaria**. Pero las reglas que cumple son consistentes y útiles.

### Números complejos

Son combinaciones del tipo **a + b·i**, donde *a* y *b* son números reales. Por ejemplo: 3 + 2i.

Forman un plano: el eje horizontal es la parte real, el vertical la imaginaria. Esto convierte muchos problemas en geometría intuitiva.

### Lejos de "imaginarios" en aplicación

- **Electricidad y electrónica**: el análisis de corriente alterna usa complejos.
- **Mecánica cuántica**: la función de onda es esencialmente compleja.
- **Procesamiento de señales** (audio, imagen, comunicaciones).
- **Fractales** como el conjunto de Mandelbrot viven en el plano complejo.

### Idea clave

"Imaginario" sólo se refiere al nombre histórico, no a su utilidad. Sin números complejos, no habría celulares ni resonancia magnética. Son tan reales en su efecto como los números reales.`,
    quiz: [
      {
        id: 'mat-005-q1',
        type: 'multiple',
        question: '¿Cuál es la definición de la unidad imaginaria i?',
        options: ['i = √2', 'i tal que i² = -1', 'i = 0', 'i = π'],
        correctAnswer: 1,
        explanation: 'i es una unidad cuyo cuadrado da -1, lo que extiende los números reales.',
      },
      {
        id: 'mat-005-q2',
        type: 'truefalse',
        question: '¿Los números imaginarios son inútiles en la práctica?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Son fundamentales en electrónica, cuántica, señales y muchos campos aplicados.',
      },
      {
        id: 'mat-005-q3',
        type: 'multiple',
        question: '¿Qué es un número complejo?',
        options: ['Un número difícil', 'Un número de la forma a + b·i', 'Un número fraccionario', 'Un decimal infinito'],
        correctAnswer: 1,
        explanation: 'Un complejo es la suma de una parte real y otra imaginaria.',
      },
      {
        id: 'mat-005-q4',
        type: 'multiple',
        question: '¿Cuál de estas áreas usa intensamente números complejos?',
        options: ['Cocina', 'Mecánica cuántica', 'Reglas de tránsito', 'Etimología'],
        correctAnswer: 1,
        explanation: 'La mecánica cuántica formula sus estados como vectores en espacios complejos.',
      },
    ],
  },

  // ─── IDIOMAS (idio-002 → idio-003) ──────────────────────────────
  {
    id: 'idio-002',
    title: 'El esperanto: El idioma que quiso unir al mundo',
    emoji: '🌐',
    category: 'Idiomas',
    duration: 3,
    difficulty: 'principiante',
    tags: ['esperanto', 'idioma', 'utopía'],
    createdAt: '2025-01-01',
    content: `## Una lengua diseñada

En 1887, el oftalmólogo polaco **Ludwik Zamenhof** publicó la primera gramática del **esperanto** bajo el seudónimo "Doktoro Esperanto" (que significa "el que espera"). Su sueño: una lengua neutral que toda la humanidad pudiera aprender fácil y comunicarse en pie de igualdad.

### Cómo funciona

- **Gramática regular**: 16 reglas básicas y cero excepciones.
- **Vocabulario**: en su mayoría raíces de lenguas romances, germánicas y eslavas.
- **Acento siempre en la penúltima sílaba**.
- **Sufijos consistentes**: todos los sustantivos terminan en -o, los adjetivos en -a, los plurales en -j, los infinitivos en -i.

### Por qué fue diseñada así

Zamenhof creció en una ciudad multilingüe con tensiones étnicas. Pensó que muchos conflictos derivaban de la incomprensión y propuso una lengua puente, no para reemplazar las nacionales sino para añadirse a ellas.

### Hoy

Hay entre **100.000 y 2 millones** de hablantes en el mundo. Una pequeña pero activa comunidad mantiene libros, revistas, podcasts, encuentros internacionales y hasta familias que la hablan en casa como lengua materna.

### Lo que enseña

Aunque no logró su utopía, el esperanto demostró que un idioma puede diseñarse desde cero, ser internamente coherente y aprenderse mucho más rápido que cualquier lengua natural.`,
    quiz: [
      {
        id: 'idio-002-q1',
        type: 'multiple',
        question: '¿Quién creó el esperanto?',
        options: ['Noam Chomsky', 'Ludwik Zamenhof', 'J.R.R. Tolkien', 'Antoine de Saint-Exupéry'],
        correctAnswer: 1,
        explanation: 'El oftalmólogo polaco Ludwik Zamenhof publicó la primera gramática en 1887.',
      },
      {
        id: 'idio-002-q2',
        type: 'truefalse',
        question: '¿La gramática del esperanto tiene muchas excepciones?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Una de sus virtudes es la regularidad: 16 reglas básicas y prácticamente sin excepciones.',
      },
      {
        id: 'idio-002-q3',
        type: 'multiple',
        question: '¿Por qué se eligió que las raíces fueran de varias familias lingüísticas?',
        options: ['Para hacerlo más difícil', 'Para resultar familiar a hablantes de muchas lenguas', 'Para imitar el latín', 'Por moda de la época'],
        correctAnswer: 1,
        explanation: 'La mezcla de raíces facilita el reconocimiento por parte de hablantes de lenguas romances, germánicas y eslavas.',
      },
      {
        id: 'idio-002-q4',
        type: 'multiple',
        question: '¿Qué objetivo tenía Zamenhof?',
        options: ['Reemplazar todas las lenguas', 'Crear una lengua neutral auxiliar para facilitar la comunicación entre pueblos', 'Generar dinero', 'Inventar un código secreto'],
        correctAnswer: 1,
        explanation: 'Buscaba una lengua puente, no sustituta, para reducir conflictos derivados de la incomprensión mutua.',
      },
    ],
  },
  {
    id: 'idio-003',
    title: 'Por qué el inglés es tan difícil (y tan irracional)',
    emoji: '🔤',
    category: 'Idiomas',
    duration: 3,
    difficulty: 'principiante',
    tags: ['inglés', 'lingüística', 'historia'],
    createdAt: '2025-01-01',
    content: `## El idioma franquensteiniano

El inglés parece simple por afuera (sin género, conjugaciones reducidas) pero por dentro es un caos histórico. La razón es su origen: **es un idioma compuesto**.

### Capas

1. **Anglosajón** (raíces germánicas): vocabulario básico — *house*, *man*, *eat*, *water*.
2. **Latín y griego**: por la influencia del cristianismo y la ciencia.
3. **Francés normando** (1066): tras la conquista, las élites hablaban francés. Quedaron miles de palabras nobles: *court*, *justice*, *cuisine*.
4. **Préstamos del mundo entero** (imperio + globalización).

### Por qué la ortografía es tan rara

El inglés se escribió antes de la **Gran Cambio Vocálico** (siglos XIV-XVI), un fenómeno por el que las vocales largas cambiaron de pronunciación. La escritura quedó "fosilizada" en la pronunciación antigua.

Por eso *though*, *through*, *tough*, *thought* y *bough* se escriben parecido y suenan totalmente distinto.

### Otros aprietos

- **Verbos irregulares**: muchísimos (go/went/gone, eat/ate/eaten).
- **Phrasal verbs**: *get up*, *get off*, *get over* significan cosas distintas.
- **Pronunciación impredecible**: muchas palabras hay que aprenderlas una por una.

### Lo bueno

Pese a todo, su gramática básica es relativamente accesible y hay tantos recursos disponibles que el aprendizaje, aunque irregular, es factible para casi cualquiera con constancia.`,
    quiz: [
      {
        id: 'idio-003-q1',
        type: 'multiple',
        question: '¿Qué evento histórico llenó al inglés de vocabulario francés?',
        options: ['El Brexit', 'La conquista normanda en 1066', 'La Revolución Industrial', 'La Reforma'],
        correctAnswer: 1,
        explanation: 'Tras la conquista normanda, el francés fue lengua de la corte por siglos, dejando miles de palabras.',
      },
      {
        id: 'idio-003-q2',
        type: 'truefalse',
        question: '¿La ortografía irregular del inglés se debe en parte al Gran Cambio Vocálico?',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 0,
        explanation: 'Verdadero. El cambio de pronunciación ocurrió después de fijar la escritura, generando la disparidad actual.',
      },
      {
        id: 'idio-003-q3',
        type: 'multiple',
        question: '¿Qué son los "phrasal verbs"?',
        options: ['Verbos cantados', 'Combinaciones de verbo + partícula con significados específicos', 'Verbos en latín', 'Adjetivos compuestos'],
        correctAnswer: 1,
        explanation: 'Son construcciones como get up, get off, get over, donde la partícula altera el significado del verbo.',
      },
      {
        id: 'idio-003-q4',
        type: 'multiple',
        question: '¿De qué familia lingüística proviene la base del inglés?',
        options: ['Romance', 'Germánica', 'Eslava', 'Indígena'],
        correctAnswer: 1,
        explanation: 'La base anglosajona es germánica; las capas latinas y francesas se sumaron después.',
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
