/**
* Created by cx on 2018/2/1.
* Include
* description 
*/
<template>
    <div class="wrap news-list-wrap">
        <div class="box">
            <div class="search-box">
                <div class="swiper-container search-items">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide search-item active"><span>图片新闻</span></div>
                        <div class="swiper-slide search-item"><span>法院动态</span></div>
                        <div class="swiper-slide search-item"><span>新闻发布会</span></div>
                        <div class="swiper-slide search-item"><span>审判保障</span></div>
                        <div class="swiper-slide search-item"><span>庭审直播</span></div>
                    </div>
                </div>
            </div>
            <div class="box-scroll news-list-scroll" id="boxScrollChild">
                <div>
                    <div class="swiper-container swiper-top">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="content-top news-1">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="content-top news-2">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="content-top news-3">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="content-top news-4">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-list-items">
                        <div class="news-list-item">
                            <div class="item-bg item-bg1"></div>
                            <div class="item-title">苍溪法院举行 “基本解决执行难” 新闻发布会</div>
                            <div class="item-time">2018-03-06</div>
                        </div>
                        <div class="news-list-item">
                            <div class="item-bg item-bg2"></div>
                            <div class="item-title">国家宪法日，法官们很忙</div>
                            <div class="item-time">2018-03-06</div>
                        </div>
                        <div class="news-list-item">
                            <div class="item-bg item-bg3"></div>
                            <div class="item-title">安吉法院在余村设立“两山”巡回...</div>
                            <div class="item-time">2018-03-06</div>
                        </div>
                        <div class="news-list-item">
                            <div class="item-bg item-bg4"></div>
                            <div class="item-title">切实满足人民群众多远司法需求</div>
                            <div class="item-time">2018-03-06</div>
                        </div>
                        <div class="news-list-item">
                            <div class="item-bg item-bg5"></div>
                            <div class="item-title">“百名红通”1号人员杨秀珠贪污、...</div>
                            <div class="item-time">2018-03-06</div>
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
                new Swiper ('.search-items', {
                    direction: 'horizontal',
                    slidesPerView:5,
                    loop: true,
                });
                new Swiper ('.swiper-top', {
                    direction: 'horizontal',
                    // 如果需要分页器
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