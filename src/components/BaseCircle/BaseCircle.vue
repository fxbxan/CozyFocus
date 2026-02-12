<template>
  <svg viewBox="0 0 10 10" class="base-circle-svg">
    <circle :cx="cx" :cy="cy" :r="r" :style="circleStyle" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ICircleOptions } from './BaseCircle.types'

const props = defineProps<ICircleOptions>()

const circleStyle = computed(() => ({
  fill: props.fill,
  stroke: props.stroke,
  strokeWidth: props.strokeWidth,
  strokeDasharray: props.strokeDashArray,
  strokeDashoffset: props.strokeDashOffset,
}))
</script>

<style scoped>
.base-circle-svg {
  width: 100%;
  height: 100%;
}
</style>
