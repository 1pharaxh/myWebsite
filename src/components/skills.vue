<template>
    <div>
  <div style="text-align:center; padding-top: 15%;" >
    <!-- <cursor-fx  color='#1DE9B6' color-hover='#FF8A65'/> -->
    <h1 style="text-align:right;padding-right:15%">
        <p><span class="text-primary" data-cursor-hover>My<span class="text-secondary" data-cursor-hover>Skills...</span></span></p>
    </h1>
    <v-divider></v-divider>
    <div style="width: 70%; margin:auto">
    <img 
        v-for="(skill, index) in skills" :key="index"
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
    img {
        margin-left: 15px;
        margin-right: 15px;
        max-width: 110px;
        max-height: 110px;
    }
</style>