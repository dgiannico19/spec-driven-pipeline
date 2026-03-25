---
name: code-area-impact-detector
description: Identifica áreas del repo relacionadas con el dominio y señala múltiples candidatos a reutilizar para la misma capacidad.
---

## Objetivo

Determinar qué módulos del repositorio están relacionados con el dominio del Step 1 y **dónde podría colisionar** un cambio ingenuo con código ya existente.

## Entrada

Contexto de `proposal.md` / `spec.md` y resultados de escaneo de estructura si existen.

## Analizar

Buscar en el repositorio:

- Features, entidades, widgets, componentes, servicios o APIs vinculadas al dominio.
- **Más de un archivo** que parezca cubrir la misma responsabilidad (duplicación histórica o variantes legacy/modern).

## Detectar

- Carpetas involucradas.
- Archivos clave con **rutas concretas**.
- Módulos que implementan responsabilidades **solapadas** (lista explícita: “A vs B hacen X parecido”).

## Restricciones

- No asumir funcionalidades nuevas.
- Solo identificar relación con código existente y **ambiguiedad de reutilización** (varios candidatos).

## Formato de salida

### Carpetas relacionadas
…

### Archivos relevantes
…

### Responsabilidad técnica actual
…

### Múltiples candidatos para la misma capacidad (si aplica)
- [Candidato 1] vs [Candidato 2] — qué tan solapados están — cuál parece canónico según imports/uso en el repo
