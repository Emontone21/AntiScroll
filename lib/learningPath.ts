/**
 * Learning Path — 30 lecciones agrupadas en 6 niveles de 5 cada uno.
 * Los colores de cada nivel referencian variables CSS chalk definidas en globals.css.
 */

export interface PathLevel {
  id: number
  name: string
  emoji: string
  description: string
  color: string        // CSS var del color chalk del nivel
  softColor: string    // CSS var del soft tint para fondos
  lessonIds: string[]  // 5 IDs de lecciones en orden
}

export interface LearningPath {
  levels: PathLevel[]
  totalLessons: number
}

export const learningPath: LearningPath = {
  totalLessons: 30,
  levels: [
    {
      id: 1,
      name: 'Curioso',
      emoji: '🌱',
      description: 'Tus primeros pasos en el saber',
      color: 'var(--accent-success)',
      softColor: 'var(--accent-success-soft)',
      lessonIds: ['hist-001', 'cien-001', 'cur-001', 'geo-001', 'idio-001'],
    },
    {
      id: 2,
      name: 'Explorador',
      emoji: '🧭',
      description: 'Ampliá tus horizontes',
      color: 'var(--accent-info)',
      softColor: 'var(--accent-info-soft)',
      lessonIds: ['tech-001', 'nat-001', 'soc-001', 'arte-001', 'mus-001'],
    },
    {
      id: 3,
      name: 'Pensador',
      emoji: '💡',
      description: 'Profundizá tu pensamiento crítico',
      color: 'var(--accent-warning)',
      softColor: 'var(--accent-warning-soft)',
      lessonIds: ['filo-001', 'econ-001', 'lit-001', 'cine-001', 'mat-001'],
    },
    {
      id: 4,
      name: 'Erudito',
      emoji: '📚',
      description: 'El saber se vuelve profundo',
      color: 'var(--accent-primary)',
      softColor: 'var(--accent-primary-soft)',
      lessonIds: ['hist-002', 'cien-002', 'cur-002', 'geo-002', 'tech-002'],
    },
    {
      id: 5,
      name: 'Sabio',
      emoji: '🔭',
      description: 'Conectás ideas entre disciplinas',
      color: 'var(--accent-info)',
      softColor: 'var(--accent-info-soft)',
      lessonIds: ['nat-002', 'soc-002', 'arte-002', 'filo-002', 'tech-003'],
    },
    {
      id: 6,
      name: 'Maestro',
      emoji: '🏆',
      description: '¡La cima del conocimiento!',
      color: 'var(--accent-warning)',
      softColor: 'var(--accent-warning-soft)',
      lessonIds: ['hist-003', 'hist-004', 'cien-003', 'cien-004', 'mat-002'],
    },
  ],
}

/** Flat ordered list of all 30 lesson IDs in path order. */
const flatPath: string[] = learningPath.levels.flatMap(level => level.lessonIds)

export const TOTAL_PATH_LESSONS = 30

/**
 * Returns the 0-based global index (0-29) of a lesson in the path.
 * Returns -1 if the lesson is not part of the path.
 */
export function getPathIndexForLesson(lessonId: string): number {
  return flatPath.indexOf(lessonId)
}

/**
 * Returns the level that contains a lesson, or null if it's not in the path.
 */
export function getLevelForLesson(lessonId: string): PathLevel | null {
  return learningPath.levels.find(level => level.lessonIds.includes(lessonId)) ?? null
}

/**
 * Returns the lessonId at a given global index (0-29), or null if out of bounds.
 */
export function getLessonAtIndex(index: number): string | null {
  return flatPath[index] ?? null
}

/**
 * Given a list of completed lesson IDs, computes what pathUnlockedIndex should be.
 * Returns the index of the next lesson to unlock (= highest path-index completed + 1),
 * floored at 0.
 */
export function computePathUnlockedIndex(completedLessons: string[]): number {
  let max = -1
  for (const id of completedLessons) {
    const idx = getPathIndexForLesson(id)
    if (idx !== -1 && idx > max) max = idx
  }
  return Math.max(0, max + 1 > TOTAL_PATH_LESSONS ? TOTAL_PATH_LESSONS - 1 : max + 1 === 0 && max === -1 ? 0 : max + 1)
}
