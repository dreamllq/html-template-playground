<template>
  <div>
    <el-row :gutter='12'>
      <el-col :span='24'>
        <setting-item label='condition'>
          <el-input
            v-model='condition'
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
import { If } from '@/models/logics/if';

const { refresh, cellSelected: { selectedCell } } = useStore()!;

const condition = ref((selectedCell.value as If)?.condition);

const onChange = () => {
  (selectedCell.value as If)!.condition = condition.value;
  refresh();
};
</script>

<style scoped>

</style>