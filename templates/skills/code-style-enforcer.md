---
name: code-style-enforcer
description: Aplica reglas estrictas de estilo al **nuevo** código del cambio; bloquea si el ticket exige cumplimiento.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — **blast radius**: solo líneas del alcance.

## Objetivo

Al implementar, **cumplir** las reglas del equipo en el código **tocado** (no reescribir archivos enteros por estilo).

## Reglas típicas (ajustar al equipo)

- Funciones como `const` arrow.
- Preferir guard clauses y early returns.
- Evitar `if/else` cuando un early return basta.
- Funciones pequeñas y responsabilidad única.
- Claridad sobre astucia.

## Aplicación

- **Nuevo** código: debe cumplir al 100%.
- **Código existente** tocado: alinear solo lo necesario para el cambio (no “style-only” fuera de scope).

## Bloqueo

- Si el ticket exige cumplimiento estricto y no es posible sin refactor grande → **escalar** al humano, no silenciar.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Reformatear vecinos por “consistencia” | Solo líneas del diff |
| Reglas conflictivas con repo | Priorizar `eslint` / `biome` del proyecto |
