<template>
  <div class='setting-block'>
    <component :is='component' v-if='component' />
  </div>
</template>

<script setup lang="ts">
import { CELL_TYPE } from '@/types/common';
import ComponentBaseSetting from './component/base.vue';
import LogicForSetting from './logic/for.vue';
import LogicIfSetting from './logic/if.vue';
import { useStore } from '@/components/store';
import { computed } from 'vue';

const { cellSelected: { selectedCell } } = useStore()!;

const components = {
  [CELL_TYPE.COMPONENT]: {
    'div': ComponentBaseSetting,
    'span': ComponentBaseSetting
  },
  [CELL_TYPE.LOGIC]: {
    'for': LogicForSetting,
    'if': LogicIfSetting
  }
};

const component = computed(() => {
  if (selectedCell.value) {
    return components[selectedCell.value!.type][selectedCell.value!.name];
  } else {
    return undefined;
  }
});
</script>



<style scoped lang="scss">
.setting-block{
  padding: 12px;
  box-sizing: border-box;
}
</style>