<template>
  <div class="timer-actions">
    <button @click="$emit('onStart')">Start</button>
    <button @click="$emit('onStop')">Stop</button>
  </div>
</template>
