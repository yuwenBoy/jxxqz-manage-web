import '/@/design/index.less';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';
import App from './App.vue'
import { createApp } from 'vue'

import { router, setupRouter } from '/@/router'

if (import.meta.env.DEV) {
    import('ant-design-vue/dist/antd.less');
}

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  
  app.mount('#app');
}
bootstrap();
