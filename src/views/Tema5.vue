<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Casos de diagnóstico en Colombia

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t5/foto-1.png").w-100
      .col-lg-9
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t5/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 Los cuatro casos que se presentan a continuación ilustran situaciones del contexto colombiano en las que el diagnóstico del entorno y la identificación del impacto de una idea de negocio se aplican con método. Cada uno ejercita el conjunto de saberes desarrollados en los ejes anteriores: el reconocimiento del entorno, la lectura de las políticas de desarrollo, la caracterización zonal, el diagnóstico del comportamiento empresarial y la valoración del impacto social y productivo.
        //- Caja #CDE6F6 de 919x142 en (497,468): sin radio, pegada al borde derecho.
        .bg-2.p-4.mt-4(data-aos="fade-left")
          p.mb-0 Conviene analizarlos siguiendo la secuencia del protocolo de diagnóstico y verificando en cada paso que las conclusiones se sostengan en la información disponible. Los casos no corresponden a empresas existentes, aunque reproducen situaciones frecuentes en distintas regiones del país. Los nombres y las cifras se emplean con fines didácticos.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Cacao con valor agregado

    //- Foto de 614x296 a la izquierda y franja #F0F49D de 919x296 con la caja blanca de 685x210:
    //- es el orden por defecto del componente.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/foto-2.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Luz Marina Rodríguez vive en una vereda del municipio de El Espinal, en el Tolima. Su familia cultiva cacao desde hace tres generaciones en una finca de ocho hectáreas, pero siempre ha vendido el grano seco a intermediarios que lo trasladan a otras ciudades sin ningún proceso de transformación local. Luz Marina quiere crear una microempresa que procese el cacao en la zona, elabore chocolate artesanal de origen y venda de manera directa a través de redes sociales y mercados regionales.

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t5/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 Antes de formular su plan de negocio, aplica el análisis del macroentorno. En el factor político encuentra que el plan de desarrollo departamental prioriza el cacao como apuesta agroindustrial y que existen convenios de asistencia técnica para los cultivadores. En el factor económico verifica el crecimiento sostenido de la demanda de chocolate de origen en el país. En el factor social identifica un interés creciente de los consumidores urbanos por productos locales con trazabilidad. En el factor tecnológico confirma que las redes sociales permiten a una empresa rural llegar directamente al consumidor urbano.
        //- Caja #F9FBD8 de 916x160 en (185,1347): sin pestaña, así que no es un `.cajon`.
        .bg-1.p-4.mt-4(data-aos="fade-right")
          p.mb-0 El análisis del microentorno revela que en el municipio operan tres empresas que comercializan cacao procesado, pero ninguna se ha posicionado en el segmento artesanal de origen. El poder de negociación de los proveedores es bajo, porque la propia finca abastece la materia prima. El poder de los clientes resulta moderado, ya que el consumidor de chocolate artesanal valora la diferenciación por encima del precio. Del diagnóstico se desprenden los siguientes efectos previsibles:
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/foto-3.png").w-100.h-100.object-fit-cover

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-10.p-4(data-aos="fade-up")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | Generación de dos empleos directos para habitantes de la vereda
            li
              i.far.fa-circle-dot
              | Encadenamiento con otros cultivadores de la zona como proveedores de grano
            li
              i.far.fa-circle-dot
              | Retención local del valor agregado que antes captaba el intermediario
            li.mb-0
              i.far.fa-circle-dot
              | Posicionamiento del cacao del territorio en el mercado nacional

    p.mt-4(data-aos="fade-right") El caso muestra cómo la transformación local de una materia prima convierte una actividad de subsistencia en un proyecto con impacto medible, sin necesidad de modificar el cultivo ni de incorporar tecnología compleja.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Servicios digitales para micronegocios

    //- La pestaña de 25x8 en (185,2199) marca el segundo bloque como `.cajon`.
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p Andrés Felipe Torres y Carolina Vargas, egresados de un programa de formación en Ibagué, identificaron que la mayoría de los negocios locales: restaurantes, peluquerías, tiendas de ropa y talleres, carecen de presencia digital y de tiempo para gestionarla. Su idea de negocio es una plataforma de gestión digital simplificada que, por una suscripción mensual de bajo costo, mantenga activo el perfil del negocio en redes sociales, administre sus pedidos en línea y ofrezca un panel de métricas básicas, complementada con talleres mensuales de formación digital.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 El diagnóstico del macroentorno identifica varios factores favorables: la política nacional de transformación digital, que incluye estímulos para la adopción tecnológica de las micro, pequeñas y medianas empresas; el crecimiento sostenido del comercio electrónico en el país; y la alta penetración de teléfonos inteligentes entre los micronegocios, que facilita la adopción de herramientas sencillas. Entre los factores de riesgo aparecen la alta rotación de clientes en ese segmento y la dependencia de una conectividad que aún es irregular en algunos barrios de la ciudad.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/foto-4.png").w-100.h-100.object-fit-cover

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t5/ic-3.svg" style="width: 84px")
      .col
        p.mb-0 El impacto productivo del proyecto se manifiesta en la modernización del tejido empresarial local. Al digitalizar a sus clientes, la empresa no solo genera valor para ellos: amplía su visibilidad ante consumidores de otras ciudades, expande su mercado potencial y reduce su dependencia de la clientela del barrio. Ese efecto de desbordamiento constituye un indicador de impacto territorial que resulta especialmente atractivo para instrumentos de fomento y para alianzas con la cámara de comercio local.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Cooperativa de economía solidaria

    p.mt-4(data-aos="fade-right") En el municipio de Acacías, en el Meta, un grupo de doce mujeres cabeza de familia del barrio Villa del Río identificó que ningún restaurante de la zona ofrece almuerzos económicos para los trabajadores del corredor industrial cercano. La necesidad está documentada: cerca de trescientos trabajadores buscan dónde almorzar en la franja del mediodía de lunes a viernes, y la oferta disponible resulta insuficiente.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-12.col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t5/ic-4.svg" style="width: 84px")
      .col
        p.mb-0 El grupo decide constituir una cooperativa de trabajo asociado para prestar ese servicio, aprovechando que varias integrantes cuentan con formación en manipulación de alimentos y que el salón comunal está disponible para el procesamiento. El diagnóstico del entorno resulta favorable en los cuatro factores relevantes: demanda insatisfecha verificada, respaldo de la administración municipal a las iniciativas de economía solidaria, tradición comunitaria de trabajo colectivo y disponibilidad de insumos frescos en el mercado local. Los indicadores de impacto identificados son:

    //- Cuatro tarjetas de 292x352. El XD dibuja la CUARTA con los colores del :hover
    //- (#CDE6F6 con el círculo #EBE9FB): es el estado, no una tarjeta distinta. Los dos juegos
    //- de iconos se cruzan con `opacity` en `.tarjeta--boton.color-1`.
    .row.mt-4(data-aos="fade-up")
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t5/ico-1.svg")
                img.icono-hover(src="@/assets/curso/temas/t5/ico-1-hover.svg")
          h4.text-center Empleo asociado
          p.mb-0 Doce puestos de trabajo estables para mujeres cabeza de familia, con ingresos superiores a los de sus actividades ocasionales previas.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t5/ico-2.svg")
                img.icono-hover(src="@/assets/curso/temas/t5/ico-2-hover.svg")
          h4.text-center Economía del hogar
          p.mb-0 Fortalecimiento del ingreso de doce familias del barrio, con efectos sobre su capacidad de gasto y su acceso a servicios.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t5/ico-3.svg")
                img.icono-hover(src="@/assets/curso/temas/t5/ico-3-hover.svg")
          h4.text-center Población atendida
          p.mb-0 Reducción del tiempo y del costo de alimentación para cerca de trescientos trabajadores del corredor industrial cercano.
      .col-md-6.col-lg-3
        .tarjeta--boton.color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t5/ico-4.svg")
                img.icono-hover(src="@/assets/curso/temas/t5/ico-4-hover.svg")
          h4.text-center Articulación productiva
          p.mb-0 Vinculación de productores agropecuarios del municipio como proveedores regulares y estables de la cooperativa.

    separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Turismo cultural en el Magdalena

    //- ⚠️ En este apartado el `.xd` y el `.pdf` NO dicen lo mismo: el PDF pinta la caja azul a la
    //- izquierda con la foto a la derecha, y la lista a 1020 sin ilustración. El `.xd` —que es la
    //- fuente editable y la que trae un elemento de más (la ilustración de 292x380)— pone la foto
    //- a la izquierda, la caja en (497,3545) y la lista a 915 con la ilustración al lado. Se sigue
    //- el `.xd`; queda anotado en `fuentes/REVISION-PENDIENTES.md`.
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t5/foto-5.png").w-100.h-100.object-fit-cover
      .col-lg-9
        .bg-2.r-10.p-4.h-100(data-aos="fade-left")
          figure.mb-3
            img(src="@/assets/curso/temas/t5/ic-5.svg" style="width: 84px")
          p.mb-0 El municipio de El Banco, en el Magdalena, se levanta en el punto donde el río Cesar desemboca en el Magdalena y conserva la memoria del comercio fluvial que durante décadas movió la economía del país. Es reconocido como cuna de la cumbia, celebra cada año un festival nacional dedicado a ese ritmo y mantiene viva una tradición musical que identifica a toda la región. Su oferta turística formal, sin embargo, es limitada: pocos alojamientos de calidad, gastronomía local poco desarrollada y ausencia de experiencias estructuradas de turismo cultural y de naturaleza.

    p.mt-4(data-aos="fade-right") Juan Carlos Morales, aprendiz de un centro de formación del departamento, decide diagnosticar el potencial de una empresa de turismo vivencial. En el macroentorno identifica como favorable la política nacional que prioriza el turismo de naturaleza y cultura, el crecimiento del turismo interno, la preferencia creciente de los viajeros urbanos por experiencias auténticas y los proyectos de recuperación de la navegabilidad del río. Entre los riesgos registra la estacionalidad de la demanda, concentrada en las fechas del festival, y el estado de las vías de acceso al municipio.

    p(data-aos="fade-right") El análisis del impacto potencial arroja cuatro resultados de alta relevancia territorial:

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .bg-3.r-10.p-4(data-aos="fade-right")
          ul.lista-ul.mb-0
            li
              i.far.fa-circle-dot
              | Articulación de quince familias de artesanos y productores gastronómicos como proveedores de la experiencia
            li
              i.far.fa-circle-dot
              | Generación de ocho empleos directos en operación y guía turística
            li
              i.far.fa-circle-dot
              | Posicionamiento del municipio como destino cultural dentro del mapa turístico regional
            li.mb-0
              i.far.fa-circle-dot
              | Contribución a la preservación de la tradición musical mediante su valorización económica
        //- La segunda pestaña de 25x8 cierra el tema con un `.cajon`, bajo la lista y aún a la
        //- izquierda de la ilustración, que es más alta que las dos juntas.
        .cajon.color-1.p-4.mt-4(data-aos="fade-up")
          p.mb-0 Los cuatro resultados provienen de una misma decisión. La empresa estructura la experiencia con lo que el municipio ya posee, en lugar de construir infraestructura nueva. El Banco cuenta con su río, su historia portuaria y un festival consolidado; lo que faltaba era organizar esos elementos en un recorrido con precio, horario y responsables definidos. El caso muestra que el turismo bien diagnosticado puede convertirse en uno de los sectores de mayor impacto para municipios con patrimonio cultural subutilizado.
      .col-lg-3
        figure.mb-0
          img(src="@/assets/curso/temas/t5/ilus-1.png").w-100

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
