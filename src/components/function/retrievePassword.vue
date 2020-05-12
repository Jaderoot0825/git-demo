<template>
  <div>
    <yd-navbar title='找回账号密码'>
      <router-link to="/home" slot="left" class="header">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="yd-cell-box demo-small-pitch">
      <div class="yd-cell">
        <router-link to="/retrievePassword/iphone" class="yd-cell-item top">
          <div class="yd-cell-left">
              <i class="yd-icon-phone3 icon" ></i>
            <!---->
            <div>已绑定手机号<br>可以通过手机号+短信验证码登录</div>
            
            </div>
          <div class="yd-cell-right yd-cell-arrow"></div>
        </router-link>
        <router-link to="/retrievePassword/qq" class="yd-cell-item top">
          <div class="yd-cell-left">
              <i class="yd-icon-qq icon" ></i>
            <!---->
            <!-- <div>已绑定手机号<br>可以通过手机号+短信验证码登录</div> -->
            <div>已绑定QQ号<br>可以通过QQ号+QQ密码来重设密码</div>
               </div>
          <div class="yd-cell-right yd-cell-arrow"></div>
        </router-link>
         <router-link to="/retrievePassword/email" class="yd-cell-item top">
          <div class="yd-cell-left">
              <i class="yd-icon-compose icon"></i>
            <!---->
            <!-- <div>已绑定手机号<br>可以通过手机号+短信验证码登录</div> -->
            <div>已绑定邮箱<br>可以通过邮箱地址重设密码</div>
               
          </div>
          <div class="yd-cell-right yd-cell-arrow"></div>
        </router-link>
      </div>
    </div>

     <span style="color:#bbb;">无法通过以上方式找回账户密码</span>
      <div class="yd-cell-box demo-small-pitch">
      <div class="yd-cell">
        <router-link to="/retrievePassword/appeal" class="yd-cell-item ">
          <div class="yd-cell-left">
              
            <!---->
            <div>申诉找回微信账号密码</div>
            
            </div>
          <div class="yd-cell-right yd-cell-arrow"></div>
        </router-link>
      
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    geetlunbo() {}
  },
  created() {}
};
</script>
<style scoped>
.icon{
    font-size: 0.6rem;
    color: #aaa;
    margin-right: 10px;
}

.top{
    height: 50px;
    border-top: 1px solid #ddd;
}
body{
    background: #ccc;
}
</style>