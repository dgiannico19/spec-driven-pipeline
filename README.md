# AI Dev Pipeline 🚀

[![npm](https://img.shields.io/npm/v/ai-dev-pipeline.svg)](https://www.npmjs.com/package/ai-dev-pipeline)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AI Dev Pipeline** es una interfaz de línea de comandos (CLI) diseñada para instalar un flujo de trabajo de Inteligencia Artificial estructurado en tu repositorio.

Detecta automáticamente tu editor (IDE) y despliega **agentes, reglas y habilidades (skills)** que permiten a la IA razonar como un equipo de ingeniería senior, separando el análisis de la ejecución.

### 🛠 Entornos Soportados

- **Cursor** (Reglas y Agentes personalizados)
- **Windsurf** (Cascade Context)
- **Claude Code**

---

## 📥 Instalación

Puedes ejecutarlo directamente sin instalar usando `npx`:

```bash
npx ai-dev-pipeline init
```

---

## 📁 Estructura del Workflow (Directorio `ai/`)

El pipeline establece una **fuente de verdad única** dentro de la carpeta `ai/` de tu proyecto. Esto evita "ensuciar" la raíz y mantiene el contexto organizado para el IDE:

| Directorio        | Propósito                                                                             |
| :---------------- | :------------------------------------------------------------------------------------ |
| **`ai/changes/`** | **Espacio activo.** Aquí es donde los agentes trabajan en la épica actual.            |
| **`ai/specs/`**   | **Librería de diseño.** Contiene la documentación técnica final de tus componentes.   |
| **`ai/archive/`** | **Memoria histórica.** Épicas finalizadas que sirven de contexto para futuras tareas. |

---
## 🤖 Los 8 Agentes del Pipeline

Como Staff Engineer, diseñé este pipeline para que cada agente sea un especialista modular. Debajo detallo los 8 steps del pipeline con sus skills subyacentes.

Inicia cada fase invocando al agente correspondiente en el chat de tu IDE:

### 🏗️ 1. **Iniciador de Propuesta** (Step 1)
- **Comando:** `/step-1-ai-proposal-initiator`
- **Misión:** Analizar el ticket o historia de usuario desde el punto de vista de negocio.
- **Resultado:** Crea la carpeta de la épica y el archivo `proposal.md`.

<details>
<summary>Skills utilizadas en este paso</summary>

| Skill | Descripción Técnica |
| :--- | :--- |
| `epic-input-validator` | Valida la estructura y completitud del ticket de entrada. |
| `ai-path-generator` | Genera la ruta en `ai/changes/` basada en el ID de la épica. |
| `epic-scope-analyzer` | Define claramente el "Why" (negocio) y el "What" (técnico). |
| `epic-domain-extractor` | Extrae el dominio de negocio para contextualizar la arquitectura. |

</details>

### 🔍 2. **Analizador de Exploración** (Step 2)
- **Comando:** `/step-2-ai-exploration-analyzer`
- **Misión:** Escanear el código real para ver dónde impactará el cambio.
- **Resultado:** Genera `exploration.md`. Identifica archivos afectados y riesgos.

<details>
<summary>Skills utilizadas en este paso</summary>

| Skill | Descripción Técnica |
| :--- | :--- |
| `spec-library-reader` | Lee la documentación en `ai/specs/` para contextualizar el análisis. |
| `repo-structure-scanner` | Escanea el repositorio para mapear archivos y dependencias. |
| `technical-gap-analyzer` | Detecta deudas técnicas y riesgos de arquitectura actuales. |
| `code-area-impact-detector` | Detecta áreas que serán impactadas por los cambios propuestos. |

</details>

### 🧠 3. **Constructor de Diseño** (Step 3)
- **Comando:** `/step-3-ai-designer-builder`
- **Misión:** Definir el **CÓMO** técnico definitivo.
- **Resultado:** Genera `design.md` y el checklist `tasks.md`.

<details>
<summary>Skills utilizadas en este paso</summary>

| Skill | Descripción Técnica |
| :--- | :--- |
| `technical-decision-maker` | Selecciona patrones (FSD, Clean Code) basados en el contexto. |
| `task-list-generator` | Genera un checklist estructurado y verificable en `tasks.md`. |
| `fsd-architecture-planner` | Planifica la arquitectura siguiendo Feature-Sliced Design. |

</details>

### 📘 4. **Generador de QA y Manuales** (Step 4)
- **Comando:** `/step-4-ai-qa-manual-generator`
- **Misión:** Traducir el diseño en pasos de prueba y documentación de uso.
- **Resultado:** Genera `testing.md`.

<details>
<summary>Skills utilizadas en este paso</summary>

| Skill | Descripción Técnica |
| :--- | :--- |
| `qa-test-matrix-builder` | Construye una matriz de casos de prueba y edge cases. |
| `usage-manual-builder` | Genera documentación de uso con ejemplos YAML/JSON. |
| `qa-input-validator` | Asegura que las pruebas sean ejecutables y relevantes. |

</details>

### 🔨 5. **Ejecutor de Desarrollo** (Step 5)
- **Comando:** `/step-5-ai-dev-executor`
- **Misión:** Implementar el código siguiendo fielmente el diseño.
- **Resultado:** Código productivo y tareas marcadas con `[x]` en `tasks.md`.

<details>
<summary>Skills utilizadas en este paso</summary>

| Skill | Descripción Técnica |
| :--- | :--- |
| `repo-code-analyzer` | Identifica los puntos óptimos de inserción en el código base. |
| `task-progress-updater` | Actualiza el estado de tareas en `tasks.md` automáticamente. |
| `code-style-enforcer` | Aplica reglas de estilo (early returns, const, legibilidad). |
| `minimal-change-implementer` | Implementa cambios con el mínimo impacto colateral posible. |

</details>

### 🛡️ 6. **Revisor Estricto** (Step 6)
- **Comando:** `/step-6-ai-strict-reviewer`
- **Misión:** Gatekeeper final. Valida código vs diseño.
- **Resultado:** Reporte de auditoría (Aprobado/Rechazado).

<details>
<summary>Skills utilizadas en este paso</summary>

| Skill | Descripción Técnica |
| :--- | :--- |
| `diff-change-detector` | Detecta desviaciones entre el código y la especificación. |
| `code-style-reviewer` | Auditoría de calidad enfocada en consistencia y buenas prácticas. |
| `task-completion-verifier` | Bloquea el avance si hay tareas pendientes en `tasks.md`. |

</details>

### 📦 7. **Organizador de Commits** (Step 7)
- **Comando:** `/step-7-ai-commit-splitter`
- **Misión:** Notario de cierre y limpieza de historia Git.
- **Resultado:** Plan de **Conventional Commits** atómicos.

<details>
<summary>Skills utilizadas en este paso</summary>

| Skill | Descripción Técnica |
| :--- | :--- |
| `conventional-commit-generator` | Genera mensajes de commit bajo el estándar (feat, fix, etc.). |

</details>

### 📦 8. **Archivador de Conocimiento** (Step 8)
- **Comando:** `/step-8-ai-archiver`
- **Misión:** Bibliotecario. Cierra el ciclo de vida de la épica.
- **Resultado:** Mueve todo a `ai/archive/` y promociona la Spec final.

<details>
<summary>Skills utilizadas en este paso</summary>

| Skill | Descripción Técnica |
| :--- | :--- |
| `ai-archiver` | Mueve la épica completa preservando el historial y las specs. |

</details>

---

## 🔄 El Ciclo de Vida de las Specs

A diferencia de otros sistemas, aquí la documentación técnica no es estática, es **evolutiva**:

1. **Nacimiento (Step 4):** El diseño aprobado se "promociona" a `ai/specs/` como la nueva verdad oficial del sistema.
2. **Consulta (Step 2):** En futuras épicas, la IA lee primero `ai/specs/` para no romper reglas de arquitectura previas.
3. **Persistencia (Step 8):** Al archivar, se guarda una copia de la spec dentro de la carpeta histórica.

---

## 🧠 Filosofía: El Archivo como Memoria IA

¿Por qué archivamos? El desarrollador humano olvida, pero **la IA del futuro tiene memoria infinita**.

- **Contexto Permanente:** La IA consultará el `archive/` para entender decisiones técnicas pasadas.
- **Cero Alucinaciones:** Se basa en el historial documentado de tu propio proyecto.
- **Onboarding Veloz:** Permite que cualquier integrante entienda la arquitectura leyendo la evolución en `ai/`.

---

## 🤝 Contribuciones
¡Las ideas son bienvenidas! Si quieres mejorar los prompts, abre un **Issue** o envía un **Pull Request**.

## 📄 Licencia
Distribuido bajo la licencia **MIT**.