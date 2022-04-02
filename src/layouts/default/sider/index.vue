<template>
    <Drawer>
         <Sider />
    </Drawer>
    <MixSider />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sider from './LayoutSider.vue';
import MixSider from './MixSider.vue';
import { Drawer } from "ant-design-vue";
export default defineComponent({
    name:'SiderWrapper',
    components:{ Sider,Drawer,MixSider },
    setup(){

    }
})
</script>