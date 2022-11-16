<script lang="tsx">
import { defineComponent, ref } from "vue";
import { ElButton, ElDialog } from "element-plus";

export default defineComponent({
    components: { ElButton, ElDialog },
    props: {
        buttonName: { type: String, default: "创建" },
        content: { type: Array, default: [] },
        checkHandle: Function,
    },
    emits: ["update:content"],
    setup(props) {

    },
    render() {
        const dialogVisible = ref(false);
        return (<el-button>
            < slot>按钮</slot>
        < /el-button>);
    },
    expose: [],
});
</script>
