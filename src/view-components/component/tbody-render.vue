<template>
  <tbody :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { replaceTemplate } from '@/utils/replace-template';
import { Tbody } from '@/models/components/tbody';

const props = defineProps({
  component: {
    type: Object as PropType<Tbody>,
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