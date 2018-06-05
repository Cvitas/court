/**
* Created by cx on 2018/6/4.
* Include
* description 裁判文书列表
*/
<template>
    <div class="wrap panjue-wrap">
        <div class="box">
            <div class="search-box">
                <div class="search-input-items">
                    <p class="search-input-item"><label>案号：</label><input type="text"/></p>
                    <p class="search-input-item"><label>关键字：</label><input type="text"/></p>
                    <p class="search-input-item"><label>日期：</label><input type="text"/></p>
                    <p class="search-input-item"><label style="width: 10%;">到</label><input style="width: 90%;" type="text"/></p>
                </div>
                <p class="search-btn">搜索</p>
                <div class="tips-box">
                    <span>总共公开了<span class="strong">3209824</span>条文件--符合搜索条件的共有3209824条文书</span>
                </div>
            </div>
            <div class="box-scroll panjue-list" id="boxScrollChild">
                <div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川0282民初3325号之一</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
                    </div>
                    <div class="panjue-list-item">
                        <p class="item-title">（2018）川1102民初2088号</p>
                        <span class="item-address">四川苍溪法院</span>
                        <span class="item-time">时间：2018-06-05</span>
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