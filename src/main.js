

//通过这种方式导入的是运行时版本 不包含编译器
import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import  './mui-master/dist/css/mui.css'
import './mui-master/examples/hello-mui/css/icons-extra.css'
// import './mui-master/dist/css/mui-icons-extra.ttf'
//引入mint ui 组件库
import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'
Vue.use(MintUi)

//第一步
import Vuex from 'vuex'
Vue.use(Vuex)
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload);

//Mint ui按需导入
// import { Header, Tabbar, TabItem,Swipe, SwipeItem ,Button} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

// import Vue from 'vue/dist/vue.js'
// resolive
var users =JSON.parse(localStorage.getItem('users') ||'[]')
const store = new Vuex.Store({
     state:{
            users:users,
            user:'',
     },
     mutations:{
      regiter(state,user){
     
                   console.log(state,user)
                   state.users.push(user)


                   localStorage.setItem('users',JSON.stringify(state.users))
                   
             },
         login(state,userName){
          state.user = userName
         }
     },
     getters:{
      
     }
})


import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import moment from "moment"

import app from "./App.vue"

import router from './router.js'
import YUDI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
Vue.use(YUDI)


Vue.filter('dateget',function (date){

  return moment(date).format('YYYY-MM-DD hh:mm:ss')
}) 
    

const vm  =new Vue({
    el:"#app",
    data:{
       
    },
    methods:{

    },
  
    render:c => c(app),
    router,
    store,
    
})