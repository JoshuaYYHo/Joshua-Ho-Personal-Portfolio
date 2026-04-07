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
            {{ header }}
        </div>

        <div class="body-card">
            {{ description }}
        </div>

        <div class="tech-stack">
            <TechStackPill name="React"/>
        </div>
    </div>

</template>

<style scoped>

.main-card {
    width: 300px;
    height: 300px;
}


</style>
