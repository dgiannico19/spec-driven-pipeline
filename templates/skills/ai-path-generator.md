---
name: ai-path-generator
description: Genera la ruta de trabajo EXCLUSIVAMENTE dentro de specs/changes/.

rules:
  - Root: "specs/changes/"
  - Format: "{{YYYY-MM-DD}}-{{ticket-id}}-{{slug}}"
  - Sanitization: lowercase, no special chars.

output:
  working_path: "specs/changes/2026-03-09-jmv-4021-svg-component/"
---
