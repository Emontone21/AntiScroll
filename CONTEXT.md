# MicroLearn — Documento de Contexto Completo

> Este archivo documenta en detalle qué es la aplicación, cómo funciona, qué hace cada archivo y cómo interactúan los distintos módulos entre sí. Es el punto de referencia para entender el proyecto al 100%.

---

## 1. ¿Qué es MicroLearn?

MicroLearn es una **aplicación web de microaprendizaje** (similar a Duolingo o GenK) que convierte el tiempo de pantalla en conocimiento útil. El usuario aprende a través de **lecciones cortas de 1 a 5 minutos**, acompañadas de **quizzes interactivos** y un **sistema de seguimiento de progreso** con rachas, logros y estadísticas.

### Propósito
- Aprender sobre múltiples temas (Historia, Ciencia, Arte, Tecnología, etc.) en sesiones breves
- Mantener el hábito diario de aprendizaje con un sistema de rachas
- Reforzar lo aprendido con quizzes y retroalimentación inmediata
- Motivar con logros, estadísticas y objetivos personalizables

### Tipo de aplicación
- **Progressive Web App (PWA)**: instalable desde el navegador, funciona offline (con lecciones ya cargadas)
- **100% client-side**: no requiere servidor ni base de datos externa. Todo se almacena en `localStorage` del navegador
- **Mobile-first**: diseñada para ser usada desde el teléfono, con navegación inferior tipo app nativa

---

## 2. Stack Tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| **Next.js** | 16.2.4 | Framework principal (App Router, SSG/SSR) |
| **React** | 19.2.4 | UI rendering |
| **TypeScript** | 5.x | Tipado estático en todo el proyecto |
| **Tailwind CSS** | 4.x | Estilos utility-first |
| **Zustand** | 5.x | Gestión de estado global con persistencia |
| **Lucide React** | 1.x | Iconos SVG |
| **Framer Motion** | 12.x | Instalado (disponible para animaciones) |
| **Radix UI** | varios | Componentes accesibles (Dialog, Progress, Tabs, etc.) |
| **clsx + tailwind-merge** | — | Utilidades para combinar clases CSS |
| **Web Speech API** | nativa | Text-to-Speech para modo audio (sin dependencias externas) |

---

## 3. Estructura de Directorios

```
microlearn/
│
├── app/                          # Rutas de Next.js (App Router)
│   ├── layout.tsx                # Layout raíz: fuente, metadata, Navbar, ThemeProvider
│   ├── globals.css               # Estilos globales, variables CSS, prose-lesson
│   ├── page.tsx                  # Ruta "/" → Home/Dashboard
│   ├── explore/
│   │   └── page.tsx              # Ruta "/explore" → Explorar lecciones
│   ├── library/
│   │   └── page.tsx              # Ruta "/library" → Biblioteca personal
│   ├── progress/
│   │   └── page.tsx              # Ruta "/progress" → Estadísticas y logros
│   ├── settings/
│   │   └── page.tsx              # Ruta "/settings" → Configuración
│   └── lesson/
│       └── [id]/
│           └── page.tsx          # Ruta "/lesson/[id]" → Lector de lección + Quiz
│
├── components/                   # Componentes React reutilizables
│   ├── layout/
│   │   ├── Navbar.tsx            # Barra de navegación inferior (mobile)
│   │   └── ThemeProvider.tsx     # Aplica tema claro/oscuro y tamaño de fuente
│   ├── lesson/
│   │   ├── LessonCard.tsx        # Tarjeta de lección (modo normal y compacto)
│   │   └── AchievementToast.tsx  # Notificación flotante de logro desbloqueado
│   ├── quiz/
│   │   └── QuizComponent.tsx     # Quiz interactivo completo con resumen final
│   └── ui/
│       ├── Badge.tsx             # Etiqueta/chip de categoría o estado
│       ├── Button.tsx            # Botón con variantes (primary, secondary, ghost, etc.)
│       ├── Card.tsx              # Contenedor tipo tarjeta con header/content/footer
│       ├── Modal.tsx             # Diálogo modal con overlay y cierre por Escape
│       └── Progress.tsx          # Barra de progreso animada
│
├── lib/                          # Lógica pura, tipos y datos
│   ├── types.ts                  # Interfaces y tipos TypeScript de todo el dominio
│   ├── lessons.ts                # Base de datos de 30 lecciones con quizzes
│   ├── achievements.ts           # Definición de los 10 logros disponibles
│   └── utils.ts                  # Funciones helper: cn(), fechas, saludo, etc.
│
├── store/
│   └── useProgressStore.ts       # Store Zustand: todo el estado del usuario
│
├── public/
│   └── manifest.json             # PWA manifest (nombre, íconos, colores)
│
├── next.config.ts                # Configuración de Next.js (vacía, defaults)
├── tsconfig.json                 # Configuración TypeScript con path alias "@/*"
├── postcss.config.mjs            # Configuración PostCSS para Tailwind v4
├── eslint.config.mjs             # Reglas ESLint
└── package.json                  # Dependencias y scripts
```

---

## 4. Modelo de Datos (`lib/types.ts`)

Este archivo define todas las interfaces TypeScript del dominio. Es el contrato central del proyecto.

### `Lesson` — Una lección
```typescript
interface Lesson {
  id: string           // "hist-001", "cien-002", etc.
  title: string        // Título visible al usuario
  content: string      // Contenido en Markdown
  category: Category   // Una de las 15 categorías disponibles
  duration: number     // Duración estimada en minutos (1-5)
  difficulty: Difficulty // "principiante" | "intermedio" | "avanzado"
  emoji: string        // Emoji representativo ("🏛️", "🔬", etc.)
  quiz: QuizQuestion[] // Array de 3-5 preguntas
  createdAt: string    // Fecha ISO de creación
  tags: string[]       // Tags para búsqueda
}
```

### `QuizQuestion` — Una pregunta del quiz
```typescript
interface QuizQuestion {
  id: string           // ID único
  question: string     // Texto de la pregunta
  options: string[]    // Array de opciones (2 para V/F, 4 para múltiple)
  correctAnswer: number // Índice de la respuesta correcta en options[]
  explanation: string  // Explicación que se muestra tras responder
  type: 'multiple' | 'truefalse'
}
```

### `UserProgress` — Todo el progreso del usuario
```typescript
interface UserProgress {
  lessonsCompleted: string[]     // IDs de lecciones completadas
  currentStreak: number          // Racha actual en días
  longestStreak: number          // Mejor racha histórica
  lastActivityDate: string|null  // Última fecha de actividad (YYYY-MM-DD)
  dailyGoal: number              // Meta de lecciones por día (1-10)
  dailyProgress: number          // Lecciones hechas hoy
  lastDailyReset: string|null    // Cuándo se reseteó el contador diario
  totalMinutesLearned: number    // Suma de duración de todas las lecciones
  quizScores: QuizScore[]        // Historial de puntuaciones de quizzes
  achievements: AchievementId[]  // IDs de logros desbloqueados
  favoriteLessons: string[]      // IDs de lecciones marcadas como favoritas
  theme: 'light' | 'dark'
  fontSize: 'small' | 'medium' | 'large'
  audioSpeed: number             // Velocidad de TTS (0.5 a 2.0)
  preferredCategories: Category[]
}
```

### `Category` — Las 15 categorías disponibles
```
Historia | Ciencia | Arte | Cine | Tecnología | Idiomas | Curiosidades |
Sociedad | Música | Literatura | Geografía | Filosofía | Economía | Naturaleza | Matemáticas
```

---

## 5. Base de Datos de Lecciones (`lib/lessons.ts`)

Contiene las **30 lecciones** con su contenido y quizzes. No hay base de datos externa; todo está hardcodeado en este archivo TypeScript.

### Lecciones disponibles por categoría

| Categoría | ID | Título |
|---|---|---|
| Historia | hist-001 | La caída del Imperio Romano |
| Historia | hist-002 | La Revolución Francesa en 5 minutos |
| Historia | hist-003 | La Gran Muralla China: Mitos y realidades |
| Historia | hist-004 | La Ruta de la Seda: El primer mundo globalizado |
| Ciencia | cien-001 | Por qué el cielo es azul |
| Ciencia | cien-002 | ADN: El manual de instrucciones de la vida |
| Ciencia | cien-003 | Los agujeros negros: Devoradores del cosmos |
| Ciencia | cien-004 | Relatividad: El tiempo no es lo que crees |
| Tecnología | tech-001 | Cómo funciona Internet |
| Tecnología | tech-002 | Inteligencia Artificial: Desmitificando la IA |
| Tecnología | tech-003 | Blockchain: Más allá de las criptomonedas |
| Arte | arte-001 | Por qué La Mona Lisa es tan famosa |
| Arte | arte-002 | La música de Bach: Matemática pura convertida en arte |
| Música | mus-001 | Por qué la música nos produce escalofríos |
| Geografía | geo-001 | Por qué Australia tiene fauna tan extraña |
| Geografía | geo-002 | Antártida: El continente del misterio |
| Filosofía | filo-001 | El dilema del tranvía: ¿Matarías a uno para salvar a cinco? |
| Filosofía | filo-002 | Estoicismo: La filosofía que te hace más resiliente |
| Literatura | lit-001 | Don Quijote: El primer antihéroe moderno |
| Curiosidades | cur-001 | Por qué bostezamos (y por qué es contagioso) |
| Curiosidades | cur-002 | El sueño: Por qué dormimos y qué pasa cuando lo hacemos |
| Economía | econ-001 | Inflación: Por qué el dinero pierde valor |
| Naturaleza | nat-001 | Los árboles se comunican bajo tierra |
| Naturaleza | nat-002 | El increíble viaje del salmón |
| Cine | cine-001 | Cómo se inventó el cine |
| Matemáticas | mat-001 | El número Pi: Mucho más que 3.14 |
| Matemáticas | mat-002 | La paradoja de Zenón: ¿Puedes llegar al otro lado? |
| Sociedad | soc-001 | La psicología del conformismo: Experimento de Asch |
| Sociedad | soc-002 | Redes sociales y cerebro: La dopamina digital |
| Idiomas | idio-001 | Por qué aprender un idioma cambia tu cerebro |

### Funciones exportadas de `lessons.ts`
```typescript
lessons              // Array con las 30 lecciones
categories           // Array de categorías únicas derivado de lessons
getLessonById(id)    // Busca una lección por ID
getLessonsByCategory(cat) // Filtra por categoría
searchLessons(query) // Búsqueda por título, contenido o tags
```

---

## 6. Sistema de Logros (`lib/achievements.ts`)

Define los 10 logros desbloqueables. La lógica de desbloqueo vive en el store.

| ID | Emoji | Título | Condición |
|---|---|---|---|
| `first_lesson` | 🌱 | Primer Paso | Completar 1 lección |
| `lessons_10` | 🚀 | En Marcha | Completar 10 lecciones |
| `lessons_25` | 📚 | Aprendiz Dedicado | Completar 25 lecciones |
| `lessons_50` | 🎓 | Maestro del Conocimiento | Completar 50 lecciones |
| `streak_7` | 🔥 | Una Semana Imparable | 7 días consecutivos |
| `streak_30` | ⚡ | Mes de Dedicación | 30 días consecutivos |
| `perfect_quiz` | 💯 | Quiz Perfecto | 100% en cualquier quiz |
| `early_bird` | 🌅 | Madrugador | Lección antes de las 8 AM |
| `night_owl` | 🦉 | Noctámbulo | Lección después de las 10 PM |
| `category_master` | 🏆 | Especialista | Lecciones de 5 categorías distintas |

---

## 7. Estado Global (`store/useProgressStore.ts`)

El store de Zustand es el **cerebro del estado** de la aplicación. Persiste automáticamente en `localStorage` con la clave `microlearn-progress`.

### Acciones disponibles

```typescript
completeLesson(lessonId, minutes) → AchievementId[]
  // Marca lección como completada, actualiza racha, minutos totales,
  // progreso diario y verifica si se desbloquearon nuevos logros.
  // Retorna los IDs de logros recién desbloqueados (para mostrar toast).

toggleFavorite(lessonId)
  // Agrega o quita una lección de favoriteLessons.

saveQuizScore(lessonId, score, total) → AchievementId[]
  // Guarda la puntuación del quiz y verifica logros (ej: perfect_quiz).

setDailyGoal(goal)       // Cambia el objetivo diario (1-10)
setTheme(theme)          // 'light' | 'dark'
setFontSize(size)        // 'small' | 'medium' | 'large'
setAudioSpeed(speed)     // 0.5 a 2.0
togglePreferredCategory(cat)  // Agrega/quita categoría de preferidas
resetProgress()          // Resetea todo al estado inicial
```

### Lógica de racha (streak)

La racha se calcula cada vez que se llama a `completeLesson`:

1. Si `lastActivityDate` es **hoy** → racha no cambia (ya contó)
2. Si `lastActivityDate` es **ayer** → racha se incrementa en 1
3. Si `lastActivityDate` es **antes de ayer o null** → racha se resetea a 1

### Lógica del objetivo diario

Cada vez que se ejecuta una acción, se verifica si `lastDailyReset` es distinto de la fecha de hoy. Si es un día nuevo, `dailyProgress` se resetea a 0 automáticamente.

---

## 8. Páginas y Rutas

### `/` — Home (`app/page.tsx`)
**Propósito:** Dashboard principal con resumen del día y acceso rápido.

**Secciones:**
- Header con gradiente morado: saludo según hora del día, tres stats (racha, lecciones, minutos)
- Tarjeta de objetivo diario con barra de progreso
- Botón "Continuar aprendiendo" → primera lección no completada
- Logros recientes (últimos 3 desbloqueados)
- Grid de 6 categorías con contador de progreso
- Lista de 4 lecciones recientes en modo compacto

**Datos usados:** `useProgressStore` (streak, dailyGoal, dailyProgress, lessonsCompleted, achievements, totalMinutesLearned)

---

### `/explore` — Explorar (`app/explore/page.tsx`)
**Propósito:** Buscador y filtro de todas las lecciones.

**Funcionalidades:**
- Barra de búsqueda en tiempo real (filtra por título, categoría y tags)
- Pills horizontales con scroll para filtrar por categoría
- Panel de filtros (toggle): filtra por dificultad (principiante/intermedio/avanzado)
- Contador de resultados en tiempo real
- Grid de tarjetas de lecciones (`LessonCard`)
- Soporte de query param `?cat=Historia` para pre-filtrar desde Home

**Nota técnica:** Usa `Suspense` porque `useSearchParams()` requiere suspensión en Next.js App Router.

---

### `/library` — Biblioteca (`app/library/page.tsx`)
**Propósito:** Colección personal del usuario.

**Tabs:**
- **Favoritos**: lecciones marcadas con ❤️ desde cualquier `LessonCard`
- **Completados**: lecciones que el usuario marcó como terminadas
- **Todas**: listado completo de lecciones

---

### `/progress` — Progreso (`app/progress/page.tsx`)
**Propósito:** Estadísticas completas y logros.

**Secciones:**
- Tarjeta de racha: racha actual (con llama animada), mejor racha, objetivo del día
- Grid de 4 métricas: lecciones, minutos, promedio quiz, logros
- Barra de progreso general (% del total de lecciones completadas)
- Top 5 categorías más estudiadas con barra de progreso por categoría
- Grid completo de los 10 logros (oscurecidos los no desbloqueados)

---

### `/settings` — Ajustes (`app/settings/page.tsx`)
**Propósito:** Configuración de la experiencia de usuario.

**Secciones:**
- **Apariencia:** toggle modo oscuro, selector de tamaño de fuente (A / AA / AAA)
- **Aprendizaje:** ajuste de objetivo diario (botones +/-)
- **Audio:** slider de velocidad de lectura en voz alta (0.5x a 2.0x)
- **Mi cuenta:** resumen de lecciones completadas y racha actual
- **Zona de peligro:** botón de resetear progreso con modal de confirmación

---

### `/lesson/[id]` — Lector de lección (`app/lesson/[id]/page.tsx`)
**Propósito:** Lectura de una lección y realización del quiz.

**Flujo del usuario:**
1. Entra a la lección desde cualquier `LessonCard`
2. Ve la lección en la pestaña "Lección" (contenido Markdown renderizado)
3. Puede activar la lectura en voz alta (botón de audio en el header)
4. La barra superior muestra el progreso de scroll de la lección
5. Puede marcar la lección como completada → se actualiza el store y puede aparecer un toast de logro
6. Cambia a la pestaña "Quiz" y responde las preguntas
7. Tras el quiz, ve el resumen con puntaje, revisión de cada pregunta y navega a `/progress`

**Funcionalidades especiales:**
- Renderizado de Markdown: convierte `##`, `###`, `**texto**`, listas `-` en HTML con estilos
- Text-to-Speech: usa `window.speechSynthesis` (Web Speech API nativa del navegador, sin dependencias)
- Barra de progreso de scroll: mide `scrollTop / (scrollHeight - clientHeight)`
- `AchievementToast`: aparece en la parte superior de la pantalla con animación CSS si se desbloquea un logro al completar la lección

---

## 9. Componentes

### `components/layout/Navbar.tsx`
Barra de navegación fija en la parte inferior de la pantalla (estilo mobile app nativa).

- 5 ítems: Inicio, Explorar, Biblioteca, Progreso, Ajustes
- El ícono de Inicio muestra un badge naranja con el número de la racha actual si es > 0
- El ítem activo se resalta en índigo con `strokeWidth` más grueso
- Usa `usePathname()` para detectar la ruta activa

### `components/layout/ThemeProvider.tsx`
Componente client-side que sincroniza el estado del store con el DOM.

- Cuando `theme === 'dark'` → agrega clase `dark` a `<html>`
- Cuando `fontSize` cambia → modifica `document.documentElement.style.fontSize`
- Esto permite que Tailwind dark mode y el tamaño base de fuente se apliquen globalmente

### `components/lesson/LessonCard.tsx`
Tarjeta de lección con dos modos:

**Modo normal** (`compact={false}`, por defecto):
- Emoji grande, badges de categoría y dificultad, título, duración y cantidad de preguntas
- Botón de favorito (corazón) en la esquina superior derecha
- Check verde si ya fue completada
- Efecto hover (sombra + ligero movimiento hacia arriba)

**Modo compacto** (`compact={true}`):
- Fila horizontal con emoji pequeño, título y categoría/duración en línea
- Fondo índigo si está completada, blanco si no

### `components/lesson/AchievementToast.tsx`
Notificación flotante que aparece en la parte superior de la pantalla durante 3.5 segundos cuando se desbloquea un logro. Usa animación CSS con `opacity` y `translateY`. Se auto-descarta y llama `onDismiss` al terminar.

### `components/quiz/QuizComponent.tsx`
El motor del quiz. Estados internos:
- `currentQ`: índice de la pregunta actual
- `selected`: opción seleccionada por el usuario
- `answered`: si ya respondió la pregunta actual
- `results`: array acumulado de resultados por pregunta
- `showSummary`: si mostrar la pantalla de resumen final

**Flujo:**
1. Muestra la pregunta con sus opciones como botones
2. Al hacer click → colorea correcta (verde) e incorrecta (rojo), muestra explicación
3. Botón "Siguiente" → avanza a la próxima pregunta
4. En la última pregunta → muestra pantalla de resumen con emoji según puntaje, revisión de todas las preguntas y botón para navegar a progreso

### `components/ui/Button.tsx`
Botón con 5 variantes de color y 3 tamaños. Acepta `loading` (muestra spinner). Usa `forwardRef` para compatibilidad con librerías de UI.

### `components/ui/Badge.tsx`
Etiqueta inline redondeada con 5 variantes (default/outline/success/warning/info) y 2 tamaños.

### `components/ui/Card.tsx`
Contenedor de tarjeta con sub-componentes `CardHeader`, `CardContent`, `CardFooter`. Acepta `hover` para efecto interactivo y `onClick`.

### `components/ui/Progress.tsx`
Barra de progreso. Acepta `value`, `max`, tamaño (`sm/md/lg`), y clases CSS para la barra interna. Calcula el porcentaje y aplica `width` dinámico con transición CSS.

### `components/ui/Modal.tsx`
Diálogo modal con:
- Overlay oscuro semitransparente
- Cierre al hacer click fuera del modal
- Cierre con tecla Escape
- Bloqueo del scroll del body mientras está abierto
- Animación de entrada con `zoom-in-95`

---

## 10. Utilidades (`lib/utils.ts`)

```typescript
cn(...classes)         // Combina clases CSS con clsx + tailwind-merge
                       // Resuelve conflictos de clases Tailwind

formatDate(dateStr)    // "2024-01-15" → "15 de enero de 2024" (español)

isToday(dateStr)       // Verdadero si la fecha es hoy
isYesterday(dateStr)   // Verdadero si la fecha fue ayer
todayString()          // Retorna la fecha de hoy en formato "YYYY-MM-DD"

getGreeting()          // "¡Buenos días", "¡Buenas tardes" o "¡Buenas noches"
                       // Según la hora actual del sistema

pluralize(n, sing, pl) // Retorna "1 lección" o "5 lecciones"
```

---

## 11. Estilos (`app/globals.css`)

El archivo CSS global configura:

- **Font base**: Inter via variable CSS `--font-inter`
- **`.scrollbar-hide`**: clase utilitaria para ocultar scrollbars (usada en las pills de categorías)
- **`.pb-safe`**: padding-bottom con `env(safe-area-inset-bottom)` para iPhones con notch
- **`.prose-lesson`**: estilos para el contenido de lecciones renderizado como HTML desde Markdown (h2, h3, p, strong, li, ul)
- **`@keyframes zoom-in`** y **`.animate-in .zoom-in-95`**: animación de entrada del Modal
- **Smooth scroll**: `scroll-behavior: smooth` en `html`
- **`-webkit-tap-highlight-color: transparent`** en botones y links (evita el flash azul en mobile)

---

## 12. Configuración PWA (`public/manifest.json`)

```json
{
  "name": "MicroLearn",
  "short_name": "MicroLearn",
  "display": "standalone",    // Se comporta como app nativa (sin barra del navegador)
  "background_color": "#f9fafb",
  "theme_color": "#4f46e5",   // Índigo — color de la barra de status en Android
  "start_url": "/"
}
```

Esto permite que el usuario instale MicroLearn desde Chrome/Safari como si fuera una app.

---

## 13. Flujo Completo de Usuario

```
Usuario abre la app (localhost:3000)
│
├─► HOME (/)
│   ├─ Ve su racha, objetivo del día, stats generales
│   ├─ Ve la próxima lección pendiente → click → va a /lesson/[id]
│   └─ Ve categorías → click → va a /explore?cat=Historia
│
├─► EXPLORAR (/explore)
│   ├─ Busca "einstein" → filtra en tiempo real
│   ├─ Selecciona categoría "Ciencia" → filtra
│   └─ Hace click en lección → va a /lesson/[id]
│
├─► LECCIÓN (/lesson/[id])
│   ├─ Lee el contenido (con scroll que muestra barra de progreso)
│   ├─ Opcional: activa audio (TTS) → escucha la lección
│   ├─ Opcional: marca como favorita (❤️)
│   ├─ Marca como completada → store actualiza racha/minutos/logros
│   │   └─ Si hay logro nuevo → aparece AchievementToast por 3.5s
│   └─ Va a pestaña "Quiz"
│       ├─ Responde las preguntas una a una
│       ├─ Ve retroalimentación inmediata por pregunta
│       └─ Termina → store guarda puntuación → navega a /progress
│
├─► BIBLIOTECA (/library)
│   ├─ Tab Favoritos → lecciones guardadas con ❤️
│   ├─ Tab Completados → historial de lo aprendido
│   └─ Tab Todas → todas las lecciones
│
├─► PROGRESO (/progress)
│   ├─ Ve racha actual, mejor racha
│   ├─ Ve métricas: lecciones, minutos, promedio quiz, logros
│   ├─ Ve progreso general y por categoría
│   └─ Ve grid de logros (desbloqueados brillantes, pendientes opacos)
│
└─► AJUSTES (/settings)
    ├─ Cambia tema claro/oscuro → ThemeProvider lo aplica al DOM
    ├─ Cambia tamaño de fuente → ThemeProvider ajusta fontSize en <html>
    ├─ Cambia objetivo diario (1-10 lecciones/día)
    ├─ Cambia velocidad de audio (0.5x - 2.0x)
    └─ Resetea todo el progreso (con modal de confirmación)
```

---

## 14. Cómo Agregar Contenido Nuevo

### Agregar una lección nueva

Editar `lib/lessons.ts` y agregar un objeto al array `lessons`:

```typescript
{
  id: 'cat-XXX',          // Prefijo de categoría + número único
  title: 'Título',
  emoji: '🎯',
  category: 'Ciencia',    // Debe ser un valor del tipo Category
  duration: 3,            // Minutos estimados de lectura
  difficulty: 'principiante',
  tags: ['tag1', 'tag2'],
  createdAt: '2024-02-01',
  content: `## Título principal\n\nTexto en Markdown...`,
  quiz: [
    {
      id: 'cat-XXX-q1',
      type: 'multiple',
      question: '¿Pregunta?',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 1,   // Índice base 0
      explanation: 'Porque...',
    },
  ],
}
```

### Agregar una categoría nueva

1. Agregar el string al tipo `Category` en `lib/types.ts`
2. Agregar el emoji en los objetos `CATEGORY_EMOJIS` en `app/page.tsx` y `app/explore/page.tsx`
3. Agregar el gradiente en `CATEGORY_COLORS` en `app/page.tsx`

### Agregar un logro nuevo

1. Agregar el ID al tipo `AchievementId` en `lib/types.ts`
2. Agregar el objeto en el array `ACHIEVEMENTS` en `lib/achievements.ts`
3. Agregar la lógica de desbloqueo en la función `checkAchievements` dentro de `store/useProgressStore.ts`

---

## 15. Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:3000)
npm run dev

# Verificar tipos TypeScript
npx tsc --noEmit

# Build de producción
npm run build

# Iniciar servidor de producción (requiere build previo)
npm run start

# Linting
npm run lint
```

---

## 16. Persistencia de Datos

Toda la información del usuario se guarda en **`localStorage`** del navegador bajo la clave `microlearn-progress`. Zustand con el middleware `persist` serializa/deserializa automáticamente el estado.

**Implicaciones:**
- Los datos **no se comparten** entre dispositivos ni navegadores
- Si el usuario limpia los datos del navegador, pierde su progreso
- No hay sistema de login ni sincronización con servidor
- Para respaldar el progreso, el usuario puede exportar su `localStorage` manualmente (o se puede agregar una función de export/import como mejora futura)

---

## 17. Decisiones de Diseño

| Decisión | Razón |
|---|---|
| No hay backend ni base de datos | Simplicidad de despliegue, funciona como PWA offline |
| Contenido hardcodeado en TypeScript | Tipado estático, sin queries, cero latencia |
| Markdown renderizado con regex | Sin dependencia de `react-markdown`, bundle más pequeño |
| Web Speech API para audio | API nativa del navegador, cero dependencias externas |
| Zustand sobre Redux | API mínima, menos boilerplate, integración nativa con React 19 |
| Tailwind v4 | PostCSS-based, más rápido, sin archivo de config separado |
| App Router de Next.js | Mejor DX, Server Components disponibles si se necesitan en el futuro |
| `'use client'` en todas las páginas | Necesario por Zustand, localStorage y Speech API |
