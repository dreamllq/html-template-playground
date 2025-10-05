<template>
  <root :data='data' :config='config'>
    <wrapper />
  </root>
</template>

<script setup lang="ts">
import Root from './root.vue';
import Wrapper from './wrapper.vue';

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
</script>

<style scoped>

</style>