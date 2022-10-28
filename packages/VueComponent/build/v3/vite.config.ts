import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ["vue"],
  },
  build: {
    outDir: resolve(__dirname, "../../lib/v3"),
    minify: false, // 不压缩代码,让用户进行混淆
    lib: {
      entry: resolve(__dirname, "../../index.ts"),
      name: "commonVueCmp",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["lodash", "xlsx"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          // vue: 'Vue',
          lodash: "lodash",
        },
        exports: "auto",
      },
    },
  },
});
