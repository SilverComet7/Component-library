<template>
  <div>
    <input v-show="false" ref="inputRef" type="file" accept=".json" @change="handleInputClick" />
    <div @click="handleUpload">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, unref } from 'vue';

export default defineComponent({
  name: 'ImportExcel',
  props: {
    dateFormat: {
      type: String,
    },
    // https://github.com/SheetJS/sheetjs/issues/1470#issuecomment-501108554
    timeZone: {
      type: Number,
      default: 8,
    },
  },
  emits: ['success', 'error'],
  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement | null>(null);
    const loadingRef = ref<boolean>(false);

    function readerData(rawFile: File) {
      loadingRef.value = true;
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async e => {
          try {
            const data = e.target && e.target.result;
            emit('success', data);
            resolve('');
          } catch (error) {
            reject(error);
            emit('error');
          } finally {
            loadingRef.value = false;
          }
        };
        reader.readAsText(rawFile);
      });
    }

    async function upload(rawFile: File) {
      const inputRefDom = unref(inputRef);
      if (inputRefDom) {
        inputRefDom.value = '';
      }
      await readerData(rawFile);
    }

    /**
     * @description: 触发选择文件管理器
     */
    function handleInputClick(e: Event) {
      const files = e && (e.target as HTMLInputElement).files;
      const rawFile = files && files[0]; // only setting files[0]
      if (!rawFile) return;
      upload(rawFile);
    }

    /**
     * @description: 点击上传按钮
     */
    function handleUpload() {
      const inputRefDom = unref(inputRef);
      inputRefDom?.click();
    }

    return { handleUpload, handleInputClick, inputRef };
  },
});
</script>
