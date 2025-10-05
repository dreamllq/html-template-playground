<template>
  <td :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot>
      {{ replaceTemplate(component.innerHtml, scope) }}
    </slot>
  </td>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { replaceTemplate } from '@/utils/replace-template';
import { Td } from '@/models/components/td';

const props = defineProps({
  component: {
    type: Object as PropType<Td>,
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