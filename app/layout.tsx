import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { ThemeProvider } from '@/components/layout/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'MicroLearn — Aprende en 5 minutos',
  description: 'Convierte el tiempo de pantalla en conocimiento útil. Lecciones breves, quizzes interactivos y seguimiento de progreso.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'MicroLearn',
    statusBarStyle: 'black-translucent',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // viewport-fit=cover: el contenido puede extenderse bajo notch/home indicator
  // los safe areas se manejan manualmente con CSS env()
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBFBFA' },
    { media: '(prefers-color-scheme: dark)', color: '#191919' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {/*
            paddingTop: cubre notch / Dynamic Island
            paddingBottom: Navbar (56px) + home indicator (env safe area)
            min-height: 100dvh — más confiable que 100vh en iOS WebView
          */}
          <main
            className="scroll-container"
            style={{
              paddingTop: 'env(safe-area-inset-top, 0px)',
              paddingBottom: 'calc(56px + env(safe-area-inset-bottom, 0px))',
              minHeight: '100dvh',
            }}
          >
            {children}
          </main>
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
