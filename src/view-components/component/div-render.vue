<template>
  <div :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot>
      {{ replaceTemplate(component.innerHtml, scope) }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import { Div } from '@/models/components/div';
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { replaceTemplate } from '@/utils/replace-template';

const props = defineProps({
  component: {
    type: Object as PropType<Div>,
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