<template>
    <v-app >
        <vue-threejs-birds
        id="birds"
    :quantity="quantity" 
    :canvasBgColor="canvasBgColor" 
    :effectController="{
      separation: 20.0,
      alignment: 20.0,
      cohesion: 20.0,
      freedom: 1
    }"
  />
        <cursor-fx :config="BASE_CONFIG" color='#1DE9B6' color-hover='#FF8A65'/>
        <div style="text-align:center;z-index:1; padding-top: 15%; "  >

           
                        <h1 style="margin:0px">
                            <p style="margin:0px"><span data-cursor-hover style="margin:0px">Akarshan</span></p>
                            <p style="margin:0px" ><span data-cursor-hover >Mishra</span></p>
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

    </v-app>
</template>

<script>
    import { VueTyper } from 'vue-typer'
    import VueThreejsBirds from 'vue-threejs-birds'
        import { CursorFx } from '@luxdamore/vue-cursor-fx';
    import { defineComponent } from 'vue';
    export default defineComponent({
        mounted() {
            // The point of this is to figure out the appropriate CSS for each display size
            // alert(this.$vuetify.breakpoint.name)
            window.addEventListener('resize', this.handleResize)
        },
        components: {
            'vue-typer': VueTyper,
            VueThreejsBirds,
            // 'birds-vue': BirdsVue,
            'cursor-fx': CursorFx,
        },
        methods: {
        handleResize() {
          const windowSize = {
            width: window.screen.availWidth,
            height: window.screen.availHeight
            
          }
          console.log(window)
          this.$root.$emit('resized', windowSize)
        }
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
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
                quantity: 4,
          canvasBgColor: "#fff"
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
    padding-top: 0px;
    padding-bottom: 5px;
}
h1 > p {
    font-family: 'Ubuntu';
    font-style: normal;
  font-weight: 900;
  color:#009688;
    font-size: 5rem;
}


</style>