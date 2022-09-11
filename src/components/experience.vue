<template>
          <div style="text-align:center; padding-top: 15%;">
    <cursor-fx  color='#1DE9B6' color-hover='#FF8A65'/>
    <h1 style="text-align:right;padding-right:13%">
        <p><span class="text-primary" data-cursor-hover>My<span class="text-secondary" data-cursor-hover>Experience...</span></span></p>
    </h1>
    <v-divider></v-divider>
    <div style="margin: 0px 100px">
    <v-timeline >
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            {{year.title}}
          </h2>
          <div>
            <v-icon :color="year.color">
              {{year.icon}}
            </v-icon>
            {{year.location}} <span style="padding-left: 30px;font-size: 0.9rem;" :class="`font-weight-bold ${year.color}--text`">{{year.duration}}</span>
          </div>
          <div :style="'font-size:0.9rem; text-align:'+ year.justify +';'">
            <p style="padding:0;margin:0" v-for = "(desc, i) in year.description" :key="i">
              {{desc}}
            </p>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</div>
  </template>
  
  <script>
    export default {
        name: 'ExperienceVue',
      data: () => ({
        years: [
          {
            color: 'cyan',
            duration: 'Jun 2022 - Aug 2022',
            year: '2022',
            title: 'Junior Software Developer',
            location: 'Edmonton, AB',
            icon: 'mdi-map-marker-outline', 
            justify: 'start',
            description: [
              '● Created responsive client facing VueJs UI components.', 
              '● Integrated a ML persistent approach using Keras in the python data processing pipeline.',
              '● Led the frontend development of companies’ upcoming hybrid (Android and iOS) app using Ionic framework and VueJs and other JS libraries along with 3rd party APIs and Google Cloud integration.',
              '● Bug fixes and scaling on existing webapp based on Vue.'
            ],
          },
          {
            color: 'green',
            duration: 'Oct 2022 - Jan 2019',
            year: '2018',
            title: 'Drone Engineering Intern',
            location: 'Noida, India',
            icon: 'mdi-map-marker-outline',
            justify: 'start',
            description: [
              '● Led team’s efforts of making quad-rotor drones by assembling, soldering various components, and programming them with ArduPilot firmware; resulted in faster production by 15%.', 
              '● Analyzed options available for client needs and recommended solutions based on time and resource considerations, which led to acquiring 3 new projects.',
              '● Developed reports and quotations about project specifications for clients based around their requirements and budget.'
            ],
            
          },
        ],
      }),
    }
  </script>
  <style>
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
  </style>