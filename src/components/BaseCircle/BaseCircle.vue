<template>
  <svg viewBox="0 0 10 10" class="base-circle-svg">
    <circle
      :cx="options.cx"
      :cy="options.cy"
      :r="options.r"
      :fill="options.fill"
      :stroke="options.stroke"
      :stroke-width="options.strokeWidth"
      :stroke-dasharray="options.strokeDashArray"
    />
  </svg>
</template>

<script setup lang="ts">
import type { ICircleOptions } from './BaseCircle.types'

defineProps<{
  options: ICircleOptions
}>()
</script>

<style scoped>
.base-circle-svg {
  width: 100%;
  height: 100%;
}
</style>
