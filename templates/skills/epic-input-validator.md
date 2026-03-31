---
name: epic-input-validator
description: Valida que existan insumos mínimos y texto accionable antes de iniciar el flujo de épica.
---

> Baseline: [`templates/_shared/zero-guesswork-system.md`](../_shared/zero-guesswork-system.md) — no rellenes vacíos con inventiva.

## Objetivo

Comprobar que el usuario (o el mensaje) provea **entrada suficiente** para Step 1 sin asumir negocio inexistente.

## Validaciones (todas deben pasar)

- Está definida la **intención** (épica / historia / problema) en texto no trivial.
- Si se citó un archivo, **existe** y es legible (o el usuario pegó el contenido).
- Hay al menos un **resultado observable** o restricción que permita redactar `proposal.md` sin adivinar.

## Si falla alguna

- Devolvé **error concreto** (qué falta: archivo, objetivo, alcance).
- **No** continúes con análisis profundo hasta corregir.

## Restricciones

- No asumas alcance ni reglas de negocio no escritas.
- No infieras épica desde una frase genérica sin pedir una aclaración **única y específica**.

## Salida esperada

- `OK` + lista de supuestos explícitos que vas a usar, **o**
- `BLOQUEADO` + lista de datos faltantes (mínima).

## Anti-patrones

| Evitar | Hacer |
| :--- | :--- |
| “Asumo que es un bug en checkout” | Pedir objetivo en una pregunta |
| Continuar con placeholder | Bloquear hasta tener texto accionable |
