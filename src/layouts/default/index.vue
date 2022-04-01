<template>
        <Layout :class="prefixCls">
            首页351q5151
            <LayoutFeatures />
            <LayoutHeader />
            <Layout>
               <LayoutSideBar />
            </Layout>
        </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from 'vue'
import { Layout } from 'ant-design-vue'
import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';

import LayoutHeader from './header/index.vue';

import LayoutSideBar from './sider/index.vue';

import { useDesign } from '/@/hooks/web/useDesign';

export default defineComponent({
    name:'DefaultLayout',
    components:{
        Layout,
        // 锁定屏幕，解锁密码组件
        LayoutFeatures:createAsyncComponent(() => import('/@/layouts/default/feature/index.vue')),
        LayoutHeader,
        LayoutSideBar
    },
    setup(){
        const { prefixCls } = useDesign('default-layout');

        // const layoutClass = computed(() => {
        //     let cls:string[] = ['ant-layout'];
        //     if(unref())
        // })
        return {
            prefixCls
        }
    },
})
</script>
<style lang="less">
    @prefix-cls: ~'@{namespace}-default-layout';
</style>
