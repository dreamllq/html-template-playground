<template>
  <component-render
    v-if='cell.type === CELL_TYPE.COMPONENT'
    class='cell-outline component'
    :class='{
      "cell-freeze": dragCell?.cId === cell.cId
    }'
    :data-cid='cell.cId'
    data-cell='1'
    data-component='1'
    :component='(cell as Component)'
    draggable='true'
    @click.stop='onClick'
    @dragstart.prevent.stop='onDragstart'
    @dragend='onDragend'
    @drag='onDrag'
  >
    <template v-if='cell.children.length>0'>
      <template v-for='item in cell.children' :key='item.cId'>
        <cell-render :cell='item' @select='onSelect' />
      </template>
    </template>
  </component-render>

  <logic-render 
    v-else-if='cell.type === CELL_TYPE.LOGIC'
    class='cell-outline logic'
    :class='{
      "cell-freeze": dragCell?.cId === cell.cId
    }'
    :data-cid='cell.cId'
    data-cell='1'
    data-logic='1'
    :logic='(cell as Logic)'
    draggable='true'
    @click.stop='onClick'
    @dragstart.prevent.stop='onDragstart'
    @dragend='onDragend'
    @drag='onDrag'>
    <template v-if='cell.children.length>0'>
      <template v-for='item in cell.children' :key='item.cId'>
        <cell-render :cell='item' @select='onSelect' />
      </template>
    </template>
  </logic-render>
</template>

<script setup lang="ts">
import CellRender from './cell-render.vue';
import { Cell } from '@/models/cell';
import { PropType } from 'vue';
import ComponentRender from './component-render.vue';
import LogicRender from './logic-render.vue';
import { CELL_TYPE } from '@/types/common';
import { Component } from '@/models/component';
import { Logic } from '@/models/logic';
import { useStore } from '../store';

const props = defineProps({
  cell: {
    type: Object as PropType<Cell>,
    required: true
  }
});

const emits = defineEmits(['select']);

const { cellSelected: { select }, dragType, dragCell } = useStore()!;


const onClick = () => {
  emits('select', props.cell);
};

const onSelect = (cell:Cell) => {
  emits('select', cell);
};

const onDragstart = () => {
  dragType.value = 'move';
  dragCell.value = props.cell;
};

const onDragend = () => {
  console.log('onDragend');
  
  // dragType.value = '';
  // dragCell.value = undefined;
};

const onDrag = (e) => {
  
};
</script>

<style scoped lang="scss">
.cell-outline{
  outline: 1px dashed rgba(170, 170, 170, 0.7);
  outline-offset: -2px;

  &.logic{
    outline-width: 2px;
  }
}

.cell-freeze {
  opacity: .5;
  filter: alpha(opacity=50);
  pointer-events: none
}
</style>