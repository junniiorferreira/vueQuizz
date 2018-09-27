<template>
    <div class="container-tab">
        <div class="container-tab-right">
            <h3 class="title-tab">Suplementar</h3>
            <h4 class="subtitle-tab"></h4>
            <div class="tab-todo">
                <p>O modelo suplementar de b-learning utiliza componentes do curso on-line para ajudar a enriquecer a sala de aula face-a-face. No modelo suplementar geralmente não há redução real no tempo de sala de aula, mas os componentes do curso on-line são cuidadosamente planejados para complementar as atividades e estender a aprendizagem para além deste espaço. Alguns benefícios:</p>
                <div class="tab-block">
                    <ul>
                        <li>Aprofunda a interação;</li>
                        <li>Aumenta a eficiência no uso do tempo;</li>
                        <li>Oferece flexibilidade de acesso a conteúdos;</li>
                        <li>Permite revisão e repetição de tópicos que demandem mais atenção.</li>
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