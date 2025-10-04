<template>
  <div :style='style'>
    <layout>
      <template #toolbar>
        <div style='display: flex;'>
          <div style='flex: 1'>
            <size-tabs :default-active='boardSize' @change='(val)=>boardSize = val' />
          </div>
          <div style='flex: none'>
            2
          </div>
        </div>
      </template>
      <template #drawing-board>
        <drawing-board v-if='!refreshFlag' />
      </template>
      <template #block-tabs>
        <block-tabs :default-active='activeBlock' @change='onBlockChange' />
      </template>
      <template #block>
        <component-block v-if='activeBlock === "component"' />
        <logic-block v-else-if='activeBlock === "logic"' />
        <style-board v-else-if='activeBlock === "style"' />
        <layer-block v-else-if='activeBlock === "layer"' />
      </template>
    </layout>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../store';
import Layout from './layout.vue';
import BlockTabs from '../blocks/tabs.vue';
import { ref } from 'vue';
import { useBlockTabs } from './use-block-tabs';
import ComponentBlock from '../blocks/component/index.vue';
import LogicBlock from '../blocks/logic/index.vue';
import DrawingBoard from '../drawing-board/index.vue';
import StyleBoard from '../blocks/style/index.vue';
import SizeTabs from './size-tabs.vue';
import LayerBlock from '../blocks/layer/index.vue';

const { playground, refreshFlag, boardSize } = useStore()!;
const style = {
  width: playground.width,
  height: playground.height
};
const { activeBlock, onBlockChange } = useBlockTabs();

</script>

<style scoped>

</style>