<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DialogInstance />
    <SketchRule />
  </div>
</template>

<script>
// import { DialogInstance } from '../../../packages/VueComponent/lib/v2/index.mjs';    // 本地打包
import { CompatibleWithDefaultConfig } from "../../../packages/CoreMethod/dist/index.js";
import { DialogInstance,SketchRule } from "../../../../vue3-sketch-ruler/lib/v2/index.es";  // 案例打包

export default {
  name: "App",
  components: {
    DialogInstance,
    SketchRule
  },
  mounted() {
    CompatibleWithDefaultConfig({a:1},[])
  },
  methods: {

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
