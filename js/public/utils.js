/**
 * Created by cx on 2017/11/17.
 * Include
 * description
 */
export function getUrlValByKey(key){//获取URL值
    let query = window.location.search.substring(1);
    let lets = query.split("&");
    for (let i=0;i<lets.length;i++) {
        let pair = lets[i].split("=");
        if(pair[0] == key){return pair[1];}
    }
    return false;
}

export function setSession(key,value){
    return window.sessionStorage.setItem(key,value);
}
export function getSession(key){
    return window.sessionStorage.getItem(key);
}
export function weixinBack(callback){
    if(window.WeixinJSBridge){
        window.WeixinJSBridge.call('closeWindow');
    }else{
        if(callback && callback instanceof Function){
            callback();
        }
    }
}