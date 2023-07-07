<template>
  <div class="h-screen flex flex-col gap-5">
    <div class="p-4 flex md:gap-10 justify-center shadow-xl">
      <div class="flex flex-col md:flex-row gap-6 md:gap-12 justify-between text-sm lg:text-md">
        <div class="flex flex-col md:flex-row gap-6 md:gap-12">
          <div class="flex items-center gap-3 md:gap-4">
            <label class="w-[78px]" for="startDate">Start Date:</label>
            <input type="date" id="startDate" v-model="startDate" @change="updateCharts" />
          </div>
          <div class="flex items-center gap-3 md:gap-4">
            <label class="w-[78px]" for="endDate">End Date:</label>
            <input type="date" id="endDate" v-model="endDate" @change="updateCharts" />
          </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="resetDate()">Reset
          date</button>
        <div class="flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            :class="{ 'cursor-not-allowed': charts.length >= 4 }" :disabled="charts.length >= 4"
            @click="openCreateChartModal">Add Chart</button>
        </div>
      </div>
    </div>
    <div>
      <transition-group name="chart" tag="div" mode="out-in"
        :class="[`flex flex-col flex-wrap md:flex-row gap-6 md:gap-12 justify-center`]"
        class="p-2 md:p-4 place-items-center lg:place-items-start md:gap-10">
        <div v-for="(chart, index) in charts" :key="chart.id">
          <Chart :chart="chart" :index="index" />
        </div>
      </transition-group>
    </div>
    <transition name="modal" @enter="onModalEnter" @leave="onModalLeave">
      <CreateChartModal v-if="isCreateChartModalOpen" :closeCreateChartModal="closeCreateChartModal" />
    </transition>
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
    resetDate() {
      this.startDate = null;
      this.endDate = null;
      this.$store.dispatch('setDateRange', { start: null, end: null });

    },
    openCreateChartModal() {
      this.isCreateChartModalOpen = true
    },
    closeCreateChartModal() {
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
}
</script>

<style>
.modal-enter-active {
  animation: modal-enter 0.5s ease-in-out;
}

.modal-leave-active {
  animation: modal-leave 0.5s ease-in-out;
}

@keyframes modal-enter {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes modal-leave {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

.chart-enter-active,
.chart-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.chart-enter {
  opacity: 0;
  transform: scale(0.8);
}

.chart-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>