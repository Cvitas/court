/**
* Created by cx on 2018/2/1.
* Include
* description 
*/
<template>
    <div>
        <div class="flashScreen" :class="appLoaded?'loaded':''"></div>
        <div class="wrap">
            <div class="box">
                <div class="box-scroll" id="boxScroll">
                    <div>
                        <div class="swiper-container swiper-home-top">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="content-top home-bg">
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
                                <div class="swiper-slide">
                                    <div class="content-top home-bg4">
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination swiper-home-pagination"></div>
                        </div>
                        <div class="content-broadcast">
                            <span class="pl10 icon-laba blue-bold"></span>
                            <div class="swiper-container trip-items trip-items-app">
                                <div class="swiper-wrapper detail-img blue">
                                    <div class="swiper-slide"><span class="pl10">法院快线：内容内容内容内容内容内容内容内容</span></div>
                                    <div class="swiper-slide"><span class="pl10">法院快线：内容内容内容内容内容内容内容内容</span></div>
                                    <div class="swiper-slide"><span class="pl10">法院快线：内容内容内容内容内容内容内容内容</span></div>
                                    <div class="swiper-slide"><span class="pl10">法院快线：内容内容内容内容内容内容内容内容</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="content-list list-life">
                            <P class="content-title">司法公开</P>
                            <div class="content-item  no-left" @click="goRouter(0)">
                                <i class="icon-chaxun item-icon" style="color:#FFCB65;"></i>
                                <span class="item-name">案件查询</span>
                            </div>
                            <div class="content-item" @click="goRouter(1)">
                                <i class="icon-tingshen item-icon" style="color:#DC5322;"></i>
                                <span class="item-name">庭审现场</span>
                            </div>
                            <div class="content-item" @click="goRouter(2)">
                                <i class="icon-police item-icon" style="color:#0087D0;"></i>
                                <span class="item-name">执行曝光</span>
                            </div>
                            <div class="content-item no-right" @click="goRouter(3)">
                                <i class="icon-paimai item-icon" style="color:#46B35D;"></i>
                                <span class="item-name">司法拍卖</span>
                            </div>
                            <div class="content-item  no-left" @click="goRouter(4)">
                                <i class="icon-jianxing item-icon" style="color:#0087D0;"></i>
                                <span class="item-name">减刑假释</span>
                            </div>
                            <div class="content-item" @click="goRouter(5)">
                                <i class="icon-panjue item-icon" style="color:#CC3A3D;"></i>
                                <span class="item-name">裁判文书</span>
                            </div>
                            <div class="content-item" @click="goRouter(6)">
                                <i class="icon-weituo item-icon" style="color:#46B35D;"></i>
                                <span class="item-name">对外委托</span>
                            </div>
                            <div class="content-item no-right" @click="goRouter(7)">
                                <i class="icon-more item-icon" style="color:#EE3A1E;"></i>
                                <span class="item-name">更多</span>
                            </div>
                        </div>
                        <div class="content-list list-life">
                            <P class="content-title">网上服务</P>
                            <div class="content-item half no-left" @click="goRouter(8)">
                                <span class="item-2" style="padding-top: 30px;">苍溪互联网法院</span>
                                <i class="icon-jianyu item-icon item-half" style="color:#0087D0;"></i>
                            </div>
                            <div class="content-item half no-right" @click="goRouter(9)">
                                <span class="item-2">金融纠纷一站式化解平台</span>
                                <i class="icon-jinrong item-icon item-half" style="color:#E7482F;"></i>
                            </div>
                            <div class="content-item half no-left" @click="goRouter(10)">
                                <span class="item-2" style="padding-top: 30px;">在线立案</span>
                                <i class="icon-jiufen item-icon item-half" style="color:#FFD247;"></i>
                            </div>
                            <div class="content-item half no-right" @click="goRouter(11)">
                                <span class="item-2">道交网上一体化处理平台</span>
                                <i class="icon-weizhang item-icon item-half" style="color:#46BD59;"></i>
                            </div>
                        </div>
                        <div class="content-list list-life">
                            <P class="content-title">我要起诉</P>
                            <div class="content-item  no-left" @click="goRouter(12)">
                                <i class="icon-zhiyin item-icon" style="color:#FFCA66;"></i>
                                <span class="item-name">诉讼指引</span>
                            </div>
                            <div class="content-item" @click="goRouter(13)">
                                <i class="icon-muban item-icon" style="color:#EB4B2E;"></i>
                                <span class="item-name">文书模板</span>
                            </div>
                            <div class="content-item" @click="goRouter(14)">
                                <i class="icon-jisuan item-icon" style="color:#0087D0;"></i>
                                <span class="item-name">计算工具</span>
                            </div>
                            <div class="content-item no-right" @click="goRouter(15)">
                                <i class="icon-fagui item-icon" style="color:#45B35C;"></i>
                                <span class="item-name">法律法规</span>
                            </div>
                            <div class="content-item  no-left" @click="goRouter(16)">
                                <i class="icon-wenjian item-icon" style="color:#0087D0;"></i>
                                <span class="item-name">司法文件</span>
                            </div>
                            <div class="content-item" @click="goRouter(17)">
                                <i class="icon-yuyue item-icon" style="color:#CC3A3D;"></i>
                                <span class="item-name">网上预约</span>
                            </div>
                            <div class="content-item" @click="goRouter(18)">
                                <i class="icon-xinyong item-icon" style="color:#45B35C;"></i>
                                <span class="item-name">信用查询</span>
                            </div>
                            <div class="content-item no-right" @click="goRouter(19)">
                                <i class="icon-dangshiren item-icon" style="color:#FFCA66;"></i>
                                <span class="item-name">当事人自助注册</span>
                            </div>
                        </div>
                        <div class="content-list list-life">
                            <P class="content-title">我要咨询</P>
                            <div class="content-item half no-left" @click="goRouter(20)">
                                <span class="item-2" style="padding-top: 30px;">智能问答</span>
                                <i class="icon-wenda item-icon item-half" style="color:#CE3A3C;"></i>
                            </div>
                            <div class="content-item half no-right" @click="goRouter(21)">
                                <span class="item-2" style="padding-top: 30px;">12368热线</span>
                                <i class="icon-rexian item-icon item-half" style="color:#45B35C;"></i>
                            </div>
                            <div class="content-item half no-left" @click="goRouter(22)">
                                <span class="item-2" style="padding-top: 30px;">意见建议</span>
                                <i class="icon-yijian item-icon item-half" style="color:#E84B2E;"></i>
                            </div>
                            <div class="content-item half no-right" @click="goRouter(23)">
                                <span class="item-2" style="padding-top: 30px;">法治地图</span>
                                <i class="icon-map item-icon item-half" style="color:#0087D0;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition :name="transitionName">
            <router-view class="child-view">
            </router-view>
        </transition>
        <footerComponent></footerComponent>
    </div>
</template>
<script>
    import { mapGetters,mapActions} from 'vuex'
    import iScroll from 'iScroll'
    import Swiper from 'swiper'
    import footerComponent from '../components/footer.vue'
    export default {
        components: {
            footerComponent
        },
        data() {
            return {
                appLoaded:false,
            }
        },
        created(){
            setTimeout(()=>{
                this.appLoaded = true;
            },1000);
            setTimeout(()=>{
                this.$el.firstChild.style.display = "none";
            },2000);
        },
        mounted(){
            setTimeout(()=>{
                new Swiper ('.swiper-home-top', {
                    direction: 'horizontal',
                    loop: true,
                    // 如果需要分页器
                    pagination: '.swiper-home-pagination',
                    autoplay:3000
                });
                new Swiper ('.trip-items-app', {
                    direction: 'horizontal',
                    loop: true,
                    // 如果需要分页器
                    autoplay:3000
                });
                new iScroll('#boxScroll',{
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
            goRouter(type){
                switch(type){
                    case 0:
                        this.$router.push("anjian-search");
                        break;
                    case 1:
                        this.$router.push("tingshen");
                        break;
                    case 2:
                        this.$router.push("baoguang");
                        break;
                    case 3:
                        window.location.href = "http://mauction.jd.com/courtProductList.html?vendorId=641891&page=1&sTop=0";
                        break;
                    case 4:
                        this.$router.push("jianxing");
                        break;
                    case 5:
                        this.$router.push("panjue-list");
                        break;
                    case 6:
                        this.$router.push("weituo");
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;
                    case 10:
                        this.$router.push("lian");
                        break;
                    case 11:
                        break;
                    case 12:
                        this.$router.push("zhiyin");
                        break;
                    case 13:
                        this.$router.push("muban");
                        break;
                    case 14:
                        this.$router.push("jisuan");
                        break;
                    case 15:
                        window.location.href = "http://www.pkulaw.com";
                        this.$router.push("newsList");
                        break;
                    case 16:
                        this.$router.push("sifa");
                        break;
                    case 17:
                        this.$router.push("yuyue");
                        break;
                    case 18:
                        this.$router.push("xinyong");
                        break;
                    case 19:
                        this.$router.push("register");
                        break;
                    case 20:
                        this.$router.push("wenda");
                        break;
                    case 21:
                        window.location.href="tel://12368";
                        break;
                    case 22:
                        this.$router.push("contact");
                        break;
                    case 23:
                        this.$router.push("map");
                        break;
                }
            }
        },
        computed:{
            ...mapGetters({
                transitionName:"transitionName",
            }),
        },
    }
</script>