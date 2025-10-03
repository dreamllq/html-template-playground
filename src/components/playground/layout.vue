<template>
  <div class='playground-layout'>
    <div class='playground-layout__right'>
      <div class='playground-layout__inner'>
        <div class='playground-layout__inner-toolbar'>
          <slot name='toolbar' />
        </div>
        <div class='playground-layout__inner-main'>
          <div style='width: 100%; height: 100%; overflow: auto;'>
            <slot name='drawing-board' />
          </div>
        </div>
      </div>
    </div>
    <div class='playground-layout__left'>
      <div class='playground-layout__inner'>
        <div class='playground-layout__inner-toolbar'>
          <slot name='block-tabs' />
        </div>
        <div class='playground-layout__inner-main'>
          <div style='width: 100%; height: 100%; overflow: auto;'>
            <slot name='block' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.playground-layout{
  width: 100%; 
  height: 100%; 
  display: flex;
  overflow: hidden;
  border: 1px solid var(--el-border-color);
  background-color: var(--el-bg-color-page);

  .playground-layout__right{
    flex: 1; 
    overflow: hidden;
    border-right: 1px solid var(--el-border-color);
  }

  .playground-layout__left{
    width: 300px; 
    overflow: hidden;
  }

  .playground-layout__inner {
    display: flex; 
    flex-direction: column; 
    width: 100%; 
    height: 100%;

    .playground-layout__inner-toolbar{
      flex: none; 
      height: 32px; 
      overflow: hidden;
      border-bottom: 1px solid var(--el-border-color);
      background-color: var(--el-color-primary);
    }

    .playground-layout__inner-main {
      flex: 1; 
      overflow: hidden;
    }
  }
}
</style>