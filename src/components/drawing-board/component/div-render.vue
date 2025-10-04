<template>
  <div :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot>
      {{ component.innerHtml }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import { Div } from '@/models/components/div';
import { PropType } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<Div>,
    required: true
  }
});
</script>

<style scoped>

</style>