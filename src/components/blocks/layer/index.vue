<template>
  <div class='layer-block' @mouseleave='onMouseleave'>
    <template v-for='item in flatList' :key='item.cId'>
      <div 
        class='layer-block_item'
        :class='{
          selected: selectedCell?.cId === item.cId
        }'
        @click='onClick(item)'
        @mouseover='onMouseover(item)'>
        <div
          class='layer-block_item-deep'
          :style='{
            width: `calc(${item.deep} * 12px)`
          }' />
        <div class='layer-block_item-icon'>
          <el-icon v-if='item.type === CELL_TYPE.COMPONENT'>
            <menu-icon />
          </el-icon>
          <el-icon v-else-if='item.type === CELL_TYPE.LOGIC'>
            <operation />
          </el-icon>
        </div>
        <div class='layer-block_item-name'>
          {{ item.info }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/components/store';
import { ref } from 'vue';
import { Menu as MenuIcon, Operation, Brush, Money } from '@element-plus/icons-vue';
import { CELL_TYPE } from '@/types/common';

const { playground, cellSelected: { select, selectedCell }, cellHover: { mouseoverCell, mouseleave } } = useStore()!;

const flatList = ref(playground.drawingBoard.document.flat());

const onClick = (item) => {
  const cell = playground.drawingBoard.document.getByCId(item.cId)!;
  select(cell);
};

const onMouseover = (item) => {
  const cell = playground.drawingBoard.document.getByCId(item.cId)!;
  mouseoverCell(cell);
};

const onMouseleave = () => {
  mouseleave();
};
</script>

<style scoped lang="scss">
.layer-block{
  padding: 8px;
  box-sizing: border-box;
}
.layer-block_item{
  display: flex;
  width: 100%;
  height: 24px;
  border-bottom: 1px solid var(--el-border-color);
  align-items: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &.selected{
    background-color: var(--el-fill-color-lighter);
  }

  &:hover{
    background-color: var(--el-fill-color-lighter);
  }

  .layer-block_item-deep{
    flex: none;
  }

  .layer-block_item-icon{
    flex: none;
    padding-right: 8px;
    height: 14px;
    line-height: 14px;
    overflow: hidden;
    color: var(--el-color-primary);
  }

  .layer-block_item-name{
    flex: 1;
    overflow: hidden;
  }

}
</style>