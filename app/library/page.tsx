'use client'
import { useState } from 'react'
import { useProgressStore } from '@/store/useProgressStore'
import { lessons } from '@/lib/lessons'
import { LessonCard } from '@/components/lesson/LessonCard'
import { Heart, CheckCircle2, Clock } from 'lucide-react'

type Tab = 'favorites' | 'completed' | 'all'

export default function LibraryPage() {
  const [tab, setTab] = useState<Tab>('favorites')
  const { favoriteLessons, lessonsCompleted } = useProgressStore()

  const displayed = (() => {
    if (tab === 'favorites') return lessons.filter(l => favoriteLessons.includes(l.id))
    if (tab === 'completed') return lessons.filter(l => lessonsCompleted.includes(l.id))
    return lessons
  })()

  const tabs = [
    { id: 'favorites' as Tab, label: 'Favoritos', icon: Heart, count: favoriteLessons.length },
    { id: 'completed' as Tab, label: 'Completados', icon: CheckCircle2, count: lessonsCompleted.length },
    { id: 'all' as Tab, label: 'Todas', icon: Clock, count: lessons.length },
  ]

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <div
        className="px-5 pt-14 pb-0 sticky top-0 z-20"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Biblioteca</h1>
          <div className="flex gap-1">
            {tabs.map(({ id, label, icon: Icon, count }) => {
              const active = tab === id
              return (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors flex-1 justify-center"
                  style={{
                    borderBottom: `2px solid ${active ? 'var(--accent-primary)' : 'transparent'}`,
                    color: active ? 'var(--accent-primary)' : 'var(--text-tertiary)',
                  }}
                >
                  <Icon size={14} />
                  {label}
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={
                      active
                        ? { background: 'var(--accent-primary-soft)', color: 'var(--accent-primary)' }
                        : { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }
                    }
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-4">
        {displayed.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">
              {tab === 'favorites' ? '❤️' : tab === 'completed' ? '🎯' : '📚'}
            </p>
            <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
              {tab === 'favorites'
                ? 'No tienes lecciones favoritas aún'
                : tab === 'completed'
                  ? 'Aún no completaste lecciones'
                  : 'No hay lecciones'}
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>
              {tab === 'favorites' && 'Toca el ❤️ en cualquier lección para guardarla'}
              {tab === 'completed' && 'Completa lecciones para verlas aquí'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {displayed.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
