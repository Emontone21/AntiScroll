'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserProgress, AchievementId, QuizScore, Category } from '@/lib/types'
import { isToday, isYesterday, todayString } from '@/lib/utils'
import { lessons } from '@/lib/lessons'
import {
  getPathIndexForLesson,
  getLevelForLesson,
  computePathUnlockedIndex,
  TOTAL_PATH_LESSONS,
} from '@/lib/learningPath'

interface ProgressActions {
  completeLesson: (lessonId: string, minutes: number) => AchievementId[]
  toggleFavorite: (lessonId: string) => void
  saveQuizScore: (lessonId: string, score: number, total: number) => AchievementId[]
  setDailyGoal: (goal: number) => void
  setTheme: (theme: 'light' | 'dark') => void
  setFontSize: (size: 'small' | 'medium' | 'large') => void
  setAudioSpeed: (speed: number) => void
  togglePreferredCategory: (cat: Category) => void
  resetProgress: () => void
  /** Returns true if the lesson is unlocked in the path (or is not part of the path). */
  isLessonUnlockedInPath: (lessonId: string) => boolean
}

type ProgressStore = UserProgress & ProgressActions

const defaultProgress: UserProgress = {
  lessonsCompleted: [],
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: null,
  dailyGoal: 3,
  dailyProgress: 0,
  lastDailyReset: null,
  totalMinutesLearned: 0,
  quizScores: [],
  achievements: [],
  favoriteLessons: [],
  theme: 'light',
  fontSize: 'medium',
  audioSpeed: 1,
  preferredCategories: [],
  pathUnlockedIndex: 0,
  completedLevels: [],
}

function computeStreak(state: UserProgress): { current: number; longest: number } {
  const last = state.lastActivityDate

  if (!last) return { current: 1, longest: Math.max(1, state.longestStreak) }

  if (isToday(last)) {
    return { current: state.currentStreak, longest: state.longestStreak }
  }

  if (isYesterday(last)) {
    const newCurrent = state.currentStreak + 1
    return { current: newCurrent, longest: Math.max(newCurrent, state.longestStreak) }
  }

  return { current: 1, longest: state.longestStreak }
}

function checkAchievements(state: UserProgress, newLessons: string[], newScores: QuizScore[]): AchievementId[] {
  const earned: AchievementId[] = []
  const existing = new Set(state.achievements)

  const total = newLessons.length

  if (total >= 1 && !existing.has('first_lesson')) earned.push('first_lesson')
  if (total >= 10 && !existing.has('lessons_10')) earned.push('lessons_10')
  if (total >= 25 && !existing.has('lessons_25')) earned.push('lessons_25')
  if (total >= 50 && !existing.has('lessons_50')) earned.push('lessons_50')

  const streak = computeStreak(state).current
  if (streak >= 7 && !existing.has('streak_7')) earned.push('streak_7')
  if (streak >= 30 && !existing.has('streak_30')) earned.push('streak_30')

  const allScores = [...state.quizScores, ...newScores]
  const hasPerfect = allScores.some(s => s.score === s.total && s.total > 0)
  if (hasPerfect && !existing.has('perfect_quiz')) earned.push('perfect_quiz')

  const completedCategories = new Set(
    lessons.filter(l => newLessons.includes(l.id)).map(l => l.category)
  )
  if (completedCategories.size >= 5 && !existing.has('category_master')) earned.push('category_master')

  const hour = new Date().getHours()
  if (hour < 8 && !existing.has('early_bird')) earned.push('early_bird')
  if (hour >= 22 && !existing.has('night_owl')) earned.push('night_owl')

  return earned
}

function checkDailyReset(state: UserProgress): Partial<UserProgress> {
  const today = todayString()
  if (state.lastDailyReset !== today) {
    return { dailyProgress: 0, lastDailyReset: today }
  }
  return {}
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      ...defaultProgress,

      completeLesson: (lessonId, minutes) => {
        const state = get()
        const dailyReset = checkDailyReset(state)
        const currentState = { ...state, ...dailyReset }

        if (currentState.lessonsCompleted.includes(lessonId)) {
          if (Object.keys(dailyReset).length) set(dailyReset)
          return []
        }

        const newLessons = [...currentState.lessonsCompleted, lessonId]
        const { current, longest } = computeStreak(currentState)
        const newAchievements = checkAchievements(
          { ...currentState, currentStreak: current },
          newLessons,
          []
        )

        // ── Learning Path logic ──────────────────────────────────────────
        const pathIndex = getPathIndexForLesson(lessonId)
        let newPathUnlockedIndex = currentState.pathUnlockedIndex
        let newCompletedLevels = [...currentState.completedLevels]

        if (pathIndex !== -1) {
          // Unlock the next lesson if this one was the frontier
          const nextIndex = pathIndex + 1
          if (nextIndex > currentState.pathUnlockedIndex && nextIndex < TOTAL_PATH_LESSONS) {
            newPathUnlockedIndex = nextIndex
          }

          // Check if the whole level is now complete
          const level = getLevelForLesson(lessonId)
          if (level && !newCompletedLevels.includes(level.id)) {
            const allDone = level.lessonIds.every(id => newLessons.includes(id))
            if (allDone) {
              newCompletedLevels = [...newCompletedLevels, level.id]
              if (level.id >= 2) {
                newAchievements.push(`path_level_${level.id}` as AchievementId)
              }
            }
          }
        }
        // ────────────────────────────────────────────────────────────────

        set({
          ...dailyReset,
          lessonsCompleted: newLessons,
          currentStreak: current,
          longestStreak: longest,
          lastActivityDate: todayString(),
          dailyProgress: currentState.dailyProgress + 1,
          totalMinutesLearned: currentState.totalMinutesLearned + minutes,
          achievements: [...currentState.achievements, ...newAchievements],
          pathUnlockedIndex: newPathUnlockedIndex,
          completedLevels: newCompletedLevels,
        })

        return newAchievements
      },

      toggleFavorite: (lessonId) => {
        const state = get()
        const isFav = state.favoriteLessons.includes(lessonId)
        set({
          favoriteLessons: isFav
            ? state.favoriteLessons.filter(id => id !== lessonId)
            : [...state.favoriteLessons, lessonId],
        })
      },

      saveQuizScore: (lessonId, score, total) => {
        const state = get()
        const newScore: QuizScore = { lessonId, score, total, date: new Date().toISOString() }
        const newScores = [...state.quizScores, newScore]
        const newAchievements = checkAchievements(state, state.lessonsCompleted, [newScore])

        set({
          quizScores: newScores,
          achievements: [...state.achievements, ...newAchievements],
        })

        return newAchievements
      },

      setDailyGoal: (goal) => set({ dailyGoal: goal }),
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setAudioSpeed: (audioSpeed) => set({ audioSpeed }),

      togglePreferredCategory: (cat) => {
        const state = get()
        const has = state.preferredCategories.includes(cat)
        set({
          preferredCategories: has
            ? state.preferredCategories.filter(c => c !== cat)
            : [...state.preferredCategories, cat],
        })
      },

      resetProgress: () => set(defaultProgress),

      isLessonUnlockedInPath: (lessonId) => {
        const pathIndex = getPathIndexForLesson(lessonId)
        if (pathIndex === -1) return true   // Not in path — always accessible
        return pathIndex <= get().pathUnlockedIndex
      },
    }),
    {
      name: 'microlearn-progress',
      version: 2,
      // Migrate from v0/v1: compute pathUnlockedIndex from existing completions
      migrate: (persistedState: unknown, _version: number) => {
        const state = persistedState as Partial<UserProgress>
        const completed = state.lessonsCompleted ?? []
        const pathUnlockedIndex =
          state.pathUnlockedIndex !== undefined
            ? state.pathUnlockedIndex
            : computePathUnlockedIndex(completed)

        return {
          ...defaultProgress,
          ...state,
          pathUnlockedIndex,
          completedLevels: state.completedLevels ?? [],
        } as UserProgress
      },
    }
  )
)
