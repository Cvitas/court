/**
 * Created by cx on 2017/8/16.
 * Include
 * description
 */
import Parent from "../pages/app.vue";
const panjue_list = ()=> import( "../pages/panjue-list.vue");
const anjian_search = ()=> import( "../pages/anjian-search.vue");
const tingshen = () => import( "../pages/tingshen.vue");
const newsList = () => import( "../pages/newsList.vue");
const baoguang = () => import( "../pages/baoguang.vue");
const weituo = () => import( "../pages/weituo.vue");
const jianxing = () => import( "../pages/jianxing.vue");
const lian = () => import( "../pages/lian.vue");
const me = () => import( "../pages/me.vue");
const wenshu = () => import( "../pages/wenshu-search.vue");
const contact = () => import( "../pages/contact.vue");
const register = () => import( "../pages/register.vue");
const login = () => import( "../pages/login.vue");
const message = () => import( "../pages/message.vue");
const jisuan = () => import( "../pages/jisuan.vue");
const muban = () => import( "../pages/muban.vue");
const zhiyin = () => import( "../pages/zhiyin.vue");
const sifa = () => import( "../pages/sifa.vue");
const wenda = () => import( "../pages/wenda.vue");
const yuyue = () => import( "../pages/yuyue.vue");
const xinyong = () => import( "../pages/xinyong.vue");
const map = () => import( "../pages/map.vue");
export default {
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/',
        component: Parent,
        name: "parent",
        meta:{title:"四川苍溪法院"},
        children: [
            {path: "/panjue-list", name: "panjue-list", component: panjue_list,meta:{title:"裁判文书"}},
            {path: "/anjian-search", name: "anjian-search", component: anjian_search,meta:{title:"案件查询"}},
            {path: "/tingshen", name: "tingshen", component: tingshen,meta:{title:"庭审现场"}},
            {path: "/baoguang", name: "baoguang", component: baoguang,meta:{title:"执行曝光"}},
            {path: "/newsList", name: "newsList", component: newsList,meta:{title:"新闻"}},
            {path: "/weituo", name: "weituo", component: weituo,meta:{title:"对外委托"}},
            {path: "/jianxing", name: "jianxing", component: jianxing,meta:{title:"减刑假释"}},
            {path: "/lian", name: "lian", component: lian,meta:{title:"民商事一审立案"}},
            {path: "/me", name: "me", component: me,meta:{title:"我的"}},
            {path: "/wenshu", name: "wenshu", component: wenshu,meta:{title:"文书送达"}},
            {path: "/contact", name: "contact", component: contact,meta:{title:"（2018）川1129民访9号"}},
            {path: "/register", name: "register", component: register,meta:{title:"当事人注册"}},
            {path: "/login", name: "login", component: login,meta:{title:"当事人登陆"}},
            {path: "/message", name: "message", component: message,meta:{title:"消息"}},
            {path: "/jisuan", name: "jisuan", component: jisuan,meta:{title:"计算工具"}},
            {path: "/muban", name: "muban", component: muban,meta:{title:"文书模板"}},
            {path: "/zhiyin", name: "zhiyin", component: zhiyin,meta:{title:"诉讼指引"}},
            {path: "/sifa", name: "sifa", component: sifa,meta:{title:"司法文件"}},
            {path: "/wenda", name: "wenda", component: wenda,meta:{title:"智能问答"}},
            {path: "/yuyue", name: "yuyue", component: yuyue,meta:{title:"网上预约"}},
            {path: "/xinyong", name: "xinyong", component: xinyong,meta:{title:"信用查询"}},
            {path: "/map", name: "map", component: map,meta:{title:"法治地图"}},
        ]}
    ]}