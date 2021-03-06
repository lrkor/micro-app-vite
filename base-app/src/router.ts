import {createRouter, RouteRecordRaw, createWebHistory} from 'vue-router';
import LoginPage from '@/login.page.vue';
import layout from '@/layout/index.vue';
import store from './common/store';
import {t} from 'element-plus/lib/locale';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: layout,
        redirect: '/test',
        meta: {
            icon: 'el-icon-s-home',
        },

        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/home/home.page.vue'),
                meta: {
                    icon: 'el-icon-s-home',
                    title: '首页',
                },
            },
            {
                path: '/test',
                name: 'Test',
                meta: {
                    icon: 'el-icon-s-home',
                    title: '测试',
                },
                component: () => import('@/views/test/test.page.vue'),
            },
            {
                path: '/app-one:page*',
                name: 'app-one',
                meta: {
                    icon: 'el-icon-s-home',
                    title: '应用1',
                },
                component: () => import('@/views/app-one/app-one.page.vue'),
            },
        ],
    },
    {
        path: '/login',
        component: LoginPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    const tabsOption = store.state.tabsOption;

    // 判断为子应用路由修改path
    if (to.path === '/app-one') {
        to.path = '/app-one#/';
    }

    // 判断当前路由中是否已经入栈
    const flag = tabsOption.findIndex((tab: {route: string}) => tab.route === to.path) > -1;

    if (!flag && !to.meta.hiddenTab) {
        store.commit('addTab', {route: to.path, title: to.meta.title, name: to.name, meta: to.meta});
    }

    store.commit('setTab', to.path);
    next();
});

export default router;
