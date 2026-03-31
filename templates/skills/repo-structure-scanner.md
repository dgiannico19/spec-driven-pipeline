---
name: repo-structure-scanner
description: Escanea la estructura real del repo (capas, módulos) con rutas verificables; sin inferir comportamiento funcional.
uses:
  - rules/repo-architecture-rule.md
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — no inventes carpetas; **listá o leé** el FS.

## Objetivo

Describir **organización técnica observada** (no el comportamiento de negocio). Toda sección debe poder respaldarse con **rutas reales** bajo el repo.

## Cadena mínima

1. Si existe `specs/project-context.md`, úsalo como pista del árbol.
2. Enumerá `src/` (o la raíz de código que defina el proyecto) — **sin asumir** que siempre es `src/`.
3. Para cada capa FSD relevante (**app**, **pages**, **features**, **entities**, **widgets**, **shared** o equivalente del repo), listá **subcarpetas o archivos** con ruta relativa.

## Qué identificar

- Capas y slices visibles en disco.
- `utils` / `helpers` / `lib` / `infra` si existen.
- **No inferir** qué hace el código; solo **dónde** está.

## Restricciones

- No describir comportamiento funcional.
- No uses `path/to/...`; usá rutas obtenidas del listado.

## Formato de salida

## Estructura del repositorio

### app
_(rutas o “no presente”)_

### pages
### features
### entities
### widgets
### shared

### otras carpetas relevantes

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “El repo sigue FSD” sin listar evidencia | Rutas bajo cada capa |
| Copiar nombres de capas del manual si no existen en disco | Adaptar a la estructura real |
