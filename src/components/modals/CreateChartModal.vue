<template>
    <div :class="{ 'hidden': isCreateChartModalOpen }"
        class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center">
        <div class="relative w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Static modal
                    </h3>
                    <button type="button" @click="closeCreateChartModal"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="staticModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-6 space-y-6">
                    <input placeholder="Name of chart" v-model="chart.name"
                        class="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-0">
                    <select v-model="chart.type"
                        class="w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-0">
                        <option disabled value="">Please select a chart type</option>
                        <option value="line">Line</option>
                        <option value="bar">Bar</option>
                    </select>
                    <input placeholder="Name of sensor" type="text" v-model="sensorName"
                        class="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-0">
                    <input type="color" v-model="chart.series[0].color"
                        class="w-10 h-10 p-1 text-base text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-0">
                </div>
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="staticModal" type="button" @click="addChartToDashboard()"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                        accept</button>
                    <button data-modal-hide="staticModal" type="button" @click="resetForm()"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex'
import { randomDate, randomData } from '@/store/index.js'

export default {
    name: 'CreateChartModal',
    props: [
        'isCreateChartModalOpen',
        'closeCreateChartModal'
    ],
    data() {
        return {
            chart: {
                id: 0,
                name: '',
                type: '',
                series: [
                    {
                        color: '#000000',
                        name: '',
                        data: [...Array.from({ length: 30 }, () => ({ y: randomData(), x: randomDate() }))]
                    }
                ],
            },
            sensorName: ''
        };
    },
    methods: {
        ...mapActions(["formattedColor"]),
        addChartToDashboard() {
            this.chart.id = uuidv4();
            this.chart.series[0].name = this.sensorName;

            console.log(this.chart)

            this.$store.dispatch('addChart', this.chart);

            this.resetForm();
        },
        resetForm() {
            this.chart = {
                name: '',
                type: '',
                series: [{
                    color: '#000000',
                    name: '',
                    data: [...Array.from({ length: 30 }, () => ({ y: randomData(), x: randomDate() }))]
                }],
            };

            this.closeCreateChartModal();
        }
    }
}
</script>