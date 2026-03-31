---
name: fsd-structure-validator
description: Verifica compatibilidad con la estructura esperada (FSD u otra del repo); bloquea si falta base sin decisión explícita.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Evitar que el agente **improvise** carpetas o capas que contradigan `repo-architecture-rule.md` o la estructura real.

## Validar

- Existencia de las **capas** que el repo usa (no forzar FSD si el repo es otro).
- Ubicación coherente de features / slices.
- Separación dominio / UI / infra según la regla.

## Si la estructura objetivo no existe

- **DETENER** y pedir **decisión explícita** (humanos o ADR): crear capa, migrar, o adaptar el diseño a la estructura real.

## Salida

- `CONFORME` + evidencia (rutas listadas), **o**
- `BLOQUEADO` + qué falta y qué decisión se necesita.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Crear `features/foo` sin `features/` en el repo | Validar contra `repo-structure-scanner` |
| Asumir FSD | Leer `repo-architecture-rule.md` |
