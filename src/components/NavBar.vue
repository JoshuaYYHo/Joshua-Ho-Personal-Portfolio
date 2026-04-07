<script setup lang="ts">

import { DARK_MAIN, WHITE_TEXT } from '@/constants/theme';

const navItems = [
  { name: "Home" },
  { name: "Work" },
  { name: "Contact" }
];

</script>

<template>
  <nav class="navbar" :style="{ backgroundColor: DARK_MAIN }">
    <ul class="nav-links">
      <li v-for="item in navItems" :key="item.name">
        <a :href="`#${item.name}`" :style="{ color: WHITE_TEXT }">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

.navbar {
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

.nav-links a {
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: none;
}

</style>
