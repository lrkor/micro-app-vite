<template>
    <div id="app-one1">
        子应用
        <div id="public-links" @click="onRouteChange">
            <router-link to="/home">Home</router-link> |
            <router-link to="/test">Page2</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
// 子应用内部跳转时，通知侧边栏改变菜单状态
const onRouteChange = () => {
    if (window.eventCenterForAppNameVite) {
        // 发送全局数据，通知侧边栏修改菜单展示
        window.eventCenterForAppNameVite.setGlobalData({name: 'child-vite'});
    }
};
</script>
