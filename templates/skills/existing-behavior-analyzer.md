---
name: existing-behavior-analyzer
description: Mapea comportamiento técnico ya implementado y cataloga activos reutilizables antes de diseñar o codificar.
---

## Objetivo

Documentar **qué ya existe** en el repo (comportamiento, utilidades, UI, datos) para que Steps 3–5 **extiendan en lugar de duplicar**. Complementa `repo-structure-scanner` y `code-area-impact-detector` con foco en **reutilización**.

## Fase A — Inventario de comportamiento

Analizar solo **código real** (no producto abstracto):

- Lógica, validaciones, ramas, side effects, integraciones ya presentes.
- Hooks, servicios, handlers, endpoints, stores, mappers, formatters.
- Lógica en `entities/` o capa de dominio equivalente.

## Fase B — Búsqueda de similares y vecinos

Obligatorio **antes** de concluir el análisis:

- Buscar por **nombre y por concepto** (sinónimos del dominio en `proposal.md` / `spec.md`): utilidades duplicadas o casi duplicadas, componentes genéricos, patrones de fetch/cache, validadores.
- Identificar **barrels / public API** (`index.ts`) bajo los que ya se exporta algo usable.
- Listar **dependencias ya usadas** en el área (ej. librería de fechas, i18n): el diseño futuro no debería introducir otra lib paralela sin brecha justificada.

## Fase C — Catálogo para reutilización

Clasificar hallazgos en:

| Tipo | Descripción |
| :--- | :--- |
| **Reutilizar tal cual** | API estable; el cambio solo consume o configura. |
| **Extender** | Falta un caso; conviene ampliar módulo existente en vez de archivo nuevo paralelo. |
| **Reemplazo / consolidar** | Hay 2+ implementaciones similares; documentar para que Step 3 decida (sin implementar aquí). |
| **Hueco real** | No hay nada equivalente; recién ahí “código nuevo” está justificado en exploración. |

## Restricciones

- No describir comportamiento solo desde producto; anclar a **archivos y símbolos**.
- No proponer diseño final ni código; solo **hechos** y **candidatos**.

## Formato de salida (para volcar a `exploration.md`)

### Lógica existente
…

### Validaciones y side effects actuales
…

### Dependencias técnicas del área
…

### Candidatos a reutilizar o extender
- **Ruta / símbolo** — rol — acción sugerida (reutilizar | extender | consolidar | investigar)

### Riesgo de duplicación
- [Qué podría implementarse de nuevo por error si no se lee lo anterior]
