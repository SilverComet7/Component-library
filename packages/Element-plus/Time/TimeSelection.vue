<template>
  <el-form-item :label="labelName">
    <el-date-picker
      v-model="localValue"
      :shortcuts="shortcuts"
      :disabled="disabled"
      :default-time="defaultTime"
      value-format="x"
      :type="type"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    />
  </el-form-item>
</template>

<script lang="ts" setup>
import { useVModels } from '@vueuse/core';
import { formatTimeStampToSecond } from '@/utils';

const props = withDefaults(
  defineProps<{
    modelValue: number[] | number;
    type: string;
    disabled?: boolean;
    labelName?: string;
    isSecond?: boolean;
  }>(),
  {
    // labelName: '选择日期:',
    disabled: false,
    isSecond: true,
    type: 'datetimerange',
  },
);
const emit = defineEmits(['update:modelValue', 'update:disabled']);
const { modelValue, disabled, type } = useVModels(props, emit);

const defaultTime: [Date, Date] = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)]; // '12:00:00', '08:00:00'

const localValue = computed({
  get() {
    if (modelValue.value) {
      if (props.isSecond) {
        if (Array.isArray(modelValue.value)) return modelValue.value.map(v => v * 1000);
        return modelValue.value / 1000;
      }
      return modelValue.value;
    }
  },
  set(val: any) {
    if (props.type === 'datetimerange') {
      const secondTimeArr = val?.map((v: any) => formatTimeStampToSecond(v));
      emit('update:modelValue', secondTimeArr);
    } else emit('update:modelValue', val);
  },
});

const pickerConfig = [
  { text: '今天', day: 0 },
  { text: '昨天', day: 1 },
  { text: '前天', day: 2 },
  { text: '最近三天', day: 3 },
  { text: '最近一周', day: 7 },
  { text: '最近一个月', day: 31 },
  { text: '最近三个月', day: 92 },
];

function generateValue(day: number) {
  const start = new Date(new Date().setHours(0, 0, 0, 0));
  const end = new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1000);
  start.setTime(start.getTime() - 3600 * 1000 * 24 * day);
  return [start, end];
}

const shortcuts = pickerConfig.map(item => ({
  text: item.text,
  value: generateValue(item.day),
}));
</script>

<style lang="scss" scoped></style>
