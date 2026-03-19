# Architecture

## Vista lógica

- `Event sources`
- `Log collection`
- `Metrics collection`
- `Dashboard / alerting`
- `Incident runbooks`

## Decisiones clave

- separar telemetría de producción real y laboratorio;
- anonimizar datos de ejemplo;
- tratar alertas como hipótesis, no como verdad absoluta;
- documentar cobertura y límites de detección.

## Entregables técnicos sugeridos

- diagrama de ingestión;
- catálogo de eventos;
- tablero principal;
- runbook de investigación inicial.
