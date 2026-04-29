'use client'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

// Notion-style flat card. No shadow, 8px corners. Hover (when enabled)
// shifts to bg-tertiary + stronger border, no transform.
export function Card({ children, className, hover, onClick }: CardProps) {
  const [hovered, setHovered] = useState(false)
  const bg = hover && hovered ? 'var(--bg-tertiary)' : 'var(--bg-secondary)'
  const borderColor = hover && hovered ? 'var(--border-strong)' : 'var(--border)'

  return (
    <div
      onClick={onClick}
      onMouseEnter={hover ? () => setHovered(true) : undefined}
      onMouseLeave={hover ? () => setHovered(false) : undefined}
      style={{
        background: bg,
        border: `1px solid ${borderColor}`,
        borderRadius: 8,
      }}
      className={cn(
        'transition-colors duration-150',
        hover && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-5 pb-0', className)}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-5', className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn('px-5 py-4', className)}
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {children}
    </div>
  )
}
