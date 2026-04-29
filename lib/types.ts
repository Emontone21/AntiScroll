export type Difficulty = 'principiante' | 'intermedio' | 'avanzado'

export type Category =
  | 'Historia'
  | 'Ciencia'
  | 'Arte'
  | 'Cine'
  | 'Tecnología'
  | 'Idiomas'
  | 'Curiosidades'
  | 'Sociedad'
  | 'Música'
  | 'Literatura'
  | 'Geografía'
  | 'Filosofía'
  | 'Economía'
  | 'Naturaleza'
  | 'Deportes'
  | 'Matemáticas'

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  type: 'multiple' | 'truefalse'
}

export interface Lesson {
  id: string
  title: string
  content: string
  category: Category
  duration: number
  difficulty: Difficulty
  emoji: string
  quiz: QuizQuestion[]
  createdAt: string
  tags: string[]
}

export interface QuizScore {
  lessonId: string
  score: number
  total: number
  date: string
}

export type AchievementId =
  | 'first_lesson'
  | 'streak_7'
  | 'streak_30'
  | 'lessons_50'
  | 'perfect_quiz'
  | 'category_master'
  | 'early_bird'
  | 'night_owl'
  | 'lessons_10'
  | 'lessons_25'
  | 'path_level_2'
  | 'path_level_3'
  | 'path_level_4'
  | 'path_level_5'
  | 'path_level_6'

export interface Achievement {
  id: AchievementId
  title: string
  description: string
  emoji: string
  unlockedAt?: string
}

export interface UserProgress {
  lessonsCompleted: string[]
  currentStreak: number
  longestStreak: number
  lastActivityDate: string | null
  dailyGoal: number
  dailyProgress: number
  lastDailyReset: string | null
  totalMinutesLearned: number
  quizScores: QuizScore[]
  achievements: AchievementId[]
  favoriteLessons: string[]
  theme: 'light' | 'dark'
  fontSize: 'small' | 'medium' | 'large'
  audioSpeed: number
  preferredCategories: Category[]
  /** 0-based global path index of the latest unlocked lesson. Starts at 0 (first lesson only). */
  pathUnlockedIndex: number
  /** IDs (1-6) of levels whose 5 lessons have all been completed. */
  completedLevels: number[]
}

export interface DailyStats {
  date: string
  lessonsCompleted: number
  minutesLearned: number
}
