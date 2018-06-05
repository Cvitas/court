/**
* Created by cx on 2018/2/1.
* Include
* description 
*/
<template>
    <div class="wrap lian-wrap">
        <div class="box">
            <div class="box-scroll lian-scroll" id="boxScrollChild">
                <div>
                    <div class="lian-steps">
                        <p class="step step1"><span class="index" :class="{'active':step >= 1}">1</span>案件信息------</p>
                        <p class="step step2"><span class="index" :class="{'active':step >= 2}">2</span>当事人信息------</p>
                        <p class="step step3"><span class="index" :class="{'active':step >= 3}">3</span>材料上传</p>
                    </div>
                    <div v-if="step==1">
                        <div class="lian-form">
                            <p class="form-title">基本信息</p>
                            <p class="form-input-item">
                                <label>案由:</label>
                                <input type="text" placeholder="例子：交通肇事"/>
                            </p>
                            <p class="form-input-item">
                                <label>您的诉讼地位:</label>
                                <input type="text" placeholder="原告"/>
                            </p>
                            <p class="form-input-item">
                                <label>诉讼标约（元）</label>
                                <input type="text" placeholder="请输入诉讼标约"/>
                            </p>
                            <p class="form-input-item">
                                <label>联系地址:</label>
                                <input type="text" placeholder="请输入地址"/>
                            </p>
                        </div>
                        <div class="lian-form">
                            <p class="form-title">诉讼请求</p>
                            <textarea class="form-area"></textarea>
                        </div>
                    </div>
                    <div v-if="step==2">
                        <div class="lian-form">
                            <p class="form-title">原告 <span class="icon-jia">自然人</span></p>
                            <p class="form-input-item">
                                <label>名称:</label>
                                <input type="text" placeholder="请填写姓名"/>
                            </p>
                            <p class="form-input-item">
                                <label>证件号:</label>
                                <input type="text" placeholder="身份证信息"/>
                            </p>
                            <p class="form-input-item">
                                <label>电话</label>
                                <input type="text" placeholder="请输入联系电话"/>
                            </p>
                            <p class="form-input-item">
                                <label>地址:</label>
                                <input type="text" placeholder="请输入地址"/>
                            </p>
                        </div>
                        <div class="lian-form">
                            <p class="form-title">被告 <span class="icon-jia">自然人</span></p>
                            <p class="form-input-item">
                                <label>名称:</label>
                                <input type="text" placeholder="请填写姓名"/>
                            </p>
                            <p class="form-input-item">
                                <label>证件号:</label>
                                <input type="text" placeholder="身份证信息"/>
                            </p>
                            <p class="form-input-item">
                                <label>电话</label>
                                <input type="text" placeholder="请输入联系电话"/>
                            </p>
                            <p class="form-input-item">
                                <label>地址:</label>
                                <input type="text" placeholder="请输入地址"/>
                            </p>
                        </div>
                    </div>
                    <div v-if="step==3">
                        <div class="lian-form upload-form">
                            <p class="form-title">起诉状 <span class="icon-jia">添加</span></p>
                            <p class="form-input-item">
                                <span class="icon-picture"></span>
                                <span>起诉状1.png</span>
                                <span class="icon-remove"></span>
                            </p>
                            <p class="form-input-item">
                                <span class="icon-picture"></span>
                                <span>起诉状1.png</span>
                                <span class="icon-remove"></span>
                            </p>
                        </div>
                        <div class="lian-form upload-form">
                            <p class="form-title">身份证明 <span class="icon-jia">添加</span></p>
                            <p class="form-input-item">
                                <span class="icon-picture"></span>
                                <span>代理律师证1.png</span>
                                <span class="icon-remove"></span>
                            </p>
                            <p class="form-input-item">
                                <span class="icon-picture"></span>
                                <span>张三身份证.png</span>
                                <span class="icon-remove"></span>
                            </p>
                        </div>
                        <div class="lian-form upload-form">
                            <p class="form-title">材料证据 <span class="icon-jia">添加</span></p>
                            <p class="form-input-item">
                                <span class="icon-picture"></span>
                                <span>证据清单.png</span>
                                <span class="icon-remove"></span>
                            </p>
                            <p class="form-input-item">
                                <span class="icon-picture"></span>
                                <span>劳动合同.png</span>
                                <span class="icon-remove"></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="next-btn" @click="nextStep()">{{step ==3?'提交':'下一步'}}</div>
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
                step:1
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
            nextStep(){
                if(this.step == 3){
                    this.$message("提交成功");
                    return false;
                }
                this.step = this.step+1;
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
                },100)
            }
        },
    }
</script>