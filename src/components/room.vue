<template>
    <div>
             <yd-navbar title >
           <div  slot="left" class="header">
            <h1>
                V信
            </h1>
      </div>
       <div  slot="right" class="header">
           <yd-icon name="search"></yd-icon>
          <yd-icon name="more"></yd-icon>
      </div>
    </yd-navbar>

    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item, index) in list" :key="index">
					<router-link :to="'/chat/'+item.user" >
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">    
							{{item.describe}}
							<!-- <p class="mui-ellipsis">{{item.describe}}</p> -->
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],

        }
    },
    mounted(){
         this.getList();
         console.log(this.$store.state.user)
    },
    methods:{
        getList(){
            this.$http.get('../user.json').then(res=>{
                console.log(res.body.list)
                // this.list = res.body.list
                res.body.list.forEach((item,index)=>{
                        if(item.user!=this.$store.state.user){
                            console.log(this.$store.state.user)
                            this.list.push(item)
                        }
                })
            })
        }
    }
    
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