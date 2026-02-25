<template>
  <div class="timer-actions">
    <button @click="start()">Start</button>
    <button @click="stop()">Stop</button>
  </div>
</template>

<script setup lang="ts">
import { useTimerContext } from '@/composables/useCountdown/useCountdown.types'

const { start, stop } = useTimerContext()
</script>
