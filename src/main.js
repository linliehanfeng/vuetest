import Vue from 'vue'
import vueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Login from './components/Login.vue'
import Main from './components/Main.vue'


Vue.use(ElementUI)

const router=new vueRouter({
  routes:[
    {
      path:"/",
      component:Login
    },{
       path:"/main",
      component:Main
    }
  ]
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
