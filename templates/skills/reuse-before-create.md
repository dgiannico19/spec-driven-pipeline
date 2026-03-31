---
name: reuse-before-create
description: Obliga a descubrir y reutilizar código, APIs nativas y patrones del repo antes de crear archivos nuevos; registro auditable de búsquedas.
---

## Objetivo

Evitar código basura y duplicación: **extender lo existente** y usar **lo nativo del runtime/framework** antes de inventar utilidades paralelas. Paralelo a la regla de producto: **herramienta dedicada / API nativa antes que atajo genérico**.

**Step 2 (exploración):** misma mentalidad para **catalogar** en `exploration.md` (sección *Candidatos a reutilizar o extender*); no implementar aún. **Steps 5+:** aplicar antes de cada tarea de código.

---

## Reglas (orden obligatorio)

1. **Búsqueda en el repo** (nombre, export, texto característico): hooks, helpers, componentes, mappers, formatters, constantes, tipos, tests similares. Si algo cubre el ~80 % del caso, **adaptá o componé** en lugar de duplicar.
   - Si el primer intento no da resultados: **segunda pasada** con sinónimo, carpeta distinta o `grep` más amplio antes de declarar “no existe”.
2. **APIs nativas primero** (JS/TS, DOM, React, Node según contexto): no agregar librería ni helper si el estándar ya resuelve el problema y el proyecto no tiene convención contraria.
3. **Convenciones del repo**: mismos patrones de naming, exports (`index` públicos), capas FSD y estilo de errores/async que ya usen los archivos vecinos.
4. **SOLID aplicado al cambio**: un motivo para cambiar por clase de actor; interfaces pequeñas; depender de abstracciones ya presentes; no acoplar a implementaciones nuevas innecesarias.
5. **Prohibido** sin justificación en `exploration.md` o comentario de PR: segundo `formatDate`, segundo `useX` que hace lo mismo, wrapper trivial sobre lo que ya existe.

---

## Salida esperada (breve, antes de codificar)

Documentar en el chat o en la tarea:

- **Reutilizado:** [rutas o símbolos existentes que extendés o llamás].
- **Nativo / estándar:** [qué API del lenguaje o framework usás].
- **Nuevo y por qué:** [solo si no hubo alternativa razonable].
- **Búsquedas realizadas:** [palabras clave, carpetas, o “N/A si ya citado en exploration.md”].

Si no encontraste nada tras buscar, **listá términos y rutas** intentadas para que el revisor pueda auditar (anti-“no existe” vago).

---

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Creo `utils/formatDate.ts`” sin buscar `formatDate` en el repo | Buscar símbolo y variantes |
| Asumir que “no hay hook de auth” sin grep en `features/` | Búsqueda multi-carpeta + barrels |
