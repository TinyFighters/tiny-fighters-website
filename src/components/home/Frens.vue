<template>
    <section class="frens">
        <h2 class="frens__title">
            Frens
            <img class="frens__title-img" src="@/assets/images/illu/frens.png" alt="Frens" />
        </h2>
    </section>
</template>

<style lang="scss">
.frens {
    margin-bottom: 80px;
    
    &__title {
        align-items: flex-start;
        background: transparent url('@/assets/images/bg/tf-horizontal.png') repeat-x top center;
        background-size: auto var(--titleBgHeight); // 76px
        color: transparent;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        font-size: 0;
        margin-bottom: 16px;
        min-height: var(--titleBgHeight);
        padding: var(--titleBgHeight) 0 0 10%;
        width: 100%;

        &-img { // 958px
            margin-top: -3px;
            max-width: 240px;
        }
    }
}

@media (min-width: 768px) {
    .frens {
        margin-bottom: 400px;

        &__title {
            &-img {
                margin-top: -6px;
                max-width: 400px;
            }
        }
    }
}
</style>