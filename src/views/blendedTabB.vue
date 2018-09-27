<template>
    <v-card>
      <h2 class="container-title primeiro">Conheça 3 modelos primários de Blended Learning</h2>
        <v-carousel :cycle="false">
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><blendedTemplate/></v-carousel-item>
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><blendedTemplate/></v-carousel-item>
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><blendedTemplate/></v-carousel-item>                        
        </v-carousel>
    </v-card>
</template>

<script>
  import blendedTemplate from '@/components/blendedTemplate.vue'
  export default {
    components:{
      blendedTemplate
    },   
    data () {
      return {

      }
    }
  }
</script>

<style>
.carousel {
  height: auto!important;
  box-shadow: none;
}
.carousel__left {
  left: 40%;
}
.carousel__right {
  right: 40%;
}
.carousel__left, .carousel__right {
  bottom: 0!important;
  top: unset!important;
  z-index: 2;
}
.carousel__controls {
  background: transparent;
}
</style>
