# AMBIENTES EXTREMOS — Páginas de producto de Sensores, v3 (2026-09-10)

Reemplaza al v2 de hoy — trae los 6 puntos que diste después de verlo en vivo.

## Archivos a reemplazar en GitHub (mismo nombre, en la raíz del repo)

- `sensor-vre.html`, `sensor-mre.html`, `sensor-built-in.html`, `ezabso-pulse.html`, `ezabso-network.html`, `sensor-vls.html`, `inrodsensor.html`, `cylnuc.html`, `absopx.html`
- `main.css`

## Qué cambió

**1. Quité el recuadro "Heavy Duty" de arriba del botón.** Ya no aparece en ninguna de las 9 páginas.

**2. Las variantes y tipos ahora se pueden deseleccionar.** Antes, una vez que seleccionabas una (o la que venía marcada por default) se quedaba forzada. Ahora: por default ninguna viene seleccionada, y si das clic en la que ya está seleccionada, se quita — así el cliente decide si quiere que la cotización lleve esa información o no.

**3. Encontré y arreglé el bug de Inrodsensor.** Lo que pasaba: una vez que el formulario se precargaba una vez con un texto, ya no se volvía a actualizar aunque cambiaras de variante — por eso siempre veías "Heavy Duty" sin importar qué seleccionabas. Ahora el mensaje se recalcula cada vez que abres el formulario, con la selección que tengas en ese momento (o sin nada, si no seleccionaste ninguna).

**4. Agregué "Solicitar cotización" al final de la información técnica** (después de las variantes/tipos, antes del bloque final oscuro) en las 9 páginas — antes, en las 5 páginas que rematan con "conozca también [otro producto]" (ezABSO Pulse/Network, VLS/Inrodsensor/CYLNUC), no había ninguna forma de pedir cotización después de leer toda la ficha técnica sin regresar hasta arriba.

**5. Quité los botones de "Descargar PDF"** en las 9 páginas (junto con la sección "Descargas" completa) — como no hay fichas técnicas reales todavía detrás, dejaba un botón que no llevaba a nada. Lo puedo regresar en cuanto tengamos los PDFs reales.

**6. Arreglé el botón "Ver CYLNUC" (y los otros 4 de venta cruzada).** La causa: el resplandor decorativo naranja de esa caja (un adorno visual) se estaba montando encima del botón y le robaba el clic/hover de forma intermitente — por eso había que pasarle el mouse varias veces. Ya no interfiere. Y de una vez, como pediste, **toda la caja es clickeable** — no solo el botón, también el título de la pregunta y el texto — y lleva al otro producto (ej. clic en cualquier parte de "¿Prefiere un cilindro ya integrado de fábrica?" en Inrodsensor te lleva a CYLNUC). En las páginas donde ese bloque final es de contacto (VRE, MRE, Built-in, AbsoPX) también apliqué el mismo criterio: toda la caja abre el formulario, no solo el botón.

## Verificado antes de mandarlo

Con Playwright: badge quitado, selección + deselección funcionando (probado en Inrodsensor, el mismo caso que reportaste), el mensaje de cotización ya se recalcula cada vez (ya no se congela en "Heavy Duty"), el botón nuevo al final de cada página, sin sección de Descargas, clic en cualquier parte de la caja de venta cruzada navega correctamente (probado clic directo sobre el texto de la pregunta en Inrodsensor → llega a CYLNUC), el botón "Ver CYLNUC" ahora se detecta en el primer paso del mouse sin necesitar pasadas repetidas, y mobile sin romperse.

## Siguiente paso

Cuando confirmes que este ya quedó bien, seguimos con Cables, Ensambles, Protecciones y Portal.
