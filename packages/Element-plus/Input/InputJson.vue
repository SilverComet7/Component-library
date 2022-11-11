<template>
  <el-input
    v-model="textarea"
    style="max-width: max-content"
    :rows="6"
    autosize
    type="textarea"
    :placeholder="placeholder"
    @blur="handleJson"
  />
</template>

<script setup lang="ts">
import { useVModels } from '@vueuse/core';
import { showErrorMessage, showSuccessMessage } from '@/utils/toolkit/messageTip';

const props = withDefaults(
  defineProps<{
    modelValue: object;
    placeholder?: string;
  }>(),
  {
    modelValue: () => ({}),
    placeholder: '',
  },
);
const emits = defineEmits(['update:modelValue']);
const { modelValue } = useVModels(props, emits);

const textarea = ref<any>(JSON.stringify(modelValue.value));

function handleJson(event: Event) {
  try {
    const parseValue = JSON.parse((event.target as HTMLInputElement).value);
    modelValue.value = parseValue;
    showSuccessMessage('JSON格式正确');
  } catch (error: any) {
    return showErrorMessage(error);
  }
}
</script>

<style lang="scss" scoped></style>
