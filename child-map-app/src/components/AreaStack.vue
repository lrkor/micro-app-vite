<template>
    <div class="map" id="areaStack">line</div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
    name: 'AreaStack',
    setup() {
        const initEcharts = () => {
            const myChart = echarts.init(document.getElementById('areaStack')!);
            const option = {
                title: {
                    text: '堆叠区域图',
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
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                    },
                },
                grid: {
                    left: '0',
                    right: '0',
                    bottom: '0',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                    },
                ],
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [120, 132, 101, 134, 90, 230, 210],
                        smooth: true, // 变曲线
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [220, 182, 191, 234, 290, 330, 310],
                        smooth: true, // 变曲线
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [150, 232, 201, 154, 190, 330, 410],
                        smooth: true, // 变曲线
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [320, 332, 301, 334, 390, 330, 320],
                        smooth: true, // 变曲线
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'top',
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
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
