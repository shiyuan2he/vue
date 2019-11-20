// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NormailizeCss from 'normalize.css'
// 仅引入用到的图标以减小打包体积
//import 'vue-awesome/icons/flag'

// 或者在不关心打包体积时一次引入全部图标
import 'vue-awesome/icons'

/* 任选一种注册组件的方式 */
import Icon from 'vue-awesome/components/Icon'

// 全局注册（在 `main .js` 文件中）
Vue.component('icon', Icon)

// 或局部注册（在组件文件中）
// export default {
//   components: {
//     Icon
//   }
// }
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})