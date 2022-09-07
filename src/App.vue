<template>
  <div>
    <v-content>
      <about-me />
    </v-content>
    <v-app>
    <section>
      <skills />
    </section>
    <section>
      <projects />
    </section>
    <section>
      <exp />
    </section>
  </v-app>
  </div>
    
</template>

<script>
  import skillsVue from './components/skills.vue';
  import about from './components/AboutMe.vue';
  import projectsVue from './components/projects.vue';
  import experienceVue from './components/experience.vue'
  export default {
    components: {
      'about-me': about,
      'skills': skillsVue,
      'projects': projectsVue,
      'exp' : experienceVue
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>