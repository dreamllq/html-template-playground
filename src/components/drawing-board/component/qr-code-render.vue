<template>
  <img
    :id='component.id'
    :src='qrCodeUrl'
    alt=''
    :style='component.style'
    :class='component.classes.join(" ")'>
</template>

<script setup lang="ts">
import { QrCode } from '@/models/components/qr-code';
import qrCode from 'qrcode';

import { onMounted, PropType, ref } from 'vue';

const props = defineProps({
  component: {
    type: Object as PropType<QrCode>,
    required: true
  }
});
const qrCodeUrl = ref<string>();

qrCode.toDataURL(props.component.innerHtml, (err, url) => {
  qrCodeUrl.value = url;
});

</script>

<style scoped>

</style>