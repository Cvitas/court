/**
 * Created by cx on 2017/10/30.
 * Include
 * description 
 */
<template>
    <div class="footer">
        <div class="footer-wrap">
            <div class="footer-menu" v-for="item in menus" :class="{'active':currentNav == item.link}" @click="navClick(item)">
                <i class="menu-icon" :class="item.icon"></i>
                <span class="menu-name">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters ,mapActions } from 'vuex'
    export default{
        components: {
		},
        data(){
            return{
                currentNav:"/",
                menus:[{name:"首页",link:"/",icon:"icon-home",active:1},
                    {name:"新闻",link:"newsList",icon:"icon-xinwen"},
                    {name:"消息",link:"message",icon:"icon-faxian"},
                    {name:"我的",link:"login",icon:"icon-user"},
                ]
            }
        },
        methods:{
            navClick(menu){
                this.$router.push(menu.link);
                this.currentNav = menu.link;
            }
        },
        computed:{
        },
    }
</script>
