<template>
  <thead :id='component.id' :style='component.style' :class='component.classes.join(" ")'>
    <slot />
  </thead>
</template>

<script setup lang="ts">
import { Thead } from '@/models/components/thead';
import { PropType } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<Thead>,
    required: true
  }
});
</script>

<style scoped>

</style>