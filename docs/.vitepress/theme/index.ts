import DefaultTheme from 'vitepress/theme'
// import { DialogInstance} from '../../../packages/VueComponent/lib/v3/index.js'
// import { DialogInstance,SketchRule } from "../../../../vue3-sketch-ruler/lib/v3/index.es";
import  DialogInstance  from "../../../../vue3-sketch-ruler/src/DialogInstance/index.vue";
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }:any){
        app.component('DialogInstance', DialogInstance)
        // app.component('SketchRule', SketchRule)
    }
}
