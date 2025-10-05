<template>
  <div>
    <el-row :gutter='12'>
      <el-col :span='24'>
        <setting-item label='alias0'>
          <el-input
            v-model='alias0'
            clearable
            @blur='onChange' />
        </setting-item>
      </el-col>
    </el-row>
    <el-row :gutter='12'>
      <el-col :span='24'>
        <setting-item label='expression'>
          <el-input
            v-model='expression'
            clearable
            @blur='onChange' />
        </setting-item>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SettingItem from '../setting-item.vue';
import { useStore } from '@/components/store';
import { For } from '@/models/logics/for';

const { refresh, cellSelected: { selectedCell } } = useStore()!;

const expression = ref((selectedCell.value as For)?.expression);
const alias0 = ref((selectedCell.value as For)?.alias0);

const onChange = () => {
  (selectedCell.value as For)!.expression = expression.value;
  (selectedCell.value as For)!.alias0 = alias0.value;
  refresh();
};
</script>

<style scoped>

</style>