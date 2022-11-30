<template>
    <div style="text-align:center; padding-top: 15%;">
      <!-- <cursor-fx  color='#1DE9B6' color-hover='#FF8A65'/> -->
      <h1 class="header">
          <p class="contain"><span class="text-primary" data-cursor-hover>My<span class="text-secondary project" data-cursor-hover>Projects...</span></span><span class="centered">PROJECTS</span></p>
      </h1>
      <v-divider></v-divider>
      <br/>
      <div class="grid-container">
          <div id="content"  v-for="(card, index) in cards" :key="index" style="text-align:center;">
            <Card data-cursor-hover :title="card.title" myColor="green" 
            :link="card.link" 
            :content="card.content" >
            <v-chip style="padding-right:5px; margin-bottom:10px; margin-right:10px" v-for='(chip, index) in card.chips' :key="index" @click="handleClick(chip.src)" pill outlined class="ma-2" color="success">
              <v-avatar left style="padding-left: 10px">
                <img :src='"./../../public/assets/logos/"+chip.src + ".svg"' :alt="chip.src+'.svg'" />
              </v-avatar>
              {{chip.text}}
            </v-chip>
          </Card>
        </div>
        </div>
    </div>
  </template>
  <script>
    import { defineComponent } from 'vue';
    import Card from "./core/Cards.vue";
    export default defineComponent({
      name: 'ProjectsVue',
      components: {
        Card
      },
      mounted() {
        if (this.$vuetify.breakpoint.name === 'sm' || this.$vuetify.breakpoint.name === 'xs') {
          document.getElementsByClassName('header')[1].style.fontSize = '3rem'
  //         display: grid;
  // grid-auto-flow: column;
  // grid-template-rows: auto;
  // text-align: center;
  // width: 80%;
  // margin:auto;
          document.getElementsByClassName('project')[0].innerHTML = 'Projects'
          document.getElementsByClassName('grid-container')[0].style.display = 'block'
          document.getElementsByClassName('grid-container')[0].style.width = '100%'
        }
      },
      data () {
        const cards = [
          {
            title: 'ASLingo',
            link: 'https://ghbtns.com/github-btn.html?user=1akarshan&repo=hacked-beta&type=star&count=true&size=large',
            content: 'An android app that uses AI to help users practice their American Sign Language (ASL) skills.',
            chips: [
              {
                src: 'vuejs-cropped',
                text: 'Vue.js'
              },
              {
                src: 'gsap-greensock-cropped',
                text: 'GSAP'
              },
              {
                src:'vuetify-cropped',
                text: 'Vuetify'
              },
              {
                src: 'threejs-cropped',
                text: 'ThreeJs'
              }, 
            ]
          },
          {
            title: 'Course Scheduler',
            link: 'https://ghbtns.com/github-btn.html?user=1pharaxh&repo=Doodle_Xpert&type=star&count=true&size=large',
            content: 'A full stack webapp that helps university students to save time by making their course schedule.',
            chips: [
              {
                src: 'mongodb-cropped',
                text: 'MongoDb'
              },
              {
                src: 'expressjs-cropped',
                text: 'ExpressJs'
              },
              {
                src: 'vuejs-cropped',
                text: 'VueJs'
              },
              {
                src: 'nodejs-cropped',
                text: 'NodeJs'
              },
              {
                src:'vuetify-cropped',
                text: 'Vuetify'
              },
              
            ]
          },
          {
            title: 'Doodle Xpert',
            link: 'https://ghbtns.com/github-btn.html?user=1pharaxh&repo=Doodle_Xpert&type=star&count=true&size=large',
            content: 'A Doodle Classfier program based on Convolutional Neural Networks and a Feed forward Multilayer Perceptron.',
            chips: [              
              {
                src: 'python-cropped',
                text: 'Python'
              },
              {
                src: 'tensorflow-cropped',
                text: 'TensorFlow'
              },
            ]
          }
        ]
        return {
          cards
        }
      },
      methods: {
        handleClick(link) {
                const linkMap = {
                    'arduino': 'https://www.arduino.cc/',
                'bash' : 'https://www.gnu.org/software/bash/',
                'bootstrap' : 'https://getbootstrap.com/',
                'capacitorjs-cropped' : 'https://capacitorjs.com/',
                'cordova-cropped' : 'https://cordova.apache.org/',
                'cpp-cropped' : 'https://www.cplusplus.com/',
                'css-cropped': 'https://www.w3.org/Style/CSS/Overview.en.html',
                'expressjs-cropped' : 'https://expressjs.com/',
                'firebase-cropped': 'https://firebase.google.com/',
                'flask-cropped': 'https://flask.palletsprojects.com/en/1.1.x/',
                'gsap-greensock-cropped' : 'https://greensock.com/gsap/',
                'html-cropped' : 'https://www.w3.org/html/',
                'javascript-cropped' : 'https://www.javascript.com/',
                'linux-tux-cropped' : 'https://www.linux.org/',
                'mongodb-cropped' : 'https://www.mongodb.com/',
                'nodejs-cropped': 'https://nodejs.org/en/',
                'photoshop-cropped' : 'https://www.adobe.com/ca/products/photoshop.html',
                'postman-cropped': 'https://www.postman.com/',
                'python-cropped' : 'https://www.python.org/',
                'raspberrypi-cropped' : 'https://www.raspberrypi.org/',
                'tensorflow-cropped': 'https://www.tensorflow.org/',
                'threejs-cropped': 'https://threejs.org/',
                'typescript-cropped': 'https://www.typescriptlang.org/',
                'vuejs-cropped': 'https://vuejs.org/',
                'vuetify-cropped' : 'https://vuetifyjs.com/en/',
                }
                window.open(linkMap[link]);
            },
      }
    })
  </script>
  <style scoped>
    .header{
      text-align:center;font-size:5rem;
    }
     h1{
        font-family: 'Ubuntu';
        font-style: normal;
    }
    #content {
      padding-left: 15%;
      padding-right:25%
    }
    .grid-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto;
  text-align: center;
  width: 80%;
  margin:auto;
} 
    .text-primary {
        font-weight: 900;
        font-style: normal;
        color: #8CF2D8;
        margin-right: 12px;
        padding-right: 12px;
    }
    .text-secondary{
        font-weight: 900;
        font-style: normal;
        margin-left: 12px;
        padding-left: 12px;
        color: #009688;
    }
    .contain {
      position: relative;
    }
    .centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #8CF2D8;
  font-size: 200px;
  opacity: 20%;
}
  </style>
  