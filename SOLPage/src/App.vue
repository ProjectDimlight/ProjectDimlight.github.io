<template>
  <div id="app">
    <header-bar></header-bar>
    <div style="height: 54px;"></div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    'header-bar': Header
  }
}
</script>

<style>
#app {
  font-size: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

a {
  color: white;
  text-decoration: none;
}

.words {
  line-height: 2.5;
}

</style>
