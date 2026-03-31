# Spec-Driven Pipeline

[![npm](https://img.shields.io/npm/v/spec-driven-pipeline.svg)](https://www.npmjs.com/package/spec-driven-pipeline)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

**Framework de agentes autónomos, spec-first y agnóstico de proveedor.** Un solo CLI orquesta **descubrimiento del repo** (sin configuración manual), **33 skills** bajo el estándar **Zero-Guesswork** y un **bucle de ejecución** con edición quirúrgica y verificación opcional.

| Objetivo | Cómo lo cumple |
| :--- | :--- |
| **Autonomía real** | Loop multi-turno basado en `tool_use`, herramientas de filesystem y `str_replace_edit` — no un único disparo a la API. |
| **Compatibilidad universal** | **Anthropic (Messages API)** en la nube, o **cualquier backend compatible con OpenAI** (`/v1/chat/completions`): Ollama, vLLM, Groq, OpenAI, proxies internos. |
| **Cero adivinanza** | Skills y baseline que exigen evidencia (rutas, diffs, specs) antes de cerrar tareas. |

---

## Modos de operación

> 💡 **Un CLI, dos backends:** Anthropic nativo **o** OpenAI-compatible (`/v1/chat/completions`).

El mismo binario `spec-driven-pipeline` elige el transporte según variables de entorno. No hay bifurcación de código en tu proyecto: **un flujo**, dos formas de conectar el modelo.

### Modo Cloud (Anthropic) — máxima precisión

Pensado para **Claude** en producción: razonamiento fuerte, tool calling estable y calidad de referencia para tareas complejas.

**ID recomendado (último snapshot de Claude 3.5 Sonnet en la API de Anthropic):** `claude-3-5-sonnet-20241022`.

```bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
export ANTHROPIC_MODEL="claude-3-5-sonnet-20241022"
npx spec-driven-pipeline agent "Auditoría rápida: listá src/ y resumí la estructura"
```

| Aspecto | Detalle |
| :--- | :--- |
| **Cuándo usarlo** | Equipos que priorizan **precisión** y soporte comercial de Anthropic. |
| **Modelo** | **Claude 3.5 Sonnet** — usar `ANTHROPIC_MODEL=claude-3-5-sonnet-20241022` (snapshot más reciente de la familia 3.5). El paquete trae otro default en código (`claude-sonnet-4-20250514`); para 3.5 Sonnet, fijá siempre esta variable. |
| **Autenticación** | `ANTHROPIC_API_KEY` obligatoria si **no** usás `API_BASE_URL`. |

### Modo local / agnóstico (Ollama · OpenAI · vLLM · Groq)

Definí **`API_BASE_URL`** apuntando a la raíz compatible OpenAI (se añade `/chat/completions` si hace falta). El agente envía **`messages`** en formato estándar y reutiliza el mismo loop interno.

> **No-GPU Club:** **Ollama** es la opción ideal si trabajás **solo con CPU** (sin GPU dedicada): modelos cuantizados y tamaños moderados corren bien en el **procesador**, sin depender de una gráfica. Perfecto para desarrollo, privacidad y costo cero en tu propio hardware.

```bash
export API_BASE_URL="http://127.0.0.1:11434/v1"
export ANTHROPIC_MODEL="llama3.2"
npx spec-driven-pipeline agent "Listá el directorio actual de forma recursiva (máx. profundidad 2)"
```

| Beneficio | Qué significa |
| :--- | :--- |
| **Costo** | Ejecución **100% gratuita** si el modelo corre en tu máquina (p. ej. Ollama) sin API de pago. |
| **Privacidad** | El código y los prompts **no salen** de tu red si el servidor LLM es local o air-gapped. |
| **CPU-first** | Con Ollama, el **No-GPU Club** puede usar el agente en portátiles y entornos sin NVIDIA/AMD dedicada; elegí modelos y cuantización acordes a tu RAM. |
| **Flexibilidad** | Mismo CLI para **Groq**, **vLLM**, **OpenAI-compatible gateways** corporativos. |

**Clave API (opcional en este modo):** si el backend exige Bearer token, usá `OPENAI_API_KEY` o `API_KEY` (o `ANTHROPIC_API_KEY` como último recurso). Ollama local suele ir **sin** cabecera `Authorization`.

> **Nota:** Los modelos locales deben soportar **tool calling** de forma fiable; si no, las herramientas del agente pueden fallar o comportarse de forma degradada.

---

## El flujo de trabajo «Radar + Cerebro»

> 🛰️ **Radar** = contexto en disco · 🧠 **Cerebro** = modelo + herramientas.

Dos fases complementarias: primero **mapear** el proyecto sin IA de pago; después **ejecutar** con el modelo que elijas.

### Radar — `run` / `sync` (Discovery)

```bash
npx spec-driven-pipeline run
```

`run` (alias `sync`) mantiene el árbol `specs/`, la config del pipeline y, de forma **zero-config**, ejecuta **Auto-Discovery**:

- Detecta **stack** (`package.json`, `go.mod`, `pyproject.toml`, `Cargo.toml`, etc.).
- Escribe **`specs/project-context.md`** con identidad del repo, scripts útiles, entrypoints heurísticos y **árbol de directorios** (respetando `.gitignore` y carpetas de build típicas).

**Resultado:** el agente (y los skills en el IDE) **no arrancan ciegos**: el contexto del proyecto queda materializado en disco y se refresca en cada sync.

### Cerebro — `agent` (ejecución)

```bash
npx spec-driven-pipeline agent "Tu instrucción en lenguaje natural"
```

| Capacidad | Comportamiento |
| :--- | :--- |
| **Loop autónomo** | Sigue mientras haya bloques `tool_use` en la respuesta; no depende solo de `stop_reason`. |
| **Edición quirúrgica** | `str_replace_edit`: un `old_str` único por archivo → `new_str`; evita reescrituras enteras y diffs ruidosos. |
| **Cierre con spec** | Con `--spec` o `SPEC_VERIFICATION_PATH`, el flujo exige **`VERIFICATION_PASS`** tras releer la spec; hay rondas de remediación acotadas si falta evidencia. |

Transporte HTTP con **`fetch` nativo** (Node 18+), sin SDK obligatorio del proveedor.

---

## Librería de 33 skills (Zero-Guesswork)

El agente y los prompts del IDE comparten un **baseline de cero adivinanza** ([`templates/_shared/zero-guesswork-system.md`](templates/_shared/zero-guesswork-system.md)):

- **No inventa rutas:** lee el FS o resultados de herramientas antes de citar archivos.
- **Evidencia real:** `git`, contenido de `spec.md` / `tasks.md`, checks explícitos.
- **Anti-patrones:** muchas skills incluyen tablas **vago → quirúrgico** para bloquear ambigüedad y forzar pasos verificables.

Las **33 skills** en [`templates/skills/`](templates/skills/) cubren arquitectura FSD, análisis de repo, QA, implementación mínima, riesgo, git y archivo de épicas — siempre alineadas a ese estándar.

---

## Guía de inicio rápido

### Instalación estándar (npm)

```bash
npm install spec-driven-pipeline --save-dev
npx spec-driven-pipeline init
npx spec-driven-pipeline run
```

### Desarrollo del propio framework (`npm link`)

```bash
cd /ruta/al/clon/spec-driven-pipeline
npm install
npm link

cd /ruta/a/tu-app-frontend
npm link spec-driven-pipeline
npx spec-driven-pipeline init
npx spec-driven-pipeline run
```

Así probás cambios locales del CLI **sin publicar** a npm.

### Ejemplo — proyecto front-end (React / Vite)

Tras `init` + `run` (para tener `project-context.md`):

```bash
cd ~/proyectos/mi-spa
export ANTHROPIC_API_KEY="sk-ant-api03-..."
export ANTHROPIC_MODEL="claude-3-5-sonnet-20241022"
npx spec-driven-pipeline agent "Revisá src/components y describí qué componentes son candidatos a extraer a un design system"
```

Mismo proyecto, **100% local** con Ollama:

```bash
cd ~/proyectos/mi-spa
export API_BASE_URL="http://127.0.0.1:11434/v1"
export ANTHROPIC_MODEL="llama3.2"
npx spec-driven-pipeline agent "Listá src/ sin recursión y decime si hay un archivo de rutas"
```

Verificación alineada a una spec:

```bash
npx spec-driven-pipeline agent --spec specs/changes/mi-epica/spec.md "Implementá los CA pendientes y cerrá con verificación"
```

Logs de turnos en stderr:

```bash
SPEC_AGENT_VERBOSE=1 npx spec-driven-pipeline agent "..."
```

Ayuda general:

```bash
npx spec-driven-pipeline
```

---

## Tabla de variables de entorno

| Variable | Modo | Obligatoria | Rol / valor por defecto |
| :--- | :--- | :---: | :--- |
| `API_BASE_URL` | OpenAI-compatible | No | Si está definida, las peticiones van a `{base}/chat/completions` (o URL completa si ya termina en `/chat/completions`). Anthropic directo **no** se usa. |
| `ANTHROPIC_API_KEY` | Anthropic | Sí*, sin `API_BASE_URL` | Clave de la consola Anthropic. |
| `OPENAI_API_KEY` / `API_KEY` | OpenAI-compatible | No | Bearer opcional para Groq, OpenAI, gateways, etc. |
| `ANTHROPIC_MODEL` | Ambos | No | Default en código: `claude-sonnet-4-20250514`. **Claude 3.5 Sonnet (último snapshot API):** `claude-3-5-sonnet-20241022`. En local (Ollama, etc.), el nombre del modelo servido (p. ej. `llama3.2`). |
| `SPEC_VERIFICATION_PATH` | Ambos | No | Ruta a la spec para el protocolo `VERIFICATION_PASS` (equivalente a `--spec`). |
| `SPEC_AGENT_MAX_TURNS` | Ambos | No | **`32`** — tope de vueltas del bucle principal (seguridad). |
| `SPEC_AGENT_MAX_NUDGES` | Ambos | No | **`3`** — máximo de nudges de continuación. |
| `SPEC_AGENT_MAX_VERIFICATION_GAPS` | Ambos | No | **`6`** — máximo de rondas de remediación sin `VERIFICATION_PASS`. |
| `SPEC_AGENT_VERBOSE` | Ambos | No | **`1`** — log de turnos en stderr. |

\*Con `API_BASE_URL`, la clave deja de ser obligatoria (Ollama local sin token).

### Resumen rápido

| Querés… | Variables mínimas |
| :--- | :--- |
| Solo scaffolding + Discovery | Ninguna (`init`, `run`, `sync`) |
| Agente + Claude en la nube | `ANTHROPIC_API_KEY` |
| Agente + Ollama / vLLM / Groq | `API_BASE_URL` + `ANTHROPIC_MODEL` (+ `OPENAI_API_KEY` si el servidor lo pide) |

---

## Documentación adicional

| Recurso | Contenido |
| :--- | :--- |
| [docs/guia-equipos.md](docs/guia-equipos.md) | Equipos, `config.yaml`, onboarding |
| [docs/spec-formato-unificado.md](docs/spec-formato-unificado.md) | Formato unificado de specs |
| [templates/spec-unified-template.md](templates/spec-unified-template.md) | Plantilla canónica |
| [templates/_shared/zero-guesswork-system.md](templates/_shared/zero-guesswork-system.md) | Baseline Zero-Guesswork |

---

## Licencia

**MIT** — ver [LICENSE](LICENSE).
