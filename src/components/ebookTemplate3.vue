<template>
    <div class="container-tab">
        <h2 class="container-title">5 soluções digitais para aumentar a experiência de aprendizagem</h2>
        <div class="container-tab-left">
            <img v-bind:src="ebookImg" />
        </div>
        <div class="container-tab-right">
            <h3 class="title-tab">Simulador Comportamental e Emulador de Sistemas</h3>
            <h4 class="subtitle-tab">Interativo ou PDF</h4>
            <div class="tab-todo">
                <p>Essas duas ferramentas digitais têm sido muito utilizadas em treinamentos corporativos e podem aliar o mundo real (através de jogos onde todos são colocados em uma sala fechada, cheia de pistas, e precisam aprender como sair dela, por exemplo) ao mundo virtual, com a imersão do colaborador em situações proporcionadas por realidade virtual ou aumentada. Além de serem formas de passar o conhecimento de forma clara e prática, essas ferramentas digitais também prometem treinamentos mais divertidos.</p>
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
