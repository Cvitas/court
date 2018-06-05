/**
* Created by cx on 2018/2/1.
* Include
* description 
*/
<template>
    <div class="wrap">
        <div class="box">
            <div class="box-scroll user-scroll" id="boxScrollChild">
                <div>
                    <div class="content-top user-bg">
                        <span class="content-top-phone"></span>
                        <span class="content-top-name">张某某</span>
                        <span class="content-top-user-info">32 岁&nbsp;&nbsp;&nbsp;162cm&nbsp;&nbsp;&nbsp;62.0kg</span>
                    </div>
                    <div class="user-list">
                        <div class="user-item" @click="goRouter(0)">
                            <span><i class="icon-gongyi color1"></i>修改密码</span>
                            <span class="user-detail">></span>
                        </div>
                        <div class="user-item" @click="goRouter(1)">
                            <span class=""><i class="icon-service color2"></i>修改个人信息</span>
                            <span class="user-detail">></span>
                        </div>
                        <div class="user-item" @click="goRouter(2)">
                            <span class=""><i class="icon-cart-total color3"></i>材料证据</span>
                            <span class="user-detail">></span>
                        </div>
                        <div class="user-item" @click="goRouter(3)">
                            <span class=""><i class="icon-dingdan color4"></i>文书送达</span>
                            <span class="user-detail">></span>
                        </div>
                        <div class="user-item" @click="goRouter(4)">
                            <span class=""><i class="icon-qianbao color5"></i>联系法官</span>
                            <span class="user-detail">></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import iScroll from 'iScroll'
    export default {
        data() {
            return {
            }
        },
        mounted(){
            setTimeout(()=>{
                new iScroll('#boxScrollChild',{
                    probeType:2,
                    bounceTime: 250,
                    bounceEasing: 'quadratic',
                    mouseWheel:false,
                    scrollbars:false,
                    fadeScrollbars:true,
                    interactiveScrollbars:false,
                    preventDefault:false
                });
            },2000)
        },
        methods:{
            goRouter(type){
                switch(type){
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        this.$router.push("wenshu");
                        break;
                    case 4:
                        this.$router.push("contact");
                        break;
                }
            }
        }
    }
</script>