---
name: diff-change-detector
description: Identifica archivos cambiados en el working tree para acotar revisión; sin diff = sin revisión.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Listar **exactamente** qué revisar según `git status` / diff (o equivalente). Sin suposiciones sobre archivos no tocados.

## Analizar

- Working tree: staged y unstaged.
- Renombres y borrados.

## Identificar

- Modificados / nuevos / eliminados con **ruta relativa al repo**.

## Determinar

- Qué archivos entran en **scope de review** del Step 6 u otro paso.

## Si no hay cambios

- **Detener** revisión de código; informar “sin cambios locales”.

## Salida

## Archivos tocados
| Ruta | Estado |

## Alcance sugerido de revisión

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Revisá todo src/” | Solo paths del diff |
| Inventar archivos modificados | Salida de git |
