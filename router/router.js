/**
 * Created by cx on 2017/8/16.
 * Include
 * description
 */
const Parent = resolve => require(['../pages/app.vue'], resolve);//首页面
const panjue_list = resolve => require(['../pages/panjue-list.vue'], resolve);
const anjian_search = resolve => require(['../pages/anjian-search.vue'], resolve);
const tingshen = resolve => require(['../pages/tingshen.vue'], resolve);
const newsList = resolve => require(['../pages/newsList.vue'], resolve);
const baoguang = resolve => require(['../pages/baoguang.vue'], resolve);
const weituo = resolve => require(['../pages/weituo.vue'], resolve);
const jianxing = resolve => require(['../pages/jianxing.vue'], resolve);
const lian = resolve => require(['../pages/lian.vue'], resolve);
const me = resolve => require(['../pages/me.vue'], resolve);
const wenshu = resolve => require(['../pages/wenshu-search.vue'], resolve);
const contact = resolve => require(['../pages/contact.vue'], resolve);
const register = resolve => require(['../pages/register.vue'], resolve);
const login = resolve => require(['../pages/login.vue'], resolve);
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
        ]}
    ]}