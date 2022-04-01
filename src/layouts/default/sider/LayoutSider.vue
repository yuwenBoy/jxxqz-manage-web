<template>
    <div>
         <Sider ref="sideRef" breakpoint="lg" collapsed>
          <template>
           <LayoutTrigger />
         </template>
        <LayoutMenu />
      <DragBar ref="dragBarRef" />
         </Sider>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent,ref,unref,CSSProperties,h } from "vue";
import { Layout } from "ant-design-vue";
import LayoutMenu from '../menu/index.vue';
import LayoutTrigger from '/@/layouts/default/trigger/index.vue';
import DragBar from './DragBar.vue'
export default defineComponent({
     name: 'LayoutSideBar',
     components: { Sider:Layout.Sider,LayoutMenu,DragBar,LayoutTrigger},
     setup() {
          const dragBarRef = ref<ElRef>(null);
          const sideRef = ref<ElRef>(null);

           
     }
})
</script>