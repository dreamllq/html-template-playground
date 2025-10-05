<template>
  <span :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot>
      {{ replaceTemplate(component.innerHtml, scope) }}
    </slot>
  </span>
</template>

<script setup lang="ts">
import { Span } from '@/models/components/span';
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { replaceTemplate } from '@/utils/replace-template';

const props = defineProps({
  component: {
    type: Object as PropType<Span>,
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