<template>
    <v-card>
        <v-carousel :cycle="false">
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><ebookTemplate1/></v-carousel-item>
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><ebookTemplate2/></v-carousel-item>
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><ebookTemplate3/></v-carousel-item>
            <v-carousel-item
            reverse-transition="fade"
            transition="fade"
            ><ebookTemplate4/></v-carousel-item>                                    
        </v-carousel>
    </v-card>
</template>

<script>
  // import ebookTemplate from '@/components/ebookTemplate.vue'
  import ebookTemplate1 from '@/components/ebookTemplate1.vue'
  import ebookTemplate2 from '@/components/ebookTemplate2.vue'
  import ebookTemplate3 from '@/components/ebookTemplate3.vue'
  import ebookTemplate4 from '@/components/ebookTemplate4.vue'
  export default {
    components:{
      // ebookTemplate
      ebookTemplate1,
      ebookTemplate2,
      ebookTemplate3,
      ebookTemplate4
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
  padding-bottom: 100px;
}
.carousel__left {
  left: 40%;
}
.carousel__right {
  right: 40%;
}
.carousel__left, .carousel__right {
  bottom: 19px!important;
  top: unset!important;
  z-index: 2;
}
.carousel__left .btn, .carousel__right .btn {
  color: #bbbbbb;
}
.carousel__controls__item {
  color: #bbbbbb;
}
.carousel__controls {
  background: transparent;
  padding-bottom: 30px;
}
</style>
