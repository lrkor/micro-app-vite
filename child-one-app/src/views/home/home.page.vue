<template>
    <div class="home">
        home
        <p>{{ store.state.baseData.msg }}</p>
        <p>登录token：{{ token }}</p>
        <el-button @click="sendData">发送数据</el-button>
        <el-button type="primary">Primary</el-button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
    name: 'Home',
    components: {},
    setup() {
        const test = (id: string) => {
            return id;
        };
        const store = useStore();

        const sendData = () => {
            sessionStorage.setItem('xxx', 'xxxxxx');
            window.eventCenterForAppNameVite.dispatch({sendData: 'sendData'});
        };

        const token = sessionStorage.getItem('token');

        return {
            test,
            store,
            sendData,
            token,
        };
    },
});
</script>
