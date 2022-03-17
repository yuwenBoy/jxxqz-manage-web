<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { ConfigProvider,Input } from 'ant-design-vue';
</script>

<template>
  <ConfigProvider>
 <!-- <Input
        size="large"
        class="fix-auto-fill"
      />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="我的第一个vue3项目213131" /> -->
  <RouterView />
  </ConfigProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
