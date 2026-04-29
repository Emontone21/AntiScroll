import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.microlearn.app',
  appName: 'MicroLearn',
  webDir: 'out',
  ios: {
    // 'automatic' permite que el contenido se extienda bajo status bar / home indicator;
    // los safe areas se manejan con CSS env(safe-area-inset-*) en globals.css.
    contentInset: 'automatic',
    // Evita el flash blanco al cargar (matches dark mode --bg-primary)
    backgroundColor: '#191919',
    scrollEnabled: true,
    limitsNavigationsToAppBoundDomains: true,
  },
}

export default config
