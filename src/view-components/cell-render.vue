<template>
  <component-render
    v-if='cell.type === CELL_TYPE.COMPONENT'
    :component='(cell as Component)'
    :scope='scope'
  >
    <template v-if='cell.children.length>0'>
      <template v-for='item in cell.children' :key='item.cId'>
        <cell-render :cell='item' :scope='scope' />
      </template>
    </template>
  </component-render>

  <logic-render 
    v-else-if='cell.type === CELL_TYPE.LOGIC'
    :logic='(cell as Logic)'
    :scope='scope'
  >
    <template #default='data'>
      <template v-if='cell.children.length>0'>
        <template v-for='item in cell.children' :key='item.cId'>
          <cell-render :cell='item' :scope='data.scope' />
        </template>
      </template>
    </template>
  </logic-render>
</template>

<script setup lang="ts">
import CellRender from './cell-render.vue';
import { PropType } from 'vue';
import ComponentRender from './component-render.vue';
import LogicRender from './logic-render.vue';
import { CELL_TYPE } from '@/types/common';
import { Component } from '@/models/component';
import { Logic } from '@/models/logic';
import { Cell } from '@/models/cell';

const props = defineProps({
  cell: {
    type: Object as PropType<Cell>,
    required: true
  },
  scope: {
    type: Object,
    default: () => ({})
  }
});

</script>

<style scoped lang="scss">

</style>