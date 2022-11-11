<template>
  <el-button type="primary" plain :loading="loading" @click="emitClickEvent">
    <slot></slot>
  </el-button>
</template>

<script lang="ts" setup>
const loading = ref(false);
const props = defineProps<{ handleFunc: () => any }>();
async function emitClickEvent() {
  loading.value = true;
  await props.handleFunc().catch(() => {
    loading.value = false;
  });
  loading.value = false;
}
</script>
