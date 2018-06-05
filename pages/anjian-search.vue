/**
* Created by cx on 2018/6/4.
* Include
* description 裁判文书列表
*/
<template>
    <div class="wrap anjian-search-wrap">
        <div class="box">
            <div class="search-box">
                <div class="search-items">
                    <p class="search-item active"><span>诉讼案件</span></p>
                    <p class="search-item"><span>执行案件</span></p>
                </div>
            </div>
            <div class="box-scroll anjian-list" id="boxScrollChild">
                <div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">案号：<span class="blue-bold">（2018）川0624民初2819号</span></p>
                        <div class="item-anjian-content">
                            <p><label>法院：</label><span>四川苍溪法院</span></p>
                            <p><label>当事人：</label><span>被告：杨海金</span></p>
                            <p><label>&nbsp;</label><span>被告：永安保险股份有限公司苍溪支公司</span></p>
                            <p><label>&nbsp</label><span>原告：朱梅</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">案件状态：<span class="blue-bold">移送待接收</span></span>
                            <span class="item-time">立案时间：<span class="blue-bold">2018-06-05</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">案号：<span class="blue-bold">（2018）川0624民初2819号</span></p>
                        <div class="item-anjian-content">
                            <p><label>法院：</label><span>四川苍溪法院</span></p>
                            <p><label>当事人：</label><span>被告：杨海金</span></p>
                            <p><label>&nbsp;</label><span>被告：永安保险股份有限公司苍溪支公司</span></p>
                            <p><label>&nbsp</label><span>原告：朱梅</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">案件状态：<span class="blue-bold">移送待接收</span></span>
                            <span class="item-time">立案时间：<span class="blue-bold">2018-06-05</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">案号：<span class="blue-bold">（2018）川0624民初2819号</span></p>
                        <div class="item-anjian-content">
                            <p><label>法院：</label><span>四川苍溪法院</span></p>
                            <p><label>当事人：</label><span>被告：杨海金</span></p>
                            <p><label>&nbsp;</label><span>被告：永安保险股份有限公司苍溪支公司</span></p>
                            <p><label>&nbsp</label><span>原告：朱梅</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">案件状态：<span class="blue-bold">移送待接收</span></span>
                            <span class="item-time">立案时间：<span class="blue-bold">2018-06-05</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">案号：<span class="blue-bold">（2018）川0624民初2819号</span></p>
                        <div class="item-anjian-content">
                            <p><label>法院：</label><span>四川苍溪法院</span></p>
                            <p><label>当事人：</label><span>被告：杨海金</span></p>
                            <p><label>&nbsp;</label><span>被告：永安保险股份有限公司苍溪支公司</span></p>
                            <p><label>&nbsp</label><span>原告：朱梅</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">案件状态：<span class="blue-bold">移送待接收</span></span>
                            <span class="item-time">立案时间：<span class="blue-bold">2018-06-05</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">案号：<span class="blue-bold">（2018）川0624民初2819号</span></p>
                        <div class="item-anjian-content">
                            <p><label>法院：</label><span>四川苍溪法院</span></p>
                            <p><label>当事人：</label><span>被告：杨海金</span></p>
                            <p><label>&nbsp;</label><span>被告：永安保险股份有限公司苍溪支公司</span></p>
                            <p><label>&nbsp</label><span>原告：朱梅</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">案件状态：<span class="blue-bold">移送待接收</span></span>
                            <span class="item-time">立案时间：<span class="blue-bold">2018-06-05</span></span>
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