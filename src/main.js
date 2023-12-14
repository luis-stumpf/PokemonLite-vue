import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'jquery';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import { audioService } from '@/services/audioService';


const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.provide('$', $);
app.use(vuetify);

app.mount('#app')

/*app.unmount(() => {
    audioService.stopAudio1();
});*/

