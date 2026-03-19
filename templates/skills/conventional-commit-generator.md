---
name: conventional-commit-generator
description: Genera mensajes de commit estandarizados basados en el análisis del diff y el tasks.md.

logic:
  - Analizar el tipo de cambio:
      - Lógica nueva / Componentes -> `feat`
      - Corrección de errores -> `fix`
      - Cambios de estructura sin lógica -> `refactor`
      - Estilos / CSS -> `style`
      - Config / Deps -> `chore`
  - Estructura: `<tipo>(<scope>): <descripción en minúsculas y presente>`.
  - Si el cambio es grande, añadir un `body` con los breaking changes si existen.

rules:
  - No superar los 50 caracteres en el subject.
  - Usar imperativo ("add" en lugar de "added").
  - Si afecta a Janis, usar scopes como `(browse)`, `(form)`, `(shared)`.
---
