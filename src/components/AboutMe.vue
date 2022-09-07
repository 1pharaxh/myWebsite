<template>
    <div>
        <cursor-fx :config="BASE_CONFIG" color='#1DE9B6' color-hover='#FF8A65'/>
        <birds-vue/>
        <div id="row">
            <div style="text-align:center; padding-top: 15%;">
                <h1>
                    <p class="text-primary"><span data-cursor-hover>Akarshan</span></p>
                    <p class="text-secondary" ><span data-cursor-hover>Mishra</span></p>
                </h1>
                <vue-typer
                data-cursor-hover
                :text='["Full Stack Developer", "Designer", "Freelancer"]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='70'
                :type-delay='70'
                :pre-erase-delay='2000'
                :erase-delay='250'
                erase-style='select-back'
                :erase-on-complete='false'
                caret-animation='phase'
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { VueTyper } from 'vue-typer'
    import BirdsVue from './core/Birds.vue'
    import { CursorFx } from '@luxdamore/vue-cursor-fx';
    import { defineComponent } from 'vue';
    export default defineComponent({
        mounted() {
            // The point of this is to figure out the appropriate CSS for each display size
            // alert(this.$vuetify.breakpoint.name)
        },
        components: {
            'vue-typer': VueTyper,
            'birds-vue': BirdsVue,
            'cursor-fx': CursorFx,
        },
        data () {
            const BASE_CONFIG = {
                lerps: {
                    dot: 1,
                    circle: 0.18,
                    custom: 0.23,
                },
                scale: {
                    ratio: 0.18,
                    min: 0.7,
                    max: 1,
                },
                opacity: 0.1,
            };
            return {
                BASE_CONFIG,
            }
        }
    })
</script>

<style >
    @import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@keyframes rocking {
  0%,100% {transform: rotateZ(-10deg);}
  50%     {transform: rotateZ(10deg);}
}

.vue-typer {
    font-family: 'Ubuntu';
    font-style: normal;
  font-weight: 700;
    font-size: 3rem;
}
.vue-typer .custom.char.typed {
    color: #009688;
}
.vue-typer .custom.char.selected {
    color: #E91E63;
}

.vue-typer .custom.caret {
    animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
    background-color: #02cecb;
}
.vue-typer .custom.caret.selecting {
    display: inline-block;
    background-color: #fdc2b0;
}
.text-secondary {
    padding-left:75px;
    padding-bottom: 15px;
}
h1 > p {
    font-family: 'Ubuntu';
    font-style: normal;
  font-weight: 900;
  color:#009688;
    font-size: 5rem;
}
#row {
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
}

</style>