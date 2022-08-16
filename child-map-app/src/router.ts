// import store from './common/store';

const routes = [
    {
        path: '/',
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
        component: () => import('@/views/test/test.page.vue'),
        meta: {
            icon: 'el-icon-s-home',
            title: '测试',
        },
    },
];

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: routes,
// } as RouterOptions);

// router.beforeEach((to, from, next) => {
//     const tabsOption = store.state.tabsOption;
//     // 判断当前路由中是否已经入栈
//     const flag = tabsOption.findIndex((tab: {route: string}) => tab.route === to.path) > -1;

//     if (!flag && !to.meta.hiddenTab) {
//         store.commit('addTab', {route: to.path, title: to.meta.title, name: to.name, meta: to.meta});
//     }
//     store.commit('setTab', to.path);
//     next();
// });

export default routes;
