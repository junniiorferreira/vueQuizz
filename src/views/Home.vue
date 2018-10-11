<template>
  <section class="screen">
    <div class="box-bg">
      <img v-bind:src="logoMask" />
      <img class="logo" v-bind:src="logo" />
    </div>
    <div class="box-init">
      <h1>Procurando ajuda para seu próximo desafio em educação corporativa?</h1>
      <h2>Responda a 11 perguntas para obter dicas personalizadas que abordam os principais desafios de aprendizagem nas empresas.</h2>          
    </div>
    <div class="box-btn">
      <v-btn 
        depressed 
        small 
        class="btn-blue login-default"
        color="secondary"                           
        @click="initQuiz()"
        >Vamos Começar</v-btn>          
    </div>
  </section>     
</template>

<script>
import logoMask from '@/assets/img/logo-smoke.png'
import logo from '@/assets/img/logo-main.png'
export default {
  data () {
    return {
      logo: logo,
      logoMask: logoMask
    }
  },
  name: 'start',
  methods: {
    initQuiz() {
      window.location.href = '/start';
    }
  }
}
</script>

<style>
.screen{
  background: url(/static/img/bg-full.jpg);
  background-repeat: no-repeat;
  background-size: cover
}
.screen .box-bg {
  width: 380px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
}
.screen .box-bg .logo {
  margin-left: 90px;
  margin-top: 80px;
}
.screen .box-bg img{
  position: absolute
}
.screen .box-init {
  padding-top: 300px;
}
.screen .box-init h1 {
  font-size: 38px;
  line-height: 1.2em;
  color: #fff;
  font-family: 'Roboto-Light';
  width: 70%;
  margin-bottom: 25px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.screen .box-init h2 {
  font-size: 18px;
  color: #fff;
  font-family: 'Roboto-Light';
  width: 49%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.screen .box-btn {
  text-align: center;
  padding-bottom: 10%;
  margin-top: 70px;
}
.screen .box-btn {
  text-align: center;
  padding-bottom: 10%;
  margin-top: 70px;
}
.screen .box-btn .btn--small {
  font-family: 'Roboto-Bold';
  font-size: 12px;
  background: #82c7c8;
  padding: 15px;
  border-radius: 3px;
  height: auto;
  padding-left: 30px;
  padding-right: 30px;
  letter-spacing: 3px;
}
@media only screen and (max-width: 480px) and (min-width: 320px)  {
  .screen .box-bg {
    width: 100%;
    padding-top: 90px;
  }
  .screen .box-bg .logo {
    margin-left: 100px;
    margin-top: 0px;
    width: 45%;
  }
  .screen .box-bg img {
    position: absolute;
    width: 70%;
    margin-top: -35px;
    margin-left: 55px;
  }
  .screen .box-init {
    padding-top: 200px;
  }
  .screen .box-init h1 {
    font-size: 22px;
    width: 85%;
  }
  .screen .box-init h2 {
    font-size: 14px;
    line-height: 1.5em;
    width: 85%;
  }
  .screen .box-btn {
    padding-bottom: 30%;
    margin-top: 20px;
  }    
}
</style>