<template>
  <div style="text-align:center; padding-top: 15%;" id="row2">
    <cursor-fx  color='#1DE9B6' color-hover='#FF8A65'/>
    <h1>
        <p><span class="text-primary" data-cursor-hover>My<span class="text-secondary" data-cursor-hover>Skills</span></span></p>
    </h1>
    <v-divider></v-divider>
<v-container>
    <img 
        v-for="(skill, index) in skills" :key="index"
        :ref="skill"
        data-cursor-hover 
        :src='"./../../public/assets/logos/"+skill+".svg"'
        :class="{
            'img-default-size': true,
        }" 
        @mouseover="shrinkImage(skill)"
        @mouseout="enlargeImage(skill)"
    />
    </v-container>
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
        height: 100px;
        transition: all 0.4s;
    }

    .img-shrunk-size {
        height: 70px;
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
        #row2 {
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 100%;
    }
    img {
        margin-left: 10px;
        margin-right: 10px;
        max-width: 100px;
        max-height: 100px;
    }
</style>