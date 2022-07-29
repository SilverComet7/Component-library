import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name:'method',
            fileName: 'index',
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            external: ['vue-demi'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                exports: 'auto'
            }
        }
    }
})
