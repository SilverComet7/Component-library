<template>
  <el-tabs v-model="editableTabsValue" type="border-card" editable class="demo-tabs" @edit="handleTabsEdit">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      <template #label
        >{{ item.title }} <el-icon :size="15" @click="editTabLabel(item)"> <Edit /> </el-icon
      ></template>
      <slot :tabName="item.name" :tabArr="tabArr"></slot>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { useVModels } from '@vueuse/core';
import { ElMessageBox } from 'element-plus';
import { ref } from 'vue';
import { showConfirm } from '@/utils';

const props = withDefaults(
  defineProps<{
    modelValue: any[];
  }>(),
  {},
);
const emits = defineEmits(['update:modelValue']);
const { modelValue } = useVModels(props, emits);

const editableTabsValue = ref('');
const editableTabs = ref<
  {
    title: string;
    name: string;
  }[]
>([]);

const tabArr = computed(() =>
  modelValue.value.length
    ? modelValue.value.filter(item => item.groupId === editableTabsValue.value)
    : modelValue.value,
);
function editTabLabel(row: { title: string; name: string }) {
  const rowItem = editableTabs.value.find(item => item.title === row.title)!;
  ElMessageBox.prompt(`请输入分组`, '分组名称').then(({ value }) => {
    modelValue.value = modelValue.value.map(item => {
      if (item.groupId === row.title) {
        return { ...item, groupId: value };
      }
      return item;
    });
    rowItem.name = value;
    rowItem.title = value;
    editableTabsValue.value = value;
  });
}

function addTab(value: string) {
  editableTabs.value.push({
    title: value,
    name: value,
  });
}
function promptAddTab() {
  ElMessageBox.prompt(`请输入分组`, '分组名称').then(({ value }) => {
    addTab(value);
    editableTabsValue.value = value;
  });
}
onMounted(() => {
  if (modelValue.value.length) {
    const titleArr = [...new Set(modelValue.value.map(item => item.groupId))];
    titleArr.forEach(item => {
      addTab(item);
    });
    editableTabsValue.value = titleArr[0];
  } else {
    promptAddTab();
  }
});
async function handleTabsEdit(targetName: string, action: 'remove' | 'add') {
  if (action === 'add') {
    await promptAddTab();
  } else if (action === 'remove') {
    await showConfirm('确认删除这个分组吗，将删除该组所有配置？');
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }
    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter(tab => tab.name !== targetName);
    modelValue.value = modelValue.value.filter(item => item.groupId !== targetName);
  }
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
