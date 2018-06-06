/**
* Created by cx on 2018/6/5.
* Include
* description 计算工具
*/
<template>
    <div class="wrap jisuan-wrap">
        <div class="box">
            <div class="box-scroll jisuan-scroll" id="boxScrollChild">
                <div>
                    <div class="line-items">
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">诉讼费计算器</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">延迟利息计算器</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">残疾赔偿计算器</span>
                        </div>
                        <div class="line-item">
                            <span class="icon-right"></span>
                            <span class="line-title">财产保全案件计算器</span>
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