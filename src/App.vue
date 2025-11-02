<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <span>CozyFocus</span>
    <nav>
      <RouterLink to="/">Timer</RouterLink>
      <RouterLink to="/about">Dashboard</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  height: 77px;
  display: grid;
  grid-template-columns: 12rem auto auto;
  background-color: var(--black);
  max-width: 100%;
  align-items: center;
  font-family: 'McLaren Regular';
}

header span {
  font-size: 24px;
  font-weight: 700;
  padding-left: 22px;
  width: 145px;
  height: 35px;
}
nav {
  display: flex;
  flex-direction: row;
}
nav a {
  padding: 10px;
  font-size: 16px;
  font-family: 'Inter';
}
</style>
