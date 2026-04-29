'use client'
import { forwardRef } from 'react'
import Link from 'next/link'
import { Lock, Clock, BookOpen } from 'lucide-react'
import { Lesson } from '@/lib/types'

export type NodeStatus = 'completed' | 'current' | 'locked'

interface PathNodeProps {
  lesson: Lesson
  status: NodeStatus
  levelColor: string   // CSS var string, e.g. 'var(--accent-success)'
  isLeft: boolean      // Whether the info card goes to the left of the node
  showConnector: boolean
  connectorCompleted: boolean
  onClick: () => void
}

/**
 * A single node on the learning path.
 * The outer forwardRef lets the parent attach a ref to the root element
 * for auto-scroll purposes (used on the "current" node).
 */
export const PathNode = forwardRef<HTMLDivElement, PathNodeProps>(
  function PathNode(
    { lesson, status, levelColor, isLeft, showConnector, connectorCompleted, onClick },
    ref
  ) {
    const isLocked = status === 'locked'
    const isCurrent = status === 'current'
    const isCompleted = status === 'completed'

    // ── Circle styles ────────────────────────────────────────────────────
    const circleStyle: React.CSSProperties = isCompleted
      ? { background: levelColor, color: '#fff', border: `3px solid ${levelColor}` }
      : isCurrent
        ? { background: 'transparent', border: `3px solid ${levelColor}`, color: 'var(--text-primary)' }
        : { background: 'var(--bg-tertiary)', border: '3px solid var(--border)', color: 'var(--text-tertiary)' }

    // ── Info card ────────────────────────────────────────────────────────
    const card = !isLocked ? (
      <div
        className="flex-1 max-w-[148px]"
        style={{
          background: isCurrent ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
          border: isCurrent ? `1.5px solid ${levelColor}` : '1px solid var(--border)',
          borderRadius: 8,
          padding: '8px 10px',
        }}
      >
        {isCurrent && (
          <p
            className="text-[9px] font-bold uppercase tracking-widest mb-1"
            style={{ color: levelColor }}
          >
            Siguiente
          </p>
        )}
        <p className="text-xs font-semibold leading-tight line-clamp-2" style={{ color: 'var(--text-primary)' }}>
          {lesson.title}
        </p>
        <div className="flex items-center gap-2 mt-1.5 text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
          <span className="flex items-center gap-0.5"><Clock size={10} />{lesson.duration}m</span>
          <span className="flex items-center gap-0.5"><BookOpen size={10} />{lesson.category}</span>
        </div>
      </div>
    ) : (
      // Locked — placeholder to keep the layout symmetric
      <div className="flex-1 max-w-[148px]" />
    )

    // ── Connector line below the node ────────────────────────────────────
    const connector = showConnector ? (
      <div
        className="w-0.5 mx-auto"
        style={{
          height: 32,
          background: connectorCompleted ? levelColor : 'var(--border)',
          opacity: connectorCompleted ? 0.6 : 1,
        }}
      />
    ) : null

    // ── Clickable wrapper ────────────────────────────────────────────────
    const circleContent = isLocked ? (
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-300"
        style={circleStyle}
      >
        <Lock size={18} />
      </div>
    ) : (
      <Link href={`/lesson/${lesson.id}`} className="block">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${isCurrent ? 'path-pulse' : ''}`}
          style={circleStyle}
        >
          {isCompleted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <span className="text-2xl">{lesson.emoji}</span>
          )}
        </div>
      </Link>
    )

    return (
      <div ref={ref}>
        {/* Node row: card left | circle | card right */}
        <div className="flex items-center gap-3 px-5">
          {isLeft ? card : <div className="flex-1 max-w-[148px]" />}
          <div className="flex flex-col items-center flex-shrink-0">
            {circleContent}
          </div>
          {!isLeft ? card : <div className="flex-1 max-w-[148px]" />}
        </div>
        {/* Connector */}
        {connector}
      </div>
    )
  }
)
