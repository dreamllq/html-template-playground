<template>
  <div style='padding: 10px;'>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Base } from '@/models/logics/base';
import { PropType } from 'vue';

const props = defineProps({
  logic: {
    type: Object as PropType<Base>,
    required: true
  }
});
</script>

<style scoped>

</style>