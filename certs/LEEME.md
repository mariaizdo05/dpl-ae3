# Certificado HTTPS

El sitio `images.alumno.local` utiliza un certificado autofirmado porque el laboratorio no dispone de un dominio público.

El certificado y la clave privada se generan dentro del contenedor `dpl-lab`:

```bash
mkdir -p /etc/ssl/dpl

openssl req -x509 -nodes \
  -newkey rsa:2048 \
  -days 365 \
  -keyout /etc/ssl/dpl/images.alumno.local.key \
  -out /etc/ssl/dpl/images.alumno.local.crt \
  -subj "/C=ES/ST=Santa Cruz de Tenerife/L=Tenerife/O=DPL/CN=images.alumno.local" \
  -addext "subjectAltName=DNS:images.alumno.local,DNS:www.images.alumno.local"
```

El certificado contiene los nombres:

- `images.alumno.local`
- `www.images.alumno.local`

La clave privada permanece únicamente dentro de `/etc/ssl/dpl/` y no se incluye en el repositorio.

En la entrega solo se incorpora el certificado público:

`certs/images.alumno.local.crt`