<template>
  <div
    :id='drawingBoardId'
    ref='containerRef'
    class='drawing-border' 
    data-container='1'
    @dragenter.prevent='onDragenter'
    @dragleave.prevent='onDragleave'
    @dragover.prevent='onDragover'
    @drop.prevent='onDrop'
    @mouseenter='onMouseenter'
    @mouseleave='onMouseleave'
    @mouseover='onMouseover'
  >
    <page-render @select='onSelect' />
    <div ref='bottomRef' />
    <div class='tool'>
      <div
        class='cell-placeholder horizontal'
        :style='{
          left: placeholder.left,
          top:placeholder.top,
          width:placeholder.width
        }'>
        <div class='cell-placeholder-init' />  
      </div>
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

const { cellHover: { mouseenter, mouseleave, mouseover }, cellSelected: { select }, drawingBoardId } = useStore()!;

const containerRef = ref();
const bottomRef = ref();

const {
  onDragenter,
  onDragleave,
  onDragover,
  onDrop,
  placeholder
} = useDrag({
  containerRef,
  bottomRef 
});

const onMouseover = (e:MouseEvent) => {
  mouseover(e, { containerRef });
};

const onMouseenter = (e:MouseEvent) => {
  
};

const onMouseleave = (e:MouseEvent) => {
  mouseleave(e);
};

const onSelect = (cell:Cell) => {
  select(cell, { containerRef });
};

</script>

<style scoped lang="scss">
.drawing-border{
  min-height: 100%;
  position: relative;

  .tool{
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  .cell-placeholder{
    position: absolute;
    z-index: 10;
    pointer-events: none;
    // display: none;
    border-style: solid !important;
    outline: none;
    box-sizing: border-box;

    &.horizontal{
      border-color: rgba(0, 0, 0, 0) #62c462;
      border-width: 3px 5px;
      margin: -3px 0 0;
      height: auto;
    }

    .cell-placeholder-init{
      background-color: #62c462;
      box-shadow: 0 0 3px rgba(0, 0, 0, .2);
      height: 100%;
      width: 100%;
      pointer-events: none;
      padding: 1.5px;
      outline: none;
    }
  }


}
</style>