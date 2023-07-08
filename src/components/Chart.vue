<template>
    <div class="rounded-lg bg-white shadow-2xl drop-shadow-xl p-4 relative w-[350px] md:w-[375px]">
        <div class="flex justify-center items-center mb-10">
            <div class="text-xl text-center">{{ chart.name }}</div>
            <div>
                <button  class="focus:outline-none absolute left-6 top-6">
                    <transition name="icon-fade" mode="out-in">
                        <svg v-if="dropdownOpen" @click.stop="closeDropdown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                        <svg v-else @click.stop="openDropdown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16">
                            </path>
                        </svg>
                    </transition>
                </button>
                <transition name="slide-fade">
                    <div v-if="dropdownOpen" ref="dropDownMenu"
                        class="absolute z-20 left-6 top-10 bg-[#f3f4f6] rounded-md shadow-xl p-4 mt-2">
                        <div class="flex items-center gap-2 text-lg mb-4">
                            <label for="chartType">Select chart Type:</label>
                            <select id="chartType" v-model="chartType">
                                <option value="line">Line</option>
                                <option value="bar">Bar</option>
                            </select>
                        </div>
                        <div class="text-lg" v-if="charts.length > 0">Choose Chart to merge</div>
                        <ul class="">
                            <li v-for="(mergeChart, index) in charts" :key="index" class="py-4">
                                <div class="flex items-center justify-between gap-8">
                                    <label :for="'chart-' + mergeChart.id" class="text-md whitespace-nowrap">
                                        {{ mergeChart.name }}
                                    </label>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded ml-auto"
                                        v-if="!isMerged(mergeChart.id)" @click="mergeSeries(chart.id, mergeChart.id)">
                                        Merge
                                    </button>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                                        v-if="isMerged(mergeChart.id)" @click="unmergeSeries(chart.id, mergeChart.id)">
                                        Unmerge
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
        </div>
        <highcharts :options="chartOptions"></highcharts>
        <div class="mt-4">
            <div v-for="(series, index) in series" :key="index" class="flex items-center gap-4 text-lg">
                <label :for="'color' + index">Change <span class="font-bold">{{ series.name }}</span> color:</label>
                <input :id="'color' + index" type="color" v-model="series.color" />
            </div>
        </div>
        <button class="absolute top-2 right-0 m-2 p-1 rounded-full text-white" @click="deleteChart(chart.id)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                width="30px" height="30px" fill-rule="nonzero">
                <g fill="#f80000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <g transform="scale(8.53333,8.53333)">
                        <path
                            d="M14.98438,2.48633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v0.5h-5.5c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-1.48633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.48633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805h-5.5v-0.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM6,9l1.79297,15.23438c0.118,1.007 0.97037,1.76563 1.98438,1.76563h10.44531c1.014,0 1.86538,-0.75862 1.98438,-1.76562l1.79297,-15.23437z">
                        </path>
                    </g>
                </g>
            </svg>
        </button>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
    props: {
        chart: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    name: 'ChartWidjet',
    setup() {
        const dropDownMenu = ref(null)
        const dropdownOpen = ref(false)

        const closeDropdown = () => {
            dropdownOpen.value = false
        }

        onClickOutside(dropDownMenu, (event) => closeDropdown())

        return { dropDownMenu, dropdownOpen, closeDropdown }
    },
    data() {
        return {
            selectedCharts: [],
        }
    },
    methods: {
        openDropdown() {
            this.dropdownOpen = true
        },
        deleteChart(id) {
            this.$store.dispatch('deleteChart', id)
        },
        updateChart(index, updatedChart) {
            this.$store.dispatch('updateChart', { index, chart: updatedChart });
        },
        mergeSeries(currentChartId, mergedChartId) {
            this.$store.dispatch('mergeSeries', { currentChartId, mergedChartId });
        },
        unmergeSeries(currentChartId, unMergedChartId) {
            this.$store.dispatch('unmergeSeries', { currentChartId, unMergedChartId });
        },
        isMerged(unMergedChartId) {
            const unMergedSeriesId = this.charts.find(chart => chart.id === unMergedChartId).series[0].id;

            const currentChartSeries = this.chart.series;

            return currentChartSeries.some(series => series.id === unMergedSeriesId);
        },
    },
    created() {
        if (!Array.isArray(this.selectedSensors)) {
            this.selectedSensors = [{ color: this.chart.color }];
        }
    },
    computed: {
        charts() {
            return this.$store.getters.getCharts.filter(chart => chart.id !== this.chart.id);
        },
        series: {
            get() {
                return this.chart.series;
            },
            set(value) {
                this.updateChart(this.index, { ...this.chart, series: [...value] });
            }
        },
        chartType: {
            get() {
                return this.chart.type;
            },
            set(value) {
                this.updateChart(this.index, { ...this.chart, type: value });
            }
        },
        chartOptions() {
            return {
                chart: {
                    type: this.chart.type
                },
                title: {
                    text: ''
                },
                xAxis: {
                    type: 'datetime',
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                series: this.series,
                colors: this.chart.series.map(series => series.color)
            }
        },
    },
}
</script>

<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
    transition: opacity .5s;
}

.icon-fade-enter,
.icon-fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
