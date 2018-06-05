/**
* Created by cx on 2018/6/4.
* Include
* description 裁判文书列表
*/
<template>
    <div class="wrap tingshen-wrap">
        <div class="box">
            <div class="box-scroll tingshen-scroll" id="boxScrollChild">
                <div>
                    <div class="tingshen-search">
                        <input type="text" placeholder="案名/案号/描述"/>
                        <span class="icon-search"></span>
                    </div>
                    <div class="swiper-container swiper-top">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="content-top tingshen-1">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="content-top tingshen-2">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="content-top tingshen-3">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="content-top tingshen-4">
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="tingshen-bg"></div>
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
                new Swiper ('.swiper-top', {
                    direction: 'horizontal',
                    // 如果需要分页器
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    pagination: '.swiper-pagination',
                    loop:true,
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
            },2000)
        },
        methods:{
        },
    }
</script>