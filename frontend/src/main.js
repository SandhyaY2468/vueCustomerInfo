import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import VueFormWizard from 'vue-form-wizard';
import Vuelidate from 'vuelidate';
import VueFormGenerator from 'vue-form-generator';
import Customer from './components/Customer.vue';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import '../node_modules/nprogress/nprogress.css';


Vue.use(VueFormGenerator);
Vue.use(Vuelidate);
Vue.use(VueFormWizard);
Vue.use(VueAxios,axios);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes=[
  {
    name:'Customer',
    path:'/customer',
    component:Customer
  }
]
const router=new VueRouter({
  mode:'history',routes:routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
