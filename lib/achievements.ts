import { Achievement } from './types'

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_lesson', title: 'Primer Paso', description: 'Completa tu primera lección', emoji: '🌱' },
  { id: 'lessons_10', title: 'En Marcha', description: 'Completa 10 lecciones', emoji: '🚀' },
  { id: 'lessons_25', title: 'Aprendiz Dedicado', description: 'Completa 25 lecciones', emoji: '📚' },
  { id: 'lessons_50', title: 'Maestro del Conocimiento', description: 'Completa 50 lecciones', emoji: '🎓' },
  { id: 'streak_7', title: 'Una Semana Imparable', description: '7 días consecutivos aprendiendo', emoji: '🔥' },
  { id: 'streak_30', title: 'Mes de Dedicación', description: '30 días consecutivos aprendiendo', emoji: '⚡' },
  { id: 'perfect_quiz', title: 'Quiz Perfecto', description: 'Obtén 100% en un quiz', emoji: '💯' },
  { id: 'early_bird', title: 'Madrugador', description: 'Completa una lección antes de las 8 AM', emoji: '🌅' },
  { id: 'night_owl', title: 'Noctámbulo', description: 'Completa una lección después de las 10 PM', emoji: '🦉' },
  { id: 'category_master', title: 'Especialista', description: 'Completa lecciones de 5 categorías diferentes', emoji: '🏆' },
  // Learning path level completions
  { id: 'path_level_2', title: 'Explorador', description: 'Completaste el Nivel 2: Explorador', emoji: '🧭' },
  { id: 'path_level_3', title: 'Pensador', description: 'Completaste el Nivel 3: Pensador', emoji: '💡' },
  { id: 'path_level_4', title: 'Erudito', description: 'Completaste el Nivel 4: Erudito', emoji: '📚' },
  { id: 'path_level_5', title: 'Sabio', description: 'Completaste el Nivel 5: Sabio', emoji: '🔭' },
  { id: 'path_level_6', title: 'Maestro del Conocimiento', description: '¡Completaste toda la ruta de aprendizaje!', emoji: '🏆' },
]

export function getAchievement(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find(a => a.id === id)
}
