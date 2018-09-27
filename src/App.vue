<template>
  <v-content>
    <router-view/>
    <div class="box-resume" v-if="solucoesDigitais()">
      <h2>Seu desafio corporativo pode ser superado com <b>Soluções Digitais</b></h2>
      <p>Soluções digitais utilizam metodologias imersivas e garantem o aprendizado para um número alto de colaboradores, geralmente aplicada para realizar um overview.</p>
      <digitalTabs/>
    </div>
    <div class="box-resume" v-if="solucoesPresenciais()">
      <h2>Seu desafio corporativo pode ser superado com <b>Soluções Presenciais</b></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt rhoncus ex sit amet luctus. Vivamus tempor, odio ac tristique pellentesque, tortor urna finibus orci, facilisis sagittis nisl enim in augue. Integer sed mauris elit.</p>
      <presencialTabs/>
    </div>
    <div class="box-resume" v-if="solucoesBlended()">
      <h2>Seu desafio corporativo pode ser superado com <b>Soluções Blended</b></h2>
      <p>O blended learning pode oferecer novas oportunidades de aprendizagem, além de permitir combinar diversas abordagens em um mesmo plano educacional, garantindo um ensino compartilhado e customizado para atender as reais necessidades de cada projeto</p>
      <blendedTabs/>
    </div>        
    <div class="box-pos" v-if="solucoesDigitais() || solucoesBlended() || solucoesPresenciais()">
      <p>Se você ainda tem dúvidas sobre qual o modelo mais vantajoso, solicite uma conversa com nossos especialistas em capacitação corporativa</p>
        <div class="btn-row">
          <v-btn flat class="btn-next result">FALE COM NOSSOS CONSULTORES</v-btn>
        </div>
    </div>
    <footer v-if="solucoesDigitais() || solucoesBlended() || solucoesPresenciais()">
      <div class="footer-box">
        <span class="copyr">2018 © Grupo Leader. Esse é o jeito Leader de ser e fazer!</span>
        <div class="social-box"> 
          <p>Gostou? compartilhe</p>
          <ul>
            <li><img v-bind:src="faceLogo" /></li>
            <li><img v-bind:src="twitterLogo" /></li>
            <li><img v-bind:src="linkedinLogo" /></li>
            <li><img v-bind:src="instaLogo" /></li>
            <li><img v-bind:src="mailLogo" /></li>
          </ul>
        </div>      
      </div>
    </footer>
  </v-content>
</template>

<script>
import faceLogo from '@/assets/img/faceLogo.png'
import twitterLogo from '@/assets/img/twitterLogo.png'
import linkedinLogo from '@/assets/img/linkedinLogo.png'
import instaLogo from '@/assets/img/instaLogo.png'
import mailLogo from '@/assets/img/mailLogo.png'
import digitalTabs from '@/components/digitalTabs.vue'
import presencialTabs from '@/components/presencialTabs.vue'
import blendedTabs from '@/components/blendedTabs.vue'

export default {
  components: {
    faceLogo,
    twitterLogo,
    linkedinLogo,
    instaLogo,
    mailLogo,
    digitalTabs,
    presencialTabs,
    blendedTabs
  },
  data () {
    return {
      faceLogo: faceLogo,
      twitterLogo: twitterLogo,
      linkedinLogo: linkedinLogo,
      instaLogo: instaLogo,
      mailLogo: mailLogo,
    }
  },
  methods: {
    solucoesDigitais: function() {
      return this.$route.path === '/solucoes-digitais'
    },
    solucoesPresenciais: function() {
      return this.$route.path === '/solucoes-presenciais'
    },
    solucoesBlended: function() {
      return this.$route.path === '/solucoes-blended'
    }       
  }
}
</script>

<style>
.content:not(:last-child) {
  margin-bottom: 0!important;
}
</style>
