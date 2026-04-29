'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, Map, BarChart2, Settings } from 'lucide-react'
import { useProgressStore } from '@/store/useProgressStore'

const navItems = [
  { href: '/',         icon: Home,      label: 'Inicio'   },
  { href: '/path',     icon: Map,       label: 'Ruta'     },
  { href: '/explore',  icon: Compass,   label: 'Explorar' },
  { href: '/progress', icon: BarChart2, label: 'Progreso' },
  { href: '/settings', icon: Settings,  label: 'Ajustes'  },
]

export function Navbar() {
  const pathname = usePathname()
  const streak = useProgressStore(s => s.currentStreak)

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        // Home indicator: el padding inferior cubre la barrita de gestures (~34px)
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
      }}
    >
      {/* Área de ítems: altura fija 56px. La Navbar total = 56px + safe area */}
      <div
        className="max-w-md mx-auto flex items-center justify-around"
        style={{ height: '56px' }}
      >
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className="interactive-card flex flex-col items-center justify-center gap-0.5 rounded-xl transition-colors duration-150"
              style={{
                color: active ? 'var(--accent-primary)' : 'var(--text-tertiary)',
                // Touch target generoso: 44×44pt mínimo iOS HIG
                minWidth: '56px',
                minHeight: '44px',
                padding: '6px 10px',
              }}
            >
              <div className="relative">
                <Icon size={22} strokeWidth={active ? 2.5 : 2} />
                {href === '/' && streak > 0 && (
                  <span
                    className="absolute -top-1.5 -right-2 text-[9px] font-bold rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-0.5"
                    style={{
                      background: 'var(--accent-warning)',
                      color: '#37352F',
                    }}
                  >
                    {streak}
                  </span>
                )}
              </div>
              {/* Etiqueta: 10-11px, estándar iOS tab bar */}
              <span
                className={`text-[10px] leading-none${active ? ' font-semibold' : ' font-medium'}`}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
