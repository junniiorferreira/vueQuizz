<template>
<div id="app">
  <v-app id="inspire">
      <h2 class="container-title primeiro">Porque o Blended Learning é uma experiência única de ensino?</h2>
    <v-expansion-panel>
        <v-expansion-panel-content>
            <div slot="header">Maior engajamento em função da variedade de conteúdos</div>
            <v-card>
                <v-card-text>O b-learning, usa uma infinidade de diferentes tipos de materiais: vídeos, áudios, apresentações visualmente aprimoradas, dentre várias outras ferramentas, o que ajuda a manter os alunos envolvidos e garante maior compreensão do conteúdo.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Alunos diferentes, estilos diferentes</div>
            <v-card>
                <v-card-text>Diversificar os métodos de ensino é uma boa maneira de abordar as questões que surgem quando se oferece um mesmo curso para uma grande quantidade de pessoas. Isso vale tanto no modelo tradicional de educação quanto no treinamento corporativo. O blended learning complementa ambos e garante uma aprendizagem mais personalizada, seja oferecendo a possibilidade de aprender a seu tempo (através da flexibilização de horários), seja através da construção de conteúdos customizados para atender necessidades especiais.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Avaliações e correções personalizadas</div>
            <v-card>
                <v-card-text>Os relatórios LMS são bons não apenas porque permitem uma representação gráfica da informação, mas também porque possibilitam uma visão geral do que os alunos estão fazendo e o quanto progrediram, por exemplo. O b-learning, ao propor diferentes métodos de aprendizagem e diferentes tipos de materiais, permite ao professor ajustes não apenas no conteúdo, mas também nas ênfases dadas a determinados canais, materiais e interações.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Feedback aprimorado</div>
            <v-card>
                <v-card-text>O feedback é muito importante, já que é o principal indicador do desempenho e do progresso dos alunos. Para os professores a aplicação de testes e questionários on-line, ou a análise de relatórios oferecidos pelo LMS, significa preservar tempo de aula – é avaliar mais e melhor com um investimento otimizado de recursos e tempo.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Transforma o aprendizado</div>
            <v-card>
                <v-card-text>A aprendizagem não pode ser vista como uma atividade sisuda e séria demais. Uma tendência, em especial,  é destaque quando pensamos numa construção engajadora do ensino: “Gamification”.</v-card-text>
            </v-card>
        </v-expansion-panel-content>                                              
    </v-expansion-panel>
  </v-app>
</div>
</template>

<style>
    .expansion-panel{
        list-style: disc inside!important;
        margin-top: 0!important;
        width: 90%;
        margin-left: auto!important;
        margin-right: auto;
        background: #f1f1f1!important;
        border: none;
        box-shadow: none;
    }
    .expansion-panel__header {
        display: inline-flex!important;
        width: 97%!important;
        padding: 20px 0px!important;
        padding-left: 0!important;
        padding-top: 10px!important;
        padding-bottom: 10px!important;
        background: #f1f1f1!important;
        font-size: 19px;
        font-family: 'roboto-light';
    }
    .expansion-panel__container {
        background-color: #f1f1f1!important;
        color: rgba(0,0,0,.87);
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.12);        
    }
    .container-title.primeiro{
        margin-top: 50px;
        font-size: 28px;
        padding-left: 60px;
        margin-bottom: 30px;        
    }
    .application.theme--light {
        background: #f1f1f1!important;
    }    
</style>
