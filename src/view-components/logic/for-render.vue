<template>
  <template v-for='(item, index) in get(scope, logic.expression, [])' :key='index'>
    <slot :scope='{...scope, [logic.alias0]:item}' />
  </template>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useViewStore } from '../store';
import { For } from '@/models/logics/for';
import { get } from 'lodash';

const props = defineProps({
  logic: {
    type: Object as PropType<For>,
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