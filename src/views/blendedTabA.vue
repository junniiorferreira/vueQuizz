<template>
<div id="app">
  <v-app id="inspire">
      <h2 class="container-title primeiro">Porque o Blended Learning é uma experiência única de ensino?</h2>
    <v-expansion-panel>
        <v-expansion-panel-content>
            <div slot="header">Maior engajamento em função da variedade de conteúdos</div>
            <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Alunos diferentes, estilos diferentes</div>
            <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Avaliações e correções personalizadas</div>
            <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Feedback aprimorado</div>
            <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <div slot="header">Transforma o aprendizado</div>
            <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
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
