<template>
    <section class="intro">
        <TinyFighters class="intro__logo" />
        <div class="intro__illu"></div>
    </section>
</template>

<script setup>
import TinyFighters from '@/components/icons/TinyFighters.vue';
</script>

<style lang="scss">
.intro {
    padding: 32px 0;

    &__logo {
        display: block;
        margin: 0 auto;
        margin-bottom: 24px;
        max-width: 76%;
    }
    &__illu {
        background: transparent url('@/assets/images/illu/tf-intro.png') no-repeat center center;
        background-size: auto 100%;
        height: 160px;
    }
}

@media (min-width: 350px) {
    .intro {
        &__illu {
            height: 280px;
        }
    }
}
</style>