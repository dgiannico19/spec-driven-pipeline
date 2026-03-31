---
name: qa-test-matrix-builder
description: Construye matriz de pruebas con IDs, tipo, pasos y resultado observable; trazable a CA.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Generar filas **ejecutables** por QA o automatización, alineadas a **CA-XX** de `spec.md` y a `testing.md`.

## Cada fila debe incluir

- **ID único** (ej. `QA-12`, `ERR-03`).
- **Tipo:** HP | ALT | ERR | EDGE | PERM | STATE (u otra convención del equipo).
- **Vista / superficie** (pantalla, API, CLI — lo que aplique).
- **Precondiciones** (datos, usuario, flags).
- **Dataset / mock** (si aplica; si no, “N/A”).
- **Pasos** numerados.
- **Resultado esperado** observable (texto, código HTTP, estado UI).
- **Trazabilidad:** `CA-XX` o Requirement ID.

## Restricciones

- No inventes CAs: deben existir en `spec.md` o estar marcados como **nuevo CA propuesto** con justificación.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Probar login” sin pasos | Pasos y dato de entrada |
| Matriz sin link a CA | Columna CA-XX |
