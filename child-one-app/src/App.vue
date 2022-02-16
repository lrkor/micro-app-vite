<template>
    <div id="app-one1">
        <div id="public-links" @click="onRouteChange">
            <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/home">Home</el-menu-item>
                <el-menu-item index="/test">Page2</el-menu-item>
                <el-menu-item index="/directives">指令</el-menu-item>
            </el-menu>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
// 子应用内部跳转时，通知侧边栏改变菜单状态
const onRouteChange = () => {
    if (window.eventCenterForAppNameVite) {
        // 发送全局数据，通知侧边栏修改菜单展示
        window.eventCenterForAppNameVite.setGlobalData({name: 'child-vite'});
    }
};

const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>
