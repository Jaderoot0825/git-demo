<template>
    <div>
          <yd-navbar title >
           <div  slot="left" class="header">
            <h1>
                通讯录
            </h1>
      </div>
       <div  slot="right" class="header">
           <yd-icon name="search"></yd-icon>
          <yd-icon name="more"></yd-icon>
      </div>
    </yd-navbar>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header{
    color: #000;
}
.yd-icon-search{
    font-size: 0.5rem !important;
    margin-right: 10px;
}
.yd-icon-more{
    font-size: 0.5rem !important;
}
    
</style>