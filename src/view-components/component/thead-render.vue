<template>
  <thead :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot />
  </thead>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { replaceTemplate } from '@/utils/replace-template';
import { Thead } from '@/models/components/thead';

const props = defineProps({
  component: {
    type: Object as PropType<Thead>,
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