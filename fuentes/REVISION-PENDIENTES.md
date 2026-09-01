# Decisiones y pendientes de maquetación

Este archivo recoge, con su motivo, todo lo que no se pudo resolver mirando solo el `.xd`:
los puntos en que el diseño y el PDF no coinciden, los que el diseño deja al desarrollador y
los que quedan a la espera de un material que todavía no llegó.

## Textos que el XD trae de otro curso y se corrigieron con el `_DI.docx`

1. **Tema 4 — título del eje.** El artboard rotula el tema «Contexto empresarial y
   herramientas de análisis», que es el título del Tema 1. El `01230000_CF01_DI.docx` da
   «Idea de negocio y su impacto» y es el que se maquetó.

## Recursos que el XD deja pedidos, sin arte que exportar

2. **Tema 4, apartado 4.1 — «las cuatro formas del impacto social».** En lugar de un diseño,
   el artboard deja un recuadro «Recursos DI» con el encargo: *«Se solicita diseñar la
   siguiente infografía interactiva que al desplegar cada modal se presenta la definición de
   cada texto»*, más un enlace a una plantilla de banco de imágenes. No hay arte que exportar,
   así que se maquetó con **`PasosB`**, el componente del kit que numera cuatro pasos y
   despliega la definición de cada uno al pulsarlo: conserva la interacción pedida sin
   inventar una ilustración. Si el diseño llega después, el bloque se sustituye sin tocar
   el texto.

3. **Tema 4 — pista del pódcast.** El `.xd` y el `.pdf` traen la tarjeta de audio y su título
   («El impacto de una idea de negocio: de la intuición a la evidencia»), pero en `fuentes/`
   no hay ningún `.mp3`. Se dejó un audio de silencio con la duración de referencia para que
   el componente funcione; hay que sustituir
   `src/assets/curso/temas/t4/podcast.mp3` por la locución definitiva.

## Diferencias entre el XD y el render del PDF, y cómo se resolvieron

4. **Círculos de las cuatro vías del 4.2 y de las tres preguntas del 4.4.** El `.xd` repite el
   nombre de nodo `Elipse 13609` en tamaños distintos y el volcado del fill se equivocaba: da
   `#F0F49D` para los cuatro círculos de 98 px del 4.2 (que en el PDF son **blancos**) y para
   los tres de 150 px del 4.4 (que en el PDF son **`#83C1E8`**). Se tomó el píxel del PDF, no
   el nombre del nodo.

5. **Viñeta de las listas.** El pasteboard del XD trae el nodo de la viñeta con su nombre
   escrito, `circle-dot-regular-full`, en `#FB82FF`. Los temas 1 a 3 se habían maquetado con
   `fa-circle-right`; se corrigieron los cinco archivos para usar `far fa-circle-dot` en el
   acento de contenido, que es lo que dibuja el diseño.

6. **`.tarjeta--icono-arriba`.** El Tema 3 usaba esa clase para montar el círculo de 150 px
   sobre el borde de la tarjeta, pero **no estaba definida en ninguna parte** (no existe en el
   kit). Se definió en `_custom.sass` con las dos medidas que usa el curso: 76 px de vuelo
   para el círculo de 150 y 13 px para el cuadrado de 84 de las cinco tarjetas del 4.1.

## Diferencias que se dejan como están, y por qué

7. **`bloque-texto-g` de la apertura del Tema 4.** El XD dibuja la franja amarilla de 919 px y
   la caja blanca de 685; el componente del kit pinta la franja a todo el ancho del bloque
   (1228) con la foto encima de la mitad derecha, y la caja de texto al 60 % en vez del 55,7 %
   del diseño. Se respeta el componente del kit antes que forzar sus medidas internas, que son
   comunes a todos los cursos.

8. **Flecha de retroceso del carrusel SMART (4.4).** El artboard dibuja las dos flechas en la
   primera diapositiva; `SlyderA` oculta la de retroceso mientras no haya diapositiva anterior.
   Es el comportamiento del kit y se deja.
