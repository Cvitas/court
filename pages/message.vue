/**
* Created by cx on 2018/6/5.
* Include
* description 消息
*/
<template>
    <div class="wrap message-wrap">
        <div class="box">
            <div class="box-scroll message-scroll" id="boxScrollChild">
                <div>
                    <div class="message-items">
                        <div class="message-item">
                            <span class="no-read"></span>
                            <p class="item-email">dangshiren@cangxi-Email.com</p>
                            <p class="item-content">回复：您好，感谢院长帮我们处理</p>
                            <p class="item-time">昨天</p>
                        </div>
                        <div class="message-item">
                            <span class="no-read"></span>
                            <p class="item-email">dangshiren@cangxi-Email.com</p>
                            <p class="item-content">回复：我的案件进展</p>
                            <p class="item-time">昨天</p>
                        </div>
                        <div class="message-item">
                            <span class="no-read"></span>
                            <p class="item-email">dangshiren@cangxi-Email.com</p>
                            <p class="item-content">回复：我的文书快递消息</p>
                            <p class="item-time">昨天</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import iScroll from 'iScroll'
    import Swiper from 'swiper'
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
        },
    }
</script>