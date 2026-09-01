<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Territorio y políticas de desarrollo

    //- Foto de 292x287 (col-3) y, a la derecha, el icono con su párrafo y la caja #CDE6F6
    //- de 919x142, las dos arrancando en x=497.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t2/foto-1.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .row.align-items-start
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 El emprendimiento colombiano no ocurre en un terreno neutro. Sobre cada municipio y cada departamento actúa un marco de políticas públicas de desarrollo empresarial que define prioridades, asigna recursos y orienta la inversión hacia determinadas cadenas productivas. Conocer ese marco no es un ejercicio administrativo: es la vía para identificar incentivos, apoyos técnicos y aliados que pueden resultar decisivos para la viabilidad de una idea de negocio.

        .bg-2.p-4.mt-4(data-aos="fade-left")
          p.mb-0 Ese marco no se define en un solo lugar. Tres niveles de gobierno actúan sobre el mismo territorio y cada uno decide sobre asuntos distintos, de modo que un emprendedor puede encontrar respaldo en uno y ninguna respuesta en otro. Reconocer qué se decide en cada nivel evita tocar la puerta equivocada y ayuda a ubicar el instrumento que corresponde a la etapa en la que se encuentra el proyecto:

    //- Tres pestañas de 409x65; la activa lleva el subrayado de 409x5 en #422AD8 en el borde
    //- inferior. Los paneles primero y tercero están ocultos en el pasteboard.
    TabsB.color-acento-botones.mt-4(data-aos="fade-up")
      .tarjeta.p-4(titulo="Nivel nacional")
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/foto-2a.png").w-100
          .col-lg-7
            p Fija las reglas generales del ecosistema emprendedor y crea los instrumentos de fomento que operan en todo el país, con requisitos iguales para cualquier región.
            p.mb-0 #[b Caso práctico:] un grupo de aprendices de Sincelejo presenta su plan de negocio al Fondo Emprender y accede a capital semilla en las mismas condiciones que un equipo de Cali.
      .tarjeta.p-4(titulo="Nivel departamental")
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/foto-2.png").w-100
          .col-lg-7
            p Traduce esas reglas en apuestas productivas concretas mediante los planes de desarrollo y las comisiones regionales de competitividad, que priorizan las cadenas con mayor potencial.
            p.mb-0 #[b Caso práctico:] un departamento que prioriza la cadena del cacao ofrece asistencia técnica y ruedas de negocio a quienes transforman ese producto en su territorio.
      .tarjeta.p-4(titulo="Nivel municipal")
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/foto-2c.png").w-100
          .col-lg-7
            p Define las condiciones más cercanas al proyecto, esto es, las prioridades de inversión, los trámites, los usos del suelo y los programas de apoyo local.
            p.mb-0 #[b Caso práctico:] una alcaldía que abre un centro de emprendimiento y otorga descuentos temporales en el impuesto de industria y comercio atrae nuevos negocios a una zona concreta.

    //- Caja #FED9FF de 708x170 (col-7) y la ilustración de 292x229 a la derecha (col-3).
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-3.p-4.h-100.d-flex.align-items-center(data-aos="fade-right")
          p.mb-0 Los tres niveles se complementan y conviene revisarlos en conjunto. El nacional aporta los recursos, el departamental señala hacia dónde se orienta la apuesta productiva y el municipal define las condiciones del lugar exacto donde se instalará el negocio. Un proyecto gana viabilidad cuando encaja con los tres.
      .col-lg-4
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t2/ilus-1.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Los contenidos que siguen avanzan de lo general a lo particular. Comienzan por las políticas y los instrumentos que apoyan al emprendimiento en Colombia, continúan con la caracterización de una zona y los tipos de empresa que la conforman, examinan los proyectos de desarrollo regional que orientan la inversión y terminan con las fuentes públicas que permiten sustentar cada afirmación con datos verificables.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Políticas de apoyo al emprendimiento

    .row.mt-4
      .col-lg-9
        p(data-aos="fade-right") La Ley 1014 de 2006, de fomento a la cultura del emprendimiento, es el principal instrumento normativo del ecosistema emprendedor colombiano. Establece la obligación de incorporar la formación en emprendimiento en los establecimientos de educación formal de todos los niveles, incluido el Servicio Nacional de Aprendizaje, y crea la Red Nacional para el Emprendimiento como instancia de coordinación entre entidades públicas y privadas (Congreso de la República de Colombia, 2006).

        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t2/ic-2.svg" style="width: 84px")
          .col
            p.mb-0 Alrededor de esa norma se ha construido un conjunto de instrumentos que ofrecen financiación, acompañamiento técnico y conexión con mercados. Para quien diagnostica su entorno, cada instrumento representa una oportunidad concreta siempre que su idea de negocio cumpla las condiciones de acceso. Los principales son los siguientes:
      .col-lg-3.mt-4.mt-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-4.png").w-100

    .row.justify-content-center.mt-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-4 r-20")
          div(titulo="Ley 1014 de 2006")
            p.mb-0 Norma marco que impulsa la cultura del emprendimiento en el sistema educativo y articula a las entidades del ecosistema. Fija el deber de formar ciudadanos con competencias de gestión empresarial y actitud proactiva hacia la creación de valor.
          div(titulo="Fondo Emprender")
            p.mb-0 Instrumento financiero del SENA creado por el artículo 40 de la Ley 789 de 2002 (Congreso de la República de Colombia, 2002). Otorga capital semilla no reembolsable a proyectos de aprendices y egresados mediante convocatorias públicas, condicionado al cumplimiento de las metas del plan de negocio.
          div(titulo="iNNpulsa Colombia")
            p.mb-0 Entidad adscrita al Ministerio de Comercio, Industria y Turismo que promueve el emprendimiento de alto impacto. Ofrece mentoría, recursos y conexión con inversionistas a través de programas dirigidos a proyectos con potencial de crecimiento acelerado.
          div(titulo="Centros de desarrollo empresarial")
            p.mb-0 Puntos de asesoría del Ministerio de Comercio que acompañan la formulación de planes de negocio, la formalización y el acceso a mercados, con atención gratuita y presencia en distintas regiones del país.
          div(titulo="Cámaras de Comercio")
            p.mb-0 Entidades que administran el registro mercantil y prestan servicios de capacitación, ruedas de negocio e informes de coyuntura económica regional, útiles tanto para formalizar la empresa como para diagnosticar el tejido empresarial local.

    p.mt-4(data-aos="fade-right") Los cinco instrumentos no compiten entre sí: cada uno atiende un momento distinto del proyecto. La Ley 1014 crea el marco que los sostiene, el Fondo Emprender e iNNpulsa aportan los recursos, los centros de desarrollo empresarial acompañan la formulación y las cámaras de comercio abren la puerta al mercado. Identificar en qué etapa se encuentra la idea de negocio facilita acudir al instrumento que corresponde y no al más conocido.

    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t2/cita-1.svg")
          p.mb-0
            b Los recursos del Fondo Emprender provienen del aporte que las empresas hacen al SENA sobre su nómina. Postularse no es solicitar un favor: es acceder a un instrumento público diseñado para convertir ideas diagnosticadas con rigor en empresas formales.

    p.mt-4(data-aos="fade-right") Ningún instrumento se otorga por la sola intención de emprender. Las convocatorias piden describir con datos el lugar donde operará el proyecto, y esa descripción se ordena mejor cuando se plantea como una serie de preguntas. Estas cinco reúnen lo que revisa un evaluador y lo que conviene averiguar antes de invertir:

    //- Cinco tarjetas #FED9FF de 188x290 con r=10 y su icono de 84.
    .row.justify-content-center.mt-4(data-aos="fade-up")
      .col-6.col-md-4.col-lg.mb-4.mb-lg-0
        .bg-3.r-10.p-3.h-100.text-center
          figure.mb-3
            img(src="@/assets/curso/temas/t2/fue-1.svg" style="width: 84px").m-auto
          h5 1. Población
          p.mb-0 ¿Cuánta población vive en la zona y cómo está compuesta por edades y por ubicación?
      .col-6.col-md-4.col-lg.mb-4.mb-lg-0
        .bg-3.r-10.p-3.h-100.text-center
          figure.mb-3
            img(src="@/assets/curso/temas/t2/fue-2.svg" style="width: 84px").m-auto
          h5 2. Ocupación
          p.mb-0 ¿De qué trabaja esa población y qué nivel de ingresos percibe en promedio?
      .col-6.col-md-4.col-lg.mb-4.mb-lg-0
        .bg-3.r-10.p-3.h-100.text-center
          figure.mb-3
            img(src="@/assets/curso/temas/t2/fue-3.svg" style="width: 84px").m-auto
          h5 3. Actividades productivas
          p.mb-0 ¿Qué actividades económicas predominan hoy en el territorio y cuáles están creciendo?
      .col-6.col-md-4.col-lg.mb-4.mb-lg-0
        .bg-3.r-10.p-3.h-100.text-center
          figure.mb-3
            img(src="@/assets/curso/temas/t2/fue-4.svg" style="width: 84px").m-auto
          h5 4. Servicios
          p.mb-0 ¿Con qué vías, conectividad y servicios públicos cuenta la zona para operar un negocio?
      .col-6.col-md-4.col-lg
        .bg-3.r-10.p-3.h-100.text-center
          figure.mb-3
            img(src="@/assets/curso/temas/t2/fue-5.svg" style="width: 84px").m-auto
          h5 5. Necesidades
          p.mb-0 ¿Qué necesidades de la comunidad siguen sin resolverse y podrían originar una idea de negocio?

    p.mt-4(data-aos="fade-right") Las cinco preguntas no se responden con impresiones, sino con cifras y observación directa. Juntas dibujan el perfil de un territorio: quién vive allí, de qué vive, qué produce, con qué cuenta y qué le hace falta. Ese perfil es el que sustenta cualquier postulación.

    p(data-aos="fade-right") Ese ejercicio tiene nombre propio: se denomina caracterización zonal y consiste en reunir información económica, social y productiva de una zona delimitada. Conocer su método hace posible reemplazar las afirmaciones generales sobre el mercado por datos comprobables del lugar donde se instalará la idea de negocio.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Caracterización zonal

    //- Foto de 396x298 (col-4) y la caja #F9FBD8 de 812x177 con r=10 (col-8).
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/foto-3.png").w-100
      .col-lg-8
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 La caracterización zonal es el proceso mediante el cual se identifican y describen las condiciones económicas, sociales, culturales y productivas de un territorio determinado: una zona, un municipio, una vereda o un barrio, con el fin de comprender el contexto en el que una empresa opera o podría operar. Constituye el insumo básico del diagnóstico empresarial y de la identificación de ideas con impacto real en la comunidad.

        p.mt-4.mb-0(data-aos="fade-left") Su valor práctico radica en la escala. Los indicadores nacionales describen promedios que rara vez coinciden con la realidad de un municipio concreto; la caracterización zonal desciende al nivel donde el emprendedor efectivamente compite, compra insumos y contrata personal. Una caracterización completa incluye, como mínimo, los siguientes elementos:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Análisis demográfico")
            .col-12
              p.mb-0 Tamaño de la población, estructura de edades, nivel educativo y tasas de empleo. Estos datos delimitan el mercado potencial, la mano de obra disponible y la capacidad de compra de los hogares del territorio.
              p.mb-0 #[b En la práctica:] una zona con población joven y formación técnica sostiene mejor un negocio de servicios digitales que uno de cuidado geriátrico.
          .row(numero="2" titulo="Actividades económicas predominantes")
            .col-12
              p.mb-0 Identificación de los sectores que concentran la producción y el empleo de la zona, ya sean agricultura, comercio, industria, servicios o turismo, con el peso relativo de cada uno.
              p.mb-0 #[b En la práctica:] un municipio cuyo empleo depende en buena medida del café abre oportunidades en insumos, transporte y transformación del grano.
          .row(numero="3" titulo="Necesidades insatisfechas")
            .col-12
              p.mb-0 Demandas de la comunidad que ni el mercado ni el Estado atienden de manera suficiente. Constituyen la fuente más frecuente de ideas con impacto verificable y se detectan mediante observación directa y conversación con los habitantes.
              p.mb-0 #[b En la práctica:] la ausencia de un servicio de mensajería local puede originar un negocio de reparto en bicicleta.
          .row(numero="4" titulo="Recursos disponibles")
            .col-12
              p.mb-0 Inventario de los recursos naturales, productivos y humanos con que cuenta la zona, incluidos los que permanecen subutilizados y podrían combinarse de manera novedosa sin grandes inversiones.
              p.mb-0 #[b En la práctica:] un lote comunal sin uso y un grupo de personas con experiencia en repostería pueden dar origen a una panadería asociativa.
          .row(numero="5" titulo="Estado de la infraestructura")
            .col-12
              p.mb-0 Condiciones de la red vial, del servicio de energía y de la conectividad digital. Estos factores determinan los costos logísticos, la viabilidad de los canales de venta en línea y el alcance geográfico que el proyecto puede sostener.
              p.mb-0 #[b En la práctica:] sin conectividad estable, un modelo basado en pedidos por internet no resulta sostenible.
          .row(numero="6" titulo="Tejido empresarial existente")
            .col-12
              p.mb-0 Número y tamaño de las empresas registradas, sectores predominantes y cadenas productivas activas. Esta información revela con quién se competirá, con quién se podrá encadenar y qué vacíos del mercado permanecen sin atender.
              p.mb-0 #[b En la práctica:] la falta de proveedores de empaques en una zona agroindustrial señala un nicho por ocupar.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/ic-3.svg" style="width: 84px")
      .col
        p.mb-0 Los seis elementos se leen en conjunto y no por separado. Una necesidad insatisfecha sin infraestructura que permita atenderla no constituye una oportunidad, y un recurso disponible sin demanda que lo valore tampoco. La caracterización adquiere sentido cuando las piezas se cruzan y revelan un espacio de mercado atendible con los recursos del territorio.

    p.mt-4(data-aos="fade-right") Caracterizado el territorio, conviene precisar cómo se clasifican las empresas que lo componen, pues de su tamaño depende el tipo de relación comercial que un nuevo proyecto puede establecer con ellas.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Tipología empresarial en Colombia

    .row.mt-4
      .col-lg-9
        //- La pestaña de 25x8 en (185,4985) marca este bloque como `.cajon`.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 La legislación colombiana clasifica las empresas según su tamaño desde la Ley 590 de 2000, que empleaba como criterio el número de trabajadores y el valor de los activos (Congreso de la República de Colombia, 2000). El Decreto 957 de 2019 sustituyó ese criterio por el de los ingresos por actividades ordinarias anuales, expresados en unidades de valor tributario (UVT) y diferenciados por sector económico (Presidencia de la República de Colombia, 2019).
      .col-lg-3.mt-4.mt-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t2/foto-6.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Esta clasificación no es un dato estadístico secundario: determina el acceso a líneas de crédito, a beneficios tributarios y a programas de apoyo, y ayuda a anticipar el papel que la nueva empresa podría desempeñar en el territorio, ya sea como proveedora de una mediana empresa consolidada, como competidora de microempresas similares o como articuladora de varias unidades productivas dispersas. La siguiente tabla presenta los rangos vigentes por sector:

    //- Esta tabla SÍ lleva nota: el XD dibuja la banda #E8E8E8 de 1020x55 bajo las filas.
    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span  Clasificación del tamaño empresarial según los ingresos anuales en UVT
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            caption.mb-0 Nota. La UVT es la unidad de valor tributario, cuyo valor fija cada año la Dirección de Impuestos y Aduanas Nacionales. Los rangos en UVT permanecen fijos; su equivalencia en pesos cambia con el valor anual de la unidad. Elaborada con base en el Decreto 957 de 2019.
            thead
              tr
                th Tamaño
                th Sector manufacturero
                th Sector servicios
                th Sector comercio
            tbody
              tr
                td Microempresa
                td Hasta 23.563
                td Hasta 32.988
                td Hasta 44.769
              tr
                td Pequeña empresa
                td Más de 23.563 y hasta 204.995
                td Más de 32.988 y hasta 131.951
                td Más de 44.769 y hasta 431.196
              tr
                td Mediana empresa
                td Más de 204.995 y hasta 1.736.565
                td Más de 131.951 y hasta 483.034
                td Más de 431.196 y hasta 2.160.692
              tr
                td Gran empresa
                td Más de 1.736.565
                td Más de 483.034
                td Más de 2.160.692

    p.mt-4(data-aos="fade-right") La tabla muestra que un mismo nivel de ingresos clasifica a una empresa de forma distinta según su sector: una firma de servicios con 40.000 UVT de ingresos anuales es pequeña empresa, mientras que un comercio con esos mismos ingresos sigue siendo microempresa. Por esa razón el diagnóstico debe identificar primero la actividad principal del proyecto.

    p.mt-4(data-aos="fade-right") Más allá de esa frontera legal, detrás de cada categoría hay una forma distinta de operar, de financiarse y de vender. La figura siguiente reúne los cuatro tamaños y describe, para cada uno, la escala de la operación, el acceso a financiación y el mercado que alcanza a atender:

    //- El XD rotula esta figura «Figura 2. Etapas de la intervención psicosocial», que es un
    //- título de otro curso; el `_DI.docx` da el correcto y es el que se usa.
    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span  Clasificación y características de las empresas según su tamaño
        figure.mb-0(data-aos="fade-up")
          img(src="@/assets/curso/temas/t2/figura-1.svg" alt="Los cuatro tamaños de empresa ordenados por escala: microempresa, pequeña, mediana y gran empresa, con la operación, el acceso a financiación y el mercado que atiende cada una.").w-100

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t2/ic-4.svg" style="width: 84px")
      .col
        p.mb-0 Los cuatro tamaños conviven en un mismo territorio sin competir en el mismo terreno. Identificar dónde se ubica el proyecto y quiénes son sus vecinos, orienta la decisión de si conviene competir con ellos, proveerles insumos o buscar una alianza.

    p.mt-4(data-aos="fade-right") Hasta aquí el diagnóstico sabe quién produce en el territorio y con qué escala. Queda por establecer qué está impulsando el propio territorio, y esa información se encuentra en los proyectos de desarrollo regional que los gobiernos departamentales y municipales definen en sus planes de desarrollo y en sus apuestas productivas. Esos proyectos señalan qué sectores contarán con respaldo público en los próximos años y, por lo tanto, dónde una idea de negocio encuentra terreno favorable.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Proyectos de desarrollo regional

    p.mt-4(data-aos="fade-right") Los planes de desarrollo departamental y municipal son los documentos donde los gobiernos locales establecen sus prioridades de inversión y sus estrategias para el período de gobierno. Para quien emprende, constituyen una fuente de información privilegiada sobre las apuestas productivas del territorio, los sectores que recibirán apoyo público y las alianzas que se proyectan entre lo público y lo privado.

    //- Foto de 614x335 y la franja #F0F49D con la caja blanca de 685x243 dentro.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/foto-5.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 A esos planes se suma la agenda de competitividad que cada departamento concierta a través de su comisión regional de competitividad. Estas instancias priorizan cadenas productivas específicas: el cacao y el café en el Tolima, el arroz y la ganadería en el Meta, el turismo y los servicios en los grandes centros urbanos. Alrededor de esas cadenas priorizadas se forman agrupaciones de empresas que comparten proveedores, conocimiento técnico y canales de comercialización. Ese entramado fortalece la competitividad de la región y abre espacio para nuevos negocios que presten servicios de apoyo a la cadena.

    p.mt-4(data-aos="fade-right") Bajo la denominación de proyectos de desarrollo regional caben iniciativas muy distintas entre sí, desde el mejoramiento de una vía terciaria hasta un programa de formación técnica. Reconocer sus tipos ayuda a identificar cuáles guardan relación directa con la idea de negocio que se está formulando:

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-3.r-10.p-4.h-100(data-aos="fade-right")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b Proyectos de infraestructura:] obras de vías, energía, acueducto o conectividad que reducen costos y amplían el alcance de los negocios locales.
            li
              i.far.fa-circle-dot
              | #[b Proyectos productivos:] iniciativas que fortalecen una cadena priorizada mediante asistencia técnica, maquinaria compartida o mejoramiento de la calidad.
            li
              i.far.fa-circle-dot
              | #[b Proyectos de innovación:] apoyos para incorporar tecnología, desarrollar nuevos productos o digitalizar procesos en las empresas del territorio.
            li
              i.far.fa-circle-dot
              | #[b Proyectos sociales:] programas de formación, empleo o inclusión que amplían las capacidades de la población y su capacidad de compra.
            li.mb-0
              i.far.fa-circle-dot
              | #[b Proyectos ambientales:] iniciativas de energías limpias, manejo de residuos o restauración que abren mercados para negocios sostenibles.
      .col-lg-4
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t2/ilus-2.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Los cinco tipos no avanzan por separado. Una vía nueva vuelve rentable un proyecto productivo, y un programa de formación provee el personal que ese proyecto necesita. Por esa razón conviene revisarlos en conjunto y no de manera aislada.

    p(data-aos="fade-right") Estos proyectos no se conocen por rumor ni por anuncio de prensa. Cada uno queda registrado en un documento público, con plazos, recursos asignados y responsables, y allí es donde el emprendedor debe buscarlos. Cuatro fuentes concentran esa información en Colombia y conviene saber qué ofrece cada una:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="A" titulo="Plan de desarrollo municipal")
            .col-12
              p.mb-0 Documento que fija las prioridades de inversión de la alcaldía para el período de gobierno, con metas y presupuesto por sector.
              p.mb-0 #[b Caso de uso:] quien planea abrir un centro de acopio revisa allí si el municipio proyecta mejorar la vía que conecta las veredas productoras.
          .row(numero="B" titulo="Plan de desarrollo departamental")
            .col-12
              p.mb-0 Define las apuestas de la gobernación y articula recursos de varios municipios en programas de mayor escala.
              p.mb-0 #[b Caso de uso:] una asociación de productores identifica en él el programa de asistencia técnica al que puede vincularse para mejorar la calidad y la presentación de su producto.
          .row(numero="C" titulo="Agenda departamental de competitividad")
            .col-12
              p.mb-0 Acuerdo entre el sector público, las empresas y la academia que prioriza las cadenas productivas del departamento.
              p.mb-0 #[b Caso de uso:] un emprendedor confirma allí que su sector está priorizado y usa ese dato para sustentar la pertinencia del proyecto ante un fondo de financiación.
          .row(numero="D" titulo="Banco de proyectos y regalías")
            .col-12
              p.mb-0 Registro de las iniciativas aprobadas o en trámite con recursos del Sistema General de Regalías.
              p.mb-0 #[b Caso de uso:] una empresa de servicios técnicos consulta las obras aprobadas en su municipio y anticipa la demanda de mantenimiento y suministro que generarán en los próximos años.

    p.mt-4(data-aos="fade-right") Las cuatro fuentes son públicas y gratuitas, y se consultan en los portales de la alcaldía, la gobernación y las entidades nacionales. Revisarlas antes de formular la idea evita proponer un negocio que compita con lo que el territorio ya decidió impulsar.

    p(data-aos="fade-right") Leer un plan de desarrollo con mirada empresarial no consiste en recorrerlo de principio a fin, sino en buscar en él una información precisa. Conviene rastrear los siguientes elementos:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-1.r-10.p-4(data-aos="fade-up")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Las cadenas productivas priorizadas por el departamento o el municipio.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Los programas de fomento empresarial con recursos asignados en el plan.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Las obras de infraestructura proyectadas y su efecto sobre los costos logísticos.
            li
              .lista-ol--cuadro__vineta
                span 4
              | Las alianzas público-privadas previstas para el sector de interés.
            li
              .lista-ol--cuadro__vineta
                span 5
              | Los indicadores de meta que el territorio se ha comprometido a alcanzar.

    p.mt-4(data-aos="fade-right") Los cinco elementos, leídos en conjunto, permiten responder una pregunta concreta. El territorio invierte en la dirección de la idea de negocio o lo hace en otra distinta, y de esa respuesta depende que el proyecto encuentre respaldo o deba abrirse camino por su cuenta.

    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t2/ic-5.svg")
          p.mb-0
            b Un proyecto de desarrollo regional con potencial emprendedor nace en la intersección entre una necesidad insatisfecha del territorio y la capacidad de construir una solución viable y sostenible. Esa intersección no aparece sola: se encuentra con método.

    p.mt-4(data-aos="fade-right") Los cinco elementos que se rastrean en un plan de desarrollo, igual que la caracterización de la zona y la tipología empresarial, exigen una misma condición para resultar útiles. Toda afirmación sobre el territorio debe poder comprobarse en un registro público y no en una impresión personal. Existen hoy fuentes oficiales y herramientas gratuitas para obtener esos datos y sustentar cada conclusión del diagnóstico.

    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Fuentes y herramientas de consulta

    p.mt-4(data-aos="fade-right") La lectura del contexto productivo regional exige información confiable y actualizada. La transformación digital ha puesto a disposición de cualquier emprendedor un conjunto de fuentes y herramientas gratuitas con las que se realizan diagnósticos con mayor rapidez y precisión de la que era posible hace una década.

    .row.mt-4
      .col-lg-9
        .bg-1.p-4.h-100.d-flex.align-items-center(data-aos="fade-right")
          p.mb-0 Estas herramientas no sustituyen el trabajo de campo. La observación directa, las entrevistas y el contacto con la comunidad siguen siendo insustituibles para comprender por qué ocurre lo que los datos muestran. Lo que las fuentes digitales aportan es escala, comparabilidad y respaldo documental para las conclusiones del diagnóstico: la encuesta de micronegocios del Departamento Administrativo Nacional de Estadística (DANE, 2023) permite dimensionar el segmento informal de un territorio, y los informes de Confecámaras (2023) muestran cuántas empresas se crean y se cierran cada año en cada región. La tabla siguiente reúne las principales fuentes disponibles:
      .col-lg-3.mt-4.mt-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t2/ilus-4.png").w-100.h-100.object-fit-cover

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span  Fuentes de información para el diagnóstico del entorno
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr
                th Fuente
                th Uso en el diagnóstico
                th Condición de acceso
            tbody
              tr
                td Departamento Administrativo Nacional de Estadística (DANE)
                td Estadísticas de empleo, ingreso, micronegocios y directorio de empresas por departamento y municipio.
                td Gratuito
              tr
                td Registro Único Empresarial y Social (RUES)
                td Número, tamaño, sector y antigüedad de las empresas registradas en cada municipio.
                td Gratuito en consulta básica
              tr
                td Sistema de Información de Precios del Sector Agropecuario (SIPSA)
                td Precios semanales de productos agropecuarios en los mercados mayoristas del país.
                td Gratuito
              tr
                td Google Trends
                td Evolución del volumen de búsquedas de un producto o servicio por región y período.
                td Gratuito
              tr
                td Administrador de anuncios de Meta
                td Estimación del tamaño del público potencial por perfil demográfico y geográfico.
                td Gratuito sin publicar anuncios
              tr
                td Tableros colaborativos en línea
                td Construcción conjunta de matrices DOFA, PESTEL y mapas de diagnóstico.
                td Versión gratuita con funciones limitadas

    p.mt-4(data-aos="fade-right") El uso combinado de estas fuentes da solidez al diagnóstico. Un dato de demanda observado en el trabajo de campo puede contrastarse con la tendencia de búsquedas en línea y con el número de competidores registrados en el municipio, de modo que ninguna conclusión dependa de una sola consulta.

    p(data-aos="fade-right") No todas las fuentes ofrecen la misma garantía. Antes de incorporar un dato al diagnóstico conviene revisar de dónde proviene, cuándo se produjo y a qué territorio corresponde, porque una cifra nacional del año anterior puede conducir a una conclusión equivocada sobre un municipio concreto. Cinco criterios ayudan a valorar cualquier fuente antes de usarla:

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-3.r-10.p-4.h-100(data-aos="fade-right")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b Vigencia:] fecha de publicación y período que cubre el dato, ya que un indicador desactualizado distorsiona cualquier conclusión.
            li
              i.far.fa-circle-dot
              | #[b Cobertura territorial:] nivel geográfico al que corresponde la información, sea nacional, departamental, municipal o de barrio.
            li
              i.far.fa-circle-dot
              | #[b Respaldo institucional:] entidad que produce el dato y responde por su calidad, preferiblemente oficial, gremial o académica.
            li
              i.far.fa-circle-dot
              | #[b Transparencia metodológica:] descripción pública de cómo se recogió la información y qué muestra o universo se utilizó.
            li.mb-0
              i.far.fa-circle-dot
              | #[b Uniformidad de la medición:] el dato se obtiene con criterios estables, de modo que las cifras de distintos años resultan comparables.
      .col-lg-4
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t2/ilus-3.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Una fuente que cumple los cinco criterios da respaldo para sostener una afirmación ante un evaluador, un banco o un aliado. Cuando alguno de ellos falla, el dato no se descarta, pero se usa señalando su limitación.

    //- Caja #F9FBD8 de 916x142 (col-9) y la foto de 292x264 a la derecha (col-3).
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        //- La pestaña de 25x8 en (185,11402) marca este bloque como `.cajon`.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Consultar no basta si el hallazgo se pierde. Conviene registrar cada dato con su fuente, su fecha de consulta y el enlace donde se obtuvo, de modo que cualquier persona pueda verificarlo más adelante. Ese registro se convierte después en el respaldo documental del proyecto y evita repetir búsquedas ya realizadas cuando llegue el momento de postularse a una convocatoria.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t2/foto-7.png").w-100.h-100.object-fit-cover

    p.mt-4.mb-0(data-aos="fade-right") Con las fuentes identificadas y los datos verificados, el territorio queda descrito. Falta comprender a quienes actúan en él. Las empresas de una misma zona no responden de igual manera ante las mismas condiciones, y esa diferencia de conducta se estudia mediante el diagnóstico del comportamiento empresarial, que examina las disposiciones de quien emprende y las técnicas para documentarlas con rigor.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
