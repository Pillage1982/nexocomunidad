# NexoComunidad final

Paquete listo para publicar en `nexocomunidad.pilageweb.cl`.

## Estructura

- `index.html`: pagina principal de NexoComunidad.
- `site-config.js`: datos editables de la landing.
- `assets/`: visuales de la landing.
- `demo/`: version demostrativa del sistema, adaptada a una marca neutral.
- `demo/demo-config.js`: URL del backend usado por la demo.

## Publicacion

Sube todo el contenido de esta carpeta al directorio publico del subdominio.

La landing quedara en:
`https://nexocomunidad.pilageweb.cl/`

La demo quedara en:
`https://nexocomunidad.pilageweb.cl/demo/`

## Antes de presentar

1. En `site-config.js`, cambia `whatsappUrl` por tu numero real.
2. En `demo/demo-config.js`, confirma que `window.API_URL` apunte al backend real.
3. Verifica que el usuario demo exista en el backend.
4. En la postulacion, indica el usuario `demo@nexocomunidad.cl` y la clave temporal `Demo2026` solo si ya estan creados.
