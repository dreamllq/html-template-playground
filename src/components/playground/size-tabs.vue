<template>
  <div class='size-tabs'>
    <div
      class='tab-item'
      :class='{
        selected: active === "pc"
      }'
      @click='onSelect("pc")'>
      <el-icon><monitor /></el-icon>
    </div>
    <div
      class='tab-item'
      :class='{
        selected: active === "a4"
      }'
      @click='onSelect("a4")'>
      <el-icon><document /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Document } from '@element-plus/icons-vue';
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