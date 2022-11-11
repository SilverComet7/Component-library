<template>
  <div>
    <!-- 文本框 -->
    <template v-if="item.searchType == undefined || item.searchType == 'text'">
      <!-- <el-input v-model="searchParam[item.prop!]" placeholder="请输入" clearable></el-input> -->
      <el-autocomplete
        v-model="searchParam[item.prop!]"
        style="width: 200px"
        :fetch-suggestions="(queryString: string, cb: any) => querySearch(queryString,cb,item.prop!)"
        clearable
        placeholder="Please Input"
      />
    </template>
    <!-- 下拉选择框 -->
    <template v-if="item.searchType == 'select' || item.searchType == 'multipleSelect'">
      <el-select
        v-model="searchParam[item.prop!]"
        :multiple="item.searchType == 'multipleSelect'"
        placeholder="请选择"
        clearable
        filterable
      >
        <el-option
          v-for="itemValue in item.option"
          :key="itemValue.value"
          :label="itemValue.label"
          :value="itemValue.value"
        />
      </el-select>
    </template>

    <!-- 时间范围筛选 -->
    <template v-if="item.searchType == 'timeRange'">
      <TimeSelection v-model="searchParam[item.prop!]" no-label :is-second="false"></TimeSelection>
    </template>
  </div>
</template>

<script setup lang="ts">
import { TableColumn } from '../TableList.vue';
import TimeSelection from '@/components/Time/TimeSelection.vue';

// export interface ColumnProps {
//   // type: TypeProp; // index | selection | expand（特殊类型）
//   prop: string; // 单元格数据（非特殊类型必填）
//   label: string; // 单元格标题（非特殊类型必填）
//   width: number | string; // 列宽
//   isShow: boolean; // 是否显示
//   sortable: boolean; // 是否可排序（静态排序）
//   // fixed: FixedProp; // 固定列
//   search: boolean; // 是否为搜索项
//   searchType: string; // 搜索项类型
//   initSearchParam: string | number | boolean | any[]; // 搜索项初始值
//   option: { label: string; value: any }[]; // 枚举类型（渲染值的字典）
// }

interface SearchFormItem {
  item: TableColumn; // 具体每一个搜索项的配置
  searchParam: any; // 搜索参数
  listData: any[];
}

const props = defineProps<SearchFormItem>();
const { searchParam, listData } = toRefs(props);

const querySearch = (queryString: string, cb: any, prop: string) => {
  const results = queryString
    ? listData.value.filter(item => item[prop].includes(queryString)).map(item => item[prop])
    : listData.value.map(item => item[prop]);
  const filterResults = [...new Set(results)].map(item => ({ label: item, value: item }));
  cb(filterResults);
};
</script>

<style scoped></style>
