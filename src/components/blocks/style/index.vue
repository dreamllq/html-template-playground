<template>
  <div v-if='selectedCell' class='style-block'>
    <div style='font-size: 12px; color: #333;'>
      选中：{{ selectedCell.name }}
    </div>
    <el-divider style='margin: 12px 0;' />
    <setting-block />
    <el-divider style='margin: 12px 0;' />
    <template v-if='selectedCell.type === CELL_TYPE.COMPONENT'>
      <el-row :gutter='12'>
        <el-col :span='24'>
          <style-item label='Classes'>
            <el-input-tag
              v-model='classes'
              @change='onChange'
            />
            <div style='font-size: 12px; color: #333;'>
              page-break为打印强制分页class
            </div>
          </style-item>
        </el-col>
      </el-row>

      <el-divider style='margin: 12px 0;' />

      <el-row :gutter='12'>
        <el-col :span='24'>
          <style-item label='innerHtml'>
            <el-input
              v-model='innerHtml'
              clearable
              type='textarea'
              @blur='onInnerHtmlChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-divider style='margin: 12px 0;' />

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Float'>
            <el-select-v2
              v-model='css.float'
              clearable
              :options='[
                {value:"left", label:"left"},
                {value:"right", label:"right"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
      </el-row>
      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Display'>
            <el-select-v2
              v-model='css.display'
              clearable
              :options='[
                {value:"block", label:"block"},
                {value:"inline", label:"inline"},
                {value:"inline-block", label:"inline-block"},
                {value:"flex", label:"flex"},
                {value:"table", label:"table"},
                {value:"table-row", label:"table-row"},
                {value:"table-cell", label:"table-cell"},
                {value:"none", label:"none"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Position'>
            <el-select-v2
              v-model='css.position'
              clearable
              :options='[
                {value:"static", label:"static"},
                {value:"relative", label:"relative"},
                {value:"absolute", label:"absolute"},
                {value:"fixed", label:"fixed"},
              ]'
              @change='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Top'>
            <el-input v-model='css.top' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Right'>
            <el-input v-model='css.right' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Bottom'>
            <el-input v-model='css.bottom' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Left'>
            <el-input v-model='css.left' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-divider style='margin: 12px 0;' />

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Width'>
            <el-input v-model='css.width' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Height'>
            <el-input v-model='css.height' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='MinWidth'>
            <el-input v-model='css.minWidth' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='MinHeight'>
            <el-input v-model='css.minHeight' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='MaxWidth'>
            <el-input v-model='css.maxWidth' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='MaxHeight'>
            <el-input v-model='css.maxHeight' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='MarginTop'>
            <el-input v-model='css.marginTop' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='MarginRight'>
            <el-input v-model='css.marginRight' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='MarginBottom'>
            <el-input v-model='css.marginBottom' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='MarginLeft'>
            <el-input v-model='css.marginLeft' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='PaddingTop'>
            <el-input v-model='css.paddingTop' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='PaddingRight'>
            <el-input v-model='css.paddingRight' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='PaddingBottom'>
            <el-input v-model='css.paddingBottom' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='PaddingLeft'>
            <el-input v-model='css.paddingLeft' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-divider style='margin: 12px 0;' />

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Font family'>
            <el-input v-model='css.fontFamily' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Font Size'>
            <el-input v-model='css.fontSize' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Font weight'>
            <el-select-v2
              v-model='css.fontWeight'
              clearable
              :options='[
                {value:"bold", label:"bold"},
                {value:"bolder", label:"bolder"},
                {value:"lighter", label:"lighter"},
                {value:"normal", label:"normal"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Letter spacing'>
            <el-input v-model='css.letterSpacing' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='24'>
          <style-item label='Color'>
            <el-color-picker v-model='css.color' show-alpha @change='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Line height'>
            <el-input v-model='css.lineHeight' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Text align'>
            <el-select-v2
              v-model='css.textAlign'
              clearable
              :options='[
                {value:"left", label:"left"},
                {value:"center", label:"center"},
                {value:"right", label:"right"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Text decoration'>
            <el-input v-model='css.textDecoration' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Text shadow'>
            <el-input v-model='css.textDecoration' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-divider style='margin: 12px 0;' />

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Opacity'>
            <el-input v-model='css.opacity' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Border radius - Top Left'>
            <el-input v-model='css.borderTopLeftRadius' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Border radius - Top Right'>
            <el-input v-model='css.borderTopRightRadius' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Border radius - Bottom Left'>
            <el-input v-model='css.borderBottomLeftRadius' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Border radius - Bottom Right'>
            <el-input v-model='css.borderBottomRightRadius' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Border width'>
            <el-input v-model='css.borderWidth' clearable @blur='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Border style'>
            <el-select-v2
              v-model='css.borderStyle'
              clearable
              :options='[
                {value:"none", label:"none"},
                {value:"solid", label:"solid"},
                {value:"dotted", label:"dotted"},
                {value:"dashed", label:"dashed"},
                {value:"double", label:"double"},
                {value:"groove", label:"groove"},
                {value:"ridge", label:"ridge"},
                {value:"inset", label:"inset"},
                {value:"outset", label:"outset"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Border color'>
            <el-color-picker v-model='css.borderColor' show-alpha @change='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Border collapse'>
            <el-select-v2
              v-model='css.borderCollapse'
              clearable
              :options='[
                {value:"collapse", label:"collapse"},
                {value:"separate", label:"separate"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Background color'>
            <el-color-picker v-model='css.backgroundColor' show-alpha @change='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-divider style='margin: 12px 0;' />

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Flex'>
            <el-input v-model='css.flex' clearable @blur='onChange' />
          </style-item>
        </el-col>
      </el-row>
    

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Flex direction'>
            <el-select-v2
              v-model='css.flexDirection'
              clearable
              :options='[
                {value:"row", label:"row"},
                {value:"row-reverse", label:"row-reverse"},
                {value:"column", label:"column"},
                {value:"column-reverse", label:"column-reverse"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Flex justifyContent'>
            <el-select-v2
              v-model='css.justifyContent'
              clearable
              :options='[
                {value:"start", label:"start"},
                {value:"end", label:"end"},
                {value:"space-between", label:"space-between"},
                {value:"space-around", label:"space-around"},
                {value:"center", label:"center"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
      </el-row>

      <el-row :gutter='12'>
        <el-col :span='12'>
          <style-item label='Flex alignContent'>
            <el-select-v2
              v-model='css.alignContent'
              clearable
              :options='[
                {value:"start", label:"start"},
                {value:"end", label:"end"},
                {value:"stretch", label:"stretch"},
                {value:"center", label:"center"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
        <el-col :span='12'>
          <style-item label='Flex alignItems'>
            <el-select-v2
              v-model='css.alignItems'
              clearable
              :options='[
                {value:"start", label:"start"},
                {value:"end", label:"end"},
                {value:"stretch", label:"stretch"},
                {value:"center", label:"center"},
              ]' 
              @change='onChange' />
          </style-item>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, ref, watch } from 'vue';
import StyleItem from './style-item.vue';
import { useStore } from '@/components/store';
import { cloneDeep } from 'lodash';
import { CELL_TYPE } from '@/types/common';
import { Component } from '@/models/component';
import SettingBlock from '../setting/index.vue';

const { cellSelected: { selectedCell }, refresh } = useStore()!;


const css = ref<CSSProperties>({});
const classes = ref<string[]>([]);
const innerHtml = ref('');


watch(selectedCell, () => {
  if (selectedCell.value?.type === CELL_TYPE.COMPONENT) {
    const component = selectedCell.value as Component;
    css.value = cloneDeep(component.style);
    classes.value = cloneDeep(component.classes);
    innerHtml.value = component.innerHtml;
  }
}, { immediate: true });

const onChange = () => {
  console.log('onChang');
  if (selectedCell.value?.type === CELL_TYPE.COMPONENT) {
    const component = selectedCell.value as Component;
    component.style = cloneDeep(css.value);
    component.classes = cloneDeep(classes.value);
    refresh();
  }
};

const onInnerHtmlChange = () => {
  if (selectedCell.value?.type === CELL_TYPE.COMPONENT) {
    const component = selectedCell.value as Component;
    component.innerHtml = innerHtml.value;
    refresh();
  }
};
</script>

<style scoped lang="scss">
.style-block{
  padding: 12px;
  box-sizing: border-box;
}
</style>