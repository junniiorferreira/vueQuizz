<template>
    <div class="container-tab">
        <h2 class="container-title">5 soluções digitais para aumentar a experiência de aprendizagem</h2>
        <div class="container-tab-left">
            <img v-bind:src="ebookImg" />
        </div>
        <div class="container-tab-right">
            <h3 class="title-tab">Ebook</h3>
            <h4 class="subtitle-tab">Interativo ou PDF</h4>
            <div class="tab-todo">
                <p>Ideal para material de consulta, biblioteca, pesquisa, resumos de conteúdos.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt rhoncus ex sit amet luctus.</p>
                <p>Vivamus tempor, odio ac tristique pellentesque, tortor urna finibus orci, facilisis sagittis nisl enim in augue. Integer sed mauris elit.</p>                
            </div>
        </div>
    </div>
</template>

<script>
import ebookImg from '@/assets/img/ebook-img.jpg'
export default {
  data () {
    return {
        ebookImg:ebookImg
    }
  },
}
</script>

<style>
.container-tab {
    padding: 50px;
    padding-bottom: 150px;
}
.container-tab-left {
    float: left;
    margin-right: 30px;
}
h2.container-title {
    margin-bottom: 50px;
    color: #666666!important;
}
h3.title-tab {
    font-family: 'roboto-bold';
    font-size: 41px;
    margin-bottom: 0;
}
h4.subtitle-tab {
    font-family: 'roboto-light';
    font-size: 25px;
    margin-bottom: 0;
    color: #666666;    
}
.container-tab-right .tab-todo p {
    font-family: 'roboto-light';
    font-size: 19px;
    color: #666666;
    margin-bottom: 0!important;
}
.tab-todo {
    margin-top: 80px;
}
.container-tab-right {
    margin-top: 100px;
}
</style>
