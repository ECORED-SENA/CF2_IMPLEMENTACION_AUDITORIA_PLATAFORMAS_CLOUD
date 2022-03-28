<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Arquitectura <i>Cloud Computing</i>

    .row.align-items-center.fondo-11.mb-5
      .col-12.col-md-8.col-lg-4.col-xl-4 
        img(src="@/assets/curso/images/tema1/img_1.svg" alt="AvatarTop", style="width:400px; display:block; margin:-1rem 10rem;").mb-3
      .col-12.col-md-4.col-lg-7.col-xl-7.mb-3
        p.aling-4.text-white La arquitectura de la nube establece la forma en la que se integran las diferentes tecnologías para crear los entornos de TI, que extraen, agrupan y comparten los recursos escalables de una red, es decir es la organización de los componentes y las funciones que se necesitan para diseñar una nube y obtener una plataforma en línea en la que se puedan ejecutar las aplicaciones, de manera efectiva, y lógica, posibilitando de esta forma trabajar conjuntamente en un mismo objetivo,  robusteciendo los puntos fuertes y minimizando los puntos débiles.

    .row.justify-content-center.align-items-center.d-block.d-lg-none.fondo-18.mb-5.mb-4
      .col-12.col-md-8.col-lg-6.col-xl-5.mb-4
        img.my-3(src="@/assets/curso/images/tema1/img_1.svg" alt="AvatarTop", style="width:370px; display:block; margin:-6rem -1rem;")
      .col-12.col-md-4.col-lg-6.col-xl-7.mb-3
         p.text-white La arquitectura de la nube establece la forma en la que se integran las diferentes tecnologías para crear los entornos de TI, que extraen, agrupan y comparten los recursos escalables de una red, es decir es la organización de los componentes y las funciones que se necesitan para diseñar una nube y obtener una plataforma en línea en la que se puedan ejecutar las aplicaciones, de manera efectiva, y lógica, posibilitando de esta forma trabajar conjuntamente en un mismo objetivo,  robusteciendo los puntos fuertes y minimizando los puntos débiles.
    Separador 
    
    .row.fondo-1
      #t_1_1.titulo-segundo
        .h4 1.1 Tipos de servicios y modelos <i>cloud</i>
      
      p.mb-5.aling Los servicios tradicionales se categorizan en tres tipos
      
      .row.justify-content-center.align-items-center.mb-3
        .col-3.mb-4.d-flex
          .tarjeta--sencilla.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/images/tema1/ico_1.svg', alt='icono-avatar')
            h3.aling.mb-4 Pass
              p.mb-0.text-small Se refiere a un servicio que ofrece una plataforma para desarrollar y ejecutar aplicaciones, usualmente incluye un lenguaje de programación, acceso a APIS, <i>framework</i> de desarrollo, bases de datos entre otros.
                
        .col-3.mb-4.d-flex
          .tarjeta--sencilla.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img.my-3(src='@/assets/curso/images/tema1/ico_2.svg', alt='icono-avatar')
            h3.aling.mb-4  SaaS
              p.mb-0.text-small Es el acceso a aplicaciones o plataformas totalmente administradas por el proveedor, el cliente solo requiere de un navegador y conexión a internet para acceder a los servicios contratados.
        .col-3.mb-4.d-flex
          .tarjeta--sencilla.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img.my-3(src='@/assets/curso/images/tema1/ico_3.svg', alt='icono-avatar')
            h3.aling IdaS
              p.mb-5.text-small Proporciona el <i>hardware</i> virtualizado en forma de máquinas virtuales en diferentes instancias de Sistemas operativos o Contenedores generalmente <i>docker</i>, incluye de igual manera el <i>networking</i>.

      p.mb-0 Los proveedores de servicios de computación en la nube (CSP) actuales, ofrecen una variedad de servicios disponibles y listos para dar respuesta a los problemas o necesidades del cliente, estos servicios pueden ser adquiridos solos independientes o en combinación de varios de ellos, la oferta va desde algunos considerados “básicos”  se conocen de esta manera porque proporcionan una capa de abstracción sobre los recursos físicos en el centro de datos en la nube.

    .row.justify-content-center.align-items-center.fondo-3.mb-3.p-4
      .col-12.col-md-4.col-lg-6.col-xl-6
        p.aling-5.mb-0 En términos generales los servicios más importantes son: servicios de computo, almacenamiento y redes, a continuación de mencionan de manera general algunos de los servicios más comunes o de mayor demanda por parte de los clientes:

        LineaTiempoD.color-acento-contenido.mt-5
          p.text-small.color.line(numero="1" titulo="Servicios informáticos") Generalmente son los servicios más importantes, representan la columna vertebral para los clientes, acá se encuentra regularmente el acceso a máquinas virtuales, instancias de distintos tipos, contenedores <i>docker</i>, <i>clúster</i> de alto rendimiento, normalmente usados para el alojamiento de aplicaciones y servicios web.

          p.text-small(numero="2" titulo="Servicios de almacenamiento") Este tipo de servicio ofrece una variedad que va desde el almacenamiento de objetos y archivos, bases de datos SQL tradicionales como MySQL, PostgreSQL, Oracle, SQLServer o bases de datos NOSQL.
            
          p.text-small(numero="3" titulo="Servicios se <i>networking</i> (Acceso a Redes)") Los accesos a los servicios de la computación en la nube son alojados en internet para lograr acceder a los servicios contratados PaaS, SaaS, LaaS, se requiere contar con acceso desde y hacia redes externas, regularmente al crear un servicio en la nube se incluye la creación de una red virtual que permita la interconexión.
      
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
        img(src="@/assets/curso/images/tema1/img_2.png" alt="AvatarTop",).mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
        img(src="@/assets/curso/images/tema1/img_3.png" alt="AvatarTop",)
      .col-12.col-md-4.col-lg-6.col-xl-6
        h3 Servicios de analítica
        p.mb-3 El gran crecimiento en los datos que con lleva a la generación de la <i>big Data</i> obliga o posibilita que las empresas puedan adquirir servicios que realicen el análisis de los datos de tal manera que se facilite la inteligencia de negocios, aqui se incluyen las bodegas de datos, herramientas de transformación y extracción (ETL), y herramientas de <i>big Data.</i>  

        LineaTiempoD.color-acento-contenido.mt-5
          p.text-small(numero="4" titulo="Servicios de autenticación o control de identidad") Se ofrecen herramientas de control de acceso basado en roles, por supuesto la seguridad debe ser parte fundamental en el acceso a los servicios, por lo que el control de la identidad, se requiere mediante la gobernanza, autenticación, autorización en el control del acceso.

          p.text-small.mb-3(numero="5" titulo="Servicios IoT") Las tecnologías IoT precisamente se han convertido en un disparador de la generación de datos que deben ser capturados, almacenados y procesados, por esta razón los proveedores ofrecen motores de procesamiento de flujo que permiten el trabajo en tiempo real con los datos generados por estos dispositivos.
          
          p.text-small(numero="6" titulo="Servicios de IA") En este tipo de servicios se incluye el aprendizaje profundo y automático, ofrece aplicaciones para crear, capacitar y probar modelos de aprendizaje automático, con soporte de GPU, en forma de servicios SaaS a los que se accede a través de un navegador.

          p.text-small(numero="7" titulo="Servicios de gestión y gobernanza") Incluyen funciones de recuperación ante desastres como copia de seguridad y replicación, servicios de regulación de implementación que hacen cumplir las reglas sobre los tipos y la configuración de servicios que se pueden usar, automatización de la configuración y servicios de monitoreo que brindan información (en algunos casos, en tiempo real o alertas casi en tiempo real) sobre problemas de rendimiento y seguridad.
        
    Separador 

    #t_1_2.titulo-segundo
      .h4 1.2 Capas funcionales: usuario, acceso, servicio y recursos
    .row.fondo-14.p-3
      .col-lg-12.mx-auto.mb-5
        .tema1-1 
          .bloque-texto-a.color-custom-3.p-2.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-9
                .bloque-texto-a__texto.p-4
                  p.mb-3 Cada proveedor de servicios <i>cloud</i> dispone de una arquitectura propia como elemento diferenciador del resto de competidores de mercado y/o para adaptarse mejor a la evolución de sus propios servicios tradicionales y necesidades de sus clientes actuales y potenciales. 

                  p Si bien existen diferencias marcadas entre las nubes públicas o privadas, a continuación se mencionan los diferentes componentes funcionales de alto nivel presentes en una arquitectura de nube en términos generales o genérica.
              .col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/images/tema1/img_4.svg' alt='' style="width:250px; display:block; margin:auto 0;")

      .row.justify-content-center.align-items-center
        .col-12.col-md-8.col-lg-12.col-xl-12.mb-4        
          .cajon.color-custom.p-4.mb-3
            p.aling-6 Los componentes funcionales representan conjuntos de funciones que se requieren para realizar las actividades de computación en nube para los diversos roles y sub-roles involucrados, de acuerdo con una abstracción más general la arquitectura funcional define unos componentes funcionales divididos en capas en las cuales cada una determina unas funciones específicas y existe una conexión sucesiva entre cada capa dada a través de interfaces. 
      
      p.mb-5 La ISO /IEC 17789:2014 determina cuatro capas con sus respectivas funciones:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Capa de usuario" :icono="require('@/assets/curso/images/tema1/ico_tab_1.svg')")
        .row
          .col-lg-8.mb-4
            h4 Capa de usuario
            p  La capa de usuario es la interfaz de usuario a través de la cual un cliente de servicios en la nube interactúa con el proveedor de servicios en la nube y con los servicios en la nube, realiza actividades administrativas relacionadas con el cliente y monitorea los servicios adquiridos por su organización.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/images/tema1/img_5.svg')

      .py-4.py-md-5(titulo="Capa de acceso" :icono="require('@/assets/curso/images/tema1/ico_tab_2.svg')")
        .row
          .col-lg-8.mb-4
            h4 Capa de acceso
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Proporciona una interfaz común para el acceso manual y automático a las capacidades disponibles en la capa de servicios. Incluye además de las capacidades de servicio, las capacidades administrativas y comerciales.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Es responsable de presentar las capacidades del servicio en la nube a través de uno o más mecanismos de acceso, por ejemplo, como un conjunto de páginas web a las que se accede a través de un navegador, o como un conjunto de servicios web a los que se puede acceder mediante una comunicación segura. 
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Aplica la funcionalidad de seguridad adecuada al acceso de las capacidades del servicio en la nube, es decir, auténtica la solicitud mediante el uso de credenciales de usuario y valida la autorización del usuario para usar capacidades particulares.
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Es responsable de manejar el cifrado y verificar la integridad de la solicitud, cuando sea necesario, también puede ser responsable de hacer cumplir las políticas de calidad del servicio (QoS –Quality of Service) en el tráfico procedente de la capa de usuario (por ejemplo, las solicitudes de servicio que se realizan al proveedor) y, en sentido inverso, el tráfico hacia la capa de usuario (p.ej. salida de los servicios en la nube)
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Transmite solicitudes validadas a los componentes de la capa de servicios. La capa de acceso acepta las solicitudes del cliente o del proveedor para el consumo de los servicios en la nube, y así acceder a los servicios y recursos de los proveedores de servicios.  
          .col-lg-4
            figure
              img(src='@/assets/curso/images/tema1/img_6.svg')
        
      .py-4.py-md-5(titulo="Capa de servicios" :icono="require('@/assets/curso/images/tema1/ico_tab_3.svg')")
        .row
          .col-lg-8.mb-4
            h4 Capa de servicios
            p.mb-3 Contiene la implementación de los servicios que proporciona el proveedor. Esta capa contiene y controla los componentes de <i>software</i>  que implementan los servicios, sin incluir aquellos componentes subyacentes como los hipervisores, los sistemas operativos, los controladores de dispositivos, entre otros; y se encarga de ofrecer los servicios en la nube a los usuarios a través de la capa de acceso.
            p El <i>software</i>  de implementación de servicios en esta capa, a su vez, se basa en las capacidades disponibles en la capa de recursos, para proporcionar los servicios que se ofrecen y así garantizar que se cumplan los requisitos de cualquier acuerdo de nivel de servicio (SLA-Service Level Agreement), por ejemplo, mediante el uso de suficientes recursos.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/images/tema1/img_7.svg')

      .py-4.py-md-5(titulo="Capa de recursos" :icono="require('@/assets/curso/images/tema1/ico_tab_4.svg')")
        .row
          .col-lg-8.mb-4
            h4 Capa de servicios
            p.mb-3 En esta capa es donde residen los recursos y que incluye equipamiento típico de un <i>Datacenter</i> como: servidores, <i>switches y routers</i> de red, dispositivos de almacenamiento y también el <i>software</i>  correspondiente no específico de la nube que se ejecuta en los servidores y otros equipos como sistemas operativos <i>host</i>, hipervisores, controladores de dispositivos y <i>software</i>  de gestión de sistemas genérico.
            p.mb-3 La capa de recursos también representa y aloja la funcionalidad de la red de transporte en la nube, necesaria para la conectividad de red subyacente entre el proveedor de servicios en la nube y los usuarios, así como en la parte interna del propio proveedor de servicios en la nube y sus proveedores de servicios de soporte asociados en la cadena de provisión.
            p.mb-3 Tenga en cuenta que para que un proveedor de servicios en la nube proporcione servicios consistentes con el SLA, puede requerir conexiones dedicadas y/o seguras entre los usuarios y el proveedor de servicios en la nube.
        
          .col-lg-4
            figure
              img(src='@/assets/curso/images/tema1/img_8.svg')
    
    p.mb-3 <b>Funciones multicapa.</b> Las funciones multicapa incluyen una serie de componentes funcionales que interactúan con los componentes funcionales de las cuatro capas anteriores para proporcionar capacidades de apoyo que incluyen, entre otras:

    .row.justify-content-center.align-items-center.fondo-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.p-4
          .col-12.col-lg-6.col-md-5
            p.aling-7.mb-5 Capacidades de los <b>sistemas de soporte operativo</b> #[br](Administración, monitoreo, aprovisionamiento #[br]y mantenimiento en tiempo de ejecución)
          .col-12.col-lg-6.col-md-5.mb-4.mb-md-0
            figure
              img.mx-3(src='@/assets/curso/images/tema1/img_9.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-11.col-lg-6.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/images/tema1/img_10.svg',  alt='', style="width:500px; display:block; margin:0 2rem;")
          .col-12.col-lg-6
            p.aling-8.mb-5 Capacidades de los <b>sistemas de soporte empresarial</b> #[br] (catálogo de productos, facturación y gestión).
          
        
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6
            p.aling-8.mb-5 Capacidades de los <b>sistemas de seguridad</b> #[br](autenticación, autorización, auditoría, validación, cifrado).
          .col-12.col-lg-6
            figure
              img(src='@/assets/curso/images/tema1/img_11.svg')

              
        .row.justify-content-center.align-items-center
          .col-11.col-lg-6.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/images/tema1/img_12.svg' alt='', style="width:400px; display:block; margin:0 auto;")

          .col-10.col-lg-6.col-md-5
            p.mb-0 Capacidades de <b>integración</b> #[br] (vinculación de diferentes componentes para lograr la funcionalidad requerida).
            

        .row.justify-content-center.align-items-center
          .col-10.col-lg-5.col-md-5
            p.mb-5 Capacidades de <b>apoyo al desarrollo </b> (que implican la creación, prueba y gestión del ciclo de vida de servicios y componentes de servicio).
          .col-11.col-lg-6.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/images/tema1/img_13.svg', alt='')

    Separador

    #t_1_3.titulo-segundo
      .h4 1.3 Relaciones entre la vista del usuario y la funcionalidad

    p.mb-5 La computación en la nube desde la mirada del usuario comprende el reconocimiento de algunas actividades y conceptos de los cuales debe de tener claridad, a continuación, se mencionan algunos de esos conceptos y actividades necesarias para adquirir y/o acceder a servicios ofrecidos a través de la nube.

    .row.mb-4.ps-2
      .col-8.col-lg-3.bg-color
        h3.mb-0.text-white Actividades de computación en la nube

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-8.col-lg-12.col-xl-12 
        .cajon.color-custom.p-3
          p.text-small Una actividad de computación en la nube se define como una búsqueda o un conjunto de tareas específicas, las cuales deben tener un propósito y generar uno o más resultados y se llevan a cabo utilizando componentes funcionales.

    .row.mb-4.ps-3
      .col-8.col-lg-3.bg-color-1
        h3.mb-0.text-white Roles y subroles

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-8.col-lg-12.col-xl-12 
        .cajon.color-custom.p-3
          p Un rol es un conjunto de actividades de computación en la nube que tienen un propósito común. A continuación, se mencionarán tres roles esenciales:

    .row.mb-5
      .col-lg-3.d-flex
        .tarjeta--sencilla-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.my-4(src='@/assets/curso/images/tema1/ico_4.svg', alt='icono-avatar')
          h3.aling.mb-4 Cliente
            p.text-small.aling.mt-3 Cliente de servicio en la nube (CSC): usuario o empresa que mantiene una relación comercial con el propósito de utilizar servicios en la nube ofertados por un proveedor.
              
      .col-lg-3.d-flex
        .tarjeta--sencilla-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.my-4(src='@/assets/curso/images/tema1/ico_5.svg', alt='icono-avatar')
          h3.aling Proveedor
            p.text-small.aling.mt-3 Proveedor de servicios en la nube (CSP): es la empresa quien ofrece y pone a disposición de los clientes un conjunto de servicios, en todas las categorías a fin de dar solución y respuesta a cada cliente de acuerdo a sus particularidades o necesidades.
      
      .col-lg-3.d-flex
        .tarjeta--sencilla-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.my-4(src='@/assets/curso/images/tema1/ico_6.svg', alt='icono-avatar')
          h3.aling Partner
            p.text-small.aling.mt-3 Partner de servicios en la nube (CSN): parte que se dedica a proporcionar soporte o asistencia a las actividades del CSP, del CSC o de ambos.

      .col-lg-3.d-flex
        .tarjeta--sencilla-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.my-4(src='@/assets/curso/images/tema1/ico_7.svg', alt='icono-avatar')
          h3.aling Subroles Asociados
            p.text-small.aling.mt-3 Un sub-rol es un subconjunto de las actividades de computación en la nube para un rol determinado. Diferentes sub-roles pueden compartir las actividades de computación en la nube asociadas con un rol determinado.

    .row.mb-5.ps-5.fondo-3
      .col-8.col-lg-3.bg-color-4
        h3.mb-0.text-white Partes

      .row.justify-content-center.align-items-center.my-5
        .col-12.col-md-8.col-lg-12.col-xl-12 
          .cajon.color-custom.p-3
            p.mb-3 Una parte es una persona física o jurídica, incorporada o no, o un grupo de ambas, conocidas como partes interesadas.

            p Una parte puede asumir más de un rol en cualquier momento dado y puede participar en un subconjunto específico de actividades de ese rol, una parte interesada puede ser entre otras: grandes corporaciones, pequeñas y medianas empresas, departamentos gubernamentales, instituciones académicas y ciudadanos a nivel particular.

      .row.mb-5.ps-4
        .col-8.col-lg-3.bg-color-2
          h3.mb-0.text-white Servicios en la nube
      
        .row.justify-content-center.align-items-center.my-5
          .col-12.col-md-4.col-lg-6.col-xl-6
            .cajon.color-custom.p-3
              p.mb-3 Los servicios en la nube son los elementos esenciales de la computación en la nube, son los diferentes tipos de capacidades ofertados por un proveedor de servicios de Cloud, en la actualidad son muchos los diferentes tipos de servicios ofertados, pero de acuerdo al estándar ISO/IEC 17788, son tres los tipos de servicios o capacidades proporcionados por el servicio en la nube, estos son:

            LineaTiempoD.color-acento-contenido.mt-5
              p.text-small.color.line(numero="1" titulo="Aplicación") Se encuentra en la capa más alta, es un servicio ofrecido bajo demanada a través de multitenencia, es accesible por medio de un navegador web, el usuario no tiene control sobre ella, y posibilita la reducción de costos de soporte y mantenimiento.

              p.text-small(numero="2" titulo="Plataforma") Aquí, el proveedor proporciona la plataforma para el desarrollo de aplicaciones, así como su mantenimiento y gestión. Es decir, ofrece todo lo que se necesita para completar el ciclo de vida y despliegue de dichas aplicaciones o servicios web. El usuario carece de control sobre la infraestructura de almacenamiento o redes.
                
              p.text-small(numero="3" titulo="Infraestructura") En este, el cliente adquiere del proveedor externo todos los recursos. Normalmente se lleva a cabo mediante una plataforma de virtualización. De los tres tipos de servicios, es el que mayor control otorga al usuario y, por ende, el que tiene mayor complejidad de uso.
          
          .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
            img(src="@/assets/curso/images/tema1/img_14.png" alt="AvatarTop",).mb-image

          .row.justify-content-center.align-items-center
            .col-12.col-md-4.col-lg-8.col-xl-8
              .cajon.color-custom.p-3
                p.mb-3 Los servicios en la nube también se agrupan en categorías (categoría corresponde a un grupo de servicios en la nube), las cuales poseen un conjunto común de cualidades. Los servicios de estas categorías pueden incluir capacidades de uno o más de los tipos de capacidades en la nube anteriores, entre otros pueden ser:
            .col-12.col-md-4.col-lg-4.col-xl-4
              ul.lista-ul--color
                li 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Infraestructura como servicio (IaaS).
                li
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Plataforma como servicio (PaaS).
                li 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | <i>software</i> como servicio (SaaS).
                li 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Red como servicio (NaaS).
                li 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Otros adicionales.
                  
          p.mb-0 Estos servicios fueron descritos en el componente formativo denominado “Generalidades de la Computación en la Nube” se invita a revisarlo, para recordar o profundizar estas temáticas.

    .row.mb-5.ps-2.p-text
      .col-8.col-lg-3.bg-color
        h3.mb-0.text-white Modelos de implementación en la nube

    .row.justify-content-center.align-items-center.mb-3
        .col-12.col-md-4.col-lg-8.col-xl-8
          .cajon.color-custom.p-3
            p.mb-3 Los modelos de implementación en la nube son una forma en la que puede organizar en función del control y el intercambio de recursos físicos o virtuales. Como se vio anteriormente en este mismo curso, los modelos de implementación en la nube son:acidades de uno o más de los tipos de capacidades en la nube anteriores, entre otros pueden ser:
        .col-12.col-md-4.col-lg-3.col-xl-3
          ul.lista-ul--color
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Nube pública.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Nube privada.
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Nube comunitaria
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Nube híbrida.

    p.mb-3 Existen algunos aspectos que se llaman transversales, porque se aplican a múltiples roles individuales o componentes funcionales, por ejemplo, la seguridad.            


    .row.mb-5.ps-2
      .col-8.col-lg-3.bg-color-2
        h3.mb-0.text-white La vista funcional

    .col-lg-12.mx-auto.mb-5
      .tema1-1 
        .bloque-texto-a.color-custom-1.p-2.p-md-5
          .row.m-0.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema1/img_15.png' alt='' style="width:280px; display:block; margin:auto -3rem;")
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-0 Este punto de vista funcional trata de aportar una visión similar al del modelo OSI (<i>Open Systems Interconnection</i>) de “Interconexión de Sistemas Abiertos” en el ámbito de los protocolos de comunicación de las redes informáticas, es decir, las funcionalidades que cada capa debe aportar en relación a las dependencias entre funciones.

    p.mb-3 Esto permite situar a los fabricantes y sus tecnologías específicas dentro de los objetivos de funcionalidad concretos dentro de cada capa para que todos los componentes de todas las capas del sistema tengan sentido encajando unos con otros según lo esperado e independientemente de las diferencias particulares en prestaciones, fiabilidad, calidad, rendimiento, entre otras que cada vendedor incorpore en su caso particular.

    p Según este sentido, los conceptos presentes en la vista funcional son: las capas y los componentes funcionales. Se ampliará la información sobre cada uno de ellos.

    .row.mb-4.ps-2
      .col-8.col-lg-3.bg-color-2
        h3.mb-0.text-white Capas funcionales

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-12.col-xl-12
        .cajon.color-custom.p-3
          p.mb-3 La arquitectura funcional está segmentada en capas junto a un conjunto de funciones multicapa, cada capa representa un conjunto de componentes funcionales que proporcionan capacidades similares o tienen un propósito común.

          p.mb-0 Las siguientes cuatro capas representadas son de referencia típica, pero se debe tener en cuenta que no todas las capas o componentes funcionales requeridos están necesariamente instanciados en un sistema de computación en la nube específico:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Capa de usuario")
        .col-lg-5
          h3 Capa de usuario
          p  Incluye los componentes funcionales que respaldan las actividades de la nube de los Clientes de Servicios en la Nube y los Partners de Servicios en la Nube.
      
        .col-lg-7
          figure
            img(src='@/assets/curso/images/tema1/img_16.png' alt='')


      div.row(titulo="Capa de acceso")
        .col-lg-5
          h3 Capa de acceso
          p  Incluye componentes funcionales que facilitan la distribución de funciones y la interconexión.
      
        .col-lg-7
          figure
            img(src='@/assets/curso/images/tema1/img_17.png' alt='')


      .row(titulo="Capa de servicio")
        .col-lg-5
          h3 Capa de servicio
          p Incluye componentes funcionales que proporcionan los propios servicios en la nube más las capacidades administrativas y comerciales relacionadas, y las capacidades de orquestación necesarias para realizarlos.
        .col-lg-7
            figure
              img(src='@/assets/curso/images/tema1/img_18.png' alt='')


      div.row(titulo="Capa de recursos")
        .col-lg-5
          h3 Capa de recursos
          p  Capa de recursos Incluye los componentes funcionales que representan los recursos necesarios para implementar el sistema de computación en la nube.
      
        .col-lg-7
          figure
            img(src='@/assets/curso/images/tema1/img_19.png' alt='')
    
    .row.mb-5.ps-2.fondo-15
      .col-8.col-lg-3.bg-color-5
        h3.mb-0.text-white Componentes funcionales

      .row.justify-content-center.align-items-center.mb-3.mt-4
          .col-12.col-md-4.col-lg-8.col-xl-8
            .cajon.color-custom.p-3
              p.mb-3 Un componente funcional es un bloque de construcción funcional necesario para participar en una actividad, respaldado por una implementación. Las capacidades de un sistema de computación en la nube están completamente definidas por el conjunto de componentes funcionales implementados.

              P Existen funciones multicapa que proporcionan capacidades que se utilizan en múltiples capas funcionales y que se agrupan en subconjuntos, entre ellos se puede encontrar:
          .col-12.col-md-4.col-lg-4.col-xl-4
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Apoyo al desarrollo.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Integración.
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Sistemas de seguridad.
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Sistemas de apoyo operativo.
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Sistemas de apoyo empresarial.

      #menu1.row.justify-content-center.mb-3
        .col-lg-12
          .contenedor-total
            figure
              img.mx-auto(src='@/assets/curso/images/tema1/img_20.png' alt='', style="width:1000px; display:block; margin:0 auto;")
            .contenedor-text.cd 
              .row.justify-content-center.p-4
                .col-auto
                  p.mb-5.aling-8 A continuación, se podrá observar en detalle los componentes funcionales por capa:

          .row.justify-content-center.mx-0
            .col-sm-6.col-lg-3.mb-4.mb-lg-0.btn.mb-5
              a(href="#1", title="Capa de usuario") 
                figure
                  img(src='@/assets/curso/images/tema1/ico_menu_1.svg' alt='1').mb-3
                .indicador-click(v-if="mostrarIndicador")
            .col-sm-6.col-lg-3.mb-4.mb-lg-0.btn.mb-5
              a(href="#2", title="Capa de acceso") 
                figure
                  img(src='@/assets/curso/images/tema1/ico_menu_2.svg' alt='1').mb-3
                .indicador--click(v-if="mostrarIndicador")      
            .col-sm-6.col-lg-3.mb-4.mb-lg-0.btn.mb-5
              a(href="#3", title="Capa de servicio") 
                figure
                  img(src='@/assets/curso/images/tema1/ico_menu_3.svg' alt='1')
                .indicador--click(v-if="mostrarIndicador")  
    br
    #1.pRelative
      .backtoTop
        a(href="#menu1", title="Capa de usuario") 
          img(src='@/assets/curso/images/tema1/flechitaCAC.svg' alt='Volver arriba' style="width:60px; display:block; margin:0 auto;")
  
    .row.mb-5.ps-2
      .col-8.col-lg-2.bg-color-11
        h3.mb-0.text-white Capa de usuario

    p.mb-3 Los componentes funcionales de la capa de usuario incluyen:

    .row.justify-content-center.align-items-center.mb-3.fondo-14
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema1/ico_8.svg', alt="", style="width:100px; display:block; margin:0 1rem;").tj
          .tarjeta.color-tarjeta-1
            .p-4
              h4 La función de usuario
              p.mb-3 Este componente funcional da soporte al usuario para poder acceder y utilizar los servicios en la nube. 

              p En algunos casos, este componente funcional podría ser tan simple como un navegador que se ejecuta en un dispositivo de usuario. En otros casos, podría implicar un sistema empresarial sofisticado que ejecute procesos de negocio, aplicaciones, <i>middleware</i> e infraestructura asociada.
    
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema1/ico_9.svg', alt="", style="width:100px; display:block; margin:0 1rem;").tj
          .tarjeta.color-tarjeta-1
            .p-4
              h4 La función comercial
              p Apoya las actividades de computación en la nube del gerente comercial del cliente de servicios en la nube, incluida la selección y compra de servicios, la gestión contable y la financiera relacionada con el uso de servicios en la nube, generalmente las capacidades comerciales se ofrecen a través de servicios en la nube.
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema1/ico_10.svg', alt="", style="width:100px; display:block; margin:0 1rem;").tj
          .tarjeta.color-tarjeta-1
            .p-4
              h4 La función comercial
              p.mb-3   Este componente funcional es compatible con las actividades de computación en la nube del administrador de servicios en la nube del cliente. 

              p Esto incluye funciones para la administración de identidades y perfiles de usuarios, el monitoreo de la actividad y el uso del servicio, el manejo de eventos y la notificación de problemas.
    hr
    .row.fondo-16    
      #2.pRelative_2
        .backtoTop-2
          a(href="#menu1", title="Capas de acceso") 
            img(src='@/assets/curso/images/tema1/flechitaCAC.svg' alt='Volver arriba' style="width:60px; display:block; margin:0 -2rem;")
    
      .row.mb-5.ps-2
        .col-8.col-lg-2.bg-color-11
          h3.mb-0.text-white Capas de acceso

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-4.col-lg-6.col-xl-7
          p.mb-0 Los componentes funcionales de la capa de acceso incluyen:

          LineaTiempoD.color-acento-contenido.mt-5
            p.text-small.color.line(numero="1" titulo="Control de acceso") Se debe proporcionar control de acceso a los servicios en la nube, los recursos de los que dependen y las funciones de control relacionadas, por tanto, este componente funcional limita el uso a los servicios particulares de los usuarios, implica la autenticación de un usuario a través de la plataforma de acceso, validación de credenciales, seguida de la autorización de este usuario autenticado para utilizar servicios específicos, es fundamental en este componente la gestión de identidades.

            p.text-small(numero="2" titulo="Acceso al servicio") Proporciona acceso a los servicios en la nube ofrecidos por el proveedor de servicios.
              
            p.text-small(numero="3" titulo="Acceso comercial") Este componente funcional proporciona acceso a las capacidades empresariales ofrecidas por el proveedor y adquiridas por el cliente, incluye sistemas y mecanismos de soporte de tipo empresarial.

            p.text-small(numero="4" titulo="Administración acceso") Proporciona acceso a las capacidades de administración ofrecidas por el proveedor, son las interfaces de gestión y administración de los accesos con que cuenta cada usuario al adquirir un servicio en la nube.

            p.text-small(numero="5" titulo="Acceso al desarrollo") Capacidades dentro del sistema ofrecidas por el proveedor de servicios en la nube, que respalda el desarrollo, la prueba y el mantenimiento de las implementaciones de servicios adquiridos.

            p.text-small(numero="6" titulo="Gestión de conexiones") Este componente funcional proporciona la aplicación de las políticas de QoS con respecto al tráfico desde y/o hacia los componentes funcionales de la capa de usuario. El componente funcional de gestión de la conexión interactúa con las funciones de múltiples capas para recuperar las políticas almacenadas allí y las aplica localmente en la capa de acceso.

        .col-12.col-md-8.col-lg-6.col-xl-5.mb-4
          img(src="@/assets/curso/images/tema1/img_21.png" alt="AvatarTop",)
    hr
    #3.pRelative
      .backtoTop-1
        a(href="#menu1", title="Capa de servicio") 
          img(src='@/assets/curso/images/tema1/flechitaCAC.svg' alt='Volver arriba' style="width:60px; display:block; margin:0 auto;")
    
    .row.mb-5.ps-2
      .col-8.col-lg-2.bg-color-11
        h3.mb-0.text-white Capa de servicio
    
    p.mb-3  Los Componentes funcionales de la capa de servicio incluyen: 
    br
    SlyderF.elemento.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.sp1.p-3
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/images/tema1/ico_11.svg' alt='Volver arriba' style="width:85px; display:block; margin:0 auto;")
        h3.aling.text-white Capacidades de servicio
        p.aling.text-white.text-small Se debe proporcionar control de acceso a los servicios en la nube, los recursos de los que dependen y las funciones de control relacionadas, por tanto, este componente funcional limita el uso a los servicios particulares de los usuarios, implica la autenticación de un usuario a través de la plataforma de acceso, validación de credenciales, seguida de la autorización de este usuario autenticado para utilizar servicios específicos, es fundamental en este componente la gestión de identidades.

      .tarjeta.sp1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/images/tema1/ico_12.svg' alt='Volver arriba' style="width:80px; display:block; margin:0 auto;")
        h3.aling.text-white Capacidades comerciales
        p.aling.text-white Proporciona un conjunto de capacidades para acceder a la función comercial relacionada con la prestación de servicios en la nube. La función empresarial en sí está contenida dentro de los componentes funcionales de los sistemas de soporte empresarial.

      .tarjeta.sp1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/images/tema1/ico_13.svg' alt='Volver arriba' style="width:80px; display:block; margin:0 auto;")
        h3.aling.text-white Capacidades de administración
        p.aling.text-white.tslyder Suministra capacidades para acceder a la función de administración relacionada con la prestación de servicios en la nube.

      .tarjeta.sp1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/images/tema1/ico_14.svg' alt='AvatarTop' style="width:80px; display:block; margin:0 auto;")
        h3.aling.text-white Orquestación de servicio
        p.aling.text-white.tslyder Proporciona coordinación, agregación y composición de múltiples componentes de servicios para brindar el servicio en la nube.
        

    Separador

    #t_1_4.titulo-segundo
      .h4 1.4 Consideraciones operativas de los servicios en la nube

    .row.align-items-center.fondo-12.mb-5
      .col-12.col-md-8.col-lg-4.col-xl-4
        img(src="@/assets/curso/images/tema1/img_22.png" alt="AvatarTop", style="width:390px; display:block; margin:-1rem 7rem;").mb-3
      .col-12.col-md-4.col-lg-8.col-xl-8.mb-3
        p.aling-2.text-white Existen aspectos transversales que, como su nombre lo indica, aplican tanto a la vista #[br] del usuario como en la arquitectura  y en lo funcional del lado del proveedor de servicios #[br]de computación en la nube. Estos aspectos transversales son cuestiones compartidas entre #[br]  los roles, actividades y componentes funcionales que aplican a roles y sub-roles #[br] en la vista del usuario y deben considerarse en las actividades que #[br] desempeñan directa o indirectamente.

    .row.justify-content-center.align-items-center.d-block.d-lg-none.fondo-18.mb-5.mb-4
      .col-12.col-md-8.col-lg-6.col-xl-5.mb-4
        img.my-3(src="@/assets/curso/images/tema1/img_22.png" alt="AvatarTop", style="width:370px; display:block; margin:-6rem -1rem;")
      .col-12.col-md-4.col-lg-6.col-xl-7.mb-3
         p.text-white Existen aspectos transversales que, como su nombre lo indica, aplican tanto a la vista # del usuario como en la arquitectura  y en lo funcional del lado del proveedor de servicios de computación en la nube. Estos aspectos transversales son cuestiones compartidas entre los roles, actividades y componentes funcionales que aplican a roles y sub-roles en la vista del usuario y deben considerarse en las actividades que desempeñan directa o indirectamente.
    
    .row.align-items-center.mb-5.fondo-3.p-3
      .col-12.col-md-8.col-lg-8.col-xl-8
        p.mb-3 Un ejemplo de aspecto transversal es la seguridad porque aplica a la infraestructura, los servicios, los proveedores de servicios en la nube, los clientes de servicios en la nube y los socios de servicios en la nube (auditores de la nube, desarrolladores de servicios en la nube, etc.).

        p Aunque la seguridad es transversal, el proceso, implementación y gestión de esta es distinta dependiendo de la capa del servicio y del nivel funcional, (figura 1). A continuación, se mencionarán de manera general los diferentes aspectos que de manera transversal intervienen en la computación en la nube.
      .col-12.col-md-4.col-lg-4.col-xl-4.mb-3
        img(src="@/assets/curso/images/tema1/img_23.svg" alt="AvatarTop")

      .row.justify-content-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 1 
            span  Servicios en la nube
      
      .col-12.col-md-4.col-lg-12.col-xl-12.mb-3
          img(src="@/assets/curso/images/tema1/fig_1.svg" alt="AvatarTop")

    h3 Auditabilidad 

    .row.align-items-center.mb-5
      .col-12.col-md-4.col-lg-4.col-xl-4.mb-3
        img(src="@/assets/curso/images/tema1/img_24.svg" alt="AvatarTop")
      .col-12.col-md-8.col-lg-8.col-xl-8
        p.mb-3 Hace referencia a la propiedad o capacidad de poder auditarse, este es un aspecto que se refiere a la capacidad de recopilar y poner a disposición la información probatoria necesaria relacionada con la operación y el uso de un servicio en la nube, con el objetivo de realizar una auditoría. 
        p Está relacionado con la gobernanza de los servicios en nube como garantía que esos servicios se prestan y utilizan en coherencia con los acuerdos de servicios asociados entre los clientes, proveedores y partners de servicios en la nube. Por tanto, esta garantía se logra con mayor frecuencia mediante auditorías independientes de servicios.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-4.col-lg-12.col-xl-12
        .cajon.color-custom.p-3
          p.mb-3 Una auditoría generalmente produce como resultado final un informe de auditoría que incluye algún tipo de recomendación o aval de certificación final y que se pone a disposición de las partes de los acuerdos de servicios asociados, la auditoría en sí depende de la disponibilidad de datos y pruebas que sostienen la evidencia en el uso, el entorno, la disponibilidad y el rendimiento de los servicios y los recursos asociados.

    .row.justify-content-center.align-items-center.fondo-3.mb-3.p-3
      h5.aling.mb-3 Como garantía de la auditabilidad esta información documentada debe recopilarse y mantenerse de manera segura, por tanto, el objetivo de la auditoría de la computación en la nube es:

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-md-4.col-lg-10.col-xl-10
          PasosA.color-acento-botones.mb-5(tipo="n")
            div        
              p.mb-0 Proporcionar a las partes interesadas una evaluación de la eficacia de los controles internos y la seguridad del proveedor de servicios de computación en la nube.

            div        
              p.mb-0 Identificar las deficiencias del control interno dentro de la organización del cliente y su interfaz con el proveedor de servicios. 

            div        
              p.mb-0 Proporcionar a las partes interesadas de la auditoría una evaluación de la calidad y su capacidad para confiar en las certificaciones del proveedor de servicios con respecto a los controles internos.

            div        
              p.mb-0 La auditoría no está diseñada para reemplazar o enfocarse en aspectos de auditoría relacionados con procesos de aplicación específicos y excluye la garantía de la funcionalidad e idoneidad de una aplicación en sí misma.

            div        
              p.mb-0 El alcance de la auditoría se centrará esencialmente en aspectos relacionados con:
                ul.lista-ul--color.mt-3
                  li 
                    i.fas.fa-caret-right(style="color: #FF2C9C")
                    | La gobernanza que afecta a la computación en la nube.
                  li
                    i.fas.fa-caret-right(style="color: #FF2C9C")
                    | El cumplimiento contractual entre el prestador de servicios y el cliente.
                  li 
                    i.fas.fa-caret-right(style="color: #FF2C9C")
                    | Controlar problemas específicos de la computación en nube.
            
            div        
              p.mb-0 Dado que las áreas bajo revisión dependen en gran medida de la efectividad de los controles generales de TI básicos, se suelen realizar revisiones de aseguramiento de las siguientes áreas previas a la ejecución de la revisión propiamente dicha de los servicios de nube. 

    p.mb-3 Entre estas áreas se destacan:

    .row.align-items-center.fondo-3.mb-5.p-3
      .col-12.col-md-8.col-lg-7.col-xl-7
        ul.lista-ul--color
          li 
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | Gestión de la identidad, si el sistema de gestión de la identidad de la organización está integrado con el sistema de computación en la nube.
          li
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | Gestión de incidentes de seguridad y su interacción y gestión con los incidentes de computación en la nube.
          li 
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | Seguridad del perímetro de la red al ser el punto de acceso típico a Internet.
          li 
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | Desarrollo de sistemas para aquellos en los que la nube es parte de la infraestructura de la aplicación
          li 
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | Gestión de proyectos.
          li 
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | Gestión de riesgos de TI.
          li 
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | Gestión de datos para aquellos que son transmitidos y almacenados en sistemas en la nube.
          li 
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | Gestión de vulnerabilidades.
      .col-12.col-md-4.col-lg-5.col-xl-5.mb-3
        img(src="@/assets/curso/images/tema1/img_25.svg" alt="AvatarTop")

    .row.fondo-3.p-3
      h3 Disponibilidad
        br
        br
        .col-lg-12.mx-auto.mb-5
          .tema1-1
            .bloque-texto-a.color-custom-3.p-4.p-md-5.mb-5 
              .row.m-0.align-items-center.justify-content-between
                .col-lg-9
                  .bloque-texto-a__texto.p-5
                    p.text-small.mb-2 Este aspecto se refiere a la propiedad de poder garantizar que los servicios estén siempre disponibles, o accesibles y utilizables en todo momento a pedido de una entidad autorizada. La “entidad autorizada” suele ser un cliente de servicios en la nube.

                    p.text-small.mb-2 La implicación de este aspecto se integra dentro de otros aspectos que se explican de forma más amplia como el de la seguridad y del gobierno, tal y como se puede ver más adelante.

                    p.text-small La disponibilidad como tal en los servicios en nube es un aspecto que debe ser concretizado en los SLA asociados.
                .col-lg-3.mb-4.mb-lg-0
                  figure
                   img(src='@/assets/curso/images/tema1/img_26.svg' alt='' style="width:220px; display:block; margin:0 auto;")

        h3.mb-3 Gobernanza
        p.mb-3 Este aspecto se refiere al sistema mediante el cual se dirige y controla la prestación y el uso de los servicios en la nube, el término de gobierno interno de la nube se utiliza para la aplicación de políticas de tiempo de diseño y tiempo de ejecución para garantizar que las soluciones basadas en la computación en la nube se diseñen e implementen de acuerdo con las expectativas especificadas, junto con la entrega de los servicios asociados.

        p.mb-3 Dentro de la gobernanza se pueden incluir algunos o todos los aspectos transversales al diseño y puesta en funcionamiento de servicios en la nube.


        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-md-4.col-lg-12.col-xl-12
            .cajon.color-custom-2.p-3
              p.mb-3 Este aspecto se refiere al sistema mediante el cual se dirige y controla la prestación y el uso de los servicios en la nube, el término de gobierno interno de la nube se utiliza para la aplicación de políticas de tiempo de diseño y tiempo de ejecución para garantizar que las soluciones basadas en la computación en la nube se diseñen e implementen de acuerdo con las expectativas especificadas, junto con la entrega de los servicios asociados.
              p Dentro de la gobernanza se pueden incluir algunos o todos los aspectos transversales al diseño y puesta en funcionamiento de servicios en la nube.

      .col-lg-12.mx-auto.mb-5
        .tema1-1 
          .bloque-texto-a.color-custom-1.p-3.p-md-5
            .row.m-0.align-items-center
              .col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/images/tema1/img_27.png' alt='')
              .col-lg-9
                .bloque-texto-a__texto.p-3
                  p.mb-3 Las prácticas de gobierno individuales aplicadas de manera continua por los clientes y los proveedores, van desde lo más sencillo hasta lo sofisticado y están encapsuladas dentro de cada rol. Por tanto, es responsabilidad de cada rol implementar la gobernanza de acuerdo con sus necesidades. 

                  p El gobierno de la nube se incluye como un aspecto transversal debido al requisito de transparencia y la necesidad de racionalizar las prácticas de gobernanza respecto a los SLA y otros elementos contractuales que determinan la relación entre el cliente y el proveedor.
    
    p.mb-5 Adicionalmente se conoce el término de gobierno externo de la nube al acuerdo entre el cliente y el proveedor de servicios en la nube respecto al uso de los servicios por parte del cliente, puede hacer referencia a un acuerdo de nivel de servicio que proporciona información detallada sobre los aspectos funcionales y no funcionales de los servicios.

    h3 Interoperabilidad
    
    p.mb-3 Este aspecto en el contexto de la computación en nube se refiere a la capacidad de un cliente de servicios de computación en la nube para interactuar e intercambiar información de acuerdo con un método prescrito y obtener resultados predecibles. En el siguiente vídeo se podrá conocer más a este respecto.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3 Control de versiones
    
    .row.align-items-center.mb-5
      .col-12.col-md-8.col-lg-7.col-xl-7
        p.mb-0 El mantenimiento puede tener lugar por una variedad de razones, incluida la necesidad de reparar fallas y también la necesidad de actualizar o ampliar las instalaciones, estos procesos de mantenimiento pueden cambiar el comportamiento de los servicios en la nube, por ejemplo, afectando el funcionamiento de un servicio cuando lo utiliza un cliente, por estos motivos es un elemento importante relacionado con la gobernanza tanto por las actividades en sí mismas como por los recursos subyacentes relacionados con estas acciones.
      .col-12.col-md-4.col-lg-5.col-xl-5.mb-3
        img(src="@/assets/curso/images/tema1/img_28.svg" alt="AvatarTop")

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-4.col-lg-12.col-xl-12
        .cajon.color-custom-2.p-3
          p.mb-3 Se debe diferenciar los mantenimientos desarrollados por cliente de los desarrollados por el proveedor de servicios en la nube especialmente dependerá del tipo de servicio al cual se le programa, por ejemplo. para el caso de un servicio SaaS prácticamente todas las acciones de mantenimiento se espera que sean realizadas por el proveedor mientras que, en el caso de los servicios IaaS y PaaS, los componentes de la aplicación pertenecen al cliente y consecuentemente será el responsable del mantenimiento de esos componentes que podrá realizar con personal propio o mediante un partner asociado que proporcione servicios gestionados en su portafolio. 

    p.mb-3 En cualquier caso, el proveedor es responsable del entorno en el que se ejecutan los componentes de la aplicación, que varía según los detalles del servicio pero que puede incluir elementos como los recursos de <i>hardware</i>, el sistema operativo o el middleware.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-4.col-lg-12.col-xl-12
        .cajon.color-custom.p-3
          p.mb-3 Aunque inicialmente es interesante para el cliente que un servicio o una plataforma de servicios se actualice o se arregle hay que considerar que cualquier cambio en el comportamiento de un servicio puede tener un impacto negativo en la parte del cliente y que acarrea, frecuentemente, cambios en los componentes de la aplicación y en los sistemas TIC del cliente y/o nuevas acciones de capacitación de los usuarios del servicio del proveedor. Por tanto, es importante que el mantenimiento de los servicios esté sujeto a prácticas de gobierno transparentes para que el proveedor pueda estar en la mejor posición para estar prevenido anticipando acciones internas convenientemente y con el objetivo de evitar impactos significativos en el negocio.

    p.mb-3 Las prácticas de mantenimiento en los servicios deben estar documentadas en el SLA e incluir la capacidad para que el cliente informe problemas y solicite soluciones junto a mecanismos de comunicación para que el proveedor notifique al cliente los cambios asociados a mantenimientos pendientes y su programación en el tiempo.

    .col-lg-12.mx-auto.mb-5
      .tema1-1
        .bloque-texto-a.color-custom-3.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-3 El denominado versionado se refiere al etiquetado adecuado de un servicio o de los propios componentes que lo componen según su nivel de complejidad y/o atomización (p.ej. típicas de arquitecturas de microservicios o realizada en función de las capas que lo componen como el nivel de sistema operativo utilizado en un servicio IaaS), de tal modo que el cliente tenga claro qué se está utilizando en una versión en particular. 

                p Es importante que el servicio reciba una etiqueta de nueva versión cuando se realiza el mantenimiento de un servicio en la nube para poder aplicar actividades eficaces de control de versiones de manera adecuada y según procesos garantistas basados en buenas prácticas ampliamente conocidas y aplicadas como modelos (ITIL).
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema1/img_29.svg' alt='')

    p.mb-3 Por ejemplo, cuando se realicen cambios significativos en un servicio de una versión a una nueva, la versión más antigua del servicio debería estar disponible en paralelo con la nueva versión durante un período de tiempo acordado.

  
    h3 Portabilidad
    
    p.mb-3 Este aspecto es importante considerando que los potenciales clientes están interesados en evitar quedar cautivos del proveedor cuando eligen utilizar los servicios en la nube. 

    .row.justify-content-center.align-items-center.mb-5.fondo-3.p-3
      .col-lg-12.mx-auto.mb-5
        .tema1-1 
          .bloque-texto-a.color-custom-1.p-3.p-md-5
            .row.m-0.align-items-center
              .col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/images/tema1/img_30.svg' alt='')
              .col-lg-9
                .bloque-texto-a__texto.p-3
                  p.mb-3 Los clientes necesitan saber que pueden transferir sus datos o aplicaciones entre múltiples proveedores a un nivel de costes y de interrupción aceptables y que puede variar según el tipo específico de servicio en la nube.

                  p Un ejemplo típico es la portabilidad de una organización en su rol de cliente que pueda considerar pasar de su proveedor actual en IaaS a otro alternativo. En este escenario y para el aspecto de portabilidad que se está tratando, el cliente debería poder tomar sus datos y las imágenes de sus máquinas virtuales (VM) y ponerlos en funcionamiento en un servicio IaaS equivalente de una manera relativamente sencilla. 
        br
        p.mb-3 De forma similar cuando un cliente desea trasladar o cambiar de proveedor de servicios SaaS, debería poder llevar sus datos consigo, pero hay que considerar los costes relacionados a costes asociados a las actividades de exportar, mapear e importar los datos en la aplicación SaaS del nuevo proveedor.

        p.mb-3  Un nivel más o menos elevado de costes asociados a estas actividades va a quedar determinado por el grado de alineación de los modelos y formatos de datos de los SaaS de ambos proveedores considerados. Idealmente estos SaaS deberían adoptar formatos de intercambio de datos estándar relevantes según el dominio de aplicación. El cambio entre aplicaciones SaaS también puede implicar que el cliente se adapte a una nueva interfaz de servicio y que está relacionada con la interoperabilidad del servicio como se ha indicado.
        h3 Portabilidad 
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-md-4.col-lg-12.col-xl-12
            .cajon.color-custom.p-3
              p.mb-3 En la portabilidad de aplicaciones en la nube se permite la migración de elementos de un modo similar a instancias de máquina virtual completamente detenida o una imágen de máquina (servicio IaaS) de un proveedor a otro o la migración de componentes de aplicaciones (servicio PaaS) desde un proveedor u otro.
        
        p.mb-3 En ambos casos, existe un aspecto importante a considerar relacionado con la portabilidad de los metadatos relacionados con los componentes de la aplicación que proporcionan información sobre las relaciones de los componentes de la aplicación y sobre la infraestructura requerida asociada, por ejemplo, la configuración de balanceo de cargas o la configuración del <i>firewall.</i>

        p.mb-3 De forma similar a la pérdida de la tabla de indexación de una base de datos relacional, la conservación de los metadatos en un proceso de portabilidad es fundamental para poder materializarla.

    h3 Protección de la información de la identidad personal
    
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-12.col-xl-12
        .cajon.color-custom.p-3
          p.mb-0 Los proveedores deben proteger la recopilación, el procesamiento, la comunicación, el uso y la eliminación segura, adecuada y consistente de la información personal identificable en relación con los servicios en la nube.
          p.mb-3 De acuerdo con las pautas establecidas, uno de los imperativos comerciales claves de una organización es garantizar la protección de datos personales. Aunque la computación en la nube proporciona una solución flexible para recursos compartidos y que incluye <i>software</i>  e información, también plantea desafíos adicionales de confidencialidad para los clientes que utilizan servicios en la nube y también para los proveedores.

    .col-lg-12.mx-auto.mb-5
      .tema1-1
        .bloque-texto-a.color-custom-3.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-3 Ya en el mundo entero y en particular en Colombia existe regulación y normatividad que obliga a los proveedores de servicios a garantizar la información de datos personales, los requisitos legales, reglamentarios y estatutarios varían según el sector del mercado y la jurisdicción y pueden cambiar, en consecuencia, las responsabilidades tanto de los clientes como de los proveedores de servicios en la nube. El cumplimiento de tales requisitos a menudo está relacionado con las actividades de gobierno y gestión de riesgos y puede llegar a ser una labor cada vez más compleja según se incrementa la diversidad del cliente.

            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema1/img_31.svg' alt='' style="width:220px; display:block; margin:0 2rem;")

    h3 Resiliencia 

    p.mb-3 Este aspecto se refiere a la capacidad de un sistema para proporcionar y mantener un nivel aceptable de servicio ante fallas (involuntarias, intencionales o causadas naturalmente) que afecten el funcionamiento normal.

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        h4.aling Describe
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/1.svg' alt='' style="width:140px; display:block; margin:0 auto;")
          .tarjeta.sp1
            .text-white.p-4
              p.aling.text-white La resiliencia describe el conjunto de procesos de monitoreo, preventivos y de respuesta que permiten que un servicio en la nube brinde operaciones continuadas, con cortes predecibles y verificables, a través de acciones de falla y recuperación. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        h4.aling  Fallas
        .tarjeta-avatar 
          img(src='@/assets/curso/images/tema1/2.svg' alt='' style="width:140px; display:block; margin:0 auto;")
          .tarjeta.sp1
            .p-4
              p.aling.text-white Estos procesos, pueden incluir fallas de <i>hardware</i>, comunicaciones y/o <i>software</i> y pueden ocurrir como incidentes aislados o en combinación, incluyendo fallas en serie en forma de efecto dominó. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        h4.aling Acciones
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/3.svg' alt='' style="width:140px; display:block; margin:0 auto;")
          .tarjeta.sp1
            .p-4
              p.aling.text-white También pueden incluir acciones tanto automáticas como manuales, que generalmente abarcan múltiples sistemas y, por lo tanto, su descripción y realización son parte de la infraestructura de nube en global y no una función. Está ligado a temas de seguridad ya que se buscará siempre encontrar el lugar más débil o menos resilientes. 

    h3 Reversibilidad

    p.mb-3 Este aspecto es un término relacionado con el proceso para que los clientes de servicios en la nube recuperen sus datos de cliente y componentes de aplicaciones en la nube.

    p Desde el punto de vista del proveedor para que pueda eliminar todos los datos de un cliente, así como los datos derivados de la prestación del servicio de nube especificados contractualmente después de un período acordado.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-12.col-xl-12
        .cajon.color-custom-2.p-3
          p.mb-0 El principio es el “derecho al olvido” en el sentido de que el cliente tiene derecho a esperar que, una vez que indique al proveedor que dejará de utilizar el servicio o los servicios, habrá un proceso ordenado para que el cliente recupere sus datos del servicio en la nube y sus componentes de aplicación y que el proveedor borrará finalmente todas las copias sin conservar ningún material que pertenezca al cliente después del transcurso de un período acordado.





























  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
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
