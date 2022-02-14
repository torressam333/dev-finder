import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store/store';
import BaseCard from './components/base-components/BaseCard.vue';
import BaseButton from './components/base-components/BaseButton.vue';

const app = createApp(App);

//I want this globally available
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.use(router).use(store).mount('#app');
