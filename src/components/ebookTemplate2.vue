<template>
    <div class="container-tab">
        <h2 class="container-title">5 soluções digitais para aumentar a experiência de aprendizagem</h2>
        <div class="container-tab-left">
            <img v-bind:src="ebookImg" />
        </div>
        <div class="container-tab-right">
            <h3 class="title-tab">Site One Page</h3>
            <h4 class="subtitle-tab">Interativo ou PDF</h4>
            <div class="tab-todo">
                <p>Você já deve ter se deparado com websites, inclusive corporativos, que aboliram as abas para ter toda a informação em uma só página, acessível com o rolar de um cursor. Sites One Page também atuam como ferramentas digitais de aprendizado quando utilizam uma estrutura da informação coerente, com a cadência que o assunto pede, sem muito floreio: os dados são mais diretos e, por isso, mais fáceis de serem digeridos.</p>
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
