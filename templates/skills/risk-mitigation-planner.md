---
name: risk-mitigation-planner
description: Detecta riesgos técnicos (XSS, Performance, Breaking Changes) y define su mitigación en el design.md.

logic:
  - Analizar el impacto en formularios (submit payloads).
  - Evaluar seguridad (sanitización de inputs).
  - Evaluar retrocompatibilidad (¿rompe schemas viejos?).
  - Definir acción preventiva (ej: "Usar DOMPurify para mitigar XSS").

output:
  - Riesgo: [Descripción]
  - Mitigación: [Acción técnica concreta]
---
