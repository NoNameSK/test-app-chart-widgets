<template>
    <div class="rounded-lg bg-white shadow-md p-4 relative">
        <div class="flex items-center mb-2">
            <label for="chartType">Chart Type:</label>
            <select id="chartType" v-model="chartType">
                <option value="line">Line</option>
                <option value="bar">Bar</option>
            </select>
        </div>
        <!-- <div class="flex items-center">
            <label for="sensors">Sensors:</label>
            <input type="checkbox" id="sensors" value="temperature" v-model="selectedSensors" @change="updateChart">
            <label for="temperature">Temperature</label>
            <input type="checkbox" id="sensors" value="humidity" v-model="selectedSensors" @change="updateChart">
            <label for="humidity">Humidity</label>
            <input type="checkbox" id="sensors" value="light" v-model="selectedSensors" @change="updateChart">
            <label for="light">Light</label>
        </div>
        <div class="flex items-center">
            <label for="sensors">Sensors:</label>
            <select id="sensors" v-model="selectedSensors" multiple @change="updateChart">
                <option value="temperature">Temperature</option>
                <option value="humidity">Humidity</option>
                <option value="light">Light</option>
            </select>
        </div> -->
        <highcharts :options="chartOptions"></highcharts>
        <div v-for="(series, index) in selectedSensors" :key="index" class="flex items-center">
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
    methods: {
        deleteChart(id) {
            this.$store.dispatch('deleteChart', id)
        },
        updateChart(index, updatedChart) {
            this.$store.dispatch('updateChart', { index, chart: updatedChart });
        },
    },
    created() {
        if (!Array.isArray(this.selectedSensors)) {
            this.selectedSensors = [{ color: this.chart.color }];
        }
    },
    computed: {
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
    }
}
</script>
