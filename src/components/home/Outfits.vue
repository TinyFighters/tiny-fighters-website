<template>
    <section class="outfits">
        <div class="outfits__viewer">
            <div class="outfits__podium">
                <img
                    v-if="selectedOutfit === 0"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/Azelnut.png" />
                <img
                    v-if="selectedOutfit === 1"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/Brocoli.png" />
                <img
                    v-if="selectedOutfit === 2"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/Coffee.png" />
                <img
                    v-if="selectedOutfit === 3"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/Cream.png" />
                <img
                    v-if="selectedOutfit === 4"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/Pumpkin.png" />
                <img
                    v-if="selectedOutfit === 5"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/RedBean.png" />
                <img
                    v-if="selectedOutfit === 6"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/Sand.png" />
                <img
                    v-if="selectedOutfit === 7"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/Shark.png" />
                <img
                    v-if="selectedOutfit === 8"
                    class="outfits__podium-img"
                    src="@/assets/images/outfits/podium/hidden.png" />
            </div>
            <ul class="outfits__list">
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 0">
                    <img class="outfits__item-img" src="@/assets/images/outfits/Azelnut.png" />
                </li>
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 1">
                    <img class="outfits__item-img" src="@/assets/images/outfits/Brocoli.png" />
                </li>
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 2">
                    <img class="outfits__item-img" src="@/assets/images/outfits/Coffee.png" />
                </li>
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 3">
                    <img class="outfits__item-img" src="@/assets/images/outfits/Cream.png" />
                </li>
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 4">
                    <img class="outfits__item-img" src="@/assets/images/outfits/Pumpkin.png" />
                </li>
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 5">
                    <img class="outfits__item-img" src="@/assets/images/outfits/RedBean.png" />
                </li>
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 6">
                    <img class="outfits__item-img" src="@/assets/images/outfits/Sand.png" />
                </li>
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 7">
                    <img class="outfits__item-img" src="@/assets/images/outfits/Shark.png" />
                </li>
                <li
                    class="outfits__item"
                    @click="selectedOutfit = 8">
                    <img class="outfits__item-img" src="@/assets/images/outfits/hidden.png" />
                </li>
            </ul>
        </div>
        <p class="outfits__desc">In the meantime, try&nbsp;some&nbsp;tiny&nbsp;outfits&nbsp;here.</p>
        <img class="outfits__tf" src="@/assets/images/illu/tf.png" />
    </section>
</template>

<script setup>
import { ref } from 'vue';

const selectedOutfit = ref(8);
</script>

<style lang="scss">
.outfits {
    margin: 0 auto 24px;
    width: calc(100% - 32px);

    &__viewer {
        background: linear-gradient(79deg, #FFBA5A 1.72%, #FAA021 98.29%);
        border: 12px solid var(--text);
        border-radius: 20px;
        overflow: hidden;
    }
    &__podium {
        height: 300px;
        position: relative;

        &-img {
            aspect-ratio: 790 / 444;
            animation: displayPodium 0.3s var(--cubic-bezier) forwards;
            height: 100%;
            position: absolute;
            top: 50%; left: 50%;
            transform-origin: bottom center;
        }
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: -16px auto 0;
        max-width: 416px;
        padding: 8px;
    }
    &__item {
        cursor: pointer;
        width: calc(33% - 8px);

        &-img {
            max-width: 124px;
            width: 100%;
        }
    }
    &__desc {
        color: var(--text-light);
        font-size: 2rem; // 2.8rem
        margin: 12px auto 24px;
        text-align: center;
    }
    &__tf {
        display: block;
        margin: 0 auto;
    }
}

@keyframes displayPodium {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.7);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}
</style>