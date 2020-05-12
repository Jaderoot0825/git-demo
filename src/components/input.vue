
<template>


        <div class="tabbar">
            <div class="chat_center">
                <input type="text" v-model="content">
            </div>
            <div class="chat_right">
                <yd-button type="danger" @click.native="issue">发送</yd-button>
            </div>
        </div>

</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            content:'',

        }
    },
  
    methods:{
        issue(){
            this.$emit('add',this.content)
        }

    }
    
}
</script>

<style>
  .chat_center input{
      margin: 0px !important;
      padding: 0;
      font-size: 15px;
  }
    .chat_center,.chat_right{
        display: inline-block;
        /*height: 55px;*/
        /*line-height: 55px;*/
    }
    .tabbar{
        /*position: fixed;*/
        bottom: 0;
    }

    
</style>
