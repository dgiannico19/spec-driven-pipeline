---
name: risk-mitigation-planner
description: Identifica riesgos (seguridad, compat, performance) y define mitigación concreta para design.md — sin soluciones fuera de spec.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — **blast radius**: mitigación acotada al cambio.

## Objetivo

Para cada riesgo **credible** en el alcance del diseño, producir **mitigación accionable** (qué hacer en código o proceso), no solo “tener cuidado”.

## Áreas típicas

- **Seguridad:** payloads de formularios, XSS, inyección, datos sensibles en logs.
- **Compatibilidad:** cambios de schema, contratos API, versiones.
- **Performance:** renders, N+1, bundles — solo si el diseño afecta esos puntos.

## Formato por ítem

- **Riesgo:** (escenario + superficie)
- **Mitigación:** (acción técnica concreta; librería solo si ya está en stack o aprobada en spec)
- **Verificación:** (test, checklist, comando — o “manual QA en testing.md”)

## Restricciones

- No inventes riesgos genéricos sin vínculo al diseño.
- No expandas scope (nueva lib masiva) sin decisión en `design.md` / spec.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Revisar seguridad” | “Sanitizar input en handler X con …” |
| Mitigación vaga | Acción verificable |
