<template>
    <div>
        <p>{{ person }}</p>
        <p>{{ getPerson }}</p>
        <a-button @click="changePerson">click me</a-button>
        <a-button @click="changeAsync">Click me Async</a-button>
        <p>{{ name }}</p>
    </div>
</template>

<script>
// 1
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('Role/person')

// 2
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'EditRole',
    data() {
        return {
            dialogVisible: false
        }
    },
    computed: {
        // 1
        // ...mapState(['person']),
        // ...mapGetters(['getPerson'])
        // 2
        ...mapState('role/person', ['person', 'age']), // many
        ...mapGetters('role/person/', ['getPerson']),
        // first
        ...mapState('role/first', ['name']),
        ...mapGetters('role/first', ['getFirstName'])
    },
    methods: {
        // 1
        // ...mapMutations(['changePerson']),
        // ...mapActions(['changeAsync'])
        // 2
        ...mapMutations('role/person', ['changePerson']),
        ...mapActions('role/person', ['changeAsync'])
    }
}
</script>

<style lang="less" scoped></style>
