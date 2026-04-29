'use client'
import { useEffect, useState } from 'react'
import { Achievement } from '@/lib/types'
import { cn } from '@/lib/utils'

interface AchievementToastProps {
  achievement: Achievement | null
  onDismiss: () => void
}

export function AchievementToast({ achievement, onDismiss }: AchievementToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (achievement) {
      setVisible(true)
      const t = setTimeout(() => {
        setVisible(false)
        setTimeout(onDismiss, 300)
      }, 3500)
      return () => clearTimeout(t)
    }
  }, [achievement, onDismiss])

  if (!achievement) return null

  return (
    <div className={cn(
      'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    )}>
      <div
        className="px-5 py-3 flex items-center gap-3 max-w-xs"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-strong)',
          borderLeft: '4px solid var(--accent-warning)',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
      >
        <span className="text-2xl">{achievement.emoji}</span>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent-warning)' }}>¡Logro desbloqueado!</p>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{achievement.title}</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{achievement.description}</p>
        </div>
      </div>
    </div>
  )
}
