<template>
    <section class="community">
        <h2 class="community__title">Vibe, <br>Grind, <br>Thrive</h2>
        <h3 class="community__subtitle">Join our <br>community</h3>
        <div class="community__socials">
            <a class="community__social" href="http://discord.com" target="_blank">
                Discord
                <img class="community__social-icon community__social-discord" src="@/assets/images/icons/discord.svg">
            </a>
            <a class="community__social" href="http://x.com" target="_blank">
                X
                <img class="community__social-icon community__social-x" src="@/assets/images/icons/x.svg">
            </a>
            <a class="community__social" href="http://linktree.com" target="_blank">
                Linktree
                <img class="community__social-icon community__social-linktree" src="@/assets/images/icons/linktree.svg">
            </a>
        </div>
        <img class="community__img" src="@/assets/images/illu/join-bg.png">
    </section>
</template>

<style lang="scss">
.community {
    background: transparent url('@/assets/images/bg/bg-straight.png') repeat-x center center;
    background-size: auto 100%;
    color: var(--text);
    margin: -480px 0;
    overflow: hidden;
    padding: 600px 0;
    text-align: center;

    &__title {
        font-size: 4rem; // 58
        padding: 8px 0 24px;
    }
    &__subtitle {
        font-size: 3.5rem; // 78
        padding: 20px 0;
        position: relative;

        &::before {
            background: var(--text);
            content: '';
            display: block;
            height: 2px;
            position: absolute;
            top: -1px; left: 50%;
            transform: translateX(-50%);
            width: 40px; // 60
        }
    }
    &__socials {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
    &__social {
        align-items: center;
        aspect-ratio: 1;
        background: #123800;
        border: 0;
        border-radius: 3px;
        box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.25);
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        font-size: 0;
        height: 30px;
        justify-content: center;
        padding: 0;
        position: relative;

        &-discord {
            width: 20px;
        }
        &-x {
            width: 16px;
        }
        &-linktree {
            width: 20px;
        }
    }
    &__img {
        margin: 32px auto;
        opacity: 0.3;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 110%;
    }
}
</style>