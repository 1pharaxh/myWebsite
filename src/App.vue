<template>
  <div>
    <v-app>
    <v-main>
      <side-bar />
      <about-me id='home' />
      <skills id="skills" />
      <projects id="projects" />
      <exp id="experience" />
    </v-main>
  </v-app>
  </div>
    
</template>

<script>
  import SideBarVue from './components/core/SideBar.vue';
  import skillsVue from './components/skills.vue';
  import about from './components/AboutMe.vue';
  import projectsVue from './components/projects.vue';
  import experienceVue from './components/experience.vue'
  export default {
    components: {
      'side-bar': SideBarVue,
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

<style >


</style>