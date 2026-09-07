# Inicio rápido

Tres comandos para tener Terra funcionando en local con Electron, Vite y el backend Python en paralelo.

## Requisitos

- Node.js ≥ 20
- Python ≥ 3.12
- Windows, macOS o Linux

## Primera instalación

```bash
npm install
cd backend && pip install -r requirements.txt
```

## Desarrollo (Electron + Vite + backend)

```bash
npm run dev
```

Lanza Electron con el frontend Vite (puerto 3000) y el backend Python (puerto 8000) en paralelo.

## Sin Electron (solo navegador)

```bash
npm run dev:vite          # terminal 1 — frontend
cd backend
python launcher.py        # terminal 2 — backend (abre el navegador solo)
```

## Verificación

```bash
npm run lint                              # ESLint + Prettier sobre TS/TSX
npm run build                             # tsc + vite build + compila main de Electron
cd backend && python -m compileall app   # compila el backend
```

## Lanzador rápido (Windows)

```bat
iniciar-terra.bat
```

Equivale a `npm run dev` con un doble clic.

## Siguiente paso

Consulta la [Pila técnica](pila-tecnica.md) para entender qué hay debajo del capó, o ve directo al [Despliegue](despliegue.md) para generar el instalador.
