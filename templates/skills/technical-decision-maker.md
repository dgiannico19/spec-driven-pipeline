---
name: technical-decision-maker
description: Toma decisiones de arquitectura comparando el estado actual vs. el deseado, priorizando patrones existentes en el repo.

logic:
  - Identificar la "brecha principal" (ej: falta un componente base).
  - Buscar en el repo patrones similares para imitar (ej: ¿Cómo se hicieron otros componentes de display?).
  - Definir el Stack: ¿Requiere nueva dependencia? ¿Usa hooks existentes?
  - Redactar la decisión con el formato: "Se decidió X porque Y, descartando Z por riesgo A".

rules:
  - Priorizar 'Bajo Acoplamiento'.
  - Favorecer la reutilización de `shared/ui`.
  - Si el cambio afecta el validador de esquemas (validator), marcarlo como decisión obligatoria.
---
