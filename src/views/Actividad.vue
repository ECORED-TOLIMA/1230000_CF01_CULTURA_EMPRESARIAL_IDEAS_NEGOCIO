<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")

</template>

<script>
//- GENERADO por `scripts/gen_actividad.py` desde `01230000_CF01_AD.docx`.
//- No editar a mano: volver a correr el script si cambia el docx.
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Entorno empresarial y cultura emprendedora',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los contenidos del componente formativo sobre el análisis del contexto empresarial, el diagnóstico del comportamiento empresarial y el impacto de una idea de negocio.',
      // el kit sólo muestra 10 de las 20: barajar es OBLIGATORIO
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      // `mensaje_final_*`, NO `mensaje_*`: es el nombre que lee
      // `actividadCuestionario/Actividad.vue` del kit (1.0.9). Con el nombre corto los dos
      // mensajes finales del docx no se pintan nunca y no salta ningún error.
      mensaje_final_aprobado: 'Ha superado la actividad. Sus respuestas demuestran conocimientos sólidos sobre el análisis del entorno empresarial, las políticas de desarrollo y la caracterización zonal, el diagnóstico del comportamiento empresarial y la identificación del impacto de una idea de negocio.',
      mensaje_final_reprobado: 'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué elementos integran el entorno empresarial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la maquinaria, los equipos y las instalaciones que la empresa posee.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solamente la estructura interna de la organización, sus procesos productivos y su personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los factores económicos, sociales, tecnológicos, políticos, ambientales y culturales que condicionan su operación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente el catálogo de productos y servicios que ofrece a sus clientes actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Los seis factores actúan de manera conjunta, y por eso el diagnóstico debe recorrerlos todos antes de tomar una decisión.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué tipo de hallazgos produce el análisis del entorno interno de una empresa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las fortalezas y las debilidades, porque reúne lo que la organización controla.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las oportunidades y las amenazas que ofrece el mercado donde compite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El mapa de los competidores y proveedores que operan en el mismo sector económico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La proyección de las ventas y los ingresos de los próximos años.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'El entorno interno reúne los recursos que la empresa controla; las oportunidades y las amenazas provienen siempre del entorno externo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál de los siguientes elementos corresponde a un factor del análisis PESTEL?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El poder de negociación de los proveedores directos que abastecen el sector.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La rentabilidad histórica obtenida por la empresa en los años anteriores de operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eficiencia operativa de los procesos internos de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El factor ambiental, referido a recursos naturales y exigencias de sostenibilidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'El PESTEL examina seis factores del macroentorno; los proveedores y los competidores pertenecen al microentorno y se analizan con otro modelo.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué herramienta permite evaluar el atractivo competitivo de un sector?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El análisis PESTEL, que examina los factores generales de la economía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El modelo de las cinco fuerzas, que examina la estructura del sector.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cadena de valor, que descompone las actividades internas de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El inventario de recursos y capacidades con que cuenta la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Las cinco fuerzas evalúan la rivalidad, los nuevos entrantes, los sustitutos y el poder de clientes y proveedores, es decir, la estructura del microentorno.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál norma es el principal instrumento del ecosistema emprendedor colombiano?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Ley 789 de 2002, norma marco de la formación en emprendimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Ley 590 de 2000, norma marco de la cultura del emprendimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La Ley 1014 de 2006, de fomento a la cultura del emprendimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El Decreto 957 de 2019, norma marco del ecosistema emprendedor nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'La Ley 1014 de 2006 incorpora la formación en emprendimiento al sistema educativo y crea la Red Nacional para el Emprendimiento.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza al Fondo Emprender como instrumento de apoyo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Otorga capital semilla no reembolsable mediante convocatorias públicas periódicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Concede créditos bancarios de largo plazo con una tasa de interés preferencial y subsidiada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adquiere participación accionaria en las empresas que decide financiar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entrega maquinaria y equipos en calidad de arrendamiento financiero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Al tratarse de capital semilla no reembolsable, el proyecto no devuelve los recursos si cumple las metas comprometidas en su plan de negocio.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué es la caracterización zonal dentro del diagnóstico del entorno?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El registro contable de los activos que declaran las empresas registradas en un municipio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La clasificación de las empresas según su forma jurídica de constitución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El listado de los trámites necesarios para formalizar un negocio nuevo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La descripción de las condiciones económicas, sociales y productivas de un territorio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'La caracterización zonal desciende a la escala donde el emprendedor compite realmente y constituye el insumo básico del diagnóstico empresarial.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Según la clasificación vigente, ¿qué criterio determina el tamaño de una empresa?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de trabajadores que la empresa vincula de manera permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los ingresos por actividades ordinarias anuales, diferenciados por sector económico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El valor total de los activos registrados en su balance general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La antigüedad de la empresa en el registro mercantil de la cámara de comercio correspondiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'El Decreto 957 de 2019 sustituyó el criterio de trabajadores y activos por el de ingresos, con rangos propios para manufactura, servicios y comercio.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Por qué la cultura emprendedora se considera una competencia y no un rasgo innato?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque se desarrolla mediante la formación, la experiencia y la reflexión crítica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque solo la poseen quienes han cursado estudios universitarios en administración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque depende del capital disponible para iniciar la actividad empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque se transmite por vía familiar entre generaciones de empresarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Según Dweck (2006), ¿qué distingue a una persona con mentalidad de crecimiento?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Considera que sus talentos están dados y no admiten modificación alguna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evita los desafíos exigentes para no exponerse a resultados adversos ni al error.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Considera que sus capacidades se desarrollan con esfuerzo y retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Prefiere trabajar de manera individual, sin buscar retroalimentación externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Esta creencia sostiene el aprendizaje continuo y explica por qué la formación puede modificar el comportamiento empresarial de una persona.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Por qué conviene combinar técnicas cualitativas y cuantitativas en el diagnóstico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque la normativa obliga a aplicar al menos dos instrumentos distintos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque la encuesta permite generalizar y la entrevista explica las razones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque las técnicas cualitativas resultan siempre más económicas de aplicar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque los instrumentos cuantitativos no requieren registrar la fuente consultada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Cada técnica responde a una necesidad distinta, y solo su combinación entrega una lectura completa del comportamiento empresarial del territorio.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué criterios sustentan la confiabilidad de un diagnóstico empresarial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La experiencia personal acumulada por quien formula y presenta la idea de negocio al mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La consulta exclusiva de información publicada en redes sociales del sector.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La opinión de un único experto reconocido dentro del sector productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La triangulación de fuentes, el contraste con datos oficiales y la revisión por pares.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Contrastar cada hallazgo con fuentes independientes evita que una conclusión dependa de un solo informante o de un único registro documental.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál constituye una fuente principal de la que surgen las ideas de negocio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La búsqueda de un empleo formal mejor remunerado dentro del mercado laboral local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La identificación de necesidades que el mercado no atiende de manera adecuada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La imitación exacta de empresas extranjeras, sin ninguna adaptación local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La obtención previa de créditos bancarios por un monto considerable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Detectar una demanda insatisfecha es la fuente más frecuente de ideas con impacto verificable, y se descubre observando el entorno con método.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿En qué consiste el impacto social de una idea de negocio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En los cambios positivos que genera en las condiciones de vida de la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En la campaña publicitaria con que la empresa llega a sus clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En el monto de dinero que quien emprende invierte en su negocio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En el número total de productos que la empresa logra vender en el mercado regional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ese impacto se expresa en empleo, ingresos, acceso a bienes y servicios y sostenibilidad, y se declara siempre con indicadores verificables.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué Objetivo de Desarrollo Sostenible se vincula con la creación de empleo formal?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El ODS 2, sobre hambre cero y seguridad alimentaria de la población.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El ODS 13, sobre acción por el clima y reducción de las emisiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El ODS 8, sobre trabajo decente y crecimiento económico sostenido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El ODS 11, sobre ciudades y comunidades sostenibles e incluyentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'El componente lo asocia con el indicador de empleos formales creados en los primeros doce meses, verificable mediante los contratos registrados.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué significa que un indicador de impacto cumpla el criterio SMART?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que es costoso, masivo, ambicioso, razonable y limitado en su alcance.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que se aplica solo a empresas de base tecnológica en crecimiento acelerado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que únicamente puede medirlo y certificarlo un auditor externo acreditado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que es específico, medible, alcanzable, relevante y acotado en el tiempo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Un indicador que incumple alguna de estas cinco condiciones no permite comparar resultados ni saber si el proyecto avanza o se ha estancado.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'En el caso del cacao con valor agregado, ¿qué factor favoreció el proyecto?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El factor legal, por la ausencia de normativa aplicable al chocolate artesanal de origen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El factor tecnológico, porque la familia dispone ya de maquinaria industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El factor ambiental, por la reducción de la cobertura boscosa del departamento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El factor político, porque el plan departamental prioriza el cacao como apuesta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Alinear el proyecto con una cadena productiva priorizada facilita el acceso a la asistencia técnica, redes de proveedores y convocatorias de financiación.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'En el caso de los servicios digitales de Ibagué, ¿qué es el efecto de desbordamiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la empresa acumula pérdidas por el exceso de competencia digital local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que los clientes digitalizados amplían su visibilidad ante consumidores de otras ciudades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que la empresa sustituye a sus trabajadores por sistemas automatizados de gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el proyecto depende por completo del apoyo estatal para poder operar y mantenerse activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'El valor generado no se queda en la empresa: se extiende al tejido empresarial local, y ese es un indicador de alto impacto territorial.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué figura organizacional adoptan las mujeres cabeza de familia del caso de Acacías?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una cooperativa de trabajo asociado, propia de la economía solidaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una microempresa familiar con un único propietario y responsable legal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una alianza informal, sin ninguna forma jurídica de constitución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una asociación de productores agropecuarios del corredor industrial cercano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'La cooperativa de trabajo asociado permite distribuir los beneficios de forma equitativa entre las asociadas, coherente con la economía solidaria.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es la lección transversal que comparten los cuatro casos analizados?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que las ideas más rentables incorporan siempre tecnología de última generación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que el impacto de un proyecto solo se conoce tras años de operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que las ideas más sólidas provienen de un diagnóstico riguroso del territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que la viabilidad de una idea es idéntica en cualquier municipio del país.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Los cuatro proyectos se apoyan en la observación metódica de su entorno, y ese es el factor que explica su potencial de transformación.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
