<template>
  <th :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot>{{ component.innerHtml }}</slot>
  </th>
</template>

<script setup lang="ts">
import { Th } from '@/models/components/th';
import { PropType } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<Th>,
    required: true
  }
});
</script>

<style scoped>

</style>