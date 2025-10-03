<template>
  <div class='style-item'>
    <div style='font-size: 14px;'>
      {{ label }}
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>

</style>