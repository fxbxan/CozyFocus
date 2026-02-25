<template>
  <div class="timer-visuals">
    <TimerCircleProgress class="progress-background" />
    <div class="timer-content">
      <TimerInputs />
      <TimerActions />
    </div>
  </div>
</template>

<script setup lang="ts">
import TimerActions from './TimerActions.vue'
import TimerCircleProgress from './TimerCircleProgress.vue'
import TimerInputs from './TimerInputs.vue'
</script>

<style lang="scss" scoped>
.timer-visuals {
  position: relative;
  width: 400px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-background {
  position: absolute;
  width: 100%;
  height: 100%;
}

.timer-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
