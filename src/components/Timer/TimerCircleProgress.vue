<template>
  <BaseCircle v-bind="circleOptions" class="timer-circle-progress" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ICircleOptions } from '../BaseCircle/BaseCircle.types'
import { getCircumference } from '@/utils/geometry'
import BaseCircle from '../BaseCircle/BaseCircle.vue'
import { useTimerContext } from '@/composables/useCountdown/useCountdown.types'

const { remainingSeconds, totalDuration } = useTimerContext()

const radius = ref(4.5)

const circumreference = getCircumference(radius.value)

const circleOptions = computed<ICircleOptions>(() => {
  const percentage = remainingSeconds.value / totalDuration.value
  const drawLength = circumreference * percentage

  return {
    r: radius.value,
    cx: '50%',
    cy: '50%',
    fill: 'white',
    stroke: 'red',
    strokeWidth: 0.2,
    transition: 'stroke-dasharray 0.3s ease-in-out',
    strokeDashArray: `${drawLength} ${circumreference}`,
  }
})
</script>

<style scoped lang="scss">
.timer-circle-progress {
  transform: rotate(90deg) scaleX(-1);
}
</style>
