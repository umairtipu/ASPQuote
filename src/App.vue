<template>
  <div id="app" :style="{backgroundColor : $store.state.appBg}">
    <div class="container pt-3 text-left position-relative">
      <h3 class="site-title"><router-link to="/" :style="{color : $store.state.headerColor}">ASPQuote.com</router-link></h3>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    document.title = 'ASPQuote.com'
  }
}
</script>

<style>
.position-relative{
  z-index: 1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
