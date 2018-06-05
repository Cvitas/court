/**
* Created by cx on 2018/6/5.
* Include
* description 注册
*/
<template>
    <div class="wrap register-wrap">
        <div class="box">
            <div class="box-scroll register-scroll" id="boxScrollChild">
                <div>
                    <div class="register-form">
                        <div class="register-form-item">
                            <p class="item-name"><span class="red">*</span>姓名</p>
                            <p class="item-input">
                                <input type="text" placeholder="请输入姓名"/>
                            </p>
                        </div>
                        <div class="register-form-item">
                            <p class="item-name"><span class="red">*</span>身份证号码：（注册成功后为登陆账号）</p>
                            <p class="item-input">
                                <input type="text"/>
                            </p>
                        </div>
                        <div class="register-form-item">
                            <p class="item-name"><span class="red">*</span>选择地区</p>
                            <p class="item-input">
                                <input type="text" placeholder=""/>
                            </p>
                        </div>
                        <div class="register-form-item">
                            <p class="item-name"><span class="red">*</span>设置密码</p>
                            <p class="item-input">
                                <input type="text" placeholder=""/>
                            </p>
                        </div>
                        <div class="register-form-item">
                            <p class="item-name"><span class="red">*</span>确认密码</p>
                            <p class="item-input">
                                <input type="text" placeholder=""/>
                            </p>
                        </div>
                        <div class="register-form-item">
                            <p class="item-name">电子邮件</p>
                            <p class="item-input">
                                <input type="text" placeholder=""/>
                            </p>
                        </div>
                        <div class="register-form-item">
                            <p class="item-name"><span class="red">*</span>身份证正面照上传</p>
                            <p class="item-input" @click.stop="openFile()">
                                <input type="file" @change="fileChange()" style="display:none;" ref="file"/>
                                <input type="type" placeholder="拍照上传/本人手持证件照照片" disabled/>
                            </p>
                        </div>
                        <div class="register-form-item">
                            <p class="item-name"><span class="red">*</span>身份证反面照上传</p>
                            <p class="item-input" @click.stop="openFile()">
                                <input type="file" @change="fileChange()" style="display:none;" ref="file"/>
                                <input type="type" placeholder="拍照上传/本人手持证件照照片" disabled/>
                            </p>
                        </div>
                        <div class="register-form-item">
                            <p class="item-input submit-input">
                                <span class="register-btn" @click="saveRegister()">提交</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import iScroll from 'iScroll'
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
            },1000)
        },
        methods:{
            fileChange(){

            },
            openFile(){
                this.$refs.file.click();
            },
            saveRegister(){
                this.$message("注册成功");
                this.$router.push("login");
            },
        }
    }
</script>
