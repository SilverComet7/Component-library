# 需求功能

1. 通过一份代码来维护能在vue2或vue3项目中共用的二次封装Element-UI组件库
2. 使用方无需引用依赖和样式

# 方案1： vue-demi+postInstall

## 案例

1. [sfc方案](https://juejin.cn/post/7055261325911719944#comment)
   1. 缺陷 ?
         1. 不能使用三方ui框架
         2. slot使用，打包后会报错？

[//]: # (2. [jsx方案]&#40;https://juejin.cn/post/7055261325911719944#comment&#41;)


[//]: # (# JS方案)

[//]: # (1. 都js打包，在ts项目中使用allowJs提供js的使用能力)

# 方案2: 直接提供.vue组件，项目中直接引入，将打包处理移交给使用方。


# [样式直接引入到js文件](https://juejin.cn/post/7128313388580470820#heading-1)
