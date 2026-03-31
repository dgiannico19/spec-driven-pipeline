---
name: ai-path-generator
description: Genera la ruta de trabajo EXCLUSIVAMENTE bajo specs/changes/ con formato y sanitización predecibles.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — **parámetros explícitos**, sin rutas inventadas fuera de `specs/changes/`.

## Reglas duras

- **Root obligatorio:** `specs/changes/` (relativo al repo). Nunca `openspec/`, nunca raíz del proyecto para la épica activa.
- **Formato:** `{{YYYY-MM-DD}}-{{ticket-id}}-{{slug}}`
  - **Fecha:** fecha real del día de creación (o la que indique el equipo).
  - **ticket-id:** ID del ticket si existe; si no, `no-ticket` o convención del equipo documentada en `specs/config.yaml`.
  - **slug:** derivado del título; **minúsculas**, guiones, sin espacios ni caracteres especiales (`[^a-z0-9-]` → eliminar o `-`).
- **Unicidad:** si la carpeta ya existe, **no sobrescribas** — sufijo `-2`, `-3` o pedí confirmación según política del equipo.

## Entrada esperada (implícita o explícita)

- Título o nombre corto de la épica (para el slug).
- Ticket opcional.
- Fecha (default: hoy).

## Salida

- **working_path** (siempre con `/` final opcional pero consistente):  
  `specs/changes/2026-03-09-jmv-4021-svg-component/`

## Ejemplo

```text
specs/changes/2026-03-31-acme-884-normalizar-fechas/
```

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| `specs/my-epic` sin fecha | Formato completo con fecha + slug |
| Slug con mayúsculas o `ñ` sin normalizar | `normalize` a ASCII minúsculas |
