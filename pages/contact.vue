/**
* Created by cx on 2018/6/4.
* Include
* description 联系法官
*/
<template>
    <div class="wrap contact-wrap">
        <div class="box">
            <div class="box-scroll contact-scroll" id="boxScrollChild">
                <div>
                    <p class="contact-tips">请在输入框中输入您想咨询或预约的信息!</p>
                    <div class="contact-items">
                        <div class="contact-left-item">
                            <p class="user-name">法官 <span class="fs0-6 pl10">2018/06/05 09:30</span></p>
                            <p class="contact-content">请问你上次咨询的事项的具体准侧能否发我邮箱?</p>
                        </div>
                        <div class="contact-right-item">
                            <p class="user-name">我 <span class="fs0-6 pl10">2018/06/05 09:31</span></p>
                            <p class="contact-content">好的</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="input-kuang">
                <input type="text" placeholder="输入回复内容"/>
                <p class="contact-send">发送</p>
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