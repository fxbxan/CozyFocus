<template>
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <circle id="progress" cx="50" cy="50" r="6" path-length="100" />
  </svg>
</template>

<style scoped>
#progress {
  fill: none;
  stroke-width: 1;
  stroke: white;
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  /*used for hiding gap when stroke is 100 */
}
</style>
