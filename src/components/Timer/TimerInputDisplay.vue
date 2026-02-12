<template>
  <div class="timer-container">
    <p>Status: {{ status }}</p>
    <p>Remaining: {{ remainingSeconds }}s</p>

    <BaseCircle v-bind="circleOptions" />

    <input type="number" :disabled="isInputDisabled" v-model.number="minutes" />
    <input type="number" :disabled="isInputDisabled" v-model.number="seconds" />

    <TimerActions @onStart="startCountdown" @onStop="stop" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCountdown } from '@/composables/useCountdown/useCountdown'
import TimerActions from './TimerActions.vue'
import { ETimerStatus } from '@/composables/useCountdown/useCountdown.types'
import BaseCircle from '../BaseCircle/BaseCircle.vue'
import type { ICircleOptions } from '../BaseCircle/BaseCircle.types'
import { getCircumference } from '@/utils/geometry'
import { timeToSeconds } from '@/utils/time'

const { start, stop, status, minutes, seconds, remainingSeconds } = useCountdown()

const radius = 4

const totalDuration = ref(0)

const startCountdown = () => {
  totalDuration.value = timeToSeconds(minutes.value, seconds.value)

  if (totalDuration.value >= 0) start()
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
      strokeDashArray: `${getCircumference(radius)} ${getCircumference(radius)}`,
    }
  }

  if (totalDuration.value === 0) {
    return { ...base, strokeDashArray: `0 ${getCircumference(radius)}` }
  }

  const percentage = remainingSeconds.value / totalDuration.value
  const drawLength = getCircumference(radius) * percentage

  return {
    ...base,
    strokeDashArray: `${drawLength} ${getCircumference(radius)}`,
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
