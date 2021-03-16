import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        itemsInCart: [],
    },
    mutations: {
        setData (state, payload){
            state.data = payload.newData
            state.itemsOnPage = Object.keys(payload.newData)

        },
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getTotalCost: state => {
            const keys = state.itemsOnPage
            return keys.reduce((result, current) => result + state.data[current].price, 0)
        }
    },
    actions: {
        requestData({commit}, page){
            fetch(`/data/items${page}.json`)
                .then(res => {
                    return res.json();
                })
                .then(res =>{
                    commit('setData', {newData: res })
                })
        }

    },
    
})