export const tableColumn = reactive([
  {
    label: '名称',
    prop: 'label',
  },
  {
    label: '搜索',
    prop: 'search',
    formatter: (row: any) => (row.prop ? <el-switch v-model={row.search} /> : ''),
  },
  {
    label: '隐藏',
    prop: 'isHidden',
    formatter: (row: any) => <el-switch v-model={row.isHidden} />,
  },
  {
    label: '排序',
    prop: 'sortable',
    formatter: (row: any) => (row.prop ? <el-switch v-model={row.sortable} /> : ''),
  },
]);
