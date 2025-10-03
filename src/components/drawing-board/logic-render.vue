<template>
  <div>
    logic
  </div>
</template>

<script setup lang="ts">
import { Logic } from '@/models/logic';
import { PropType } from 'vue';

const props = defineProps({
  logic: {
    type: Object as PropType<Logic>,
    required: true
  }
});

</script>

<style scoped>

</style>