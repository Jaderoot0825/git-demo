
<template>

    <div class="continer" >
         <yd-navbar title >
           <router-link to="/home" slot="left" class="header">
            <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
   <div class="btn-size">
  <yd-cell-group class="cell">
        <yd-cell-item>
            <span slot="left" class="slort">用户名：</span>
            <yd-input  class="input" slot="right" required v-model="userName" max="10" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left" class="slort">密码：</span>
            <yd-input  class="input" slot="right" type="password" v-model="passwrod" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
     <yd-button-group>
            <yd-button size="large" @click.native="login_cmf">登录</yd-button>
        </yd-button-group>
 
    
 
 </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            userName:'',
            passwrod:''
        }
    },
  
    methods:{
        login_cmf(){
            var flag;
            console.log(this.$store.state.users)
            var list = this.$store.state.users;
            var user ={
                
                userName:this.userName,
                passwrod:this.passwrod,
            } 
            console.log(list.indexOf(user)==-1)
            if(list==''){
                return Toast('你还没有注册，请先注册');
                
            }else{
                flag =1;
                   // list.forEach(item => {
                   //     console.warn(item)
                   //     if(this.userName == item.userName && this.passwrod == item.passwrod){
                   //           return flag =1;
                   //     }else if(this.userName == item.userName && this.passwrod != item.passwrod){
                   //         return flag =2;
                   //     }else{
                   //         return flag =3;
                   //     }
                   //
                   // });
                   if(flag==1){
                      Toast('登录成功');
                       this.$store.commit('login',this.userName);
                     this.$router.push({path:"/homepage/room",query:{userName:this.userName}})

                   }else if(flag==2){
                       Toast('密码错误');
                   }else{
                       Toast('用户不存在');
                   }



                // if(list.indexOf(user)!=-1){
                //      
                // }else{
                //  Toast('登录失败');
                // }
               
           
            }
           

            
        }
    }
    
}
</script>

<style>
.cell{
    margin-top: 150px;
}
 .yd-input input{
      margin-bottom: 0px !important;
  }
  .slort{
      width: 50px;
      text-align: right;
  }
  .btn-size{
      width: 300px;
      margin:0 auto;
  }
    
</style>
