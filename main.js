/**
 * Created by cx on 2017/8/10.
 * Include
 * description
 */
"use strict";
require("./css/reset.less");
require("./css/icomoon/style.css");
require("./css/app.less");
import './xmUI/src/index.less'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ROUTER from 'router'
import store from 'store'
import xmUI from 'xmUI'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(xmUI);
Vue.http.options.emulateJSON = true;

Array.prototype.remove = function(b) {
    var a = this.indexOf(b);
    if (a >= 0) {
        this.splice(a, 1);
        return true;
    }
    return false;
};
//注册一个全局自定义指令v-focus 拥有此指令的元素会自动获得焦点
Vue.directive('focus', {
    // 当绑定元素插入到DOM中
    inserted: function (el) {
        // 聚焦元素
        el.select()
    }
});
const router = new VueRouter(ROUTER);
let timerObj = {timer:0,name:""};
router.beforeEach(function(to, from, next){
    let _timer = new Date().getTime();
    let __timer = new Date().getTime() - timerObj.timer;
    if(__timer < 500 && from.name == timerObj.name){
        next(false);
        return false;
    }
    timerObj.timer = _timer;
    timerObj.name = to.name;
    let transitionName = 'slide-left';
    if(to.name == "order"){
        transitionName = 'slide-right';
    }
    if(from.params.transitionName == "slide-bottom"){
        transitionName = "slide-top";
    }
    if(from.params.transitionName == "slide-left"){
        transitionName = "slide-right";
    }
    if(to.params.transitionName){
        transitionName = to.params.transitionName;
    }

    store.state.config.transitionName = transitionName;
    store.state.config.pageName = to.fullPath;
    document.title = to.meta.title;
    setTimeout(()=>{
        next();
    },0)
})
new Vue({
    store,
    router
}).$mount('#app');
window.addEventListener('touchmove', function(event) {
    if(event.target.className.indexOf("vc-") == -1){
        event.preventDefault();
    }
});
