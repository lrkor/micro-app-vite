<template>
    <div class="map" id="WaterLevel">line</div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
    name: 'WaterLevel',
    setup() {
        const data1 = [1.2, 1.3, 1.4, 1.5, 1.2, 1.3, 1.1];
        const data2 = [1.3, 1.4, 1.5, 1.6, 1.3, 1.4, 1.2];
        const data3 = [2.5, 2.8, 2.7, 2.8, 3.2, 2.8, 2.9];

        const initEcharts = () => {
            const myChart = echarts.init(document.getElementById('WaterLevel')!);
            const option = {
                title: {
                    text: '水位图',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    },
                },
                grid: {
                    left: '8%',
                    right: '8%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    splitLine: {show: true},
                    data: ['1号', '2号', '3号', '4号', '5号', '6号', '7号'],
                },
                yAxis: {
                    type: 'value',
                    splitLine: {show: true},
                    axisLabel: {
                        interval: 1,
                    },
                    max: 7,
                    min: 1,
                    name: '水位m',
                    nameLocation: 'center',
                },
                series: [
                    {
                        type: 'line',
                        data: data1,
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
                            formatter: '{@score}米',
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

                    {
                        type: 'line',
                        data: data2,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: ({dataIndex}: any) => (data2.length === dataIndex + 1 ? '警戒水位' : ''),
                            color: '#FDBE76',
                        },
                        itemStyle: {
                            normal: {
                                color: '#FDBE76', //折点颜色
                                lineStyle: {
                                    color: '#FDBE76', //折线颜色
                                    type: 'dotted',
                                },
                            },
                        },
                        emphasis: {
                            focus: 'series',
                        },
                        smooth: true, // 变曲线
                    },
                    {
                        type: 'line',
                        data: data3,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: ({dataIndex}: any) => (data2.length === dataIndex + 1 ? '保证水位' : ''),
                            color: '#ff0000',
                        },
                        itemStyle: {
                            normal: {
                                color: '#ff0000', //折点颜色
                                lineStyle: {
                                    color: '#ff0000', //折线颜色
                                    type: 'dotted',
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
