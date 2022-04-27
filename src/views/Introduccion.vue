<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 
    
    .contenedor-total.mb-0.mb-md-4
      figure
        img(src='@/assets/curso/images/tema1/intro.png' alt='Imagen ambiental' style='')
      .row.justify-content-center.neg--top
        .col-md-11.col-10.bg-degrade-gris-horizontal.border-10.p-4
          p.mb-0 Se da la bienvenida al componente formativo <b>“Arquitectura y servicios en la nube”</b>. Para comenzar el recorrido por el mismo, se debe visitar el recurso didáctico que se muestra a continuación:
             
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ftIakHaCcxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
