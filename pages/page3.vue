/**
* Created by cx on 2018/2/1.
* Include
* description 
*/
<template>
    <div class="wrap">
        <div class="box">
            <div class="box-scroll" id="boxScrollChild">
                <div></div>
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
            },100)
        },
        methods:{

        }
    }
</script>