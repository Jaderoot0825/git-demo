<template>
  <div class="container">
    <yd-navbar title>
      <router-link to="/retrievePassword" slot="left" class="header">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="poost">
      <img class="icons" src="http://vue.ydui.org/img/logo.png?t=3.1415926" alt />
    </div>
    <div >
      <ul class="yd-timeline-content">
        <li  class="yd-timeline-item">
          <em class="yd-timeline-icon"></em>
          <p >申诉适用范围：不能通过微信绑定得手机号/QQ号/邮箱登陆微信，以及忘记微信密码得用户</p>
        </li>
        <li  class="yd-timeline-item">
          <em class="yd-timeline-icon"></em>
          <p>申诉结果会在24小时内通过短信发到你得手机</p>
        </li>
        <li  class="yd-timeline-item">
          <em class="yd-timeline-icon"></em>
          <p >申诉成功后请根据指引通过微信号+新密码登陆</p>
        </li>
        
      </ul>
    </div>
    <div class="aside">
 <yd-button size="large" type="primary" >开始申诉</yd-button>
  <yd-checkbox-group v-model="chek">
        <yd-checkbox class="btnStyle" shape="circle">同意<a href="#">服务协议</a></yd-checkbox>
       
    </yd-checkbox-group>
    
  </div>
    <div class="footer">
      <router-link to="/retrievePassword">查询申诉进度</router-link>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            chek:true,
        }
    }
    
}

</script>

<style  scoped>
.header {
  color: red;
}
.icons {
  width: 100px;
}
.poost {
  margin-top: 50px;
  width: 100%;
  /* height: 500px; */
  display: flex;
  justify-content: center;
  align-content: center;
}
.aside {
  width: 150px;
  margin: 0 auto;
}
.center {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 5px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -36px;
  color: blue;
}
.yd-checkbox-icon{
    width: 10px !important;
    height: 10px !important;
}
</style>