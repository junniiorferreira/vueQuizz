<template>
  <section class="screen">
    <div class="box-bg">
      <img class="logo" v-bind:src="logo" />
    </div>
    <questList/>
  </section>
</template>

<script>
import logo from '@/assets/img/start-logo.png'
import questList from '@/components/quest-list'
export default {
  components: {
    questList
  },  
  data () {
    return {
      logo: logo
    }
  },
  name: 'start',
  methods: {

  }
}
</script>

<style>
html {
  background-color: #2b3361;
}
.screen{
  background: url(/static/img/bg-start.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
}
.screen .box-bg {
  width: 100%;
  /* margin-left: auto; */
  margin-right: auto;
  /* padding-top: 40px; */
}
.screen .box-bg .logo {
  margin-left: 90px;
  margin-top: 15px;
}
.screen .box-bg img {
  position: relative;
}
.screen .box-init {
  padding-top: 300px;
}
.screen .box-bg .logo {
  margin-left: 50px;
  margin-top: 15px;
  max-width: 60%;
}
</style>