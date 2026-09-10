# AMBIENTES EXTREMOS — Páginas de producto de Sensores, v2 (2026-09-10)

Esta versión reemplaza a la que te mandé antes hoy — trae los 5 puntos que me diste de retro después de verla en vivo.

## Archivos a reemplazar en GitHub (mismo nombre, en la raíz del repo)

- `sensor-vre.html`, `sensor-mre.html`, `sensor-built-in.html`, `ezabso-pulse.html`, `ezabso-network.html`, `sensor-vls.html`, `inrodsensor.html`, `cylnuc.html`, `absopx.html`
- `main.css`

## Qué cambió

**1. Todo centrado, menos espacio muerto a la derecha.** El bloque de contenido (encabezado, foto, descripción, tablas) tenía un ancho máximo pero nunca se centraba — se pegaba contra el borde izquierdo y dejaba un colchón vacío del lado derecho en pantallas anchas. Ahora se centra, y de paso el título principal tiene un poco más de aire para acomodarse antes de saltar de línea.

**2. "Heavy Duty" ya no parece botón.** Le quité la forma de pastilla con borde (que se veía igual que un botón outline) y le puse un texto corto antes ("Especificación:") para que quede claro que es información, no algo que se puede pulsar. Mismo tratamiento en las etiquetas de ezABSO Pulse/Network ("Medición de vibración", etc.) — también se veían como botones y ya no.

**3. La foto principal se puede agrandar.** Clic en la imagen del producto → se abre en grande sobre fondo oscuro. Clic en cualquier parte para cerrar.

**4. "Variantes disponibles" ya funciona — y precarga la cotización.** Al hacer clic en una variante (ej. "Water Proof" en vez de "Heavy Duty") se marca como seleccionada. Si después el cliente da clic en "Solicitar cotización" (o "Solicitar asesoría técnica"), el mensaje del formulario ya viene precargado con el producto y la variante elegida — por ejemplo: *"Interesado en cotización para: VRE. Variante: Water Proof (IP67)."* El cliente solo confirma sus datos y envía. La etiqueta "Recomendado" se queda siempre en la variante que la trae (Heavy Duty), sin importar cuál esté seleccionada — es una recomendación fija, no cambia con la selección.

**5. "Tipos de cilindro disponibles" (CYLNUC) y "Tipo de sensor y distancia de detección" (AbsoPX) — igual que las variantes.** Les agregué el mismo selector con circulito, y también se precargan en la cotización. Si el cliente selecciona variante Y tipo, el mensaje trae ambos: *"Interesado en cotización para: CYLNUC. Variante: Heavy Duty. Tipo: Hidráulico para molino (MILL/JIS)."*

## Verificado antes de mandarlo

Con capturas de pantalla: centrado en 1440px, la pastilla ya no parece botón (en una página con variantes y en ezABSO Pulse con sus etiquetas), el lightbox abre y cierra, selección de variante + precarga del formulario, selección de tipo de cilindro + precarga con variante y tipo juntos, y que en mobile (400px) no se rompe nada.

## Siguiente paso

Cuando confirmes que esto ya quedó bien, seguimos con Cables, Ensambles, Protecciones y Portal.
