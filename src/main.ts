import '/@/design/index.less';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';
import App from './App.vue'
import { createApp } from 'vue'
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { router, setupRouter } from '/@/router'
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';

if (import.meta.env.DEV) {
    import('ant-design-vue/dist/antd.less');
}

async function bootstrap() {
  const app = createApp(App);
  
  // Configure store
  setupStore(app);
 // Initialize internal system configuration
 initAppConfigStore();
  setupRouter(app);
  setupRouterGuard(router);
    // Register global directive
  setupGlobDirectives(app);
  app.mount('#app');
}
bootstrap();
