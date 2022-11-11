<template>
  <div>
    <el-table :data="tableSetting.tableColumn">
      <template v-for="(item, index) in tableColumn" :key="index">
        <el-table-column
          :label="item.label"
          :prop="item.prop"
          :formatter="item.formatter"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
      </template>
    </el-table>
    <template v-if="tableSetting.tableListOptions">
      <el-form-item label="隐藏index列">
        <el-switch v-model="tableSetting.tableListOptions.hideIndexColumn" />
      </el-form-item>
      <el-form-item label="隐藏可编辑">
        <el-switch v-model="tableSetting.tableListOptions.hideBtn" />
      </el-form-item>
      <el-form-item label="隐藏分页">
        <el-switch v-model="tableSetting.tableListOptions.hidePagination" />
      </el-form-item>
    </template>
    <!--     <el-form-item label="隐藏多选操作列"> <el-switch v-model="tableSetting.selectionConfig" /> </el-form-item>-->
    <el-form-item label="导入"> <el-switch v-model="tableSetting.excelOptions.importExcel" /> </el-form-item>
    <el-form-item label="导出"> <el-switch v-model="tableSetting.excelOptions.exportExcel" /> </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { useVModels } from '@vueuse/core';
import { tableColumn } from './Column';

const props = withDefaults(
  defineProps<{
    tableSetting: any;
  }>(),
  {},
);
const emits = defineEmits(['update:tableSetting']);
const { tableSetting } = useVModels(props, emits);

// const isUndefined = (value: boolean | undefined) => value === undefined;
</script>

<style lang="scss" scoped></style>
