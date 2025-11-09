<template>
  <div class="timer-actions">
    <button @click="$emit('onStart')">Start</button>
    <button @click="$emit('onResume')">Resume</button>
    <button @click="$emit('onStop')">Stop</button>
    <button @click="$emit('onReset')">Reset</button>
  </div>
</template>
