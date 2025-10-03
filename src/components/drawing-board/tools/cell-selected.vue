<template>
  <div
    class='cell-selected'
    :style='{
      display: selected.display
    }'
  >
    <div
      class='cell-selected-border'
      :style='{
        width: selected.width,
        height: selected.height,
        top: selected.top,
        left: selected.left
      }' />
    <div
      class='cell-selected-tag'
      :style='{
        left: selectedTag.left,
        top: selectedTag.top
      }'>
      <div class='tag-item'>
        <el-icon><top /></el-icon>
      </div>
      <div class='tag-item'>
        <el-icon><rank /></el-icon>
      </div>
      <div class='tag-item'>
        <el-icon><copy-document /></el-icon>
      </div>
      <div class='tag-item'>
        <el-icon><delete /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/components/store';
import { Top, Rank, CopyDocument, Delete } from '@element-plus/icons-vue';

const { cellSelected: { selected, selectedTag } } = useStore()!;

</script>

<style scoped lang="scss">
.cell-selected{
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;

  .cell-selected-border{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 2px solid var(--el-color-primary);
    pointer-events: none;
  }

  .cell-selected-tag{
    height: 18px;
    line-height: 14px;
    font-size: 14px;
    color: #fff;
    background-color: var(--el-color-primary);
    position: absolute;
    right: -2px;
    display: flex;
    width: 100px;
    justify-content: space-around;
    align-items: flex-end;

    &.top{
      top: -18px;
    }

    &.bottom{
      bottom: -18px;
    }

    .tag-item{
      cursor: pointer;
    }
  }
}
</style>