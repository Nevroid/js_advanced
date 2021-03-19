import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {},
        cartData: {},
        itemsOnPage: [],
        itemsInCart: [],
        
    },
    mutations: {
        setData (state, payload){
            state.data = {...state.data, ...payload.newData}
            state.itemsOnPage.push(...Object.keys(payload.newData))
        },
        
        setCartData (state, payload){
            
            let newCartObj = {};
            newCartObj[payload.id] = {};
            newCartObj[payload.id] = payload;

            state.cartData = {...state.cartData, ...newCartObj}
            state.itemsInCart.push(...Object.keys(newCartObj))
        },
        setInitialCartData(state, payload) {
            state.cartData = payload.newData;
            state.itemsInCart.push(...Object.keys(payload.newData));

        },                  
        
        deleteCartData (state) {
            state.cartData = {};
            state.itemsInCart = [];

        },
        setQnt (state, payload) {
            state.data[payload].qnt++
            
        },

        
    },
    getters: {
        getData: state => state.data,
        getCartData: state => state.cartData,
        getItemsOnPage: state => state.itemsOnPage,
        getItemsInCart: state => state.itemsInCart,
        getTotalCost: state => {
            const keys = state.itemsOnPage
            return keys.reduce((result, current) => result + state.data[current].price, 0)
        },

        
    },
    actions: {
        requestData({commit}, page){
            fetch(`/catalogitemslist/${page}`, {method: 'GET'})
                .then(res => {
                    return res.json();
                })
                .then(res =>{
                    commit('setData', {newData: res })
                })
        },
        requestCartData({commit}) {
            fetch(`/cartitemslist`, {method: 'GET'})
            .then(res => {
                return res.json();
            })
            .then(res =>{
                commit('setInitialCartData', {newData: res })
            })
        },
        sendDataToFile ({}, data) {
            fetch ('/usercartfile', {
                method: 'POST', 
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }})
                // .then(res => {
                //     return res.json();
                // })
                .then(res =>{
                    console.log(`indexJS res: ${res}`);
                })
        },

    },
    
})