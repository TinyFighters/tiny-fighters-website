<template>
    <section class="join">
        <img
            class="join__sign"
            src="@/assets/images/illu/side-sign-green.gif" />
        <div class="join__content">
            <h2 class="join__title">Join the Fight</h2>
            <h3 class="join__subtitle">XXXX Tiny Fighters</h3>
            <p>The Tiny Fighters are a group of creative minds, each with their own unique style.</p>
            <p>Your Tiny Fighter will be the cornerstone of a huge multimedia brand, paving the way for new web 3 adventures.</p>
            <p>
                <strong>Together,</strong> we’ll build a community.<br>
                <strong>Together,</strong> we’ll build a brand.
            </p>
        </div>
    </section>
</template>

<style lang="scss">
.join {
    align-items: flex-start;
    color: var(--text);
    display: flex;

    &__sign {
        width: 100px;
    }
    &__content {
        margin: 0 auto;
        max-width: 560px; // 752px
        padding: 0 16px;
    }
    &__title {
        font-size: 3.2rem; // 4rem
        margin-bottom: 4px;
    }
    &__subtitle {
        color: var(--text-light);
        font-size: 2rem;
        letter-spacing: 0.1em;
        margin-bottom: 40px;
    }
    p {
        font-size: 2rem;
        margin-bottom: 16px;

        strong {
            color: var(--text-light);
        }
    }
}

@media (min-width: 768px) {
    .join {
        &__sign {
            width: 140px;
        }
        &__title {
            font-size: 4rem;
        }
        p {
            font-size: 2.2rem;
        }
    }
}

@media (min-width: 1024px) {
    .join {
        padding: 40px 10% 0 0;

        &__title {
            margin-bottom: 20px;
        }
        &__subtitle {
            margin-bottom: 80px;
        }
        &__sign {
            width: 220px;
        }
        &__content {
            max-width: 800px;
        }
    }
}

@media (min-width: 1280px) {
    .join {
        &__title {
            font-size: 6rem;
        }
        &__subtitle {
            font-size: 3rem;
        }
        &__content {
            max-width: 880px;
        }
        p {
            font-size: 2.4rem;
        }
    }
}
</style>