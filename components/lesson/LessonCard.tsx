'use client'
import Link from 'next/link'
import { Clock, BookOpen, Heart, CheckCircle2 } from 'lucide-react'
import { Lesson } from '@/lib/types'
import { useProgressStore } from '@/store/useProgressStore'
import { Badge } from '@/components/ui/Badge'

interface LessonCardProps {
  lesson: Lesson
  compact?: boolean
}

const difficultyColors = {
  principiante: 'success' as const,
  intermedio: 'warning' as const,
  avanzado: 'info' as const,
}

export function LessonCard({ lesson, compact }: LessonCardProps) {
  const completed = useProgressStore(s => s.lessonsCompleted.includes(lesson.id))
  const favorite = useProgressStore(s => s.favoriteLessons.includes(lesson.id))
  const toggleFavorite = useProgressStore(s => s.toggleFavorite)

  if (compact) {
    return (
      <Link href={`/lesson/${lesson.id}`}>
        <div
          className="flex items-center gap-3 p-3 transition-colors duration-150 cursor-pointer"
          style={{
            background: completed ? 'var(--accent-primary-soft)' : 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 8,
          }}
        >
          <div
            className="text-2xl w-10 h-10 flex items-center justify-center rounded-lg shrink-0"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            {lesson.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate" style={{ color: 'var(--text-primary)' }}>{lesson.title}</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{lesson.category} · {lesson.duration} min</p>
          </div>
          {completed && <CheckCircle2 size={16} className="shrink-0" style={{ color: 'var(--accent-success)' }} />}
        </div>
      </Link>
    )
  }

  return (
    <div
      className="relative overflow-hidden transition-colors duration-150"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: 8,
      }}
    >
      {completed && (
        <div className="absolute top-3 right-3 z-10">
          <CheckCircle2 size={20} style={{ color: 'var(--accent-success)' }} />
        </div>
      )}
      <button
        onClick={(e) => { e.preventDefault(); toggleFavorite(lesson.id) }}
        className="absolute top-3 right-8 z-10 p-1"
        aria-label="Favorito"
      >
        <Heart
          size={16}
          style={{
            fill: favorite ? 'var(--accent-error)' : 'transparent',
            color: favorite ? 'var(--accent-error)' : 'var(--text-tertiary)',
          }}
        />
      </button>

      <Link href={`/lesson/${lesson.id}`} className="block p-4">
        <div className="flex items-start gap-3">
          <div
            className="text-3xl w-12 h-12 flex items-center justify-center rounded-lg shrink-0"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            {lesson.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              <Badge variant="default" size="sm">{lesson.category}</Badge>
              <Badge variant={difficultyColors[lesson.difficulty]} size="sm">{lesson.difficulty}</Badge>
            </div>
            <h3 className="font-semibold text-sm leading-snug line-clamp-2" style={{ color: 'var(--text-primary)' }}>
              {lesson.title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span className="flex items-center gap-1"><Clock size={12} />{lesson.duration} min</span>
          <span className="flex items-center gap-1"><BookOpen size={12} />{lesson.quiz.length} preguntas</span>
        </div>
      </Link>
    </div>
  )
}
