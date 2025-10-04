<template>
  <div
    class='cell-placeholder horizontal'
    :style='{
      left: placeholder.left,
      top:placeholder.top,
      width:placeholder.width,
      display: placeholder.display
    }'>
    <div class='cell-placeholder-init' />  
  </div>
  <div
    class='cell-parent-placeholder'
    :style='{
      left: parentPlaceholder.left,
      top:parentPlaceholder.top,
      width:parentPlaceholder.width,
      height:parentPlaceholder.height,
      display: parentPlaceholder.display
    }' />
</template>

<script setup lang="ts">
import { useStore } from '@/components/store';

const { drag: { placeholder, parentPlaceholder } } = useStore()!;
</script>

<style scoped lang="scss">
 .cell-placeholder{
    position: absolute;
    z-index: 10;
    pointer-events: none;
    // display: none;
    border-style: solid !important;
    outline: none;
    box-sizing: border-box;

    &.horizontal{
      border-color: rgba(0, 0, 0, 0) #62c462;
      border-width: 3px 5px;
      margin: -3px 0 0;
      height: auto;
    }

    .cell-placeholder-init{
      background-color: #62c462;
      box-shadow: 0 0 3px rgba(0, 0, 0, .2);
      height: 100%;
      width: 100%;
      pointer-events: none;
      padding: 1.5px;
      outline: none;
    }
  }

  .cell-parent-placeholder{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-width: 2px;
    border-style: solid;
    border-color: #62c462;
    pointer-events: none;
  }
</style>