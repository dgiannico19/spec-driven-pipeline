---
name: repo-code-analyzer
description: Analiza el código existente con mapa de impacto, búsqueda repo-wide ante dudas y rutas verificables; reduce superficie nueva.
---

## Objetivo

Comprender el código real del repo y **reducir superficie nueva**: saber qué ya existe, qué se puede reutilizar y qué es ruido a evitar. Inspirado en la disciplina de **Read before modify** y **Grep/Glob antes de asumir** de prompts de herramientas en entornos tipo Claude Code.

---

## Contrato de salida (anti-alucinación)

- Toda ruta bajo **“Archivos / Candidatos”** debe ser **ruta real** vista en el FS o devuelta por búsqueda — prohibido `src/.../foo.ts` genérico sin segmentos verificados.
- Si listás **símbolos** (función, componente), deben aparecer en **resultado de búsqueda** o archivo leído.

---

## Fase 0 — Contexto automático

- Si existe `specs/project-context.md`, **usalo** como primer mapa (scripts, árbol parcial); **no** sustituye lectura de archivos de la épica.

---

## Fase 1 — Mapa de impacto

- Estructura de carpetas y capas (FSD u otra del repo).
- Archivos que **deben** modificarse según `design.md` / `exploration.md`.
- Archivos **fuera de alcance** (prohibido tocar salvo spec explícita).
- **Incertidumbre**: si no sabés qué archivo implementa X → **búsqueda global** (nombre de export, string único, path pattern) **antes** de concluir.

---

## Fase 2 — Descubrimiento de reutilización

- Buscar implementaciones similares: hooks, helpers, componentes genéricos, validadores, formatters, clients HTTP, constantes.
- Identificar **APIs públicas** del módulo (`index.ts` / barrel) vs internos; preferir extender vía API pública.
- Listar **dependencias ya usadas** en el área del cambio (evitar introducir otra lib que duplique rol, ej. segunda librería de fechas).
- **Múltiples coincidencias**: tabla de candidatos con criterio de elección (importado por quién, capa, tests).

---

## Fase 3 — Decisiones

- Para cada pieza nueva propuesta: ¿existe equivalente o parcial en el repo? Si sí → **reusar o extender**.
- Señalar riesgo de **duplicación lógica** (mismo comportamiento, distinto archivo).

---

## Salida

### Mapa técnico de impacto

[Rutas a modificar / crear solo si Fase 2 no encontró alternativa — cada una **verificable**.]

### Candidatos a reutilizar

[Archivos y símbolos concretos, con criterio de selección si hay más de uno.]

### Huecos reales

[Qué falta de verdad y justifica código nuevo — si “no encontrado”, describí **qué buscaste** (patrones, carpetas).]
