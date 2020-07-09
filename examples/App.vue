<template>
  <div id="app">
    <c-menu/>
    <c-content/>
  </div>
</template>

<script>
import cMenu from './views/home/menu.vue'
import cContent from './views/home/content.vue'
export default {
  name: 'app',

  data() {
    return {
      message: '这是首页'
    }
  },

  components: { cMenu, cContent },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
}

html, body, #app {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>
