<template>
  <div>
    <cursor-fx :config="BASE_CONFIG" color='#1DE9B6' color-hover='#FF8A65'/>
    <v-app>
    <v-main>
      <div>
    <div id="contain" class="container">
    <div class="button" style="position:fixed; z-index:100" data-cursor-hover>
        <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
            <path d="M10,2 L2,2" class="bar-1" ></path>
            <path d="M2,5 L10,5" class="bar-2"></path>
            <path d="M10,8 L2,8" class="bar-3"></path>
        </svg>
    </div>
  </div>
  <div class="menu">
    <div class="button" data-cursor-hover>
        <svg viewBox="0 0 12 10" class="cross" height="40px" width="40px">
            <path d="M8,2 L2,8" class="bar-1"></path>
            <path d="M8,8 L2,2" class="bar-3"></path>
        </svg>
    </div>
    <ul class="list-items">
      <li data-cursor-hover class="li2 li" @click="scrollTo('skills')"><a href="#0" class="text1" style="cursor:none">skills</a></li>
      <li data-cursor-hover class="li3 li" @click="scrollTo('projects')"><a href="#0" class="text1" style="cursor:none">projects</a></li>
      <li data-cursor-hover class="li4 li" @click="scrollTo('experience')"><a href="#0" class="text1" style="cursor:none">experience</a></li>
      <li data-cursor-hover class="li5 li" ><a class="text1" style="cursor:none" href="https://drive.google.com/file/d/1URTnQbzXIxKTdnnwAqNu0TuEZobp61EY/view?usp=sharing" >Resume</a></li>
    </ul>
    <div class="social">
      <ul class="ulContainer">
        <li data-cursor-hover class="social-li"><a style="cursor:none" href='https://www.linkedin.com/in/akarshan-m-75577122a/'>linkedIn</a></li>
        <li data-cursor-hover class="social-li"><a style="cursor:none" href='https://github.com/1pharaxh'>GitHub</a></li>
        <li data-cursor-hover class="social-li"><a style="cursor:none" href="mailto:akarshan@ualberta.ca">Email</a></li>
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
  import { CursorFx } from '@luxdamore/vue-cursor-fx';
  import about from './components/AboutMe.vue';
  import projectsVue from './components/projects.vue';
  import contactMeVue from './components/ContactMe.vue';
  import experienceVue from './components/experience.vue'
  import footerVue from './components/FooterVue.vue'
  export default {
    components: {
      'cursor-fx': CursorFx,
      'about-me': about,
      'skills': skillsVue,
      'projects': projectsVue,
      'exp' : experienceVue,
      'contact-me': contactMeVue,
      'footer-vue': footerVue
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
    },
    methods: {
        scrollTo(el) {
            document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
        }
    },
    mounted() {
      if (this.$vuetify.breakpoint.name === 'sm' || this.$vuetify.breakpoint.name === 'xs') { 
        // document.documentElement.style.overflow = 'hidden'
        var arr = document.getElementsByClassName('button')
        for (let i in arr) {
          if (arr[i].style){
            arr[i].style.top = '20px'
            arr[i].style.right = '20px'
          }
        }
        var arr2 = document.getElementsByClassName('text1')
        for(let i in arr2) {
          if (arr2[i].style) {
            arr2[i].style.fontSize = '2rem'
          }
        }
        document.getElementsByClassName('list-items')[0].style.top = '16%'
        document.getElementsByClassName('list-items')[0].style.justifyContent = 'start'
        document.getElementsByClassName('ulContainer')[0].style.padding = 0
        document.getElementsByClassName('ulContainer')[0].style.margin = '0 auto'
        document.getElementsByClassName('ulContainer')[0].style.marginBottom = '50px'
      }
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
  // @import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    
  }


  .cursor-fx{
    opacity:0
}
.is-cursor-fx-active,.is-cursor-fx-active *{
    cursor:none
}
.is-cursor-fx-active .cursor-fx{
    transition-delay:.3s
}
.is-cursor-fx-active .cursor-fx.cursor-fx--loaded{
    opacity:1
}
.cursor-fx[data-v-f3f73494]{
    color:var(--color,#333);
    transition:color .18s ease-in-out,opacity .6s ease-in-out
}
.cursor-fx--hover[data-v-f3f73494]{
    color:var(--color-hover,#333)
}
.cursor-fx__inner[data-v-f3f73494]{
    position:absolute;
    top:0;
    left:0;
    z-index:999!important;
    border-radius:100%;
    transition-timing-function:ease;
    transition-duration:.23s;
    transition-property:color,width,height,background-color,border-radius,border-color;
    pointer-events:none;
    will-change:auto
}
.cursor-fx__inner__outside[data-v-f3f73494]{
    border:3px solid
}
.cursor-fx__inner__custom[data-v-f3f73494],.cursor-fx__inner__outside[data-v-f3f73494]{
    width:64px;
    height:64px
}
.cursor-fx__inner__inside[data-v-f3f73494]{
    width:6px;
    height:6px;
    background-color:currentColor
}
.cursor-fx--shape-square>.cursor-fx__inner[data-v-f3f73494]{
    border-radius:0
}




  .hamburger {
      fill: none;
      stroke: #6FCA62;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      width: 40px;
      height: 40px;
      cursor: none;
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
      cursor: none;
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
    cursor: none;
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
    height: 150px;
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