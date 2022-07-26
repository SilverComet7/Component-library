import DefaultTheme from 'vitepress/theme'
import DialogInstance from '../../../packages/VueComponent/DialogInstance.vue'
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('DialogInstance', DialogInstance)
    }
}
