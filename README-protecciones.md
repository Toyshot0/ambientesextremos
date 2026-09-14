# Protecciones — hub + 5 productos, ronda de revisión completa

Fecha: 14 de septiembre de 2026

## Archivos incluidos

- `protecciones.html` — reemplaza el archivo actual en la raíz del repo.
- `pyrojacket.html` — reemplaza el archivo actual en la raíz del repo.
- `pyreflect.html` — reemplaza el archivo actual en la raíz del repo.
- `silicaflex-tape.html` — reemplaza el archivo actual en la raíz del repo.
- `silicaflex-sleeve.html` — reemplaza el archivo actual en la raíz del repo.
- `mangueras-metalicas.html` — reemplaza el archivo actual en la raíz del repo.
- `main.css` — reemplaza el archivo actual en la raíz del repo (solo se agregaron 4 líneas nuevas, todo lo demás queda igual).

Sube los 7 arrastrándolos a la raíz del repo en GitHub — te va a preguntar si quieres reemplazar los que ya existen; confirma que sí.

## Qué se corrigió

Protecciones tenía los mismos problemas que ya habíamos resuelto en Sensores, Cables y Ensambles — ahora quedó igualada:

**1. Formulario de contacto conectado** — en las 6 páginas: el link "Contacto" del menú, el botón "Solicitar cotización" del hero, el bloque final oscuro (toda la caja es clickeable) y los 3 links del footer. Antes ninguno hacía nada.

**2. Datos de contacto reales en el footer** — `ricardogarcia@avantatech.com.mx` / `(81) 1216 0561`, en vez del correo/teléfono de ejemplo.

**3. Tema claro** (fondo gris, igual que el resto del sitio) — las 6 páginas.

**4. Se quitaron los recuadros tipo "260°C continua" / "No conductiva"** que parecían botón — mismo criterio que en Sensores/Cables/Ensambles. En Pyrojacket, Pyreflect, Silicaflex Tape y Silicaflex Sleeve esos datos ya estaban en la tabla de especificaciones, así que no se perdió nada. En Mangueras Metálicas Flexibles esos datos no estaban en ningún otro lado (no tiene tabla de specs), así que en vez de quitarlos los dejé como texto simple debajo del subtítulo — se ve la información, pero ya no parece un botón sin función.

**5. Se quitó la sección "Descargas" con el botón "Descargar PDF" falso** — en Pyrojacket, Pyreflect, Silicaflex Tape y Silicaflex Sleeve (Mangueras Metálicas Flexibles nunca tuvo esa sección). Se agregó un botón "Solicitar cotización" al final de la información técnica de las 5 páginas de producto.

**6. Centrado** — hero, imagen principal y contenido ahora quedan centrados en pantallas anchas (antes se pegaban a la izquierda, mismo bug ya resuelto en las otras secciones). El grid de tarjetas del hub también quedó centrado.

**7. Tarjeta de "Blankets" marcada como "Próximamente"** — la tarjeta enlazaba a `blankets.html`, una página que no existe (dabas clic y era un error 404), porque todavía no tienes proveedor para ese producto. Ahora la tarjeta ya no es un link — se ve igual pero sin clic, con la etiqueta "Próximamente" en vez de "Ver producto". En cuanto tengas proveedor y quieras la página, aviso y la armamos.

## Verificado antes de entregar

Modal abre y precarga el nombre correcto del producto desde el botón del hero, el bloque final y el footer, en las 6 páginas; sin recuadros tipo badge ni sección Descargas; centrado simétrico en escritorio; la tarjeta de Blankets ya no es un link y muestra "Próximamente"; capturas de pantalla en escritorio y celular confirmando que todo se ve bien y nada se corta.
