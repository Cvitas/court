/**
 * Created by cx on 2017/8/16.
 * Include
 * description 预定 app first
 */
<template>
    <div class="wrap">
        <div class="box">
            <div class="box-scroll" id="boxScrollChild">
                <div>
                    <div class="swiper-container swiper-top">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="content-top home-bg">
                                     <span class="content-top-address"></span>
                                    <span class="content-top-title"></span>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="content-top home-bg2">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="content-top home-bg3">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-broadcast">
                        <span class="pl10 red">带你领略别样风光：</span>
                        <div class="swiper-container trip-items">
                            <div class="swiper-wrapper detail-img">
                                <div class="swiper-slide"><span class="pl10">旅游好攻略，黄泽寺欢迎您!</span></div>
                                <div class="swiper-slide"><span class="pl10">旅游好攻略，千佛崖风景区欢迎您!</span></div>
                                <div class="swiper-slide"><span class="pl10">旅游好攻略，广元剑门关欢迎您!</span></div>
                                <div class="swiper-slide"><span class="pl10">旅游好攻略，明月峡欢迎您!</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="content-list">
                        <div class="content-item half no-left bg-canyu">
                            <span class="item-1">则天南路居民参与共建智慧社区</span>
                        </div>
                        <div class="content-item half no-right bg-zhsq">
                            <span class="item-1">智慧社区全新平台上线了邀您参与</span>
                        </div>
                        <div class="content-item  no-left">
                            <i class="icon-xf item-icon" style="color:#EC7D34;"></i>
                            <span class="item-name">信访</span>
                        </div>
                        <div class="content-item">
                            <i class="icon-tj item-icon" style="color:#F7B400;"></i>
                            <span class="item-name">调解</span>
                        </div>
                        <div class="content-item">
                            <i class="icon-jd item-icon" style="color:red;"></i>
                            <span class="item-name">禁毒</span>
                        </div>
                        <div class="content-item no-right">
                            <i class="icon-jz item-icon" style="color:#3E98FF;"></i>
                            <span class="item-name">矫正</span>
                        </div>
                        <p class="content-more">
                            <span class="fl">生活圈</span>
                            <span @click="goMore()" class="fr">查看全部 ></span>
                        </p>
                    </div>
                    <div class="content-list list-other">
                        <div class="content-item  no-left half item-big bg-yfdt">
                            <span class="item-name">联防动态</span>
                        </div>
                        <div class="content-item">
                            <span class="item-name">代表委员进驻社区</span>
                        </div>
                        <div class="content-item">
                            <span class="item-name">民兵队伍</span>
                        </div>
                        <div class="content-item no-right">
                            <span class="item-name">社区论坛</span>
                        </div>
                        <div class="content-item no-right">
                            <span class="item-name">建言献策</span>
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
    export default{
        data(){
            return{
            }
        },
        mounted(){
            setTimeout(()=>{
                new Swiper ('.swiper-top', {
                    direction: 'horizontal',
                    loop: true,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    autoplay:3000
                });
                new Swiper ('.trip-items', {
                    direction: 'vertical',
                    loop: true,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    autoplay:3000
                });

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
            },100)
        },
        methods:{
            goMore(){
                this.$router.push("/")
            }
        }
    }
</script>
