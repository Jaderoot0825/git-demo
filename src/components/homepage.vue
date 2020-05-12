<template>
<div class="container">
 
   




 <transition >
  <router-view ></router-view>
</transition> 


<nav class="mui-bar mui-bar-tab " >
			<router-link class="mui-tab-item-llb " to="/homepage/room">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/homepage/member">
				<span class="mui-icon mui-icon-personadd"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/homepage/shopcar">
				<span class=" mui-icon mui-icon-paperplane"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/homepage/search">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">我</span>
			</router-link>
            <!-- <router-view></router-view>  -->
		</nav>
</div>
  
</template>

<script>
export default {
      data(){
          return{

          }
      },
      mounted(){
          console.log(this.$route)

      },

      methods:{

      }
    
}
</script>

<style  scoped>
.yd-icon-search{
    font-size: 0.5rem !important;
    margin-right: 10px;
}
.yd-icon-more{
    font-size: 0.5rem !important;
}
.header{
    color: #000;
}
.container{
    /* margin: 50px 0; */
    overflow: hidden;
}
.v-enter
{
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to
{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active{
    transition: all 1s ease;
}
.mui-bar-tab .mui-tab-item-llb{
	display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-llb.mui-active{
color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon{
	top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
	
}
.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label{
	    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>