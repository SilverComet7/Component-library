/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"],
    },
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  build: {
    outDir: "lib",
    minify:false, // 不压缩代码
    lib: {
      entry: "./src/index.ts",
      name: "method",
      fileName: "index",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["vue-demi", "lodash"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "auto",
      },
    },
  },
});
