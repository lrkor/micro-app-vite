<template>
    <div class="directives">
        自定义指令
        <input v-focus />

        <div id="dynamic-arguments-example" class="demo">
            <p>Scroll down the page</p>
            <p v-pin="200">Stick me 200px from the top of the page</p>
        </div>

        <div id="dynamicexample">
            <h3>Scroll down inside this section ↓</h3>
            <p v-pin1:[direction]="500">I am pinned onto the page at 500px to the left.</p>
        </div>

        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
            <ul id="scroll" v-scroll="loadMore" class="scroll">
                <li v-for="item in options" :key="item.value">
                    <el-option :label="item.label" :value="item.value"> </el-option>
                </li>
            </ul>
        </el-select>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, nextTick} from 'vue';
const directives = {
    focus: {
        mounted(el: any) {
            // 聚焦元素
            el.focus();
        },
    },
    pin: {
        mounted(el: any, binding: any) {
            el.style.position = 'fixed';
            // binding.value 是我们传递给指令的值——在这里是 200
            el.style.top = binding.value + 'px';
        },
    },

    pin1: {
        mounted(el: any, binding: any) {
            el.style.position = 'fixed';
            // binding.arg 是我们传递给指令的参数
            const s = binding.arg || 'top';
            el.style[s] = binding.value + 'px';
        },
    },

    scroll: {
        mounted(el: any, binding: any) {
            const ulDom = document.querySelector('#scroll');
            ulDom?.addEventListener('scroll', function () {
                const flag = ulDom.scrollHeight - ulDom.scrollTop <= ulDom.clientHeight;
                if (flag) {
                    binding.value();
                }
            });
        },
    },
};

export default defineComponent({
    name: 'Directives',
    directives: directives,
    components: {},
    setup() {
        const value = ref('');

        const options = reactive([
            {
                value: 'Option1',
                label: 'Option1',
            },
            {
                value: 'Option2',
                label: 'Option2',
            },
            {
                value: 'Option3',
                label: 'Option3',
            },
            {
                value: 'Option4',
                label: 'Option4',
            },
            {
                value: 'Option5',
                label: 'Option5',
            },
            {
                value: 'Option1',
                label: 'Option1',
            },
            {
                value: 'Option2',
                label: 'Option2',
            },
            {
                value: 'Option3',
                label: 'Option3',
            },
            {
                value: 'Option4',
                label: 'Option4',
            },
            {
                value: 'Option5',
                label: 'Option5',
            },
        ]);

        const loadMore = () => {
            console.log(2222); // 这里可以做你想做的任何事
        };

        return {options, value, loadMore};
    },
});
</script>

<style scoped lang="scss">
.scroll {
    height: 220px;
    overflow-y: scroll;
}
</style>
