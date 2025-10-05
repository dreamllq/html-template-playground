<template>
  <div
    class='preview-border' 
    :class='{
      "size-pc": boardSize === "pc",
      "size-a4": boardSize === "a4"
    }'
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
.preview-border{
  position: relative;

  &.size-pc{
    background: white;
    width: 100%;
  }

  &.size-a4{
    width: 210mm;
    height: 297mm;
    margin: 0 auto;
    padding: 20mm;
    box-sizing: border-box;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
</style>