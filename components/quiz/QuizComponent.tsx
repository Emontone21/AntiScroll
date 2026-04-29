'use client'
import { useState, CSSProperties } from 'react'
import { Lesson } from '@/lib/types'
import { Button } from '@/components/ui/Button'
import { Progress } from '@/components/ui/Progress'
import { CheckCircle2, XCircle, ArrowRight, Trophy } from 'lucide-react'

interface QuizComponentProps {
  lesson: Lesson
  onComplete: (score: number, total: number) => void
  completeLabel?: string
}

type AnswerState = 'unanswered' | 'correct' | 'incorrect'

interface QuestionResult {
  questionId: string
  selected: number
  correct: boolean
}

export function QuizComponent({ lesson, onComplete, completeLabel = 'Ver mi progreso' }: QuizComponentProps) {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [results, setResults] = useState<QuestionResult[]>([])
  const [showSummary, setShowSummary] = useState(false)

  const question = lesson.quiz[currentQ]
  const isLast = currentQ === lesson.quiz.length - 1
  const score = results.filter(r => r.correct).length

  function handleSelect(idx: number) {
    if (answered) return
    setSelected(idx)
    const correct = idx === question.correctAnswer
    setAnswered(true)
    setResults(prev => [...prev, { questionId: question.id, selected: idx, correct }])
  }

  function handleNext() {
    if (isLast) {
      setShowSummary(true)
    } else {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  function getOptionState(idx: number): AnswerState {
    if (!answered) return 'unanswered'
    if (idx === question.correctAnswer) return 'correct'
    if (idx === selected) return 'incorrect'
    return 'unanswered'
  }

  function optionStyle(state: AnswerState, isAnswered: boolean): CSSProperties {
    if (state === 'correct') {
      return {
        background: 'var(--accent-success-soft)',
        border: '2px solid var(--accent-success)',
        color: 'var(--accent-success)',
      }
    }
    if (state === 'incorrect') {
      return {
        background: 'var(--accent-error-soft)',
        border: '2px solid var(--accent-error)',
        color: 'var(--accent-error)',
      }
    }
    return {
      background: 'var(--bg-secondary)',
      border: '2px solid var(--border)',
      color: 'var(--text-primary)',
      opacity: isAnswered ? 0.5 : 1,
    }
  }

  function badgeStyle(state: AnswerState): CSSProperties {
    if (state === 'correct') return { background: 'var(--accent-success)', color: '#fff', borderColor: 'var(--accent-success)' }
    if (state === 'incorrect') return { background: 'var(--accent-error)', color: '#fff', borderColor: 'var(--accent-error)' }
    return { borderColor: 'var(--border-strong)', color: 'var(--text-secondary)' }
  }

  if (showSummary) {
    const pct = Math.round((score / lesson.quiz.length) * 100)
    const tone: 'warning' | 'success' | 'error' = pct === 100 ? 'warning' : pct >= 60 ? 'success' : 'error'
    const trophyBg =
      tone === 'warning' ? 'var(--accent-warning-soft)'
      : tone === 'success' ? 'var(--accent-success-soft)'
      : 'var(--accent-error-soft)'

    return (
      <div className="flex flex-col items-center text-center py-6 px-4 gap-5">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
          style={{ background: trophyBg }}
        >
          {pct === 100 ? '🏆' : pct >= 60 ? '🎉' : '💪'}
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {score}/{lesson.quiz.length} correctas
          </h2>
          <p className="mt-1" style={{ color: 'var(--text-secondary)' }}>
            {pct === 100 ? '¡Quiz perfecto! Increíble.' : pct >= 60 ? '¡Buen trabajo!' : '¡Sigue practicando!'}
          </p>
        </div>
        <div className="w-full max-w-xs">
          <Progress value={pct} tone={tone} size="lg" />
          <p className="text-sm font-semibold mt-1" style={{ color: 'var(--text-primary)' }}>{pct}%</p>
        </div>

        {/* Per-question review */}
        <div className="w-full space-y-2 text-left">
          {lesson.quiz.map((q, i) => {
            const r = results[i]
            const ok = r?.correct
            return (
              <div
                key={q.id}
                className="p-3"
                style={{
                  background: ok ? 'var(--accent-success-soft)' : 'var(--accent-error-soft)',
                  border: `1px solid ${ok ? 'var(--accent-success)' : 'var(--accent-error)'}`,
                  borderRadius: 8,
                }}
              >
                <div className="flex items-start gap-2">
                  {ok
                    ? <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-success)' }} />
                    : <XCircle size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-error)' }} />
                  }
                  <div>
                    <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{q.question}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>✅ {q.options[q.correctAnswer]}</p>
                    <p className="text-xs mt-1 italic" style={{ color: 'var(--text-secondary)' }}>{q.explanation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <Button onClick={() => onComplete(score, lesson.quiz.length)} size="lg" className="w-full">
          <Trophy size={18} />
          {completeLabel}
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--text-secondary)' }}>
          <span>Pregunta {currentQ + 1} de {lesson.quiz.length}</span>
          <span>{results.filter(r => r.correct).length} correctas</span>
        </div>
        <Progress value={currentQ + (answered ? 1 : 0)} max={lesson.quiz.length} tone="primary" />
      </div>

      {/* Question */}
      <div>
        <p className="text-base font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map((opt, idx) => {
          const state = getOptionState(idx)
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className="interactive-card w-full text-left text-[15px] font-medium transition-colors duration-150"
              style={{
                ...optionStyle(state, answered),
                borderRadius: 12,
                padding: '16px',
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0"
                  style={badgeStyle(state)}
                >
                  {state === 'correct' ? '✓' : state === 'incorrect' ? '✗' : String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </div>
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div
          className="p-3 text-sm"
          style={{
            background: 'var(--accent-info-soft)',
            borderLeft: '4px solid var(--accent-info)',
            color: 'var(--text-primary)',
            borderRadius: 8,
          }}
        >
          <p className="font-medium mb-0.5">
            {results[results.length - 1]?.correct ? '✅ ¡Correcto!' : '❌ Incorrecto'}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{question.explanation}</p>
        </div>
      )}

      {/* Next */}
      {answered && (
        <Button onClick={handleNext} size="lg">
          {isLast ? 'Ver resultados' : 'Siguiente pregunta'}
          <ArrowRight size={18} />
        </Button>
      )}
    </div>
  )
}
