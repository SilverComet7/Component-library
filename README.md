业务monorepo包 

## package1  方法  
1. 抽离公共方法逻辑  for example: 兼容模板方法
## package2  vue组件
2. vue-demi  开发共同的组件库 /  一份文件打包vue2  vue3的兼容方案   (按需导入,本地开发测试 vue2/vue3,docs)
   1. 方案1: template写法   打2个包 vue2，vue3 
   2. 方案2：npm安装SFC,适用方自定义解析SFC
   3. elp  elu  不使用ui框架
3. 组件 customEditPage  reward-table  table-list   dialogInstance  select  autocomplete 
