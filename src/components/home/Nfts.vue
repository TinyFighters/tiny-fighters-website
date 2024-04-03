<template>
    <section class="nfts">
        <div class="nfts__imgs">
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 0 }"
                @click="selectedNft = 0"><img class="nfts__img" src="@/assets/images/nfts/Zombie.gif" /></div>
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 1 }"
                @click="selectedNft = 1"><img class="nfts__img" src="@/assets/images/nfts/Interrogation.gif" /></div>
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 2 }"
                @click="selectedNft = 2"><img class="nfts__img" src="@/assets/images/nfts/Aquaman.gif" /></div>
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 3 }"
                @click="selectedNft = 3"><img class="nfts__img" src="@/assets/images/nfts/Biker.gif" /></div>
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 4 }"
                @click="selectedNft = 4"><img class="nfts__img" src="@/assets/images/nfts/Doc.gif" /></div>
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 5 }"
                @click="selectedNft = 5"><img class="nfts__img" src="@/assets/images/nfts/Nude.gif" /></div>
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 6 }"
                @click="selectedNft = 6"><img class="nfts__img" src="@/assets/images/nfts/Mexican.gif" /></div>
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 7 }"
                @click="selectedNft = 7"><img class="nfts__img" src="@/assets/images/nfts/Pilosity.gif" /></div>
            <div
                class="nfts__frame"
                :class="{ 'nfts__frame-active': selectedNft === 8 }"
                @click="selectedNft = 8"><img class="nfts__img" src="@/assets/images/nfts/Warrior.gif" /></div>
        </div>
        <div class="nfts__release">
            <div class="nfts__release-date">Release : tdb</div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const selectedNft = ref(null);
</script>

<style lang="scss">
.nfts {
    background: transparent url('@/assets/images/bg/bg-straight.png') repeat-x center center;
    background-size: auto 100%;
    margin: -280px 0;
    padding: 300px 0;

    &__imgs {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 40px;
        overflow: auto;
        padding: 100px 0 32px;
    }
    &__frame {
        cursor: pointer;
        margin-right: -60px;
        position: relative;
        transition: transform 0.2s ease;
        -webkit-tap-highlight-color: transparent;

        &::after {
            background: transparent url('@/assets/images/misc/frame.png') no-repeat center center;
            background-size: 100% 100%;
            content: '';
            display: block;
            height: 100%;
            opacity: 0;
            position: absolute;
            top: 0; left: 0;
            transform: scale(0.9);
            width: 100%;
        }
        &-active {
            animation: upNft 0.2s var(--cubic-bezier) forwards;
            z-index: 1;

            .nfts__img {
                animation: flipNft 0.25s var(--cubic-bezier) forwards;
            }
            &::after {
                animation: frameNft 0.2s var(--cubic-bezier) 0.22s forwards;
            }
        }
    }
    &__img {
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: block;
        width: 160px;
    }
    &__release {
        margin-bottom: 44px;
        text-align: center;

        &-date {
            align-items: center;
            aspect-ratio: 600 / 164;
            background: transparent url('@/assets/images/misc/release.png') no-repeat center center;
            background-size: contain;
            color: #fff;
            display: flex;
            font-family: 'pixel', monospace;
            font-size: 2rem;
            justify-content: center;
            margin: auto;
            padding-bottom: 4px;
            width: 300px;
        }
    }
}

@media (min-width: 1024px) {
    .nfts {
        &__imgs {
            justify-content: center;
            padding-right: calc(100vw / 20);
        }
        &__frame {
            margin-right: calc(100vw / 20 * -1);

            &:hover {
                transform: scale(1.1);
            }
        }
        &__img {
            max-width: 250px;
            width: calc(100vw / 7);
        }
    }
}

@media (min-width: 1740px) {
    .nfts {
        &__frame {
            margin-right: -86px;
        }
    }
}
@keyframes upNft {
    100% {
        transform: translateY(-33%) scale(1.1);
    }
}
@keyframes flipNft {
    50% {
        transform: rotateY(-80deg);
    }
}
@keyframes frameNft {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    90% {
        opacity: 1;
        transform: scale(1.02);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>