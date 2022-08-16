<template>
    <div class="home">
        <WaterLevel />
        <Line />
        <AreaStack />
        <BarSimple />
        <Map />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Line from '@/components/Line.vue';
import AreaStack from '@/components/AreaStack.vue';
import BarSimple from '@/components/BarSimple.vue';
import WaterLevel from '@/components/WaterLevel.vue';
import Map from '@/components/Map.vue';
export default defineComponent({
    name: 'Home',
    components: {Line, AreaStack, BarSimple, WaterLevel, Map},
    setup() {
        return {};
    },
});
</script>
