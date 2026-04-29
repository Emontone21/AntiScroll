import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'info'
  size?: 'sm' | 'md'
  className?: string
}

// Inline-styled so the chalk colors react to .dark via CSS vars.
function variantStyle(v: NonNullable<BadgeProps['variant']>): CSSProperties {
  switch (v) {
    case 'default':
      return { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }
    case 'outline':
      return {
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border-strong)',
      }
    case 'success':
      return { background: 'var(--accent-success-soft)', color: 'var(--accent-success)' }
    case 'warning':
      return { background: 'var(--accent-warning-soft)', color: 'var(--accent-warning)' }
    case 'info':
      return { background: 'var(--accent-info-soft)', color: 'var(--accent-info)' }
  }
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
}

export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  return (
    <span
      style={variantStyle(variant)}
      className={cn('inline-flex items-center font-medium rounded-full', sizes[size], className)}
    >
      {children}
    </span>
  )
}
