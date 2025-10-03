<template>
  <div
    class='cell-hover'
    :style='{
      display: hover.display
    }'>
    <div
      class='cell-hover-border' 
      :style='{
        width: hover.width,
        height: hover.height,
        top: hover.top,
        left: hover.left
      }' />
    <div
      v-if='cell'
      class='cell-hover-tag'
      :style='{
        left: cellTag.left,
        top: cellTag.top
      }'>
      {{ cell.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/components/store';

const {
  cellHover: {
    hover, cell, cellTagPosition, cellTag 
  } 
} = useStore()!;

</script>

<style scoped lang="scss">
.cell-hover{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;

  .cell-hover-border{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 2px solid var(--el-color-primary);
    pointer-events: none;
  }

  .cell-hover-tag{
    height: 18px;
    line-height: 18px;
    font-size: 14px;
    color: #fff;
    background-color: var(--el-color-primary);
    position: absolute;
    padding: 0 5px;
    pointer-events: none;
  }
}
</style>