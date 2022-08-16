<template>
    <div class="menu-comp">
        <el-menu
            :router="true"
            :unique-opened="false"
            :default-active="currentIndex"
            active-text-color="#ffd04b"
            class="el-menu-vertical"
            background-color="#545c64"
            text-color="#fff"
        >
            <el-menu-item index="/home">
                <el-icon :size="20"><HomeFilled /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/test">
                <el-icon :size="20"><Pointer /></el-icon>
                <span>测试</span>
            </el-menu-item>
            <el-menu-item index="/app-one#/">
                <el-icon :size="20"><Compass /></el-icon>
                <span>app-one</span>
            </el-menu-item>

            <el-menu-item index="/map#/">
                <el-icon :size="20"><MapLocation /></el-icon>
                <span>图表</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import store from '@/common/store';
import {HomeFilled, Pointer, Compass, MapLocation} from '@element-plus/icons-vue';

export default defineComponent({
    name: 'MenuComp',
    components: {HomeFilled, Pointer, Compass, MapLocation},
    setup() {
        const currentIndex = computed(() => store.getters.getCurrentIndex);

        return {
            currentIndex,
        };
    },
});
</script>

<style scoped lang="scss">
.menu-comp {
    height: 100%;
}

.el-menu-vertical {
    height: 100%;
}

.el-menu-item {
    display: flex;
    align-items: center;
    line-height: normal;

    .el-icon {
        margin-right: 10px;
        display: flex;
        align-items: center;
    }
}

.el-menu-item.is-active {
    background-color: #434a50;
}
</style>
