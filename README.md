# AI Dev Pipeline 🚀

[![npm](https://img.shields.io/npm/v/ai-dev-pipeline.svg)](https://www.npmjs.com/package/ai-dev-pipeline)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AI Dev Pipeline** es una interfaz de línea de comandos (CLI) diseñada para instalar un flujo de trabajo de Inteligencia Artificial estructurado en tu repositorio. 

Detecta automáticamente tu editor (IDE) y despliega **agentes, reglas y habilidades (skills)** que permiten a la IA razonar como un equipo de ingeniería senior, separando el análisis de la ejecución.

### 🛠 Entornos Soportados
* **Cursor** (Reglas y Agentes personalizados)
* **Windsurf** (Cascade Context)
* **Claude Code**

---

## 📥 Instalación

Puedes ejecutarlo directamente sin instalar usando `npx`:

```bash
npx ai-dev-pipeline init

O instalar globalmente:

Bash
npm install -g ai-dev-pipeline
ai-dev-pipeline init
```

---
## 📁 Estructura del Workflow (Directorio `ai/`)

El pipeline establece una **fuente de verdad única** dentro de la carpeta `ai/` de tu proyecto. Esto evita "ensuciar" la raíz y mantiene el contexto organizado para el IDE:

| Directorio | Propósito |
| :--- | :--- |
| **`ai/changes/`** | **Espacio activo.** Aquí es donde los agentes trabajan en la épica actual. |
| **`ai/specs/`** | **Librería de diseño.** Contiene la documentación técnica final de tus componentes. |
| **`ai/archive/`** | **Memoria histórica.** Épicas finalizadas que sirven de contexto para futuras tareas. |

---

## 🤖 Los 7 Agentes del Pipeline

Al inicializar el proyecto, los siguientes agentes estarán disponibles en tu IDE para ser invocados mediante comandos de chat:

### 1. 🏗️ **Iniciador de Propuesta** (Step 1)
* **Misión:** Analizar el ticket o historia de usuario desde el punto de vista de negocio.
* **Resultado:** Crea la carpeta de la épica y el archivo `proposal.md`. Define el **"Por qué"** (negocio) y las nuevas **Capabilities** (capacidades) del sistema.

### 🔍 2. **Analizador de Exploración** (Step 2)
* **Misión:** Escanear el código real para ver dónde impactará el cambio.
* **Resultado:** Genera `exploration.md`. Identifica archivos afectados, lógica actual y brechas técnicas.

### 🧠 3. **Constructor de Diseño** (Step 3)
* **Misión:** El arquitecto. Decide **CÓMO** se resolverá el problema.
* **Resultado:** Genera `design.md` (decisiones técnicas) y `tasks.md` (el checklist de tareas `[ ]`).

### 📘 4. **Generador de QA y Manuales** (Step 4)
* **Misión:** Traducir el diseño en pasos de prueba y documentación de uso.
* **Resultado:** Genera `testing.md`. Incluye una matriz de pruebas y ejemplos de esquemas (YAML/JSON) para validar sin leer código.

### 🔨 5. **Ejecutor de Desarrollo** (Step 5)
* **Misión:** El programador. Escribe el código siguiendo el diseño.
* **Resultado:** Implementa cambios en el repo y **marca con `[x]`** las tareas completadas en el `tasks.md`.

### 🛡️ 6. **Revisor Estricto** (Step 6)
* **Misión:** El guardián de calidad (Gatekeeper).
* **Resultado:** Reporte de auditoría. Bloquea el proceso si el código no coincide con el diseño o si faltan tareas por tildar. Detecta errores de estilo (`const`, early returns, etc).

### 📦 7. **Organizador de Commits y Archivo** (Step 7)
* **Misión:** Notario de cierre. Organiza la historia y limpia el área de trabajo.
* **Resultado:** Genera el plan de **Conventional Commits** y mueve la épica de `changes/` a `archive/` para liberar el espacio de trabajo.

---

## 🧠 Filosofía: El Archivo como Memoria IA

¿Por qué archivamos? El desarrollador humano olvida, pero **la IA del futuro tiene memoria infinita**.

* **Contexto Permanente:** En futuros cambios, la IA consultará el `archive/` para entender por qué se tomó una decisión técnica hace meses.
* **Cero Alucinaciones:** La IA no inventará reglas; se basará en el historial documentado de tu propio proyecto.
* **Onboarding Veloz:** Cualquier nuevo integrante del equipo (humano o IA) puede entender la arquitectura leyendo la evolución en la carpeta `ai/`.

---

## 🤝 Contribuciones
¡Las ideas son bienvenidas! Si quieres agregar soporte para nuevos IDEs o mejorar los prompts de los agentes, abre un **Issue** o envía un **Pull Request**.

## 📄 Licencia
Distribuido bajo la licencia **MIT**.