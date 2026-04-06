<script setup lang="ts">

import { DARK_MAIN } from '@/constants/theme';

const navItems = [
  { name: "Home" },
  { name: "About" },
  { name: "Contact" }
];

</script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li v-for="item in navItems" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </nav>

</template>

<style scoped>

.navbar {
  background-color: DARK_MAIN;
  display: flex;
  justify-content: center;
}

.nav-links {
  list-style-type: none;
  margin: 1rem 1.5rem;
  padding: 1rem 1.5rem;
  display: flex;

}

.nav-links li {
  padding: 1.5rem 1rem;
  margin: 0;
}

</style>
