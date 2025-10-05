<template>
  <template v-if='get(scope, logic.condition)'>
    <slot />
  </template>
</template>

<script setup lang="ts">
import { If } from '@/models/logics/if';
import { get } from 'lodash';
import { PropType } from 'vue';

const props = defineProps({
  logic: {
    type: Object as PropType<If>,
    required: true
  },
  scope: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped>

</style>