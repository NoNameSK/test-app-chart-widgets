<template>
  <div class="h-screen flex flex-col">
    <div class="p-4 flex gap-10 justify-center">
      <div class="flex gap-12">
        <div class="flex items-center">
          <label for="startDate">Start Date:</label>
          <input type="date" id="startDate" v-model="startDate" @change="updateCharts" />
        </div>
        <div class="flex items-center">
          <label for="endDate">End Date:</label>
          <input type="date" id="endDate" v-model="endDate" @change="updateCharts" />
        </div>
        <div class="flex items-center justify-center ml-auto">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            :class="{ 'cursor-not-allowed': charts.length >= 4 }" :disabled="charts.length >= 4"
            @click="openCreateChartModal">Add Chart</button>
        </div>
      </div>
    </div>
    <div class="flex-1 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <Chart v-for="(chart, index) in charts" :key="index" :chart="chart" :index="index" />
    </div>
    <CreateChartModal v-if="isCreateChartModalOpen" :closeCreateChartModal="closeCreateChartModal" />
  </div>
</template>

<script>
import CreateChartModal from './components/modals/CreateChartModal.vue'
import Chart from './components/Chart.vue'

export default {
  components: {
    Chart,
    CreateChartModal,
  },
  data() {
    return {
      startDate: null,
      endDate: null,
      chartData: [],
      isCreateChartModalOpen: false
    }
  },
  computed: {
    charts() {
      return this.$store.getters.getFilteredCharts;
    },
  },
  mounted() {
    this.updateCharts()
  },
  methods: {
    openCreateChartModal() {
      this.isCreateChartModalOpen = true
    },
    closeCreateChartModal() {
      console.log(this.$store.state.charts)
      this.isCreateChartModalOpen = false
    },
    updateCharts() {
      if (this.startDate && this.endDate) {
        this.$store.dispatch('setDateRange', { start: new Date(this.startDate), end: new Date(this.endDate) });
      }
    },
    addChart(chart) {
      if (this.charts.length < 4) {
        this.$store.dispatch('addChart', chart);
      }
    },
  },
  watch: {
    startDate: {
      handler() {
      },
      immediate: true
    },
    endDate: {
      handler() {
      },
      immediate: true
    }
  }
}
</script>