<template lang="pug">
.tabs-g
  .tabs-g__header.row.m-0
    .col-6.col-sm-4.col-lg.tabs-g__tab(
      v-for="(elm,index) of elements"
      :key="'tabs-g-menu-'+elm.id"
      :class="{'tabs-g__tab--active' : selected === elm.id}"
      @click="selected = elm.id"
      @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
    )
      .indicador__container(v-if="mostrarIndicador && index === 1")
        .indicador--click
      .tabs-g__tab__icon(v-if="elm.icono")
        img(:src="elm.icono")
      .tabs-g__tab__title
        span(v-html="elm.titulo")

  .tabs-g__content-item(
    v-for="elm of elements"
    :key="'tabs-content-'+elm.id"
    v-show="selected === elm.id"
    v-child="elm.elm"
  )

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'Tabsg',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
