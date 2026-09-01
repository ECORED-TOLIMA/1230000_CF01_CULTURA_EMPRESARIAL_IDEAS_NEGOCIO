<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagnóstico del comportamiento empresarial

    .row.mt-4
      .col-lg-9
        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t3/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 Las empresas de un mismo territorio enfrentan condiciones parecidas y, aun así, obtienen resultados distintos. Esa diferencia se explica por la manera como cada una interpreta la información disponible, acepta riesgos y administra sus recursos. Estudiar esas decisiones ayuda a comprender por qué unas iniciativas se consolidan y otras desaparecen en los primeros años de operación.

        //- La pestaña de 25x8 en (185,439) marca este bloque como `.cajon`.
        .cajon.color-1.p-4.mt-4(data-aos="fade-right")
          p.mb-0 Ese conjunto de decisiones y maneras de actuar constituye el comportamiento empresarial. No es un rasgo fijo de las personas ni un misterio del carácter, sino una forma de percibir oportunidades, asumir riesgos y administrar recursos que deja rastro en prácticas concretas y, por esa razón, puede describirse, compararse y aprenderse.
      .col-lg-3.mt-4.mt-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t3/foto-1.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Observar ese comportamiento exige saber en qué fijarse. Cinco rasgos concentran la atención de cualquier diagnóstico, porque en ellos se refleja la manera de decidir de una organización:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.p-4(data-aos="fade-up")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b Lectura del entorno:] capacidad de detectar cambios en el mercado antes que la competencia y de traducirlos en decisiones de producto, precio o canal.
            li
              i.far.fa-circle-dot
              | #[b Manejo del riesgo:] disposición a invertir con información incompleta, calculando las pérdidas posibles y fijando límites antes de comprometer recursos propios o ajenos.
            li
              i.far.fa-circle-dot
              | #[b Organización de recursos:] forma de combinar dinero, personal, tiempo y conocimiento técnico para sostener la operación sin depender de un único proveedor o cliente.
            li
              i.far.fa-circle-dot
              | #[b Relación con otros:] manera de vincularse con proveedores, clientes, competidores e instituciones, lo que determina el acceso a información, crédito y nuevos mercados.
            li.mb-0
              i.far.fa-circle-dot
              | #[b Persistencia:] constancia para sostener el proyecto cuando los resultados tardan, ajustando la operación en lugar de abandonar la idea ante la primera dificultad.

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t3/ilus-1.png").w-100.h-100.object-fit-cover
      .col-lg-9
        p(data-aos="fade-left") Ningún rasgo explica por sí solo el resultado de una empresa. Una buena lectura del entorno sin manejo del riesgo produce ideas que nunca se concretan, y la persistencia sin organización de recursos agota al emprendedor antes de que el negocio madure.

        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t3/ic-2.svg" style="width: 84px")
          .col
            p.mb-0 El diagnóstico del comportamiento empresarial combina dos planos. El primero reúne las disposiciones que orientan la acción de quien emprende, esto es, su manera de leer oportunidades, los valores con que decide y el perfil que lo caracteriza en el contexto colombiano. El segundo corresponde a las técnicas y protocolos que permiten recoger evidencia sobre esas conductas sin depender de impresiones personales. Los contenidos avanzan del primer plano al segundo, en este orden:

    //- Cuatro tarjetas pegadas de 299/315/315/301 con el círculo de 98 dentro.
    .tarjeta--container.row.mt-4(data-aos="fade-up")
      .col-md.tarjeta.bg-1.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/dim-1.svg" style="width: 98px").m-auto
        h4.text-center Cultura emprendedora
        p.mb-0 Disposición y hábitos de pensamiento con los que una persona detecta oportunidades donde otras ven rutina. Se aborda en primer lugar porque explica de dónde nace la iniciativa y porque, al desarrollarse con la práctica, señala qué puede fortalecerse en un territorio.
      .col-md.tarjeta.bg-2.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/dim-2.svg" style="width: 98px").m-auto
        h4.text-center Valores y ética empresarial
        p.mb-0 Principios que orientan las decisiones y sostienen la confianza de clientes, proveedores y comunidad. Determinan cómo se compite y cómo se cumplen los acuerdos, dos aspectos que el mercado registra con rapidez y que explican por qué algunas empresas conservan sus relaciones comerciales durante años.
      .col-md.tarjeta.bg-3.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/dim-3.svg" style="width: 98px").m-auto
        h4.text-center Perfil del emprendedor colombiano
        p.mb-0 Rasgos, motivaciones y condiciones que caracterizan a quienes crean empresa en el país. Su estudio evita trasladar al territorio supuestos tomados de otras realidades y ayuda a interpretar con acierto lo que se observa en el tejido productivo de una zona concreta.
      .col-md.tarjeta.bg-5.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/dim-4.svg" style="width: 98px").m-auto
        h4.text-center Técnicas y protocolos de diagnóstico
        p.mb-0 Instrumentos que permiten recoger evidencia sobre el comportamiento empresarial y documentarlo con rigor. Cierran el recorrido porque convierten en información verificable lo que los tres contenidos anteriores explican, y porque sin ellos las conclusiones dependerían por completo de la impresión de quien observa.

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/foto-2.png").w-100
      .col-lg-8
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 El recorrido avanza de la comprensión a la comprobación. Primero se identifican las disposiciones que explican la conducta emprendedora y después se aplican los instrumentos que la registran, de modo que cada afirmación del diagnóstico quede respaldada por evidencia y no por percepciones.

    p.mt-4(data-aos="fade-right") El punto de partida es la disposición que hace posible todo lo demás. Antes de hablar de valores, de perfiles o de instrumentos conviene precisar qué es la cultura emprendedora y por qué se considera una competencia que se aprende, y no un rasgo con el que se nace.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Cultura emprendedora

    p.mt-4(data-aos="fade-right") La cultura emprendedora reúne el conjunto de actitudes, valores, competencias cognitivas y hábitos de pensamiento que permiten identificar oportunidades, asumir riesgos calculados y transformar ideas en proyectos de valor. No se trata de una característica innata reservada a personalidades excepcionales, sino de una competencia que se desarrolla mediante la formación, la experiencia y la reflexión crítica sobre el entorno.

    //- Foto de 506x323 y la franja #F0F49D de 1020x323 con el icono de 80 dentro del texto.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/video-1.png')})` }")
      .bloque-texto-g__texto.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/cita-1.svg" style="width: 80px")
        p.mb-0 El término tiene dos caras que conviene distinguir. En el plano personal, la cultura emprendedora describe la manera en que alguien mira su entorno y responde ante lo que encuentra. En el plano colectivo, nombra el conjunto de creencias compartidas en una familia, un barrio o una región acerca de lo que significa crear algo propio, y esas creencias facilitan o frenan la decisión de intentarlo.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ic-3.svg" style="width: 84px")
      .col
        p.mb-0 Esa competencia tampoco se reserva a quien abre un negocio. Dentro de una empresa ya constituida se traduce en proponer mejoras, detectar desperdicios y asumir la responsabilidad de un resultado. Un técnico que rediseña el flujo de trabajo de un taller y una persona que monta su propia unidad productiva ejercen la misma competencia en escenarios distintos.

    p.mt-4(data-aos="fade-right") Esa precisión tiene una consecuencia práctica para el diagnóstico. Si la disposición emprendedora se aprende, también puede observarse, describirse y fortalecerse en un territorio. Se manifiesta en tres dimensiones:

    //- Tres tarjetas de 396x250 con el círculo de 150 montado sobre el borde superior.
    .row.mt-5
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-1-p.tarjeta--icono-arriba
          figure
            img(src="@/assets/curso/temas/t3/hab-1.svg")
          h4.text-center Dimensión cognitiva
          p.text-center.mb-0 Capacidad de percibir el entorno con curiosidad, buscar información pertinente y anticipar los cambios antes que los demás actores del sector.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-1-p.tarjeta--icono-arriba
          figure
            img(src="@/assets/curso/temas/t3/hab-2.svg")
          h4.text-center Dimensión emocional
          p.text-center.mb-0 Tolerancia a la incertidumbre, resiliencia ante los resultados adversos y confianza sostenida en las propias capacidades a lo largo del proyecto.
      .col-md-6.col-lg-4
        .tarjeta.bg-1-p.tarjeta--icono-arriba
          figure
            img(src="@/assets/curso/temas/t3/hab-3.svg")
          h4.text-center Dimensión conductual
          p.text-center.mb-0 Disposición a actuar, a probar ideas en pequeña escala y a ajustar el rumbo con la retroalimentación de clientes reales.

    p.mt-4(data-aos="fade-right") Las tres dimensiones se sostienen mutuamente: sin lectura del entorno la acción se vuelve improvisación, sin tolerancia a la incertidumbre la lectura no llega a convertirse en decisión y sin disposición a actuar el análisis se queda en diagnóstico. El equilibrio entre ellas es lo que distingue una cultura emprendedora consolidada.

    p(data-aos="fade-right") El concepto de mentalidad de crecimiento, desarrollado por la psicóloga Carol Dweck, ofrece un marco útil para comprender esta diferencia. Las personas con mentalidad de crecimiento consideran que sus capacidades se desarrollan mediante el esfuerzo, la estrategia y la retroalimentación; quienes sostienen una mentalidad fija creen que sus talentos están dados de antemano (Dweck, 2006). La formación en emprendimiento se orienta, precisamente, a cultivar la primera.

    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t3/ic-7.svg")
          p.mb-0
            b Si la disposición emprendedora fuera un rasgo innato, la formación no tendría sentido. La evidencia indica lo contrario, pues se trata de una competencia que se adquiere, y esa es la premisa sobre la que se construye toda formación en emprendimiento.

    p.mt-4(data-aos="fade-right") La cultura emprendedora se desarrolla con la práctica y no con la lectura de definiciones. Cuatro hábitos la fortalecen y pueden incorporarse a la rutina de trabajo sin importar el tamaño del negocio ni el sector en que opere:

    .row.justify-content-center.mt-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-4 r-20")
          div(titulo="Formación continua")
            p.mb-0 Actualizar de manera permanente los conocimientos técnicos y de gestión. En Colombia, la oferta gratuita del SENA y de las cámaras de comercio facilita avanzar en costos, mercadeo o normatividad tributaria sin frenar la operación diaria del negocio.
          div(titulo="Experimentación a pequeña escala")
            p.mb-0 Probar la idea con una inversión mínima antes de comprometer todos los recursos. Vender el producto en una feria local o mediante un catálogo digital da la medida de la demanda real y corregir el rumbo a tiempo.
          div(titulo="Aprendizaje del error")
            p.mb-0 Revisar lo que no funcionó y registrar la causa, en lugar de atribuirla a la mala suerte. Ese registro convierte una pérdida en información útil para las decisiones que vienen y evita repetir el mismo tropiezo.
          div(titulo="Trabajo en red")
            p.mb-0 Sostener vínculos con otros emprendedores, proveedores y clientes. Las asociaciones de comerciantes, los mercados campesinos y los grupos gremiales facilitan compras conjuntas, referidos y acceso a información que no circula de manera pública.

    //- La pestaña de 25x8 en (185,4476) marca este bloque como `.cajon`.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .cajon.color-1.p-4.h-100.d-flex.align-items-center(data-aos="fade-right")
          p.mb-0 Los cuatro hábitos se refuerzan entre sí. Quien experimenta necesita registrar lo aprendido, y quien participa en una red obtiene la información que hace posible la siguiente prueba. Sostenerlos en el tiempo es lo que transforma una disposición en competencia.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t3/foto-3.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Esos hábitos encuentran apoyo en el ecosistema emprendedor colombiano, que ofrece acompañamiento gratuito o de bajo costo en la mayoría de los departamentos. Saber qué presta cada actor evita empezar de cero y acorta el camino hacia la formalización:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="A" titulo="Centros de formación del SENA")
            .col-12
              p.mb-0 Brindan formación técnica y tecnológica, asesoría en la formulación de proyectos y acceso al Fondo Emprender. Constituyen el punto de entrada más frecuente para quien inicia sin capital propio ni experiencia previa en gestión.
          .row(numero="B" titulo="Cámaras de comercio")
            .col-12
              p.mb-0 Acompañan la formalización y el registro mercantil, y orientan la elaboración del plan de negocio. Ofrecen además ruedas de negocio, informes de coyuntura regional y programas de fortalecimiento para las empresas ya constituidas.
          .row(numero="C" titulo="Unidades de emprendimiento universitarias")
            .col-12
              p.mb-0 Apoyan la maduración de ideas mediante mentoría técnica, prototipado y contacto con grupos de investigación. Resultan especialmente útiles cuando el proyecto incorpora un componente tecnológico o requiere validación científica antes de salir al mercado.
          .row(numero="D" titulo="Redes y ferias locales")
            .col-12
              p.mb-0 Espacios donde el emprendedor muestra su producto, observa reacciones y encuentra aliados. Los mercados campesinos, las ferias artesanales y los encuentros gremiales funcionan como laboratorio de mercado a muy bajo costo.

    p.mt-4(data-aos="fade-right") Ningún actor sustituye a los demás. El SENA aporta formación y capital semilla, las cámaras acompañan la formalización, la universidad valida el componente técnico y las ferias ponen a prueba el producto. Recorrer esa ruta completa sustenta la cultura emprendedora en evidencia y no en intuición.

    p.mt-4(data-aos="fade-right") Con todo, la disposición a emprender no basta por sí sola. La manera de decidir pesa tanto como la decisión, porque un negocio construido sobre acuerdos incumplidos o información oculta pierde la confianza que necesita para sostenerse. Los valores y la ética empresarial definen ese modo de actuar y explican por qué la reputación termina siendo el activo más frágil de una organización.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Valores y ética empresarial

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/foto-4.png").w-100
      .col-lg-8
        .bg-1.r-10.p-4(data-aos="fade-left")
          p.mb-0 El emprendimiento éticamente responsable crea valor no solo para quien lo impulsa, sino también para la comunidad en la que opera. Los valores empresariales, entre ellos la honestidad, la transparencia, la responsabilidad social, el respeto por el medio ambiente y el compromiso con los colaboradores, no son declaraciones de intención. Constituyen el fundamento de la reputación, que suele ser el activo más valioso y, a la vez, el más frágil de cualquier organización.

        .row.align-items-start.mt-4(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t3/ic-6.svg" style="width: 84px")
          .col
            p.mb-0 En un mercado donde la información circula con rapidez y los consumidores evalúan el impacto de sus decisiones de compra, una empresa con prácticas éticas sólidas obtiene una ventaja competitiva verificable. Esa exigencia tiene además un plano normativo, porque la responsabilidad social pasó de ser una práctica voluntaria para convertirse en un requisito frecuente de clientes, proveedores y entidades reguladoras. Los marcos de referencia más utilizados son los siguientes:

    .tarjeta--container.row.mt-4(data-aos="fade-up")
      .col-md.tarjeta.bg-1.p-4
        h4.text-center Norma ISO 26000
        p.mb-0 Guía internacional sobre responsabilidad social que orienta a las organizaciones en materia de derechos humanos, prácticas laborales, medio ambiente y participación en el desarrollo de la comunidad. No es certificable, pues opera como marco de conducta y de autoevaluación (Organización Internacional de Normalización, 2010).
      .col-md.tarjeta.bg-2.p-4
        h4.text-center Global Reporting Initiative
        p.mb-0 Estándar que establece cómo informar los impactos económicos, ambientales y sociales de una organización. Su valor está en la posibilidad de comparación, ya que permite contrastar el desempeño de una empresa con el de otras del sector y con sus propios resultados anteriores (Global Reporting Initiative, 2021).
      .col-md.tarjeta.bg-3.p-4
        h4.text-center Objetivos de Desarrollo Sostenible
        p.mb-0 Agenda adoptada por las Naciones Unidas en 2015, con diecisiete objetivos y metas concretas al año 2030. Alinear la propuesta de valor del proyecto con uno o varios de ellos facilita el acceso a financiadores de impacto (Naciones Unidas, 2015).

    p.mt-4(data-aos="fade-right") Los tres marcos operan en niveles distintos y complementarios. El primero orienta la conducta, el segundo estandariza la manera de informarla y el tercero conecta el proyecto con una agenda compartida. Incorporarlos desde el diseño inicial resulta menos costoso que ajustarlos después, cuando la empresa ya opera.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ic-4.svg" style="width: 84px")
      .col
        p.mb-0 Esos marcos aportan el lenguaje, pero la ética se juega en decisiones pequeñas y repetidas. En un negocio que apenas comienza, cinco prácticas concentran la mayor parte de esas decisiones y determinan la confianza que el entorno le otorga:

    //- Tres tarjetas de 327x440 con el círculo dentro, sobre la banda decorativa.
    .row.justify-content-center.mt-4(data-aos="fade-up")
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-1-p.r-20.p-4.h-100
          h4.text-center Cumplimiento de acuerdos
          p.text-center.mb-0 Pagar a los proveedores en los plazos convenidos y entregar en la fecha prometida. En las redes de pequeños comerciantes, la palabra cumplida define quién obtiene crédito de mercancía y quién debe pagar siempre de contado.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-1-p.r-20.p-4.h-100
          h4.text-center Información veraz al cliente
          p.text-center.mb-0 Describir el producto sin exagerar sus beneficios, informar su composición y respetar lo anunciado en la publicidad. Un etiquetado claro y una garantía honrada evitan sanciones y sostienen la recompra en el mercado local.
      .col-md-6.col-lg-4
        .tarjeta.bg-1-p.r-20.p-4.h-100
          h4.text-center Trabajo digno
          p.text-center.mb-0 Vincular al personal con las condiciones que exige la ley, afiliarlo a seguridad social y pagar de manera puntual. La formalización laboral, además de una obligación, reduce la rotación y protege el conocimiento acumulado del negocio.

    p.mt-4(data-aos="fade-right") Estas prácticas no dependen del tamaño de la empresa ni de su antigüedad. Una tienda de barrio y una compañía exportadora las enfrentan por igual, y en ambas el incumplimiento se paga con pérdida de clientes, de proveedores o de acceso a financiación.

    p(data-aos="fade-right") En la práctica, los valores rara vez se ponen a prueba en situaciones extremas. Aparecen en dilemas cotidianos, donde la opción rápida y la correcta no coinciden. Anticiparlos facilita la decisión cuando el caso se presenta:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.p-4(data-aos="fade-up")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b Vender sin factura para bajar el precio final:] deja al negocio sin soporte contable, sin historial para acceder a crédito y expuesto a sanciones que superan el margen ganado.
            li
              i.far.fa-circle-dot
              | #[b Contratar por prestación de servicios a quien cumple horario y funciones de empleado:] traslada el riesgo a la persona y expone a la empresa a reclamaciones laborales posteriores.
            li
              i.far.fa-circle-dot
              | #[b Reproducir el diseño de otro productor porque tiene demanda:] compromete la propiedad intelectual ajena y sustituye la construcción de una marca propia por una ventaja momentánea.
            li
              i.far.fa-circle-dot
              | #[b Prometer un plazo de entrega que la capacidad instalada no permite cumplir:] asegura la venta de hoy y destruye la confianza que sostiene las ventas siguientes.
            li.mb-0
              i.far.fa-circle-dot
              | #[b Omitir el origen de un insumo cuando el cliente pregunta:] convierte un dato verificable en un riesgo reputacional, porque la información termina por conocerse.

    p.mt-4(data-aos="fade-right") Ninguno de estos dilemas se resuelve improvisando en el momento. Definir con anticipación qué se acepta y qué no, y dejarlo por escrito, convierte los valores en criterios de decisión y no en buenas intenciones.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ic-5.svg" style="width: 84px")
      .col
        p.mb-0 Los valores explican cómo decide una empresa, pero no dicen quién está detrás de esas decisiones. En Colombia, buena parte de quienes crean empresa lo hacen por necesidad y no por haber identificado una oportunidad, y esa diferencia cambia por completo el diagnóstico. Caracterizar al emprendedor colombiano, sus rasgos, sus motivaciones y las condiciones en que trabaja, es el paso que orienta la interpretación de lo observado en el territorio.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Perfil del emprendedor colombiano

    p.mt-4(data-aos="fade-right") Colombia figura de manera sostenida entre los países con mayor actividad emprendedora temprana de América Latina, según las mediciones del Global Entrepreneurship Monitor. Sin embargo, esa actividad se concentra en emprendimientos impulsados por la necesidad más que por la oportunidad, es decir, en personas que crean empresa porque no encuentran empleo formal antes que porque identificaron un espacio de mercado (Global Entrepreneurship Monitor [GEM], 2023).

    //- Foto de 506x317 y la franja #F0F49D con el icono de 80 dentro del texto.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/video-2.png')})` }")
      .bloque-texto-g__texto.p-4
        figure.mb-3
          img(src="@/assets/curso/temas/t3/cita-2.svg" style="width: 80px")
        p.mb-0 Conviene precisar qué se entiende aquí por perfil. No se trata del retrato de una persona en particular, sino de la caracterización del conjunto de quienes emprenden en un territorio, obtenida al observar varios negocios y comparar lo que se encuentra en cada uno. Ese carácter agregado convierte al perfil en un insumo del diagnóstico y no en un juicio sobre individuos.

    p.mt-4(data-aos="fade-right") Ese conjunto presenta en el país rasgos reconocibles. La mayoría de los negocios opera con una sola persona al frente, que atiende al cliente, compra los insumos y lleva las cuentas al mismo tiempo. Muchos funcionan desde la vivienda o en espacios compartidos, y se concentran en el comercio y en los servicios de proximidad, donde la inversión inicial es menor y la entrada resulta más rápida. Ese patrón explica por qué la competencia se percibe intensa y por qué el margen depende en buena medida del precio al que se compra.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ic-9.svg" style="width: 84px")
      .col
        p.mb-0 Ese patrón de operación tiene consecuencias directas para el diagnóstico. Un tejido empresarial formado sobre todo por emprendimientos de subsistencia que presenta alta rotación y poca capacidad de sostener acuerdos de mediano plazo, condiciones que cualquier iniciativa nueva debe tener en cuenta al elegir sus proveedores y sus aliados. Antes de extraer conclusiones, conviene observar ese perfil con criterios definidos. Cinco rasgos permiten caracterizarlo en el campo:

    //- El XD rotula aquí los cinco rasgos con los títulos del 2.2 («Actividades económicas
    //- predominantes», «Necesidades insatisfechas»…), que son un arrastre de ese apartado.
    //- Los correctos los da el `_DI.docx` y son los que se usan.
    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Motivación de origen")
            .col-12
              p.mb-0 Razón por la cual se creó el negocio, sea una oportunidad detectada en el mercado o la ausencia de una alternativa laboral.
              p.mb-0 #[b Así se reconoce:] al preguntar por qué se inició la actividad, unas respuestas señalan un cliente concreto y otras, la falta de empleo en la zona.
          .row(numero="2" titulo="Dedicación al negocio")
            .col-12
              p.mb-0 Tiempo que la persona destina a la actividad, sea de manera exclusiva, parcial o como complemento de otro ingreso.
              p.mb-0 #[b Así se reconoce:] un puesto que abre solo los fines de semana y otro que opera todos los días revelan capacidades de respuesta y de crecimiento distintas.
          .row(numero="3" titulo="Uso de información en las decisiones")
            .col-12
              p.mb-0 Costumbre de apoyarse en registros propios o en fuentes externas antes de decidir.
              p.mb-0 #[b Así se reconoce:] quien sabe cuánto vendió el mes anterior y qué producto dejó mayor margen decide con datos; quien responde «más o menos igual» decide con memoria.
          .row(numero="4" titulo="Horizonte de las metas")
            .col-12
              p.mb-0 Alcance temporal con que se planea la operación, desde la caja del día hasta proyecciones de varios años.
              p.mb-0 #[b Así se reconoce:] unos negocios calculan cuánto deben vender esta semana para cubrir gastos y otros proyectan la compra de maquinaria para el año siguiente.
          .row(numero="5" titulo="Comunicación de la propuesta")
            .col-12
              p.mb-0 Claridad para explicar qué problema resuelve el negocio y a quién se dirige.
              p.mb-0 #[b Así se reconoce:] quien presenta su idea ante un evaluador la resume en dos minutos, con el problema identificado, la solución ofrecida y el beneficio concreto para el cliente.

    p.mt-4(data-aos="fade-right") Los cinco rasgos se describen, no se califican. Un emprendimiento de subsistencia no es un mal negocio, sino uno que opera bajo restricciones distintas, y reconocerlas permite decidir con quién conviene encadenarse, a quién se le puede vender y qué apoyos necesita el propio proyecto para no repetir esas limitaciones.

    p(data-aos="fade-right") Reconocer estos rasgos en un territorio requiere algo más que conversar con algunos emprendedores. Hace falta un método que permita recoger la información de manera ordenada, comparar las respuestas y dejar constancia de cada hallazgo. Las técnicas y protocolos de diagnóstico aportan ese método y convierten la observación en evidencia documentada.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Técnicas y protocolos de diagnóstico

    p.mt-4(data-aos="fade-right") Recoger información sobre las empresas de un territorio no equivale a diagnosticar. El diagnóstico es un proceso sistemático que recopila, organiza e interpreta esos datos con el fin de comprender las tendencias del sector, identificar los factores que explican los casos exitosos y detectar las debilidades que se repiten con mayor frecuencia.

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-1.r-10.p-4.h-100(data-aos="fade-right")
          p.mb-0 La información que alimenta ese proceso proviene de dos orígenes. La primaria se obtiene directamente del terreno, mediante observación, conversación o aplicación de cuestionarios, y ofrece detalle sobre lo que ocurre en un lugar concreto. La secundaria procede de registros elaborados por otros, como informes sectoriales o bases de datos oficiales, y aporta escala y capacidad de comparación. Un diagnóstico sólido combina ambos orígenes, porque cada uno compensa las limitaciones del otro.
      .col-lg-4
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t3/foto-5.png").w-100.h-100.object-fit-cover

    //- La pestaña de 25x8 en (185,10215) marca este bloque como `.cajon`.
    .cajon.color-1.p-4.mt-4(data-aos="fade-right")
      p.mb-0 Ese trabajo incluye además compromisos con quienes aportan la información. Antes de iniciar una entrevista o una encuesta conviene explicar el propósito del ejercicio, pedir autorización para utilizar las respuestas y aclarar que los datos se manejarán de manera agregada, sin identificar a quien los entregó. Las preguntas deben formularse sin sugerir la respuesta esperada, y lo observado se anota tal como ocurrió, aunque contradiga la idea inicial del proyecto.

    p.mt-4(data-aos="fade-right") El producto de ese proceso ubica la idea de negocio dentro del mapa empresarial del entorno. Con él se establece con qué empresas competirá, a qué proveedores puede recurrir y qué vacíos del mercado está en condiciones de atender. Las técnicas más utilizadas para recoger y organizar esa información son las siguientes:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.p-4(data-aos="fade-up")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | #[b Observación directa:] recorrido sistemático de mercados, ferias, zonas comerciales e industriales para registrar patrones de consumo, formatos de negocio y niveles de actividad. Por ejemplo, un aprendiz de Neiva puede registrar durante una semana el flujo de clientes en la plaza de mercado y las horas de mayor demanda.
            li
              i.far.fa-circle-dot
              | #[b Entrevista semiestructurada:] conversación guiada por un cuestionario flexible con empresarios, líderes comunitarios o funcionarios públicos, que permite explorar las razones detrás de las cifras y detectar problemas que los datos agregados no revelan.
            li
              i.far.fa-circle-dot
              | #[b Revisión documental:] consulta de informes sectoriales, bases de datos oficiales y reportes de las cámaras de comercio, que aportan al diagnóstico la escala y la comparación que el trabajo de campo no alcanza a ofrecer.
            li
              i.far.fa-circle-dot
              | #[b Encuesta estructurada:] aplicación de un cuestionario cerrado a una muestra de la población objetivo, que permite cuantificar preferencias, disposición a pagar y frecuencia de consumo, y comparar resultados entre segmentos.
            li.mb-0
              i.far.fa-circle-dot
              | #[b Análisis DOFA:] matriz que organiza los hallazgos del diagnóstico según su origen, interno o externo, y su carácter, favorable o desfavorable, con el fin de derivar estrategias que aprovechen las fortalezas frente a las oportunidades detectadas.

    p.mt-4(data-aos="fade-right") Ninguna técnica sustituye a las demás. La observación describe lo que ocurre, la entrevista explica por qué ocurre, la encuesta permite generalizar y la revisión documental contrasta lo hallado con registros independientes. Combinar al menos una técnica cualitativa con una cuantitativa es lo que otorga solidez al diagnóstico.

    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-2-s.cita-destacada.r-10.p-4.text-center(data-aos="fade-up")
          figure
            img(src="@/assets/curso/temas/t3/ic-7.svg")
          p.mb-0
            b Una encuesta indica qué piensa la mayoría, pero no explica el motivo; una entrevista profundiza en el motivo, pero no permite generalizar. El diagnóstico gana consistencia cuando combina ambas miradas y contrasta sus resultados.

    p.mt-4(data-aos="fade-right") Cada técnica sigue un protocolo que garantiza la validez de la información recopilada. El protocolo general del diagnóstico empresarial comprende las siguientes etapas:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-1.r-10.p-4(data-aos="fade-up")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Definir el alcance: sector, territorio y período que abarcará el diagnóstico.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Seleccionar las fuentes primarias y secundarias que se consultarán.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Diseñar los instrumentos de recolección y validarlos antes de aplicarlos.
            li
              .lista-ol--cuadro__vineta
                span 4
              | Aplicar los instrumentos y consignar lo recogido en el formato previsto.
            li
              .lista-ol--cuadro__vineta
                span 5
              | Organizar, analizar e interpretar los datos recopilados.
            li
              .lista-ol--cuadro__vineta
                span 6
              | Elaborar el informe con conclusiones y recomendaciones sustentadas.

    p.mt-4(data-aos="fade-right") Este protocolo puede ajustarse en profundidad y en tiempo según el tamaño del proyecto, pero no en su secuencia. Omitir la definición del alcance produce diagnósticos dispersos, y omitir el registro de las fuentes impide que las conclusiones se verifiquen después.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t3/ic-8.svg" style="width: 84px")
      .col
        p.mb-0 Con el comportamiento empresarial del entorno ya caracterizado, se cuenta con la base para formular la idea de negocio y estimar los efectos que produciría en la comunidad y en la economía local. Ese es el contenido que continúa el recorrido.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
