

import VueRouter from 'vue-router'
import Home from './components/home.vue'
import member from './components/member.vue'
import search from './components/search.vue'
import shopcar from './components/shopcar.vue'
import emergencyFreeze from './components/function/emergencyFreeze.vue'
import retrievePassword from './components/function/retrievePassword.vue'
import iphone from './components/function/iphone.vue'
import qq from './components/function/qq.vue'
import email from './components/function/email.vue'
import appeal from './components/function/appeal.vue'
import login from './components/login/login.vue'
import register from './components/login/register.vue'
import homepage from './components/homepage.vue'
import room from './components/room.vue'
import chat from './components/chat.vue'






//设置路由规则
 const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
         {path:'/home',component:Home},
      
         {path:'/emergencyFreeze',component:emergencyFreeze},//紧急冻结
         {path:'/retrievePassword',component:retrievePassword},//找回密码
         {path:'/retrievePassword/iphone',component:iphone},//手机号找回
         {path:'/retrievePassword/qq',component:qq},//QQ号找回
         {path:'/retrievePassword/email',component:email},//邮箱找回
         {path:'/retrievePassword/appeal',component:appeal},//申诉
         {path:'/login',component:login},//登录
         {path:'/register',component:register},//注册
         {path:'/homepage',component:homepage,
        children:[
            {path:'room',component:room},//注册
            {path:'member',component:member},
            {path:'search',component:search},
            {path:'shopcar',component:shopcar},

        ]},//注册
        {path:'/chat/:name',component:chat},//注册
       
         
        
        
    ],
    linkActiveClass:'mui-active'
})



export default router