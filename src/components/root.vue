<template>
  <slot />
</template>

<script setup lang="ts">
import { useProvideStore } from './store';

useProvideStore();
</script>

<style scoped>

</style>