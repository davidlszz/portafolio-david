# Architecture

## Vista lógica

- `Internet`
- `Firewall / reglas de entrada`
- `Nginx reverse proxy`
- `Aplicación o sitio publicado`
- `SSH administrativo`
- `Logs del sistema`

## Decisiones clave

- exponer solo puertos necesarios;
- separar acceso administrativo del acceso público;
- mantener servicios mínimos instalados;
- registrar eventos relevantes para auditoría y troubleshooting.

## Entregables técnicos sugeridos

- diagrama de red;
- árbol de configuración endurecida;
- guía de provisión;
- matriz simple de amenazas y controles.
