<template>
  <div class="timer-provider">
    <TimerVisuals />
  </div>
</template>

<script setup lang="ts">
import TimerVisuals from './TimerVisuals.vue'
import { useCountdown } from '@/composables/useCountdown/useCountdown'
import { TimerContextKey } from '@/composables/useCountdown/useCountdown.types'
import { provide } from 'vue'

const countdown = useCountdown()

provide(TimerContextKey, countdown)
</script>

<style lang="scss" scoped>
.timer-provider {
  display: flex;
  justify-content: center;
}
</style>
