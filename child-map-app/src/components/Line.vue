<template>
    <div class="map" id="line">line</div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
    name: 'Line',
    setup() {
        const initEcharts = () => {
            const myChart = echarts.init(document.getElementById('line'));
            const option = {
                title: {
                    text: '折线图',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    },
                    triggerOn: 'click',
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        type: 'line',
                        data: [150, 230, 224, 218, 135, 147, 260],
                        areaStyle: {
                            // 下面的颜色
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: '#D6E9F9'},
                                    {offset: 1, color: '#F4F9FD'},
                                ]),
                            },
                        },
                        label: {
                            show: true,
                            position: 'top',
                        },
                        itemStyle: {
                            normal: {
                                color: '#0091E8', //折点颜色
                                lineStyle: {
                                    color: '#3190E1', //折线颜色
                                },
                            },
                        },
                        emphasis: {
                            focus: 'series',
                        },
                        smooth: true, // 变曲线
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
