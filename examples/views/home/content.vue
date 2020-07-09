<template>
  <div class="h-content">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'

const Content = Vue.extend({
  // 类型推断已启用
  name: 'Content',
})

export default Content;
</script>
