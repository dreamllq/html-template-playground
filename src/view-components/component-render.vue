<template>
  <component :is='render' :component='component' :scope='scope'>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Component } from '@/models/component';
import { useViewStore } from './store';

const props = defineProps({
  component: {
    type: Object as PropType<Component>,
    required: true
  },
  scope: {
    type: Object,
    default: () => ({})
  }
});
const { playground } = useViewStore()!;

const item = playground.componentBlocks.list.find(item => props.component instanceof item.$class);
const render = item?.render;

</script>

<style scoped>

</style>