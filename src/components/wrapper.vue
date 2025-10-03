<template>
  <playground />
</template>

<script setup lang="ts">
import Playground from './playground/index.vue';
import { useStore } from './store';

const { refreshFlag } = useStore()!;
</script>

<style scoped>

</style>