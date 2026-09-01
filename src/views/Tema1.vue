<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Contexto empresarial y herramientas de análisis

    //- Foto de 614x339 y la franja #F0F49D de 919x339 con la caja blanca de 685x250 dentro:
    //- es `.bloque-texto-g` del catálogo.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/foto-1.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Ninguna empresa opera en el vacío. Alrededor de cualquier iniciativa productiva existe un conjunto de fuerzas, condiciones y actores que influyen en su desempeño y en su capacidad de crear valor. Esa influencia puede ser directa o indirecta. Es directa cuando los factores interactúan de forma inmediata con la organización, como ocurre con los clientes que compran, los proveedores que abastecen, los competidores que disputan el mismo mercado y las entidades que regulan la actividad. Es indirecta cuando esos factores operan en el marco general de la economía, la política o la sociedad, y modifican poco a poco las condiciones en las que la empresa funciona.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ic-1.svg" style="width: 84px")
      .col
        p.mb-0 En Colombia, este contexto está documentado y puede consultarse. El registro consolidado por las cámaras de comercio muestra cada año cuántas unidades productivas se crean, en qué actividades económicas y en qué departamentos (Confecámaras, 2023). A su vez, la Encuesta de micronegocios caracteriza las unidades de menor escala, que conforman la mayor parte del tejido productivo del país: dónde operan, de qué actividad obtienen sus ingresos y qué limitaciones enfrentan (Departamento Administrativo Nacional de Estadística [DANE], 2023). Quien emprende no parte de cero: inicia en un entorno ya descrito, y su primera tarea es consultarlo.

    //- Caja #F9FBD8 de 916x142 (col-9) y la foto de 292x237 pegada al borde derecho (col-3).
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        //- La pestaña de 25x8 en (185,841) marca este bloque como `.cajon`.
        .cajon.color-1.p-4.h-100.d-flex.align-items-center(data-aos="fade-right")
          p.mb-0 Desde la perspectiva del emprendimiento, el entorno no es un escenario pasivo: es un campo de oportunidades y amenazas en movimiento permanente que conviene aprender a leer y a anticipar. Un entorno con demanda insatisfecha, competencia moderada y políticas públicas de apoyo abre una ventana para quien sabe identificarla; uno con economía deprimida, escasez de insumos o marcos regulatorios exigentes reclama mayor creatividad y capacidad de adaptación.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t1/foto-2.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Este primer tema construye el punto de partida de todo diagnóstico. Primero delimita qué es el entorno empresarial y qué parte de él puede controlar una organización; después presenta dos herramientas que traducen esa mirada en hallazgos verificables, una para el contexto general y otra para el sector en el que se compite. El recorrido se organiza en cuatro apartados:

    //- La cuarta tarjeta está pintada en el XD con el color y el icono del estado :hover
    //- (tarjeta #CDE6F6, círculo #EBE9FB). Muestreado en el PDF, no en la ficha.
    .row.no-pointer.mt-4.mb-4(data-aos="fade-up")
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/cont-1.svg")
                img.icono-hover(src="@/assets/curso/temas/t1/cont-1-hover.svg")
          h4.text-center Entorno empresarial
          p.mb-0 Definición del concepto y de sus dos dimensiones de referencia, la geográfica y la sectorial, que delimitan el territorio y el sector sobre los cuales se aplica cualquier diagnóstico y evitan conclusiones sin anclaje en un caso real.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/cont-2.svg")
                img.icono-hover(src="@/assets/curso/temas/t1/cont-2-hover.svg")
          h4.text-center Entorno interno y externo
          p.mb-0 Distinción entre los recursos y las capacidades que la organización controla y las fuerzas que solo puede anticipar. Cada dimensión genera un tipo de diagnóstico distinto y habilita un margen de acción propio.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/cont-3.svg")
                img.icono-hover(src="@/assets/curso/temas/t1/cont-3-hover.svg")
          h4.text-center Análisis PESTEL
          p.mb-0 Herramienta de lectura sistemática del macroentorno. Obliga a recorrer sin omisiones los seis factores del contexto: el político, el económico, el social, el tecnológico, el ambiental y el legal.
      .col-md-6.col-lg-3
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/cont-4.svg")
                img.icono-hover(src="@/assets/curso/temas/t1/cont-4-hover.svg")
          h4.text-center Cinco fuerzas del sector
          p.mb-0 Marco para evaluar el atractivo de un sector a partir de la rivalidad entre competidores, la amenaza de nuevos entrantes, la presión de los productos sustitutos y el poder de negociación de proveedores y clientes.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ic-2.svg" style="width: 84px")
      .col
        p.mb-0 Estos cuatro contenidos permiten comprender que el entorno empresarial no solo se describe, sino que se analiza. La definición delimita qué se observa, la distinción entre lo interno y lo externo señala hasta dónde llega el control de la organización, y las dos herramientas traducen esa mirada en hallazgos concretos que sirven para decidir.

    p.mt-4(data-aos="fade-right") A partir de este panorama, conviene profundizar en el concepto de entorno empresarial, pues solo a través de su comprensión es posible precisar el territorio y el sector sobre los cuales se aplica cualquier diagnóstico.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Definición de entorno empresarial

    //- Ilustración de 292x190 (col-3) y la caja #FED9FF de 916x190 (col-9).
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t1/ilus-1.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .bg-3.p-4.h-100.d-flex.align-items-center(data-aos="fade-left")
          p.mb-0 El concepto de entorno empresarial ocupa un lugar central en la toma de decisiones de cualquier organización, porque ninguna empresa define su rumbo sin conocer el terreno donde opera. Definirlo, sin embargo, exige precisión: no basta con hablar del entorno en abstracto, ya que su contenido cambia según el lugar donde se ubique la empresa y la actividad a la que se dedique. Por esa razón el concepto se organiza en dos dimensiones que conviene cruzar antes de iniciar cualquier diagnóstico. La primera responde a la pregunta por el territorio y la segunda, por el sector económico:

    //- Dos tarjetas pegadas de 510x492 con el círculo de 160 dentro, sobre la banda de 1328x443.
    .banda-1.mt-4
      .row.justify-content-center
        .col-lg-10
          .tarjeta--container.row(data-aos="fade-up")
            .col-md.tarjeta.bg-1-p.p-4
              figure.mb-3
                img(src="@/assets/curso/temas/t1/dim-1.svg" style="width: 160px").m-auto
              h4.text-center Dimensión geográfica
              p.mb-0 El entorno se define siempre en relación con un territorio y una comunidad concretos. Por eso el análisis de una empresa en Bogotá difiere del que corresponde a una unidad productiva en una zona rural del Tolima o en un municipio del litoral pacífico, aunque ambas pertenezcan al mismo sector.
            .col-md.tarjeta.bg-2-s.p-4
              figure.mb-3
                img(src="@/assets/curso/temas/t1/dim-2.svg" style="width: 160px").m-auto
              h4.text-center Dimensión sectorial
              p.mb-0 El entorno de una empresa agroindustrial presenta condiciones distintas al de una firma de servicios digitales, aunque ambas operen en el mismo municipio. Cruzar esta dimensión con la geográfica evita el error más frecuente del diagnóstico inicial, que consiste en aplicar conclusiones generales del país a una realidad local que funciona con otra lógica.

    p.mt-4(data-aos="fade-right") Las dos dimensiones se leen juntas y no por separado. El territorio indica quién compra y con qué recursos cuenta la zona, mientras que el sector señala con quién se compite y bajo qué reglas. Al cruzarlas se obtiene la base sobre la cual se construye una definición operativa del entorno, útil para el diagnóstico.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ic-3.svg" style="width: 84px")
      .col
        p.mb-0 Para efectos de este material, el entorno empresarial, también denominado contexto empresarial, se define como el sistema de relaciones entre los factores económicos, sociales, tecnológicos, políticos, ambientales y culturales que determinan las condiciones en las que una empresa opera o en las que puede iniciarse un proyecto. Se trata de una definición amplia y por esa razón es útil para el diagnóstico: obliga a considerar todas las variables relevantes antes de decidir. Los factores que la componen son los siguientes:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.p-4(data-aos="fade-up")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b Factores económicos:] condiciones de producción, empleo e ingreso que determinan la capacidad de compra del mercado y el costo de los recursos.
            li
              i.far.fa-circle-dot
              | #[b Factores sociales:] características de la población, hábitos de consumo y necesidades no atendidas que definen a quién se dirige la propuesta de valor.
            li
              i.far.fa-circle-dot
              | #[b Factores tecnológicos:] disponibilidad de infraestructura digital, maquinaria y conocimiento técnico que condiciona los procesos que la empresa puede adoptar.
            li
              i.far.fa-circle-dot
              | #[b Factores políticos:] decisiones de gobierno, planes de desarrollo e instrumentos de fomento que abren o cierran oportunidades para determinados sectores productivos.
            li
              i.far.fa-circle-dot
              | #[b Factores ambientales:] estado de los recursos naturales, condiciones climáticas y exigencias de sostenibilidad que inciden en la viabilidad técnica del proyecto.
            li.mb-0
              i.far.fa-circle-dot
              | #[b Factores culturales:] valores, tradiciones y prácticas de la comunidad que explican por qué un producto se acepta en un territorio y no en otro.

    p.mt-4(data-aos="fade-right") Los seis factores no actúan por separado. Una política pública de fomento (factor político) solo se traduce en oportunidad real cuando existe demanda que la sostenga (factor económico) y una comunidad dispuesta a adoptar la propuesta (factor cultural). Leer el entorno consiste, precisamente, en reconocer cómo se refuerzan o se neutralizan entre sí en un territorio determinado.

    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t1/cita-1.svg")
          p.mb-0
            b Ningún factor del entorno actúa solo. La oportunidad real aparece cuando la política pública, la demanda del mercado y la aceptación de la comunidad coinciden en un mismo territorio.

    p.mt-4(data-aos="fade-right") Comprendido el concepto y sus factores, el paso siguiente consiste en establecer quién controla cada uno. La distinción entre entorno interno y entorno externo muestra qué está al alcance de la organización y qué escapa a su gestión, una diferencia que orienta las decisiones y evita invertir esfuerzo donde no hay margen de acción.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Entorno interno y externo

    //- Foto de 396x298 (col-4) y la caja #F9FBD8 de 812x177 con r=10 (col-8).
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-3.png").w-100
      .col-lg-8
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 Toda organización enfrenta a diario dos clases de asuntos. Unos dependen de sus propias decisiones, como el precio que fija, la formación de su equipo o el orden con que ejecuta sus tareas. Otros ocurren sin su intervención, como una reforma tributaria, la llegada de un competidor o un cambio en los hábitos de consumo. Separar los primeros de los segundos es el punto de partida del pensamiento estratégico, porque el esfuerzo rinde donde existe capacidad real de acción.

        p.mt-4.mb-0(data-aos="fade-left") Esa separación da origen a dos categorías de análisis: el entorno interno y el entorno externo. El primero reúne los factores y recursos que la empresa posee o controla de manera directa, es decir, aquello con lo que cuenta para producir, competir y sostenerse, y sobre lo cual puede actuar mediante decisiones de inversión, formación o reorganización. Seis grupos de recursos concentran ese análisis:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Capital humano")
            .col-12
              p.mb-0 Las personas que integran la organización, con su experiencia, formación y compromiso. Es el recurso que activa a todos los demás, porque ninguna máquina ni sistema produce resultados sin alguien que lo opere y lo mejore.
              p.mb-0 #[b Ejemplo:] una panadería de Bucaramanga que capacita a su equipo en repostería amplía su portafolio sin cambiar de local.
          .row(numero="2" titulo="Tecnología")
            .col-12
              p.mb-0 Equipos, maquinaria, programas informáticos y conocimiento técnico con los que la empresa transforma insumos en productos o servicios. Define la calidad, el costo y la velocidad de la operación.
              p.mb-0 #[b Ejemplo:] un taller de confección de Medellín que incorpora máquinas de corte automatizado reduce el desperdicio de tela y cumple los pedidos en menos tiempo.
          .row(numero="3" titulo="Procesos")
            .col-12
              p.mb-0 La forma en que se organizan las actividades de compra, producción, venta y servicio. Un proceso claro evita reprocesos y logra que el resultado no dependa de quién ejecute la tarea.
              p.mb-0 #[b Ejemplo:] una tienda de abarrotes de Villavicencio que documenta su rutina de inventario deja de perder ventas por falta de producto en el estante.
          .row(numero="4" titulo="Cultura organizacional")
            .col-12
              p.mb-0 Los valores, los hábitos y las formas de relación que orientan el comportamiento diario del equipo. Explica por qué dos empresas con recursos parecidos obtienen resultados distintos.
              p.mb-0 #[b Ejemplo:] una empresa de servicios de Pereira donde el error se reporta sin temor corrige las fallas antes de que lleguen al cliente.
          .row(numero="5" titulo="Recursos financieros")
            .col-12
              p.mb-0 El capital disponible, el flujo de caja y la capacidad de acceder a crédito. Determinan hasta dónde puede crecer la operación y con qué margen se enfrenta un imprevisto.
              p.mb-0 #[b Ejemplo:] una empresa de alimentos de Neiva con reservas de caja sostiene la nómina mientras cobra una factura demorada.
          .row(numero="6" titulo="Estructura")
            .col-12
              p.mb-0 La manera en que se distribuyen las funciones, las responsabilidades y las líneas de decisión. Una estructura definida agiliza la respuesta, mientras que una difusa duplica tareas y retrasa acuerdos.
              p.mb-0 #[b Ejemplo:] una cooperativa de Popayán que asigna un responsable por área resuelve las solicitudes de sus asociados en la mitad del tiempo.

    p.mt-4(data-aos="fade-right") El examen conjunto de estos seis recursos arroja dos resultados. Por un lado, las fortalezas, aquello en lo que la organización supera a sus competidores; por otro, las debilidades, los aspectos que debe corregir para sostenerse en el mercado. Ambas dependen de decisiones propias y, por esa razón, pueden modificarse.

    .row.mt-4
      .col-lg-9
        .bg-1.r-10.p-4(data-aos="fade-right")
          .row.align-items-center
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/ic-4.svg" style="width: 84px")
            .col
              p.mb-0 El entorno externo reúne las fuerzas que operan fuera de la empresa e influyen en sus decisiones y resultados. Se organiza en dos capas: el macroentorno, con las fuerzas generales que afectan a todas las organizaciones del sistema económico, y el microentorno o entorno inmediato, con las fuerzas específicas del sector o mercado en el que la empresa participa. De su análisis surgen las oportunidades y las amenazas.
      .col-lg-3.mt-4.mt-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t1/foto-4.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") La siguiente tabla organiza los tres tipos de entorno, indica los componentes que integran cada uno y señala la herramienta de análisis que corresponde aplicar en cada caso:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Tipos de entorno empresarial y herramientas de análisis
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Tipo de entorno
                th Componentes principales
                th Herramienta de análisis
            tbody
              tr
                td Interno
                td Capital humano, tecnología, procesos, cultura, finanzas y estructura organizacional.
                td Inventario de recursos y capacidades, cadena de valor.
              tr
                td Externo – macroentorno
                td Factores políticos, económicos, sociales, tecnológicos, ambientales y legales.
                td Análisis PESTEL.
              tr
                td Externo – microentorno
                td Clientes, proveedores, competidores, sustitutos y nuevos entrantes.
                td Cinco fuerzas competitivas.

    p.mt-4(data-aos="fade-right") La lectura de la tabla deja ver una relación práctica: el diagnóstico interno responde a la pregunta por lo que la empresa puede hacer, mientras que el diagnóstico externo responde a la pregunta por lo que el entorno ofrece o exige. Solo el cruce de ambas respuestas produce una decisión estratégica sustentada, y ese cruce es justamente lo que organiza la matriz de debilidades, oportunidades, fortalezas y amenazas (DOFA).

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ic-5.svg" style="width: 84px")
      .col
        p.mb-0 Las dos dimensiones se comprenden mejor cuando se observan una junto a la otra. La siguiente tabla las compara según cuatro criterios: el grado de control que la organización ejerce sobre cada una, el tipo de diagnóstico que produce, la herramienta principal con que se analiza y una pregunta guía que orienta su examen. La comparación deja ver en qué se diferencian y por qué ninguna sustituye a la otra:

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span  Comparación entre el entorno interno y el entorno externo
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Criterio
                th Entorno interno
                th Entorno externo
            tbody
              tr
                td Grado de control
                td Alta: la organización decide sobre sus recursos y sus procesos.
                td Baja: los factores no dependen de la voluntad de la organización.
              tr
                td Diagnóstico que genera
                td Fortalezas y debilidades.
                td Oportunidades y amenazas.
              tr
                td Herramienta principal
                td Cadena de valor, inventario de recursos y capacidades.
                td PESTEL y cinco fuerzas competitivas.
              tr
                td Ejemplo de pregunta guía
                td ¿Cuenta el equipo con el conocimiento técnico para ejecutar el proyecto?
                td ¿Existe una política pública que respalde el sector donde operará el proyecto?

    p.mt-4(data-aos="fade-right") La comparación muestra que ambas miradas son complementarias y no intercambiables: una fortaleza sin oportunidad que la aproveche no genera valor, y una oportunidad sin capacidad interna que la sostenga se convierte en riesgo. Por eso el diagnóstico empresarial recorre siempre las dos dimensiones antes de emitir cualquier conclusión sobre la viabilidad del proyecto.

    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t1/cita-2.svg")
          p.mb-0
            b Una debilidad interna puede corregirse con formación, inversión o alianzas; una amenaza externa solo puede anticiparse y mitigarse. Confundir una con otra lleva a gastar esfuerzo donde no hay margen de maniobra.

    p.mt-4(data-aos="fade-right") Delimitadas ya las dos dimensiones, queda por resolver cómo se examina la capa más amplia del entorno externo, aquella que ninguna empresa controla. El análisis PESTEL responde a esa necesidad: agrupa las condiciones generales del país en seis factores y evita que el diagnóstico deje alguno por fuera.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Análisis PESTEL

    //- Ilustración de 292x190 (col-3) y la caja #FED9FF de 916x190 (col-9).
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t1/ilus-2.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .bg-3.p-4.h-100.d-flex.align-items-center(data-aos="fade-left")
          p.mb-0 El análisis PESTEL es la herramienta más difundida para el diagnóstico sistemático del macroentorno de una empresa o de un proyecto emprendedor. Su nombre es un acrónimo que reúne los seis factores generales que toda organización necesita monitorear: político, económico, social, tecnológico, ambiental y legal. Cada uno puede operar como oportunidad o como amenaza según el tipo de negocio y el territorio analizado.

    p.mt-4(data-aos="fade-right") Su utilidad no reside en describir el país en abstracto, sino en obligar a recorrer las seis dimensiones sin omitir ninguna. Un diagnóstico que examina con detalle el factor económico y pasa por alto el legal deja fuera requisitos de constitución, normas laborales o restricciones sanitarias que pueden condicionar por completo la operación.

    p(data-aos="fade-right") El siguiente listado describe el alcance de cada factor:

    //- Los seis factores, de tres en tres. Los tres últimos, con sus iconos, salen del
    //- pasteboard. Detrás va la banda decorativa de 1328x254.
    .banda-2.mt-4
      SlyderF.slyder--flechas(columnas="col-md-6 col-lg-4")
        .tarjeta.bg-1-p.r-20.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t1/herr-1.svg" style="width: 128px").m-auto
          h4.text-center Político
          p.text-center.mb-0 Condiciones de gobernabilidad, estabilidad institucional y políticas de fomento al emprendimiento. En Colombia, instrumentos como el Fondo Emprender, los Centros de Desarrollo Empresarial y los programas de iNNpulsa abren oportunidades concretas para las ideas de negocio viables.
        .tarjeta.bg-1-p.r-20.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t1/herr-2.svg" style="width: 128px").m-auto
          h4.text-center Económico
          p.text-center.mb-0 Crecimiento del producto interno bruto, inflación, desempleo, nivel de ingreso de la población y acceso al crédito. Estos indicadores determinan la capacidad de compra del mercado objetivo y el costo de los recursos que el proyecto necesita para iniciar su operación.
        .tarjeta.bg-1-p.r-20.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t1/herr-3.svg" style="width: 128px").m-auto
          h4.text-center Social
          p.text-center.mb-0 Tendencias demográficas, cambios en los estilos de vida, valores culturales, nivel educativo y necesidades insatisfechas. Es el factor donde el emprendimiento social encuentra su justificación, al detectar demandas que ni el mercado ni el Estado atienden de manera suficiente.
        .tarjeta.bg-1-p.r-20.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t1/herr-4.svg" style="width: 128px").m-auto
          h4.text-center Tecnológico
          p.text-center.mb-0 Grado de adopción tecnológica del territorio, disponibilidad de infraestructura digital y velocidad del cambio técnico en el sector. Una zona con buena conectividad habilita modelos de venta en línea que resultarían inviables donde la señal es intermitente.
        .tarjeta.bg-1-p.r-20.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t1/herr-5.svg" style="width: 128px").m-auto
          h4.text-center Ambiental
          p.text-center.mb-0 Condiciones climáticas, disponibilidad de recursos naturales y exigencias de sostenibilidad. Las oportunidades ligadas a energías renovables, gestión de residuos, agroecología y economía circular constituyen hoy una de las fronteras más dinámicas del emprendimiento colombiano.
        .tarjeta.bg-1-p.r-20.p-4.h-100
          figure.mb-3
            img(src="@/assets/curso/temas/t1/herr-6.svg" style="width: 128px").m-auto
          h4.text-center Legal
          p.text-center.mb-0 Marco normativo del sector, requisitos de constitución y operación, obligaciones laborales y tributarias, e incentivos o restricciones que la ley establece para actividades específicas del territorio donde se pretende operar.

    p.mt-4(data-aos="fade-right") Recorrer los seis factores produce un mapa del terreno, no una decisión. El valor del PESTEL aparece cuando cada hallazgo se contrasta con la idea de negocio concreta y se clasifica como oportunidad aprovechable o como amenaza que exige mitigación, con la evidencia que lo respalda.

    //- La caja mide 1020 (col-10) y la ilustración de 292x170 va DENTRO, a su derecha.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-2.r-10.p-4(data-aos="fade-up")
          .row.align-items-center
            .col
              p.mb-0 Conocer los seis factores no basta para producir un diagnóstico. La herramienta rinde cuando se aplica con método, es decir, cuando el análisis avanza en un orden previsible y cada paso entrega el resultado que el siguiente necesita. Ese orden comienza por acotar el campo de estudio, continúa con la búsqueda de información y termina con la interpretación de los hallazgos frente a la idea de negocio. Los cinco pasos siguientes describen esa secuencia y pueden aplicarse a cualquier proyecto, sin importar el sector al que pertenezca:
            .col-12.col-md-auto.mt-3.mt-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/ilus-4.png" style="width: 292px").w-100

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-1.r-10.p-4(data-aos="fade-up")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Delimitar el territorio y el sector sobre los que se aplicará el análisis.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Recopilar datos verificables para cada uno de los seis factores.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Clasificar cada hallazgo como oportunidad o como amenaza para el proyecto.
            li
              .lista-ol--cuadro__vineta
                span 4
              | Priorizar los hallazgos según su probabilidad de ocurrencia y su impacto.
            li
              .lista-ol--cuadro__vineta
                span 5
              | Documentar las fuentes consultadas para sustentar el diagnóstico.

    p.mt-4(data-aos="fade-right") Seguir estos cinco pasos convierte la información dispersa en criterio. El territorio acota el estudio, los datos lo sustentan, la clasificación los interpreta, la priorización los jerarquiza y las fuentes los respaldan. Ese recorrido separa una opinión sobre el mercado de un diagnóstico defendible.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ic-6.svg" style="width: 84px")
      .col
        p.mb-0 El PESTEL describe el terreno general, pero no dice quién compite en él. Esa pregunta se resuelve en la capa más cercana al negocio, donde actúan clientes, proveedores y rivales directos. El modelo de las cinco fuerzas del sector hace posible examinar esa capa y estimar cuánto margen deja el mercado al que se pretende entrar.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Cinco fuerzas del sector

    .row.mt-4
      .col-lg-9
        //- La pestaña de 25x8 en (185,8860) marca este bloque como `.cajon`.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Mientras el macroentorno afecta a todas las empresas de la economía, el entorno inmediato incide de manera directa sobre quienes compiten en un mismo sector. El modelo de las cinco fuerzas competitivas, formulado por Michael Porter, continúa siendo el marco más sólido para analizar la estructura de un sector y evaluar su atractivo para nuevos emprendimientos (Porter, 2008).
      .col-lg-3.mt-4.mt-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t1/foto-5.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") El modelo parte de una idea sencilla y exigente: la rentabilidad de un sector no depende solo de la habilidad de cada empresa, sino de la estructura de fuerzas que lo configura. Comprender esa estructura antes de entrar ayuda a anticipar dónde se juega el margen y qué tan defendible resulta la posición que el proyecto aspira a ocupar. Las cinco fuerzas son las siguientes:

    //- Ilustración de 292 en (289,9129) y caja #FED9FF de 708x385 con r=10 en (601,9129): el
    //- grupo mide 1020 y va centrado, así que son col-3 + col-7 en una fila centrada.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ilus-3.png").w-100
      .col-lg-7
        .bg-3.r-10.p-4(data-aos="fade-left")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b Rivalidad entre competidores:] intensidad de la disputa entre las empresas que ya operan en el sector, según su número y su grado de diferenciación.
            li
              i.far.fa-circle-dot
              | #[b Amenaza de nuevos entrantes:] facilidad con que otras empresas pueden ingresar al mercado, determinada por las barreras de entrada y la inversión requerida.
            li
              i.far.fa-circle-dot
              | #[b Poder de los proveedores:] capacidad de quienes suministran insumos para imponer precios o condiciones, mayor cuando el insumo es difícil de sustituir.
            li
              i.far.fa-circle-dot
              | #[b Poder de los clientes:] capacidad de los compradores para presionar el precio a la baja, alta cuando disponen de alternativas equivalentes.
            li.mb-0
              i.far.fa-circle-dot
              | #[b Amenaza de sustitutos:] existencia de bienes o servicios distintos que satisfacen la misma necesidad y pueden desplazar la demanda del sector.

    p.mt-4(data-aos="fade-right") Un sector con rivalidad alta, barreras de entrada bajas, proveedores fuertes y clientes sensibles al precio ofrece menor margen que otro con pocos competidores, oferta diferenciada y compradores que valoran la calidad. La conclusión práctica es directa: conviene entrar donde el proyecto pueda construir una posición defendible, no donde simplemente exista demanda.

    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t1/cita-3.svg")
          p.mb-0
            b El análisis de las cinco fuerzas debe realizarse con información del territorio donde operará el proyecto. Un sector atractivo en el promedio nacional puede estar saturado en un municipio concreto, y esa diferencia solo se detecta con datos locales.

    p.mt-4(data-aos="fade-right") En la práctica, el examen se hace fuerza por fuerza y con información del lugar donde operará el negocio. Conviene establecer cuántos competidores atienden hoy a ese mismo cliente, qué tan fácil resulta abrir un negocio igual, de cuántos proveedores depende el insumo principal, qué alternativas tiene el comprador y qué otro producto podría satisfacer la misma necesidad. Las respuestas se obtienen observando el mercado local, conversando con comerciantes de la zona y consultando registros públicos.

    //- Foto de 614x288 y la franja #F0F49D de 919x288 con la caja blanca de 685x199 dentro.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/foto-6.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 El resultado de ese examen no es una calificación del sector, sino una decisión sobre cómo entrar en él. Una rivalidad alta puede enfrentarse con especialización; un proveedor dominante, con alianzas o con la búsqueda de insumos alternativos; un comprador exigente, con servicio o con garantías. Las cinco fuerzas, además, cambian con el tiempo, de modo que el análisis se repite cuando el sector se transforma o cuando el proyecto crece.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/ic-8.svg" style="width: 84px")
      .col
        p.mb-0 Ahora bien, ningún sector existe al margen del lugar donde opera. Las mismas cinco fuerzas se comportan de manera distinta según el departamento y el municipio, porque sobre cada territorio actúan políticas públicas que orientan la inversión y priorizan unas actividades sobre otras. Conocer ese marco abre la puerta a identificar apoyos, incentivos y apuestas productivas capaces de inclinar la balanza a favor de una idea de negocio.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
