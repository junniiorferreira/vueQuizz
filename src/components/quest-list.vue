<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>
      <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">1</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Existem novos colaboradores na empresa e a necessidade de integração a cultura, normas e regulamento da empresa?</p></div>
            </div>           
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <!-- <div>
                <delay :wait="2500">
                    <vue-slider ref="slider2" v-bind="demo.demo2" v-model="demo.demo2.value"></vue-slider>    
                </delay>
            </div>              -->
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return disabled"
                disabled
                flat><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 2"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>
            <div class="btn-row">
                <v-btn
                class="btn-return disabled"
                disabled
                flat>Anterior</v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 2">Avançar</v-btn>            
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">2</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Existe a necessidade de atualização de competências e habilidades de funcionários?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>          
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 1"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 3"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 1"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="blended(nota);e1 = 3">Avançar</v-btn>            
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">3</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Estão passando por uma mudança de cultura e/ou comportamental dentro da empresa?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 2"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 4"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 2"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="presencial(nota);e1 = 4">Avançar</v-btn>            
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">4</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Estão passando por mudanças operacionais nos processos e/ou equipamentos dentro da empresa?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 3"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 5"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 3"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 5">Avançar</v-btn>            
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">5</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Estão realizando promoção de colaboradores e/ou novas responsabilidades de função?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 4"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 6"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 4"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="blended(nota);e1 = 6">Avançar</v-btn>            
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="6">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">6</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Existe a necessidade de desenvolvimento de lideranças e/ou mentoria?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 5"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 7"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 5"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="presencial(nota);e1 = 7">Avançar</v-btn>
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="7">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">7</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Existe um cenário de desmotivação, conflitos e/ou falta de engajamento dos colaboradores?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 6"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 8"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 6"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="blended(nota);e1 = 8">Avançar</v-btn>
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="8">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">8</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Existe a necessidade de aumentar a produtividade dos colaboradores através da implementação de novas ferramentas?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 7"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 9"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 7"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 9">Avançar</v-btn>
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="9">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">9</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Existe a necessidade de aumentar as vendas e/ou retenção de clientes?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 8"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 10"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 8"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 10">Avançar</v-btn>
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="10">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">10</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Existe um cenário de melhoria no processo de tomada de decisão e/ou execução de tarefas?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 9"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next" @click="digital(nota);e1 = 11"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 9"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next" @click="blended(nota);e1 = 11">Avançar</v-btn>
            </div>                    
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="11">
        <v-card
          class="mb-5"
          color="white"
          height="auto"
        >
            <div class="title-row">
                <div class="index"><span class="current">11</span><span class="diviser">/</span>11</div>
                <div class="vertical-line"></div>
                <div class="quest"><p>Existem dificuldades na comunicação entre líderes, sócios e/ou colaboradores?</p></div>
            </div>
            <div class="slider-row">
                <v-layout row wrap class="dark--text">
                    <v-flex xs10>
                    <p>Situação</p>
                    <span>Pouco Aderente</span>
                    </v-flex>
                    <v-flex xs2 class="flex-span-right">
                        <p>Situação</p>
                        <span>Muito Aderente</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="nota" row>
                        <v-flex xs10 class="flex-radio-left">
                            <v-radio class="left-radio" value="radio-1"></v-radio>
                        </v-flex>
                        <v-flex xs2 class="flex-radio-right">
                            <v-radio class="right-radio" value="radio-2"></v-radio>
                        </v-flex>
                    </v-radio-group>
                </v-layout>                
            </div>
            <div class="btn-row-mobile">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 10"
                ><v-icon>arrow_back</v-icon></v-btn>
                <v-btn flat class="btn-next result" @click="presencial(nota);endQuiz()"><v-icon>arrow_forward</v-icon></v-btn>            
            </div>            
            <div class="btn-row">
                <v-btn
                class="btn-return"
                flat
                @click="e1 = 10"
                >
                Anterior
                </v-btn>
                <v-btn flat class="btn-next result" @click="presencial(nota);endQuiz()">Ver Resultado</v-btn>
            </div>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
  import vueSlider from 'vue-slider-component';
  export default {
    data () {
      return {
        // lvl1 = soluções digitais
        // lvl2 = soluções presenciais
        // lvl3 = blended
        e1: 0,
        lvl1: 0,
        lvl2: 0,
        lvl3: 0,
        nota: '',
        demo: {
            demo2: {
                value: 1,
                width: '100%',
                tooltip: false,
                disabled: false,
                piecewise: false,
                piecewiseLabel: false,
                // style: {
                //     marginLeft: '10%'
                // },
                data: [0,1,2],
                piecewiseStyle: {
                    backgroundColor: '#cccccc',
                    visibility: 'visible',
                    width: '12px',
                    height: '12px'
                },
                piecewiseActiveStyle: {
                    backgroundColor: '#3fa9f5'
                },
                labelActiveStyle: {
                    color: '#3fa9f5'
                }
            }
        },
      }
    },
    components: {
        vueSlider
    },      
    methods: {
        endQuiz() {
            if(this.lvl1 > this.lvl2 && this.lvl1 > this.lvl3){
                window.location.href = '/solucoes-digitais';
                console.log(lvl1)
            }
            if(this.lvl2 > this.lvl1 && this.lvl2 > this.lvl3){
                window.location.href = '/solucoes-presenciais';
                console.log(lvl2)
            }
            if(this.lvl3 > this.lvl2 && this.lvl3 > this.lvl1){
                window.location.href = '/solucoes-blended';
                console.log(lvl3)
            }
            if(this.lvl1 == this.lvl2 && this.lvl1 == this.lvl3){
                window.location.href = '/solucoes-blended';
            }
            if(this.lvl2 == this.lvl1 && this.lvl2 == this.lvl3){
                window.location.href = '/solucoes-blended';
            }
            if(this.lvl3 == this.lvl1 && this.lvl3 == this.lvl2){
                window.location.href = '/solucoes-blended';
            }            
            if(this.lvl1 == this.lvl3 && this.lvl3 > this.lvl2){
                window.location.href = '/solucoes-blended';
            }
            if(this.lvl1 == this.lvl2 && this.lvl2 > this.lvl3){
                window.location.href = '/solucoes-digitais';
            }
            if(this.lvl2 == this.lvl3 && this.lvl3 > this.lvl1){
                window.location.href = '/solucoes-blended';
            }                        
        },
        blended(nota){
            if(nota === 'radio-1'){
                this.lvl3 += 0;
                this.nota = ''
                console.log('lvl3 = '+this.lvl3+' pontos')
            }
            if(nota === 'radio-2'){
                this.lvl3 += 25;
                this.nota = ''
                console.log('lvl3 = +'+this.lvl3+' pontos')
            }
            else{
                this.lvl3 += 0;
                this.nota = ''
                console.log('lvl3 = '+this.lvl3+' pontos')
            }
        },
        digital(nota){
            if(nota === 'radio-1'){
                this.lvl1 += 0;
                this.nota = '';
                console.log('lvl1 = '+this.lvl1+' pontos')
            }
            if(nota === 'radio-2'){
                this.lvl1 += 25;
                this.nota = '';
                console.log('lvl1 = +'+this.lvl1+' pontos')
            }            
            else{
                this.lvl1 += 0;
                this.nota = '';
                console.log('lvl1 = '+this.lvl1+' pontos')
            }
        },
        presencial(nota){
            if(nota === 'radio-1'){
                this.lvl2 += 0;
                this.nota = '';
                console.log('lvl2 = '+this.lvl2+' pontos')
            }
            if(nota === 'radio-2'){
                this.lvl2 += 34;
                this.nota = '';
                console.log('lvl2 = +'+this.lvl2+' pontos')
            }            
            else{
                this.lvl2 += 0;
                this.nota = '';
                console.log('lvl2 = '+this.lvl2+' pontos')
            }
        }
    }    
  }
</script>
<style>
.stepper__header {
    display: none;
}
.screen .stepper {
    display: table;
    width: 76%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -70px;
    border: 0;
    outline: 0;
    box-shadow: none;
}
.screen .stepper .slider-row {
    display: table;
    width: 100%;
}
.screen .stepper .slider-row .span-left-row {
    float: left;
    text-align: left;
}
.screen .stepper .slider-row .span-right-row {
    float: right;
    text-align: right;
}
.slider-row p, .slider-row span {
    margin-bottom: 0!important;
    color: #7f7f7f;
    font-family: 'Roboto-Regular';
    font-size: 15px;
}
.screen .stepper .title-row {
    display: flex;
    margin-bottom: 40px;
}
.screen .stepper .mb-5.card.white {
    padding: 35px;
    margin-bottom: 20%!important;
    border-radius: 10px;
}
.screen .stepper .mb-5.card.white .btn-row {
    margin-top: 0px;
}
.title-row .index span.current {
    color: #6ba6f1;
    font-size: 26px;
    font-family: 'Roboto-Bold';
}
.title-row .index span.diviser {
    color: #979797;
    font-size: 26px;
    font-family: 'Roboto-Light';
}
.title-row .index {
    color: #979797;
    font-size: 16px;
    font-family: 'Roboto-Light';
    padding-right: 1vw;
}
.title-row .quest p {
    color: #4e4e4e;
    font-size: 22px;
    margin-bottom: 0;
    line-height: 1.2em;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    text-align: left;
}
.title-row .vertical-line {
    width: 4px;
    background: #a59051;
}
.btn-next {
    background-color: #b0b0b0!important;
    color: #fff;
    height: auto!important;
    margin: 0!important;
    float: right;
    letter-spacing: 3px;
}
.btn-next.result {
    background-color: #55c9ca!important;
    letter-spacing: 3px;
}
.btn-next .btn__content {
    height: auto;
    padding-bottom: 15px;
    padding-top: 15px;
}
.btn-return {
    background-color: transparent!important;
    letter-spacing: 3px;
    color: #b1b1b1;
    height: auto!important;
    margin: 0!important;
    border: 1px solid #b1b1b1;
}
.btn-return.disabled{
    opacity: 0.5;
    min-width: 60px;
    min-height: 50px;    
}
.btn-return{
    min-width: 60px;
    min-height: 50px;    
}
.btn-return .btn__content {
    height: auto;
    padding-bottom: 15px;
    padding-top: 15px;
}
.vue-slider-dot{
    width: 50px!important;
    height: 23px!important;
    top: -9px!important;
    border-radius: 15px!important;    
}
.input-group--selection-controls__ripple {
    float: right!important;
    left: unset!important;
    right: 0!important;
}
.flex-span-right{
    text-align: right;
}
.flex-radio-right.flex.xs2 {
    position: absolute!important;
    right: 0!important;
}
.input-group--selection-controls__ripple {
    display: none;
}
.flex-radio-left.flex.xs10 {
    position: absolute!important;
}
@media only screen and (max-width: 760px) {
    .btn-row {
        display: none;
    }
    .btn-return .btn__content {
        padding: 0;
    }    
}
@media only screen and (min-width: 761px) {
    .btn-row-mobile {
        display: none;
    }    
    .btn-return .btn__content {
        padding-left: 30px;
        padding-right: 30px;
    }
}
@media only screen and (max-width: 480px) {
    .title-row .quest p {
        font-size: 13px; 
    }
    .slider-row p, .slider-row span {
        font-size: 13px;
    }      
   
}
@media only screen and (min-width: 481px) {
    .title-row .quest p {
        font-size: 17px; 
    }
    .slider-row p, .slider-row span {
        font-size: 17px;
    }
    .btn-next .btn__content {
        padding: 15px;
        padding-left: 30px;
        padding-right: 30px;
    }
}
@media only screen and (max-width: 760px) and (min-width: 320px)  {
    .btn-next .btn__content {
        padding: 0;
    }     
    .screen .stepper .title-row {
        display: block;
    }
    .title-row .index {
       text-align: center;
    } 
    .title-row .vertical-line {
        width: 50px;
        height: 4px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        background: #a59051;
    }
    .screen .stepper {
        width: 100%;
        margin-top: -55px;
    }
    .screen .stepper .mb-5.card.white {
        padding: 15px;
    }
    .title-row .quest p {
        line-height: 1.5em;
        width: 100%;
        text-align: center;
    }
    button.btn-next.btn.btn--flat {
        min-width: 60px;
        min-height: 50px;
    }
        
    .layout.dark--text.row.wrap .flex.xs10 {
        flex-basis: 60%;
    }
    .layout.dark--text.row.wrap .flex.flex-span-right.xs2 {
        max-width: 40%;
        flex-basis: 40%;        
    }
    .layout.row.wrap .input-group {
        padding: 5px 0 0;
    }     
}
</style>
