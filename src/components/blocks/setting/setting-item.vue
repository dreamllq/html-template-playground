<template>
  <div class='style-item'>
    <div style='font-size: 12px; color: #333;'>
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