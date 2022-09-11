<template>
  <div>
    <div class="container">
    <div class="button">
        <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
            <path d="M10,2 L2,2" class="bar-1" ></path>
            <path d="M2,5 L10,5" class="bar-2"></path>
            <path d="M10,8 L2,8" class="bar-3"></path>
        </svg>
    </div>
  </div>
  <div class="menu">
    <div class="button">
        <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
            <path d="M8,2 L2,8" class="bar-1"></path>
            <path d="M8,8 L2,2" class="bar-3"></path>
        </svg>
    </div>
    <ul class="list-items">
      <li class="li1 li" @click="scrollTo('home')"><a>home</a></li>
      <li class="li2 li" @click="scrollTo('skills')"><a >skills</a></li>
      <li class="li3 li" @click="scrollTo('projects')"><a >projects</a></li>
      <li class="li4 li" @click="scrollTo('experience')"><a >experience</a></li>
    </ul>
    <div class="social">
      <ul>
        <li class="social-li"><a href="#">fb</a></li>
        <li class="social-li"><a href="#">insta</a></li>
        <li class="social-li"><a href="#">ttt</a></li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
    import { gsap, Expo } from 'gsap';
    import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
    data: () => ({}),
    methods: {
        scrollTo(el) {
            var tl = gsap.timeline({paused: "true"});
            tl.reversed(!tl.reversed());
            document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
        }
    },
    mounted() {
        //namespace shaker
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
          tl.play()
        })

        btns[1].addEventListener('click', function() {
            tl.reversed(!tl.reversed());
        })
    }
})
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
        stroke: rgb(167, 0, 0);
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
</style>>
