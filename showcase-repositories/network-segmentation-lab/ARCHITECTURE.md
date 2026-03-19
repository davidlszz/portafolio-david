# Architecture

## Vista lógica

- `Users zone`
- `Admin zone`
- `Internal services zone`
- `External exposure zone`
- `Network policy layer`

## Decisiones clave

- separar administración del tráfico de usuario;
- aplicar principio de menor conectividad posible;
- documentar reglas y excepciones;
- mantener rollback para cambios de red.

## Entregables técnicos sugeridos

- diagrama de zonas;
- matriz de flujos;
- tabla IP / VLAN;
- checklist de validación.
