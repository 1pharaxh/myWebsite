<template>
  <VueSidenavbar data-cursor-hover style="z-index:100">
      <VueSidenavbarItem data-cursor-hover label="Home" icon="fas fa-home" tag="a" @click="scrollTo('home')" />
      <VueSidenavbarItem data-cursor-hover label="Skills" icon="fas fa-gear" tag="a" @click="scrollTo('skills')" />
      <VueSidenavbarItem data-cursor-hover label="Projects" icon="fas fa-code" tag="a" @click="scrollTo('projects')" />
      <VueSidenavbarItem data-cursor-hover label="Experience" icon="fas fa-briefcase" tag="a" @click="scrollTo('experience')" />
  </VueSidenavbar>
</template>
<script>
    import { defineComponent} from 'vue';
    import VueSidenavbar from './VueSidenavbar.vue';
    import VueSidenavbarItem from './VueSidenavbarItem.vue';
    export default defineComponent({

        components: {
            VueSidenavbar,
            VueSidenavbarItem
        },
        data() {
            return {
                
            }
        },
        methods: {
          scrollTo(el) {
            document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
          }
        }
    })
</script>
<style>
:root {
  --sidebaritem-bgcolor: white;
  --sidebaricon-color: green;
  --sidebartext-color: black;
  --sidebaritem-hover-bgcolor: #fff;
  --burger-color: #6FCA62;
  --burger-bgcolor: #fff;
  --burger-hover-bgcolor: #d1fae5;
}
</style>