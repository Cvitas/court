/**
* Created by cx on 2018/6/4.
* Include
* description 文书送达
*/
<template>
    <div class="wrap">
        <div class="box">
            <div class="box-scroll wenshu-scroll" id="boxScrollChild">
                <div>
                    <div class="wenshu-form">
                        <p class="form-title">文书送达<span class="fr pr10 fs0-6 gray">单号：EMS12345678900D0</span></p>
                        <p class="form-input-item">
                            <span>文书名称</span>
                            <span class="form-date">送达日期</span>
                        </p>
                        <p class="form-input-item">
                            <span class="icon-picture"></span>
                            <span class="active-blue">受理案件通知书</span>
                            <span class="form-date">2018/03/10</span>
                        </p>
                        <p class="form-input-item">
                            <span class="icon-picture"></span>
                            <span class="active-blue">受理案件通知书</span>
                            <span class="form-date">2018/03/10</span>
                        </p>
                        <p class="form-input-item">
                            <span class="icon-picture"></span>
                            <span class="active-blue">受理案件通知书</span>
                            <span class="form-date">2018/03/10</span>
                        </p>
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