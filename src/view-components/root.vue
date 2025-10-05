<template>
  <slot />
</template>

<script setup lang="ts">
import { useProvideViewStore } from './store';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  config: {
    type: Array,
    default: () => ([])
  }
});

useProvideViewStore(props);

</script>

<style scoped>

</style>