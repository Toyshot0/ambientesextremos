# AMBIENTES EXTREMOS — Lote: 9 páginas de producto de Sensores (2026-09-10)

Esto trae parejas las 9 páginas de producto de Sensores con el resto del sitio: modal de contacto funcionando, footer con datos reales, fotos en .png donde ya las subiste, y tema gris claro como Productos/Aplicaciones Siderúrgicas. Se dejó `sensor-built-in` con su foto en `.jpg` tal cual me pediste, porque esa no tiene `.png` subida todavía.

## Archivos a reemplazar en GitHub (mismo nombre, en la raíz del repo)

- `sensor-vre.html`
- `sensor-mre.html`
- `sensor-built-in.html`
- `ezabso-pulse.html`
- `ezabso-network.html`
- `sensor-vls.html`
- `inrodsensor.html`
- `cylnuc.html`
- `absopx.html`
- `main.css`

No hace falta subir nada más — `index.html`, `sensores.html`, `productos.html`, `aplicaciones-siderurgicas.html` y `app.js` no cambiaron en este lote.

## Qué se corrigió en cada una de las 9

1. **El botón "Cuéntenos su aplicación" ya funciona.** Antes estas 9 páginas no tenían el formulario conectado — el botón del héroe ("Solicitar cotización"), "Contacto" del menú, y los 3 links de Contacto del footer no hacían nada. Ahora abren el mismo formulario que ya funciona en Sensores/Productos/Home, y los leads llegan igual a Supabase y te notifican por correo.

2. **El botón de cierre de cada página también quedó conectado.** En VRE, MRE, Built-in y AbsoPX, el botón grande de "Solicitar asesoría técnica" al final de la página ahora abre el mismo formulario. En las otras 5 (ezABSO Pulse, ezABSO Network, VLS, Inrodsensor, CYLNUC) ese botón final ya llevaba a otro producto relacionado (por ejemplo, de Inrodsensor a CYLNUC) — eso se dejó exactamente igual, porque es una recomendación cruzada útil, no un botón de contacto.

3. **Footer con tus datos reales.** Las 9 páginas tenían un correo y teléfono de ejemplo (`contacto@ambientesextremos.com`, `(81) 0000 0000`) — ya dicen `ricardogarcia@avantatech.com.mx` y `(81) 1216 0561`, igual que el resto del sitio.

4. **Fotos en .png donde ya las subiste.** VRE, MRE, ezABSO Pulse, ezABSO Network, VLS, Inrodsensor, CYLNUC y AbsoPX ahora piden su foto en `.png` (igual que ya hiciste en Productos). **Built-in se dejó en `.jpg`** porque nunca subiste su versión en `.png` — si algún día la subes, aviso y lo actualizo en 1 minuto.

5. **Tema gris claro**, igual que Productos por tipo y Aplicaciones Siderúrgicas. El header/menú/footer se quedan oscuros (como en todo el sitio), y el bloque de CTA final de cada página se queda oscuro a propósito como acento — solo el contenido de en medio (descripción, tabla de características, variantes, descargas) pasa a fondo claro.

## Qué NO cambió

- El contenido, textos, especificaciones y estructura de cada página — nada de eso se tocó.
- Las 5 páginas con CTA final de producto cruzado (ezABSO Pulse↔Network, VLS→Inrodsensor→CYLNUC→Inrodsensor) — su link sigue yendo al otro producto, no al formulario.
- La foto de `sensor-built-in` — sigue en `.jpg`, tal como pediste.

## Siguiente paso

Cuando confirmes que estas 9 quedaron bien, seguimos con lo que falta de la ronda de revisión: Cables, Ensambles, Protecciones y Portal (mismo tratamiento de tema claro cuando lleguemos ahí), más los pendientes de siempre (fotos de Cables, Blankets, fichas PDF, aviso de privacidad, logo, dominio propio).
