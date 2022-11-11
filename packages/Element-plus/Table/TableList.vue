<template>
  <div class="table-list">
    <div class="p-2">
      <!-- 自定义查询 -->
      <el-form inline class="flex flex-wrap">
        <slot name="searchBox"></slot>
      </el-form>
      <!-- 自动生成查询/过滤列表 -->
      <el-form v-if="searchFormList?.length" :inline="true" class="flex flex-wrap">
        <el-form-item v-for="(item, index) in searchFormList" :key="index" :label="item.label">
          <component
            :is="item.cmtOption.cmt"
            v-if="item.cmtOption && item.prop"
            v-model:item.cmtOption.model="searchParam[item.prop]"
          ></component>
          <SearchFormItem v-else :item="item" :search-param="searchParam" :list-data="listData"></SearchFormItem>
        </el-form-item>
        <el-button type="primary" icon="search" @click="searchList">{{ isLocalPage ? '筛选' : '搜索' }}</el-button>
        <el-button type="primary" @click="resetParam">重置</el-button>
      </el-form>
      <!-- 工具栏 -->
      <div class="flex">
        <div class="flex-1">
          <slot name="toolbox"></slot>
          <el-button v-if="selectionConfig?.delete" type="danger" class="ml-2" @click="emit('batchDelete')"
            >{{ selectionConfig?.list?.length }}条批量删除
          </el-button>
          <!-- 导入 -->
          <DialogInstance v-if="tableSetting.excelOptions?.importExcel" ref="importDialog" v-model:content="exportInfo">
            <template #trigger="{ triggerMethod }">
              <el-button type="primary" @click="triggerMethod">导入</el-button>
            </template>
            <template #default="ctx">
              <el-radio-group v-model="ctx.content.type">
                <el-radio label="json">json</el-radio>
                <el-radio label="xlsx">excel</el-radio>
              </el-radio-group>
              <div class="my-10">
                <el-button type="primary" @click="exportTableExcel(ctx.content)"
                  >导出{{ ctx.content.type }}模板
                </el-button>
              </div>
              <ImportExcel v-if="getFileType(ctx.content) === 'xlsx'" @success="loadDataSuccess">
                <el-button type="warning">导入Excel</el-button>
              </ImportExcel>
              <ImportJson v-if="getFileType(ctx.content) === 'json'" @success="importJsonFile">
                <el-button type="warning">导入Json</el-button>
              </ImportJson>
            </template>
          </DialogInstance>
        </div>
        <div>
          <slot name="handleBox"></slot>
          <el-button v-if="tableColumn" type="primary" icon="setting" @click="drawerVisible = true">配置</el-button>
        </div>
      </div>
    </div>
    <!-- 表格主体 -->
    <div v-loading="localLoading" element-loading-text="数据较多,请耐心等待">
      <slot :listData="tableData" name="tableData">
        <el-table
          ref="currentTable"
          :data="tableData"
          stripe
          border
          tooltip-effect="dark"
          :row-key="selectionConfig?.rowKey ?? '_id'"
          @sort-change="handleSortChange"
          @selection-change="(val:any) => selectionConfig.list = val"
        >
          <!-- 多选 -->
          <el-table-column v-if="selectionConfig" type="selection" align="center" reserve-selection></el-table-column>
          <!-- expand -->
          <el-table-column
            v-if="!tableSetting.tableListOptions?.hideExpandColumn"
            v-slot="scope"
            type="expand"
            align="center"
          >
            <slot name="expand" :row="scope.row"></slot>
          </el-table-column>
          <!-- index列 -->
          <el-table-column
            v-if="!tableSetting.tableListOptions?.hideIndexColumn"
            type="index"
            width="80"
            :index="(value: number) => (value + 1) + (pag.page - 1) * pag.pageSize"
            align="center"
          ></el-table-column>
          <template v-for="(item, index) in tableSetting.tableColumn">
            <el-table-column
              v-if="judgeShow(item)"
              :key="index"
              :label="item.label"
              :prop="item.prop"
              :formatter="(row:any,column:any) => item.formatter ? item.formatter(row,column) : formatOption(row,column,item.option)"
              :width="item.width"
              :sortable="item.sortable"
              show-overflow-tooltip
              align="center"
            >
            </el-table-column>
          </template>
          <!-- 自定义 -->
          <slot></slot>
          <GenerateButtons v-if="!tableSetting.tableListOptions?.hideBtn"></GenerateButtons>
        </el-table>
      </slot>

      <div class="flex justify-between p-2">
        <div class="basis-52">
          <!-- 导出-->
          <DialogInstance
            v-if="tableSetting.excelOptions?.exportExcel"
            :content="exportInfo"
            @update:content="exportTableExcel"
          >
            <template #trigger="{ triggerMethod }">
              <el-button type="primary" class="flex-1" @click="triggerMethod">导出</el-button>
            </template>
            <template #default="ctx">
              <el-input
                v-model="ctx.content.fileName"
                placeholder="请输入文件名称 example:文件名-日期"
                size="normal"
                clearable
              ></el-input>
              <el-radio-group v-model="ctx.content.type">
                <el-radio label="json">json</el-radio>
                <el-radio label="xlsx">excel</el-radio>
              </el-radio-group>
            </template>
          </DialogInstance>
        </div>
        <div>
          <el-button
            v-if="!tableSetting.tableListOptions?.hideBtn"
            class="float-left"
            type="primary"
            plain
            @click="pushItem()"
            >添加
          </el-button>
          <el-pagination
            v-if="!tableSetting.tableListOptions?.hidePagination"
            v-model:current-page="pag.page"
            v-model:page-size="pag.pageSize"
            v-model:total="pag.totalNum"
            class="justify-self-end"
            :page-sizes="pag.pageSizes"
            background
            :layout="layout"
            @size-change="handleSizeChange"
            @current-change="handlePageChange"
          />
        </div>
      </div>
    </div>

    <!-- 表格配置 -->
    <el-drawer v-model="drawerVisible" title="表格功能设置" direction="rtl" size="50%">
      <ColumnSetting v-model:tableSetting="tableSetting"></ColumnSetting>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { useVModels } from '@vueuse/core';
import { computed, reactive, ref, unref, watch } from 'vue';
import DialogInstance from '../Dialog/DialogInstance.vue';
import ImportExcel from '../File/ImportExcel.vue';
import ColumnSetting from './Component/ColumnSetting.vue';
import { searchParam, searchParamFilterEmpty } from './share';
import { useEditBtn } from '@/hooks/useEditBtn';
import { useRouteMeta } from '@/hooks/useTemplate';
import { GameModel, useInfoStore } from '@/store/piniaStore/info';
import { TableSettingClass, useTableSettingStore } from '@/store/piniaStore/tableSetting';
import { CompatibleWithDefaultConfig, formatOption, showConfirm, showErrorMessage } from '@/utils';
import { jsonToSheetXlsx } from '@/utils/Export2Excel';
import { getFilteredList } from '@/utils/method';

export interface TableColumn {
  label: string;
  prop?: string;
  width?: string;
  sortable?: boolean;
  formatter?: (row: any, column?: any) => any;

  type?: string;

  // 控制搜索栏
  search?: boolean;
  searchType?: string;
  option?: { label: string; value: any }[];
  cmtOption?: {
    cmt: string;
    model: any;
  };

  // 控制显示隐藏
  isHidden?: boolean;
  gameModel?: GameModel[];
}

/* 表格组件支持的基础特性
1. 可配置编辑表，可添加复制删除，配置defaultConfig，可自动兼容
2. 基础分页展示 支持本地分页/服务器分页
3. 自动列宽

手动开启可配置可根据用户固定    todo  1.可传入自定义控制   没有传入可自动生成 取当前组件的路由，自动生成session缓存 存在多个的情况，自动+1

客制化配置功能
1. 支持xlsx ,json格式的导入导出表  前端分页导出，后端分页导出
2. 行相关: 多选
3. 列相关: 隐藏,排序，模糊搜索， todo:拖拽排列
4. 开启编辑功能
5. 分页功能
*/
const { gameModel } = useInfoStore();

function judgeShow(item: TableColumn) {
  if (item.gameModel) {
    return item.gameModel.includes(unref(gameModel)) && !item.isHidden;
  }
  return !item.isHidden;
}

const props = withDefaults(
  defineProps<{
    listData: any[];
    tableName?: string;

    // 存在则为服务器分页  否则就是本地分页
    allNumber?: number;

    // activity tabs所需
    allListData?: any[];
    filterConditions?: {
      [key: string]: string;
    };
    rowDefaultConfig?: any;
    autoAddKey?: string;

    // 自定义功能配置
    tableColumn?: TableColumn[];
    selectionConfig?: {
      rowKey?: string;
      list?: any[];
      delete?: boolean;
    };
    tableListOptions?: {
      hidePagination?: boolean;
      hideIndexColumn?: boolean;
      hideExpandColumn?: boolean;
      hideBtn?: boolean;
      hideColumnSetting?: boolean;
    };
    excelOptions?: {
      importExcel?: boolean;
      exportExcel?: boolean;
      //  根据tableColumn 还是VNode来导出
      VNode?: any;
      fileName?: string;
      timeRange?: string;
    };
  }>(),
  {
    allNumber: undefined,
    autoAddKey: undefined,
    allListData: undefined,
    filterConditions: undefined,

    tableColumn: undefined,
    selectionConfig: undefined,
    tableListOptions: undefined,
    excelOptions: undefined,
  },
);
const emit = defineEmits([
  'update:listData',
  'getTableList',
  'batchDelete',
  'update:tableListOptions',
  'update:excelOptions',
]);
const { listData, allNumber, allListData, selectionConfig, tableColumn, tableListOptions, excelOptions } = useVModels(
  props,
  emit,
);
const isLocalPage = computed(() => allNumber.value === undefined);
const drawerVisible = ref(false);

// 表格配置客制化缓存
const { routeTitle } = useRouteMeta();
const tableSettingStore: any = useTableSettingStore();
const genMergedOptions = computed(() =>
  reactive(
    new TableSettingClass({
      tableColumn: tableColumn.value,
      tableListOptions: tableListOptions.value,
      selectionConfig: selectionConfig.value,
      excelOptions: excelOptions.value,
    }),
  ),
);

// 有storage取本地，否则取prop
const curTableStore = computed(() =>
  props.tableName ? tableSettingStore.TableSetting?.[routeTitle]?.[props.tableName] : {},
);
const tableSetting = computed(() => ({
  tableColumn: curTableStore?.value?.tableColumn ?? genMergedOptions.value.tableColumn,
  tableListOptions: curTableStore?.value?.tableListOptions ?? genMergedOptions.value.tableListOptions,
  selectionConfig: curTableStore?.value?.selectionConfig ?? genMergedOptions.value.selectionConfig,
  excelOptions: curTableStore?.value?.excelOptions ?? genMergedOptions.value.excelOptions,
}));
// 卸载时候绑定localStorage
onUnmounted(() => {
  if (props.tableName) {
    const curRouteTableStore = tableSettingStore.TableSetting[routeTitle];
    if (!curRouteTableStore) tableSettingStore.TableSetting[routeTitle] = {};
    tableSettingStore.TableSetting[routeTitle][props.tableName] = tableSetting.value;
  }
});

/*  表格的多选编辑  */
const currentTable = ref();
watch(
  () => props.selectionConfig,
  (nv, ov) => {
    nv?.list?.forEach(({ _id }) => {
      const val = listData.value?.find(item => item._id === _id);
      if (val) currentTable.value.toggleRowSelection(val, true);
    });
  },
  { deep: true },
);
const clearSelection = () => currentTable.value.clearSelection();
defineExpose({
  clearSelection,
});
/* ------------------------ 导表 ----------------------*/
const exportInfo = reactive({
  fileName: '',
  type: 'xlsx',
});
const importDialog = ref();
const getFileType = (info: typeof exportInfo) => info.type;

function exportTableExcel(info: typeof exportInfo) {
  if (listData.value.length === 0) return showErrorMessage('请 先 查 询 数 据');
  if (info.fileName === '') return showErrorMessage('请输入文件名');
  // 导表方式，column配置和VNode  所见即所得
  if (props.tableColumn) {
    const header = tableColumn?.value?.filter(item => item.prop)?.map(item => item.label)!;
    const sheetProps = tableColumn?.value?.filter(item => item.prop)?.map(item => item.prop)!;
    const sheetData = listData.value.map(item =>
      sheetProps.map((prop: any, index: number) => {
        const { option, formatter } = tableColumn.value[index];
        if (option) return formatOption(item[prop], undefined, option, 'label');
        if (formatter) return formatter(item[prop]);
        return item[prop];
      }),
    );
    const fileName = `${info.fileName || props.excelOptions.fileName}.${info.type}`;
    const isXlsx = info.type === 'xlsx';
    const isJson = info.type === 'json';
    if (isXlsx) jsonToSheetXlsx<string[]>({ data: sheetData, header, filename: fileName });
    else if (isJson) {
      const link = document.createElement('a');
      link.download = fileName;
      link.href = `data:text/plain,${JSON.stringify(listData.value)}`;
      link.click();
    }
  } else {
    console.log('vNode导出');
  }
}

async function loadDataSuccess(excelDataList: any[]) {
  await showConfirm('此次导入是覆盖操作');
  for (const excelData of excelDataList) {
    const { results } = excelData;
    const excelTranDataArr = results.map((item: any) => {
      const transItem: any = {};
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          const col = tableColumn.value.find(col => col.label === key);
          const { prop, option } = col!;
          transItem[prop!] = formatOption(item[key], undefined, option, 'value');
        }
      }
      return transItem;
    });
    listData.value = excelTranDataArr;
    importDialog.value?.closeDialog();
  }
}

function importJsonFile(data: any) {
  listData.value = JSON.parse(data);
  importDialog.value?.closeDialog();
}

/* ------------------------ 表格基础 ----------------------*/
const trueEditList = computed(() => (allListData?.value?.length ? allListData.value! : listData.value));
const { pushItem, GenerateButtons } = useEditBtn(trueEditList, props.rowDefaultConfig, props.autoAddKey);

function useTableHandle() {
  const pag = reactive({
    page: 1,
    pageSize: 10,
    pageSizes: [10, 20, 50, 100],
    totalNum: computed(() =>
      isLocalPage.value ? unref(listData)?.length : props.allNumber ?? unref(listData)?.length,
    ),
  });

  const tableData = computed(() => {
    if (!isLocalPage.value) return listData.value;
    CompatibleWithDefaultConfig(props.rowDefaultConfig, listData);
    let localListValue = listData.value || [];
    if (props.filterConditions) {
      const keyValueArr = Object.entries(props.filterConditions);
      localListValue = localListValue.filter((item: any) => item[keyValueArr[0][0]] === keyValueArr[0][1]);
    }
    return localListValue?.filter(
      (o: any, index: number) =>
        index + 1 > (unref(pag.page) - 1) * unref(pag.pageSize) && index + 1 <= unref(pag.page) * unref(pag.pageSize),
    );
  });

  const layout = ref('total,sizes,prev,pager,next,jumper');
  const localLoading = ref(false);

  function handleSizeChange() {
    if (isLocalPage.value) return;
    localLoading.value = true;
    emit('getTableList', { ...searchParamFilterEmpty.value, page: pag.page, pageSize: pag.pageSize });
  }

  function handlePageChange() {
    if (isLocalPage.value) return;
    localLoading.value = true;
    emit('getTableList', { ...searchParamFilterEmpty.value, page: pag.page, pageSize: pag.pageSize });
  }

  function handleSortChange({ column, prop, order }: any) {
    listData.value.sort((a: { [x: string]: number }, b: { [x: string]: number }) => {
      if (order === 'ascending') {
        return typeof a[prop] === 'string'
          ? new Date(a[prop]).getTime() - new Date(b[prop]).getTime()
          : a[prop] - b[prop];
      }
      return typeof a[prop] === 'string'
        ? new Date(b[prop]).getTime() - new Date(a[prop]).getTime()
        : b[prop] - a[prop];
    });
  }

  watch(
    listData,
    (nv, ov) => {
      localLoading.value = false;
    },
    {
      deep: true,
    },
  );

  return { pag, tableData, layout, localLoading, handleSortChange, handleSizeChange, handlePageChange };
}

const { pag, tableData, layout, localLoading, handleSortChange, handleSizeChange, handlePageChange } = useTableHandle();

/* ------------------------ table表格的服务端筛选与所有数据的本地模糊筛选 ------------------------ */
const searchFormList = computed(() => tableSetting.value.tableColumn?.filter((item: TableColumn) => item.search));
let cloneList: any[] = [];

function searchList() {
  if (isLocalPage.value) {
    if (cloneList.length === 0) cloneList = listData.value;
    listData.value = getFilteredList(cloneList, searchParamFilterEmpty.value);
  } else {
    emit('getTableList', { ...searchParamFilterEmpty.value, page: pag.page, pageSize: pag.pageSize });
  }
}

function resetParam() {
  if (Object.keys(searchParam.value).length === 0) return showErrorMessage('没有可重置的查询参数');
  if (isLocalPage.value && cloneList.length !== 0) listData.value = cloneList;
  else {
    emit('getTableList', { page: pag.page, pageSize: pag.pageSize });
  }
  searchParam.value = {};
}
</script>

<style lang="scss" scoped>
.table-list {
  overflow: hidden;
  width: 100%;
}

.pagination {
  float: right;
  padding: 5px;
  margin-right: 20px;
}
</style>
