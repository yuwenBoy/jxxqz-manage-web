import { defineAsyncComponent } from "vue";
import { Spin } from "ant-design-vue";
import { noop } from "/@/utils/index";
interface OPtions {
   size?: 'defalut' | 'small' | 'large';
   delay?: number;
   timeout?: number;
   loading?: boolean;
   retry?: boolean;
}

export function createAsyncComponent(loader:Fn,options:OPtions = {}){
    const { size = 'small', delay = 100, timeout =3000, loading =false, retry = true} = options;
    return defineAsyncComponent({
        loader,
        loadingComponent: loading ? <Spin spinning={true} size={size} /> :undefined,
        timeout,
        delay,
        onError: !retry
            ? noop
            : (error,retry,fail,attempts)=>{
            if(error.message.match(/fetch/) && attempts <=3){
                retry();
            }else{
                fail();
            }
        }
    })
}