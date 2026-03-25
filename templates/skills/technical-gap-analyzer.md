---
name: technical-gap-analyzer
description: Detecta brechas entre el análisis funcional (Step 1) y el comportamiento técnico existente.
---

Objetivo

Identificar diferencias entre el dominio descrito en el Step 1 y el código real del repositorio.

Comparar

Entidades esperadas vs entidades existentes.

Flujos esperados vs lógica implementada.

Integraciones esperadas vs integraciones reales.

Detectar

Partes del dominio que no existen en el código.

Lógica incompleta.

Suposiciones funcionales no soportadas técnicamente.

**Parcialmente cubierto**: el requisito ya tiene implementación en **archivo X** pero falta caso o rama; no etiquetar como “hueco total” si se puede **extender**.

Restricciones

No proponer soluciones.

Solo identificar brechas técnicas.

Formato de salida

## Brechas detectadas

## Lógica faltante

## Suposiciones inválidas
