<template>
    <header class="header">
        <h1 class="header__logo">
            <RouterLink to="/">
                <TFLogo class="header__logo-img" />
                TinyFighters
            </RouterLink>
        </h1>
        <Nav />
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import TFLogo from '@/components/icons/TFLogo.vue';
import Nav from '@/components/structure/Nav.vue';
</script>

<style lang="scss">
.header {
    align-items: center;
    background: var(--orange) url('@/assets/images/bg/bg.png') no-repeat top right;
    background-size: 160% auto;
    display: flex;
    justify-content: flex-start;
    padding: 16px;
    position: sticky;
    top: 0; left: 0; right: 0;
    z-index: 200;

    &::after {
        background: #CE7D00;
        content: '';
        display: block;
        height: 1px;
        position: absolute;
        bottom: 0; left: 16px; right: 16px;
    }
    &__logo {
        color: transparent;
        font-size: 0;
        width: 108px;

        &-img {
            max-width: 100%;
        }
    }
}

@media (min-width: 440px) {
    .header {
        justify-content: center;
    }
}

@media (min-width: 1024px) {
    .header {
        background-size: 1360px auto;
        justify-content: flex-start;
        padding: 24px;
    }
}
</style>