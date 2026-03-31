---
name: code-area-impact-detector
description: Señala carpetas y archivos relacionados con el dominio y candidatos duplicados; rutas obligatorias.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — **búsqueda** si hay ambigüedad de candidatos.

## Objetivo

Evitar cambios ingenuos que **choquen** con implementaciones paralelas o legacy.

## Entrada

- Términos de `proposal.md` / `spec.md`.
- Resultados previos de `repo-structure-scanner` si existen.

## Analizar

- Features, entidades, servicios, APIs ligadas al dominio (por **búsqueda** y lectura).
- **Varios** archivos con responsabilidad parecida → listar todos.

## Detectar

- Carpetas involucradas (**rutas**).
- Archivos clave.
- Solapamiento “A vs B hacen X parecido” con criterio de **canonicidad** (imports, uso, antigüedad).

## Restricciones

- No inventar features nuevas.
- Solo relación con **código existente** y ambigüedad de reutilización.

## Formato de salida

### Carpetas relacionadas
### Archivos relevantes
### Responsabilidad técnica actual
### Múltiples candidatos (si aplica)

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Un solo candidato cuando hay dos | Tabla A vs B |
