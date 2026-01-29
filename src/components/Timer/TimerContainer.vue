<template>
  <div class="wrapper">
    <!-- <div class="circle">totalSeconds: {{ seconds }}</div> -->

    <TimerInputDisplay />
  </div>
</template>

<script setup lang="ts">
import TimerInputDisplay from './TimerInputDisplay.vue'
</script>

<style scoped>
.wrapper {
  display: grid;
  justify-content: center;
}

.circle {
  height: 367px;
  width: 367px;
  background-color: #272727af;
  border-radius: 50%;
  display: inline-block;
}
</style>
