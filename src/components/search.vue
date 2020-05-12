<template>
    <div>
             <yd-navbar title >
           <div  slot="left" class="header">
           
      </div>
       <div  slot="right" class="header">
         <yd-icon name="video"></yd-icon>
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
.yd-icon-video{
    font-size: 0.5rem !important;
    margin-right: 10px;
}

    
</style>