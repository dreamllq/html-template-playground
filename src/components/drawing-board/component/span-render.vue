<template>
  <span :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot>
      {{ component.innerHtml }}
    </slot>
  </span>
</template>

<script setup lang="ts">
import { Span } from '@/models/components/span';
import { PropType } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<Span>,
    required: true
  }
});
</script>

<style scoped>

</style>