# secure-cicd-platform

Repositorio orientado a demostrar una tubería CI/CD con controles de seguridad, trazabilidad de cambios y validaciones antes del despliegue.

## Objetivo

Mostrar un flujo moderno de entrega segura donde el cambio pasa por validación automática, control de calidad y evidencia auditable.

## Arquitectura propuesta

Componentes:
- repositorio fuente;
- pipeline CI para lint, tests y validaciones;
- análisis de dependencias y secretos;
- pipeline CD con aprobación o política definida;
- despliegue a entorno de staging o producción controlada.

Flujo:
1. Push o pull request.
2. Validaciones automáticas.
3. generación de artefacto.
4. aprobación según política.
5. despliegue y verificación post-release.

## Métricas que vale la pena mostrar

- tasa de builds exitosas;
- tiempo de ejecución del pipeline;
- tiempo de rollback;
- evidencia de escaneo y controles aplicados.

## Riesgos principales

- fuga de secretos en variables o logs;
- despliegues sin revisión;
- artefactos no versionados;
- ausencia de rollback probado.

## Alineación de cumplimiento

Este proyecto debe enfatizar segregación de funciones, control de cambios y trazabilidad completa, alineado al baseline común.
