import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

type Tone = 'primary' | 'success' | 'warning' | 'error'

interface ProgressProps {
  value: number
  max?: number
  className?: string
  barClassName?: string
  barStyle?: CSSProperties
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  tone?: Tone
}

const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' }

const toneVar: Record<Tone, string> = {
  primary: 'var(--accent-primary)',
  success: 'var(--accent-success)',
  warning: 'var(--accent-warning)',
  error: 'var(--accent-error)',
}

export function Progress({
  value, max = 100, className, barClassName, barStyle, size = 'md', animated, tone = 'primary',
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  // If a custom barClassName is supplied, callers control the fill via classes.
  // Otherwise the fill comes from the chalk accent matching the chosen tone.
  const fill: CSSProperties = barClassName
    ? { width: `${pct}%`, ...barStyle }
    : { width: `${pct}%`, background: toneVar[tone], ...barStyle }

  return (
    <div
      style={{ background: 'var(--bg-tertiary)' }}
      className={cn('w-full rounded-full overflow-hidden', heights[size], className)}
    >
      <div
        className={cn(
          'h-full rounded-full transition-all duration-700',
          animated && 'animate-pulse',
          barClassName
        )}
        style={fill}
      />
    </div>
  )
}
