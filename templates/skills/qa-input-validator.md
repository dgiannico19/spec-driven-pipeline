---
name: qa-input-validator
description: Verifica que existan los artefactos de la épica necesarios antes de Step 4 (spec, design, tasks como mínimo).
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Bloquear Step 4 si faltan **insumos verificables** en `specs/changes/[FOLDER]/`.

## Inputs obligatorios (típico)

- `spec.md` (borrador mínimo).
- `design.md` (Step 3 completado).
- `tasks.md` (para alinear carga de QA con trabajo planeado).

**Opcional según equipo:** `exploration.md` si Step 2 es obligatorio en vuestro flujo.

## Validaciones

- Los archivos **existen** en la ruta de la épica (no asumir nombre de carpeta: **verificar** listado).
- Contienen secciones **no vacías** relevantes (al menos un requisito y un diseño de alto nivel).

## Si falta algo

- Estado **BLOQUEADO**.
- Lista **exacta** de qué archivo falta o qué sección está vacía.
- **No** generar `testing.md` hasta desbloquear.

## Salida

`OK` + lista de archivos verificados, **o** `BLOQUEADO` + lista de faltantes.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Nombres “Step 1 Epic Analyzer” sin archivo | Rutas reales bajo `specs/changes/...` |
