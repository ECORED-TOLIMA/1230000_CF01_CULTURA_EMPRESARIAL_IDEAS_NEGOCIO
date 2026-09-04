export default {
  global: {
    Name: 'Entorno empresarial y cultura emprendedora',
    Description:
      'El componente formativo desarrolla la capacidad de diagnosticar el entorno empresarial e identificar el impacto de una idea de negocio en su contexto. Aborda el reconocimiento del entorno, las políticas de desarrollo, la caracterización zonal, los proyectos de desarrollo regional y el diagnóstico del comportamiento empresarial, con el fin de sustentar decisiones de emprendimiento con evidencia.',
    imagenBannerPrincipal: '@/assets/curso/portada/ilustracion.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contexto empresarial y herramientas de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de entorno empresarial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Entorno interno y externo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis PESTEL',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Cinco fuerzas del sector',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Territorio y políticas de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Políticas de apoyo al emprendimiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Caracterización zonal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipología empresarial en Colombia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Proyectos de desarrollo regional',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Fuentes y herramientas de consulta',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico del comportamiento empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cultura emprendedora',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Valores y ética empresarial',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Perfil del emprendedor colombiano',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas y protocolos de diagnóstico',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Idea de negocio y su impacto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Impacto social',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Impacto productivo y económico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Normas y protocolos de investigación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Indicadores de impacto y ODS',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Casos de diagnóstico en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Cacao con valor agregado',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Servicios digitales para micronegocios',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Cooperativa de economía solidaria',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Turismo cultural en el Magdalena',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/01230000_CF01_CFA_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis DOFA',
      significado:
        'herramienta de diagnóstico estratégico que organiza los hallazgos según su origen, interno o externo, y su carácter, favorable o desfavorable, en debilidades, oportunidades, fortalezas y amenazas.',
    },
    {
      termino: 'Análisis PESTEL',
      significado:
        'herramienta de lectura del macroentorno que examina de manera sistemática los factores político, económico, social, tecnológico, ambiental y legal que condicionan la operación de una empresa en un territorio.',
    },
    {
      termino: 'Cinco fuerzas competitivas',
      significado:
        'modelo que analiza la estructura de un sector a partir de la rivalidad entre competidores, la amenaza de nuevos entrantes, el poder de proveedores y clientes, y la amenaza de productos sustitutos.',
    },
    {
      termino: 'Cultura emprendedora',
      significado:
        'conjunto de actitudes, valores y competencias cognitivas, emocionales y conductuales que permiten identificar oportunidades, asumir riesgos calculados y transformar ideas en proyectos de valor.',
    },
    {
      termino: 'Fondo Emprender',
      significado:
        'instrumento financiero del Servicio Nacional de Aprendizaje, creado por la Ley 789 de 2002, que otorga capital semilla no reembolsable a iniciativas empresariales de aprendices y egresados mediante convocatorias públicas.',
    },
    {
      termino: 'Impacto productivo',
      significado:
        'capacidad de una idea de negocio para movilizar y fortalecer el tejido empresarial del territorio donde opera, mediante encadenamientos locales, formalización y transferencia de capacidades técnicas.',
    },
    {
      termino: 'Macroentorno',
      significado:
        'conjunto de fuerzas generales del ambiente que afectan a todas las organizaciones de una economía y que se analizan mediante la herramienta PESTEL.',
    },
    {
      termino: 'Triangulación de fuentes',
      significado:
        'criterio de rigor que consiste en contrastar cada hallazgo del diagnóstico con al menos dos fuentes independientes, con el fin de evitar conclusiones sustentadas en un único informante o registro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Confecámaras. (2023). <em>Dinámica de creación de empresas en Colombia 2023</em>. Confederación Colombiana de Cámaras de Comercio.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2000). <em>Ley 590 de 2000, por la cual se dictan disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresas</em>. Diario Oficial n.º 44.078.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). <em>Ley 789 de 2002, por la cual se dictan normas para apoyar el empleo y ampliar la protección social</em>. Diario Oficial n.º 45.046.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). <em>Ley 1014 de 2006, de fomento a la cultura del emprendimiento</em>. Diario Oficial n.º 46.164.',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2023). <em>Encuesta de micronegocios (EMICRON)</em>. DANE.',
    },
    {
      referencia:
        'Dweck, C. S. (2006). <em>Mindset: the new psychology of success</em>. Random House.',
    },
    {
      referencia:
        'Global Entrepreneurship Monitor. (2023). <em>Global Entrepreneurship Monitor 2022/2023 global report: adapting to a new normal</em>. GEM.',
    },
    {
      referencia:
        'Global Reporting Initiative. (2021). <em>Consolidated set of GRI standards</em>. Global Sustainability Standards Board.',
    },
    {
      referencia:
        'Naciones Unidas. (2015). <em>Transformar nuestro mundo: la Agenda 2030 para el Desarrollo Sostenible</em> (A/RES/70/1). Asamblea General de las Naciones Unidas.',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2010). <em>ISO 26000:2010. Guía de responsabilidad social</em>. ISO.',
    },
    {
      referencia:
        'Porter, M. E. (2008). The five competitive forces that shape strategy. <em>Harvard Business Review, 86</em>(1), 78-93.',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2019). <em>Decreto 957 de 2019, por el cual se adopta una nueva clasificación del tamaño empresarial</em>. Ministerio de Comercio, Industria y Turismo.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
