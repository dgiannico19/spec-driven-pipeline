---
name: task-progress-updater
description: Manipula archivos Markdown en 'ai/changes/' para marcar tareas como completadas.

logic:
  - Leer el contenido actual de `ai/changes/[FOLDER-NAME]/tasks.md`.
  - Localizar la línea que coincide con el ID o descripción de la tarea recién implementada.
  - Reemplazar el patrón `- [ ]` por `- [x]` exactamente en esa línea.
  - Si la tarea tiene sub-tareas, asegurar que el padre se marque solo si los hijos están listos (opcional).
  - Sobrescribir el archivo con el nuevo estado.

rules:
  - NUNCA borrar contenido, solo reemplazar `[ ]` por `[x]`.
  - Mantener la indentación original del archivo para no romper el formato Markdown.
  - Si la tarea no se encuentra, lanzar un error para que el agente verifique si el diseño cambió.

input:
  task_id: "ID o texto de la tarea"
  folder_path: "ai/changes/YYYY-MM-DD-nombre-slug/"

output:
  success: boolean
  updated_file: "path/to/tasks.md"
---
