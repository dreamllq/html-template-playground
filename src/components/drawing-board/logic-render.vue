<template>
  <component :is='render' :logic='logic'>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { Logic } from '@/models/logic';
import { PropType } from 'vue';
import { useStore } from '../store';

const props = defineProps({
  logic: {
    type: Object as PropType<Logic>,
    required: true
  }
});

const { playground } = useStore()!;

const item = playground.logicBlocks.list.find(item => props.logic instanceof item.$class)!;
const render = item.render;

</script>

<style scoped>

</style>