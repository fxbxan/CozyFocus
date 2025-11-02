<script setup lang="ts"></script>

<template>
  <div class="dashboard-header">
    <div class="greeting">Good morning, John Doe</div>
    <div class="datetime">
      <div class="time">16:50</div>
      <div class="date">Monday, 27 July</div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  position: relative;
  font-family: 'Inter';
  padding-top: 20px;
}

.greeting {
  font-size: 30px;
  text-align: center;
  grid-column: 2;
  justify-self: center;
}

.datetime {
  grid-column: 3;
  justify-self: end;
}

.time {
  font-size: 30px;
}

.date {
  font-size: 14px;
  color: #ccc;
}
</style>
