import Vue from 'vue'
import App from './components/App.vue'
import store from './store/index.js'

new Vue({
    el: 'main',
    template: '<App />',
    components: {
        App,
    },
    store,
})