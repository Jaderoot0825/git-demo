<template>
    <div>
        <!--             <yd-navbar title >-->
        <!--                       <div  slot="left" class="header">-->

        <!--                            <h1>-->
        <!--                                V信-->
        <!--                            </h1>-->

        <!--                       </div>-->
        <!--            </yd-navbar>-->


        <div class="content">
            <div v-for="(item,index) in contentArr" :key="index">
                <div v-if="item.user=='lisi'">


                    <p class="time">
                        {{item.date}}
                    </p>
                    <div>
                              <span class="chat">

                               {{item.content}}
                             <i class="iconfont">&#xe75e; </i>
                        </span>
                        <img class="right" :src="item.src">

                    </div>
                </div>
                <div v-else>
                    <p class="time">
                        {{item.date}}
                    </p>
                    <div style="float: left">
                        <img class="left" :src="item.src">

                        <span class="chat-left">
                                   <i class="iconfont">&#xe60d; </i>

                               {{item.content}}

                        </span>


                    </div>
                </div>
            </div>


        </div>
        <div class="footer">
            <input_box @add="add"></input_box>

            <input_box @add="add2"></input_box>
        </div>
    </div>
</template>
<script>
    var record = JSON.parse(localStorage.getItem('record') || '[]')
    import input_box  from './input.vue'
    export default {
        data() {
            return {
                list: [],
                contentArr: record,
                content: ''
            }
        },
        mounted() {
            console.log(this.$route.params.name)
            console.warn(this.contentArr)

            this.getList();
        },
        methods:    {
            getList() {
                this.$http.get('../user.json').then(res => {
                    console.warn(res.body)
                    var arr = res.body.list
                    for (let key in arr) {
                        console.warn(this.$store.state.user)
                        if (arr[key].user == this.$store.state.user) {
                            this.list = arr[key]

                        }
                        console.warn(arr[key].user == this.$store.state.user )
                    }

                })
            },
            add(data) {

                let scroll = document.querySelector('.content')
                console.log(scroll.scrollHeight + 'px')
                console.log(scroll.offsetTop)
                // scroll.offsetTop
                scroll.scrollTop = scroll.scrollHeight +100;
                console.log(scroll.pageYOffset)
                let obj = this.list
                console.warn(data)
                this.contentArr.push({
                    user: 'zhangsan',
                    src: '../images/boy.jpg',
                    content: data,
                    date: new Date().toLocaleString(),
                })

                localStorage.setItem('record', JSON.stringify(this.contentArr))

            },
            add2(data){
                let obj = this.list
                console.warn(data)
                this.contentArr.push({
                    user: 'lisi',
                    src: '../images/dog.jpg',
                    content: data,
                    date: new Date().toLocaleString(),
                })
                let scroll = document.querySelector('.content')

                scroll.offset;
                scroll.scrollTop = scroll.scrollHeight + 'px';

                localStorage.setItem('record', JSON.stringify(this.contentArr))
                console.warn(this.contentArr)
            }
        },
        components:{
            input_box,
        }

    }
</script>
<style scoped>
    .footer{
        width: 100%;
        position: fixed;
        background: #fff;
        bottom: 0;
        display: flex;
        justify-content: space-around;
    }
    .chat .iconfont {
        width: 5px;
        height: 5px;
        color: green;
        position: absolute;
        top: 5px;
        right: -1px;
    }

    .chat-left .iconfont {
        width: 5px;
        height: 5px;
        color: green;
        position: absolute;
        top: 5px;

        left: -14px;
    }

    .right,
    .left {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .time {
        text-align: center;
    }

    @font-face {
        font-family: 'iconfont';  /* project id 1052172 */
        src: url('//at.alicdn.com/t/font_1052172_c5qvcda3bad.eot');
        src: url('//at.alicdn.com/t/font_1052172_c5qvcda3bad.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1052172_c5qvcda3bad.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1052172_c5qvcda3bad.woff') format('woff'),
        url('//at.alicdn.com/t/font_1052172_c5qvcda3bad.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1052172_c5qvcda3bad.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    .chat {
        background: green;
        padding: 10px;
        margin: 10px;
        width: fit-content;
        /*display: block;*/
        position: relative;
        top: -20px;
        right: 10px;
        border-radius: 10px;

    }

    .chat-left {
        background: green;
        padding: 10px;
        margin: 10px;
        width: fit-content;
        /*display: block;*/
        position: relative;
        top: -20px;
        left: 10px;
        border-radius: 10px;

    }

    .content > div > div>div {
        float: right;
        margin-right: 10px;
    }

    .content > div>div {
        width: 100%;
        height: 100px;
    }
    .content{
        margin-bottom: 55px;
        height: 100px;
        position: relative;

    }

    /*.mui-bar-tab .mui-tab-item-llb {*/
    /*    display: table-cell;*/
    /*    overflow: hidden;*/
    /*    width: 1%;*/
    /*    height: 50px;*/
    /*    text-align: center;*/
    /*    vertical-align: middle;*/
    /*    white-space: nowrap;*/
    /*    text-overflow: ellipsis;*/
    /*    color: #929292;*/
    /*}*/

    /*.mui-bar-tab .mui-tab-item-llb.mui-active {*/
    /*    color: #007aff;*/
    /*}*/

    /*.mui-bar-tab .mui-tab-item-llb .mui-icon {*/
    /*    top: 3px;*/
    /*    width: 24px;*/
    /*    height: 24px;*/
    /*    padding-top: 0;*/
    /*    padding-bottom: 0;*/

    /*}*/

    /*.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {*/
    /*    font-size: 11px;*/
    /*    display: block;*/
    /*    overflow: hidden;*/
    /*    text-overflow: ellipsis;*/
    /*}*/



    .chat_center input {
        width: 250px;
        margin: 0;
        padding: 0;
        font-size: 20px;
    }

    /*.mui-bar-tab {*/
    /*    height: 50px;*/
    /*    display: flex;*/
    /*    justify-content: space-around;*/
    /*    align-content: center;*/
    /*}*/

</style>