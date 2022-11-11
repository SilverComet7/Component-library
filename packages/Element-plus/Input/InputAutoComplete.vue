<template>
  <el-autocomplete
    v-model="modelValue"
    :fetch-suggestions="querySearch"
    clearable
    :value-key="valueKey"
    class="w-56"
    placeholder="Please Input"
  />
</template>

<script lang="ts" setup>
import { useVModels } from '@vueuse/core';
import { getJsonListAsync } from '@/api/json';
import { heroAttrsList } from '@/hooks/useResourceFromGameServer';
import { getResourceItemChildren } from '@/store/resource';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    valueKey?: string;
    disabled?: boolean;
  }>(),
  {
    valueKey: 'value',
  },
);
const emit = defineEmits(['update:modelValue']);
const { modelValue, valueKey } = useVModels(props, emit);
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? heroAttrsList.value.filter(item => item[valueKey.value].includes(modelValue.value))
    : heroAttrsList.value;
  cb(results);
};

// watch(
//   () => jsonName.value,
//   async (nv, ov) => {
//     let tableData = [];
//     const children = getResourceItemChildren(jsonName.value);
//     if (children) {
//       tableData = children;
//     } else {
//       tableData = await getJsonListAsync({ jsonName: unref(jsonName), filterFields: unref(filterFields) });
//     }
//     showlist.value = tableData;
//   },
//   {
//     immediate: true,
//   },
// );
</script>

<style lang="scss" scoped></style>
