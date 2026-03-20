---
name: spec-library-reader
description: Escanea y extrae definiciones técnicas de la carpeta 'ai/specs/' para asegurar la continuidad arquitectónica.

logic:
  - Identificar términos clave en el `proposal.md` (ej: "Componente Svg", "Hook de Auth").
  - Buscar archivos `.md` en `ai/specs/` que coincidan con esos términos.
  - Leer el contenido de las specs encontradas, priorizando las secciones "Decisions" y "Rules".
  - Comparar si la spec oficial coincide con lo que el `repo-structure-scanner` encuentra en el código real.
  - Alertar si existe una contradicción (ej: La Spec dice usar X, pero el código usa Y).

rules:
  - Si no existe una spec para un componente, marcarlo como "Módulo sin documentación oficial".
  - No debe intentar editar las specs, solo leerlas para dar contexto al `exploration.md`.
  - Debe listar las rutas de las specs consultadas para trazabilidad.

input:
  keywords: ["lista", "de", "terminos", "tecnicos"]
  specs_path: "ai/specs/"

output:
  found_specs: [
    { "name": "SvgComponent.md", "path": "ai/specs/SvgComponent.md", "content_summary": "..." }
  ]
  warnings: ["No se encontró spec para el módulo 'Analytics'"]
---
