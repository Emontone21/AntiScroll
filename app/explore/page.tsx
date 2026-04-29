'use client'
import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { lessons, categories } from '@/lib/lessons'
import { LessonCard } from '@/components/lesson/LessonCard'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import { cn, categoryColor, categorySoftBg } from '@/lib/utils'
import { useProgressStore } from '@/store/useProgressStore'
import { Difficulty } from '@/lib/types'

const ALL = 'Todas'

const CATEGORY_EMOJIS: Record<string, string> = {
  Historia: '🏛️', Ciencia: '🔬', Arte: '🎨', Cine: '🎬',
  Tecnología: '💻', Idiomas: '🌍', Curiosidades: '🤔', Sociedad: '👥',
  Música: '🎵', Literatura: '📖', Geografía: '🗺️', Filosofía: '🤯',
  Economía: '💰', Naturaleza: '🌿', Matemáticas: '📐',
}

function ExploreContent() {
  const searchParams = useSearchParams()
  const initCat = searchParams.get('cat') ?? ALL
  const theme = useProgressStore(s => s.theme)

  const [query, setQuery] = useState('')
  const [selectedCat, setSelectedCat] = useState(initCat)
  const [selectedDiff, setSelectedDiff] = useState<Difficulty | ''>('')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = lessons
    if (selectedCat !== ALL) result = result.filter(l => l.category === selectedCat)
    if (selectedDiff) result = result.filter(l => l.difficulty === selectedDiff)
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(l =>
        l.title.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        l.tags.some(t => t.toLowerCase().includes(q))
      )
    }
    return result
  }, [query, selectedCat, selectedDiff])

  const allCats = [ALL, ...categories]

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <div
        className="px-5 pt-14 pb-4 sticky top-0 z-20"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Explorar</h1>
            <button
              onClick={() => setShowFilters(f => !f)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={
                showFilters || selectedDiff
                  ? { background: 'var(--accent-primary-soft)', color: 'var(--accent-primary)' }
                  : { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }
              }
            >
              <SlidersHorizontal size={14} />
              Filtros {selectedDiff && '(1)'}
            </button>
          </div>
          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-tertiary)' }} />
            <input
              type="text"
              placeholder="Buscar lecciones..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-lg text-sm border-0 outline-none focus:ring-2"
              style={{
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Difficulty filter */}
          {showFilters && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {(['', 'principiante', 'intermedio', 'avanzado'] as const).map(d => {
                const active = selectedDiff === d
                return (
                  <button
                    key={d}
                    onClick={() => setSelectedDiff(d)}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
                    style={
                      active
                        ? { background: 'var(--accent-primary)', color: '#fff' }
                        : { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }
                    }
                  >
                    {d === '' ? 'Todos los niveles' : d.charAt(0).toUpperCase() + d.slice(1)}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-4">
        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5">
          {allCats.map(cat => {
            const active = selectedCat === cat
            const main = cat !== ALL ? categoryColor(cat, theme) : 'var(--accent-primary)'
            const soft = cat !== ALL ? categorySoftBg(cat, theme) : 'var(--accent-primary-soft)'
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors shrink-0'
                )}
                style={
                  active
                    ? { background: soft, color: main, border: `1px solid ${main}` }
                    : { background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }
                }
              >
                {cat !== ALL && <span>{CATEGORY_EMOJIS[cat] ?? '📚'}</span>}
                {cat}
              </button>
            )
          })}
        </div>

        {/* Results count */}
        <p className="text-xs mt-4 mb-3" style={{ color: 'var(--text-secondary)' }}>
          {filtered.length} lección{filtered.length !== 1 ? 'es' : ''}
          {selectedCat !== ALL && ` en ${selectedCat}`}
          {query && ` para "${query}"`}
        </p>

        {/* Lesson Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🔍</p>
            <p style={{ color: 'var(--text-secondary)' }}>No se encontraron lecciones</p>
            <button
              onClick={() => { setQuery(''); setSelectedCat(ALL); setSelectedDiff('') }}
              className="text-sm mt-2"
              style={{ color: 'var(--accent-primary)' }}
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {filtered.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}><p style={{ color: 'var(--text-tertiary)' }}>Cargando...</p></div>}>
      <ExploreContent />
    </Suspense>
  )
}
