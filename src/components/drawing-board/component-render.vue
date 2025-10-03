<template>
  <component :is='render' :component='component'>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { Component } from '@/models/component';
import { PropType } from 'vue';
import { useStore } from '../store';

const props = defineProps({
  component: {
    type: Object as PropType<Component>,
    required: true
  }
});

const { playground } = useStore()!;

const item = playground.componentBlocks.list.find(item => props.component instanceof item.$class)!;
const render = item.render;

</script>

<style scoped>

</style>