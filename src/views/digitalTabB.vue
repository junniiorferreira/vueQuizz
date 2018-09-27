<template>
    <v-card>
        <v-carousel :cycle="false">
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><ebookTemplate/></v-carousel-item>
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><ebookTemplate/></v-carousel-item>
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><ebookTemplate/></v-carousel-item>                        
        </v-carousel>
    </v-card>
</template>

<script>
  import ebookTemplate from '@/components/ebookTemplate.vue'
  export default {
    components:{
      ebookTemplate
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
