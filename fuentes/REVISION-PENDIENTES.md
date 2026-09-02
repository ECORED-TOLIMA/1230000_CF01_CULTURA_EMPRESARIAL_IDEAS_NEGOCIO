# Decisiones y pendientes de maquetación

Este archivo recoge, con su motivo, todo lo que no se pudo resolver mirando solo el `.xd`:
los puntos en que el diseño y el PDF no coinciden, los que el diseño deja al desarrollador y
los que quedan a la espera de un material que todavía no llegó.

## Textos que el XD trae de otro curso y se corrigieron con el `_DI.docx`

1. **Tema 4 — título del eje.** El artboard rotula el tema «Contexto empresarial y
   herramientas de análisis», que es el título del Tema 1. El `01230000_CF01_DI.docx` da
   «Idea de negocio y su impacto» y es el que se maquetó.

2. **Síntesis — quinta rama del mapa conceptual.** El artboard rotula la última rama
   «Diagnóstico del comportamiento empresarial», que es el título del tema 3 y ya aparece como
   tercera rama; lo que cuelga de ella son los cuatro casos, así que el rótulo correcto es
   «Casos de diagnóstico en Colombia». En la misma rama, la hoja dice «Turismo cultural en
   Magdalena» (con doble espacio) frente al «Turismo cultural en el Magdalena» del tema. Los dos
   se corrigieron dentro del propio SVG, y **el anexo en PDF se rehízo a partir de ese SVG** —en
   lugar de recortar la página 10 del `.pdf` de diseño— para que el anexo y la pantalla digan lo
   mismo.

## Recursos que el XD deja pedidos, sin arte que exportar

3. **Tema 4, apartado 4.1 — «las cuatro formas del impacto social».** En lugar de un diseño,
   el artboard deja un recuadro «Recursos DI» con el encargo: *«Se solicita diseñar la
   siguiente infografía interactiva que al desplegar cada modal se presenta la definición de
   cada texto»*, más un enlace a una plantilla de banco de imágenes. No hay arte que exportar,
   así que se maquetó con **`PasosB`**, el componente del kit que numera cuatro pasos y
   despliega la definición de cada uno al pulsarlo: conserva la interacción pedida sin
   inventar una ilustración. Si el diseño llega después, el bloque se sustituye sin tocar
   el texto.

4. **Tema 4 — pista del pódcast.** El `.xd` y el `.pdf` traen la tarjeta de audio y su título
   («El impacto de una idea de negocio: de la intuición a la evidencia»), pero en `fuentes/`
   no hay ningún `.mp3`. Se dejó un audio de silencio con la duración de referencia para que
   el componente funcione; hay que sustituir
   `src/assets/curso/temas/t4/podcast.mp3` por la locución definitiva.

## Diferencias entre el XD y el render del PDF, y cómo se resolvieron

5. **Círculos de las cuatro vías del 4.2 y de las tres preguntas del 4.4.** El `.xd` repite el
   nombre de nodo `Elipse 13609` en tamaños distintos y el volcado del fill se equivocaba: da
   `#F0F49D` para los cuatro círculos de 98 px del 4.2 (que en el PDF son **blancos**) y para
   los tres de 150 px del 4.4 (que en el PDF son **`#83C1E8`**). Se tomó el píxel del PDF, no
   el nombre del nodo.

6. **Viñeta de las listas.** El pasteboard del XD trae el nodo de la viñeta con su nombre
   escrito, `circle-dot-regular-full`, en `#FB82FF`. Los temas 1 a 3 se habían maquetado con
   `fa-circle-right`; se corrigieron los cinco archivos para usar `far fa-circle-dot` en el
   acento de contenido, que es lo que dibuja el diseño.

7. **`.tarjeta--icono-arriba`.** El Tema 3 usaba esa clase para montar el círculo de 150 px
   sobre el borde de la tarjeta, pero **no estaba definida en ninguna parte** (no existe en el
   kit). Se definió en `_custom.sass` con las dos medidas que usa el curso: 76 px de vuelo
   para el círculo de 150 y 13 px para el cuadrado de 84 de las cinco tarjetas del 4.1.

8. **Actividad didáctica — las diez imágenes.** El `.xd` no trae artboard de actividad (once
   artboards para once páginas del PDF, todos asignados) y el `_AD.docx` no adjunta imágenes,
   pero el componente del kit reserva la columna de la foto en todas las preguntas. El scaffold
   venía con cinco fotos de otro curso duplicadas para llenar diez nombres. Se sustituyeron por
   diez recortes cuadrados de la fotografía **de este mismo curso**, uno por cada pregunta que
   el kit muestra, tomados de los temas 1 a 5.

9. **Temas 1 a 3 — lo que corrigió la revisión final.** El repaso de cierre (colores, distribución,
   iconos, botones del carrusel y animaciones de la portada) encontró y corrigió en los tres
   primeros temas: fotos e ilustraciones intercambiadas de hueco (la de los cuatro jóvenes, la
   de los engranajes y las dos de la mujer con la forma magenta en el tema 2; la ilustración
   amarilla y la foto de la línea de tiempo en el tema 3); cuatro bloques que no se habían
   maquetado (la foto junto a la línea de tiempo del 2.4, la caja de «Ningún actor sustituye a
   los demás», la foto junto al cajón del 3.4 y la ilustración del 3.3); dos iconos que faltaban
   y uno cambiado en el tema 2; el carrusel de cinco prácticas éticas del 3.2, que estaba como
   tres tarjetas fijas sin iconos ni banda; la lista de dilemas del 3.2, que era una caja única
   en vez de cinco bandas alternas con su foto; y varias columnas que no repartían el ancho como
   el XD (708+292 en vez de 8+4, y las cinco tarjetas del 2.2 dentro del `col-lg-10`).

10. **Los nueve hallazgos del revisor sobre el Tema 1, aplicados a todos los temas.** El
    documento `Hallazgos revisor.docx` marcaba nueve reglas sobre el tema 1. Se corrigieron ahí
    y **se buscaron una a una en los cinco temas**:

    1. *Color del numeral del título.* Estaba forzado a blanco en `_custom.sass`; el XD lo pone
       en `#12263F` (comprobado en las cinco páginas del PDF: cero píxeles blancos dentro del
       cuadro magenta). Se quitó el `!important` que lo blanqueaba.
    2. *Esquinas de las imágenes.* El radio va en la máscara del XD. **24 fotos** de los cinco
       temas lo llevan a 10 px y se estaban entregando en punta.
    3. *Ubicación de los párrafos.* El XD guarda en cada nodo de texto su `text.frame.width`,
       que es el ancho de la columna en la que el diseñador lo metió. **33 párrafos** rompían a
       1228 cuando su marco era de 812, 855 o 916. Todos devueltos a su columna.
    4. *Fondo de las tarjetas del carrusel.* No es un color plano: el XD las dibuja con un
       patrón decorativo sobre el `#F0F49D` (una máscara de 327x460). Se exportó y se aplicó
       como imagen de fondo en los seis del tema 1 y los cinco del tema 3.
    5. *Contenido e icono.* El párrafo del PESTEL iba suelto y con el destello blanco; el XD lo
       mete en una caja `#F9FBD8` de 1020x140 con el icono magenta.
    6. Misma pareja de errores que 2 y 3 en la apertura del 1.4.
    7. *Colores del `TabsB`.* Pestaña en reposo `#EBE9FB`, activa blanca, la barra indigo
       **debajo** con su triángulo, y la foto del panel dentro de un marco amarillo de 9 px.
    8. *Icono montado sobre el borde.* Las cinco tarjetas del 2.2 son el mismo patrón que las
       del 4.1 (cuadrado de 84 asomando 13 px sobre una tarjeta de 188x290).
    9. *Distribución del componente*, y **la ilustración del 2.4 es la del `.xd`, no la del
       `.pdf`**: ahí el PDF repite la misma foto en dos huecos donde el XD pone dos personas
       distintas. Se había cambiado en la revisión anterior siguiendo el PDF; queda revertido.

## El `.xd` y el `.pdf` en desacuerdo

11. **Tema 5, apartado 5.4.** Es el único bloque del curso donde las dos fuentes describen
   maquetas distintas. El **PDF** pinta la caja azul a la izquierda con la foto a la derecha, y
   la lista de resultados a 1020 px sin nada al lado. El **`.xd`** pone la foto a la izquierda
   (máscara en 185,3545), la caja azul en (497,3545) y la lista a 915 px con una **ilustración
   de 292x380 en (1121,4044)** que el PDF no muestra. Se maquetó siguiendo el `.xd`: es la
   fuente editable y es la que trae un elemento de más; ninguno de esos nodos está marcado como
   oculto. Si el PDF es la versión buena, basta con quitar la ilustración y devolver la lista y
   el cajón a `col-lg-10`.

## Diferencias que se dejan como están, y por qué

12. **`bloque-texto-g` de la apertura del Tema 4.** El XD dibuja la franja amarilla de 919 px y
   la caja blanca de 685; el componente del kit pinta la franja a todo el ancho del bloque
   (1228) con la foto encima de la mitad derecha, y la caja de texto al 60 % en vez del 55,7 %
   del diseño. Se respeta el componente del kit antes que forzar sus medidas internas, que son
   comunes a todos los cursos.

13. **Flecha de retroceso del carrusel SMART (4.4).** El artboard dibuja las dos flechas en la
   primera diapositiva; `SlyderA` oculta la de retroceso mientras no haya diapositiva anterior.
   Es el comportamiento del kit y se deja.
