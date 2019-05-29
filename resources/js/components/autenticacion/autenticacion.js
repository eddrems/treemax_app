//configuraciones por defecto
require('../../bootstrap');

window.Vue = require('vue');
import Vue from 'vue'

import VueRouter from 'vue-router'
window.Events = new class {
    constructor(){ this.vue = new Vue(); }    
    fire(event, data = null){ this.vue.$emit(event, data); }    
    listen(event, callback){ this.vue.$on(event, callback); }
}
Vue.use(VueRouter);
//----------





//importacion de componentees .vue
import Login  from './componentes/Login.vue';

//----------

//rutas
const routes = [
    { 
        path: '/', 
        component: Login, 
        name: 'login' 
    }


]

const router = new VueRouter({
    routes // short for `routes: routes`
})
//----------








//app principal
const app = new Vue({
    el: '#app',
    router,
});
