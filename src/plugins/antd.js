import Vue from 'vue'
import { Button, message, notification, Input, List, Checkbox } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Input)
Vue.use(List)
Vue.use(Checkbox)
Vue.prototype.$message = message
Vue.prototype.$notification = notification
