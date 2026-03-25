---
name: ai-archiver
description: Mueve el núcleo a specs/changes/archive/[épica]/ (con subcarpeta specs/), luego borra la carpeta activa.

logic:
  - Asegurar `specs/changes/archive/` existe.
  - En destino `specs/changes/archive/[FOLDER-NAME]/`: raíz con proposal, design, tasks, exploration y `.openspec.yaml` (desde `config.yaml` de la épica).
  - Subcarpeta `specs/` dentro del archivo: al menos `spec.md`; incluir `testing.md` u otros specs si existen.
  - Tras comprobar integridad, ejecutar o proponer `rm -rf specs/changes/[FOLDER-NAME]` para no dejar restos en el área activa.

rules:
  - NUNCA borrar la carpeta activa hasta confirmar que los archivos críticos existen en `changes/archive/...`.
  - Colisión de nombre en archive: sufijo `-v2`, `-v3`, etc.
---
