# AI Dev Pipeline

[![npm](https://img.shields.io/npm/v/ai-dev-pipeline.svg)](https://www.npmjs.com/package/ai-dev-pipeline)

**AI Dev Pipeline** es una CLI que instala un pipeline de desarrollo de AI estructurado en tu proyecto.  
Detecta automáticamente el entorno AI y copia los **agents, rules y skills** necesarios para que tu equipo tenga un flujo de trabajo consistente con asistencia AI, desacoplado de herramientas externas y basado en el estándar de documentación evolutiva.

Actualmente soporta:
* **Cursor** (Rules & Agents)
* **Windsurf**
* **Claude Code**

---

## Install

Ejecutar directamente con `npx`:

```bash
npx ai-dev-pipeline init

O instalar globalmente:

Bash
npm install -g ai-dev-pipeline
ai-dev-pipeline init
```

---

🚀 The AI-Native Workflow (ai/ directory)
El pipeline establece una fuente de verdad en la carpeta ai/ de tu proyecto. Este flujo separa el pensamiento de la ejecución:

ai/changes/: Espacio de trabajo activo para la épica actual.

ai/specs/: Librería de diseños técnicos actualizados y manuales de componentes.

ai/archive/: Memoria histórica de decisiones (Contexto para futuras IAs).

---

🤖 Pipeline Steps (The 7 Agents)
Al instalar, dispondrás de los siguientes agentes que orquestan el desarrollo de punta a punta:

1. 🏗️ Step 1: Proposal Initiator
Función: Analiza el ticket, épica o historia de usuario.
Output: Crea la carpeta en ai/changes/ e inicia el proposal.md. Define el "Why" (negocio) y las nuevas Capabilities del sistema.

2. 🔍 Step 2: Exploration Analyzer
Función: Escanea el repositorio real buscando puntos de impacto.
Output: El archivo exploration.md. Identifica archivos afectados, comportamiento actual y brechas técnicas (gaps).

🧠 Step 3: Design Builder
Función: El arquitecto del flujo. Cruza negocio y técnica para dictar la solución.
Output: * design.md: Decisiones de arquitectura, riesgos y plan de migración.

tasks.md: Checklist atómico de tareas con formato [ ] para ejecución.

📘 Step 4: QA & Usage Generator
Función: Traduce el diseño en instrucciones de uso y pruebas.
Output: testing.md. Contiene una matriz de pruebas (HP, Edge Cases) y ejemplos de uso (YAML/JSON) para validar sin leer código.

🔨 Step 5: Dev Executor
Función: El agente programador. Implementa el código real.
Output: Código productivo alineado a FSD y actualización de progreso marcando con [x] las tareas completadas en tasks.md.

🛡️ Step 6: Strict Reviewer
Función: El Gatekeeper técnico.
Output: Reporte de auditoría. Valida que el código coincida con el design.md y que todas las tareas en tasks.md estén tildadas. Bloquea si hay errores de estilo.

📦 Step 7: Commit Splitter & Archiver
Función: El notario de cierre. Organiza Git y preserva la documentación.
Output: * Plan de commits atómicos bajo Conventional Commits.

Mueve la carpeta de ai/changes/ a ai/archive/ para liberar el espacio de trabajo.

---

🧠 Philosophy: The Archive as AI Memory
¿Por qué archivamos? El programador humano rara vez vuelve a leer documentación de hace 6 meses, pero la IA del futuro sí.

Al mantener un ai/archive/ estructurado:

Contexto Infinito: En futuros cambios, la IA consultará el histórico para entender por qué se tomó una decisión técnica.

Evita Alucinaciones: La IA no inventará reglas; se basará en tu historial real de diseños.

Onboarding: Un nuevo desarrollador (o IA) entiende el sistema leyendo la evolución de los archivos en ai/.

Contributing
¡Contribuciones bienvenidas! Abrir issues o pull requests para colaborar en nuevos agentes o soporte para más entornos AI.

License
MIT