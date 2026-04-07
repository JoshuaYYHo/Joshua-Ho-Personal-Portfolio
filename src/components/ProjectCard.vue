<script setup lang="ts">

import TechStackPill from './TechStackPill.vue';

// Props
defineProps({
    header: String,
    description: String,
    techStack: []

})

</script>

<template>
    <div class="main-card">
        <div class="header-card">
            <h2>  {{ header }} </h2>
        </div>

        <div class="body-card">
            <p> {{ description }} </p>
        </div>

        <div class="tech-stack">
            <TechStackPill name="React"/>
        </div>
    </div>

</template>

<style scoped>

.main-card {
    width: 280px;
    height: 160px;
    padding: 1rem 1.5rem;
    border: 2px solid #F5E9DA;
    border-radius: 5%;
}

</style>
