<template>
  <th :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot>
      {{ replaceTemplate(component.innerHtml, scope) }}
    </slot>
  </th>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { replaceTemplate } from '@/utils/replace-template';
import { Th } from '@/models/components/th';

const props = defineProps({
  component: {
    type: Object as PropType<Th>,
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