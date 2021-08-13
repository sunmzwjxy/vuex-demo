<template>
    <div id="app">
        <a-input placeholder="请输入任务" class="my_ipt" :value="inputValue" @change="handlechange"></a-input>
        <a-button type="primary" @click="addNewItem">添加事项</a-button>

        <a-list bordered :dataSource="infolist" class="dt_list">
            <a-list-item slot="renderItem" slot-scope="item, index">
                {{ index }}
                <a-checkbox
                    :checked="item.done"
                    @change="
                        e => {
                            doneChange(e, item)
                        }
                    "
                    >{{ item.info }}</a-checkbox
                >
                <a slot="actions" @click="remove(item)">Delete</a>
            </a-list-item>
            <div slot="footer" class="footer">
                <!-- 未完成的任务个数 -->
                <span>{{ untodolist }}条剩余</span>
                <!-- 操作按钮 -->
                <a-button-group>
                    <a-button :type="viewkey === 'all' ? 'primary' : 'default'" @click="changelist('all')">全部</a-button>
                    <a-button :type="viewkey === 'undone' ? 'primary' : 'default'" @click="changelist('undone')">未完成</a-button>
                    <a-button :type="viewkey === 'done' ? 'primary' : 'default'" @click="changelist('done')">已完成</a-button>
                </a-button-group>
                <!-- 把已经完成的任务清空 -->
                <a @click="cleanDone">清除已完成</a>
            </div>
        </a-list>
        <Home></Home>
    </div>
</template>

<script>
import Home from './components/home'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'App',
    data() {
        return {}
    },
    computed: {
        ...mapState(['inputValue', 'viewkey']),
        ...mapGetters(['untodolist', 'infolist'])
    },
    methods: {
        ...mapMutations(['updateInputValue', 'removetodo', 'jobDone', 'cleanDone', 'changeViewKey']),
        ...mapActions(['addtodoAsync', 'getListData']),
        handlechange(e) {
            this.updateInputValue(e.target.value)
        },
        addNewItem() {
            if (this.inputValue.trim().length <= 0) {
                this.$message.warning('New Job info can not be empty!')
                return
            }
            this.addtodoAsync()
        },
        remove(item) {
            this.removetodo(item.id)
        },
        doneChange(e, item) {
            const para = {
                id: item.id,
                done: e.target.checked
            }
            this.jobDone(para)
        },
        changelist(key) {
            this.changeViewKey(key)
        }
    },
    created() {
        this.getListData()
    },
    components: {
        Home
    }
}
</script>

<style scoped>
#app {
    padding: 10px;
}

.my_ipt {
    width: 500px;
    margin-right: 10px;
}

.dt_list {
    width: 500px;
    margin-top: 10px;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
