<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-down") Cada año, miles de personas en Colombia deciden crear su propia empresa y una parte importante de esos proyectos no supera los primeros años de operación. La causa no suele estar en la falta de esfuerzo, sino en una lectura apresurada del terreno donde el negocio se instala. Ese terreno se denomina entorno empresarial y reúne las condiciones económicas, sociales, tecnológicas, políticas, ambientales y culturales que rodean a toda organización. Diagnosticarlo antes de decidir es una tarea técnica y no un trámite previo.

    //- Foto de 396x346 (col-4) y, a la derecha, el icono de 84 con su párrafo y la caja
    //- #F9FBD8 de 812x177 con r=10 (col-8), las dos arrancando en x=601.
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/intro/foto.png").w-100
      .col-lg-8
        .row.align-items-start
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/intro/icono-1.svg" style="width: 84px")
          .col
            p.mb-0 Leer ese entorno con método separa la intuición de la decisión sustentada. Quien sabe diagnosticarlo identifica las oportunidades de su municipio, reconoce los instrumentos de apoyo disponibles, dimensiona la competencia que enfrentará y sustenta ante un banco o un fondo de emprendimiento por qué su idea tiene lugar en ese territorio. Esa capacidad se aplica también en la formulación de proyectos y en la gestión de organizaciones ya constituidas, donde el análisis del contexto antecede a cualquier plan de trabajo.

        .bg-1.r-10.p-4.mt-4(data-aos="fade-left")
          p.mb-0 El recorrido avanza de lo general a lo concreto: inicia con el concepto de entorno y las herramientas para leerlo, continúa con el territorio y las políticas de desarrollo, aborda el diagnóstico del comportamiento empresarial y valora el impacto social y productivo de una idea de negocio, para cerrar con casos colombianos. Al final, el aprendiz estará en capacidad de diagnosticar su entorno y de sustentar el impacto de su idea en el contexto social y productivo.

    .row.mt-4
      .col-lg-8
        p.mb-0(data-aos="fade-right") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    //- El XD deja este espacio como marcador («Espacio para video») y ni el .xd ni el DI traen
    //- la URL: se queda el iframe del scaffold hasta que llegue el enlace real.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
}
</script>

<style lang="sass"></style>
