<template>
  <div id="app">
    <h-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import HMenu from '@/views/home/hMenu.vue'
export default {
  name: 'app',

  data() {
    return {
      message: '这是首页'
    }
  },

  components: { HMenu },
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
