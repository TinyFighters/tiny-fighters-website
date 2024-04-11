<template>
    <button
        class="gototop"
        @click="goToTop()">
        <img
            v-if="scrollDown"
            class="gototop__img"
            src="@/assets/images/illu/gototop-down.gif" />
        <img
            v-else
            class="gototop__img"
            src="@/assets/images/illu/gototop-up.gif" />
    </button>
</template>

<script setup>
import { onMounted, ref } from 'vue';

function goToTop() {
    document.querySelector('html').scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const scrollDown = ref(true);

onMounted(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        scrollDown.value = st > lastScrollTop;
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
})
</script>

<style lang="scss">
.gototop {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    position: fixed;
    bottom: 0; right: 8px;
    width: 80px;
    z-index: 1000;

    &__img {
        max-width: 100%;
    }
}

@media (min-width: 768px) {
    .gototop {
        width: 120px;
    }
}
</style>