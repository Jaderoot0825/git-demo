<template>
<div class="container">
     
<yd-navbar title="">
    <router-link to="#" slot="left" class="header">
            取消
        </router-link>
</yd-navbar>
<div class="poost">
<img class="icons" src="http://vue.ydui.org/img/logo.png?t=3.1415926" alt="">

</div>
<div class="aside">
    <router-link  to="/login" >
 <yd-button size="large" type="primary">登录</yd-button>
 </router-link>
 <span class="center">使用QQ或微信号登录</span>
  <router-link  to="/register" >
<yd-button size="large" type="danger">注册</yd-button>
 </router-link>
 <span  class="center">如果没有QQ那么可以使用手机号注册</span>
</div>
<div class="footer">
<router-link to="/retrievePassword">找回密码</router-link>
&nbsp;
<router-link to="/emergencyFreeze">紧急冻结</router-link>

</div>

</div>
  
</template>

<script>

</script>

<style  scoped>
.header{
    color: red;
}
.icons{
    width: 100px;

}
.poost{
    margin-top:100px;
    width: 100%;
    /* height: 500px; */
    display: flex;
    justify-content: center;
    align-content: center;
}
.aside{
    width: 300px;
    margin: 0 auto;

}
.center{
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 5px;
}
.footer{
    position: fixed;
    bottom: 0;
    left: 50%;
    margin-left: -53px;
    color: blue;

}
</style>