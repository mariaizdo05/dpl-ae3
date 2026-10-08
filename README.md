# AE3 — Galería con procesado de imágenes, módulos y HTTPS

## Preparación del entorno

La práctica se realiza utilizando el contenedor `dpl-lab`.

Dentro del contenedor se instalaron las herramientas necesarias:

```bash
apt-get update
apt-get install -y libnginx-mod-http-image-filter imagemagick goaccess apache2-utils
```

Se comprobó la disponibilidad del módulo de procesado de imágenes mediante:

```bash
nginx -V 2>&1 | grep image_filter
```

El paquete instala el módulo dinámico de `image_filter`, que nginx carga desde su configuración de módulos.

También se verificó la configuración general con:

```bash
nginx -t
```