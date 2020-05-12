<template>
<div class="container">
     
<!-- <yd-navbar title="">
    <router-link to="#" slot="left" class="header">
            取消
        </router-link>
</yd-navbar> -->
<router-view></router-view>
</div>
  
</template>

<script>

</script>

<style  scoped>
.container{
    /* background:red; */
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