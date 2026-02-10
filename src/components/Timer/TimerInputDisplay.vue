<template>
  <div class="timer-container">
    <p>Status: {{ status }}</p>
    <p>Remaining: {{ remainingSeconds }}s</p>

    <BaseCircle
      :options="circleOptions"
      style="transform: rotate(-90deg); transform-origin: center;"
    />

    <input type="number" :disabled="isInputDisabled" v-model.number="minutes" placeholder="MM" />
    <input type="number" :disabled="isInputDisabled" v-model.number="seconds" placeholder="SS" />

    <TimerActions @onStart="handleStart" @onStop="stop" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCountdown } from '@/composables/useCountdown/useCountdown'
import TimerActions from './TimerActions.vue'
import { ETimerStatus } from '@/composables/useCountdown/useCountdown.types'
import BaseCircle from '../BaseCircle/BaseCircle.vue'
import type { ICircleOptions } from '../BaseCircle/BaseCircle.types'

const { start, stop, status, minutes, seconds, remainingSeconds } = useCountdown()


const radius = 4
const circumference = 2 * Math.PI * radius

const totalDuration = ref(0)

const handleStart = () => {
  totalDuration.value = (minutes.value * 60) + seconds.value

  if (totalDuration.value > 0) {
    start()
  }
}

const circleOptions = computed<ICircleOptions>(() => {
  const base = {
    r: radius,
    cx: '50%',
    cy: '50%',
    fill: 'white',
    stroke: 'red',
    strokeWidth: 0.2,
  }

  if (status.value === ETimerStatus.IDLE) {
    return {
      ...base,
      strokeDashArray: `${circumference} ${circumference}`
    }
  }


  if (totalDuration.value === 0) {
    return { ...base, strokeDashArray: `0 ${circumference}` }
  }

  const percentage = remainingSeconds.value / totalDuration.value
  const drawLength = circumference * percentage

  return {
    ...base,
    strokeDashArray: `${drawLength} ${circumference}`
  }
})

const isInputDisabled = computed(() => status.value === ETimerStatus.RUNNING)
</script>

<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
