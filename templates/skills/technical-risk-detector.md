---
name: technical-risk-detector
description: Reporta riesgos estructurales en áreas analizadas; sin soluciones, con evidencia en rutas.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Listar **riesgos observados** en el código o estructura **sin** proponer refactor completo (eso es otro step).

## Analizar (según evidencia leída)

- Acoplamientos fuertes entre módulos.
- Módulos frágiles (muchas dependencias, sin tests).
- Dependencias circulares **si** el IDE o herramienta las muestra.
- Utils “basura” o sobrecarga.
- Límites de módulo poco claros.

## Detectar

- Riesgo de regresión al tocar el área.
- Deuda técnica **relevante** al cambio propuesto (no toda la deuda del repo).

## Restricciones

- No proponer soluciones detalladas.
- Cada ítem debe anclarse a **archivo o carpeta** concreta cuando sea posible.

## Formato de salida

## Riesgos detectados

## Código frágil

## Deuda técnica relevante al alcance

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “El código es malo” | Archivo + síntoma observable |
