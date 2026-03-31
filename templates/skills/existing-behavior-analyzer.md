---
name: existing-behavior-analyzer
description: Mapea comportamiento ya implementado y cataloga activos reutilizables antes de diseñar o codificar; rutas obligatorias.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — **buscar antes de afirmar** “no existe”.

## Objetivo

Documentar **qué ya existe** en el repo para que Steps 3–5 **extiendan** en lugar de duplicar. Complementa `repo-structure-scanner` y `code-area-impact-detector` con foco en **comportamiento real**.

## Fase A — Inventario de comportamiento

Solo **código leído o resultado de búsqueda**:

- Lógica, validaciones, ramas, efectos, integraciones.
- Hooks, servicios, handlers, endpoints, stores, mappers, formatters.
- Dominio en `entities/` o equivalente.

## Fase B — Búsqueda de similares (obligatoria)

- **Nombre** y **concepto** (sinónimos del dominio en `proposal.md` / `spec.md`).
- Segunda pasada si la primera no encuentra resultados.
- Barrels / `index.ts` públicos.
- Dependencias ya usadas en el área.

## Fase C — Catálogo

| Tipo | Uso |
| :--- | :--- |
| Reutilizar tal cual | … |
| Extender | … |
| Consolidar / duplicados | … |
| Hueco real | … |

## Restricciones

- Anclar a **archivos y símbolos**; no describir solo desde producto.
- No proponer diseño final ni código; **hechos** y **candidatos**.

## Formato (para exploration.md)

### Lógica existente
### Validaciones y side effects actuales
### Dependencias técnicas del área
### Candidatos a reutilizar o extender
### Riesgo de duplicación

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Hay un hook similar” | Nombre + ruta |
