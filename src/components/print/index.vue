<template>
  <div
    id='printer'
    class='print' 
  >
    <view-component :config='config' :data='localData' />
  </div>
</template>

<script setup lang="ts">
import ViewComponent from '@/view-components/index.vue';
import { useStore } from '../store';

const { boardSize, storage: { config, data } } = useStore()!;

let localData = {};

try {
  localData = JSON.parse(data.value);
} catch (e) {
}

</script>

<style scoped lang="scss">
.print{
  display: none;
}

@media print { 
  .print{
    display: block;
    size: A4;
    /* 关键：允许打印背景颜色 */
    -webkit-print-color-adjust: exact; /* Chrome, Safari */
    color-adjust: exact;               /* 标准属性 */
    print-color-adjust: exact;         /* Firefox */
    background-clip: padding-box !important;
  }
}
</style>