import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root = "https://vuejs-vue-resource-5d078-default-rtdb.firebaseio.com"

Vue.http.interceptors.push((request, next) => {
    console.log(request.method)
})

new Vue({
    el: '#app',
    render: h => h(App)
})
