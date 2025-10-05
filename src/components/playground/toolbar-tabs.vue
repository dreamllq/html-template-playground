<template>
  <div class='size-tabs'>
    <div
      class='tab-item'
      :class='{
        selected: active === "edit"
      }'
      @click='onSelect("edit")'>
      <el-icon><edit /></el-icon>
    </div>
    <div
      class='tab-item'
      :class='{
        selected: active === "preview"
      }'
      @click='onSelect("preview")'>
      <el-icon><view-icon /></el-icon>
    </div>
    <div
      class='tab-item'
      :class='{
        selected: active === "data"
      }'
      @click='onSelect("data")'>
      <el-icon><data-board /></el-icon>
    </div>
    <div
      v-print='printObj'
      class='tab-item'>
      <el-icon><printer /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Document, Edit, View as ViewIcon, DataBoard, Printer } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import vPrint from 'vue3-print-nb';

const props = defineProps({
  defaultActive: {
    type: String,
    default: undefined
  }
});

const printObj = ref({
  id: 'printer',
  popTitle: ''
});

const emits = defineEmits(['change']);

const active = ref(props.defaultActive);

const onSelect = (type) => {
  active.value = type;
  emits('change', type);
};

const onPrint = () => {
  
};
</script>

<style scoped lang="scss">
.size-tabs{
  display: flex;

  .tab-item {
    width: 32px;
    line-height: 32px;
    color: #fff;
    cursor: pointer;
    text-align: center;

    &:hover{
      background-color: var(--el-color-primary-light-3);
    }

    &.selected{
      background-color: var(--el-color-primary-light-3);
    }
  }
}
</style>