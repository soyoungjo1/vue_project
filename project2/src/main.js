import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'
import AOS from 'aos';
import "aos/dist/aos.css";

const app = createApp(App);
app.use(router);
app.mount('#app');

// AOS를 초기화합니다. 이후에는 Vue 애플리케이션 전체에서 AOS를 사용할 수 있습니다.
AOS.init();
