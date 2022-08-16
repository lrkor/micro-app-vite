import {createRouter, RouteRecordRaw, createWebHistory} from 'vue-router';
import LoginPage from '@/login.page.vue';
import layout from '@/layout/index.vue';
import store from './common/store';

const guard = async (to: any, from: any, next: any) => {
    // 判断登录
    const token = sessionStorage.getItem('token');
    if (!token) {
        next('/');
        return false;
    }
    next();
};

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        component: layout,
        beforeEnter: guard,
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
            {
                path: '/map:page*',
                name: 'map',
                meta: {
                    icon: 'el-icon-s-map',
                    title: '图表应用',
                },
                component: () => import('@/views/map/map.page.vue'),
            },
        ],
    },
    {
        path: '/',
        meta: {
            icon: 'el-icon-s-home',
            title: '登录',
            hiddenTab: true,
        },
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

    if (to.path === '/map') {
        to.path = '/map#/';
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
