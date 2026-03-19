---
name: task-completion-verifier
description: Escanea exhaustivamente el archivo 'tasks.md' en busca de tareas pendientes o incompletas.

logic:
  - Cargar el archivo `ai/changes/[FOLDER-NAME]/tasks.md`.
  - Aplicar un regex de búsqueda: `/-\s\[\s\]/g` (busca cualquier instancia de checkbox vacío).
  - Contar el total de tareas (`[ ]` + `[x]`) vs. el total de completadas (`[x]`).
  - Si el conteo de `[ ]` es mayor a 0:
      - Extraer el texto de las tareas pendientes.
      - Retornar estado: RECHAZADO con la lista de pendientes.
  - Si todas son `[x]`:
      - Retornar estado: CONFORME.

rules:
  - No permitir estados intermedios (ej: `[-]` o `[/]`). Solo `[x]` es válido para aprobación.
  - Ignorar líneas que sean encabezados o comentarios que no sigan el formato de checkbox.
  - Validar que el archivo no esté vacío.

input:
  folder_path: "ai/changes/YYYY-MM-DD-nombre-slug/"

output:
  status: "CONFORME | PENDIENTE"
  pending_tasks: ["Lista de tareas que quedaron en [ ]"]
  completion_percentage: "number"
---
