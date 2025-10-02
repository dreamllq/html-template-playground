<template>
  <div v-if='ready'>
    <el-card>
      <component :is='com' />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
const props = defineProps({
  c: {
    type: String,
    default: ''
  }
});

const ready = ref(false);
let com;

onMounted(async () => {
  const cp = `../../examples/${props.c}.vue`;
  com = (await import(/* @vite-ignore */ cp)).default;
  ready.value = true;
  await nextTick();
});

</script>

<style scoped lang="scss">
.code-preview {
  pre[class*="language-"] {
    padding: 0;
  }
}
</style>