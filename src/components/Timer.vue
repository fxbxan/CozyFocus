<template>
  <div class="wrapper">
    <div class="circle">{{ formattedTime }}</div>
    <input type="number" v-model.number="inputMinutes" />
    <input type="number" v-model.number="inputSeconds" />
    <button class="start" @click="handleStart">Start</button>
    <!-- <button class="stop" @click="stop">Stop</button> -->
    <button class="reset" @click="reset">Reset</button>
    <!-- <p>{{ form }}</p> -->
  </div>
</template>
<script setup lang="ts">
import { useTimer } from './composables/useTimer/useTimer'
import { ref } from 'vue'

const inputMinutes = ref(0)
const inputSeconds = ref(0)

const { start, reset, formattedTime, set } = useTimer()

const handleStart = () => {
  set(inputMinutes.value, inputSeconds.value)
  start()
}
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
