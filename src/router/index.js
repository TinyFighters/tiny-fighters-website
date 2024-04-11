import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ComingSoon from '@/components/misc/ComingSoon.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/story',
            name: 'story',
            component: ComingSoon
        },
        {
            path: '/team',
            name: 'team',
            component: ComingSoon
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: ComingSoon
        },
        {
            path: '/brandingkit',
            name: 'brandingkit',
            component: ComingSoon
        }
    ]
})

export default router
