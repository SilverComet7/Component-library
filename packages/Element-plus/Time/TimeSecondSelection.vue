<template>
  <el-date-picker v-model="localValue" type="date" placeholder="Pick a Date" format="YYYY/MM/DD" value-format="x">
  </el-date-picker>
</template>

<script setup lang="ts">
import { formatTimeStampToSecond } from '@/utils';

const props = withDefaults(
  defineProps<{
    modelValue: number;
  }>(),
  {},
);
const emit = defineEmits(['update:modelValue']);

const localValue = computed({
  get() {
    return props.modelValue * 1000;
  },
  set(value: number) {
    emit('update:modelValue', formatTimeStampToSecond(value));
  },
});
</script>

<style lang="scss" scoped></style>
