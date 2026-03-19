---
name: fsd-architecture-planner
description: Propone una distribución conceptual de responsabilidades basada en la arquitectura definida en repo-architecture-rule.md.
uses:
  - rules/repo-architecture-rule.md
---

Objetivo

Definir cómo deberían organizarse las responsabilidades de la épica dentro de la arquitectura objetivo del repositorio.

La arquitectura base se define en:

repo-architecture-rule.md

Este skill NO define una arquitectura nueva.
Este skill interpreta la épica dentro de la arquitectura existente.

Análisis requerido

Determinar qué responsabilidades pertenecen conceptualmente a:

features/
entities/
widgets/
shared/
pages/

Para cada capa explicar:

- Qué lógica debería vivir allí
- Qué responsabilidades corresponden a la épica
- Qué responsabilidades NO deberían colocarse en esa capa

Restricciones

No definir rutas reales.
No listar archivos concretos.
No proponer estructuras que violen repo-architecture-rule.md.

Formato de salida

## Arquitectura conceptual

### features

### entities

### widgets

### shared

### pages
