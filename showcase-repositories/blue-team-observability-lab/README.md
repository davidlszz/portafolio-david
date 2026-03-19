# blue-team-observability-lab

Repositorio pensado para demostrar observabilidad defensiva, recolección de logs y respuesta inicial a incidentes en un entorno de laboratorio controlado.

## Objetivo

Crear un laboratorio reproducible donde se detecten eventos anómalos, se correlacionen señales básicas y se documente un flujo de respuesta con foco en MTTR.

## Arquitectura propuesta

Componentes:
- servicios o contenedores que generen eventos;
- agregación de logs;
- panel de métricas y alertas;
- reglas simples de detección;
- runbook de triage inicial.

Flujo:
1. El entorno genera tráfico y eventos.
2. Los logs y métricas se centralizan.
3. Una regla o umbral dispara una alerta.
4. Se ejecuta triage y se documenta la respuesta.

## Evidencia esperada

- dashboard base;
- alertas configuradas;
- dataset de ejemplo anonimizado;
- runbook de investigación;
- métricas de tiempo de detección y recuperación.

## Riesgos principales

- recolectar datos personales innecesarios;
- logs con secretos o credenciales;
- alertas ruidosas sin priorización;
- falsa percepción de cobertura de seguridad.

## Alineación de cumplimiento

La captura y retención de logs debe minimizar datos personales y seguir el baseline común de seguridad y legalidad.
