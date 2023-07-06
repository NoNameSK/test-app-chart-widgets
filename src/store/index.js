import Vuex from 'vuex'

export function randomDate(start = new Date(2020, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function randomData() {
    return Math.round(Math.random() * 100);
}

export default new Vuex.Store({
    state: {
        dateRange: {
            start: null,
            end: null,
        },
        charts: [
            {
                id: 1,
                name: "Temperature chart",
                type: 'line',
                series: [{
                    color: '#ff0000',
                    data: [
                        ...Array.from({ length: 30 }, () => ({ y: randomData(), x: randomDate() }))
                    ],
                    name: 'temperature'
                }],
            },
            {
                id: 2,
                name: "Humidity chart",
                type: 'bar',
                series: [{
                    color: '#ff00ff',
                    data: [
                        ...Array.from({ length: 30 }, () => ({ y: randomData(), x: randomDate() }))
                    ],
                    name: 'humidity'
                }],
            }
        ]
    },
    mutations: {
        addChart(state, chart) {
            if (state.charts.length < 4) {
                state.charts.push(chart)
            }
        },
        deleteChart(state, id) {
            state.charts = state.charts.filter((chart) => chart.id !== id);
        },
        updateChart(state, { index, chart }) {
            state.charts[index] = chart;
        },
        formattedColor() {
            return (color) => {
                if (color && !color.startsWith('#')) {
                    return `#${color}`;
                }
                return color;
            };
        },
        setDateRange(state, { start, end }) {
            state.dateRange.start = start;
            state.dateRange.end = end;
        },
        mergeSeries(state, { currentChartId, mergedChartId }) {
            const mergedChartSeries = state.charts.find(chart => chart.id === mergedChartId).series;

            state.charts.find(chart => chart.id === currentChartId).series.push(...mergedChartSeries);
        },
        unmergeSeries(state, { currentChartId, unMergedChartId }) {
            const unMergedSeries = state.charts.find(chart => chart.id === unMergedChartId).series;
            const currentChartSeries = state.charts.find(chart => chart.id === currentChartId).series;

            state.charts.find(chart => chart.id === currentChartId).series = currentChartSeries.filter(series => !unMergedSeries.includes(series));
        }
    },
    actions: {
        addChart({ commit }, chart) {
            commit('addChart', chart)
        },
        deleteChart({ commit }, index) {
            commit('deleteChart', index)
        },
        updateChart({ commit }, { index, chart }) {
            commit('updateChart', { index, chart });
        },
        formattedColor({ commit }) {
            commit('formattedColor');
        },
        setDateRange({ commit }, dateRange) {
            commit('setDateRange', dateRange);
        },
        mergeSeries({ commit }, { currentChartId, mergedChartId }) {
            commit('mergeSeries', { currentChartId, mergedChartId });
        },
        unmergeSeries({ commit }, { currentChartId, unMergedChartId }) {
            commit('unmergeSeries', { currentChartId, unMergedChartId });
        },
    },
    getters: {
        getCharts(state) {
            return state.charts;
        },
        getFilteredCharts(state) {
            if (!state.dateRange.start || !state.dateRange.end) {
                return state.charts;
            }

            const startTimestamp = state.dateRange.start.getTime();
            const endTimestamp = state.dateRange.end.getTime();

            return state.charts.map(chart => ({
                ...chart,
                series: chart.series.map(serie => ({
                    ...serie,
                    data: serie.data.filter(d => d.x.getTime() >= startTimestamp && d.x.getTime() <= endTimestamp)
                }))
            }));
        },
    }
})