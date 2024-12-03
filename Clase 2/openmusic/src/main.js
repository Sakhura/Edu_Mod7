import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

const app = createApp(App);
app.use(store); // conexion xon vuex en la app
app.mount('#app');
