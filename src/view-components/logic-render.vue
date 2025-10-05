<template>
  <template v-if='logic.name === "for"'>
    <for-render v-slot='{scope}' :logic='(logic as For) ' :scope='scope'>
      <slot :scope='scope' />
    </for-render>
  </template>
  <template v-else-if='logic.name === "if"'>
    <if-render :logic='(logic as If) ' :scope='scope'>
      <slot />
    </if-render>
  </template>
</template>

<script setup lang="ts">
import { Logic } from '@/models/logic';
import { PropType } from 'vue';
import ForRender from './logic/for-render.vue';
import IfRender from './logic/if-render.vue';
import { For } from '@/models/logics/for';
import { If } from '@/models/logics/if';

const props = defineProps({
  logic: {
    type: Object as PropType<Logic>,
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