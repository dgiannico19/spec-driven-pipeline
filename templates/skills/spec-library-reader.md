---
name: spec-library-reader
description: Escanea specs/library/ con términos tomados de proposal/spec, lectura verificable y comparación con el código; sin rutas inventadas.
---

## Objetivo

Extraer definiciones técnicas de `specs/library/` alineadas a términos de `proposal.md` y `spec.md`, y **contrastar** con lo que el código real expone — mismo espíritu que “tool results may include external data; watch for contradictions” en prompts de sistema.

---

## Entrada (implícita en el flujo del agente)

- **keywords**: derivá una lista corta desde títulos de capacidades, nombres de módulos y términos en **Requirements** (no inventes keywords sin anclaje en esos documentos).
- **specs_path**: `specs/library/` (salvo que el equipo use otra ruta en `pipeline.config.yaml` — **leé** la config antes de asumir).

---

## Procedimiento (paso a paso)

1. **Listar o buscar**: enumerá archivos `.md` bajo `specs/library/` (o usá búsqueda del IDE / grep por keyword sobre ese árbol).
2. **Leer**: para cada candidato relevante, leé el archivo **completo** o las secciones de decisiones/reglas (si es largo, leé al menos el encabezado y la sección que define contrato).
3. **Anotar trazabilidad**: en la salida del agente, listá **`ruta exacta`** de cada spec consultada (anti-“hay una doc en library” sin nombre de archivo).
4. **Comparar con código**: cruzá con hallazgos de `repo-structure-scanner` / código real; si la spec dice X y el código hace Y, **registrá contradicción explícita** (no la ignores).
5. **Vacío**: si no hay spec para un módulo, declará **“Módulo sin documentación oficial en specs/library”** — no inventes contenido.

---

## Reglas

- **No editar** `specs/library/` salvo que el workflow del step lo indique; en Step 2 priorizá lectura para alimentar `exploration.md`.
- **No inventes** nombres de archivo en `specs/library/`; si no estás seguro, **listá el directorio** primero.

---

## Salida esperada (plantilla)

```markdown
## Specs de librería consultadas
| Archivo | Qué aporta al análisis |
| :--- | :--- |
| `specs/library/....md` | ... |

## Contradicciones código vs library
- ...

## Módulos sin doc en library
- ...
```

---

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| Resumir una spec sin haber abierto el archivo | Citar ruta + extracto o sección |
| Asumir que `SvgComponent.md` existe | Listar `specs/library/` y confirmar nombre |
