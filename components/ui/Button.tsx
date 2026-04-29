import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, CSSProperties, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

// Notion-style flat variants. Colors come from CSS variables so they react
// to .dark on <html>. Hover state for filled buttons uses a brightness filter
// (works on top of any cascading var-based background).
const variantClass: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'text-white hover:brightness-95 active:brightness-90',
  secondary: 'border hover:bg-bg-tertiary',
  ghost: 'hover:bg-bg-secondary',
  danger: 'text-white hover:brightness-95 active:brightness-90',
  success: 'text-white hover:brightness-95 active:brightness-90',
  outline: 'border hover:bg-bg-secondary',
}

function variantStyle(v: NonNullable<ButtonProps['variant']>): CSSProperties {
  switch (v) {
    case 'primary':
      return { background: 'var(--accent-primary)' }
    case 'secondary':
      return {
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border)',
      }
    case 'ghost':
      return { background: 'transparent', color: 'var(--text-primary)' }
    case 'danger':
      return { background: 'var(--accent-error)' }
    case 'success':
      return { background: 'var(--accent-success)' }
    case 'outline':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-strong)',
      }
  }
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, className, children, disabled, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        style={{ ...variantStyle(variant), ...style }}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-lg transition-[filter,background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed',
          variantClass[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
