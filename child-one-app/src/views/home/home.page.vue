<template>
    <div class="home">
        home
        <p>{{ store.state.baseData.msg }}</p>
        <p>登录token：{{ store.state.baseData.token }}</p>
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
            window.eventCenterForAppNameVite.dispatch({sendData: 'sendData'});
        };
        return {
            test,
            store,
            sendData,
        };
    },
});
</script>
