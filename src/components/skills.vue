<template>
    <div>
  <div style="text-align:center; padding-top: 15%;" >
    <!-- <cursor-fx  color='#1DE9B6' color-hover='#FF8A65'/> -->
    <h1 class="header">
        <p class="contain"><span class="prime" data-cursor-hover>My<span class="second skills" data-cursor-hover>Skills...</span></span><span class="centered">SKILLS</span></p>
    </h1>
    <v-divider></v-divider>
    <br/>
    <div style="width: 70%; margin:auto">
    <img 
        v-for="(skill, index) in skills" :key="index"
        :alt="skill +'.svg'"
        :ref="skill"
        data-cursor-hover 
        :src='"./../../public/assets/logos/"+skill+".svg"'
        :class="{
            'img-default-size': true,
        }"
        @click="handleClick(skill)" 
        @mouseover="shrinkImage(skill)"
        @mouseout="enlargeImage(skill)"
    />

  </div>
</div>
</div>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'SkillsVue',
        components: {
        },
        mounted() {
            if (this.$vuetify.breakpoint.name === 'sm' || this.$vuetify.breakpoint.name === 'xs') {
                document.getElementsByClassName('header')[0].style.fontSize = '3rem'
                document.getElementsByClassName('skills')[0].innerHTML = 'Skills'
                document.getElementsByClassName('header')[0].style.paddingLeft = '4rem'
                var arr = document.getElementsByClassName('img-default-size')
                for (let i in arr) {
                    if (arr[i].style) {
                        arr[i].style.width = '50px'
                        arr[i].style.height = '50px'
                    }
                }
            }
        },
        data () {
            const skills = [
                'arduino',
                'bash',
                'bootstrap',
                'capacitorjs-cropped',
                'cordova-cropped',
                'cpp-cropped',
                'css-cropped',
                'expressjs-cropped',
                'firebase-cropped',
                'flask-cropped',
                'gsap-greensock-cropped',
                'html-cropped',
                'ionic-cropped',
                'javascript-cropped',
                'linux-tux-cropped',
                'mongodb-cropped',
                'nodejs-cropped',
                'photoshop-cropped',
                'postman-cropped',
                'python-cropped',
                'raspberrypi-cropped',
                'tensorflow-cropped',
                'threejs-cropped',
                'typescript-cropped',
                'vuejs-cropped',
                'vuetify-cropped',
            ]
                return {imageShrunk: false, skills}
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
                'ionic-cropped' : 'https://ionicframework.com/',
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
            enlargeImage(skill) {
                this.$refs[skill][0].classList.remove('img-shrunk-size');
            },
            shrinkImage(skill) {
                this.$refs[skill][0].classList.add('img-shrunk-size');
            },
        },

    })
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    .img-default-size {
        height: 110px;
        transition: all 0.4s;
    }

    .img-shrunk-size {
        height: 100px;
        transition: all 0.4s;
    }
    h1{
        font-family: 'Ubuntu';
        font-style: normal;
    }
    .prime {
        font-weight: 900;
        font-style: normal;
        color: #8CF2D8;
        margin-right: 12px;
        padding-right: 12px;
    }
    .second{
        font-weight: 900;
        font-style: normal;
        margin-left: 12px;
        padding-left: 12px;
        color: #009688;
    }
    img {
        margin-left: 15px;
        margin-right: 15px;
        max-width: 110px;
        max-height: 110px;
    }
    .header{
        font-size: 5rem;
        text-align:center;
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