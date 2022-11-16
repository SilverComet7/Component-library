<script setup>
// import { DialogInstance } from "../../../../vue3-sketch-ruler/lib/v3/index.es.js";  // 案例打包
import { DialogInstance } from "../../../packages/VueComponent/lib/v3/index.js"; // 自身打包
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
<!--    <ImportExcel>导入测试</ImportExcel>-->
    <DialogInstance>DialogInstance</DialogInstance>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
