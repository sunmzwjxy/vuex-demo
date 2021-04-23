import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import Antd from 'ant-design-vue'        // 全局导入所有组件
import 'ant-design-vue/dist/antd.css'
import './plugins/antd.js'

Vue.config.productionTip = false
// Vue.use(Antd)

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
