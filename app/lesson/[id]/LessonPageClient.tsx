'use client'
import { use, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { getLessonById } from '@/lib/lessons'
import { useProgressStore } from '@/store/useProgressStore'
import { QuizComponent } from '@/components/quiz/QuizComponent'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Progress } from '@/components/ui/Progress'
import { AchievementToast } from '@/components/lesson/AchievementToast'
import { ACHIEVEMENTS } from '@/lib/achievements'
import { Achievement } from '@/lib/types'
import { ArrowLeft, Heart, Volume2, VolumeX, BookOpen, HelpCircle, CheckCircle2, Map } from 'lucide-react'
import { getLevelForLesson, getLessonAtIndex, getPathIndexForLesson } from '@/lib/learningPath'

type Tab = 'read' | 'quiz'

function renderMarkdown(text: string): string {
  return text
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li><span class="bullet">•</span><span>$1</span></li>')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?![<\n])(.+)$/gm, (match) => {
      if (match.trim()) return `<span>${match}</span>`
      return match
    })
}

function cleanForTTS(markdown: string): string {
  return markdown
    .replace(/^#{1,3}\s+/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/^-\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export default function LessonPageClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const lesson = getLessonById(id)
  const [tab, setTab] = useState<Tab>('read')
  const [scrollPct, setScrollPct] = useState(0)
  const [speaking, setSpeaking] = useState(false)
  const [pendingAchievement, setPendingAchievement] = useState<Achievement | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const completed = useProgressStore(s => s.lessonsCompleted.includes(id))
  const favorite = useProgressStore(s => s.favoriteLessons.includes(id))
  const audioSpeed = useProgressStore(s => s.audioSpeed)
  const toggleFavorite = useProgressStore(s => s.toggleFavorite)
  const completeLesson = useProgressStore(s => s.completeLesson)
  const saveQuizScore = useProgressStore(s => s.saveQuizScore)

  // Path context for this lesson
  const pathLevel = lesson ? getLevelForLesson(lesson.id) : null
  const nextPathLessonId = lesson
    ? getLessonAtIndex(getPathIndexForLesson(lesson.id) + 1)
    : null
  const hasNextPathLesson = nextPathLessonId !== null && getPathIndexForLesson(lesson?.id ?? '') !== -1

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const handler = () => {
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollPct(Math.min(100, pct))
    }
    el.addEventListener('scroll', handler)
    return () => el.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    return () => { window.speechSynthesis?.cancel() }
  }, [])

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Lección no encontrada</p>
        <Button variant="ghost" onClick={() => router.back()} className="mt-4">
          <ArrowLeft size={16} /> Volver
        </Button>
      </div>
    )
  }

  function toggleSpeech() {
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }
    const utter = new SpeechSynthesisUtterance(cleanForTTS(lesson!.content))
    utter.lang = 'es-ES'
    utter.rate = audioSpeed
    utter.onend = () => setSpeaking(false)
    utter.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(utter)
    setSpeaking(true)
  }

  function handleMarkComplete() {
    const newAchievements = completeLesson(lesson!.id, lesson!.duration)
    if (newAchievements.length > 0) {
      const ach = ACHIEVEMENTS.find(a => a.id === newAchievements[0])
      if (ach) setPendingAchievement(ach)
    }
  }

  function handleQuizComplete(score: number, total: number) {
    saveQuizScore(lesson!.id, score, total)
    if (!completed) handleMarkComplete()
    router.push(hasNextPathLesson ? '/path' : '/progress')
  }

  return (
    <div className="flex flex-col" style={{ background: 'var(--bg-primary)', minHeight: '100dvh' }}>
      <AchievementToast
        achievement={pendingAchievement}
        onDismiss={() => setPendingAchievement(null)}
      />

      {/* Header — pad-top cubre el notch / Dynamic Island en iPhone */}
      <div
        className="px-4 flex items-center gap-3"
        style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 12px)',
          paddingBottom: '12px',
        }}
      >
        <button
          onClick={() => router.back()}
          className="p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <Badge variant="default" size="sm">{lesson.category}</Badge>
            <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{lesson.duration} min</span>
          </div>
          <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{lesson.title}</p>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => toggleFavorite(lesson.id)}
            className="p-2 rounded-lg transition-colors"
            aria-label="Favorito"
          >
            <Heart
              size={18}
              style={{
                fill: favorite ? 'var(--accent-error)' : 'transparent',
                color: favorite ? 'var(--accent-error)' : 'var(--text-tertiary)',
              }}
            />
          </button>
          <button
            onClick={toggleSpeech}
            title={speaking ? 'Detener audio' : 'Escuchar lección'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            style={
              speaking
                ? { background: 'var(--accent-primary)', color: '#fff' }
                : { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }
            }
          >
            {speaking ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span className="hidden sm:inline">{speaking ? 'Detener' : 'Audio'}</span>
          </button>
        </div>
      </div>

      {/* Reading Progress */}
      {tab === 'read' && (
        <Progress value={scrollPct} size="sm" tone="primary" className="rounded-none" />
      )}

      {/* Tabs */}
      <div
        className="px-4 flex gap-1"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}
      >
        <button
          onClick={() => setTab('read')}
          className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors"
          style={{
            borderBottom: `2px solid ${tab === 'read' ? 'var(--accent-primary)' : 'transparent'}`,
            color: tab === 'read' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
          }}
        >
          <BookOpen size={15} /> Lección
        </button>
        <button
          onClick={() => setTab('quiz')}
          className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors"
          style={{
            borderBottom: `2px solid ${tab === 'quiz' ? 'var(--accent-primary)' : 'transparent'}`,
            color: tab === 'quiz' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
          }}
        >
          <HelpCircle size={15} /> Quiz
          <span
            className="ml-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
            style={{ background: 'var(--accent-primary-soft)', color: 'var(--accent-primary)' }}
          >
            {lesson.quiz.length}
          </span>
        </button>
      </div>

      {/* Content */}
      <div ref={contentRef} className="flex-1 overflow-y-auto pb-8">
        {tab === 'read' ? (
          <div className="max-w-md mx-auto px-5 py-6">
            {/* Lesson Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="text-4xl w-14 h-14 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                {lesson.emoji}
              </div>
              <div>
                <h1 className="text-lg font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {lesson.title}
                </h1>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  <Badge variant="default" size="sm">{lesson.category}</Badge>
                  <Badge
                    variant={lesson.difficulty === 'principiante' ? 'success' : lesson.difficulty === 'intermedio' ? 'warning' : 'info'}
                    size="sm"
                  >
                    {lesson.difficulty}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Rendered Markdown Content */}
            <div
              className="prose-lesson leading-relaxed space-y-1"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(lesson.content) }}
            />

            {/* Actions */}
            <div className="mt-8 space-y-3">
              {!completed ? (
                <Button onClick={handleMarkComplete} size="lg" className="w-full">
                  <CheckCircle2 size={18} />
                  Marcar como completada
                </Button>
              ) : (
                <>
                  <div
                    className="flex items-center justify-center gap-2 py-3 rounded-lg"
                    style={{ background: 'var(--accent-success-soft)' }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-success)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--accent-success)' }}>Lección completada</span>
                  </div>
                  {pathLevel && (
                    <div
                      className="flex items-center justify-between px-3 py-2 rounded-lg"
                      style={{
                        background: pathLevel.softColor,
                        borderLeft: `3px solid ${pathLevel.color}`,
                      }}
                    >
                      <span className="text-xs font-medium" style={{ color: pathLevel.color }}>
                        {pathLevel.emoji} Progresaste en la ruta · Nivel {pathLevel.id} — {pathLevel.name}
                      </span>
                      {hasNextPathLesson && (
                        <button
                          onClick={() => router.push('/path')}
                          className="flex items-center gap-1 text-xs font-semibold ml-2 shrink-0"
                          style={{ color: pathLevel.color }}
                        >
                          <Map size={12} />
                          Ver ruta
                        </button>
                      )}
                    </div>
                  )}
                </>
              )}
              <Button variant="secondary" size="lg" className="w-full" onClick={() => setTab('quiz')}>
                <HelpCircle size={18} />
                Hacer el quiz
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto px-5 py-6">
            <QuizComponent
              lesson={lesson}
              onComplete={handleQuizComplete}
              completeLabel={hasNextPathLesson ? 'Continuar en la ruta →' : 'Ver mi progreso'}
            />
          </div>
        )}
      </div>
    </div>
  )
}
