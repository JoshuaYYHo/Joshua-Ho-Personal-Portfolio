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
    border-radius: 10px;
    padding: 6px 10px;
    display: inline-block;
    background: transparent;
    color: var(--pill-color);
    border: 2px solid var(--pill-color);

}
</style>