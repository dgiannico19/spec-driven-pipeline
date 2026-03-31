---
name: usage-manual-builder
description: Manual de uso observable para QA: flujos, precondiciones y outputs, solo desde fuentes verificadas.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Traducir **comportamiento acordado** en `spec.md` / `design.md` a pasos que un humano puede **ejecutar** sin adivinar rutas.

## Debe incluir

- Contexto funcional (1 párrafo, citando spec).
- **Superficies** involucradas (vista, endpoint, comando).
- Precondiciones (datos, usuario, feature flags).
- Flujo **paso a paso** numerado.
- Inputs esperados (formato).
- Outputs observables (qué ver en UI / respuesta / log).
- Validaciones mencionadas en spec.
- Limitaciones explícitas (qué **no** cubre el manual).

## Restricciones

- Solo información **presente** en documentos de la épica; si falta detalle, **no inventes** — marcar `TBD` en esa sección.
- No infieras detalle técnico interno no documentado salvo que `design.md` lo indique.

## Salida

Manual en Markdown claro para pegar en `testing.md` o anexo.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “El sistema valida” sin criterio | Criterio citado de spec |
| URLs inventadas | “Abrir pantalla X según diseño” o ruta real |
