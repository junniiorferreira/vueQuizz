<template>
    <v-card>
        <div class="tab-content">
            <h2>Conheça o Learning Experience</h2>
            <div class="tab-block">
                <p class="content-no-bottom"></p>
                <ul></ul>
                <p class="content-no-bottom"></p>
            </div>            
        </div>
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
