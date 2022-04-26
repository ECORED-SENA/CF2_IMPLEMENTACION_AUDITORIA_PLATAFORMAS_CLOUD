<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Roles y responsabilidades en la nube

    .contenedor-total(data-aos="fade")
      figure
        img(src='@/assets/curso/images/tema2/img_1.png' alt='Imagen ambiental' style='')
      .row.justify-content-center.neg--top
        .col-md-11.col-10.bg-degrade-gris-horizontal.border-10.p-4
          p.mb-0 Cuando una organización adquiere servicios en la nube al pasar el tiempo se termina por asignar algunos roles entre los equipos de trabajo de las áreas de TI encargadas de realizar la gestión y la administración sobre los servicios adquiridos.
      
    .row.justify-content-center.fondo-10.p-4
      .col-lg-9  
        .tema1-1 
          .bloque-texto-a.color-custom-1.p-4.p-md-4.mb-4
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                h4 <b>Roles y responsabilidades</b>
              .col-lg-8(data-aos="fade-left")
                .bloque-texto-a__texto.p-4
                  p.mb-3 La definición de roles y responsabilidades asociadas a la adquisición y uso de servicios en la nube tiene relación adicional directa con las competencias que las personas designadas deben disponer para un desarrollo eficaz de las actividades.
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-4
          .col-12.col-md-8.col-lg-12.col-xl-12(data-aos="fade")
            .cajon.color-custom-2.p-4
              p.mb-0 Cuanto mayor y/o más compleja se vuelve una organización, un mayor nivel de formalización y documentación asociada a la descripción y designación de los roles y responsabilidades que intervienen en los procesos se pueden encontrar y que además habilitan a la organización para el desarrollo de las competencias, alcanzar mayores grados de coordinación y eficiencia o, la incorporación de nuevo personal y rotación de este a nivel interno.

        .row.align-items-center.mb-5.p-4
          .col-12.col-md-6.mb-3(data-aos="fade-right")
            p Por todos estos motivos, si la definición de los roles, responsabilidades y autoridad asociada al primer término son importantes en el funcionamiento interno de una organización lo son, aún más, en el caso de la externalización de servicios de soporte esenciales para la entrega de los productos y servicios a proveedores de nube.
            p Aunque el desarrollo de los servicios en nube es una forma novedosa de prestar los servicios TIC, diversos roles y responsabilidades por parte del proveedor se mantienen en relación con la terminología ya utilizada en el entorno de los servicios de las nuevas tecnologías desde el inicio del presente siglo y, en muchas ocasiones, organizadas en relación a marcos de buenas prácticas como ITIL®, COBIT, entre otros posibles y según el tipo de servicio final prestado por el proveedor.    
            p A continuación, se mencionarán algunos de los roles más importantes y sus respectivas actividades.
          .col-12.col-md-6(data-aos="fade-left")
            img(src="@/assets/curso/images/tema2/img_2.svg" alt="AvatarTop")

    Separador 

    #t_2_1.titulo-segundo
      .h2 2.1 	Roles asociados al cliente
   
    .row.bg-tema2-1.mb-5
      .col-lg-12.px-lg-2.px-4.py-3
        .row.align-items-center.justify-content-evenly
          .col-md-4.col-10.mb-md-0.mb-4.mb-lg-0(data-aos="fade-right")
            img.px-md-3(src='@/assets/curso/images/tema2/img_3.png' alt='Imagen decorativa')
          .col-md-6.text-white.esquina.p-3(data-aos="fade-left")
            p Un cliente de servicios en la nube mantiene una relación comercial con un proveedor de servicios para el uso de unos servicios específicos, adicionalmente, un cliente de servicios  en la nube puede mantener una relación comercial con un socio de servicios en la nube para una variedad de propósitos.
            p.mb-0 Se Indica a continuación los cuatro sub-roles más habituales en el lado del cliente:
        
      
    .row.justify-content-center.mb-3.p-5
      .col-12.col-md-6(data-aos="fade-right")
        .col-8.mb-4.bg-color-1
          h3.mb-0.text-white Usuarios
        p Corresponde a una persona física o entidad que actúa en su nombre, pero asociado con un cliente del servicio en la nube, las actividades de computación en la nube del usuario del servicio incluyen, principalmente, el uso de los servicios en la nube contratado por el cliente a un proveedor de servicios en la nube para realizar algunas tareas que generalmente implica:
        ul.lista-ul--color
          li 
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | La provisión de credenciales de usuario para permitir al proveedor autenticar al usuario y otorgar acceso al servicio en la nube.
          li
            i.fas.fa-caret-right(style="color: #FF2C9C")
            | La invocación del servicio en la nube, que luego opera y entrega los resultados especificados.
      .col-md-1
      .col-12.col-md-4.mb-3(data-aos="fade-left")
        img(src="@/assets/curso/images/tema2/img_ex.svg")
      .col-md-1  

    .row.mb-4.ps-2
      .col-8.col-lg-3.bg-color-1
        h3.mb-0.text-white Administrador

    .row.justify-content-center.align-items-center
      .col-12.col-md-8.col-lg-12.col-xl-12.mb-4(data-aos="fade")        
        .cajon.color-custom-2.p-4.mb-3
          p.mb-3 El objetivo principal de administrador de los servicios en la nube contratados es la de garantizar el buen funcionamiento del uso de los servicios en la nube por parte del cliente, adicionalmente, los servicios contratados deben funcionar bien con los sistemas y aplicaciones TIC existentes en el lado del cliente, bien en propiedad o también en nube.
          p.mb-3 Por tanto, el administrador de servicios en la nube es el responsable de supervisar todos los procesos operativos relacionados con el uso de los servicios en la nube y actúa como punto de referencia para las comunicaciones técnicas entre el cliente y el proveedor de servicios.
          p.mb-0 Las actividades del administrador de servicios en la nube del lado del cliente incluyen:

    TabsB.color-acento-botones.mb-5(data-aos="fade")
      .py-4.py-md-5(titulo="Realiza pruebas de servicio" :icono="require('@/assets/curso/images/tema2/ico_tab_1.svg')")
        .row
          .col-lg-7
            h4 Realizar pruebas de servicio
            p  Realizar prueba de servicio: implica el uso de los servicios del proveedor para garantizar que el servicio en la nube sea adecuado para las necesidades comerciales del cliente. Los servicios en la nube se utilizan a modo de prueba, con mutuo acuerdo y entendimiento entre el proveedor y el cliente. Esta actividad implica:
              ul.lista-ul--color.mt-3
                li 
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | La provisión de las credenciales de usuario para permitir al proveedor autenticar al usuario y otorgar acceso al servicio en la nube “de prueba“.
                li
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | otorgar acceso al servicio en la nube “de prueba“. La invocación del servicio en la nube “de prueba” que el cliente puede probar con fines comerciales.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema2/img_4.svg')

      .py-4.py-md-5(titulo="Servicio de monitoreo" :icono="require('@/assets/curso/images/tema2/ico_tab_2.svg')")
        .row
          .col-lg-7
            h4 Servicio de monitoreo
            p.mb-3 Supervisa la calidad del servicio prestado con respecto a los niveles de servicio según se define en el acuerdo de nivel de servicio (SLA) entre el cliente y el proveedor. Como vimos en el modelo de arquitectura de capas y multicapa, esta actividad utiliza funciones intrínsecas del sistema en la nube. Esta actividad implica:
              ul.lista-ul--color.mt-3
                li 
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Realizar un seguimiento del uso que se está haciendo de cada servicio en la nube y por qué usuarios con la garantía de que el uso sea el apropiado.
                li
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Supervisar la integración de los servicios en la nube con los sistemas de TIC existentes del cliente para garantizar que se cumplan los objetivos comerciales.
                li
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Definir puntos de medición e indicadores de desempeño relacionados con el servicio en cuestión, por ejemplo: disponibilidad del servicio, frecuencia de interrupciones del servicio, tiempo medio de reparación, capacidad de respuesta de la mesa de ayuda del proveedor, entre otros.
                li 
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Seguimiento, análisis y archivo de estos datos de indicadores.
                li 
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Comparar la calidad del servicio real entregada con la acordada.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema2/img_5.svg')
        
      .py-4.py-md-5(titulo="Administrar la seguridad del servicio" :icono="require('@/assets/curso/images/tema2/ico_tab_3.svg')")
        .row
          .col-lg-7
            h4 Administrar la seguridad del servicio
            p.mb-3 Esta actividad implica:
              ul.lista-ul--color.mt-3
                li 
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Garantizar la seguridad adecuada para los datos de los clientes del servicio.
                li
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Poner en marcha planes para la copia de seguridad y la recuperación de datos, y potencialmente para la duplicación de datos y la conmutación por error.
                li
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Administración de las políticas de seguridad.
                li 
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Definir tecnologías de encriptación e integridad para aplicar a los datos del cliente del servicio en la nube tanto en reposo como en movimiento.
                li 
                  i.fas.fa-caret-right(style="color: #E2C140")
                  | Definir el manejo de cualquier información de identificación personal en los datos del cliente del servicio en la nube.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema2/img_6.svg')

      .py-4.py-md-5(titulo="Proporcionar informes de facturación y uso" :icono="require('@/assets/curso/images/tema2/ico_tab_4.svg')")
        .row
          .col-lg-7
            h4 Proporcionar informes de facturación y uso
            p.mb-3 Esta actividad implica la preparación de informes del uso de los servicios en la nube por parte de la organización del cliente y los informes asociados de los datos de facturación que se relacionan con ese uso los cuales son entregados al gerente comercial del cliente.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema2/img_7.svg')
      .py-4.py-md-5(titulo="Manejar informes de problemas" :icono="require('@/assets/curso/images/tema2/ico_tab_5.svg')")
        .row
          .col-lg-7
            h4 Manejar informes de problemas
            p.mb-3 Esta actividad implica el manejo del lado del cliente de cualquier problema informado asociado con el uso de servicios en la nube. Esto incluye:
            ul.lista-ul--color.mt-3
              li 
                i.fas.fa-caret-right(style="color: #E2C140")
                | Evaluar el impacto de cada problema.
              li
                i.fas.fa-caret-right(style="color: #E2C140")
                | Resolución de problemas para determinar la (s) causa (s) del problema.
              li
                i.fas.fa-caret-right(style="color: #E2C140")
                | Abrir un informe de problemas con el proveedor y realizar un seguimiento hasta su resolución.
              li 
                i.fas.fa-caret-right(style="color: #E2C140")
                | Desarrollar soluciones alternativas para abordar el problema.
              li 
                i.fas.fa-caret-right(style="color: #E2C140")
                | Problemas crecientes que no se solucionan dentro de los plazos acordados o que tienen serios impactos comerciales.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema2/img_8.svg')
      .py-4.py-md-5(titulo="Administrar los arrendamientos" :icono="require('@/assets/curso/images/tema2/ico_tab_6.svg')")
        .row
          .col-lg-7
            h4 Administrar los arrendamientos
            p.mb-3 Esta actividad implica administrar los arrendamientos del cliente con el proveedor, incluyendo:
            ul.lista-ul--color.mt-3
              li 
                i.fas.fa-caret-right(style="color: #E2C140")
                | Configurar y controlar aspectos de seguridad, incluidas cuentas de usuario, roles de seguridad, identidades y permisos.
              li
                i.fas.fa-caret-right(style="color: #E2C140")
                | Identificar y controlar los datos que se comparten entre los usuarios dentro del arrendamiento.
              li
                i.fas.fa-caret-right(style="color: #E2C140")
                | Crear y eliminar inquilinos.
              li 
                i.fas.fa-caret-right(style="color: #E2C140")
                | Gestión de usuarios y recursos asignados de inquilinos.
              li 
                i.fas.fa-caret-right(style="color: #E2C140")
                | Definir políticas de cumplimiento para cada inquilino.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema2/img_9.svg')


    .row.mb-5.ps-2
      .col-8.col-lg-3.bg-color-2
        h3.mb-0.text-white Gerente comercial

    p.mb-3 Tiene como objetivo cumplir los objetivos comerciales del cliente del servicio en la nube mediante la adquisición y el uso de servicios de una manera rentable, las principales responsabilidades se refieren a los aspectos financieros y legales del uso de los servicios en la nube, incluida la aprobación, la propiedad continua y la responsabilidad.

    p.mb-3 Las actividades de computación en la nube del gerente comercial incluyen:

    TabsB.color-acento-contenido.mb-5(data-aos="fade")
      .py-4.py-md-5(titulo="Realizar la administración comercial" :icono="require('@/assets/curso/images/tema2/ico_tab_7.svg')")
        .row
          .col-md-8
            h4 Realizar la administración comercial
            p Esta actividad implica la gestión de los aspectos comerciales del uso de servicios en la nube, incluida la gestión contable y financiera, incluyendo:
              ul.lista-ul--color.mt-3
                li 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Ajustar el plan de negocios para adaptarse al uso de servicios en la nube.
                li
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Hacer un seguimiento del uso de los servicios y ocuparse de la gestión contable y financiera.
                li 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Manejo de la facturación/facturas recibidas del proveedor de servicios en la nube por el uso que se hace de los servicios en la nube.
                li
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Asegurar que la facturación coincida con el uso real de los servicios en la nube realizado por el cliente del servicio en la nube.
                li 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Realizar pagos al proveedor de servicios en la nube.
                li
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Llevar cuentas en relación con el uso de servicios en la nube.
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema2/img_10.png', alt='')

      .py-4.py-md-5(titulo="Seleccionar y adquirir el servicio" :icono="require('@/assets/curso/images/tema2/ico_tab_8.svg')")
        .row
          .col-md-8
            h4 Seleccionar y adquirir el servicio
            p.mb-3 Esta actividad implica:
              ul.lista-ul--color.mt-3
                li 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Examinar las ofertas de servicios en la nube de uno o varios proveedores de servicios en la nube, estableciendo si el servicio ofrecido cumple con los requisitos comerciales y técnicos del cliente del servicio en la nube. Requiere la lectura de un catálogo de productos y la documentación de cada servicio, que puede incluir información técnica sobre el servicio y sus SLA, además de información comercial, incluidos los precios.
                li
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Negociar los términos del servicio en la nube, siempre que el proveedor del servicio en la nube permita términos variables para el servicio.

                li
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Aceptar el contrato del servicio en la nube y realizar el registro con el proveedor del servicio en la nube.
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema2/img_11.svg', alt='' )
        
      .py-4.py-md-5(titulo="Solicitar informe de auditoría" :icono="require('@/assets/curso/images/tema2/ico_tab_9.svg')")
        .row
          .col-md-8
            h4 Solicitar informe de auditoría
            p.mb-3 Implica que el cliente del servicio en la nube solicite el informe de una auditoría del servicio, normalmente conforme a un esquema o estándar de auditoría en particular (por ejemplo ISO 27017).
            p.mb-0 El cliente del servicio en la nube puede solicitar el informe a un auditor de la nube, o posiblemente al proveedor del servicio en la nube, aunque se espera que el informe de auditoría sea preparado por una entidad independiente del proveedor del servicio en la nube antes de que se complete una compra y también periódicamente a lo largo de uso del servicio.
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema2/img_12.svg', alt='')

    .row.mb-4.ps-2
      .col-8.col-lg-3.bg-color-5
        h3.mb-0.text-white Integrador de servicios

    p Es una función secundaria del cliente de servicios en la nube y responsable de la integración de los servicios en la nube con los sistemas de TIC existentes del lado del cliente.

    p La actividad de conectar los sistemas de TIC a los servicios en la nube implica, además, la conexión de los componentes y aplicaciones TIC existentes del cliente con los servicios en la nube de destino, incluida la conexión de los sistemas de gestión y monitoreo del cliente con los de supervisión y el control de los servicios en la nube por parte del proveedor.

    p.mb-4 La conexión de los componentes y aplicaciones TIC existentes con los servicios en la nube de destino implica:
    
    .row.justify-content-center.align-items-center.mb-3.fondo-3
        .col-12.col-md-4.col-lg-10.col-xl-10(data-aos="fade")   
          PasosA.color-acento-botones.mb-5(tipo="n")
              div        
                p.mb-0 Evaluar el impacto de los servicios en la nube en los procesos, sistemas y servicios existentes.

              div        
                p.mb-0 Mapeo de datos comerciales entre los sistemas TIC existentes del cliente de servicios en la nube existentes y los servicios en la nube contratados.

              div        
                p.mb-0 Invocar operaciones de servicios en la nube desde componentes y aplicaciones TIC existentes con el suministro de datos de entrada y el manejo de datos de salida.

              div        
                p.mb-0 Provisión de derechos de acceso para los usuarios de servicios en la nube.

              div        
                p.mb-0 Definir e implementar requisitos relacionados con la seguridad, incluida la confidencialidad e integridad de los flujos de datos.
              
              div        
                p.mb-0 Integrar las infraestructuras del cliente para la administración de cuentas de usuario, roles de seguridad, identidades y permisos con las equivalentes de los servicios en la nube.

              div        
                p.mb-0 Crear y monitorear cuentas de usuario e identidades específicas para el uso de interfaces de administración para servicios en la nube.

              div        
                p.mb-0  Integrar el registro y la gestión de incidentes de seguridad entre los servicios en la nube y la infraestructura de gestión y supervisión del cliente del servicio en la nube.

    Separador 

    #t_2_2.titulo-segundo
      .h2 2.2 Roles y actividades asociadas al proveedor

    .row.align-items-center.mb-5
      .col-12.col-md-7(data-aos="fade-right")
        p Un proveedor de servicios en la nube pone los servicios en la nube a disposición de los clientes de servicios en la nube, esta función (y todas sus sub-funciones) se centra en las actividades de computación necesarias en la nube para proporcionar un servicio allí y para garantizar su entrega al proveedor, así como el mantenimiento del servicio en la nube.
        p Adicionalmente a la propia prestación del servicio, el proveedor es responsable de gestionar la relación comercial con los clientes del servicio en la nube; se indica a continuación los sub-roles más habituales en el lado del proveedor con las actividades típicas relacionadas.
        p  A continuación, se mencionarán algunos de los roles más importantes y sus respectivas actividades.
      .col-12.col-md-4.mb-3(data-aos="fade-left")
        img(src="@/assets/curso/images/tema2/img_13.svg" alt="AvatarTop")
      .col-md-1


    .row.mb-5.ps-2
      .col-8.col-lg-3.bg-color-5
        h3.mb-0.text-white Gerente de operaciones

    p.mb-3 Es responsable de realizar todos los procesos y procedimientos operativos del proveedor de servicios en la nube, asegurando que todos los servicios y la infraestructura asociada cumplan con los objetivos operativos.

    p.mb-5 Las actividades de computación en la nube del gerente de operaciones en la nube incluyen:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-11.col-xl-11(data-aos="fade")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema2/info.svg' alt='')
          
          .tarjeta.p-3.tarjeta-violeta(x="16%" y="41.2%" numero="")
            p.text-white.mb-0 Evaluar el impacto de la implementación de nuevos servicios o el aumento en el uso de los servicios existentes.
        
          .tarjeta.p-3.tarjeta-violeta(x="16%" y="48%" numero="")
            p.text-white.mb-0 Modificar o ampliar los recursos en el centro de datos para satisfacer las necesidades de nuevas implementaciones.
                     
          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="41%" numero="")
            p.text-white.mb-0 Monitorear los servicios y la infraestructura del proveedor de servicios en la nube.
      
          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="48%" numero="")
            p.text-white.mb-0 Capturar eventos y datos que son importantes para el negocio del proveedor y presentar estos datos en una forma que sea significativa para el gerente comercial del proveedor. Dicha información incluye elementos como el uso de los servicios en la nube por parte de los clientes y el costo de prestación de esos servicios.

          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="55.5%" numero="")
            p.text-white.mb-0 Administrar la infraestructura de red, incluidos routers, servidores de nombres de dominio, direcciones IP, redes privadas virtuales (VPN), cortafuegos y filtrado de contenido.
            
          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="62.5%" numero="")
            p.text-white.mb-0  Asignar y administrar el almacenamiento.

          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="69.5%" numero="")
            p.text-white.mb-0 Administrar los privilegios del usuario y del sistema.
             
          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="76.5%" numero="")
            p.text-white.mb-0 Configurar y mantener sistemas operativos e hipervisores.

          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="83.5%" numero="")
            p.text-white.mb-0 Administrar un entorno de virtualización.
            
          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="90.5%" numero="")
            p.text-white.mb-0  Supervisar el comportamiento del entorno TIC del proveedor para garantizar que esté funcionando correctamente y que los servicios en la nube proporcionados cumplan los términos del SLA.

          .tarjeta.p-3.tarjeta-violeta(x="43.2%" y="98%" numero="")
            p.text-white.mb-0 Registrar problemas, informar los problemas de manera adecuada siguiendo los canales de comunicación con las partes establecido por el proveedor a nivel interno y con los roles externos del cliente y el partner y seguir los procesos de resolución de problemas hasta que se solucione el problema.

          .tarjeta.p-3.tarjeta-violeta(x="71.2%" y="41%" numero="")
            p.text-white.mb-0  Realizar un seguimiento de todos los activos computacionales, de almacenamiento, de red y de <i>software</i>  y la relación entre ellos. Esto incluye aspectos de seguimiento como versiones y niveles de parcheo, además de información de configuración, cuando sea relevante.

          .tarjeta.p-3.tarjeta-violeta(x="71.2%" y="48%" numero="")
            p.text-white.mb-0 Alta de nuevos activos y baja de activos antiguos. Esto puede incluir garantizar que los nuevos activos sean adecuados para su propósito y que se hayan verificado adecuadamente desde el punto de vista de la seguridad y la capacidad de gestión y puede incluir la eliminación segura de activos que ya no son necesarios considerando los datos que pueda contener.

          .tarjeta.p-3.tarjeta-violeta(x="98.4%" y="41%" numero="")
            p.text-white.mb-0  Crear y enviar información de auditoría adecuada a partir de registros, entre otras fuentes de información.

          .tarjeta.p-3.tarjeta-violeta(x="98.4%" y="48%" numero="")
            p.text-white.mb-0 Redactar información de cualquier registro u otros datos que puedan contener información confidencial.

    .row.mb-4.ps-2
      .col-8.col-lg-3.bg-color-10
        h3.mb-0.text-white Gerente de entregas

    p Tiene la responsabilidad de planificar la implementación de un servicio en producción. Esto incluye la definición del entorno operativo para el servicio, los pasos iniciales para la implementación del servicio y sus dependencias y la habilitación de los procesos operativos que se utilizan durante la ejecución del servicio.

    p.mb-4 A continuación, se presentan las actividades que le corresponden:

    TabsB.color-acento-contenido.mb-5(data-aos="fade")
      .py-4.py-md-5(titulo="Definir el entorno y los procesos" :icono="require('@/assets/curso/images/tema2/ico_tab_10.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Definir el entorno y los procesos
            p  Esta actividad se centra en definir el entorno técnico necesario y los procesos operativos que se utilizan cuando se ejecuta un servicio e implica:
              ul.lista-ul--color.mt-3
                li.mb-1 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  p.mb-0 Definir el entorno técnico requerido en términos de recursos informáticos, de almacenamiento y de red, las dependencias del <i>software</i>, incluida la configuración.
                li.mb-1
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  p.mb-0 Definir políticas y procesos para ampliar y reducir el uso de recursos en respuesta a la demanda de uso cambiante.
                li.mb-1 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  p.mb-0 Asegurar que el servicio en la nube se adhiera a los estándares apropiados relacionados con la seguridad y el cumplimiento comercial.
                li.mb-1
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  p.mb-0 Definir los procesos a seguir cuando el servicio se está ejecutando, incluidos los planes de reparación, actualización y migración.
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema2/img_14.svg', alt='')

      .py-4.py-md-5(titulo="Definir y recopilar métricas" :icono="require('@/assets/curso/images/tema2/ico_tab_11.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Definir y recopilar métricas
            p.mb-3 Esta actividad se centra en definir métricas y gestión del nivel de servicio e implica:
              ul.lista-ul--color.mt-3
                li.mb-1 
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Definir las métricas que se utilizan en relación con el funcionamiento de los servicios en la nube, que normalmente se reflejan en el SLA relacionado con esos servicios.
                li.mb-1
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Diseñar cómo se capturan las métricas para cada servicio en la nube.

                li.mb-1
                  i.fas.fa-caret-right(style="color: #FF2C9C")
                  | Definir cómo se informan y gestionan las métricas, en particular para garantizar que se cumplan los objetivos de SLA.
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema2/img_15.svg', alt='')
        
      .py-4.py-md-5(titulo="Definir los pasos de implementación" :icono="require('@/assets/curso/images/tema2/ico_tab_12.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Definir los pasos de implementación
            p.mb-3 Esta actividad implica describir cada uno de los pasos que deben seguir los equipos de operaciones y soporte para que la implementación del servicio se implemente y esté lista para ser utilizada por los clientes.
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema2/img_16.svg', alt='')


    .row.mb-4.ps-2
      .col-8.col-lg-3.bg-color-12
        h3.mb-0.text-white Gerente de servicios en la nube
      
    p El gerente de servicios en la nube tiene la responsabilidad de garantizar que los servicios del proveedor estén disponibles para su uso por los clientes y que funcionen correctamente y cumplan con los objetivos especificados en el acuerdo de nivel de servicio.

    p También es responsable de garantizar el buen funcionamiento del sistema de soporte comercial y del sistema de soporte operativo del proveedor, así como, del funcionamiento de las otras funcionalidades que se ofrecen a los clientes y <i>partners</i> para la gestión y administración, entre otras actividades, de la computación en la nube.

    p.mb-0 Las actividades del gerente de servicios en la nube son las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-4.col-lg-6.col-xl-6(data-aos="fade-right")
        

        LineaTiempoD.color-acento-contenido.mt-5
          p.mb-0(numero="1" titulo="Proporcionar servicios") Esta actividad implica todos los pasos necesarios para ofrecer un servicio en la nube a sus clientes. La actividad de proporcionar servicios incluye aceptar y procesar las invocaciones de servicios del usuario con la autenticación asociada y la autorización de la identidad del usuario. El procesamiento de una invocación de servicio se realiza por medio de una instancia de la implementación del servicio que, a su vez, puede implicar la composición y llamada de otros servicios según lo determinado por el diseño y la configuración de la implementación del servicio.

          p(numero="2" titulo="Acceso al servicio") La actividad de prestación de servicios también implica lo siguiente:
            ul.lista-ul--color.mt-3
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Gestionar el proceso de tratamiento de fallos del servicio.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Gestionar el sistema de apoyo empresarial y el sistema de apoyo operativo.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Mantener el servicio y la infraestructura subyacente.
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Automatizar los procesos del sistema.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Gestionar las tendencias de rendimiento y capacidad a largo plazo.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Instalar, configurar y realizar actualizaciones de mantenimiento en el requerido #[i hardware] requerido para las capacidades de computación, almacenamiento y red para el <i>datacenter</i> del proveedor de servicios en la nube.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Instalar y configurar el #[i software] necesario para ejecutar y respaldar las implementaciones de servicios en la nube. Esto incluye la aplicación de correcciones, actualizaciones y mejoras a ese #[i software], según sea necesario.
            
          p(numero="3" titulo="Desplegar y suministrar servicios") Esta actividad implica poner en funcionamiento una implementación de servicio y ponerla a disposición en un punto final de la red accesible para los usuarios del cliente y hacer que pueda manejar las solicitudes de servicio de los usuarios. Esta actividad incluye:
            ul.lista-ul--color.mt-3
              li.mb-2
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Seguir los procesos de implementación definidos para el servicio
              li.mb-2 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Cubrir los procesos necesarios para cancelar el despliegue y el suministro de un servicio en la nube.

          p(numero="4" titulo="Realizar la gestión del nivel de servicio") Esta actividad consiste en gestionar el cumplimiento de los objetivos de SLA. Esta actividad implica:
            ul.lista-ul--color.mt-3
              li.mb-2 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Monitorear las métricas para cada servicio y compararlas con los objetivos de servicio requeridos por el SLA para el servicio.
              li.mb-2
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Tomar medidas cuando las métricas no cumplen con los valores requeridos por el SLA para que el servicio vuelva a cumplir con el SLA, por ejemplo, siguiendo los procedimientos establecidos por el gerente de entregas del proveedor.
              li.mb-2
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Informar de un problema si no se puede mantener el cumplimiento.
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4(data-aos="fade-left")
          img.mt-3(src="@/assets/curso/images/tema2/img_17.svg" alt="AvatarTop",)



    p.mb-3 <b>Gerente comercial de servicios en la nube</b>

    p.mb-3 Tiene la responsabilidad general en los aspectos comerciales y ofrecer servicios en la nube a los clientes. El gerente comercial de servicios en la nube crea y da seguimiento al plan comercial, define la estrategia de oferta de servicios y administra la relación comercial con los clientes. Las actividades de computación en la nube del proveedor: administrador comercial de servicios en la nube son:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade")
      .row.justify-content-evenly(titulo="Gestionar el plan de negocios")
        .col-md-6
          p.mb-3 Esta actividad para proporcionar servicios en la nube implica:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Definir una oferta de servicio, describiendo los aspectos técnicos de la oferta (interfaces funcionales, SLA, …) y los aspectos comerciales de la oferta. Al establecer la oferta de servicios, el proveedor no debe descuidar aquellos aspectos relacionados con la interacción con otros proveedores pares.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Crear un plan de negocios que cubra la oferta de uno o más servicios en la nube a los clientes, manejando los aspectos financieros y técnicos de los servicios, el conjunto de clientes objetivo, contratos y SLA, canales de comercialización, objetivos de ventas.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Realizar un seguimiento del uso de las ventas y los servicios en relación con el plan para garantizar que se logren los objetivos financieros del proveedor de servicios en la nube.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Preparar un plan de negocios y ajustar el plan de negocios para brindar servicios en la nube.ar que se logren los objetivos financieros del proveedor de servicios en la nube.
        .col-7.col-md-4
          figure
            img(src='@/assets/curso/images/tema2/img_18.svg', alt='')

      div.row.justify-content-evenly(titulo="Gestionar las relaciones con los clientes")
        .col-md-6
          p.mb-3 Esta actividad implica la gestión de la relación comercial del proveedor con el cliente en la nube, que incluye: 
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Crear y mantener el contenido de un catálogo de productos.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Adquirir clientes.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Proporcionar el punto de contacto para el cliente para todos los asuntos comerciales.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Discutir y resolver inquietudes o problemas planteados por el cliente.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Procesar solicitudes de cambio (por ejemplo, cambios de derechos).
        .col-7.col-md-4
          figure
            img(src='@/assets/curso/images/tema2/img_19.svg', alt='')

      .row.justify-content-evenly(titulo="Gestionar el procesamiento financiero")
        .col-md-6
          p.mb-3 Esta actividad implica:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Manejar actualizaciones o desafíos de facturación
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Generar información de facturación y / o una factura por cargos relacionados con el uso de servicios en la nube y transmitir la información de facturación o la factura al cliente del servicio en la nube.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Gestionar la recepción de pagos del cliente del servicio en la nube y su contabilidad.
        .col-7.col-md-4
          figure
            img(src='@/assets/curso/images/tema2/img_20.svg', alt='')

    .row.mb-5.ps-2
      .col-8.col-lg-3.bg-color-7
        h3.mb-0.text-white Representante de atención y soporte al cliente


    .row.mb-3
      .col-12.col-md-8(data-aos="fade-right")
        p Es la interfaz principal entre el cliente y el proveedor es responsable de reaccionar a los problemas y consultas de los clientes de manera oportuna y rentable con el objetivo de mantener la satisfacción del cliente en la relación con el proveedor y los servicios en la nube ofrecidos.
        p Las actividades del representante de atención al cliente del proveedor son esencialmente el manejo de las solicitudes de los clientes que implica:
      .col-12.col-md-4(data-aos="fade-left")
        .cajon.color-custom-2.p-3
          p Las principales actividades del proveedor “entre nubes” son la intermediación, agregación, arbitraje, emparejamiento o federación de los servicios en la nube de los proveedores de servicios de nube pares y sus capacidades comerciales y de administración.
          p.mb-0 Manejo de solicitudes de soporte, informes e incidentes de clientes de servicios en la nube, independientemente de cómo se reciban. 
    
    .row.justify-content-center.p-4
      .col-md-11.bg-degrade-gris-horizontal.border-10.p-4
        p.mb-0.text-center Se puede proporcionar a los clientes una variedad de medios para comunicarse, desde foros a través del correo electrónico, sistemas de soporte al cliente o portales web hasta comunicación en tiempo real con el personal de soporte del proveedor.

    .col-lg-12.mx-auto.mb-4
      .tema1-1 
        .bloque-texto-a.color-custom-3.p-4.p-md-2 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8(data-aos="fade-right")
              .bloque-texto-a__texto.p-4
                p.mb-0 En atención a las buenas prácticas de marcos ampliamente aplicados como ITIL, recomiendan la concentración de peticiones e incidentes en un único punto <i>(Single Point of Contact)</i> lo que facilita la rentabilidad de esfuerzos en la atención al cliente y permite una trazabilidad en el tratamiento de las peticiones mediante el registro de un <i>ticket</i> y el soporte de herramientas que incorporan, adicionalmente y de manera integrada, los procesos de gestión de incidentes, problemas, cambios y entregas (<i>releases</i> también traducido como liberaciones o despliegues).
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/images/tema2/img_21.png' alt='')

    p.mb-5 Estas herramientas permiten la extracción de datos para informes relevantes, alarmas asociadas a <i>tickets</i> próximos o que han sobrepasado tiempos límite de atención, escalados automáticos a diferentes niveles de atención, bases de datos con errores conocidos.

    .row.mb-2.ps-2
      .col-8.col-lg-3.bg-color-10
        h3.mb-0.text-white Proveedor entre nubes

    .row.align-items-center.mb-3.fondo-3.p-4
      .col-12.col-md-8.col-lg-5.col-xl-5
        p.mb-3  Los proveedores de servicio de <i>cloud</i>pueden depender de uno o más proveedores “pares” (<i>peer</i>) homólogos y encadenados para proporcionar parte o la totalidad de los servicios en la nube ofrecidos a los clientes.
      .col-12.col-md-4.col-lg-7.col-xl-7
        .cajon.color-custom.p-3 
          p.mb-0 Las principales actividades del proveedor “entre nubes” son la intermediación, agregación, arbitraje, emparejamiento o federación de los servicios en la nube de los proveedores de servicios de nube pares y sus capacidades comerciales y de administración.
      
      p El objetivo es que, desde el punto de vista del proveedor de servicios de <i>cloud</i> principal, los clientes solo utilicen su servicio, interfaces comerciales y de administración y, en ningún caso, las de los proveedores encadenados en el servicio del proveedor.

      p.mb-5 Las actividades del proveedor entre nubes incluyen:

      h5.text-center.mb-4 Gestionar servicios en la nube de pares: esta actividad consiste en administrar el uso de los servicios en la nube de un proveedor homólogo, implica:

      .row.align-items-center.mb-5
        .col-12.col-md-8.col-lg-8.col-xl-8(data-aos="fade-right")
          ul.lista-ul--color
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Seleccionar y utilizar uno o más servicios de un proveedor de servicios de nube similares.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Monitorear y administrar los servicios en la nube del proveedor secundario para garantizar que cumplan los objetivos de SLA acordados, incluido el informe y la resolución de problemas con esos servicios.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Gestionar los aspectos comerciales de los servicios en la nube de un proveedor homólogo, incluido el plan comercial y el procesamiento financiero.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Realizar un seguimiento del uso que se está haciendo de cada servicio en la nube de proveedor homólogo, por qué usuarios se está realizando e incluir la garantía de que el uso es apropiado y está dentro del plan comercia
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Monitorear la integración de los servicios en la nube del proveedor homólogo con las implementaciones de servicios para garantizar que se cumplan los objetivos comerciales.).
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Coordinar las credenciales de identidad y seguridad entre el cliente y todos los proveedores homólogos.
        .col-12.col-md-4.col-lg-4.col-xl-4.mb-3(data-aos="fade-left")
          img(src="@/assets/curso/images/tema2/img_22.png" alt="AvatarTop")

      h5.aling.mb-5 Realizar <i>peering</i>, federación, intermediación, agregación y arbitraje: esta actividad implica el uso de los servicios en la nube del proveedor homólogos de todas estas maneras particulares y que se explican a continuación:

      .row.mb-5.ps-2
        .col-12.col-md-4.mb-3(data-aos="fade-right")
          img.px-md-4(src="@/assets/curso/images/tema2/img_23.svg" alt="AvatarTop")
        .col-12.col-md-8(data-aos="fade-left")
          ul.lista-ul--color
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 <i>Peering</i> es el uso de servicios en la nube de un proveedor homólogo.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | La federación implica el uso de los servicios en la nube de un grupo de proveedores homólogos que combinan mutuamente sus capacidades de servicio para proporcionar el conjunto de servicios en la nube requeridos por los clientes.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | La intermediación consiste en una oferta desde un proveedor que ofrece un servicio en la nube acondicionando o mejorando el servicio en la nube de un proveedor original similar, por ejemplo, incluyendo la gestión del acceso a los servicios en la nube, proporcionando un frontal web más atractivo con una interfaz de programación de aplicaciones (API) de servicios en la nube, gestión de identidades, informes de rendimiento, seguridad mejorada, entre otros posibles.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | La agregación se produce cuando la oferta de un servicio en la nube por un proveedor se ha compuesto mediante un conjunto de servicios proporcionados por proveedores pares.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | El arbitraje involucra a los proveedores que ofrecen un servicio en la nube que se fundamenta en la selección de una única oferta de servicios seleccionada de entre un grupo de proveedores homólogos.
    .row.mb-5
      .col-8.col-lg-3.bg-color-8
        h3.mb-0.text-white Gestor de riesgos y seguridad del servicio en la nube
  
    p.mb-3 Tiene la responsabilidad de garantizar que el proveedor gestione adecuadamente los riesgos asociados con el desarrollo, la entrega, el uso y el soporte de los servicios en la nube, esto incluye garantizar la alineación de las políticas de seguridad de la información del cliente y el proveedor para cumplir, en último término, con los requisitos de seguridad establecidos en el SLA.

    p.mb-5 Las actividades del gestor de riesgos y seguridad del servicio en la nube incluyen:

    .row.mb-3
      .col-12.col-md-8.col-lg-1.col-xl-1(data-aos="fade-right")
        img(src="@/assets/curso/images/tema2/nube.svg" , alt='' style="width:30px; display:block; margin:0 auto;")
      .col-12.col-md-4.col-lg-11.col-xl-11.mb-3(data-aos="fade-left")
        h5 Gestionar la seguridad y los riesgos. Esta actividad consiste en la gestión de la seguridad y los riesgos asociados con el desarrollo, la entrega, el uso y el soporte de los servicios en la nube, como puede verse a continuación:

    .row.justify-content-center.align-items-center.mb-3.fondo-3
      .col-12.col-md-4.col-lg-10.col-xl-10(data-aos="fade")   
        PasosA.color-acento-botones.mb-5(tipo="n")
            div        
              p.mb-0 Definir la política de seguridad de la información, teniendo en cuenta los requisitos del servicio, los requisitos legales y reglamentarios y las obligaciones contractuales y SLA.

            div        
              p.mb-0 Definir los riesgos de seguridad de la información relacionados con el servicio en la nube y detectar aquellos riesgos relacionados con el cumplimiento de los objetivos comerciales del proveedor Como consideración importante, indicada en el tema sobre rentabilidad en la nube y modelos económicos del cliente y del proveedor, es que la gestión de los riesgos de seguridad de la información tiene un costo asociado. En consecuencia, el proveedor podría asumir la posición comercial de no manejar algunos riesgos, dejando la responsabilidad de esos riesgos al cliente mediante el contrato de servicio, con el fin de no asumir estos costes directamente y redirigiéndolos a otras partes del mercado.

            div        
              p.mb-0 Seleccionar el punto de diseño y los controles de seguridad de la información necesarios para abordar los riesgos asociados con el servicio y el punto de diseño elegido. Los controles suelen cubrir un conjunto de categorías como la gestión de identidad y acceso, seguridad física y personal, protección de datos y activos de información y que se pueden presentar organizados de diferente forma en el caso de los marcos de seguridad de referencia (ISO 27002, ISO 27017, <i>Cloud Security Alliance</i>, NIST.

            div        
              p.mb-0 Asegurar que los controles identificados estén implementados de manera efectiva en el servicio desplegado y en la infraestructura subyacente.

            div        
              p.mb-0 Diseñar, implementar y evaluar la seguridad de sistemas y aplicaciones.

            div        
              p.mb-0 Administrar, diseñar, implementar y evaluar la seguridad de los servicios en la nube de los proveedores homólogos.

            div        
              p.mb-0 Evaluar la efectividad de los controles implementados y realizar cambios basados en la experiencia.

            div        
              p.mb-0  Asegurar que los sistemas de soporte operativo y comercial brinden acceso a los datos al personal del proveedor en función de los inquilinos de los clientes, en particular a los que brindan un servicio.
    .row.mb-3
      .col-12.col-md-1(data-aos="fade-right")
        img(src="@/assets/curso/images/tema2/nube.svg" , alt='' style="width:30px; display:block; margin: 0 auto;")
      .col-12.col-md-11.mb-3(data-aos="fade-left")
        h5 Diseñar e implementar la continuidad del servicio. Esta actividad implica considerar los modos potenciales de falla de un servicio en la nube y la infraestructura de soporte y poner en marcha procesos de recuperación que permitan que el servicio en la nube esté disponible dentro de los términos del SLA, a través de técnicas como la conmutación por error y la redundancia.
    .row.mb-3
      .col-12.col-md-1(data-aos="fade-right")
        img(src="@/assets/curso/images/tema2/nube.svg" , alt='' style="width:30px; display:block; margin: 0 auto;")
      .col-12.col-md-11.mb-3(data-aos="fade-left")
        h5 Asegurar el cumplimiento. Esta actividad consiste en implementar el cumplimiento de normas y regulaciones e implica:
        p 
          ul.lista-ul--color
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Asegurar que la implementación del servicio en la nube y su infraestructura de soporte cumpla con los requisitos de cualquier estándar que deba ser compatible, por ejemplo, los estándares pueden ser requeridos por el cliente objetivo o pueden ser requeridos por el esquema de certificación que el proveedor ha elegido asegurar el servicio.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Asegurar que la implementación del servicio en la nube y su infraestructura de soporte (incluido el manejo de datos) cumpla con los requisitos reglamentarios que puedan existir para el servicio o para los datos almacenados o procesados por el servicio.

    .row.mb-4.ps-2
      .col-8.col-lg-3.bg-color-11
        h3.mb-0.text-white Proveedor de red

    p El proveedor de red puede proporcionar conectividad de red entre sistemas dentro del <i>datacenter</i> del proveedor o proporcionar conectividad de red entre los sistemas del proveedor y los sistemas fuera del <i>datacenter</i>  del proveedor, por ejemplo, sistemas de clientes o sistemas que pertenecen a otros proveedores homólogos.

    p.mb-4 Las actividades de computación en la nube del proveedor de red, son:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade")
      .row.justify-content-center(titulo="Proporciona conectividad de red")
        .col-md-6.mb-4.mb-md-0
          p.mb-3 Esta actividad implica la configuración de las conexiones de red solicitadas y las capacidades relacionadas incluidas, entre otras, conexiones entre el cliente y el sistema del proveedor y entre el sistema de un proveedor y el sistema de otro proveedor. Esto puede incluir el establecimiento de instalaciones como una VPN o conexiones dedicadas. Las capacidades de red incluyen la capacidad de proporcionar retardo, fluctuación, ancho de banda, calidad de servicio y confiabilidad adecuados para todas las categorías de servicios en la nube y para fines, tanto en la nube, como fuera de la nube en el caso de NaaS.
        .col-md-5
          figure
            img(src='@/assets/curso/images/tema2/img_24.png' alt='')
      .row.justify-content-center(titulo="Prestar servicios de red")
        .col-md-6.mb-4.mb-md-0
          p Gestionar las relaciones con los clientes
          p.mb-3 Esta actividad implica la prestación de servicios relacionados con la red, como <i>firewalls</i> o equilibrio de carga.
        .col-md-5
          figure
            img(src='@/assets/curso/images/tema2/img_25.png' alt='')
      .row.justify-content-center(titulo="Proporcionar servicios de gestión de red")
        .col-md-6.mb-4.mb-md-0
          p.mb-3 Esta actividad se centra en la gestión de la infraestructura de red utilizada para transportar servicios en la nube. Proporciona métodos, herramientas y procedimientos que permiten la operación, administración, mantenimiento y aprovisionamiento de la infraestructura de la red en la nube. Incluye tareas para:
            ul.lista-ul--color.mt-3
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Mantener la red funcionando sin problemas.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Realizar un seguimiento de los recursos en la red y cómo se asignan.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Realizar reparaciones y actualizaciones, por ejemplo, cuando el equipo debe reemplazarse o actualizarse con nuevas funciones
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                | Configurar recursos en la red para soportar un servicio en la nube.
        .col-md-5
          figure
            img(src='@/assets/curso/images/tema2/img_26.png' alt='')
    
    Separador 

    #t_2_3.titulo-segundo(data-aos="fade-right")
      .h2 2.3 Roles y actividades asociadas a los <i>partners</i>
    
    p Un partner, socio u operador de servicios en la nube (CSN) es una parte que se dedica a respaldar o proporcionar actividades de soporte auxiliar a las actividades del proveedor de servicios y el cliente o de ambos.

    p Por tanto, las actividades de un partner pueden ser muy diversas según el tipo de socio de que se trate y de sus relaciones con el cliente y/o el proveedor.

    p.mb-4 Por ejemplo, siguiendo el modelo de proveedores en nube pública, algunos de los tipos de <i>partners</i> que se pueden encontrar son:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-3.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/images/tema2/img_27.svg" alt="AvatarTop",)
      .col-12.col-md-7(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido.mt-5
          p(numero="1" titulo="Consultor") Socio que cuenta con un equipo técnico capacitado, certificado por el proveedor y que es capaz de brindar consultoría en cuanto a la mejor utilización de los recursos de la nube pública, servicios de optimización de costos, integración de <i>software</i>  de terceros, arquitectura para diferentes cargas de trabajo, entre otro tipo de apoyos.
          p(numero="2" titulo="Proveedor de servicios gestionados (MSP)") Socio que realmente se ocupa del entorno de nube pública del cliente y actúa como un equipo de infraestructura o <i>DevOps</i> externo, de acuerdo con los principios de confiabilidad del sitio.          
          p(numero="3" titulo="Revendedores") Socio que brinda acceso a los servicios de nube pública a través de su propia consola. También se ocupan de la facturación y brindan soporte administrativo relacionado con la facturación.
         
    p.mb-5 Entre los beneficios típicos destacados por los propios <i>partners</i> a los clientes se encuentran:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade")
      .row.justify-content-center(titulo="Optimización de gastos y más flexibilidad")
        .col-md-6.mb-4.mb-md-0
          p La compra de servicios por el cliente directamente del proveedor público de la nube o a través del socio es inicialmente exactamente el mismo al ser un modelo de pago por uso de los recursos consumidos. Sin embargo, en algunos casos un socio puede ofrecer mejores precios mediante la negociación directa con el proveedor, además del asesoramiento sobre las técnicas y enfoques efectivos de optimización de costos.
          p La estrategia de compra por volumen, es decir, alta concentración de clientes y/o servicios el mismo proveedor o en un número reducido de ellos, se consigue que la facturación proporcionada por el socio sea más reducida, los socios pueden aportar más flexibilidad en los métodos de pago y en las fechas de vencimiento, entre otros aspectos relevantes a la fiscalidad o riesgos de fluctuación en los cambios de las monedas proporcionando una facturación en la moneda local. 
        .col-md-5
          figure
            img(src='@/assets/curso/images/tema2/img_28.png' alt='')

      .row.justify-content-center(titulo="El socio se ocupa de tu <i>cloud</i>")
        .col-md-6.mb-4.mb-md-0
          p Los proveedores desarrollan una red de asociaciones con el objetivo de crear centros de excelencia. Un socio calificado tiene un amplio conocimiento de los diferentes servicios ofrecidos por el proveedor y puede asesorarlo sobre las mejores prácticas y brindarle soporte de migración y planificación arquitectónica. 
          p También puede consultar temas de desarrollo y operación, seguridad y estrategia de salida. De esta manera, el cliente puede concentrarse totalmente en las actividades de su negocio mientras un socio de confianza se encarga de los aspectos y habilitación de las funcionalidades de los servicios en la nube en su lugar.
        .col-md-5
          figure
            img(src='@/assets/curso/images/tema2/img_29.png' alt='')

      .row.justify-content-center(titulo="Especialistas disponibles en cualquier momento que los necesite")
        .col-md-6.mb-4.mb-md-0
          p La escasez de personal preparado complica a las organizaciones la disponibilidad de profesionales a los equipos de infraestructura o de desarrollo de aplicaciones en entornos actuales como DevOps, un socio puede evitar la espera de meses de contratación asignando miembros de su equipo cuando sea requerido. Además de las habilidades necesarias, estos miembros estarían respaldados por otros arquitectos y expertos de soluciones certificados de alto nivel y directamente del proveedor.
        .col-md-5
          figure
            img(src='@/assets/curso/images/tema2/img_30.png' alt='')

      .row.justify-content-center(titulo="Soporte 24/7")
        .col-md-6.mb-4.mb-md-0
          p.mb-0 Los socios pueden ofrecer asistencia las 24 horas, los 7 días de la semana en el idioma local y dentro de su zona horaria. 
          p.mb-0 El soporte de un socio es proporcionado por consultores y arquitectos certificados y capacitados y su objetivo es resolver el problema sin necesidad de planteárselo al proveedor. 
          p.mb-0 En último término, un socio puede presentar el <i>ticket</i> en nombre del cliente directamente con el proveedor y escalar el problema a instancias superiores dentro de la organización de soporte del proveedor si es necesario. 
          p.mb-0 Existe una gran variedad de programas de atención al cliente disponibles con la planificación proactiva de las actividades futuras con el cliente en los más avanzados.
        .col-md-5
          figure
            img(src='@/assets/curso/images/tema2/img_31.png' alt='')

      .row.justify-content-center(titulo="Servicios gestionados")
        .col-md-6.mb-4.mb-md-0
          p.mb-3 La forma más avanzada de asociación con el proveedor es la provisión de servicios administrados (MSP), los socios de nivel MSP son capaces de ofrecer un paquete completo de servicios expertos para mantener la pila de aplicaciones del cliente en la nube funcionando 24 horas al día, 7 días a la semana.
          p.mb-0 El objetivo es permitir que el departamento TI del cliente se concentre en las actividades principales del negocio mientras el socio se encarga del mantenimiento, las reparaciones y la configuración de la infraestructura. 
        .col-md-5
          figure
            img(src='@/assets/curso/images/tema2/img_32.png' alt='')

    p.mb-3 A modo de clasificación general resumida, únicamente como ayuda para la identificación de las actividades principales en un mercado competitivo entre socios cada vez más diverso y variado, a continuación, se indican los roles y actividades principales de los <i>partners</i>.  El objetivo de esta introducción es la de diferenciar la labor de los <i>partners</i> con respecto al rol y actividades de los proveedores de forma más clara.

    TabsB.color-acento-botones(data-aos="fade")
      .py-4.py-md-5(titulo="Partner como proveedor" :icono="require('@/assets/curso/images/tema2/ico_tab_13.svg')")
        .row.justify-content-evenly
          .col-md-6
            h4.mb-4 Partner como proveedor
            ul.lista-ul--color
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Utiliza su experiencia para analizar modelos comerciales.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Crea servicios en la nube personalizados para satisfacer las necesidades de negocio de los clientes.
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Admite solicitudes de usuarios finales.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 obra tarifas a los clientes.
          .col-7.col-md-3.p-4
            figure
              img(src='@/assets/curso/images/tema2/img_33.svg', alt='')

      .py-4.py-md-5(titulo="Partner como comprador" :icono="require('@/assets/curso/images/tema2/ico_tab_14.svg')")
        .row.justify-content-evenly
          .col-md-6
            h4.mb-4 Partner como comprador
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Asesora a los clientes para garantizar que una solución en la nube se utilice en todo su potencial.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Aprovecha recursos propios de valor añadido (una red extensa, una marca de renombre y escala) para comprar servicios en la nube que se ajustan al modelo comercial de un cliente.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Trabaja junto con un cliente para la instalación de la aplicación de servicio en la nube que compra.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Proporciona soporte al servicio en nube.
          .col-7.col-md-3.p-4
            figure
              img(src='@/assets/curso/images/tema2/img_34.svg', alt='')
        
      .py-4.py-md-5(titulo="Partner como soporte" :icono="require('@/assets/curso/images/tema2/ico_tab_15.svg')")
        .row.justify-content-evenly
          .col-md-6
            h4.mb-4 Partner como soporte
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Actúa como comerciante vendiendo el <i>software</i> del proveedor a sus clientes nuevos y existentes.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Trabaja con un cliente para instalar y respaldar la infraestructura tecnológica necesaria para ejecutar un servicio en la nube (por ejemplo, red y alojamiento). Mientras que el proveedor de servicios en la nube crea y actualiza el <i>software</i> , el socio gestiona las relaciones entre el proveedor y los clientes.
          .col-7.col-md-3.p-4
            figure
              img(src='@/assets/curso/images/tema2/img_35.svg', alt='')

      .py-4.py-md-5(titulo="Partner como orquestador de segundo nivel" :icono="require('@/assets/curso/images/tema2/ico_tab_16.svg')")
        .row.justify-content-evenly
          .col-md-6
            h4.mb-4 Partner como orquestador de segundo nivel
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Trabaja en estrecha colaboración con los proveedores para agregar e integrar varios servicios en la nube para un cliente.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Interactúa con sus clientes únicamente a través de un ecosistema de segundo nivel.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Proporciona recomendaciones para servicios en la nube o para obtener el máximo valor de un servicio según los datos de uso del cliente.
              li
                i.fas.fa-caret-right(style="color: #FF2C9C")
                p.mb-0 Diseña portales web fáciles de usar con gestión de identidad para el cliente.
          .col-7.col-md-3.p-4
            figure
              img(src='@/assets/curso/images/tema2/img_36.svg', alt='' )

    Separador 

    #t_2_4.titulo-segundo(data-aos="fade-right")
      .h2 2.4  Desarrollador de servicios de nube

    p Es el responsable de diseñar, desarrollar, probar y mantener la implementación de un servicio en la nube, esto puede implicar componer la implementación del servicio a partir de implementaciones de servicios existentes.

    p El integrador de servicios en la nube y el desarrollador de componentes de servicios en la nube describen sub-roles del desarrollador de servicios en la nube, donde el integrador de servicios en la nube se ocupa de la composición de un servicio desde otros servicios y donde el desarrollador del componente del servicio en la nube se ocupa del diseño, creación, prueba y mantenimiento de componentes de servicio individuales. Esto incluye implementaciones de servicios y componentes de servicios que implican interacciones con proveedores de servicio homólogos.

    p.mb-4 Las actividades de computación en la nube del desarrollador de servicios en la nube incluyen:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade")
      .row.justify-content-evenly(titulo="Diseñar, crear y mantener componentes de servicio")
        .col-md-6
          p.mb-3 Esta actividad implica:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Diseñar y crear componentes de <i>software</i>  que son parte de la implementación de un servicio.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Crear la funcionalidad que se ofrece a los usuarios del servicio, lo que también implica conectar los componentes del servicio a los sistemas de soporte operativo del proveedor, de modo que la implementación del servicio pueda ser monitoreada y controlada.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Procesar informes de problemas relacionados con el funcionamiento de la implementación de un servicio.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Proporcionar arreglos para las implementaciones de servicios.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Proporcionar mejoras a las implementaciones de servicios.
        .col-7.col-md-4
          figure
            img(src='@/assets/curso/images/tema2/img_37.svg' alt='')

      .row.justify-content-evenly(titulo="Redactar servicios")
        .col-md-6
          p.mb-3 Esta actividad consiste en la composición de servicios utilizando servicios existentes e implica:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Crear funcionalidad de servicio mediante la composición de uno o más servicios existentes proporcionados en otro lugar.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Describir los aspectos técnicos del servicio (interfaces funcionales, SLA, entre otros).
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Diseñar una interfaz para el cliente del servicio en la nube que represente los servicios compuestos a través de múltiples ofertas de proveedores de servicios en la nube.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Realizar una composición que pueda implicar la intermediación, agregación o arbitraje de los servicios existentes.
        .col-7.col-md-4
          figure
            img(src='@/assets/curso/images/tema2/img_38.svg' alt='')

      .row.justify-content-evenly(titulo="Servicios de prueba/test")
        .col-md-6
          p.mb-3 Esta actividad tiene por objetivo probar los componentes y servicios creados por el desarrollador de servicios en la nube. Esta actividad implica:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Realizar pruebas de los componentes que componen la implementación de un servicio para asegurar que realizan la funcionalidad del servicio completa y correctamente.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Garantizar la interoperabilidad con los servicios en la nube proporcionados por un proveedor de servicios en la nube homólogo
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              p.mb-0 Pruebas que deben incluir la verificación de que las conexiones a los sistemas de soporte operativo del proveedor de servicios en la nube funcionan correctamente. Como resultado, normalmente es necesario realizar algunas de las pruebas en un área de prueba del <i>Datacenter</i> del proveedor de servicios en la nube.
        .col-7.col-md-4
          figure
            img(src='@/assets/curso/images/tema2/img_39.svg' alt='' )

    Separador 

    #t_2_5.titulo-segundo(data-aos="fade-right")
      .h2 2.5 Auditor de servicios en la nube
    
    .row.justify-content-center.align-items-center.fondo-3.p-4.px-md-5
      .col-lg-12.mb-3(data-aos="fade")
        p El auditor de la nube es el responsable de realizar una auditoría de la provisión y uso de los servicios en la nube, una auditoría de la nube generalmente cubre las operaciones, el rendimiento y la seguridad y examina si se cumple un conjunto específico de criterios de auditoría. 
          .cajon.color-custom-2.p-3.px-md-4
            p.mb-0 Los criterios de auditoría son el conjunto de requisitos a verificar y que pueden proceder de <b>normas internacionales</b> (por ejemplo: normas ISO), <b>regulatorias</b> (por ejemplo: del propio sector económico o industrial en el que la organización desarrolla sus actividades de negocio principales), normativas (por ejemplo: políticas internas de la organización), <b>legales</b> (por ejemplo: leyes para el almacenamiento, intercambio y/o tratamientos de datos como el artículo 2 de la Ley 1581 de 2012, de propiedad intelectual, de privacidad como el artículo 4 de la Ley 1581 de 2012) y/o <b>contractuales</b> (por ejemplo: compromisos en los contratos).
      
      p.mb-3 En el área de las normas internacionales, se ha mencionado la relevancia en el cumplimiento de los criterios para la seguridad de la información indicados en la norma ISO/IEC 27001.

      p.mb-4 Este estándar se complementa con adaptaciones específicas en su interpretación a aspectos como los servicios en nube (ISO 27017), privacidad (ISO 27701) o en sectores de actividad de alta sensibilidad como sector hospitalario (ISO 27799) para la interpretación de controles en seguridad, entre otras guías de apoyo de la “serie 27000” de publicaciones relacionadas.

      h5.text-center.mb-2 Las actividades de computación en la nube del auditor de servicios en la nube incluyen:

      .row.align-items-center.justify-content-evenly.mb-4
        .col-md-6(data-aos="fade-right")
          .col-8.col-lg-3.bg-color-10.mb-4
            h3.mb-0.text-white Realizar una auditoría
          ul.lista-ul--color
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Solicitar u obtener evidencia de auditoría.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Realizar las pruebas necesarias en el sistema que se audita.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Obtener evidencia mediante programación, a través de un conjunto de interfaces proporcionadas por el sistema que se audita.
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Redactar la evidencia, si es necesario, para proteger información sensible o información sujeta a control regulatorio (por ejemplo, PII).
            li
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Comparar la evidencia de auditoría obtenida con los criterios de auditoría descritos por el esquema o estándar de auditoría que se está utilizando.
        .col-md-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema2/img_40.svg'  alt='' )

      .row.mb-5.ps-2
        .col-8.col-lg-3.bg-color-9.aling-14
          h3.mb-0.text-white Informar los resultados de la auditoría

      .row.justify-content-center.align-items-center
        .col-md-4(data-aos="fade-right")
          figure
            img.mb-5(src='@/assets/curso/images/tema2/img_41.png'  alt='' )

        .col-md-6(data-aos="fade-left")
          p.mb-3 El informe documentado y la forma de entrega, puede ser prescrito por el esquema de auditoría que se está utilizando. Los resultados de la auditoría pueden entregarse al proveedor de servicios en la nube, o posiblemente a solicitud de un CSP, según la situación comercial o el contexto legal. Esta actividad implica:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-caret-right(style="color: #FF2C9C")
              | Proporcionar un informe documentado de los resultados de la realización de una auditoría, por ejemplo, en un determinado servicio en la nube o en un proveedor de servicios en la nube o en el uso de un servicio en la nube por parte del cliente.
              
        





























</template>

<script>
//import Tabsg from '../components/Tabsg'
export default {
  name: 'Tema2',
  //components: {
  // Tabsg,
  // },
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
