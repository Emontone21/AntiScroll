'use client'
import { useProgressStore } from '@/store/useProgressStore'
import { lessons } from '@/lib/lessons'
import { ACHIEVEMENTS } from '@/lib/achievements'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { categoryColor } from '@/lib/utils'
import { Flame, Clock, BookOpen, Target, Award, TrendingUp, Lock } from 'lucide-react'
import { learningPath } from '@/lib/learningPath'

type StatColor = 'primary' | 'success' | 'warning' | 'info'

export default function ProgressPage() {
  const {
    currentStreak, longestStreak, totalMinutesLearned,
    lessonsCompleted, quizScores, achievements, dailyGoal, dailyProgress, theme,
    pathUnlockedIndex, completedLevels,
  } = useProgressStore()

  const totalLessons = lessons.length
  const pctCompleted = Math.round((lessonsCompleted.length / totalLessons) * 100)

  const avgQuizScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((acc, s) => acc + (s.score / s.total) * 100, 0) / quizScores.length)
    : 0

  const categoryCounts: Record<string, number> = {}
  lessons.filter(l => lessonsCompleted.includes(l.id)).forEach(l => {
    categoryCounts[l.category] = (categoryCounts[l.category] ?? 0) + 1
  })
  const topCategories = Object.entries(categoryCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  const totalAchievements = ACHIEVEMENTS.length
  const earnedAchievements = achievements.length

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Header — flat Notion card, no saturated gradient */}
      <div className="px-5 pt-14 pb-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Tu progreso</h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Sigue aprendiendo cada día</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 space-y-5">
        {/* Streak Card */}
        <div
          className="p-5"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 8,
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>Racha actual</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black" style={{ color: 'var(--text-primary)' }}>{currentStreak}</span>
                <span className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>días</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Flame
                size={48}
                className="transition-colors"
                style={{ color: currentStreak > 0 ? 'var(--accent-warning)' : 'var(--text-tertiary)' }}
              />
            </div>
          </div>
          <div
            className="mt-3 pt-3 flex items-center justify-between"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <div>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Mejor racha</p>
              <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{longestStreak} días</p>
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Objetivo hoy</p>
              <p className="text-lg font-bold" style={{ color: 'var(--accent-primary)' }}>{dailyProgress}/{dailyGoal}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard icon={BookOpen} label="Lecciones" value={lessonsCompleted.length} sub={`de ${totalLessons} total`} color="primary" />
          <StatCard icon={Clock} label="Minutos" value={totalMinutesLearned} sub="tiempo aprendiendo" color="info" />
          <StatCard icon={Target} label="Quiz promedio" value={`${avgQuizScore}%`} sub={`${quizScores.length} quizzes`} color="success" />
          <StatCard icon={Award} label="Logros" value={earnedAchievements} sub={`de ${totalAchievements} posibles`} color="warning" />
        </div>

        {/* Overall Progress */}
        <div
          className="p-5"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 8,
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} style={{ color: 'var(--accent-primary)' }} />
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Progreso general</p>
            </div>
            <span className="text-sm font-bold" style={{ color: 'var(--accent-primary)' }}>{pctCompleted}%</span>
          </div>
          <Progress value={pctCompleted} tone="primary" size="md" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            {lessonsCompleted.length} de {totalLessons} lecciones completadas
          </p>
        </div>

        {/* Top Categories */}
        {topCategories.length > 0 && (
          <div
            className="p-5"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 8,
            }}
          >
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Temas más estudiados</p>
            <div className="space-y-3">
              {topCategories.map(([cat, count]) => {
                const catTotal = lessons.filter(l => l.category === cat).length
                const catColor = categoryColor(cat, theme)
                return (
                  <div key={cat}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{cat}</span>
                      <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{count}/{catTotal}</span>
                    </div>
                    <Progress
                      value={count}
                      max={catTotal}
                      size="sm"
                      barStyle={{ background: catColor }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Path Progress */}
        <div
          className="p-5"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 8,
          }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Progreso en la Ruta</p>
          <div className="flex items-center gap-3 mb-4">
            <Progress value={lessonsCompleted.length} max={30} tone="primary" size="md" className="flex-1" />
            <span className="text-xs font-semibold shrink-0" style={{ color: 'var(--accent-primary)' }}>
              {lessonsCompleted.length}/30
            </span>
          </div>
          {/* Level chips */}
          <div className="flex gap-2 flex-wrap">
            {learningPath.levels.map(level => {
              const levelLessonsCompleted = level.lessonIds.filter(id => lessonsCompleted.includes(id)).length
              const isComplete = completedLevels.includes(level.id)
              const firstIdx = (level.id - 1) * 5
              const isUnlocked = firstIdx <= pathUnlockedIndex
              const isInProgress = isUnlocked && !isComplete
              return (
                <div
                  key={level.id}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold"
                  style={
                    isComplete
                      ? { background: level.softColor, color: level.color, border: `1px solid ${level.color}` }
                      : isInProgress
                        ? { background: level.softColor, color: level.color, border: `1px solid ${level.color}`, opacity: 0.7 }
                        : { background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }
                  }
                >
                  {isUnlocked ? level.emoji : <Lock size={10} />}
                  <span>{level.name}</span>
                  {isInProgress && <span className="opacity-70">{levelLessonsCompleted}/5</span>}
                  {isComplete && <span>✓</span>}
                </div>
              )
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>
            Logros
          </p>
          <div className="grid grid-cols-2 gap-3">
            {ACHIEVEMENTS.map(ach => {
              const earned = achievements.includes(ach.id)
              return (
                <div
                  key={ach.id}
                  className="p-4 transition-all"
                  style={{
                    background: earned ? 'var(--accent-warning-soft)' : 'var(--bg-secondary)',
                    border: `1px solid ${earned ? 'var(--accent-warning)' : 'var(--border)'}`,
                    borderRadius: 8,
                    opacity: earned ? 1 : 0.5,
                  }}
                >
                  <div className="text-3xl mb-2">{ach.emoji}</div>
                  <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{ach.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{ach.description}</p>
                  {earned && <Badge variant="warning" size="sm" className="mt-2">Desbloqueado</Badge>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, sub, color }: {
  icon: React.ElementType
  label: string
  value: string | number
  sub: string
  color: StatColor
}) {
  const colorMap: Record<StatColor, { fg: string; soft: string }> = {
    primary: { fg: 'var(--accent-primary)', soft: 'var(--accent-primary-soft)' },
    success: { fg: 'var(--accent-success)', soft: 'var(--accent-success-soft)' },
    warning: { fg: 'var(--accent-warning)', soft: 'var(--accent-warning-soft)' },
    info: { fg: 'var(--accent-info)', soft: 'var(--accent-info-soft)' },
  }
  const c = colorMap[color]
  return (
    <div
      className="p-4"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: 8,
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
        style={{ background: c.soft, color: c.fg }}
      >
        <Icon size={18} />
      </div>
      <p className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>{value}</p>
      <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{label}</p>
      <p className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{sub}</p>
    </div>
  )
}
