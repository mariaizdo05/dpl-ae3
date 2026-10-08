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

## Certificado HTTPS

Para servir la galería mediante HTTPS se generó un certificado autofirmado con OpenSSL.

Los archivos utilizados por nginx se encuentran dentro del contenedor:

```text
/etc/ssl/dpl/images.alumno.local.crt
/etc/ssl/dpl/images.alumno.local.key
```

El certificado incluye SAN para:

- `images.alumno.local`
- `www.images.alumno.local`

La clave privada no forma parte del repositorio. Únicamente se incluye una copia del certificado público en `certs/`.

## Generación de las imágenes de prueba

La galería utiliza 20 imágenes cuadradas llamadas `image01.jpg` hasta `image20.jpg`.

Las imágenes se generan dentro del contenedor `dpl-lab` y se almacenan fuera del repositorio, en:

```text
/var/www/images.alumno.local/img/
```

Primero se crea la carpeta:

```bash
mkdir -p /var/www/images.alumno.local/img
```

Las 20 imágenes se generan con ImageMagick mediante:

```bash
for i in $(seq -w 1 20); do
  convert -size 600x600 plasma:fractal \
    -quality 90 \
    /var/www/images.alumno.local/img/image${i}.jpg
done
```

Se comprobó el número de imágenes generadas mediante:

```bash
ls /var/www/images.alumno.local/img/image*.jpg | wc -l
```

y sus dimensiones con:

```bash
identify /var/www/images.alumno.local/img/image01.jpg
```

Las imágenes no se versionan porque son contenido de prueba generado automáticamente. En la entrega solo se conserva el comando necesario para reproducirlas.