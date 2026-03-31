---
name: task-progress-updater
description: Actualiza tasks.md marcando [x] sin alterar otras líneas; falla si la tarea no existe.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — **parámetros exactos** (ID o texto de línea).

## Objetivo

Tras completar una tarea, reemplazar **solo** esa línea `- [ ]` → `- [x]` en `specs/changes/[FOLDER-NAME]/tasks.md`.

## Procedimiento

1. Leer `tasks.md` completo.
2. Localizar la línea por **ID** (ej. `2.3`) o por **texto exacto** de la tarea.
3. Reemplazar un único `[ ]` en esa línea por `[x]`.
4. Si hay subtareas, marcar padre solo si **todas** las hijas están `[x]` (política del equipo).
5. Escribir archivo preservando **indentación** y saltos de línea.

## Reglas

- **NUNCA** borrar contenido ni tareas no completadas.
- Si no encontrás la tarea: **error** explícito — no inventes línea nueva.
- Si el diseño cambió, pedí actualización de `tasks.md` al humano antes de marcar al azar.

## Entrada esperada

- `folder_path`: `specs/changes/YYYY-MM-DD-slug/`
- `task_id` o fragmento único de la línea completada.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Marcar todas las [ ] | Una sola tarea verificada |
| Reescribir archivo entero | Diff mínimo |
