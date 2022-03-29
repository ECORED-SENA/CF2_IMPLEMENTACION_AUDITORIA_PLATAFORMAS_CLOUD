<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 
    
    .contenedor-total
      figure
        img.mx-auto(src='@/assets/curso/images/tema1/intro.png' alt='Imagen ambiental' style='')
      .contenedor-text-4
        .row.justify-content-center.p-4
          .col-auto
            p.mb-3.p-2 Se da la bienvenida al componente formativo <b>“Arquitectura y servicios en la nube”</b>. Para comenzar el recorrido por el mismo, se debe visitar el recurso didáctico que se muestra a continuación:
  
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  

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
