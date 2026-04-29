# MicroLearn

App de microaprendizaje — aprende algo nuevo en 1 a 5 minutos.

## Desarrollo local (web)
```bash
npm install
npm run dev
# http://localhost:3000
```

## Cómo instalar en iPhone (sin Apple Developer Account)

### Paso 1 — Descargar el IPA desde GitHub
1. Ir a la pestaña **Actions** del repositorio en GitHub
2. Seleccionar el último workflow **"Build iOS IPA (unsigned)"** con ✅ verde
3. Bajar hasta la sección **Artifacts**
4. Descargar **MicroLearn-unsigned** (se descarga como `.zip`, adentro está el `.ipa`)

### Paso 2 — Instalar con Sideloadly
1. Descargar [Sideloadly](https://sideloadly.io) en tu Mac o PC
2. Conectar el iPhone por USB y desbloquearlo
3. Abrir Sideloadly y arrastrar el archivo `.ipa`
4. Ingresar tu Apple ID (cuenta gratuita de iCloud alcanza)
5. Click en **Start** y esperar 1-2 minutos
6. En el iPhone: **Ajustes → General → VPN y gestión del dispositivo**
   → buscar tu Apple ID → tocar **Confiar**
7. ¡Listo! MicroLearn aparece en la pantalla de inicio

> ⚠️ Con Apple ID gratuito la app caduca cada 7 días y hay que reinstalarla.
> Con Apple Developer Account ($99/año) no caduca.

## Comandos útiles
```bash
npm run dev            # Desarrollo web local
npm run build:mobile   # Build estático para Capacitor
npm run mobile:sync    # Build + sync con proyecto iOS
npx tsc --noEmit       # Verificar tipos
```
