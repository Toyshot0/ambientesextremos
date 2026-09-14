# Segunda ronda de ajustes — orden global, grid de Protecciones, contraste y mangueras separadas

Fecha: 14 de septiembre de 2026

## Archivos incluidos (38)

**Reemplazan** los archivos actuales en la raíz del repo (arrástralos todos juntos — GitHub te preguntará si quieres reemplazar los que ya existen; confirma que sí):

absopx.html, admin.html, aplicaciones-siderurgicas.html, cables.html, cylnuc.html, dashboard.html, draka-4-0.html, draka-4x8.html, draka-marino-7x18.html, ensamble-control-m12.html, ensamble-encoder.html, ensambles-temposonics.html, ensambles.html, ezabso-network.html, ezabso-pulse.html, herramientas.html, index.html, inrodsensor-cylnuc.html, inrodsensor.html, portal.html, productos.html, protecciones.html, pyreflect.html, pyrojacket.html, sensor-built-in.html, sensor-mre.html, sensor-vls.html, sensor-vre.html, sensores.html, silicaflex-sleeve.html, silicaflex-tape.html, thermal-16-tr.html, thermal-3x18.html, thermal-7x20.html, thermal-super-cable.html, thermal-termopar-tipo-k.html

**Nuevos** (no existían antes):
- `manguera-metalica-hermetica.html`
- `manguera-metalica-no-hermetica.html`

## ⚠️ Un archivo que debes borrar manualmente

`mangueras-metalicas.html` queda reemplazada por las dos páginas nuevas de arriba. Como en GitHub solo se pueden **agregar/reemplazar** archivos arrastrándolos (no borrar), después de subir todo lo de esta lista, entra a la raíz del repo en GitHub y **borra `mangueras-metalicas.html` a mano** (ábrela, ícono de bote de basura, "Commit changes"). Si no la borras, la página vieja se queda accesible por su link directo aunque ya no aparezca en Protecciones — no rompe nada, pero es basura sin actualizar.

## Qué se corrigió

**1. Orden global: Sensores, Ensambles, Cables, Protecciones** — en las 37 páginas del sitio que tienen menú y/o footer: el menú de arriba, los botones/tarjetas de categoría en la portada, y la columna "Productos" del footer. Antes el orden era Sensores, Cables, Ensambles, Protecciones; ahora es Sensores, Ensambles, Cables, Protecciones en todos lados.

**2. Grid de Protecciones se ajusta al ancho de pantalla** — antes tenía un tope fijo de 3 columnas (igual que Ensambles), así que en pantallas anchas se veía angosto con mucho espacio vacío a los lados. Ahora usa el mismo criterio que ya tenía Cables: las tarjetas se acomodan solas según el espacio disponible (4 columnas en pantallas anchas, 3 en laptop, 2 en tablet, 1 en celular) en vez de quedar fijas en 3.

**3. Texto illegible en Silicaflex Tape** — el párrafo debajo de "Instalación" tenía un color claro fijo (pensado para el tema oscuro original) que quedó casi invisible sobre el fondo claro del contenido. Ya usa el mismo estilo que el resto de párrafos de la página (gris oscuro, legible).

**4. Manguera Metálica Flexible separada en dos productos independientes** — antes era una sola página con dos "tipos" mostrados lado a lado (Interlock y Hermética). Ahora son dos productos separados, cada uno con su propia tarjeta en el hub de Protecciones y su propia página, siguiendo el mismo patrón que ya usan Pyrojacket, Pyreflect, Silicaflex Tape y Silicaflex Sleeve:
   - **Manguera Metálica Flexible No Hermética** (`manguera-metalica-no-hermetica.html`) — construcción interlock, protección mecánica sin sellado.
   - **Manguera Metálica Flexible Hermética** (`manguera-metalica-hermetica.html`) — construcción trenzada, protección mecánica y sellado contra líquidos/vapor/gases.

   Ambas páginas mantienen el mismo aviso honesto de que el proveedor final todavía está por confirmarse (no se inventaron rangos de temperatura, presión o diámetro), igual que tenía la página combinada.

## Verificado antes de entregar

Orden Sensores → Ensambles → Cables → Protecciones confirmado en el menú, el footer y las tarjetas de portada de todas las páginas de muestra revisadas; grid de Protecciones probado en 1920px (4 columnas), 1280px (3), 1024px (3), 900px (2) y 600px (1); párrafo de Instalación en Silicaflex Tape ya no lleva estilo en línea y usa el color correcto; las dos páginas nuevas de manguera abren el modal de cotización y precargan el nombre correcto desde el botón del hero, el bloque final y el footer; capturas de escritorio y celular confirmando que nada se corta ni se traslapa.
