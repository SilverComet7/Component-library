import DefaultTheme from 'vitepress/theme'
import { DialogInstance} from '../../../packages/VueComponent/DialoogInstance/index'
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }:any){
        app.component('DialogInstance', DialogInstance)
    }
}
