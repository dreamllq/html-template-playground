<template>
  <div
    :id='drawingBoardId'
    ref='containerRef'
    class='drawing-border' 
    :class='{
      "size-pc": boardSize === "pc",
      "size-a4": boardSize === "a4"
    }'
    data-container='1'
    @dragenter.prevent='onDragenter'
    @dragleave.prevent='onDragleave'
    @dragover.prevent='onDragover'
    @drop.prevent='onDrop'
    @mouseenter='onMouseenter'
    @mouseleave='onMouseleave'
    @mouseover.prevent.stop='onMouseover'
    @mousemove='onMousemove'
    @mouseup='onMouseup'
  >
    <page-render @select='onSelect' />
    <!-- <div ref='bottomRef' /> -->
    <div class='tool'>
      <cell-placeholder />
      <cell-hover />
      <cell-selected />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageRender from './page-render.vue';
import { useStore } from '../store';
import { Cell } from '@/models/cell';
import { useDrag } from './use-drag';
import CellHover from './tools/cell-hover.vue';
import CellSelected from './tools/cell-selected.vue';
import CellPlaceholder from './tools/cell-placeholder.vue';

const {
  cellHover: { mouseenter, mouseleave, mouseover }, 
  cellSelected: { select }, drawingBoardId, dragType, dragCell, boardSize,
  drag: {
    onDragenter, onDragleave, onDragover, onDrop, placeholder 
  }
} = useStore()!;

const containerRef = ref();

const onMouseover = (e:MouseEvent) => {
  if (dragType.value !== '') {
    return;
  } else {
    mouseover(e, { containerRef });
  }
};

const onMousemove = (e) => {
  if (dragType.value === 'move') {
    onDragover(e);
  }
};

const onMouseenter = (e:MouseEvent) => {
  
};

const onMouseleave = (e:MouseEvent) => {
  mouseleave();
};

const onMouseup = (e) => {
  if (dragType.value === 'move') {
    onDrop(e);
    dragType.value = '';
    dragCell.value = undefined;
  }
};

const onSelect = (cell:Cell) => {
  select(cell);
};

</script>

<style scoped lang="scss">
.drawing-border{
  min-height: 100%;
  position: relative;

  &.size-pc{
    background: white;
    width: 100%;
  }

  &.size-a4{
    width: 210mm;
    height: 297mm;
    margin: 0 auto;
    padding: 20mm;
    box-sizing: border-box;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .tool{
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

}
</style>