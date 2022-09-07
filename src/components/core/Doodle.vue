<template>
     <vue-css-doodle @click="update($event)">
      :doodle {
    @grid: 8 / 70vmin;
    background: #fff;
    overflow: hidden;
    border: 2vmin solid #fff;
    box-shadow: 
      0 .5vmin 1vmin rgba(125, 125, 125, .2),
      0 2vmin 1vmin -1vmin rgba(125, 125, 125, .2);
  }
  :after, :before {
    --s: .1vmin;
    --c: @p(
      (53, 35, 75), (92, 59, 111),
      (216, 76, 115), (255, 132, 132)
    );
 
    content: \@hex(@r(0x30A0, 0x30CF));
    position: absolute;
    font-size: @r(5vmin, 30vmin); 
    color: rgb(var(--c));
    font-weight: bold;
    text-stroke: var(--s) #fff;
    transform:
      rotate(@r(360deg))
      translate(@r(-50%, 50%), @r(-50%, 50%));
  
    text-shadow:
      @m(10, (
        calc(@n() * var(--s)) 
        calc(@n() * var(--s)) 
        0 @pn(currentColor, #fff)
      )),
      @m(10, (
        calc((@n() + 10) * var(--s)) 
        calc((@n() + 10) * var(--s)) 
        0 @pn(rgba(var(--c), .1), #fff)
      )); 
  }



    </vue-css-doodle>
</template>

<script>
    import { VueCssDoodle } from '@luxdamore/vue-css-doodle';
    import '@luxdamore/vue-css-doodle/dist/VueCssDoodle.css';
    export default {
      name: 'DoodleVue',
        components: {
            'vue-css-doodle': VueCssDoodle,
        },
        methods:{
            update(e) {
                e.target.update();
            }
            
        }
    };

</script>

<style>

</style>