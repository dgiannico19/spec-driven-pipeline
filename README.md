# AI Dev Pipeline 🚀

[![npm](https://img.shields.io/npm/v/ai-dev-pipeline.svg)](https://www.npmjs.com/package/ai-dev-pipeline)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AI Dev Pipeline** es una CLI diseñada para instalar un flujo de trabajo de IA estructurado en tu repositorio. Despliega agentes, reglas y habilidades (**skills**) para que la IA razone como un equipo de ingeniería senior.

## 🛠 Entornos Soportados

- **Cursor** (Reglas y Agentes) | **Windsurf** (Cascade) | **Claude Code**

---

## 📥 Instalación

Puedes ejecutarlo directamente sin instalar usando `npx`:

```bash
npx ai-dev-pipeline init
```

---

## 📁 Estructura del Workflow (directorio `ai/`)

El pipeline establece una **fuente de verdad única** dentro de la carpeta `ai/` de tu proyecto. Esto evita ensuciar la raíz y mantiene el contexto organizado:

| Directorio | Propósito |
| :--- | :--- |
| **ai/changes/** | **Espacio activo.** Aquí es donde los agentes trabajan en la épica actual. |
| **ai/specs/** | **Librería de diseño.** Contiene la documentación técnica final de tus componentes. |
| **ai/archive/** | **Memoria histórica.** Épicas finalizadas que sirven de contexto para futuras tareas. |

---

## 🤖 Los 8 Agentes del Pipeline

Inicia cada fase invocando al agente correspondiente en el chat de tu IDE:

### 🏗️ 1. Iniciador de Propuesta (Step 1)

- **Comando:** `/step-1-ai-proposal-initiator`
- **Misión:** Analizar el ticket de negocio y crear la carpeta de la épica con `proposal.md`.
- **Skills:** `epic-input-validator`, `ai-path-generator`, `epic-scope-analyzer`, `epic-domain-extractor`.

### 🔍 2. Analizador de Exploración (Step 2)

- **Comando:** `/step-2-ai-exploration-analyzer`
- **Misión:** Escanear el código real para ver el impacto y generar `exploration.md`.
- **Skills:** `spec-library-reader`, `repo-structure-scanner`, `technical-gap-analyzer`, `code-area-impact-detector`.

### 🧠 3. Constructor de Diseño (Step 3)

- **Comando:** `/step-3-ai-designer-builder`
- **Misión:** Definir el **CÓMO** técnico definitivo en `design.md` y el checklist `tasks.md`.
- **Skills:** `technical-decision-maker`, `task-list-generator`, `fsd-architecture-planner`.

### 📘 4. Generador de QA y Behavior (Step 4)

- **Comando:** `/step-4-ai-qa-manual-generator`
- **Misión:** Traducir el diseño en pasos de prueba (OpenSpec) y manuales en `testing.md`.
- **Skills:** `qa-test-matrix-builder`, `usage-manual-builder`, `qa-input-validator`, `qa-edge-case-expander`.

### 🔨 5. Ejecutor de Desarrollo (Step 5)

- **Comando:** `/step-5-ai-dev-executor`
- **Misión:** Implementar el código siguiendo fielmente el diseño y marcar tareas en `tasks.md`.
- **Skills:** `repo-code-analyzer`, `task-progress-updater`, `code-style-enforcer`, `minimal-change-implementer`.

### 🛡️ 6. Revisor Estricto (Step 6)

- **Comando:** `/step-6-ai-strict-reviewer`
- **Misión:** Gatekeeper final. Valida código vs diseño y genera reporte de auditoría.
- **Skills:** `diff-change-detector`, `code-style-reviewer`, `task-completion-verifier`.

### 📦 7. Organizador de Commits (Step 7)

- **Comando:** `/step-7-ai-commit-splitter`
- **Misión:** Generar un plan de **Conventional Commits** atómicos para el cierre.
- **Skills:** `conventional-commit-generator`.

### 🗃️ 8. Archivador de Conocimiento (Step 8)

- **Comando:** `/step-8-ai-archiver`
- **Misión:** Mover la épica a `archive/` y promocionar la Spec final a la librería oficial.
- **Skills:** `ai-archiver`.

---

## 🔄 El Ciclo de Vida de las Specs

La documentación técnica no es estática, es **evolutiva**:

1. **Nacimiento (Step 4):** El diseño se promociona a `ai/specs/` como la nueva verdad oficial.
2. **Consulta (Step 2):** En futuras épicas, la IA lee primero `ai/specs/` para no romper reglas previas.
3. **Persistencia (Step 8):** Al archivar, se guarda una copia de la evolución histórica.

---

## 📄 Licencia

Distribuido bajo la licencia **MIT**.
