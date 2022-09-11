<template>
    <section ref="contact" class="contact" data-scroll-section>
        <a
            ref="contactEmail"
            v-hoverable
            href="mailto:akarshan@ualberta.ca"
            rel="noopener"
            class="contact__email"
        >
            <!-- <span class="sr-only" > Send me an email </span> -->
            <span
                v-for="row in 3"
                :key="row"
                ref="contactEmailRow"
                aria-hidden="true"
                class="contact__email__row"
            >
                <span
                    v-for="textKey in textCount"
                    :key="textKey"
                    ref="contactMarqueeText"
                    aria-hidden="true"
                    class="contact__email__row__text"
                >
                    Send me an <span style="color:#009688" class="serif">email</span
                    ><span v-if="textKey !== textCount">&nbsp; - &nbsp;</span>
                </span>
            </span>
        </a>
    </section>
</template>

<script>
    import { gsap } from 'gsap';
export default {
    data: () => ({ textCount: 4 }),
    mounted() {
        const { contact, contactEmailRow } = this.$refs;
        gsap.fromTo(
            contactEmailRow,
            { yPercent: 'random(-15, -20)' },
            {
                yPercent: 'random(15, 20)',
                scrollTrigger: { trigger: contact, scrub: true }
            }
        );
        const scrollTriggerFactory = (trigger) => ({
            trigger,
            scrub:
                window.innerWidth >= this.$smoothScrollBreakPoint ? true : 0.5
        });
        contactEmailRow.forEach((item) => {
            const scrollTrigger = scrollTriggerFactory(item);
            const sumWidth =
                item.offsetWidth +
                window.innerWidth / (window.innerWidth < 700 ? 2 : 4);
            gsap.fromTo(
                item,
                { x: window.innerWidth },
                { x: -sumWidth, scrollTrigger }
            );
        });
    }
};
</script>

<style lang="scss">
.contact {
    background-color: white;
    padding: 4rem 0 8rem;
    pointer-events: all;
    max-width: 100vw;
    margin-top: -2px;
    overflow: hidden;
    width: 100%;
    &__email {
        color: darken($color: white, $amount: 40);
        text-decoration: none;
        position: relative;
        display: block;
        line-height: 1;
        &__row {
            font-size: 5rem;
            will-change: transform;
            white-space: nowrap;
            display: block;
            margin: 0;
            @supports (-webkit-text-stroke: 1px white) {
                -webkit-text-stroke: 1.2px darken($color: #8CF2D8, $amount: 10);
                color: transparent;
            }
        }
        @media (prefers-reduced-motion: reduce) {
            cursor: pointer !important;
        }
    }
}
</style>