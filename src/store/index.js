import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import role from './modules/role'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        nextid: 5,
        inputValue: 'New Job',
        viewkey: 'all'
    },
    mutations: {
        initData(state, data) {
            state.list = data
        },
        addtodo(state) {
            const obj = {
                id: state.nextid,
                info: state.inputValue,
                done: false
            }
            state.list.push(obj)
            state.inputValue = ''
            state.nextid++
        },
        updateInputValue(state, inputValue) {
            state.inputValue = inputValue
        },
        removetodo(state, id) {
            const index = state.list.findIndex(item => {
                return item.id === id
            })
            if (index !== -1) {
                state.list.splice(index, 1)
            }
        },
        jobDone(state, { id, done }) {
            const index = state.list.findIndex(item => {
                return item.id === id
            })
            if (index !== -1) {
                state.list[index].done = done
            }
        },
        cleanDone(state) {
            state.list = state.list.filter(item => {
                return item.done === false
            })
        },
        changeViewKey(state, key) {
            state.viewkey = key
        }
    },
    actions: {
        addtodoAsync(context) {
            context.commit('addtodo')
        },
        getListData(context) {
            axios.get('/list.json').then(({ data }) => {
                context.commit('initData', data)
            })
        }
    },
    getters: {
        untodolist(state) {
            return state.list.filter(item => {
                return item.done === false
            }).length
        },
        infolist(state) {
            if (state.viewkey === 'undone') {
                return state.list.filter(item => {
                    return item.done === false
                })
            } else if (state.viewkey === 'done') {
                return state.list.filter(item => {
                    return item.done === true
                })
            } else return state.list
        }
    },
    modules: {
        role
    }
})
