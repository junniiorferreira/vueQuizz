<template>
    <v-card>
      <h2 class="container-title primeiro">Conheça 3 modelos primários de Blended Learning</h2>
        <v-carousel :cycle="false">
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><blendedTemplate1/></v-carousel-item>
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><blendedTemplate2/></v-carousel-item>                     
        </v-carousel>
    </v-card>
</template>

<script>
  import blendedTemplate1 from '@/components/blendedTemplate1.vue'
  import blendedTemplate2 from '@/components/blendedTemplate2.vue'
  // import blendedTemplate from '@/components/blendedTemplate.vue'
  export default {
    components:{
      // blendedTemplate
      blendedTemplate1,
      blendedTemplate2
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
  bottom: 30px!important;
  top: unset!important;
  z-index: 2;
}
/* .carousel__controls {
  background: transparent;
  bottom: 50px;
} */
.carousel__controls {
  background: transparent;
  bottom: 30px;
  padding-top: 5px;
}
</style>
