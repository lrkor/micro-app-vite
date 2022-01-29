import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import router from './router';
import store from './common/store';

import App from './App.vue';

import 'element-plus/dist/index.css';
import './common/styles/index.scss'; // global css

// 微前端引入
import microApp from '@micro-zoe/micro-app';

microApp.start({
    globalAssets: {
        js: [], // js地址
        css: ['element-plus/dist/index.css', './common/styles/index.scss'], // css地址
    },
    lifeCycles: {
        created() {
            console.log('created 全局监听');
        },
        beforemount() {
            console.log('beforemount 全局监听');
        },
        mounted() {
            console.log('mounted 全局监听');
        },
        unmount() {
            console.log('unmount 全局监听');
        },
        error() {
            console.log('error 全局监听');
        },
    },
    plugins: {
        modules: {
            // appName即应用的name值
            'appOne': [
                {
                    loader(code) {
                        if (process.env.NODE_ENV === 'development') {
                            // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
                            code = code.replace(/(from|import)(\s*['"])(\/app\/one\/)/g, all => {
                                return all.replace('/app/one/', 'http://localhost:3000/app/one/');
                            });
                        }
                        return code;
                    },
                },
            ],
        },
    },
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
