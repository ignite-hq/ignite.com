<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus'
})
</script>

<script lang="ts" setup>
import IgniteBgWave from '../atoms/IgniteBgWave.vue'
import IgniteHeading from '../atoms/IgniteHeading.vue'
import IgniteText from '../atoms/IgniteText.vue'

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

const chartData = datasets

const chartOptions = {
  colors: props.colors,
  dataLabels: {
    enabled: false
  },
  labels: labels,
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '85%'
      }
    }
  },
  stroke: {
    width: 0
  },
  tooltip: {
    y: {
      formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
        return `${value}%`
      }
    }
  }
}
</script>

<template>
  <div class="relative">
    <div class="relative mx-auto max-w-[580px]">
      <div
        class="absolute inset-0 m-auto h-[35vw] w-[35vw] overflow-hidden rounded-circle bg-primary md:h-[15rem] md:w-[15rem] md:scale-100"
      >
        <IgniteBgWave />
      </div>
      <div class="z-1 relative">
        <apexchart type="donut" :options="chartOptions" :series="chartData">
        </apexchart>
      </div>
    </div>
    <div class="mt-6 md:mt-9">
      <div class="-m-3 flex flex-wrap justify-center md:-m-6">
        <div
          v-for="(item, key) in dataSeries"
          :key="item.name"
          class="flex w-[50%] p-3 sm:w-auto md:p-6"
        >
          <div
            class="mt-1 mr-3 h-4 w-4 shrink-0 rounded-circle md:mt-2 md:mr-5"
            :style="{ backgroundColor: colors[key] }"
          ></div>
          <div>
            <IgniteHeading as="div" class="text-3 font-semibold md:text-4">{{
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

<style lang="postcss"></style>
