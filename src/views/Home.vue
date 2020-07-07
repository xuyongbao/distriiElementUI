<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

const Home = Vue.extend({
  // 类型推断已启用
  name: 'Home',
  data() {
    return {
      message: 'data'
    }
  },
  components: {
    HelloWorld
  }
})

export default Home;
</script>
