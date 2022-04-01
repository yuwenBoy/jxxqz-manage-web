<template>
  <ConfigProvider>
 <!-- <Input
        size="large"
        class="fix-auto-fill"
      />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="我的第一个vue3项目213131" /> -->
  <AppProvider>
       <RouterView />
  </AppProvider>
  </ConfigProvider>
</template>
<script setup lang="ts">
   import { AppProvider } from '/@/components/Application'
</script>

 
