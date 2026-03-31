---
name: minimal-change-implementer
description: Implementa el cambio mínimo necesario priorizando reutilización, SOLID y cero refactors colaterales; parámetros y paths verificables.
---

## Objetivo

Cumplir el requisito funcional con **el menor diff posible**, sin reinventar lo que el repo o el estándar del lenguaje ya ofrece. Comportamiento alineado a **Doing tasks** / blast radius del baseline [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md).

---

## Cadena de razonamiento (obligatoria antes de tocar código)

1. **Requisito citado**: ID de tarea en `tasks.md` o requisito SHALL/MUST en `spec.md` (una frase).
2. **Evidencia leída**: rutas de archivos que vas a modificar o importar (ya abiertos en contexto).
3. **Alternativas descartadas**: qué existía en el repo y por qué no sirve (o “ninguna equivalente” tras búsqueda).
4. **Diff planeado**: archivos tocados y **qué no** vas a tocar (blast radius).
5. **Verificación**: test/comando a correr o “no aplica / no ejecutado” explícito.

---

## Reglas

- **Reutilizar antes que crear**: preferir editar un módulo existente o componer APIs públicas ya expuestas.
- **Nativo antes que dependencia**: no añadir paquetes si una solución estable ya está en el stack acordado (`specs/config.yaml`) o en el runtime — **misma idea** que “dedicated tools over generic shell” en prompts de producto: usá la vía **canónica** del ecosistema antes de inventar utilidades.
- Cambios **focalizados** al scope de la épica; sin refactors masivos “de paso” (equivalente a *Don't add features beyond what was asked*).
- **Sin código muerto** ni helpers de un solo uso que dupliquen utilidades del proyecto.
- **Dependencias nuevas**: solo con acuerdo explícito en diseño o spec; si no, usar lo existente.
- **Parámetros**: no inventes firmas de funciones internas; **copiá** tipos y nombres desde el archivo fuente o `design.md`.

---

## SOLID (criterio práctico)

- **S** — Una función/componente por responsabilidad clara; no mezclar formato + fetch + reglas de negocio en un solo archivo nuevo si el repo ya separa capas.
- **O** — Extender vía composición o puntos de extensión existentes antes de bifurcar copias.
- **L** — Respetar contratos de tipos/interfaces ya usados en el área.
- **I** — No exponer interfaces “gorda” nuevas si bastan props o funciones pequeñas alineadas al código vecino.
- **D** — Depender de módulos ya usados en la feature, no de abstracciones inventadas solo para esta tarea.

---

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Refactorizo un poco el archivo vecino” | Tocar solo líneas necesarias para el requisito |
| Helper nuevo que duplica `date-fns` / util ya en `shared/` | Buscar primero (`reuse-before-create`) |
| Cambiar exports públicos sin spec | Mantener API salvo `design.md` explícito |

---

## Resultado

Código listo para integrar, alineado al estilo del directorio donde se editó, **sin duplicar** patrones que ya existan en el mismo slice o en `shared/`.
