/**
* Created by cx on 2018/6/5.
* Include
* description 登陆
*/
<template>
    <div class="wrap login-wrap">
        <div class="box">
            <div class="box-scroll login-scroll" id="boxScrollChild">
                <div>
                    <div class="login-form">
                        <div class="login-form-item">
                            <select>
                                <option>当事人</option>
                                <option>法院工作人员</option>
                                <option>律师</option>
                                <option>送达小组</option>
                                <option>代表委员</option>
                            </select>
                        </div>
                        <div class="login-form-item">
                            <span class="icon-user input-icon"></span>
                            <input placeholder="请输入账号"/>
                        </div>
                        <div class="login-form-item">
                            <span class="icon-password input-icon"></span>
                            <input placeholder="请输入密码"/>
                        </div>
                        <div class="login-form-item">
                            <span class="icon-password input-icon"></span>
                            <input placeholder="验证码"/>
                        </div>
                    </div>
                    <p class="login-btn" @click="login()">账号登陆</p>
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
            login(){
                this.$message("登陆成功");
                this.$router.push("me");
            }
        }
    }
</script>
