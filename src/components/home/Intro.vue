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
        max-width: 884px;
        position: relative;
        width: 76%;
        z-index: 1;
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

@media (min-width: 768px) {
    .intro {
        padding-top: 100px;
    }
}

@media (min-width: 1024px) {
    .intro {
        padding-top: 360px;

        &__logo {
            margin-bottom: -420px;
        }
        &__illu {
            height: 580px;
            opacity: 0.36;
        }
    }
}
</style>