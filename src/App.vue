<template>
  <div>
      <about-me/>
  </div>
    
</template>

<script>
  // import skillsVue from './components/skills.vue';
  import about from './components/AboutMe.vue';
  // import projectsVue from './components/projects.vue';
  // import experienceVue from './components/experience.vue'
  export default {
    components: {
      'about-me': about,
      // 'skills': skillsVue,
      // 'projects': projectsVue,
      // 'exp' : experienceVue
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

</style>