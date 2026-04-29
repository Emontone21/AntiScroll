'use client'
import { useEffect, useRef, useState } from 'react'
import { useProgressStore } from '@/store/useProgressStore'
import { learningPath } from '@/lib/learningPath'
import { getLessonById } from '@/lib/lessons'
import { PathNode, NodeStatus } from '@/components/path/PathNode'
import { Progress } from '@/components/ui/Progress'
import { Lock, ChevronRight } from 'lucide-react'

export default function PathPage() {
  const { lessonsCompleted, pathUnlockedIndex, completedLevels } = useProgressStore()
  const currentNodeRef = useRef<HTMLDivElement>(null)
  const [celebratingLevel, setCelebratingLevel] = useState<number | null>(null)

  // Auto-scroll to the current (first unlocked & not completed) node
  useEffect(() => {
    if (currentNodeRef.current) {
      currentNodeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [pathUnlockedIndex])

  // Flat ordered list: find the current (frontier) index
  const flatIds = learningPath.levels.flatMap(l => l.lessonIds)
  const currentPathIndex = pathUnlockedIndex < flatIds.length ? pathUnlockedIndex : flatIds.length - 1

  return (
    <div className="min-h-screen pb-28" style={{ background: 'var(--bg-primary)' }}>
      {/* Header — pt cubre el notch / Dynamic Island en iPhone */}
      <div
        className="sticky top-0 z-20 px-5 pb-4"
        style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 12px)',
        }}
      >
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Mi Ruta de Aprendizaje
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <Progress
              value={lessonsCompleted.length}
              max={30}
              tone="primary"
              size="sm"
              className="flex-1"
            />
            <span className="text-xs font-semibold shrink-0" style={{ color: 'var(--text-secondary)' }}>
              {lessonsCompleted.length} / 30
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto pt-6">
        {learningPath.levels.map((level, levelIdx) => {
          const levelCompleted = completedLevels.includes(level.id)
          // Is this level unlocked? (first lesson's index <= pathUnlockedIndex)
          const firstLessonGlobalIdx = levelIdx * 5
          const levelUnlocked = firstLessonGlobalIdx <= pathUnlockedIndex

          const levelLessonsCompleted = level.lessonIds.filter(id =>
            lessonsCompleted.includes(id)
          ).length

          return (
            <div key={level.id}>
              {/* Level banner */}
              <button
                className="w-full mx-auto px-5 mb-4"
                onClick={() => levelCompleted ? setCelebratingLevel(level.id) : undefined}
                disabled={!levelCompleted}
                style={{ cursor: levelCompleted ? 'pointer' : 'default' }}
              >
                <div
                  className="rounded-lg p-4 flex items-center gap-3"
                  style={{
                    background: levelUnlocked ? level.softColor : 'var(--bg-secondary)',
                    border: `1px solid var(--border)`,
                    borderLeft: levelUnlocked ? `4px solid ${level.color}` : '4px solid var(--border)',
                  }}
                >
                  <span className="text-2xl">{level.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                        Nivel {level.id}
                      </span>
                      {!levelUnlocked && <Lock size={12} style={{ color: 'var(--text-tertiary)' }} />}
                    </div>
                    <p className="font-bold text-sm" style={{ color: levelUnlocked ? level.color : 'var(--text-tertiary)' }}>
                      {level.name}
                    </p>
                    <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-secondary)' }}>
                      {level.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-semibold" style={{ color: levelUnlocked ? level.color : 'var(--text-tertiary)' }}>
                      {levelLessonsCompleted}/5
                    </p>
                    {levelCompleted && (
                      <div className="flex items-center gap-0.5 text-[10px] font-medium" style={{ color: level.color }}>
                        <span>Completo</span>
                        <ChevronRight size={10} />
                      </div>
                    )}
                  </div>
                </div>
              </button>

              {/* Nodes */}
              {level.lessonIds.map((lessonId, nodeIdx) => {
                const lesson = getLessonById(lessonId)
                if (!lesson) return null

                const globalIdx = levelIdx * 5 + nodeIdx
                const isNodeCompleted = lessonsCompleted.includes(lessonId)
                const isNodeUnlocked = globalIdx <= pathUnlockedIndex
                const isCurrent = globalIdx === currentPathIndex && !isNodeCompleted

                const status: NodeStatus = isNodeCompleted
                  ? 'completed'
                  : isNodeUnlocked
                    ? 'current'
                    : 'locked'

                const isLeft = nodeIdx % 2 === 1
                const showConnector = nodeIdx < 4  // All but last in level
                const nextNodeCompleted = level.lessonIds[nodeIdx + 1]
                  ? lessonsCompleted.includes(level.lessonIds[nodeIdx + 1])
                  : false
                const connectorCompleted = isNodeCompleted && nextNodeCompleted

                return (
                  <PathNode
                    key={lessonId}
                    ref={isCurrent ? currentNodeRef : undefined}
                    lesson={lesson}
                    status={status}
                    levelColor={level.color}
                    isLeft={isLeft}
                    showConnector={showConnector}
                    connectorCompleted={connectorCompleted}
                    onClick={() => {}}
                  />
                )
              })}

              {/* Gap between levels */}
              <div className="h-8" />
            </div>
          )
        })}
      </div>

      {/* Level completion modal */}
      {celebratingLevel !== null && (() => {
        const lvl = learningPath.levels.find(l => l.id === celebratingLevel)
        if (!lvl) return null
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setCelebratingLevel(null)}
          >
            <div
              className="rounded-xl p-8 text-center max-w-xs w-full animate-in zoom-in-95"
              style={{ background: 'var(--bg-secondary)', border: `2px solid ${lvl.color}` }}
              onClick={e => e.stopPropagation()}
            >
              <div className="text-6xl mb-4">{lvl.emoji}</div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: lvl.color }}>
                ¡Nivel completado!
              </p>
              <p className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Nivel {lvl.id} — {lvl.name}
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                {lvl.description}
              </p>
              <button
                onClick={() => setCelebratingLevel(null)}
                className="w-full py-2.5 rounded-lg font-semibold text-sm text-white"
                style={{ background: lvl.color }}
              >
                Continuar
              </button>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
