---
name: task-list-generator
description: Transforma el diseño técnico en checklist atómico `- [ ] ID` con dependencias claras y archivos reales.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — nombres de archivo **reales** desde `exploration.md` / `design.md`, no placeholders.

## Objetivo

Producir `tasks.md` con tareas **ordenadas**, **atómicas** (≤ ~30 min cada una si aplica) y **trazables** a `design.md`.

## Fases sugeridas (plantilla)

1. **Prep:** deps, carpetas base, estilos compartidos si el diseño lo exige.
2. **Core:** lógica principal (componentes, hooks, utils según capa).
3. **Integración:** barrels, rutas, registro en app/router.
4. **QA / docs:** tests, snapshots, notas si `testing.md` lo pide.

## Reglas

- Formato estricto: `- [ ] ID.X Descripción clara`
- Usá **rutas de archivo reales** entre paréntesis cuando ayude: `(src/features/foo/...)`
- Dependencias: si B requiere A, **ordená** A antes; marcá bloqueo explícito.
- No mezclés refactors de alcance ajeno (blast radius).

## Restricciones

- No inventes archivos: tomalos de `design.md` / `exploration.md` o marcá **TBD investigar** como tarea explícita de descubrimiento.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Una tarea “implementar feature” gigante | Partir en pasos con criterio de hecho |
| IDs duplicados | Esquema `1.1`, `1.2`, `2.1` |
