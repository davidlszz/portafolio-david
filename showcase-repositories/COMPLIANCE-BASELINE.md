# Compliance Baseline

Este baseline aplica a los cuatro repositorios del portafolio como referencia de diseño y documentación.

Normas ISO relevantes:
- `ISO/IEC 27001:2022`: marco de sistema de gestión de seguridad de la información.
- `ISO/IEC 27005:2022`: guía para gestión de riesgos de seguridad de la información.
- `ISO 22301:2019`: continuidad de negocio y resiliencia operativa.

Marcos y criterios técnicos recomendados:
- principios de mínimo privilegio, segregación de funciones y trazabilidad;
- gestión de cambios documentada;
- hardening por capas;
- logging con retención definida y acceso restringido;
- pruebas solo en entornos autorizados.

Consideraciones legales de Colombia a tener presentes:
- `Ley 1581 de 2012`: protección de datos personales.
- `Decreto 1377 de 2013`: reglamentación parcial sobre tratamiento de datos personales.
- `Ley 1273 de 2009`: delitos informáticos y protección de la información y de los datos.

Guardrails para cualquier demostración pública:
- no exponer credenciales, tokens ni datos reales;
- anonimizar logs y datasets cuando exista información personal;
- no ejecutar escaneo o explotación sobre infraestructura ajena sin autorización expresa;
- declarar claramente cuando un entorno es laboratorio o simulación;
- mantener inventario de activos, riesgos conocidos y controles compensatorios.

Fuentes oficiales usadas:
- ISO/IEC 27001: https://www.iso.org/standard/27001
- ISO/IEC 27005: https://www.iso.org/es/contents/data/standard/08/05/80585.html
- ISO 22301: https://www.iso.org/cms/render/live/es/sites/isoorg/contents/data/standard/07/51/75106.html
- Ley 1273 de 2009 y tipos penales informáticos: https://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000_pr010.html

Nota:
Este documento es una base de cumplimiento técnico y de buenas prácticas; no constituye concepto legal.
