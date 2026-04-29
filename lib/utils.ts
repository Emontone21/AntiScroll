import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))
}

export function isToday(dateStr: string): boolean {
  const d = new Date(dateStr)
  const today = new Date()
  return d.toDateString() === today.toDateString()
}

export function isYesterday(dateStr: string): boolean {
  const d = new Date(dateStr)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return d.toDateString() === yesterday.toDateString()
}

export function todayString(): string {
  return new Date().toISOString().split('T')[0]
}

export function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return '¡Buenos días'
  if (hour < 18) return '¡Buenas tardes'
  return '¡Buenas noches'
}

export function pluralize(count: number, singular: string, plural: string): string {
  return count === 1 ? `${count} ${singular}` : `${count} ${plural}`
}

/* ---------- Category chalk colors ----------
 * Notion-style chalk pairs. Each category has a light-mode and dark-mode hex.
 * Soft backgrounds are derived at runtime by mixing the hex with the page bg
 * via rgba alpha — keeps the palette in one place and avoids hand-tuning a
 * second hex per category.
 */
export type CategoryColor = { light: string; dark: string }

export const CATEGORY_COLORS: Record<string, CategoryColor> = {
  Historia: { light: '#64473A', dark: '#937264' },
  Ciencia: { light: '#0B6E99', dark: '#529CCA' },
  Arte: { light: '#AD1A72', dark: '#E255A1' },
  Cine: { light: '#6940A5', dark: '#9A6DD7' },
  Tecnología: { light: '#5A5A5A', dark: '#979A9B' },
  Idiomas: { light: '#0F7B6C', dark: '#4DAB9A' },
  Curiosidades: { light: '#D9730D', dark: '#FFA344' },
  Sociedad: { light: '#DFAB01', dark: '#FFDC49' },
  Música: { light: '#AD1A72', dark: '#E255A1' },
  Literatura: { light: '#64473A', dark: '#937264' },
  Geografía: { light: '#0F7B6C', dark: '#4DAB9A' },
  Filosofía: { light: '#6940A5', dark: '#9A6DD7' },
  Economía: { light: '#D9730D', dark: '#FFA344' },
  Naturaleza: { light: '#0F7B6C', dark: '#4DAB9A' },
  Matemáticas: { light: '#0B6E99', dark: '#529CCA' },
}

export function categoryColor(cat: string, theme: 'light' | 'dark'): string {
  const pair = CATEGORY_COLORS[cat]
  if (!pair) return theme === 'dark' ? '#979A9B' : '#5A5A5A'
  return theme === 'dark' ? pair.dark : pair.light
}

/** hex (#RRGGBB) + alpha [0..1] -> rgba(...) string. */
export function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/** Soft-tint background derived from the category's main color. */
export function categorySoftBg(cat: string, theme: 'light' | 'dark'): string {
  const main = categoryColor(cat, theme)
  return hexToRgba(main, theme === 'dark' ? 0.18 : 0.12)
}
