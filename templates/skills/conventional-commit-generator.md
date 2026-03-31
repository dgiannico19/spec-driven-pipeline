---
name: conventional-commit-generator
description: Propone mensajes Conventional Commits desde el diff y tasks.md; imperativo, scope real.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

## Objetivo

Mapear cambios reales a `tipo(scope): descripción` sin exceder políticas del equipo.

## Clasificación típica

- Lógica / feature visible → `feat`
- Corrección de bug → `fix`
- Estructura sin cambio de comportamiento → `refactor`
- Solo formato / estilo superficial → `style` o `chore` según política
- Deps / config → `chore` o `build`

## Estructura

- **Subject:** `tipo(scope): descripción` — **imperativo** (“add”, “fix”, no “added”).
- **Límite:** ≤ 50 caracteres en subject si el equipo lo exige.
- **Body:** opcional; breaking changes explícitos con `BREAKING CHANGE:` si aplica.

## Reglas

- **Scope:** usar módulos reales del repo (`shared`, `browse`, `features/checkout`, etc.), no genéricos inventados.
- Si el monorepo tiene convención (ej. Janis scopes), **respétala** si está en `specs/config.yaml` o documentación del equipo.

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| `feat: updates` | `feat(cart): add line item validation` |
| Scope inventado | Carpeta o módulo del diff |
