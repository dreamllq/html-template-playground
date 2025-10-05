<template>
  <div class='block-tabs'>
    <div
      class='tab-item'
      :class='{
        selected: active === "style"
      }'
      @click='onSelect("style")'>
      <el-icon><brush /></el-icon>
    </div>
    <div
      class='tab-item'
      :class='{
        selected: active === "setting"
      }'
      @click='onSelect("setting")'>
      <el-icon><setting /></el-icon>
    </div>
    <div
      class='tab-item'
      :class='{
        selected: active === "layer"
      }'
      @click='onSelect("layer")'>
      <el-icon><money /></el-icon>
    </div>
    <div
      class='tab-item'
      :class='{
        selected: active === "component"
      }'
      @click='onSelect("component")'>
      <el-icon><menu-icon /></el-icon>
    </div>
    <div
      class='tab-item' 
      :class='{
        selected: active === "logic"
      }'
      @click='onSelect("logic")'>
      <el-icon><operation /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu as MenuIcon, Operation, Brush, Money, Setting } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';

const props = defineProps({
  defaultActive: {
    type: String,
    default: undefined
  }
});
const emits = defineEmits(['change']);

const active = ref(props.defaultActive);

const onSelect = (type) => {
  active.value = type;
  emits('change', type);
};
</script>

<style scoped lang="scss">
.block-tabs{
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;

  .tab-item {
    flex: 1;
    overflow: hidden;
    text-align: center;
    line-height: 32px;
    color: #fff;
    cursor: pointer;

    &:hover{
      background-color: var(--el-color-primary-light-3);
    }

    &.selected{
      background-color: var(--el-color-primary-light-3);
    }
  }
}
</style>