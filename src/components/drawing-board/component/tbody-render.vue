<template>
  <tbody :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import { Tbody } from '@/models/components/tbody';
import { PropType } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<Tbody>,
    required: true
  }
});
</script>

<style scoped>

</style>