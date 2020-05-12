<template>
<div class="container">
     
<yd-navbar title="冻结账号">
    <router-link to="/home" slot="left" class="header">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
</yd-navbar>
<div class="poost">
<img class="icons" src="http://vue.ydui.org/img/logo.png?t=3.1415926" alt="">

</div>
<div class="nav">
<h5>发现微信被盗或者手机丢失，你可以冻结微信号</h5>
</div>

<div class="spanList">
 <span>防止坏人窃取你的个人隐私</span>
 <span>防止坏人冒用你的身份诈骗好友</span>
 <span>防止坏人盗刷你的微信支付资金</span>
 
</div>
<div class="aside">
 <yd-button size="large" type="primary">开始冻结</yd-button>
 
</div>


</div>
  
</template>

<script>

</script>

<style  scoped>
.nav{
    width: 300px;
    margin: 0 auto;
    font-size: 20px;
   color: #000;
}
.spanList{
    width: 200px;
    margin: 0 auto;
    margin-top: 10px;

}
.spanList span{
    display: block;
    text-align: center;
    color: #aaa;
}
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