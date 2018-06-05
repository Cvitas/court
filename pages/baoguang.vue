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
                    <p class="search-item active"><span>个人未履行裁决信息</span></p>
                    <p class="search-item"><span>单位未履行裁决信息</span></p>
                </div>
            </div>
            <div class="box-scroll anjian-list" id="boxScrollChild">
                <div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">姓名：<span class="blue-bold">张欢</span></p>
                        <p class="item-anjian-title">证件号码：<span class="blue-bold">510511199*****43512</span></p>
                        <div class="item-anjian-content">
                            <p><label>地址：</label><span>四川省苍溪县XXX</span></p>
                            <p><label>执行依据：</label><span>民事判决</span></p>
                            <p><label>案号：</label><span>（2018）川0102执1082号</span></p>
                            <p><label>执行案由：</label><span>金融接待合同纠纷</span></p>
                            <p><label>执行法院：</label><span>四川苍溪法院</span></p>
                            <p><label>未执行金额：</label><span>93042.46</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-time">曝光日期：<span class="blue-bold">2018-06-05</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">姓名：<span class="blue-bold">张欢</span></p>
                        <p class="item-anjian-title">证件号码：<span class="blue-bold">510511199*****43512</span></p>
                        <div class="item-anjian-content">
                            <p><label>地址：</label><span>四川省苍溪县XXX</span></p>
                            <p><label>执行依据：</label><span>民事判决</span></p>
                            <p><label>案号：</label><span>（2018）川0102执1082号</span></p>
                            <p><label>执行案由：</label><span>金融接待合同纠纷</span></p>
                            <p><label>执行法院：</label><span>四川苍溪法院</span></p>
                            <p><label>未执行金额：</label><span>93042.46</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-time">曝光日期：<span class="blue-bold">2018-06-05</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">姓名：<span class="blue-bold">张欢</span></p>
                        <p class="item-anjian-title">证件号码：<span class="blue-bold">510511199*****43512</span></p>
                        <div class="item-anjian-content">
                            <p><label>地址：</label><span>四川省苍溪县XXX</span></p>
                            <p><label>执行依据：</label><span>民事判决</span></p>
                            <p><label>案号：</label><span>（2018）川0102执1082号</span></p>
                            <p><label>执行案由：</label><span>金融接待合同纠纷</span></p>
                            <p><label>执行法院：</label><span>四川苍溪法院</span></p>
                            <p><label>未执行金额：</label><span>93042.46</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-time">曝光日期：<span class="blue-bold">2018-06-05</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">姓名：<span class="blue-bold">张欢</span></p>
                        <p class="item-anjian-title">证件号码：<span class="blue-bold">510511199*****43512</span></p>
                        <div class="item-anjian-content">
                            <p><label>地址：</label><span>四川省苍溪县XXX</span></p>
                            <p><label>执行依据：</label><span>民事判决</span></p>
                            <p><label>案号：</label><span>（2018）川0102执1082号</span></p>
                            <p><label>执行案由：</label><span>金融接待合同纠纷</span></p>
                            <p><label>执行法院：</label><span>四川苍溪法院</span></p>
                            <p><label>未执行金额：</label><span>93042.46</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-time">曝光日期：<span class="blue-bold">2018-06-05</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">姓名：<span class="blue-bold">张欢</span></p>
                        <p class="item-anjian-title">证件号码：<span class="blue-bold">510511199*****43512</span></p>
                        <div class="item-anjian-content">
                            <p><label>地址：</label><span>四川省苍溪县XXX</span></p>
                            <p><label>执行依据：</label><span>民事判决</span></p>
                            <p><label>案号：</label><span>（2018）川0102执1082号</span></p>
                            <p><label>执行案由：</label><span>金融接待合同纠纷</span></p>
                            <p><label>执行法院：</label><span>四川苍溪法院</span></p>
                            <p><label>未执行金额：</label><span>93042.46</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-time">曝光日期：<span class="blue-bold">2018-06-05</span></span>
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