<template>
  <table :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot />
  </table>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { replaceTemplate } from '@/utils/replace-template';
import { Table } from '@/models/components/table';

const props = defineProps({
  component: {
    type: Object as PropType<Table>,
    required: true
  },
  scope: {
    type: Object,
    default: () => ({})
  }
});

</script>

<style scoped>

</style>