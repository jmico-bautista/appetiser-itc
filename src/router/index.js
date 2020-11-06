import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: {
            name: 'LoginFillup'
        }
    },
    {
        path: '/register',
        component: () => import('../views/Register.vue'),
        children: [
            {
                path: '',
                redirect: {
                    name: 'Fillup'
                }
            },
            {
                path: 'fillup',
                name: 'Fillup',
                component: () => import('../views/RegisterFillUp.vue')
            },
            {
                path: 'verify',
                name: 'Verify',
                component: () => import('../views/RegisterVerify.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('../views/Login.vue'),
        children: [
            {
                path: '',
                redirect: {
                    name: 'LoginFillup'
                }
            },
            {
                path: 'login-fillup',
                name: 'LoginFillup',
                component: () => import('../views/LoginFillUp.vue')
            },
            {
                path: 'login-success',
                name: 'LoginSuccess',
                component: () => import('../views/LoginSuccess.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
