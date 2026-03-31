---
name: task-completion-verifier
description: Verifica tasks.md con checkboxes; solo [x] cuenta como hecho; lista pendientes con precisión.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Determinar si queda **alguna** tarea `- [ ]` en `specs/changes/[FOLDER-NAME]/tasks.md` antes de aprobar cierre.

## Procedimiento

1. **Leer** el archivo real (no asumir contenido).
2. Buscar líneas que coincidan con checkbox de tarea: `- [ ]` (con espacios opcionales).
3. Ignorar líneas que sean código, citas o texto sin formato de lista de tareas.
4. Contar `[ ]` vs `[x]`.
5. Si hay `>` 0 `[ ]` → **RECHAZADO** (o PENDIENTE) con lista de líneas o IDs pendientes.

## Reglas

- Solo `[x]` cuenta como completado (no `[-]`, `[~]`, etc.).
- No considerar archivo vacío como conforme.

## Salida

```text
status: CONFORME | PENDIENTE
pending_tasks: ["texto o ID de cada [ ]"]
completion_percentage: número 0–100
```

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Aprobar “casi todo” | 100% [x] o PENDIENTE |
| Regex sin leer archivo | Leer tasks.md completo |
