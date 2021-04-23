const first = {
    namespaced: true,
    state: {
        name: 'First'
    },
    mutations: {
        addName(state) {
            state.name += ' do first/mutations/addName!'
        }
    },
    actions: {
        addNameAsync(context) {
            context.commit('addName')
        }
    },
    getters: {
        getFirstName(state) {
            return 'do first/getters/getFirstName = ' + state.name
        }
    }
}

export default first
