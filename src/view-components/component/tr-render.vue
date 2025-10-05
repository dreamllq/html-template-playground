<template>
  <tr :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { replaceTemplate } from '@/utils/replace-template';
import { Tr } from '@/models/components/tr';

const props = defineProps({
  component: {
    type: Object as PropType<Tr>,
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