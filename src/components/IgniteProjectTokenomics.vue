<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div class="ignite-title font-title text-center text-5 m:text-7">
      Tokenomics
    </div>
    <div class="ignite-text mt-6 text-center text-3 text-muted">
      Planned token allocation for 200,000 tokens minted at Genesis
    </div>

    <div class="relative mt-7 m:mt-9">
      <chart
        :options="chartOptions"
        :callback="onRender"
        :updateArgs="[onRender]"
      />
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
import { reactive } from 'vue'
import { Chart } from 'highcharts-vue'
import IgniteBgWave from './IgniteBgWave.vue'

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
  colors: [
    'rgba(9, 78, 253, 1)',
    'rgba(9, 78, 253, 0.8)',
    'rgba(9, 78, 253, 0.6)',
    'rgba(9, 78, 253, 0.4)',
    'rgba(9, 78, 253, 0.2)',
    'rgba(9, 78, 253, 0.1)'
  ],
  series: [
    {
      minPointSize: 10,
      innerSize: '85%',
      zMin: 0,
      name: 'countries',
      data: [
        {
          name: 'Marketing',
          y: 5
        },
        {
          name: 'Fundraiser',
          y: 10
        },
        {
          name: 'Airdrop',
          y: 25,
          description: 'Note or description lorem ipsum dolor sit amet.',
          dataLabels: {
            enabled: true
          }
        },
        {
          name: 'Community Pool',
          y: 35
        },
        {
          name: 'Public Sale',
          y: 15
        },
        {
          name: 'Core Team',
          y: 10
        }
      ]
    }
  ]
}
</script>

<script setup lang="ts"></script>

<style lang="postcss">
svg.highcharts-root {
  font-family: 'Inter', sans-serif !important;
}
</style>
