<template>
  <table
    :id='component.id'
    :style='component.style'
    :class='component.classes.join(" ")'
    style='border-collapse: collapse;'>
    <slot />
  </table>
</template>

<script setup lang="ts">
import { Table } from '@/models/components/table';
import { PropType } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<Table>,
    required: true
  }
});
</script>

<style scoped>

</style>