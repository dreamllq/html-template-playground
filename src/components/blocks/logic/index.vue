<template>
  <div class='component-blocks'>
    <template v-for='item in playground.logicBlocks.list' :key='item.name'>
      <div
        class='component-blocks__item'
        draggable='true'
        @dragstart='onDragstart(item)'
        @dragend='onDragend'
        @drag='onDrag'>
        {{ item.name }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/components/store';
import { ComponentBlockItem } from '@/types/component-blocks';

const { playground, dragBlock, dragType } = useStore()!;

const onDragstart = (item: ComponentBlockItem) => {
  // console.log('onDragstart', e);
  dragType.value = 'new';
  dragBlock.value = item;
};

const onDragend = (e:DragEvent) => {
  // console.log('onDragend', e);
};

const onDrag = (e:DragEvent) => {
  // console.log('onDrag', e);
};
</script>

<style scoped lang="scss">
.component-blocks{
  display: flex;
  flex-wrap: wrap;

  .component-blocks__item{
    height: 100px;
    width: 33%;
    overflow: hidden;
    flex: none;
    border: 1px solid var(--el-border-color);
    cursor: move;
    margin: 10px;
    background-color: #fff;
  }
}
</style>