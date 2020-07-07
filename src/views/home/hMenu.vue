<template>
  <div class="h-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Vue from 'vue'

const HMenu = Vue.extend({
  // 类型推断已启用
  name: 'HMenu',

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
})

export default HMenu;
</script>

<style lang="scss" scoped>
.h-menu {
  width: 200px;
  height: 100%;
  background: #545c64;
  overflow-y: scroll;

  // 隐藏滚动条
  &::-webkit-scrollbar {
    display:none
  }
}

.el-menu {
  border: none;
}
</style>
