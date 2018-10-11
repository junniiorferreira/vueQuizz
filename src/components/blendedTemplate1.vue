<template>
    <div class="container-tab">
        <div class="container-tab-right">
            <h3 class="title-tab">Empório</h3>
            <h4 class="subtitle-tab"></h4>
            <div class="tab-todo">
                <p>O modelo empório substitui todas ou algumas reuniões de classe tradicionais pelo trabalho colaborativo, baseado em atividades realizadas em espaços de aprendizagem compartilhada, que normalmente oferecem muitas opções de conectividade e promovem a aprendizagem colaborativa desde a concepção do espaço. Alguns objetivos deste modelo:</p>
                <div class="tab-block">
                    <ul>
                        <li>Encorajar o trabalho independente de cada aluno;</li>
                        <li>Flexibilizar o uso do tempo em sala de aula;</li>
                        <li>Promover a colaboração e a aprendizagem através de atividades práticas entre os alunos;</li>
                        <li>Garantir uma melhor utilização dos espaços compartilhados, para aprimorar a aprendizagem e repensar a eficácia do modelo tradicional de ensino.</li>
                    </ul>
                </div>                
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
.tab-todo .tab-block {
    padding-left: 0;
    margin-top: 20px;
}
.container-tab {
    padding: 60px;
    padding-bottom: 150px;
    padding-top: 10px;
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
    font-size: 45px;
    margin-bottom: 18px;
    color: #666666;
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
    margin-top: 0;
}
.container-tab-right {
    margin-top: 0;
}
</style>