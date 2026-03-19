---
name: ai-archiver
description: Ejecuta la limpieza del directorio 'ai/changes/' y asegura la persistencia en 'ai/archive/'.

logic:
  - Verificar que el directorio de destino `ai/archive/` existe; si no, crearlo.
  - Validar que la carpeta de la épica contiene los 5 archivos base (proposal, exploration, design, tasks, testing).
  - Generar el comando de sistema `mv` (o ejecutarlo si tiene permisos).
  - Confirmar al usuario la nueva ruta del histórico.

rules:
  - NUNCA borrar la carpeta sin antes confirmar el movimiento exitoso.
  - Si existe una carpeta con el mismo nombre en archive, añadir un sufijo `-v2`, `-v3`, etc.
---
