/**
* Created by cx on 2018/6/4.
* Include
* description 诉讼指引
*/
<template>
    <div class="wrap anjian-search-wrap">
        <div class="box">
            <div class="search-box">
                <div class="search-items">
                    <p class="search-item active"><span>诉讼指南</span></p>
                    <p class="search-item"><span>常见问题</span></p>
                </div>
            </div>
            <div class="box-scroll" id="boxScrollChild">
                <div>
                    <div class="line-items">
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">立案流程介绍</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">立案条件</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">诉讼须知</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">举证须知</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">诉讼费用标准</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">谁请再审条件</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">缓解免交诉讼费用章程及条件</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">诉讼风险提示</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">可供选择的非诉讼纠纷解决方式</span>
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