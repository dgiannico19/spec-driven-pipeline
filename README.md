# Spec-Driven Pipeline

**Framework CLI para equipos que quieren IA que ejecute, no solo converse.** Combina descubrimiento automatico del repositorio, 33 skills bajo el estandar Zero-Guesswork y un agente autonomo que llama herramientas en bucle.

---

## Propuesta de Valor

- **Agente de software autonomo:** Bucle multi-turno con herramientas reales (read_text_file, list_directory, str_replace_edit).
- **Cero adivinanza (Zero-Guesswork):** Evidencia real (rutas leídas, specs, diffs) antes de cerrar.
- **Cierre con Spec:** Con el parametro --spec, el proceso termina cuando el texto incluye VERIFICATION_PASS.

---

## Arquitectura Hibrida

### Cloud (Anthropic)
- Variable: ANTHROPIC_API_KEY (obligatoria sin API_BASE_URL).
- Modelos: Claude-3-5-Sonnet (default).

### Local (Ollama / OpenAI-compatible)
- Endpoint: base que exponga /v1/chat/completions (ej: http://127.0.0.1:11434/v1).
- Variable: API_BASE_URL.
- Modelos: qwen2.5-coder, llama3.2, etc.

---

## Comandos Principales

### 1. Init
Instala plantillas y estructura de carpetas:
`npx spec-driven-pipeline init`

### 2. Run / Sync
Ejecuta el Auto-Discovery y genera el mapa de contexto en specs/project-context.md:
`npx spec-driven-pipeline run`

### 3. Agent
Ejecuta el bucle autonomo:
`npx spec-driven-pipeline agent "Tu instruccion"`

Para usar una spec de verificacion:
`npx spec-driven-pipeline agent --spec specs/tu-tarea.md "Ejecuta"`

---

## Variables de Entorno

- **API_BASE_URL**: URL del backend local o proxy.
- **ANTHROPIC_API_KEY**: Tu API Key de Anthropic u OpenAI.
- **ANTHROPIC_MODEL**: Nombre del modelo (default: claude-sonnet-4-20250514).
- **SPEC_AGENT_VERBOSE**: Setear en 1 para ver el log de turnos.
- **SPEC_AGENT_MAX_TURNS**: Limite de vueltas (default 32).

---

## Instalacion

```bash
npm install spec-driven-pipeline --save-dev
npx spec-driven-pipeline init
npx spec-driven-pipeline run
```

## Licencia MIT. Documentacion completa en GitHub.
