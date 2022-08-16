<template>
    <div class="map" id="barSimple">line</div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
    name: 'BarSimple',
    setup() {
        const initEcharts = () => {
            const myChart = echarts.init(document.getElementById('barSimple')!);
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: [11, 44, 34, 54, 34, 23, 45],
                        type: 'bar',
                    },
                    {
                        data: [56, 23, 11, 80, 70, 56, 21],
                        type: 'bar',
                    },
                    {
                        data: [45, 43, 23, 45, 56, 76, 87],
                        type: 'bar',
                    },
                ],
            };

            myChart.setOption(option);
        };

        onMounted(() => {
            initEcharts();
        });

        return {
            initEcharts,
        };
    },
});
</script>

<style scoped>
.map {
    width: 800px;
    height: 500px;
}
</style>
