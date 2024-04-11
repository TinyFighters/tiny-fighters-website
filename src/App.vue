<template>
    <div class="tinyfighters">
        <Header />
        <RouterView />
        <Footer />
        <GoToTop />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/structure/Header.vue';
import Footer from '@/components/structure/Footer.vue';
import GoToTop from './components/misc/GoToTop.vue';
</script>