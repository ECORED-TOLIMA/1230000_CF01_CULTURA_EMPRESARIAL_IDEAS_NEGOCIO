<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta el reconocimiento del entorno empresarial como punto de partida para identificar el impacto de una idea de negocio en su contexto. Los cinco ejes temáticos que lo conforman avanzan de lo general a lo particular: parten del análisis del entorno en el que actúa la empresa, continúan con la lectura del territorio y de las condiciones que favorecen el emprendimiento, avanzan hacia el diagnóstico del comportamiento empresarial y culminan en la valoración del impacto social y productivo de la idea de negocio, ilustrada con experiencias reales del país. Este recorrido permite comprender que el impacto de un proyecto empresarial no se descubre después de operar: se diagnostica, se diseña y se sustenta con evidencia desde su formulación.

    p A continuación, se presenta el mapa conceptual que organiza los ejes temáticos y las relaciones que los articulan:

    //- El mapa se exporta del artboard «Síntesis – PDF» (1228x805 en 186,495). El XD rotula la
    //- quinta rama «Diagnóstico del comportamiento empresarial», que es el título del tema 3, y
    //- escribe «Turismo cultural en  Magdalena»: los dos se corrigieron con el `_DI.docx` dentro
    //- del propio SVG, y el anexo en PDF se rehízo desde ese SVG para que digan lo mismo.
    .row.justify-content-center
      .col-lg-11.mb-5
        figure.mb-0(data-aos="fade-up")
          img(src="@/assets/curso/sintesis.svg" alt="Mapa conceptual del componente formativo «Entorno empresarial y cultura emprendedora», que se desarrolla a través de cinco ejes: contexto empresarial y herramientas de análisis, que comprende la definición de entorno empresarial, el entorno interno y externo, el análisis PESTEL y las cinco fuerzas del sector; territorio y políticas de desarrollo, que integra las políticas de apoyo al emprendimiento, la caracterización zonal, la tipología empresarial en Colombia, los proyectos de desarrollo regional y las fuentes y herramientas de consulta; diagnóstico del comportamiento empresarial, que aborda la cultura emprendedora, los valores y la ética empresarial, el perfil del emprendedor colombiano y las técnicas y protocolos de diagnóstico; idea de negocio y su impacto, que incluye el impacto social, el impacto productivo y económico, las normas y protocolos de investigación y los indicadores de impacto y ODS; y casos de diagnóstico en Colombia, que presenta el cacao con valor agregado, los servicios digitales para micronegocios, la cooperativa de economía solidaria y el turismo cultural en el Magdalena.").w-100

    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
