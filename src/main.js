import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/affiliate',
            component: () => import('./views/Affiliate.vue')
        },
        {
            path: '/contact',
            component: () => import('./views/ContactUs.vue')
        },
        {
            path: '/login',
            component: () => import('./views/LogIn.vue')
        },
        {
            path: '/permissions',
            component: () => import('./views/Permissions.vue')
        },
        {
            path: '/serviceslink',
            component: () => import('./views/ServicesLink.vue')
        },
        {
            path: '/videos',
            component: () => import('./views/Videos.vue')
        },
    ]
})



createApp(App).use(bootstrap).use(router).mount('#app')
