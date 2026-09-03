<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    //- El XD rotula este tema «Contexto empresarial y herramientas de análisis», que es el
    //- título del Tema 1; el `_DI.docx` da el correcto y es el que se usa.
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Idea de negocio y su impacto

    //- Franja #F0F49D de 919x296 a la izquierda con la caja blanca de 685x210 dentro y la foto
    //- de 614x296 a la derecha: eso es `--inverso`, no el orden por defecto del kit.
    .bloque-texto-g.color-primario.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/foto-1.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una idea de negocio es la conceptualización inicial de una propuesta de valor que busca satisfacer una necesidad o resolver un problema del mercado o de la sociedad de manera rentable y sostenible. No toda intuición merece ese nombre: para constituir una idea de negocio debe fundamentarse en un diagnóstico real del entorno, resultar viable en las condiciones del contexto donde se pretende desarrollar y aportar un valor diferencial frente a las soluciones existentes.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ic-1.svg" style="width: 84px")
      .col
        p.mb-0 El trabajo no se detiene en la formulación de la idea: exige identificar el impacto que esa idea tendría en la transformación del contexto social y productivo. Ese impacto no ocurre de manera espontánea ni se descubre después de operar; se diseña desde la concepción del proyecto y se sustenta con normas y protocolos de investigación.

    //- La pestaña de 25x8 en (185,756) marca este bloque como `.cajon`.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .cajon.color-1.p-4.d-flex.align-items-center(data-aos="fade-right")
          p.mb-0 Este cuarto eje desarrolla el saber de proceso relativo a la identificación del proyecto empresarial o idea de negocio según el diagnóstico efectuado. Antes de examinar las dimensiones de ese impacto, los protocolos que respaldan su medición y los indicadores con que se comunica, conviene precisar de dónde provienen las ideas con mayor probabilidad de éxito.

        .row.align-items-start.mt-4(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t4/ic-6.svg" style="width: 84px")
          .col-lg-10
            p.mb-0 Las ideas de negocio no aparecen por inspiración súbita. Surgen de la observación sistemática del entorno, es decir, del mismo ejercicio de diagnóstico que los ejes anteriores han descrito. Quien recorre su territorio con las herramientas de análisis en mano detecta espacios de mercado que permanecen invisibles para quien espera que la oportunidad se manifieste sola.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t4/foto-2.png").w-100.h-100.object-fit-cover.r-10

    //- El icono de (185,926) es el destello blanco de 84, no el cuadrado magenta; y el texto
    //- rompe a 812 desde x=289, no a lo ancho de la tarjeta.
    

    p.mt-4(data-aos="fade-right") La literatura especializada identifica cinco fuentes recurrentes de las que provienen las ideas de negocio con mayor probabilidad de éxito. Reconocerlas ayuda a orientar la búsqueda y a evaluar la solidez de una propuesta antes de invertir en ella:

    //- El XD pone una banda #F2F9FD de 1328x394 —el ancho entero de la tarjeta— detrás de esta
    //- lista.
    .bg-2-v.banda-plana.mt-4
      .row.justify-content-center
        .col-lg-10
          .bg-3.r-10.p-4(data-aos="fade-up")
            ul.lista-ul.mb-0
              li
                i.far.fa-circle-dot
                | #[b Necesidades insatisfechas:] existe un segmento de la población con una demanda que el mercado no atiende de manera adecuada. #[b Ejemplo:] en un municipio del Meta, cerca de trescientos trabajadores de un corredor industrial no encuentran dónde almorzar a precio asequible, y esa carencia sostiene una oportunidad verificable.
              li
                i.far.fa-circle-dot
                | #[b Ineficiencias en procesos existentes:] una actividad que ya se realiza puede hacerse mejor, más rápido o a menor costo. #[b Ejemplo:] una cooperativa del Huila reduce las pérdidas poscosecha mediante un sistema de acopio compartido entre asociados, que evita el deterioro del grano durante el transporte.
              li
                i.far.fa-circle-dot
                | #[b Aplicación de tecnología a sectores tradicionales:] una tecnología ya disponible se lleva a un sector que aún no la adopta. #[b Ejemplo:] una empresa de Ibagué digitaliza la gestión de pedidos de talleres mecánicos y peluquerías de barrio, que hasta entonces registraban sus citas en cuadernos.
              li
                i.far.fa-circle-dot
                | #[b Transferencia de modelos exitosos:] un modelo de negocio que funciona en otra región se adapta al contexto local. La adaptación es la clave: replicarlo sin ajustar el precio, el canal de venta y los hábitos de consumo del territorio suele conducir al cierre temprano.
              li.mb-0
                i.far.fa-circle-dot
                | #[b Combinación creativa de recursos:] el territorio dispone de recursos naturales, humanos o tecnológicos que nadie ha articulado entre sí. #[b Ejemplo:] un municipio del Tolima integra su patrimonio arquitectónico, su gastronomía y su acceso al río Magdalena en una experiencia turística estructurada.

    //- Foto de 396x269 a la izquierda; a la derecha el párrafo y, debajo, la caja #F9FBD8 de
    //- 812x172 en (601,1802).
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/foto-3.png").w-100.r-10
      .col-lg-8
        p El factor común de las cinco fuentes es la observación metódica del entorno. Las ideas más sólidas no son las más originales ni las más sofisticadas: son las que provienen de un diagnóstico riguroso y responden a algo que el territorio efectivamente necesita.
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 Una idea bien identificada resuelve algo que el territorio necesita, y esa solución deja huella en la vida de quienes lo habitan. Estimar esa huella no constituye un ejercicio retórico, porque de ella dependen la legitimidad del proyecto ante la comunidad y su respaldo en las convocatorias públicas. La primera dimensión de esa estimación corresponde al impacto social, que reúne los cambios producidos en las condiciones de vida de las personas.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Impacto social

    p.mt-4(data-aos="fade-right") En Colombia, buena parte de los territorios convive con necesidades que ningún actor atiende por completo. Un negocio que se instala allí ocupa un lugar en esa trama y, según cómo opere, contribuye a resolver una carencia o la deja intacta. Por esa razón el impacto social no es un añadido del proyecto, sino una consecuencia de su presencia en el lugar.

    //- Dentro de la caja #FED9FF el icono va ENCIMA del texto, no en una columna a su lado.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t4/ilus-1.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .bg-3.p-4.h-100(data-aos="fade-left")
          figure.mb-3
            img(src="@/assets/curso/temas/t4/ic-2.svg" style="width: 84px")
          p.mb-0 El impacto social de una idea de negocio corresponde a los cambios positivos que la empresa generaría en las condiciones de vida de la comunidad donde opera. Estimarlo desde la formulación ayuda a dimensionar el aporte real del proyecto, distinguirlo de la simple intención y sustentarlo ante quienes deciden sobre apoyos, alianzas o financiación.

    p.mt-4(data-aos="fade-right") Ese aporte se concreta en cuatro formas, que pueden presentarse de manera simultánea o sucesiva según la naturaleza del negocio:

    .row.justify-content-center.mt-4
      .col-lg-10
        ImagenInfografica.color-acento-botones.d-none.d-md-block
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/temas/t4/1.svg" alt="").w-100
          .tarjeta.color-primario.p-3(x="30%" y="65%" numero="+")
            p.mb-0 Compra de insumos y servicios a productores del territorio, de modo que el dinero permanece circulando dentro de la misma economía.
          .tarjeta.color-primario.p-3(x="42%" y="40%" numero="+")
            p.mb-0 Oferta de productos antes ausentes o disponibles solo a precios elevados, lo que mejora las condiciones cotidianas de quienes viven en la zona.
          .tarjeta.color-primario.p-3(x="60.5%" y="42%" numero="+")
            p.mb-0 Vinculación de personas con contrato, seguridad social y pago puntual, lo que estabiliza el ingreso familiar y reduce la dependencia del rebusque diario.         
          .tarjeta.color-primario.p-3(x="70%" y="65%" numero="+")
            p.mb-0 Apoyo a asociaciones y grupos productivos del territorio, que ganan capacidad de negociación, de gestión colectiva y de acceso a mercados.
        figure.d-md-none
          img(src="@/assets/curso/temas/t4/1m.svg" alt="").w-100


            



    p.mt-4(data-aos="fade-right") Las cuatro formas comparten un rasgo. Ninguna se produce por el solo hecho de existir la empresa, pues todas dependen de decisiones deliberadas sobre a quién se contrata, a quién se compra y cómo se opera. El impacto social se diseña y no aparece por añadidura.

    p(data-aos="fade-right") Medir ese impacto no responde únicamente a una obligación ética. Constituye también una herramienta de diferenciación competitiva y de construcción de legitimidad ante la comunidad, los financiadores y las autoridades locales. Los indicadores más utilizados para estimarlo son los siguientes:

    .row.justify-content-center
      .col-10.col-md-6.col-lg-2.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/fue-1.svg').m-auto.img-avatar
          .tarjeta.bg-3.shadow
            .p-2
              .row.justify-content-center.mb-3.mt-2
                .col-auto
                    p.text-center
                      b Empleos generados
                    p.text-center.mb-0 Número de puestos de trabajo directos e indirectos creados, diferenciando los formales de los ocasionales.
    
    
      .col-10.col-md-6.col-lg-2.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/fue-2.svg').m-auto.img-avatar
          .tarjeta.bg-3.shadow
            .p-2
              .row.justify-content-center.mb-3.mt-2
                .col-auto
                  p.text-center
                    b Proveedores locales vinculados
                  p.text-center.mb-0 Porcentaje de insumos adquiridos dentro del territorio, indicador de cuánto dinero permanece circulando en la economía local.
    
    
      .col-10.col-md-6.col-lg-2.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/fue-3.svg').m-auto.img-avatar
          .tarjeta.bg-3.shadow
            .p-2
              .row.justify-content-center.mb-3.mt-2
                .col-auto
                  p.text-center
                    b Mejora en los ingresos
                  p.mb-0.text-center Variación del ingreso de los colaboradores o asociados frente a su situación anterior o al salario mínimo.

      .col-10.col-md-6.col-lg-2.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/fue-4.svg').m-auto.img-avatar
          .tarjeta.bg-3.shadow
            .p-2
              .row.justify-content-center.mb-3.mt-2
                .col-auto
                  p.text-center
                    b Personas beneficiadas
                  p.text-center.mb-0 Número de habitantes que acceden al producto o servicio, en especial cuando atiende una necesidad antes desatendida.

      .col-10.col-md-6.col-lg-2.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/fue-5.svg').m-auto.img-avatar
          .tarjeta.bg-3.shadow
            .p-2
              .row.justify-content-center.mb-3.mt-2
                .col-auto
                  p.text-center
                    b Reducción de impactos ambientales
                  p.text-center.mb-0 Disminución de residuos, consumo de agua o emisiones por unidad producida, expresada en unidades comparables.



    p.mt-4(data-aos="fade-right") Estos indicadores comparten una exigencia: deben poder verificarse con un registro. Un proyecto que declara generar empleo sin precisar cuántos puestos, de qué tipo y en qué plazo no está midiendo su impacto, está expresando una intención.

    //- Cita: rect #83C1E8 de 1020x150 en (289,3956) con el círculo de 84 montado encima.
    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t4/ic-cita-1.svg")
          p.mb-0
            b Decir que el proyecto beneficiará a la comunidad es una intención. Decir que vinculará a quince familias productoras en el primer año es un compromiso verificable.

    p.mt-4(data-aos="fade-right") Los cambios en la vida de las personas no ocurren de manera aislada. Cada puesto de trabajo creado y cada compra realizada en el territorio ponen en movimiento a otras unidades productivas, que fabrican, transportan o venden. Esa segunda dimensión, el impacto productivo y económico, establece hasta dónde llega ese movimiento y qué deja en la economía del lugar.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Impacto productivo y económico

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/foto-4.png").w-100
      .col-lg-8
        p El impacto productivo de una idea de negocio se manifiesta en su capacidad de movilizar y fortalecer el tejido empresarial del territorio donde opera. Una empresa que adquiere la mayor parte de sus insumos a proveedores locales genera un efecto muy superior al de una que los importa, porque en el primer caso el dinero circula varias veces dentro del territorio antes de salir de él.
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t4/ic-6.svg" style="width: 84px")
          .col
            p.mb-0 Ese fenómeno, conocido como efecto multiplicador, explica por qué la construcción deliberada de encadenamientos locales reduce costos logísticos y aumenta al mismo tiempo el impacto económico territorial. Se trata de una decisión de diseño del modelo de negocio, no de una consecuencia automática de operar en la zona.

    p.mt-4(data-aos="fade-right") El impacto económico regional se mide también por la contribución del proyecto a la formalización del tejido empresarial. Una empresa que opera con registro mercantil y cumplimiento de sus obligaciones tributarias y laborales fortalece la institucionalidad local y aporta a los recursos que financian los servicios públicos del municipio. En un país donde una parte considerable del empleo es informal, la formalización constituye por sí misma una forma de impacto positivo. Las vías principales de ese impacto son:

    //- Cuatro tarjetas de 299/315/315/301 x367 con el círculo BLANCO de 98 (el `fill` del rect
    //- lo confirma el píxel del PDF, no el nombre del nodo, que se repite).
    .tarjeta--container.row.mt-4(data-aos="fade-up")
      .col-md.tarjeta.bg-1.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t4/dim-1.svg" style="width: 98px").m-auto
        h4.text-center Encadenamiento hacia atrás
        p.mb-0 Vinculación de proveedores del territorio, que amplía la demanda de bienes y servicios locales y estabiliza sus ingresos.
      .col-md.tarjeta.bg-2.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t4/dim-2.svg" style="width: 98px").m-auto
        h4.text-center Encadenamiento hacia adelante
        p.mb-0 Incorporación de distribuidores o transformadores locales, que extiende el valor generado a otros eslabones de la cadena.
      .col-md.tarjeta.bg-3.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t4/dim-3.svg" style="width: 98px").m-auto
        h4.text-center Formalización
        p.mb-0 Operación con registro mercantil y cumplimiento de obligaciones laborales y tributarias, lo que mejora el acceso al crédito.
      .col-md.tarjeta.bg-5.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t4/dim-4.svg" style="width: 98px").m-auto
        h4.text-center Transferencia de capacidades
        p.mb-0 Formación de proveedores y colaboradores en estándares de calidad, que eleva el nivel técnico del tejido empresarial.

    //- Cajón de 916x120 en (186,5230) y, a su derecha, la ilustración de 292x217.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Estas cuatro vías conforman lo que se denomina encadenamiento productivo. Pueden activarse de manera simultánea y se refuerzan entre sí: un proveedor local formado en estándares de calidad se formaliza con mayor facilidad y accede a otros clientes, lo que amplía el efecto del proyecto sobre el territorio mucho más allá de sus propias ventas.
        p.mt-4.mb-0 El alcance de ese impacto no depende del tamaño de la empresa, sino de decisiones concretas sobre cómo opera. Un negocio pequeño que compra y contrata en su municipio puede dejar más valor en el territorio que uno mayor que trae todo de afuera. Cinco decisiones definen cuánto de lo que genera el proyecto permanece en la economía local:
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-3.png").w-100

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.r-10.p-4(data-aos="fade-up")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | #[b Origen de los insumos:] comprar la materia prima a productores del municipio o traerla de otra región determina qué parte del gasto del negocio permanece circulando en la economía cercana y cuánta sale de ella.
            li
              .lista-ol--cuadro__vineta
                span 2
              | #[b Lugar de la transformación:] procesar el producto en el territorio, en vez de enviarlo en bruto, retiene el valor que agrega ese proceso y la mano de obra que exige, en lugar de trasladarlos a otra zona.
            li
              .lista-ol--cuadro__vineta
                span 3
              | #[b Contratación del personal:] vincular a personas de la zona distribuye el ingreso entre hogares vecinos, reduce los costos de desplazamiento del equipo y facilita la formación de relevos para el propio negocio.
            li
              .lista-ol--cuadro__vineta
                span 4
              | #[b Canales de venta:] vender a un intermediario externo o abrir un canal propio define quién se queda con el margen final y en qué municipio se registra la operación comercial.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 5
              | #[b Servicios de apoyo contratados:] encargar el transporte, el mantenimiento, la contabilidad o el diseño a proveedores del territorio amplía el número de negocios que se benefician de la actividad del proyecto.

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t4/ilus-2.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .bg-3.p-4.h-100.d-flex.align-items-center(data-aos="fade-left")
          p.mb-0 Las cinco decisiones parecen puramente operativas, pero de ellas depende cuánto valor permanece en la zona. Dos negocios con ventas equivalentes dejan aportes muy distintos según cómo resuelvan cada una, y esa diferencia es la que observa un evaluador cuando compara proyectos que compiten por el mismo apoyo.

    p.mt-4(data-aos="fade-right") Toda estimación de impacto se somete a reglas. Quien afirma que un proyecto vinculará a un número determinado de proveedores debe indicar de dónde sale esa cifra, con qué procedimiento la calculó y qué fuente respalda el criterio empleado. Las normas y protocolos de investigación precisan esas exigencias y evitan que el resultado dependa de la buena fe de quien lo presenta.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Normas y protocolos de investigación

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/foto-5.png").w-100
      .col-lg-8
        p Trabajar con normas significa, en la práctica, hacer las cosas de manera que otra persona pueda repetirlas y llegar al mismo resultado. En la estimación de impacto eso exige declarar cómo se llegó a cada cifra. Un número sin explicación obliga al lector a creer, mientras que un número acompañado de su método abre la puerta a discutirlo, corregirlo y actualizarlo cuando el proyecto avance.
        .bg-2.r-10.p-4(data-aos="fade-left")
          p.mb-0 Conviene además distinguir entre estimar y prometer. Una estimación reconoce que el resultado depende de condiciones que pueden variar y, por esa razón, deja escritos los supuestos sobre los que se apoya. Una promesa presenta el mismo resultado como un hecho seguro y deja al proyecto sin margen para explicar lo que ocurra después. Quien evalúa proyectos con frecuencia distingue una de otra en la primera lectura.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ic-7.svg" style="width: 84px")
      .col
        p.mb-0 Esa diferencia se sostiene en un ejercicio concreto. Toda estimación descansa en cinco elementos que deben quedar escritos junto al dato, y declararlos no alarga el documento ni exige conocimientos adicionales. La siguiente tabla reúne esos elementos, precisa qué se declara en cada uno y muestra cómo se ven aplicados a una misma afirmación de impacto:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span  Elementos que debe declarar una estimación de impacto
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Elemento
                th Qué se declara
                th Aplicación a un caso
            tbody
              tr
                td Punto de partida
                td Situación existente antes de que el proyecto entre en operación.
                td La vereda no cuenta hoy con un centro de acopio.
              tr
                td Unidad de medida
                td Magnitud concreta en que se expresa el cambio esperado.
                td Número de familias productoras vinculadas.
              tr
                td Período
                td Plazo dentro del cual se espera alcanzar el resultado.
                td Primeros doce meses de operación.
              tr
                td Origen del dato
                td Registro o ejercicio de campo que respalda la cifra.
                td Censo de productores levantado en el segundo semestre.
              tr
                td Supuesto de cálculo
                td Condición que debe cumplirse para que la cifra se alcance.
                td Se mantiene una frecuencia semanal de recolección.

    p.mt-4(data-aos="fade-right") Los cinco elementos se leen juntos. Al reunirlos, el ejemplo de la tabla se convierte en una sola frase verificable: en una vereda que hoy no tiene centro de acopio, el proyecto vinculará a un número determinado de familias productoras durante su primer año, según el censo levantado en la zona. Esa es la forma en que una estimación resiste una pregunta.

    p(data-aos="fade-right") Declarar los elementos de cada estimación resuelve solo una parte del problema. La otra consiste en asegurar que la información de base sea confiable, porque un método bien descrito no compensa un dato mal recogido. Cuatro criterios protegen esa confiabilidad:

    //- Cuatro bandas de 1020x110 que alternan #CDE6F6 y #F9FBD8; el radio de 10 solo lo llevan
    //- la primera por arriba y la última por abajo, así que se recortan desde el contenedor.
    .row.justify-content-center.mt-4
      .col-lg-10
        .r-10.overflow-hidden(data-aos="fade-up")
          .bg-2.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t4/cri-1.svg" style="width: 70px")
              .col
                p.mb-0 #[b Triangulación de fuentes:] contrastar cada hallazgo con al menos dos fuentes independientes, de modo que ninguna conclusión dependa de un único informante ni de un solo registro documental. Es el criterio que con mayor frecuencia distingue un diagnóstico técnico de una impresión bien argumentada.
          .bg-1.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t4/cri-2.svg" style="width: 70px")
              .col
                p.mb-0 #[b Trazabilidad del dato:] registrar el origen, la fecha y el responsable de cada dato recopilado, de manera que cualquier lector pueda reconstruir el camino que llevó a la conclusión. Un dato sin fuente no puede defenderse ante un evaluador ni actualizarse después.
          .bg-2.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t4/cri-3.svg" style="width: 70px")
              .col
                p.mb-0 #[b Contraste con datos oficiales:] confrontar la información recogida en campo con las estadísticas publicadas por entidades como el DANE o las cámaras de comercio, con el fin de detectar desviaciones que exijan explicación antes de incorporarlas al informe final.
          .bg-1.p-3
            .row.align-items-center
              .col-12.col-md-auto.mb-3.mb-md-0
                figure.mb-0
                  img(src="@/assets/curso/temas/t4/cri-4.svg" style="width: 70px")
              .col
                p.mb-0 #[b Revisión por pares:] someter el diagnóstico a la lectura crítica de otra persona con conocimiento del sector, que identifique supuestos no examinados, conclusiones poco sustentadas y vacíos de información que el autor no advierte por su cercanía al proyecto.

    //- Cajón de 916x170 en (185,8137) con la foto de 292x267 a la derecha.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p Aplicar estos cuatro criterios no exige recursos adicionales significativos, pero cambia por completo el valor del diagnóstico: convierte un documento de opinión en una pieza de evidencia que puede presentarse ante una convocatoria de financiación o ante un aliado potencial.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Con las reglas aplicadas y los datos verificados, la estimación de impacto queda en condiciones de defenderse. Falta, sin embargo, mantenerla viva en el tiempo. Una cifra que se calcula una sola vez y se archiva no dice si el proyecto avanza, y una que solo entiende quien la elaboró difícilmente convence a otros. Los indicadores de impacto convierten esas estimaciones en un seguimiento sostenido, y su conexión con la agenda de desarrollo sostenible les da un lenguaje que cualquier aliado reconoce.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t4/foto-6.png").w-100.r-10

    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Indicadores de impacto y ODS

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ic-8.svg" style="width: 84px")
      .col
        p.mb-0 La palabra indicador aparece en toda convocatoria y en todo plan de negocio, aunque rara vez se explique. Un indicador es la expresión medible de un cambio. Convierte una intención en un dato que puede tomarse hoy y volver a tomarse dentro de seis meses, de manera que la comparación entre los dos momentos muestre si el cambio ocurrió y en qué medida. No describe la actividad del negocio, como el número de reuniones realizadas o de visitas efectuadas, sino el efecto que esa actividad produce en las personas o en el territorio.

    p.mt-4(data-aos="fade-right") Esa diferencia explica por qué dos proyectos con actividades parecidas pueden reportar resultados muy distintos. Para cumplir su función, todo indicador responde a tres preguntas:

    .row.justify-content-center
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar.w-100
          img(src='@/assets/curso/temas/t4/preg-1.svg').m-auto
          .tarjeta.color-primario.shadow.w-100
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b ¿Qué cambia? ]
    
    
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/preg-2.svg').m-auto
          .tarjeta.color-primario.shadow.w-100
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b ¿En quién se produce ese cambio? ]
    
    
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/preg-3.svg').m-auto
          .tarjeta.color-primario.shadow.w-100
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b ¿En qué magnitud?]
    



    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t4/foto-7.png").w-100.h-100.object-fit-cover
      .col-lg-9
        p Sin esa traducción, el impacto queda enunciado, pero no puede gestionarse, porque nadie sabe si el proyecto se acerca o se aleja de lo que anunció.
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t4/ic-6.svg" style="width: 84px")
          .col
            p.mb-0 Medir no exige herramientas sofisticadas ni un equipo especializado. Exige claridad, desde el diseño del proyecto, sobre qué cambios se quieren generar, en quién, en qué período y mediante qué acciones. Un conjunto de cinco a diez indicadores bien seleccionados basta para gestionar y comunicar el impacto de una iniciativa en su etapa inicial. Un número mayor suele producir registros que nadie alcanza a diligenciar.
        p.mt-3.mb-0 Seleccionar los indicadores es apenas el comienzo, pues su utilidad depende de que alguien los mida con regularidad. Cinco decisiones ponen en marcha ese seguimiento:

    //- Caja #FED9FF de 1020x216 con la foto de 396x216 encajada en su mitad derecha.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.overflow-hidden(data-aos="fade-up")
          .row.g-0.align-items-center
            .col-lg-7.p-4
              ul.lista-ul.mb-0
                li
                  i.far.fa-circle-dot
                  | Definir quién realiza la medición dentro del equipo de trabajo.
                li
                  i.far.fa-circle-dot
                  | Establecer cada cuánto se toma el dato.
                li
                  i.far.fa-circle-dot
                  | Señalar en qué formato o registro se anota.
                li
                  i.far.fa-circle-dot
                  | Fijar las fechas en que se revisan los resultados.
                li.mb-0
                  i.far.fa-circle-dot
                  | Acordar qué se hace cuando el indicador se aleja de la meta.
            .col-lg-5
              figure.mb-0.h-100
                img(src="@/assets/curso/temas/t4/foto-8.png").w-100.h-100.object-fit-cover.r-10

    p.mt-4(data-aos="fade-right") Estas cinco decisiones convierten una lista de indicadores en una rutina de trabajo. Sin ellas, la medición se aplaza hasta el momento en que alguien la exige, y para entonces los datos de los primeros meses ya no pueden reconstruirse.

    p(data-aos="fade-right") Esos indicadores adquieren mayor fuerza cuando se conectan con los Objetivos de Desarrollo Sostenible. Cada objetivo cuenta con metas e indicadores ya formulados, de modo que tomarlos como referencia evita construir mediciones desde cero y facilita comparar el aporte del proyecto con el de otras iniciativas del país. La tabla siguiente relaciona algunos objetivos con indicadores sugeridos y con su forma de medición.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span  Indicadores de impacto alineados con los Objetivos de Desarrollo Sostenible
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Objetivo
                th Indicador sugerido
                th Forma de medición
            tbody
              tr
                td ODS 2. Hambre cero
                td Porcentaje de insumos adquiridos a productores locales.
                td Registro de compras por origen del proveedor.
              tr
                td ODS 8. Trabajo decente y crecimiento económico
                td Número de empleos formales creados en los primeros doce meses.
                td Contratos de trabajo registrados.
              tr
                td ODS 10. Reducción de las desigualdades
                td Variación del ingreso promedio de los asociados frente al salario mínimo.
                td Comparación de ingresos antes y después del proyecto.
              tr
                td ODS 11. Ciudades y comunidades sostenibles
                td Número de habitantes con acceso al servicio en la zona de operación.
                td Registro de usuarios atendidos por período.
              tr
                td ODS 13. Acción por el clima
                td Reducción de residuos generados por unidad de producto.
                td Registro de peso de residuos por lote de producción.

    //- Ilustración de 292x203 a la izquierda y cajón de 916x130 en (497,10274) a la derecha.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-4.png").w-100
      .col-lg-9
        .cajon.color-1.p-4(data-aos="fade-left")
          p.mb-0 La tabla ilustra un principio aplicable a cualquier proyecto: el indicador debe derivarse de la propuesta de valor y no elegirse por conveniencia. Un emprendimiento agroindustrial encuentra su indicador natural en el encadenamiento con productores locales, mientras que uno de servicios urbanos lo encuentra en la cobertura de población atendida.
        p.mt-4.mb-0 Para que un indicador resulte gestionable, debe cumplir cinco condiciones que se resumen en el criterio SMART, ampliamente utilizado por las entidades de fomento:

    //- El carrusel va sobre la banda decorativa de 1328x559; la tarjeta blanca de 1263x585 se
    //- sale de ella por arriba y por abajo.
    .banda-3.mt-5
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Específico:] describe con precisión qué se mide y en quién, sin dejar espacio a interpretaciones distintas. Un enunciado vago produce lecturas contradictorias entre quienes revisan el proyecto.
              p.mb-0 Ejemplo 1: número de familias productoras de cacao vinculadas como proveedoras del centro de acopio.
              p.mb-0 Ejemplo 2: cantidad de tenderos del barrio capacitados en manejo de inventario.
            .col-lg-6
              figure.slyder-marco.mb-0
                img(src="@/assets/curso/temas/t4/sl-1.png" alt="Una persona de pie sobre una roca observa un valle con una montaña al fondo.").w-100.r-10
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Medible:] se expresa en una unidad cuantificable y verificable, de modo que el dato pueda tomarse siempre de la misma manera y por personas distintas. Sin unidad definida no existe comparación posible.
              p.mb-0 Ejemplo 1: kilogramos de residuos aprovechados por mes.
              p.mb-0 Ejemplo 2: porcentaje de pedidos entregados dentro del plazo acordado.
            .col-lg-6
              figure.slyder-marco.mb-0
                img(src="@/assets/curso/temas/t4/sl-2.png" alt="Una mujer recibe un paquete en la puerta de su casa.").w-100.r-10
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Alcanzable:] resulta realista con los recursos, el tiempo y la capacidad instalada del proyecto. Una meta desproporcionada desmotiva al equipo y resta credibilidad ante quien evalúa la propuesta.
              p.mb-0 Ejemplo 1: vincular quince proveedores locales durante el primer año, y no doscientos.
              p.mb-0 Ejemplo 2: atender tres veredas con el único vehículo disponible, en lugar de todo el municipio.
            .col-lg-6
              figure.slyder-marco.mb-0
                img(src="@/assets/curso/temas/t4/sl-3.png" alt="Un agricultor sonríe en medio de su cultivo.").w-100.r-10
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Relevante:] se conecta de manera directa con la propuesta de valor y con el cambio que el proyecto promete. Medir lo que no aporta a esa promesa consume tiempo sin orientar ninguna decisión.
              p.mb-0 Ejemplo 1: en un centro de acopio, kilogramos comprados a productores de la zona.
              p.mb-0 Ejemplo 2: en un servicio digital, número de micronegocios que mantienen su uso al tercer mes.
            .col-lg-6
              figure.slyder-marco.mb-0
                img(src="@/assets/curso/temas/t4/sl-4.png" alt="Un comerciante registra sus ventas en el teléfono dentro de su puesto de mercado.").w-100.r-10
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Acotado en el tiempo:] define la fecha o el período en que se toma la medición, lo que hace visible la diferencia entre un avance sostenido de una coincidencia puntual.
              p.mb-0 Ejemplo 1: empleos formales creados durante los primeros doce meses de operación.
              p.mb-0 Ejemplo 2: variación de las ventas entre el primer y el segundo semestre del año.
            .col-lg-6
              figure.slyder-marco.mb-0
                img(src="@/assets/curso/temas/t4/sl-5.png" alt="Una emprendedora sostiene una tableta en su local comercial.").w-100.r-10

    p.mt-5(data-aos="fade-right") Un indicador que incumple alguna de estas condiciones no permite tomar decisiones: si no es medible no puede compararse, y si no está acotado en el tiempo no revela si el proyecto avanza o se ha estancado. Este es el estándar que aplican el Fondo Emprender y la mayoría de los fondos de inversión social para evaluar la calidad del seguimiento de un proyecto.

    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t4/ic-cita-1.svg")
          p.mb-0
            b La cadena lógica del impacto conecta las actividades del proyecto con sus resultados inmediatos, sus efectos a mediano plazo y su transformación del contexto. Definirla desde el inicio evita medir lo fácil en lugar de lo importante.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ic-6.svg" style="width: 84px")
      .col
        p.mb-0 Para reunir en una sola mirada lo estudiado sobre la idea de negocio y su impacto, se presenta el siguiente recurso de audio. En él se explica de dónde surgen las ideas capaces de resistir una evaluación, qué efectos deja un proyecto en las personas y en las empresas del territorio, y por qué los indicadores y sus fuentes terminan definiendo si una propuesta obtiene respaldo:

    .row.justify-content-center.mt-4
      .col-lg-10
        figure.mb-0
          img(src="@/assets/curso/temas/t4/ilus-audio.png").w-100
        //- Dentro de la banda #F0F49D el XD dibuja una tarjeta BLANCA de 972x108 y, en ella,
        //- la barra de 930x60.
        .p-4.bg-podcast
          .bg-white.r-20.p-4
            TarjetaAudio.color-acento-botones.mb-0(
              texto="El impacto de una idea de negocio: de la intuición a la evidencia."
              :audio="require_src('@/assets/curso/temas/t4/podcast.mp3')"
            )

    p.mt-4(data-aos="fade-right") Los conceptos, las técnicas y los indicadores ya están disponibles. Falta observar cómo se combinan al aplicarse a un territorio concreto, con sus limitaciones y sus oportunidades particulares. Los casos que siguen recorren proyectos colombianos de sectores y regiones distintas, y muestran cómo un mismo método de diagnóstico conduce a decisiones diferentes según el lugar donde se pone en práctica.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
