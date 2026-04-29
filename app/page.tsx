'use client'
import Link from 'next/link'
import { useProgressStore } from '@/store/useProgressStore'
import { lessons, getLessonById } from '@/lib/lessons'
import { LessonCard } from '@/components/lesson/LessonCard'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { getGreeting, categoryColor, categorySoftBg } from '@/lib/utils'
import { Flame, Target, BookOpen, TrendingUp, ChevronRight, Map } from 'lucide-react'
import { ACHIEVEMENTS } from '@/lib/achievements'
import { learningPath, getLevelForLesson } from '@/lib/learningPath'

const CATEGORY_EMOJIS: Record<string, string> = {
  Historia: '🏛️', Ciencia: '🔬', Arte: '🎨', Cine: '🎬',
  Tecnología: '💻', Idiomas: '🌍', Curiosidades: '🤔', Sociedad: '👥',
  Música: '🎵', Literatura: '📖', Geografía: '🗺️', Filosofía: '🤯',
  Economía: '💰', Naturaleza: '🌿', Matemáticas: '📐',
}

export default function HomePage() {
  const { currentStreak, dailyGoal, dailyProgress, lessonsCompleted, achievements, totalMinutesLearned, pathUnlockedIndex } = useProgressStore()
  const theme = useProgressStore(s => s.theme)

  const pctDaily = Math.min(100, (dailyProgress / dailyGoal) * 100)

  // Path: find the current lesson (first unlocked & not completed)
  const flatPathIds = learningPath.levels.flatMap(l => l.lessonIds)
  const currentPathLessonId = flatPathIds.find(
    (id, idx) => idx <= pathUnlockedIndex && !lessonsCompleted.includes(id)
  ) ?? null
  const currentPathLesson = currentPathLessonId ? getLessonById(currentPathLessonId) : null
  const currentPathLevel = currentPathLessonId ? getLevelForLesson(currentPathLessonId) : null
  const levelCompletedCount = currentPathLevel
    ? currentPathLevel.lessonIds.filter(id => lessonsCompleted.includes(id)).length
    : 0

  const nextLesson = lessons.find(l => !lessonsCompleted.includes(l.id))
  const categories = [...new Set(lessons.map(l => l.category))]
  const featuredCategories = categories.slice(0, 6)
  const recentAchievements = achievements.slice(-3).map(id => ACHIEVEMENTS.find(a => a.id === id)).filter(Boolean)

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Header — flat Notion card, accents only on icons / numbers */}
      <div className="px-5 pt-14 pb-6">
        <div className="max-w-md mx-auto">
          <div
            className="rounded-lg p-5"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{getGreeting()}!</p>
            <h1 className="text-2xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
              ¿Qué aprendemos hoy?
            </h1>
            <div className="grid grid-cols-3 gap-3">
              <div
                className="rounded-lg p-3 text-center"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Flame size={18} style={{ color: 'var(--accent-warning)' }} />
                  <span className="text-xl font-bold" style={{ color: 'var(--accent-primary)' }}>
                    {currentStreak}
                  </span>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Racha días</p>
              </div>
              <div
                className="rounded-lg p-3 text-center"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <BookOpen size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span className="text-xl font-bold" style={{ color: 'var(--accent-primary)' }}>
                    {lessonsCompleted.length}
                  </span>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Lecciones</p>
              </div>
              <div
                className="rounded-lg p-3 text-center"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span className="text-xl font-bold" style={{ color: 'var(--accent-primary)' }}>
                    {totalMinutesLearned}
                  </span>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Minutos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 space-y-6">
        {/* Daily Goal */}
        <div
          className="rounded-lg p-4"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target size={16} style={{ color: 'var(--accent-primary)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                Objetivo diario
              </span>
            </div>
            <span className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
              {dailyProgress}/{dailyGoal}
            </span>
          </div>
          <Progress value={pctDaily} tone="primary" size="md" />
          {pctDaily >= 100 && (
            <p className="text-xs mt-2 font-medium" style={{ color: 'var(--accent-success)' }}>
              🎉 ¡Objetivo del día completado!
            </p>
          )}
        </div>

        {/* Continue Learning (path-aware) */}
        {currentPathLesson && currentPathLevel && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: 'var(--text-secondary)' }}
              >
                Continuar aprendiendo
              </h2>
              <Link
                href="/path"
                className="flex items-center gap-1 text-xs font-medium"
                style={{ color: 'var(--accent-primary)' }}
              >
                <Map size={12} />
                Ver toda la ruta
              </Link>
            </div>

            {/* Level context */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-t-lg"
              style={{ background: currentPathLevel.softColor, borderLeft: `3px solid ${currentPathLevel.color}` }}
            >
              <span className="text-base">{currentPathLevel.emoji}</span>
              <span className="text-xs font-semibold" style={{ color: currentPathLevel.color }}>
                Nivel {currentPathLevel.id} — {currentPathLevel.name}
              </span>
              <span className="text-xs ml-auto" style={{ color: 'var(--text-secondary)' }}>
                {levelCompletedCount}/5
              </span>
            </div>

            {/* Lesson card */}
            <Link href={`/lesson/${currentPathLesson.id}`}>
              <div
                className="rounded-b-lg p-4 transition-colors duration-150"
                style={{
                  background: 'var(--accent-primary-soft)',
                  border: '1px solid var(--border)',
                  borderTop: 'none',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="text-3xl w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    {currentPathLesson.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="default" size="sm" className="mb-1">
                      {currentPathLesson.category}
                    </Badge>
                    <p className="font-semibold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {currentPathLesson.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {currentPathLesson.duration} min de lectura
                    </p>
                  </div>
                  <ChevronRight size={20} className="shrink-0" style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>
            </Link>

            {/* Level node chips */}
            <div className="flex gap-1.5 mt-2 justify-center">
              {currentPathLevel.lessonIds.map((id, idx) => {
                const done = lessonsCompleted.includes(id)
                const isCur = id === currentPathLessonId
                return (
                  <div
                    key={id}
                    title={`Lección ${idx + 1}`}
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                    style={
                      done
                        ? { background: currentPathLevel.color, color: '#fff' }
                        : isCur
                          ? { background: 'transparent', border: `2px solid ${currentPathLevel.color}`, color: currentPathLevel.color }
                          : { background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)' }
                    }
                  >
                    {done ? '✓' : idx + 1}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Recent Achievements */}
        {recentAchievements.length > 0 && (
          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              Logros recientes
            </h2>
            <div className="flex gap-3">
              {recentAchievements.map(ach => ach && (
                <div
                  key={ach.id}
                  className="flex-1 rounded-lg p-3 text-center"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="text-2xl mb-1">{ach.emoji}</div>
                  <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {ach.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--text-secondary)' }}
            >
              Categorías
            </h2>
            <Link
              href="/explore"
              className="text-xs font-medium"
              style={{ color: 'var(--accent-primary)' }}
            >
              Ver todas
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {featuredCategories.map(cat => {
              const catLessons = lessons.filter(l => l.category === cat)
              const catCompleted = catLessons.filter(l => lessonsCompleted.includes(l.id))
              const main = categoryColor(cat, theme)
              const soft = categorySoftBg(cat, theme)
              return (
                <Link key={cat} href={`/explore?cat=${encodeURIComponent(cat)}`}>
                  <div
                    className="rounded-lg p-3 transition-colors duration-150"
                    style={{
                      background: soft,
                      border: `1px solid ${main}33`,
                    }}
                  >
                    <div className="text-2xl mb-1">{CATEGORY_EMOJIS[cat] ?? '📚'}</div>
                    <p className="text-xs font-semibold leading-tight" style={{ color: main }}>
                      {cat}
                    </p>
                    <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {catCompleted.length}/{catLessons.length}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent Lessons */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--text-secondary)' }}
            >
              Lecciones recientes
            </h2>
            <Link
              href="/explore"
              className="text-xs font-medium"
              style={{ color: 'var(--accent-primary)' }}
            >
              Ver todas
            </Link>
          </div>
          <div className="space-y-2">
            {lessons.slice(0, 4).map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} compact />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
