// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue()
    ],
    build: {
        outDir: 'lib/v3',
        minify: false, // 不压缩代码,方便开发调试
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name:'VueComponent',
            fileName: 'index',
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue','vue-demi'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                },
                exports: 'auto'
            }
        }
    }
})
