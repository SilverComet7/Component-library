import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name:'method',
            fileName: 'index',
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            external: ['vue-demi',"lodash"],
            output: {
                globals: {
                    vue: 'Vue'
                },
                exports: 'auto'
            }
        }
    }
})
