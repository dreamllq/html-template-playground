<template>
  <td :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot>{{ component.innerHtml }}</slot>
  </td>
</template>

<script setup lang="ts">
import { Td } from '@/models/components/td';
import { PropType } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<Td>,
    required: true
  }
});
</script>

<style scoped>

</style>