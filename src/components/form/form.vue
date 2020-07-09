<template>
  <div class="h-form">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form, FormItem, Row, Col, Popover, Input } from 'element-ui'

const HForm =  Vue.extend({
  components: { 
    'el-form': Form,
    'el-form-item': FormItem,
    'el-row': Row,
    'el-col': Col,
    'el-popover': Popover,
    'el-input': Input,
  },

  data() {
    return {
      form: {
        name: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
})

export default HForm
</script>