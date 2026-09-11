# AMBIENTES EXTREMOS — Tope de ancho en "Elige tu punto de partida" (sensores.html), 2026-09-11

Tenías razón: la sección de las dos tarjetas ("Tipo de sensor" / "Aplicación siderúrgica") no tenía tope de ancho, así que en monitores grandes (probé 1920px) se estiraba a casi todo el ancho de la pantalla — cada tarjeta llegaba a medir ~900px, con mucho aire vacío adentro.

## Archivo a reemplazar en GitHub

- `sensores.html` (solo este archivo — el cambio es puramente CSS, dentro de su propio `<style>`)

## Qué cambié

Mismo ajuste que ya le hicimos a `productos.html` y a `cables.html`: le puse `max-width: 1050px; margin: 0 auto;` al bloque `.fork` (las dos tarjetas) y a `.fork-intro` (el título "Elige tu punto de partida" de arriba). Ahora las tarjetas quedan en ~463px cada una en pantallas grandes, centradas, en vez de estirarse.

El hero (foto de fondo con el título) y el bloque final oscuro ("¿No está seguro qué sensor necesita?") los dejé igual — esos sí están pensados para ir de borde a borde.

## Verificado antes de mandarlo

Con Playwright a 1920px (centrado simétrico, 435px de aire a cada lado, tarjetas de 463px), a 1400px (también centrado, 175px/175px), clic en zona vacía de la tarjeta sigue navegando bien, y mobile 420px sin cambios.
