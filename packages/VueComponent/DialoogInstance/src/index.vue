<template>
  <div>
    <slot name="trigger" :triggerMethod="handleCreate">
      <el-button :type="isNotEmpty(content) ? 'warning' : 'primary'" @click="handleCreate">
        {{ isNotEmpty(content) ? "编辑" : '创建' }}
      </el-button>
    </slot>
    <el-dialog v-model="dialogVisible" title="配置" append-to-body show-close>
      <slot :content="localContent">
      </slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {ref, defineProps, defineEmits, unref, defineExpose} from "vue-demi";
import {useVModels} from "@vueuse/core";
import {cloneDeep} from "lodash";
import {ElButton, ElDialog} from 'element-plus'

const props = defineProps({
  buttonName: {type: String, default: '创建'},
  content: {type: Array, default: []},
  checkHandle: Function
});
const emit = defineEmits(["update:content"]);
const {content, buttonName} = useVModels(props, emit);
const localContent = ref();
const dialogVisible = ref(false);

function handleCreate() {
  localContent.value = cloneDeep(unref(props.content));
  dialogVisible.value = true;
}

function handleConfirm() {
  if (props.checkHandle && !props.checkHandle(localContent.value)) return;
  emit("update:content", localContent.value);
  dialogVisible.value = false;
}

function isNotEmpty(value) {
  if (Array.isArray(value)) {
    return value.length;
  }
  return false;
}

function closeDialog() {
  dialogVisible.value = false;
}

defineExpose({dialogVisible, closeDialog});
</script>
