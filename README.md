monorepo通用业务包 

## package1  公共方法  
1. 抽离公共逻辑  for example: 兼容模板方法，通用restful api CRUD
## package2  vue2/3通用组件
2. vue-demi  开发共同的组件库 /  一份文件打包vue2  vue3的兼容方案   (按需导入,本地开发测试 vue2/vue3,docs)
   1. 方案1: template写法   打2个包 vue2，vue3 
   2. 方案2：npm安装SFC,适用方自定义解析SFC
   3. elp  elu  不使用ui框架
3. 组件 customEditPage  reward-table  table-list   dialogInstance  select  autocomplete 
## todo package3 element-ui/element-plus通用组件
