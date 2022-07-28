import DefaultTheme from 'vitepress/theme'
// import DialogInstance from '../../../packages/VueComponent/DialoogInstance/src/index.vue'
import { DialogInstance } from '../../../packages/VueComponent/lib/v2/index.js' // 这里可以换成打包后的
import 'element-plus/dist/index.css'

// @ts-ignore
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('DialogInstance', DialogInstance)
        // app.component('DialogInstanceWrap', DialogInstanceWrap)
    }
}
