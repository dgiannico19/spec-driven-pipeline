---
name: qa-edge-case-expander
description: Lista casos límite y negativos trazables a requisitos; sin duplicar happy path obvio.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Ampliar cobertura **más allá del happy path** con casos **observables** y **vinculados** a SHALL/MUST o escenarios en `spec.md`.

## Detectar (según dominio)

- Payload vacío / nulo / tipos incorrectos.
- Límites (min/max length, rangos).
- Duplicados, idempotencia, reintentos.
- Estados inválidos previos.
- Errores de API / red / timeout (si aplica).
- Permisos / roles (si spec lo menciona).

## Resultado

Lista de **edge cases** con:

- ID sugerido (EDGE-01…)
- Precondición
- Acción
- Resultado esperado **observable**

## Restricciones

- No inventes reglas de negocio no especificadas; marcá **supuesto** si completás hueco.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| 50 casos genéricos | Casos ligados a cada Requirement |
| EDGE sin vínculo a spec | Referencia RF-XX / escenario |
