# AMBIENTES EXTREMOS — Cables (hub + 8 productos), v1 (2026-09-11)

## Archivos a reemplazar en GitHub (mismo nombre, en la raíz del repo)

- `cables.html`
- `thermal-3x18.html`, `thermal-7x20.html`, `thermal-16-tr.html`, `thermal-super-cable.html`, `thermal-termopar-tipo-k.html`, `draka-marino-7x18.html`, `draka-4x8.html`, `draka-4-0.html`
- `main.css`

## Qué cambié (mismo patrón que ya aplicamos en Sensores)

**1. Conecté el formulario de contacto.** Ninguna de las 9 páginas lo tenía — ni el link "Contacto" del menú, ni el botón "Solicitar cotización", ni los links del footer llevaban a nada. Ahora los 9 abren el mismo formulario "Cuéntenos su aplicación", y al usar "Solicitar cotización" llega precargado con el nombre del producto (ej. *"Interesado en cotización para: Thermal 3x18."*).

**2. Footer con tus datos reales** en las 9 páginas: `ricardogarcia@avantatech.com.mx` / `(81) 1216 0561`, en vez de los de ejemplo.

**3. Tema claro (gris)** en las 9 — igual que Sensores/Productos/Aplicaciones Siderúrgicas. El header/nav/footer se quedan oscuros; el contenido pasa a fondo gris claro.

**4. De regalo, centré el contenido.** Las 8 páginas de producto tenían el mismo problema que encontraste en Sensores: el título y la foto se pegaban a la izquierda dejando aire vacío del lado derecho en pantallas anchas. Ya quedaron centradas.

**5. Quité la sección "Descargas"** de las 8 páginas de producto (mismo criterio que en Sensores: no hay PDF real detrás todavía) y agregué un botón "Solicitar cotización" al final de la información técnica.

**6. El bloque final de cada página ("¿Necesita otro calibre...?") ya es clickeable por completo** y abre el formulario — no solo el botón, toda la caja (título y texto incluidos), igual que le hicimos a los CTA de Sensores.

**7. En el hub de Cables** (`cables.html`) le puse un tope de ancho a la cuadrícula de tarjetas (mismo ajuste que le hicimos a `productos.html`) para que no se estiren de más en pantallas grandes.

## Cosas que NO tocé, para que las tengas en el radar

- **Thermal Super Cable y Draka 4/0 siguen sin foto** (mismo pendiente de siempre) — ahora al menos el recuadro de "foto pendiente" se ve limpio en el tema claro, en vez de un hueco oscuro.
- **La foto de Draka 4x8 se ve mal recortada** (se le corta el logo y aparece un "4" suelto encima) — es la imagen que ya está subida, no algo que cambié yo. Si me la vuelves a subir mejor recortada la puedo actualizar.
- Los botones de "Configurador de Cable" / "Abrir configurador" ya funcionaban (llevan al configurador externo) — no los tocué.
- Los "filtros" arriba de las tarjetas (Los más confiables / Potencia / Control / etc.) siguen siendo solo visuales, no filtran nada todavía — no estaba en la lista de lo que pediste, avísame si quieres que los conecte.

## Verificado antes de mandarlo

Con Playwright: modal se abre desde el menú, desde "Solicitar cotización" (con precarga), desde el botón nuevo al final, y desde cualquier parte de la caja final (probado clic directo en el texto, no solo el botón); footer con datos reales; sin sección de Descargas; centrado simétrico del hero (200px/200px en 1400px de ancho); tema claro en todas las secciones especiales (tabla de specs, código de colores, "pares"/"polaridad" según el producto, referencias normativas); recuadro de foto pendiente legible en tema claro; y mobile 400px sin romperse.

## Siguiente paso

Cuando confirmes que este quedó bien, seguimos con Ensambles y Protecciones.
