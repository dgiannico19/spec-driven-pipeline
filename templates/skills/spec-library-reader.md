---
name: spec-library-reader
description: Escanea y extrae definiciones técnicas de specs/library/ para continuidad arquitectónica.

logic:
  - Identificar términos clave en el `proposal.md` y `spec.md` (ej. "Componente Svg", "Hook de Auth").
  - Buscar archivos `.md` en `specs/library/` que coincidan con esos términos.
  - Leer el contenido de las specs encontradas, priorizando secciones de decisiones y reglas.
  - Comparar si la spec oficial coincide con lo que el `repo-structure-scanner` encuentra en el código real.
  - Alertar si existe una contradicción (ej. La spec dice usar X, pero el código usa Y).

rules:
  - Si no existe una spec para un componente, marcarlo como "Módulo sin documentación oficial".
  - No debe intentar editar las specs de librería salvo que el workflow lo indique; en Step 2 priorizar lectura para `exploration.md`.
  - Debe listar las rutas de las specs consultadas para trazabilidad.

input:
  keywords: ["lista", "de", "terminos", "tecnicos"]
  specs_path: "specs/library/"

output:
  found_specs: [
    { "name": "SvgComponent.md", "path": "specs/library/SvgComponent.md", "content_summary": "..." }
  ]
  warnings: ["No se encontró spec para el módulo 'Analytics'"]
---
