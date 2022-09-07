<template>
          <div style="text-align:center; padding-top: 15%;">
    <cursor-fx  color='#1DE9B6' color-hover='#FF8A65'/>
    <h1 style="text-align:right;padding-right:13%">
        <p><span class="text-primary" data-cursor-hover>My<span class="text-secondary" data-cursor-hover>Experience</span></span></p>
    </h1>
    <v-divider></v-divider>
    <v-timeline>
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
            {{year.content}}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
</div>
  </template>
  
  <script>
    export default {
        name: 'ExperienceVue',
      data: () => ({
        years: [
          {
            color: 'cyan',
            year: '2022',
            title: 'Junior Software Developer',
            content: 'Hi'
          },
          {
            color: 'green',
            year: '2018',
            title: 'Drone Engineering Intern',
            content: 'bombed drones'
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