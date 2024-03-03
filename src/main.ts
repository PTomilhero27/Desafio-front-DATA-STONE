import './assets/css/tailwind.css'; // Tailwind CSS
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar'

import App from './App.vue';
import router from './router';



const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {},
})


app.mount('#app');
