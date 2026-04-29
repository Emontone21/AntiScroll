'use client'
import { useEffect } from 'react'
import { useProgressStore } from '@/store/useProgressStore'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useProgressStore(s => s.theme)
  const fontSize = useProgressStore(s => s.fontSize)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('text-sm-app', 'text-md-app', 'text-lg-app')
    if (fontSize === 'small') root.style.fontSize = '14px'
    else if (fontSize === 'large') root.style.fontSize = '18px'
    else root.style.fontSize = '16px'
  }, [fontSize])

  return <>{children}</>
}
