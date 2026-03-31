---
name: analysis-input-validator
description: Verifica proposal + exploration (o equivalentes) antes de consolidar análisis funcional/técnico en Step 3.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Asegurar que Step 3 tenga **proposal** y **exploration** (o los artefactos que vuestro flujo exija) **presentes y no vacíos** en la carpeta de la épica.

## Requisitos típicos

- `proposal.md` con Why/What mínimo.
- `exploration.md` con hallazgos de código (Step 2 completado).

## Validaciones

- Rutas bajo `specs/changes/[FOLDER]/` **verificadas** con listado o lectura.
- Secciones críticas no vacías (definir cuáles exige el equipo).

## Si falta algo

- **BLOQUEADO** + lista de archivos o secciones faltantes.
- No generar `design.md` hasta desbloquear.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Nombres genéricos “reporte Step 1” | `proposal.md`, `exploration.md` |
