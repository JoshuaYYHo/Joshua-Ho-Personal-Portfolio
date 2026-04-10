<script setup lang="ts">
import { WHITE_TEXT } from '@/constants/theme';

defineProps({
    name: String
})

</script>

<template>
    <div class="pill">
        {{ name }}
    </div>

</template>

<style scoped>

.pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    padding: 1rem, 1.5rem;
    line-height: normal;
    font-size: 8px;
    font-weight: 700;
    height: 18px;
    width: 48px;
    background-color: rgba(245, 233, 218, 0.1);
    color: #F5E9DA;
    border: 1px solid rgba(245, 233, 218, 0.2);
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.pill:hover {
    background-color: rgba(245, 233, 218, 0.15);
    border-color: rgba(245, 233, 218, 0.3);
}
</style>