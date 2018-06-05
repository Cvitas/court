/**
* Created by cx on 2018/6/4.
* Include
* description 裁判文书列表
*/
<template>
    <div class="wrap anjian-search-wrap">
        <div class="box">
            <div class="box-scroll anjian-list weituo-list" id="boxScrollChild">
                <div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">机构名称：<span class="blue-bold">四川新联会计事务所有限公司</span></p>
                        <div class="item-anjian-content">
                            <p><label>所属地区：</label><span>四川省广元市</span></p>
                            <p><label>成立时间：</label><span>1999-11-30</span></p>
                            <p><label>资源信息：</label><span>（会计审计，无资质等级评定，全国）</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">委托状态：<span class="blue-bold">正常</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">机构名称：<span class="blue-bold">四川新联会计事务所有限公司</span></p>
                        <div class="item-anjian-content">
                            <p><label>所属地区：</label><span>四川省广元市</span></p>
                            <p><label>成立时间：</label><span>1999-11-30</span></p>
                            <p><label>资源信息：</label><span>（会计审计，无资质等级评定，全国）</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">委托状态：<span class="blue-bold">正常</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">机构名称：<span class="blue-bold">四川新联会计事务所有限公司</span></p>
                        <div class="item-anjian-content">
                            <p><label>所属地区：</label><span>四川省广元市</span></p>
                            <p><label>成立时间：</label><span>1999-11-30</span></p>
                            <p><label>资源信息：</label><span>（会计审计，无资质等级评定，全国）</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">委托状态：<span class="blue-bold">正常</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">机构名称：<span class="blue-bold">四川新联会计事务所有限公司</span></p>
                        <div class="item-anjian-content">
                            <p><label>所属地区：</label><span>四川省广元市</span></p>
                            <p><label>成立时间：</label><span>1999-11-30</span></p>
                            <p><label>资源信息：</label><span>（会计审计，无资质等级评定，全国）</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">委托状态：<span class="blue-bold">正常</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">机构名称：<span class="blue-bold">四川新联会计事务所有限公司</span></p>
                        <div class="item-anjian-content">
                            <p><label>所属地区：</label><span>四川省广元市</span></p>
                            <p><label>成立时间：</label><span>1999-11-30</span></p>
                            <p><label>资源信息：</label><span>（会计审计，无资质等级评定，全国）</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">委托状态：<span class="blue-bold">正常</span></span>
                        </div>
                    </div>
                    <div class="anjian-list-item">
                        <p class="item-anjian-title">机构名称：<span class="blue-bold">四川新联会计事务所有限公司</span></p>
                        <div class="item-anjian-content">
                            <p><label>所属地区：</label><span>四川省广元市</span></p>
                            <p><label>成立时间：</label><span>1999-11-30</span></p>
                            <p><label>资源信息：</label><span>（会计审计，无资质等级评定，全国）</span></p>
                        </div>
                        <div class="item-anjian-footer">
                            <span class="item-status">委托状态：<span class="blue-bold">正常</span></span>
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