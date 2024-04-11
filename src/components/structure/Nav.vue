<template>
    <menu class="nav">
        <a class="nav__link nav__social" href="https://discord.com" target="_blank">
            <img class="nav__social-icon nav__social-discord" src="@/assets/images/icons/discord.svg">
            Discord
        </a>
        <a class="nav__link nav__social" href="https://x.com" target="_blank">
            <img class="nav__social-icon nav__social-x" src="@/assets/images/icons/x.svg">
            X
        </a>
        <button
            class="nav__link nav__link-open"
            @click.stop="openNav = !openNav"><i class="nav__link-burger"></i></button>
        <ul
            class="nav__list"
            :class="{ 'nav__list-active': openNav }">
            <li class="nav__item">
                <RouterLink class="nav__link" to="/">Home</RouterLink>
            </li>
            <li class="nav__item">
                <RouterLink class="nav__link" to="/story">Story</RouterLink>
            </li>
            <li class="nav__item">
                <RouterLink class="nav__link" to="/team">Team</RouterLink>
            </li>
            <li class="nav__item">
                <span
                    class="nav__link nav__link-more"
                    @click.stop="openMore = !openMore">
                    More
                    <Arrow class="nav__link-arrow" />
                </span>
                <ul
                    class="nav__sublist"
                    :class="{ 'nav__sublist-active': openMore }">
                    <li class="nav__item">
                        <RouterLink class="nav__link" to="/gallery">Gallery</RouterLink>
                    </li>
                    <li class="nav__item">
                        <RouterLink class="nav__link" to="/brandingkit">Branding Kit</RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </menu>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Arrow from '@/components/icons/Arrow.vue';

const openNav = ref(false);
const openMore = ref(false);

document.querySelector('html').addEventListener('click', () => {
    openMore.value = false;
});
</script>

<style lang="scss">
.nav {
    align-items: center;
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    position: absolute;
    right: 16px;
    z-index: 100;

    &__list {
        display: none;
        position: absolute;
        top: calc(100% + 6px); right: 0;

        &-active {
            display: block;
        }
    }
    &__sublist {
        margin-top: 6px;
    }
    &__item {
        margin-bottom: 6px;
        text-align: right;
    }
    &__link {
        align-items: center;
        background: #123800;
        border: 0;
        border-radius: 3px;
        box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.25);
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        font-size: 2rem;
        height: 30px;
        min-width: 30px;
        padding: 0 8px;
        position: relative;
        text-decoration: none;
        white-space: nowrap;

        &-more {
            display: none;
        }
        &-burger {
            background: #fff;
            border-radius: 2px;
            content: '';
            display: block;
            height: 2px;
            position: relative;
            width: 18px;

            &::before, &::after {
                background: #fff;
                border-radius: 2px;
                content: '';
                display: block;
                height: 2px;
                position: absolute;
                width: 18px;
            }
            &::before {
                bottom: calc(100% + 4px);
            }
            &::after {
                top: calc(100% + 4px);
            }
        }
    }
    &__social {
        color: transparent;
        font-size: 0;

        &-discord {
            width: 20px;
        }
        &-x {
            width: 16px;
        }
    }
}

@media (min-width: 1024px) {
    .nav {
        &__list {
            align-items: center;
            display: flex;
            gap: 8px;
            order: -1;
            position: static;
        }
        &__sublist {
            display: none;
            flex-direction: column;
            gap: 8px;
            position: absolute;
            top: 100%; left: 0;
            text-align: center;

            &-active {
                display: flex;
            }
        }
        &__item {
            margin-bottom: 0;
            position: relative;
        }
        &__link {
            font-size: 3rem;
            justify-content: center;
            height: 40px;
            padding: 0 12px;
            width: 100%;

            &-open {
                display: none;
            }
            &-more {
                display: inline-flex;
                gap: 8px;
            }
            &-arrow {
                width: 20px;
            }
        }
        &__social {
            font-size: 0;
        }
    }
}
</style>