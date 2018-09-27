<template>
  <section class="screen">
    <div class="box-bg">
      <img class="logo" v-bind:src="logo" />
    </div>
    <div class="box-result-title">
      <h1 class="result-title">Experimente estas dicas para superar seus desafios:</h1>
    </div>
  </section>
</template>
<script>
import logo from '@/assets/img/logo-webdoor.png'
export default {
  data () {
    return {
      logo: logo
    }
  },
  name: 'presenciais',
  methods: {

  }
}
</script>
<style>
html {
  background-color: #5a2e90!important;
}
.screen{
  background: url(/static/img/webdor-grape.jpg);
  background-repeat: no-repeat;
  background-size: cover
}
.screen .box-bg .logo {
    margin-left: 30px;
    margin-top: 25px;
}
.screen .box-bg img {
  position: relative;
}
.screen .box-init {
  padding-top: 300px;
}
.box-result-title {
  padding-top: 90px;
  padding-bottom: 150px;
}
.box-result-title .result-title {
  text-align: center;
  color: #ffffff!important;
  font-size: 32px!important;
  font-family: 'roboto-light';
}
.box-resume {
    background: #fff;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -100px;
    /* padding: 40px; */
    padding-top: 30px;
    /* padding-bottom: 10px; */
}
.box-resume h2 {
    color: #5a2e90;
    font-size: 27px;
    font-family: 'roboto-light';
    margin-bottom: 0;
    padding-left: 40px;
    padding-right: 40px;    
}
.box-resume h2 b{
    font-family: 'roboto-bold';
}
.box-resume p {
    font-size: 20px;
    color: #666666;
    font-family: 'roboto-light';
    line-height: 25px;
    padding-top: 20px;
    margin-bottom: 50px!important;
    padding-left: 40px;
    padding-right: 40px;    
}
.box-pos {
    margin-top: 60px;
    text-align: center;
    color: #fff;
    font-size: 22px;
    font-family: 'roboto-light';
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    line-height: 26px;
}
.btn-next.result {
    background-color: #55c9ca!important;
    font-size: 16px;
    font-family: 'roboto-bold';
    padding: 20px;
    height: 4px;
    border-radius: 5px;
}
footer {
    background: #343746;
    padding-top: 30px;
    padding-bottom: 20px;
}
footer span.copyr {
    color: #85899c;
    font-family: 'Raleway-Regular';
    font-size: 14px;
    position: absolute;
    margin-top: 40px;
}
.footer-box .social-box p {
    font-size: 16px;
    padding-right: 18px;
    color: #85899b;
    margin-bottom: 5px;
    text-align: right;
    font-family: 'raleway-regular';
}
.box-pos .btn-row {
    margin-bottom: 50px;
}
footer .footer-box {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
}
footer .social-box ul {
    list-style: none;
    margin-left: 0;
    margin-top: 0;
    display: flex;
    margin-left: auto;
    text-align: right;
    width: 170px;    
}
.content li + li {
    margin-top: 0;
}
.social-box ul li {
    padding-right: 10px;
}
.result-tabs .tabs__bar.transparent {
    width: 100%;
}
.result-tabs .tabs__div.primary--text {
    min-width: 33.3%!important;
    max-width: unset;
    margin: 0!important;
}
.result-tabs a.tabs__item.tabs__item--active {
    background: #f1f1f1;
    color: #5a2e90;
    margin: 0;
    border-bottom: none;
    font-size: 16px;
    font-family: 'roboto-bold';    
}
.result-tabs .tabs__items.white.elevation-1 {
    box-shadow: none!important;
    background: #f1f1f1!important;
}
.result-tabs .tabs__content .card {
    background: #f1f1f1;
    box-shadow: none;
}
.result-tabs .toolbar {
    box-shadow: none!important;
}
.result-tabs .toolbar__content {
    display: none;
}
.result-tabs .tabs__slider-wrapper {
    display: none;
}
.result-tabs .tabs a {
    border-bottom-color: none;
    border-bottom-style: none;
    border-bottom-width: none;
    font-size: 16px;
    font-family: 'roboto-bold';    
}
</style>