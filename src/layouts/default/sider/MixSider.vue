<template>
    <div>
        <AppLogo :showTitle="false" :class="`${prefixCls}-logo`" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { AppLogo } from '/@/components/Application';
import { useDesign  } from "/@/hooks/web/useDesign";
export default defineComponent({
    name:'LayoutMixsider',
    components:{AppLogo},
    setup(){
        const { prefixCls } = useDesign('layout-mix-sider')
        return {
            prefixCls
        }
    }
})
</script>