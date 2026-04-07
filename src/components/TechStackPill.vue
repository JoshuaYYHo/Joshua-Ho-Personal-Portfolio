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

:root {
    --border-color: WHITE_TEXT;
}

.pill {
    border-radius: 10px;
    padding: 6px 10px;
    display: inline-block;
    background: transparent;
    border: 2px solid #F5E9DA;
}
</style>