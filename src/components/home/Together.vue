<template>
    <section class="together">
        <h2 class="together__title">
            Together
            <img class="together__title-tf" src="@/assets/images/illu/hanged-tf.png" alt="TF" />
            <img class="together__title-img" src="@/assets/images/illu/together.png" alt="Together" />
        </h2>
        <figure class="together__row">
            <div class="together__img">
                <img class="together__img-fig" src="@/assets/images/illu/together1.jpg" alt="We vibe">
                <img class="together__img-over together__img-over-1" src="@/assets/images/illu/together1-over.png" alt="">
            </div>
            <figcaption class="together__txt">We <strong>vibe</strong>.</figcaption>
        </figure>
        <figure class="together__row">
            <div class="together__img">
                <img class="together__img-fig" src="@/assets/images/illu/together2.jpg" alt="We grind">
                <img class="together__img-over together__img-over-2" src="@/assets/images/illu/together2-over.png" alt="">
            </div>
            <figcaption class="together__txt">We <strong>grind</strong>.</figcaption>
        </figure>
        <figure class="together__row">
            <div class="together__img">
                <img class="together__img-fig" src="@/assets/images/illu/together3.jpg" alt="We thrive">
                <img class="together__img-over together__img-over-3" src="@/assets/images/illu/together3-over.png" alt="">
            </div>
            <figcaption class="together__txt">We <strong>thrive</strong>.</figcaption>
        </figure>
    </section>
</template>

<style lang="scss">
.together {
    &__title {
        align-items: flex-start;
        background: transparent url('@/assets/images/bg/tf-horizontal.png') repeat-x top center;
        background-size: auto var(--titleBgHeight);
        color: transparent;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 0;
        margin-bottom: 16px;
        min-height: var(--titleBgHeight);
        padding-top: var(--titleBgHeight);
        width: 100%;

        &-img { // 958px
            margin-top: -4px;
            max-width: 280px;
        }
        &-tf { // 958px
            max-width: 40px;
        }
    }
    &__row {
        overflow: hidden;
        padding: 0px 16px 50px;
        text-align: center;
    }
    &__img {
        margin: 0 auto 8px;
        max-width: 620px;
        width: 100%;
        position: relative;

        &-fig {
            border: 2px solid var(--text-light);
            border-radius: 12px;
            display: block;
            max-width: 100%;
        }
        &-over {
            position: absolute;
            bottom: 0;
            z-index: 1;

            &-1 {
                max-width: 130%;
                left: 35%; bottom: -30%;
            }
            &-2 {
                max-width: 110%;
                right: 50%; bottom: -30%;
            }
            &-3 {
                max-width: 140%;
                left: 10%; bottom: -50%;
            }
        }
    }
    &__txt {
        color: var(--text);
        font-size: 2rem;

        strong {
            color: var(--text-light);
        }
    }
}

@media (min-width: 768px) {
    .together {
        &__title {
            padding-right: 40px;

            &-img { // 958px
                margin-top: -7px;
                max-width: 500px;
            }
            &-tf { // 958px
                max-width: 80px;
            }
        }
    }
}

@media (min-width: 1024px) {
    .together {
        &__row {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 1024px;
            padding: 20px 40px 100px;

            &:nth-child(odd) {
                flex-direction: row-reverse;
            }
        }
        &__img {
            margin: 0;

            &-over {
                &-1 {
                    left: 43%;
                }
                &-2 {
                    left: 65%;
                }
                &-3 {
                    left: 19%;
                }
            }
        }
        &__txt {
            font-size: 4rem;
        }
    }
}
</style>