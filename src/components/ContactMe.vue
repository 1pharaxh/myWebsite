<template>
    <section ref="contact" class="contact" data-scroll-section data-cursor-hover>
        <a
            ref="contactEmail"
            href="mailto:akarshan@ualberta.ca"
            rel="noopener"
            class="contact__email"
        >
            <!-- <span class="sr-only" > Send me an email </span> -->
            <span
                v-for="row in numRows"
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
                    Shoot me an <span style="color:#009688" class="serif">email</span
                    ><span v-if="textKey !== textCount">&nbsp; - &nbsp;</span>
                </span>
            </span>
        </a>
    </section>
</template>

<script>
    import { gsap } from 'gsap';
export default {
    data: () => ({ textCount: 4, numRows: 5 }),
    mounted() {
        const { contact, contactEmailRow } = this.$refs;
        if (this.$vuetify.breakpoint.name === 'sm' || this.$vuetify.breakpoint.name === 'xs') {
            var arr = document.getElementsByClassName('contact__email__row__text')
            for (let i in arr) {
                if (arr[i].style) {
                    arr[i].style.fontSize = '2rem'
                }
            }
            for (let i in document.getElementsByClassName('contact__email__row')) {
                if(document.getElementsByClassName('contact__email__row')[i].style){
                    document.getElementsByClassName('contact__email__row')[i].style.lineHeight = '0.3'
                }
            }
            document.getElementsByClassName('contact__email')[0].style.padding = '0px'
            document.getElementsByClassName('contact__email')[0].style.margin = '0px'
        }
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
            const offset =  this.$vuetify.breakpoint.name === 'sm' || this.$vuetify.breakpoint.name === 'xs' ? 700 : 0
            const sumWidth =
                item.offsetWidth + offset +
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
    padding: 2rem 0 4rem;
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