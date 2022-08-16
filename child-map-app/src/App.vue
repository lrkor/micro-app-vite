<template>
    <div id="app-map">
        <div id="public-links" @click="onRouteChange">
            <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/">Home</el-menu-item>
                <el-menu-item index="/test">test</el-menu-item>
            </el-menu>
        </div>
    </div>

    <router-view></router-view>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

// 子应用内部跳转时，通知侧边栏改变菜单状态
const onRouteChange = () => {
    if (window.eventCenterForAppNameVite) {
        // 发送全局数据，通知侧边栏修改菜单展示
        window.eventCenterForAppNameVite.setGlobalData({name: 'child-map'});
    }
};

const activeIndex = ref('/');
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
// export default defineComponent({
//     name: 'App',
//     components: {Line, AreaStack, BarSimple, WaterLevel, Map},
//     setup() {},
// });
</script>

<style></style>
