<template>
    <vue-threejs-birds 
    :quantity="quantity" 
    :canvasBgColor="canvasBgColor" 
    :effectController="{
      separation: 50.0,
      alignment: 30.0,
      cohesion: 15.0,
      freedom: 1
    }"
    style="position:absolute;
    z-index: -1;"
  />
  </template>
   
  <script>
    import VueThreejsBirds from 'vue-threejs-birds'
    export default {
        name: 'BirdsVue',
      components: {
        VueThreejsBirds,
      },
      methods: {
        handleResize() {
          const windowSize = {
            width: window.innerWidth,
            height: window.innerHeight
            
          }
          console.log()
          this.$root.$emit('resized', windowSize)
        }
      },
      mounted() {
        window.addEventListener('resize', this.handleResize)
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
      },
      data() {
        return {
          quantity: 4,
          canvasBgColor: "#fff"
        }
      }
    }
</script>
<style></style>