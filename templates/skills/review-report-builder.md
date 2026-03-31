---
name: review-report-builder
description: Consolida hallazgos en reporte accionable con severidad, evidencia y veredicto; bloqueante explícito.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — reporte **fiel**; sin bloqueantes inventados.

## Objetivo

Unir resultados de `task-completion-verifier`, `diff-change-detector`, `code-style-reviewer`, `steps-alignment-reviewer`, etc. en **un** documento.

## Debe incluir

- **Bloqueantes** (con archivo + motivo + cita spec/design si aplica).
- **Importantes** (no impiden merge pero deben corregirse).
- **Menores** (estilo, nits).
- **Preguntas abiertas** solo si no se pueden resolver con herramientas.
- **Veredicto:** APROBADO | RECHAZADO | APROBADO CON CONDICIONES (listar condiciones).

## Regla

- ≥ **1 bloqueante** real → **RECHAZADO** (no suavizar).

## Restricciones

- Cada hallazgo **accionable** con **dónde** (ruta).
- No duplicar el formato del agente Step 6: **respeta** la plantilla que el agente defina.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Varios problemas” sin lista | Tabla o lista numerada |
| Veredicto verde con `[ ]` en tasks | RECHAZADO |
