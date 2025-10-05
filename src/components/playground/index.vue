<template>
  <div :style='style'>
    <layout>
      <template #toolbar>
        <div style='display: flex;'>
          <div style='flex: 1'>
            <size-tabs :default-active='boardSize' @change='(val)=>boardSize = val' />
          </div>
          <div style='flex: none'>
            <toolbar-tabs :default-active='toolBar' @change='(val)=>toolBar = val' />
          </div>
        </div>
      </template>
      <template #drawing-board>
        <template v-if='toolBar === "edit"'>
          <drawing-board v-if='!refreshFlag' />
        </template>
        <template v-else-if='toolBar === "preview"'>
          <preview-view v-if='!refreshFlag' />
        </template>
        <template v-else-if='toolBar === "data"'>
          <data-view :default-value='data' @save='onDataSave' />
        </template>
        <print-block v-if='!refreshFlag' />
      </template>
      <template #block-tabs>
        <block-tabs :default-active='activeBlock' @change='onBlockChange' />
      </template>
      <template #block>
        <component-block v-if='activeBlock === "component"' />
        <logic-block v-else-if='activeBlock === "logic"' />
        <style-board v-else-if='activeBlock === "style"' />
        <template v-else-if='activeBlock === "layer"'>
          <layer-block v-if='!refreshFlag' />
        </template>
        <setting-block v-else-if='activeBlock === "setting"' />
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
import SettingBlock from '../blocks/setting/index.vue';
import ToolbarTabs from './toolbar-tabs.vue';
import PreviewView from '../preview/index.vue';
import DataView from '../data/index.vue';
import { ElMessage } from 'element-plus';
import PrintBlock from '../print/index.vue';

const {
  playground, refreshFlag, boardSize, toolBar, storage: { data, saveData }
} = useStore()!;
const style = {
  width: playground.width,
  height: playground.height
};
const { activeBlock, onBlockChange } = useBlockTabs();

const onDataSave = (val) => {
  saveData(val); 
  ElMessage.success('保存成功');
};
</script>

<style scoped>

</style>