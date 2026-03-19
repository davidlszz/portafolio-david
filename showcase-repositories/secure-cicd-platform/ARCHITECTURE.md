# Architecture

## Vista lógica

- `Source control`
- `CI runner`
- `Security checks`
- `Artifact storage`
- `Deployment stage`
- `Target environment`

## Decisiones clave

- impedir despliegues directos sin validación;
- tratar secretos fuera del código;
- producir artefactos reproducibles;
- dejar evidencia de cada release.

## Entregables técnicos sugeridos

- pipeline YAML;
- política de branching;
- runbook de rollback;
- matriz de controles por etapa.
