/**
* Created by cx on 2018/6/5.
* Include
* description 文书模板
*/
<template>
    <div class="wrap jisuan-wrap">
        <div class="box">
            <div class="box-scroll" id="boxScrollChild">
                <div>
                    <div class="line-items">
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">民事起诉状</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">民事答辩状</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">反诉状</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">财产保全申请书</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">法人或其他组织授权委托书</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">法定代表人身份证明书</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">民事撤诉状</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">证据保全申请书</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">上诉状</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">撤回上诉申请书</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">申请执行书</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">公民授权委托书</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">先予执行申请书</span>
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