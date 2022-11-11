<template>
  <div class="w-full">
    <el-table :data="modelValue" stripe border tooltip-effect="dark" class="w-full">
      <slot name="beforeExtra"></slot>
      <slot>
        <el-table-column label="* 道具" align="center">
          <template #default="scope">
            <select-json v-model="scope.row.itemId" :json-name="jsonName ? jsonName : 'allResources'"></select-json>
            <el-input v-model="scope.row.itemId" placeholder="自定义输入" clearable></el-input>
          </template>
        </el-table-column>

        <el-table-column v-if="!$attrs.is_item_count" label="数量" align="center">
          <template #default="scope">
            <el-input-number v-model="scope.row.itemCount" :min="minValue" controls-position="right"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column v-if="defaultRow.weight === 1" label="权重" align="center">
          <template #default="scope">
            <el-input-number v-model="scope.row.weight" :min="1" controls-position="right"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column v-if="'canBroadcast' in defaultRow" label="是否播报（可选填）" align="center">
          <template #default="scope">
            <el-checkbox v-model="scope.row.canBroadcast">播报</el-checkbox>
          </template>
        </el-table-column>
      </slot>
      <slot name="extra"></slot>
      <GenerateButtons></GenerateButtons>
    </el-table>
    <el-button type="primary" class="mt-1" icon="Plus" plain @click="pushItem()">添加</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useVModels } from '@vueuse/core';
import SelectJson from '@/components/Select/SelectJson.vue';
import { useEditBtn } from '@/hooks/useEditBtn';
import { JsonName } from '@/store/resource';

export interface IRowItem {
  itemId: string;
  itemCount?: number;
  canBroadcast?: boolean;
  weight?: number;
}

const jsonName = inject<JsonName>('jsonName');
const props = withDefaults(
  defineProps<{
    modelValue: any | IRowItem[];
    defaultRow?: any | IRowItem;
    autoAddKey?: string;
    minValue?: number;
  }>(),
  {
    defaultRow: () => ({
      itemId: '8000',
      itemCount: 1,
    }),
    // autoAddKey: 'id',
    minValue: 1,
  },
);

const emits = defineEmits(['update:modelValue']);
const { modelValue } = useVModels(props, emits);

const { pushItem, GenerateButtons } = useEditBtn(modelValue, props.defaultRow, props.autoAddKey);
</script>

<style lang="scss" scoped></style>
