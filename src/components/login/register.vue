
<template>

    <div class="continer" >
         <yd-navbar title >
           <router-link to="/home" slot="left" class="header">
            <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
   <div class="btn-size">
  <yd-cell-group class="cell" >
        <yd-cell-item>
            <span slot="left" class="slort">用户名：</span>
            <yd-input  class="input" slot="right" required v-model="userName" max="10" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left" class="slort">密码：</span>
            <yd-input  class="input" slot="right" type="password" v-model="passwrod" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
         <yd-cell-item>
            <span slot="left" class="slort">确认密码：</span>
            <yd-input  class="input" slot="right" type="password" v-model="passwrod_agin" placeholder="请输入密码"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left" class="slort">手机号：</span>
            <yd-input slot="left" v-model="iphone" regex="mobile" placeholder="请输入手机号码"></yd-input>
               <yd-button slot="right" @click.native="obtain">验证码</yd-button>
        </yd-cell-item>
       <yd-cell-item>
            <span slot="left" class="slort">验证码：</span>
            <yd-input slot="right" v-model="code"  placeholder="验证码" ></yd-input>
        </yd-cell-item>
         <yd-cell-item>
            <span slot="left" class="slort">邮箱：</span>
            <yd-input slot="right" v-model="email" :debug="true" regex="email" placeholder="请输入邮箱地址"></yd-input>
        </yd-cell-item>

        
          <yd-cell-item>
            <span slot="left" class="slort">QQ：</span>
            <yd-input slot="right" v-model="qq" regex="^\d{5,12}$" placeholder="请输入您的QQ号码"></yd-input>
        </yd-cell-item>

        
    </yd-cell-group>
    <yd-button-group>
            <yd-button size="large" @click.native="regiter_cmf">注册</yd-button>
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
            passwrod:'',
            passwrod_agin:'',
            qq:'',
            email:'',
            iphone:'',
            code:'',
            num:'',
        }
    },
  
    methods:{
        obtain(){
            this.num = parseInt(Math.random()*1000000+100000); 
            
        
         Toast('你的验证码是'+this.num);
          
        },
        regiter_cmf(){
            console.log(this.$store.state.users)
            var list = this.$store.state.users;
            // console.log(list=='')
            if(this.code!=this.num){
                return Toast('验证码不正确');
            }
            list.forEach(element => {
                if(this.userName==element.userName){
                     Toast('用户已存在');
                     return
                }
            });
                    var users = {};
                    users.userName = this.userName;
                    users.passwrod = this.passwrod;
                    users.iphone = this.iphone;
                    users.qq = this.qq;
                    users.email = this.email;
                    this.$store.commit('regiter',users);
                    Toast('注册成功');
            this.$router.push({path:"/home",})

            
        }
    }
    
}
</script>

<style>
.cell{
    margin-top: 50px;
}
 .yd-input input{
      margin-bottom: 0px !important;
  }
  .slort{
      width: 70px;
      text-align: left;
  }
  .btn-size{
      width: 300px;
      margin:0 auto;
  }
    
</style>
