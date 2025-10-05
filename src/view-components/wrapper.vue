<template>
  <div>
    <template v-for='item in playground.drawingBoard.document.list' :key='item.cId'>
      <cell-render :cell='item' :scope='{global: data}' />
    </template>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import CellRender from './cell-render.vue';
import { useViewStore } from './store';

const { playground, data } = useViewStore()!;

</script>

<style scoped>

</style>