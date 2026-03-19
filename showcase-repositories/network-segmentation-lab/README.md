# network-segmentation-lab

Repositorio orientado a demostrar diseño de segmentación de red, separación de zonas y reducción de movimiento lateral en un entorno controlado.

## Objetivo

Documentar y simular una arquitectura de segmentación por subredes o VLANs donde los servicios críticos no compartan el mismo plano de acceso que los sistemas de usuario o administración.

## Arquitectura propuesta

Componentes:
- segmento de usuarios;
- segmento de administración;
- segmento de servicios internos;
- reglas de acceso entre zonas;
- inventario de activos y flujos permitidos.

Flujo:
1. Identificación de activos.
2. Clasificación por criticidad.
3. Diseño de zonas y reglas.
4. Validación de comunicación autorizada y bloqueo de caminos innecesarios.

## Evidencia esperada

- mapa de red;
- plan de direccionamiento;
- matriz origen-destino;
- reglas documentadas;
- validaciones de conectividad.

## Riesgos principales

- reglas demasiado permisivas;
- mala documentación de excepciones;
- mezcla de administración y tráfico de usuario;
- cambios sin control o sin rollback.

## Alineación de cumplimiento

Debe existir trazabilidad de cambios de red, justificación de reglas y documentación de autorizaciones para cualquier prueba real.
