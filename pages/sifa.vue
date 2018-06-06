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
                    <p class="search-item active"><span>最高法院指导文件</span></p>
                    <p class="search-item"><span>四川省法院指导文件</span></p>
                </div>
            </div>
            <div class="box-scroll anjian-list" id="boxScrollChild">
                <div>
                    <div class="line-items">
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">最高人民法院 中华全国归国华侨联合会关于在不分地区开展涉侨纠纷多元化解试点工作的意见</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">全国法院破产审判工作会议纪要</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">最高人民法院关于人民法院办理仲裁裁决执行案件若干问题的规定</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">最高人民法院关于执行担保若干问题的规定</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">最高人民法院关于执行和解若干问题的规定</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">最高人民法院关于人民法院通过互联网公开审判流程信息的规定</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">最高人民法院，最高人民检查院关于涉以压缩气体为动力的枪支、气枪铅弹刑、事案件定罪量刑问题的批复</span>
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