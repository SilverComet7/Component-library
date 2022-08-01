<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DialogInstance msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import { DialogInstance } from '../../../packages/VueComponent/lib/v2/index.mjs';
import { CompatibleWithDefaultConfig } from "../../../packages/CoreMethod/dist/index.js";
import { DialogInstance } from "../../../../vue3-sketch-ruler/lib/v2/index.es";

export default {
  name: "App",
  components: {
    DialogInstance,
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
