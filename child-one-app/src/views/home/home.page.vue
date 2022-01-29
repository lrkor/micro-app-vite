<template>
    <div class="home">
        home
        <p>{{ store.state.baseData.msg }}</p>
        <el-button>Default</el-button>
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
        return {
            test,
            store,
        };
    },
});
</script>
