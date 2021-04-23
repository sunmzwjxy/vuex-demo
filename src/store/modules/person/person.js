const person = {
    namespaced: true,
    state: {
        person: 'person'
    },
    mutations: {
        changePerson(state) {
            state.person += ', do person/mutations/changePerson'
        }
    },
    actions: {
        changeAsync(context, payload) {
            // 自己的mutation
            context.commit('changePerson')
            // 自己的action
            context.dispatch('someActionAsync')
            // 兄弟组件的getter
            const first = context.rootGetters['role/first/getFirstName']
            console.log(first)
            // 兄弟组件的mutation
            context.commit('role/first/addName', {}, { root: true })
            // 兄弟的action
            context.dispatch('role/first/addNameAsync', {}, { root: true })
        },
        someActionAsync(context) {
            console.log(context.getters.getPerson)
        }
    },
    getters: {
        getPerson(state) {
            return 'do person/getters/getPerson ' + state.person
        }
    }
}

export default person
