'use client'
import { useState } from 'react'
import { useProgressStore } from '@/store/useProgressStore'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import {
  Moon, Sun, Volume2, Trash2,
} from 'lucide-react'

function SettingRow({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-between py-3.5 last:border-0"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div>
        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{label}</p>
        {sub && <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{sub}</p>}
      </div>
      {children}
    </div>
  )
}

function ToggleSwitch({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none"
      style={{ background: value ? 'var(--accent-primary)' : 'var(--bg-tertiary)' }}
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200"
        style={{
          transform: value ? 'translateX(20px)' : 'translateX(0)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
        }}
      />
    </button>
  )
}

export default function SettingsPage() {
  const {
    theme, setTheme,
    fontSize, setFontSize,
    audioSpeed, setAudioSpeed,
    dailyGoal, setDailyGoal,
    lessonsCompleted, currentStreak,
    resetProgress,
  } = useProgressStore()

  const [showReset, setShowReset] = useState(false)

  function handleReset() {
    resetProgress()
    setShowReset(false)
  }

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-primary)' }}>
      <div
        className="px-5 pt-14 pb-4 sticky top-0 z-20"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Ajustes</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-5 py-4 space-y-4">
        {/* Appearance */}
        <Section title="Apariencia">
          <SettingRow label="Modo oscuro" sub="Cambia entre claro y oscuro">
            <div className="flex items-center gap-2">
              <Sun size={14} style={{ color: 'var(--accent-warning)' }} />
              <ToggleSwitch value={theme === 'dark'} onChange={v => setTheme(v ? 'dark' : 'light')} />
              <Moon size={14} style={{ color: 'var(--accent-primary)' }} />
            </div>
          </SettingRow>
          <SettingRow label="Tamaño de fuente" sub="Ajusta el tamaño del texto">
            <div className="flex gap-1.5">
              {(['small', 'medium', 'large'] as const).map(size => {
                const active = fontSize === size
                return (
                  <button
                    key={size}
                    onClick={() => setFontSize(size)}
                    className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                    style={
                      active
                        ? { background: 'var(--accent-primary)', color: '#fff' }
                        : { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }
                    }
                  >
                    {size === 'small' ? 'A' : size === 'medium' ? 'AA' : 'AAA'}
                  </button>
                )
              })}
            </div>
          </SettingRow>
        </Section>

        {/* Learning */}
        <Section title="Aprendizaje">
          <SettingRow
            label="Objetivo diario"
            sub={`Actualmente: ${dailyGoal} lección${dailyGoal !== 1 ? 'es' : ''} por día`}
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDailyGoal(Math.max(1, dailyGoal - 1))}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-lg font-medium"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                −
              </button>
              <span className="text-base font-bold w-6 text-center" style={{ color: 'var(--text-primary)' }}>{dailyGoal}</span>
              <button
                onClick={() => setDailyGoal(Math.min(10, dailyGoal + 1))}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-lg font-medium"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                +
              </button>
            </div>
          </SettingRow>
        </Section>

        {/* Audio */}
        <Section title="Audio">
          <SettingRow
            label="Velocidad de lectura en voz alta"
            sub={`${audioSpeed}x velocidad`}
          >
            <div className="flex items-center gap-2">
              <Volume2 size={14} style={{ color: 'var(--text-tertiary)' }} />
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.25"
                value={audioSpeed}
                onChange={e => setAudioSpeed(parseFloat(e.target.value))}
                className="w-20"
                style={{ accentColor: 'var(--accent-primary)' }}
              />
              <span className="text-xs font-medium w-8" style={{ color: 'var(--text-secondary)' }}>{audioSpeed}x</span>
            </div>
          </SettingRow>
        </Section>

        {/* Stats summary */}
        <Section title="Mi cuenta">
          <SettingRow label="Lecciones completadas">
            <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{lessonsCompleted.length}</span>
          </SettingRow>
          <SettingRow label="Racha actual">
            <span className="text-sm font-bold" style={{ color: 'var(--accent-warning)' }}>🔥 {currentStreak} días</span>
          </SettingRow>
        </Section>

        {/* Danger Zone */}
        <Section title="Zona de peligro">
          <div className="py-2">
            <Button
              variant="danger"
              className="w-full"
              onClick={() => setShowReset(true)}
            >
              <Trash2 size={16} />
              Resetear todo el progreso
            </Button>
            <p className="text-xs text-center mt-2" style={{ color: 'var(--text-tertiary)' }}>
              Esta acción no se puede deshacer
            </p>
          </div>
        </Section>
      </div>

      <Modal
        open={showReset}
        onClose={() => setShowReset(false)}
        title="¿Resetear progreso?"
      >
        <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
          Se perderán todas tus lecciones completadas, racha, logros y estadísticas. Esta acción no se puede deshacer.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={() => setShowReset(false)}>
            Cancelar
          </Button>
          <Button variant="danger" className="flex-1" onClick={handleReset}>
            Sí, resetear
          </Button>
        </div>
      </Modal>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: 8,
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-wider px-4 pt-3 pb-1"
        style={{ color: 'var(--text-secondary)' }}
      >
        {title}
      </p>
      <div className="px-4">
        {children}
      </div>
    </div>
  )
}
