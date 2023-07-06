<template>
    <div class="rounded-lg bg-white shadow-md p-4 relative w-[400px] h-[700px]">
        <div class="flex items-center mb-2">
            <label for="chartType">Chart Type:</label>
            <select id="chartType" v-model="chartType">
                <option value="line">Line</option>
                <option value="bar">Bar</option>
            </select>
        </div>
        <div v-for="(mergeChart, index) in charts" :key="index">
            <div class="flex items-center">
                <label :for="'chart-' + mergeChart.id">{{ mergeChart.name }}</label>
                <button v-if="!isMerged(mergeChart.id)" @click="mergeSeries(chart.id, mergeChart.id)">Merge</button>
                <button v-if="isMerged(mergeChart.id)" @click="unmergeSeries(chart.id, mergeChart.id)">Unmerge</button>
            </div>
        </div>
        <highcharts :options="chartOptions"></highcharts>
        <div v-for="(series, index) in series" :key="index" class="flex items-center">
            <label :for="'color' + index">Color:</label>
            <input :id="'color' + index" type="color" v-model="series.color" />
        </div>
        <button class="absolute top-0 right-0 m-2 p-1 rounded-full bg-red-500 text-white"
            @click="deleteChart(chart.id)">x</button>
    </div>
</template>
  
<script>
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
    data() {
        return {
            selectedCharts: [],
        }
    },
    methods: {
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
            const unMergedSeriesName = this.charts.find(chart => chart.id === unMergedChartId).series[0].name;

            const currentChartSeries = this.chart.series;

            return currentChartSeries.some(series => series.name === unMergedSeriesName);
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
        formattedColor() {
            return (color) => {
                if (color && !color.startsWith('#')) {
                    return `#${color}`;
                }
                return color;
            };
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
