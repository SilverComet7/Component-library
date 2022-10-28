# 核心需求

1. 通过一份代码来维护能在vue2 vue3项目中共用的组件库，支持第三方UI框架，如Element-UI
2. 用户无需引用依赖和样式

# vue-demi+postInstall方案 构建适配vue2 vue3的通用组件库

## 案例

1. [sfc](https://juejin.cn/post/7055261325911719944#comment)

[//]: # (2. [jsx]&#40;https://juejin.cn/post/7055261325911719944#comment&#41;)

## 缺陷

1. 不能使用ui框架
2. slot不能使用，会报错

## 如何支持使用ui框架

1. 全部打包

# JS不打包的方案

1. 都js打包，在ts项目中使用allowJs提供js的使用能力
2. 不打包,提供.vue组件，项目中引入，将打包移交给具体的项目,

## [样式直接引入js文件](https://juejin.cn/post/7128313388580470820#heading-1)
