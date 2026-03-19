# infra-vps-hardening-lab

Repositorio diseñado para demostrar despliegue y endurecimiento de un servidor Linux sobre VPS con controles de acceso, cifrado en tránsito y operación segura básica.

## Objetivo

Construir un laboratorio reproducible que muestre cómo pasar de un VPS recién aprovisionado a una base endurecida y administrable, con evidencia técnica publicable.

## Arquitectura propuesta

Componentes:
- VPS Linux como nodo principal;
- `Nginx` como reverse proxy frontal;
- `OpenSSH` restringido por políticas de acceso;
- `UFW` o equivalente para filtrado base;
- `fail2ban` para mitigación simple de intentos de fuerza bruta;
- observabilidad básica con logs del sistema y del proxy.

Flujo operativo:
1. Provisionamiento inicial del VPS.
2. Actualización del sistema y deshabilitación de configuraciones inseguras por defecto.
3. Configuración de acceso SSH endurecido.
4. Publicación de servicio detrás de `Nginx`.
5. Activación de TLS.
6. Validación y evidencia del baseline seguro.

## Evidencia esperada

- checklist de hardening;
- capturas o exports de configuración;
- resultados de validaciones de puertos y servicios expuestos;
- runbook de recuperación básica.

## Riesgos principales

- exposición accidental de servicios de administración;
- uso de credenciales débiles o compartidas;
- falta de rotación de claves;
- publicación de logs con información sensible.

## Alineación de cumplimiento

Aplicar baseline de [COMPLIANCE-BASELINE.md](/c:/Users/PC/david-portafolio/showcase-repositories/COMPLIANCE-BASELINE.md) y documentar:
- inventario del activo;
- riesgos y tratamiento;
- control de accesos;
- procedimiento de respaldo y recuperación.
