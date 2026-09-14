# Portal de Clientes — tema claro, footer completo y menú móvil corregido

Fecha: 14 de septiembre de 2026

## Archivos incluidos (3)

**Reemplazan** los archivos actuales en la raíz del repo (arrástralos — GitHub te preguntará si quieres reemplazar los que ya existen; confirma que sí):

- `portal.html`
- `dashboard.html`
- `admin.html`

No hay archivos para borrar en esta ronda.

## Qué se corrigió

**1. Tema claro, igual que el resto del sitio** — las tres páginas del Portal de Clientes (login, "Mis Proyectos" y Administración) usaban el tema oscuro original del sitio. Ahora usan el mismo fondo gris claro y tarjetas claras que Sensores, Ensambles, Cables y Protecciones — el encabezado y el pie de página siguen oscuros, igual que en todo el sitio.

**2. Footer completo agregado** — ninguna de las tres páginas tenía pie de página. Ahora las tres incluyen el mismo footer que el resto del sitio (datos de contacto, columnas de Productos, Recursos y Contacto).

**3. Menú móvil no funcionaba — corregido** — en celular, ninguna de las tres páginas tenía forma de abrir el menú de navegación (faltaba incluir un archivo interno del sitio). Ya se puede abrir y cerrar el menú con el botón ☰ igual que en el resto de páginas.

**4. "Contacto" en el menú ahora abre el formulario de cotización** — antes el enlace "Contacto" intentaba regresar a la portada y bajar a una sección que ya no aplica en estas páginas. Ahora abre el mismo formulario "Cuéntenos su aplicación" que usa el resto del sitio.

**5. Mensajes de error/éxito ajustados al tema claro** — en el login (correo/contraseña incorrectos, correo de recuperación enviado) y en el panel de Administración (guardar cliente, crear proyecto, publicar actualización), los mensajes ya usan colores legibles sobre el fondo claro.

## Verificado antes de entregar

Las tres páginas revisadas en escritorio y celular (390px): tema claro correcto en tarjetas, panel y encabezados; footer presente y con los mismos enlaces que el resto del sitio; menú móvil se abre y cierra correctamente; el modal "Cuéntenos su aplicación" abre y cierra bien (queda vacío el campo de mensaje, como corresponde en páginas sin producto asociado); orden del menú confirmado como Sensores, Ensambles, Cables, Protecciones, Portal de Clientes, Contacto.

**Nota:** el login y el envío de formularios (Supabase) no se pudieron probar con datos reales en este entorno de verificación porque no tiene acceso a internet completo — pero el código de login, sesión y los tres formularios de Administración no se tocó, solo se le cambió el estilo visual. Recomiendo que hagas una prueba rápida de login real después de subir los archivos, como siempre.
