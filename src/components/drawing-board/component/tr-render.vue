<template>
  <tr :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { Tr } from '@/models/components/tr';
import { PropType } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<Tr>,
    required: true
  }
});
</script>

<style scoped>

</style>