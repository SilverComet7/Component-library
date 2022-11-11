<template>
  <slot name="trigger" :triggerMethod="handleCreate">
    <el-button :type="isNotEmpty(content) ? 'warning' : 'primary'" @click="handleCreate">
      {{ isNotEmpty(content) ? '编辑' : buttonName }}</el-button
    >
  </slot>
  <el-dialog v-model="dialogVisible" title="配置" append-to-body show-close>
    <slot :content="localContent">
      <TableReward v-model="localContent" v-bind="$attrs"></TableReward>
    </slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { useVModels } from '@vueuse/core';
import { cloneDeep } from 'lodash';
import TableReward from '@/components/Table/TableReward.vue';

const props = withDefaults(
  defineProps<{
    content: any;
    checkHandle?: (content: any) => boolean;
    buttonName?: string;
  }>(),
  {
    buttonName: '创建',
  },
);
const emit = defineEmits(['handleConfirm', 'update:content']);
const { content, buttonName } = useVModels(props, emit);
const localContent = ref();
const dialogVisible = ref(false);

function handleCreate() {
  localContent.value = cloneDeep(unref(props.content));
  dialogVisible.value = true;
}

function handleConfirm() {
  if (props.checkHandle && !props.checkHandle(localContent.value)) return;
  emit('handleConfirm', localContent.value);
  emit('update:content', localContent.value);
  dialogVisible.value = false;
}

function isNotEmpty(value: object | Array<any>) {
  if (Array.isArray(value)) {
    return value.length;
  }
  return false;
}

function closeDialog() {
  dialogVisible.value = false;
}

defineExpose({ dialogVisible, closeDialog });
</script>

<style lang="scss" scoped></style>
