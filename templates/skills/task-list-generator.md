---
name: task-list-generator
description: Transforma el diseño técnico en un checklist [ ] detallado y ordenado cronológicamente.

logic:
  - Fase 1 (Prep): Instalación de deps o creación de carpetas/estilos base.
  - Fase 2 (Core): Implementación de la lógica principal (componentes, hooks, utils).
  - Fase 3 (Integración): Registro en índices, exportación y conexión con el sistema.
  - Fase 4 (QA/Docs): Tests unitarios y archivos de documentación.

rules:
  - Cada tarea debe ser "atómica" (se puede hacer en < 30 mins).
  - Usar nombres de archivos reales identificados en la exploración.
  - El formato debe ser estrictamente `- [ ] ID.X [Tarea]`.
---
