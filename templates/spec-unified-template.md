# Spec — [título corto, mismo slug o módulo si aplica]

> **Estado del documento:** `borrador Step 1` → `refinando (Steps 2–3)` → `comportamiento cerrado (Step 4)` → actualizar esta línea al avanzar.

Este archivo fusiona dos estilos para máxima precisión ante la IA y revisión humana:

- **Narrativa y alcance** (ámbito explícito, fuera de alcance, no objetivos, trazabilidad con `proposal.md`).
- **Normas ejecutables** tipo contrato: **SHALL / MUST / SHOULD / MAY** y escenarios **GIVEN / AND / WHEN / THEN** (estilo OpenSpec / BDD).

**Convenciones**

- **SHALL** o **MUST**: obligatorio. **SHOULD**: recomendado. **MAY**: opcional.
- Cada **Requirement** agrupa una regla de negocio o de producto; bajo él, uno o más **Scenario** con listas `- GIVEN` / `- AND` / `- WHEN` / `- THEN` / `- AND`.
- Repetí **- AND** tantas veces como haga falta tras GIVEN o THEN.
- Opcional: prefijo **`(RF-XX)`** en el título del Requirement para trazabilidad con matrices QA y `testing.md`.

---

## Propósito (Purpose)

[Especificá qué comportamiento del sistema documenta este spec, para qué contexto de usuario o integración aplica, y qué queda explícitamente fuera del “contrato” de este archivo si hace falta aclarar.]

---

## Alcance

### Dentro de alcance

- …

### Fuera de alcance

- …

---

## Requisitos normativos (Requirements)

### Requirement: (RF-01) [Nombre breve en voz activa]

[Uno o más párrafos normativos. Ej.: The system SHALL … | El sistema DEBE … | La API MUST …]

#### Scenario: [nombre descriptivo del caso feliz o principal]

- GIVEN [precondición / contexto]
- AND [otra precondición, opcional]
- WHEN [acción o evento]
- THEN [resultado observable obligatorio]
- AND [efecto colateral o UI esperada, opcional]

#### Scenario: [caso alternativo o límite]

- GIVEN …
- WHEN …
- THEN …

---

### Requirement: (RF-02) [Siguiente requisito]

…

#### Scenario: …

- GIVEN …
- WHEN …
- THEN …

---

## Criterios de aceptación verificables

Lista corta, numerada, que el QA o el Step 6 puedan marcar sin reinterpretar el contrato. Cada ítem debe poder mapearse a un **Scenario** o **Requirement** de arriba.

1. **CA-01:** [Qué se verifica] → cubierto por: Requirement (RF-XX), Scenario «…».
2. **CA-02:** …

---

## No objetivos

- [Lo que explícitamente no se hace en esta épica]

---

## Notas de implementación y trazabilidad

- **Propuesta / negocio:** `proposal.md`
- **Diseño técnico:** `design.md` (Step 3); este spec no sustituye diagramas ni decisiones de arquitectura.
- **Rutas, entidades, contratos de datos:** [referencias a archivos o módulos cuando se conozcan]
- [Cualquier dependencia externa (otros repos, APIs, feature flags)]
