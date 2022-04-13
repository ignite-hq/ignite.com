<template>
  <div>
    <div
      class="absolute overflow-hidden rounded-circle bg-primary scale-[0.65] m:scale-100"
      :style="{
        left: `${state.positionLogoX}px`,
        top: `${state.positionLogoY}px`,
        width: `${state.logoSize}px`,
        height: `${state.logoSize}px`
      }"
    >
      <IgniteBgWave />
    </div>
    <chart
      :options="chartOptions"
      :callback="onRender"
      :update-args="[onRender]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus'
})
</script>

<script lang="ts" setup>
import { Chart } from 'highcharts-vue'
import { reactive } from 'vue'

import IgniteBgWave from './IgniteBgWave.vue'

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

const state = reactive({
  positionLogoX: 0,
  positionLogoY: 0,
  logoSize: 0
})

const onRender = (chart) => {
  state.logoSize = chart.plotHeight * 0.575
  state.positionLogoX =
    chart.plotLeft + chart.series[0].center[0] - state.logoSize / 2
  state.positionLogoY =
    chart.plotTop + chart.series[0].center[1] - state.logoSize / 2
}

const chartOptions = {
  credits: {
    enabled: false
  },
  chart: {
    type: 'pie',
    height: '545px',
    backgroundColor: 'transparent',
    events: {
      redraw: function () {
        onRender(this)
      }
    }
  },
  title: false,
  tooltip: {
    headerFormat: '',
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b>: {point.y}%'
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: false,
        shape: 'callout',
        formatter: function () {
          return `
            <span style="padding:8px;font-size:13px;font-weight:500;">${
              Math.round(this.percentage * 100) / 100
            }%</span>
            <span style="font-size:16px;font-weight:600;">${this.key}</span>
            <br/>
            <text dy="4" style="color:rgba(0, 0, 0, 0.667);font-size:13px;font-weight:400;">${
              this.point.description
            }</text>
          `
        }
      }
    },
    pie: {
      allowPointSelect: false,
      showInLegend: true,
      point: {
        events: {
          legendItemClick: () => false
        }
      }
    }
  },
  legend: {
    margin: 34,
    itemDistance: 48,
    itemMarginTop: 16,
    labelFormatter: function () {
      return `
        <span style="font-size:16px;font-weight:600;">${this.name}</span><br/>
        <span dy="4" style="color:#626262;font-size:13px;font-weight:500;">${
          Math.round(this.percentage * 100) / 100
        }%<span>
      `
    }
  },
  colors: props.colors,
  series: [
    {
      minPointSize: 10,
      innerSize: '85%',
      zMin: 0,
      name: 'sections',
      data: props.dataSeries
    }
  ]
}
</script>

<style lang="postcss">
svg.highcharts-root {
  font-family: 'Inter', sans-serif !important;
}
</style>
