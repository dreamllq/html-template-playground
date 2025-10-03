<template>
  <template v-for='cell in playground.drawingBoard.document.list' :key='cell.cId'>
    <cell-render :cell='cell' @select='onSelect' />
  </template>
</template>

<script setup lang="ts">
import { Cell } from '@/models/cell';
import { useStore } from '../store';
import CellRender from './cell-render.vue';

const emits = defineEmits(['select']);

const { playground } = useStore()!;

const onSelect = (cell:Cell) => {
  emits('select', cell);
};
</script>

<style scoped>

</style>