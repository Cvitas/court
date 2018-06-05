const state = {
    transitionName:'slide-left',
    pageName:"",
    pageTitle:"",
}
const getters = {
    transitionName:state => state.transitionName,
    pageName:state => state.pageName,
    pageTitle:state => state.pageTitle,
}
const mutations = {
    [type.SLIDE_METHOD] (state,transitionName) {
        state.transitionName = transitionName;
    }
}
const actions = {
    slidePage({commit},transitionName) {
        commit(type.SLIDE_METHOD,transitionName)
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}