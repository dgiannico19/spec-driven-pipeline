---
name: repo-code-analyzer
description: Analiza el código existente, localiza duplicados cercanos y define el mapa de impacto antes de tocar archivos.
---

## Objetivo

Comprender el código real del repo y **reducir superficie nueva**: saber qué ya existe, qué se puede reutilizar y qué es ruido a evitar.

## Fase 1 — Mapa de impacto

- Estructura de carpetas y capas (FSD u otra del repo).
- Archivos que **deben** modificarse según `design.md` / `exploration.md`.
- Archivos **prohibidos** tocar salvo spec explícita.

## Fase 2 — Descubrimiento de reutilización

- Buscar implementaciones similares: utilidades, hooks, componentes genéricos, validadores, formatters, clients HTTP, constantes.
- Identificar **APIs públicas** del módulo (`index.ts` / barrel) vs internos; preferir extender vía API pública.
- Listar **dependencias ya usadas** en el área del cambio (evitar introducir otra lib que duplique rol, ej. segunda librería de fechas).

## Fase 3 — Decisiones

- Para cada pieza nueva propuesta: ¿existe equivalente o parcial en el repo? Si sí → **reusar o extender**.
- Señalar riesgo de **duplicación lógica** (mismo comportamiento, distinto archivo).

## Salida

### Mapa técnico de impacto
[Rutas a modificar / crear solo si Fase 2 no encontró alternativa]

### Candidatos a reutilizar
[Archivos y símbolos concretos]

### Huecos reales
[Qué falta de verdad y justifica código nuevo]
