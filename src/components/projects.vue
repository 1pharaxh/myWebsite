<template>
    <div style="text-align:center; padding-top: 15%;" id="row3">
      <cursor-fx  color='#1DE9B6' color-hover='#FF8A65'/>
      <h1>
          <p><span class="text-primary" data-cursor-hover>My<span class="text-secondary" data-cursor-hover>Projects</span></span></p>
      </h1>
      <v-divider></v-divider>
    <v-container>
      <v-grid style="text-align:center;">
        <v-row style="margin:auto;">
          <v-col v-for="(card, index) in cards" :key="index" style="text-align:center;">
            <Card data-cursor-hover :title="card.title" myColor="green" 
            :link="card.link" 
            :content="card.content" >
            <v-chip style="padding-right:5px; margin-bottom:10px; margin-right:10px" v-for='(chip, index) in card.chips' :key="index" pill outlined class="ma-2" color="success">
              <v-avatar left style="padding-left: 10px">
                <v-img :src='"./../../public/assets/logos/"+chip.src + ".svg"'/>
              </v-avatar>
              {{chip.text}}
            </v-chip>
          </Card>
          </v-col>
        </v-row>
      </v-grid>
      </v-container>
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
      data () {
        const cards = [
          {
            title: 'Portfolio',
            link: 'https://ghbtns.com/github-btn.html?user=1pharaxh&repo=my_website&type=star&count=true&size=large',
            content: 'A personal portfolio website developed using VueJs alongside Vuetify for material design and ThreeJs for 3d animations.',
            chips: [
              {
                src: 'vuejs-cropped',
                text: 'Vue.js'
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
      }
    })
  </script>
  <style scoped>
     h1{
        font-family: 'Ubuntu';
        font-style: normal;
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
    #row3 {
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 100%;
    }
  </style>
  