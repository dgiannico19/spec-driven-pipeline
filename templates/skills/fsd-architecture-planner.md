---
name: fsd-architecture-planner
description: Distribuye responsabilidades de la épica en capas según repo-architecture-rule.md; conceptual, sin rutas inventadas.
uses:
  - rules/repo-architecture-rule.md
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — este skill **no** inventa arquitectura nueva; **interpreta** la épica dentro de la regla del repo.

## Objetivo

Decidir **qué tipo de lógica** (no paths exactos) pertenece a cada capa permitida por `repo-architecture-rule.md`.

## Análisis

Para cada capa relevante (**features**, **entities**, **widgets**, **shared**, **pages**, **app** o equivalente):

- Qué lógica **debería** vivir ahí para esta épica.
- Qué **no** debe colocarse ahí (para evitar dependencias invertidas).

## Restricciones

- **No** listar rutas de archivos concretos (eso es Step 3 detallado / exploration).
- **No** proponer estructuras que violen `repo-architecture-rule.md`.
- Si el repo **no** es FSD puro, adaptá los nombres de capa a la **regla** y documentá el mapeo.

## Formato de salida

## Arquitectura conceptual

### features
### entities
### widgets
### shared
### pages
_(o las que aplique la regla)_

## Mapeo si el repo usa nombres distintos

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Creá src/features/foo” aquí | Solo responsabilidades; rutas en design.md |
| Violación de capas por comodidad | Regla explícita |
