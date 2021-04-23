import person from './person/person'
import first from './person/first'

const role = {
    namespaced: true,
    state: {
        rolelist: []
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        person,
        first
    }
}

export default role
