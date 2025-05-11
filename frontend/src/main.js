import {createApp, inject, provide} from 'vue';
import App from '../App.vue';
import './registerServiceWorker';
import router from './router';
import internationalizationMixin from '@/mixins/i8n';

const app = createApp(App).use(router);
app.config.globalProperties.$t = internationalizationMixin.$t;
app.provide('$t', app.config.globalProperties.$t);
app.mount('#app');
