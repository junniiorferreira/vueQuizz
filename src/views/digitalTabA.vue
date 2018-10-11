<template>
<div id="app">
  <v-app id="inspire">
      <h2 class="container-title primeiro">Conheça 7 benefícios dos treinamentos online</h2>
    <v-expansion-panel>
        <v-expansion-panel-content>
            <div slot="header">Redução de custos</div>
            <v-card>
                <v-card-text>Programas de capacitação online otimizam recursos, uma vez que todo o processo de aprendizagem acontece por meio de plataformas de ensino. O material didático tem diversos formatos e alcance em larga escala, sem necessidade de gastos com estrutura física, deslocamento e hospedagem de professores e alunos.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Pode ser adaptada</div>
            <v-card>
                <v-card-text>Sejam jogos, vídeos, simuladores, trilhas de aprendizagem ou podcasts, é enorme a quantidade de estratégias que podem ser utilizadas para um aprendizado muito mais dinâmico. Cada empresa avalia e identifica suas necessidades, estabelecendo objetivos. Em conjunto com uma equipe especializada de consultores educacionais, define a maneira mais eficaz de oportunizar a construção de conhecimento.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Formação Continuada</div>
            <v-card>
                <v-card-text>A educação corporativa se desenvolveu a ponto de adquirir status de área estratégica dentro dessas instituições. Criadas para oferecer uma educação afinada com as necessidades de negócio e de planejamento das organizações. A criação de um ambiente de aprendizagem corporativa oferece um diferencial de formação continuada, fazendo com que os profissionais se envolvam mais e tragam resultados efetivos para a empresa.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Atualizações imediatas</div>
            <v-card>
                <v-card-text>Concentrar as práticas da empresa em uma plataforma de estudo facilita o treinamento dos novos funcionários. Esses arquivos podem ser atualizados rapidamente, de acordo com a necessidade, criando uma biblioteca de conteúdos que servem para toda a instituição.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Desenvolvimento de habilidades</div>
            <v-card>
                <v-card-text>A capacitação online permite o desenvolvimento de habilidades úteis no mercado de trabalho, como autonomia, organização, gerenciamento de tempo, utilização de ferramentas tecnológicas e automotivação.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Promove o comprometimento e retém talentos</div>
            <v-card>
                <v-card-text>Treinamentos baseados em projetos motivam a equipe e dão oportunidade para experimentação, estimulando a criatividade e engajando os funcionários no sucesso do projeto. Benefício que segue na retenção de talentos, pois uma das principais preocupações das empresas é quanto ao turnover.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Flexibilidade</div>
            <v-card>
                <v-card-text>Poder estudar em qualquer horário, de qualquer local com acesso à internet, é uma das maiores vantagens da capacitação online. Possibilitar o desenvolvimento profissional de forma flexível contribui significativamente para o alcance de melhores resultados e equipes de alta performance.</v-card-text>
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
        font-size: 34px;
        padding-left: 60px;
        margin-bottom: 30px;        
    }
    .application.theme--light {
        background: #f1f1f1!important;
    }    
</style>
