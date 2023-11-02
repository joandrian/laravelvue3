import './bootstrap';

import {createApp} from 'vue';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/v1/';
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;



import App from './components/App.vue';
import store from './store/store';
import router from './router/router';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
