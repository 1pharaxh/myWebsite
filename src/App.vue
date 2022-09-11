<template>
  <div>
    <v-app>
    <v-main>
      <div>
    <div id="contain" class="container">
    <div class="button" style="position:fixed; z-index:100">
        <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
            <path d="M10,2 L2,2" class="bar-1" ></path>
            <path d="M2,5 L10,5" class="bar-2"></path>
            <path d="M10,8 L2,8" class="bar-3"></path>
        </svg>
    </div>
  </div>
  <div class="menu">
    <div class="button">
        <svg viewBox="0 0 12 10" class="cross" height="40px" width="40px">
            <path d="M8,2 L2,8" class="bar-1"></path>
            <path d="M8,8 L2,2" class="bar-3"></path>
        </svg>
    </div>
    <ul class="list-items">
      <li class="li1 li" @click="scrollTo('home')"><a>home</a></li>
      <li class="li2 li" @click="scrollTo('skills')"><a >skills</a></li>
      <li class="li3 li" @click="scrollTo('projects')"><a >projects</a></li>
      <li class="li4 li" @click="scrollTo('experience')"><a >experience</a></li>
      <li class="li4 li" ><a href="https://docs.google.com/document/d/1IPAktbFm57QjJSAWZYHMPRrtYsPlLtfH734NLS8iLbc/edit?usp=sharing" >Resume</a></li>
    </ul>
    <div class="social">
      <ul>
        <li class="social-li"><a href='https://www.linkedin.com/in/akarshan-mishra-75577122a/'>linkedIn</a></li>
        <li class="social-li"><a href='https://github.com/1pharaxh'>GitHub</a></li>
        <li class="social-li"><a href="mailto:akarshan@ualberta.ca">Email</a></li>
      </ul>
    </div>
  </div>
  </div>
      <about-me id='home' />
      <skills id="skills" />
      <projects id="projects" />
      <exp id="experience" />
      <contact-me />
    </v-main>
    <footer-vue />
  </v-app>
  </div>
    
</template>

<script>
  import { gsap, Expo } from 'gsap';
  import skillsVue from './components/skills.vue';
  import about from './components/AboutMe.vue';
  import projectsVue from './components/projects.vue';
  import contactMeVue from './components/ContactMe.vue';
  import experienceVue from './components/experience.vue'
  import footerVue from './components/FooterVue.vue'
  export default {
    components: {
      'about-me': about,
      'skills': skillsVue,
      'projects': projectsVue,
      'exp' : experienceVue,
      'contact-me': contactMeVue,
      'footer-vue': footerVue
    },
    data :() =>({}),
    methods: {
        scrollTo(el) {
            document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
        }
    },
    mounted() {
        var btns = Array.from(document.querySelectorAll('.button'));
        var tl = gsap.timeline({paused: "true"});
        tl.to('.menu', {
          duration: 1,
          x: "0%",
          ease: Expo.easeInOut
        });

        tl.fromTo('.li', {
          y: "-100%",
          opacity: 0
        }, {
          duration: .5,
          opacity: 1,
          y: "0%",
          stagger: .25
        })

        tl.fromTo('.social-li', {
          y: "-50%",
          opacity: 0
        }, {
          duration: .5,
          opacity: 1,
          y: "0%",
          stagger: .25,
          ease: Expo.easeOut
        }, "-=.5");
        
        btns[0].addEventListener('click', function() {
          document.getElementById('contain').scrollIntoView({ behavior: 'smooth' });
          tl.play()
        })

        btns[1].addEventListener('click', function() {
            tl.reversed(!tl.reversed());
        })
    }
  }
</script>

<style lang="scss">
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500&display=swap');
  
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    
  }
  .hamburger {
      fill: none;
      stroke: #6FCA62;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition: all .3s ease-in-out;
      &:hover {
          stroke: #8CF2D8;
      }
  }
  .cross {
    fill: none;
      stroke: #6FCA62;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition: all .3s ease-in-out;
      &:hover {
          stroke: red;
      }
  }
  
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    
    background-color: black;
  }
  
  .button {
    position: absolute;
    top: 50px;
    right: 100px;
    color: black;
    font-size: 15px;
    font-weight: 500;
    z-index: 100;
    cursor: pointer;
  }
  
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: black;
    transform: translateX(-100%);
  }
  
  .menu .button {
    color: white;
  }
  
  .list-items {
    position: absolute;
    left: 20%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 100vh;
  }
  
  .list-items li {
    margin: 20px 0;
    z-index: 2;
  }
  
  .list-items li a {
    color: white;
    font-size: 50px;
    text-transform: uppercase;
    font-weight: 500;
    mix-blend-mode: difference;
    transition: 2s;
  }
  
  .social {
    position: absolute;
    bottom: 0;
    display: flex;
    height: 80px;
    width: 100%;
  }
  
  .social ul {
    margin-left: 50px;
    display: flex;
  }
  
  .social ul li {
    margin: 0px 20px;
  }
  
  .social ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: lighter;
  }
  
  .list-items li a:hover {
    transition: 2s;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #fff;
    font-style: italic;
  }
  </style>