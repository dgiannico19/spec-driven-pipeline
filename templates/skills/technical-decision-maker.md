---
name: technical-decision-maker
description: Registra decisiones técnicas con formato "X porque Y; descartando Z por riesgo", ancladas al repo.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — **evidencia** antes de elegir stack o deps nuevas.

## Objetivo

Elegir enfoque técnico **comparando** estado actual vs deseado y **patrones ya presentes** en el repo.

## Cadena mínima

1. Nombrá la **brecha principal** (una frase, citando `exploration.md` o spec).
2. Buscá **precedentes** en el repo (archivos, patrones similares) — rutas.
3. Decidí stack: **¿nueva dependencia?** Solo si está en `design.md`/spec o es inevitable; documentá alternativa nativa descartada.
4. Redactá cada decisión como:  
   **Se decidió [X] porque [Y], descartando [Z] por [riesgo o costo].**

## Reglas

- Priorizar **bajo acoplamiento** y **coherencia** con carpetas existentes (`shared`, `features`, etc.).
- Si el cambio toca validación / schema: marcá **decisión obligatoria** y **superficie** (archivos).
- No introduzcas **nueva dependencia** sin hueco en spec o `design.md`.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Usamos Redux” sin ver estado actual | Precedentes en repo |
| Decisión sin alternativa Z | Siempre Z descartado |
