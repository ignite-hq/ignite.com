<template>
  <div class="relative">
    <div class="relative">
      <div
        class="absolute inset-0 m-auto h-[15rem] w-[15rem] overflow-hidden rounded-circle bg-primary md:scale-100"
      >
        <IgniteBgWave />
      </div>
      <div class="z-1 relative">
        <Doughnut :chart-options="chartOptions" :chart-data="chartData" />
      </div>
    </div>
    <div class="mt-9">
      <div class="-m-6 flex flex-wrap items-center justify-center">
        <div
          v-for="(item, key) in dataSeries"
          :key="item.name"
          class="flex p-6"
        >
          <div
            class="shrink-1 mt-2 mr-5 h-4 w-4 rounded-circle"
            :style="{ backgroundColor: colors[key] }"
          ></div>
          <div>
            <IgniteHeading as="div" class="text-4 font-semibold">{{
              item.name
            }}</IgniteHeading>
            <IgniteText as="div" class="mt-1 text-2 font-medium text-muted"
              >{{ item.y }}%</IgniteText
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus'
})
</script>

<script lang="ts" setup>
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Title,
  Tooltip
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

import IgniteBgWave from './IgniteBgWave.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteText from './IgniteText.vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const props = defineProps({
  colors: {
    type: Array,
    default: () => [
      'rgba(9, 78, 253, 1)',
      'rgba(9, 78, 253, 0.8)',
      'rgba(9, 78, 253, 0.6)',
      'rgba(9, 78, 253, 0.4)',
      'rgba(9, 78, 253, 0.2)',
      'rgba(9, 78, 253, 0.1)'
    ]
  },
  dataSeries: {
    type: Array,
    required: true
  }
})

const labels = props.dataSeries.map((item) => item.name)
const datasets = props.dataSeries.map((item) => item.y)

const chartData = {
  labels: labels,
  datasets: [
    {
      data: datasets,
      backgroundColor: props.colors,
      borderWidth: 0,
      hoverBorderWidth: 1
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 165,
  animation: {
    animateRotate: false
  },
  plugins: {
    legend: {
      display: false
    }
  }
}
</script>

<style lang="postcss"></style>
