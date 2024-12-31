import { createApp } from 'vue';
import 'uno.css';
import 'nprogress/nprogress.css';
import 'vite-plugin-doc-preview/style/style.css';
import MobjeComponents from 'mo-web-components';
import AppComp from './app.vue';
import './css/github-markdown-css.scss';
import 'mo-web-components/dist/style.css';
import './css/index.scss';
import './css/doc.scss';
import router from './router';

const app = createApp(AppComp);

app.use(MobjeComponents).use(router).mount('#app');
