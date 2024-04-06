<template>
    <section class="team">
        <h2 class="team__title">
            Team
            <img class="team__title-img" src="@/assets/images/illu/team.png" alt="Team" />
        </h2>
        <div class="team__members">
            <div class="team__member">
                <img class="team__member-img" src="@/assets/images/team/alesoir.png" />
                <a class="team__member-x community__social" href="https://x.com" target="_blank">
                    X
                    <img class="team__member-icon community__social-icon community__social-x" src="@/assets/images/icons/x.svg">
                </a>
            </div>
            <div class="team__member">
                <img class="team__member-img" src="@/assets/images/team/napadelis.png" />
                <a class="team__member-x community__social" href="https://x.com" target="_blank">
                    X
                    <img class="team__member-icon community__social-icon community__social-x" src="@/assets/images/icons/x.svg">
                </a>
            </div>
            <div class="team__member">
                <img class="team__member-img" src="@/assets/images/team/lenux.png" />
                <a class="team__member-x community__social" href="https://x.com" target="_blank">
                    X
                    <img class="team__member-icon community__social-icon community__social-x" src="@/assets/images/icons/x.svg">
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.team {
    &__title {
        align-items: flex-start;
        background: transparent url('@/assets/images/bg/tf-horizontal-pink.png') repeat-x top center;
        background-size: auto var(--titleBgHeight);
        color: transparent;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        font-size: 0;
        margin-bottom: 16px;
        min-height: var(--titleBgHeight);
        padding: var(--titleBgHeight) 10% 0 0;
        width: 100%;

        &-img { // 958px
            margin-top: -4px;
            max-width: 170px;
        }
    }
    &__member {
        margin: 40px auto;
        max-width: 222px;
        text-align: center;

        &-img {
            max-width: 100%;
        }
        &-x {
            margin-top: 12px;
        }
    }
}

@media (min-width: 768px) {
    .team {
        &__title {
            &-img {
                margin-top: -7px;
                max-width: 320px;
            }
        }
        &__members {
            align-items: flex-start;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 940px;
            padding: 40px 0 140px;
        }
        &__member {
            &-x {
                height: 50px;
            }
            &-icon {
                width: 24px;
            }
        }
    }
}
</style>