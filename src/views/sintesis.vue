<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.align-items-center.fondo-9
      .col-12.col-md-4.col-lg-6.col-xl-7.mb-md-5.mb-0.p-4
        p.ms-md-5.ms-0.px-md-0.px-4.mb-3  La arquitectura de la nube es la organización de los componentes y subcomponentes en una estructura efectiva, eficiente y lógica, lo que permite en el orden de un objetivo común, de esta forma se fortalecen los puntos fuertes, a la vez que se minimizan aquello que están débiles.
        p.ms-md-5.ms-0.px-md-0.px-4 Está compuesta por componentes y subcomponentes que están disponibles en la nube, corresponde a la tecnología con la cual se trabaja en la nube, y se centra en entidades implicadas como: el cliente, el proveedor, el auditor, el servicio, además de trabajar también con el acceso a estos servicios, los recursos empleados, y los roles que se desempeñan en cada una de las capas funcionales de la nube.
    
      .col-11.col-md-8.col-lg-6.col-xl-5.mb-md-4.mb-5
        img.my-3(src="@/assets/curso/images/tema3/img_1.svg")
    .jumbotron.mb-2.aling-16
      p.p-4 Con el fin de verificar y hacer seguimiento en la entrega de los servicios que se venden, así como los recibidos, es importante tener presente la auditoría, que es un requisito indispensable para la mejora y optimización de la prestación y venta. Es seguro que ha sido interesante el contenido presente, así que se invita a revisar el siguiente mapa conceptual, el cual condensa los puntos más importantes de este componente formativo:

    .row.justify-content-center.fondo-17.p-4
      .col-lg-12.mb-4
        img(src="@/assets/curso/images/tema3/info_1.svg" alt="AvatarTop")


</template>

<script>
export default {
  name: 'Sintesis',
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
