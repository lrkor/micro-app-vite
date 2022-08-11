<template>
    <div class="app-one">
        <el-button @click="setData">下发新数据</el-button>
        <el-button @click="getData">获取微应用sessionStorage</el-button>
        <micro-app
            name="appOne"
            url="http://localhost:3000/app/one/"
            inline
            disable-sandbox
            :data="microAppData"
            @created="handleCreate"
            @beforemount="handleBeforeMount"
            @mounted="handleMount"
            @unmount="handleUnmount"
            @error="handleError"
            @datachange="handleDataChange"
        ></micro-app>
    </div>
</template>

<script lang="ts">
// 沙箱关闭后，子应用默认的通信功能失效，此时可以通过手动注册通信对象实现一致的功能。注册方式：在基座应用中为子应用初始化通信对象
import {EventCenterForMicroApp} from '@micro-zoe/micro-app';

// @ts-ignore 因为vite子应用关闭了沙箱，我们需要为子应用appOne创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForAppNameVite = new EventCenterForMicroApp('appOne');

export default {
    name: 'AppOne',
    data() {
        return {
            microAppData: {msg: '来自基座的数据'},
        };
    },
    methods: {
        handleCreate(): void {
            console.log('child-vite 创建了');
        },

        handleBeforeMount(): void {
            console.log('child-vite 即将被渲染');
        },

        handleMount(): void {
            console.log('child-vite 已经渲染完成');

            setTimeout(() => {
                // @ts-ignore
                this.microAppData = {msg: '来自基座的新数据'};
            }, 2000);
        },

        handleUnmount(): void {
            console.log('child-vite 卸载了');
        },

        handleError(): void {
            console.log('child-vite 加载出错了');
        },

        setData(): void {
            this.microAppData = {msg: '更新'};
        },

        getData() {
            console.log(sessionStorage.getItem('xxx'));
        },

        handleDataChange(e: CustomEvent): void {
            console.log('来自子应用 child-vite 的数据:', e.detail.data);
        },
    },
};
</script>
