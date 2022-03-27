export default {
  global: {
    componenteFormativo: 'Arquitectura y servicios en la nube',
    descripcionCurso:
      'La computación en la nube es cada vez más utilizada y con mayor frecuencia por empresas y particulares, es necesario conocer que existen diferentes tipos de servicios ofrecidos a través de la nube, así como formas y características de acceso a estos servicios, además de las funciones y responsabilidades que registran tanto para el cliente como para el proveedor.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Arquitectura <i>Cloud Computing</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de servicios y modelos Cloud',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Capas funcionales: usuario, acceso, servicio y recursos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Relaciones entre la vista del usuario y la funcionalidad',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Consideraciones operativas de los servicios en la nube',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Auditabilidad',
            hash: 't_1_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Disponibilidad',
            hash: 't_1_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Gobernanza',
            hash: 't_1_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4.4',
            titulo: 'Interoperabilidad',
            hash: 't_1_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Control de versiones',
            hash: 't_1_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Portabilidad',
            hash: 't_1_4_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Protección de la información de la identidad personal',
            hash: 't_1_4_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4.8',
            titulo: 'Resiliencia',
            hash: 't_1_4_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Reservisibilidad',
            hash: 't_1_4_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Roles y responsabilidades en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Roles asociados al cliente',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Roles y actividades asociadas al proveedor',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Roles y actividades asociadas a los partners',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Desarrollador de servicios en la nube',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Auditor de servicios en la nube',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Del Vecchio, J. F., Paternina, F. J., y Henríquez Miranda, C. (2015). La computación en la nube: un modelo para el desarrollo de las empresas. Prospectiva, 13(2), 81-87.',
    },
    {
      referencia:
        'Escobar, V. C., Celis, M. T. B., y Ramírez, J. D. S.  (2015). Modelo, diseño y técnicas básicas para implantar un sistema de computación en la nube. [Tesis de pregrado, Institución Universitaria Politécnico Grancolombiano]. Sistema Nacional de Bibliotecas SISNAB.',
    },
    {
      referencia:
        'Giraldo, L. A. (2019). ¿Cómo ha evolucionado la computación en la nube a través del tiempo? ',
      link:
        'https://www.pragma.com.co/blog/como-ha-evolucionado-la-computacion-en-la-nube-a-traves-del-tiempo',
    },
    {
      referencia: 'ISO/IEC 17789:2014. (2021)',
      link: 'https://www.iso.org/standard/60545.html',
    },
    {
      referencia:
        'Padilla Aguilar, J. J., & Pinzón Castellanos, J. (2015). Estándares para <i>Cloud Computing</i>: estado del arte y análisis de protocolos para varias nubes. Puente. Revista Científica. Vol. 9 No. 2.',
    },
    {
      referencia:
        'Califf, C.; Sarker, S.; Skilton, M. (2016). The role and Value of a <i>Cloud Service Partner</i>. MIS Quarterly Executive. 15:3',
      link:
        'https://www.researchgate.net/publication/309285232_The_Role_and_Value_of_a_Cloud_Service_Partner.',
    },
  ],
  glosario: [
    {
      termino: 'AWS',
      significado:
        'Amazón <i>Web Services:</i> servicios de <i>cloud</i> ofrecidos por Amazon.',
    },
    {
      termino: 'Azure',
      significado: 'Servicios de computación en la nube de Microsoft.',
    },
    {
      termino: 'CapEx',
      significado:
        'En los sistemas de TI es una inversión a largo plazo que inmoviliza una gran suma de dinero en una sola inversión.',
    },
    {
      termino: 'CSC',
      significado: 'Cliente de Servicios <i>Cloud.</i>',
    },
    {
      termino: 'CSP',
      significado: 'Proveedor de Servicios <i>Cloud.</i>',
    },
    {
      termino: 'GCP',
      significado: 'Google <i>Cloud Platform</i>.',
    },
    {
      termino: 'Huella de Carbono',
      significado:
        'Representa el volumen total de gases de efecto invernadero (GEI) que producen las actividades económicas y cotidianas del ser humano.',
    },
    {
      termino: 'Hypervisor',
      significado:
        'Un hipervisor, conocido también como monitor de máquina virtual (VMM), es un software que crea y ejecuta máquinas virtuales (VM) y que, además, aísla su sistema operativo y recursos de las máquinas virtuales y permite crearlas y gestionarlas.',
    },
    {
      termino: 'IaaS',
      significado: 'Infraestructura como servicio.',
    },
    {
      termino: 'NaaS',
      significado: 'Redes como servicio.',
    },
    {
      termino: 'Nube Hibrida',
      significado:
        'Son nubes que combinan las características de dos nubes privadas, las nubes públicas o compartidas, se caracterizan por que permiten el poder compartir servicios e infraestructura entre ambas nubes.',
    },
    {
      termino: 'Nube Privada',
      significado:
        'En este tipo de nube los servicios y la infraestructura es gestionada específicamente por una organización y no se ofrecen estos servicios al público en general.',
    },
    {
      termino: 'Nube Publica',
      significado:
        'Los servicios e infraestructura son gestionados por un proveedor de tecnológico el cual ofrece estos servicios al público en general.',
    },
    {
      termino: 'OpEx',
      significado:
        'Es un gasto recurrente que podría dotar a la compañía de la agilidad de usar los fondos en otras inversiones rentables.',
    },
    {
      termino: 'Partner',
      significado:
        'Socio u operador de servicios en la nube (CSN) es una parte que se dedica a respaldar o proporcionar actividades de soporte auxiliar a las actividades del cliente o proveedor de servicios <i>cloud.</i>',
    },
    {
      termino: 'Nube Hibrida',
      significado:
        'Son nubes que combinan las características de dos nubes privadas, las nubes públicas o compartidas, se caracterizan por que permiten el poder compartir servicios e infraestructura entre ambas nubes.',
    },
    {
      termino: 'PaaS',
      significado: 'Plataforma como servicio.',
    },
    {
      termino: 'SaaS',
      significado: 'Software como servicio.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Instructor',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edinson Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
