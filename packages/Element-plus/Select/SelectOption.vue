<template>
  <el-form-item :label="labelName">
    <el-select v-model="modelValue" :disabled="disabled" :multiple="multiple" clearable collapse-tags filterable>
      <el-option
        v-for="item in optionList"
        :key="item.value || item.label"
        :label="item.label"
        :value="item.value || item.label"
      ></el-option>
      <li v-if="multiple" :class="[isCheckAll ? 'is-check-all' : '']" class="check-all" @click="selectAll">
        <span>全选</span>
      </li>
    </el-select>
  </el-form-item>
</template>

<script lang="ts" setup>
import { useVModels } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    modelValue: number | number[] | string | string[] | undefined;
    optionList: any[];
    labelName?: string;
    multiple?: boolean;
    disabled?: boolean;
  }>(),
  {
    optionList: () => [],
  },
);
const emit = defineEmits(['update:modelValue']);
const { modelValue, optionList } = useVModels(props, emit);

const isCheckAll = ref(false);

function selectAll() {
  modelValue.value = isCheckAll.value ? [] : optionList.value.map(item => item.value);
  isCheckAll.value = !isCheckAll.value;
}
</script>

<style lang="scss" scoped>
.check-all {
  width: 100%;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background-color: #f5f7fa;
  cursor: pointer;
  color: #606266;
  font-size: 14px;
  margin-top: 6px;
}

.is-check-all {
  color: #409eff;
  font-weight: 700;
}
</style>
