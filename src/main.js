import Vue from 'vue'
import router from './router' //./表示当前目录，没有./则表明是插件
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
//import env from './env'

const mock =false;   //mock开关
if(mock){
  require('./mock/api');
}

//根据前端的跨域方式做调整
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;  //超时设置
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL=env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data; //接口返回的值,是个对象
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    window.location.href='/#/login';
  }else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip=false  //生产环境的提示，

new Vue({
  router,
  render: h=>h(App),
}).$mount('#app')