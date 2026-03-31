---
name: ai-archiver
description: Copia la épica a specs/changes/archive/ con estructura definida; verifica antes de eliminar la carpeta activa.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — **medir dos veces, cortar una** (integridad antes de `rm`).

## Objetivo

Archivar la épica en `specs/changes/archive/[FOLDER-NAME]/` con:

- **Raíz del archivo:** `proposal.md`, `design.md`, `tasks.md`, `exploration.md`, **`.openspec.yaml`** (copia de `config.yaml` de épica).
- **Subcarpeta `specs/`:** `spec.md`, `testing.md`, otros md de comportamiento.

## Procedimiento

1. Confirmar que `specs/changes/archive/` existe (crear si no).
2. Copiar **todos** los archivos críticos al destino.
3. **Listar** destino y comparar con origen (conteo o checksum mental de archivos clave).
4. Solo si la copia es correcta: eliminar `specs/changes/[FOLDER-NAME]/` activa (`rm -rf` / borrado equivalente).

## Reglas

- **NUNCA** borrar la activa hasta verificar copia en `archive/`.
- Colisión de nombre en archive: sufijo `-v2`, `-v3`, etc.
- No tocar `specs/library/` salvo lo acordado en el cierre.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| `rm` antes de listar destino | Checklist de archivos |
| Archivar sin `spec.md` | Verificar subcarpeta `specs/` |
