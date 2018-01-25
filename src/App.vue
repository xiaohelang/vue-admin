<template>
  <div id="app" style="height: 100%;">
    <!--<home></home>-->
    <router-view/>
  </div>
</template>

<script>
//  import Home from './components/Home.vue'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*color: #fff;*/
  /*margin-top: 60px;*/
}
  body, html{ height: 100%;}
</style>
