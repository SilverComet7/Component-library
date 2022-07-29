<template>
  <div id='app'>
    <img alt='Vue logo' src='./assets/logo.png'>
    <DialogInstance msg='Welcome to Your Vue.js App' />
    <SketchRule msg='Welcome to Your Vue.js App' />
  </div>
</template>

<script>
import { DialogInstance } from '../../../packages/VueComponent/lib/v2/index';
import SketchRule from '../../../../vue3-sketch-ruler/lib/v2/index.es';

export default {
  name: 'App',
  components: {
    DialogInstance,
    SketchRule
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
