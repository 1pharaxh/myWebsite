<template>
    <div class="card">
      <div
        @mouseover="hover=true"
        @mouseout="hover=false"
        v-bind:class="myColor"
        class="card__overlay"
      >
        <h2 class="card__title">{{title}}</h2>
        <p class="card__content">
            {{content}}
        </p>
        <button class="card__button hidden">
            <iframe :src="link" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=1pharaxh&type=follow" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
        </button>
      </div>
      <div class="card__data card__data--series">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardVUE",
    components: {
        },
    props: {
        content: String,
        link: String,
        title: String,
        myColor: String
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: arial;
  }
  
  .card {
    display: flex;
    z-index: 1;
    position: relative;
    flex-direction: column;
    width: 250px;
    height: 380px;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 10px;
  }
  
  .card__overlay {
    display: block;
    position: relative;
    border-radius: 15px;
    height: 230px;
  
    transition: height 300ms ease;
    z-index: 1000;
  }
  
  .card__overlay:hover {
    height: 100%;
  }
  
  .card__overlay:hover .card__button {
    z-index: 1001;
    opacity: 1;
    pointer-events: auto;
  }
  
  .green {
    background-image: linear-gradient(180deg, #34495e, #41b883);
  }
  
  .red {
    background-image: linear-gradient(180deg, #6C6C6C, #F05340);
  }
  
  .card__content {
    position: absolute;
    width: 150px;
    height: 150px;
    left: 50%;
    margin-top: 20px;
    top: 40px;
    /* CHANGE COLOR HERE */
    color: white;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    transform: translateX(-52%);
  }
  
  .card__title {
    display: block;
    margin-top: 10px;
    text-align: center;
    /* CHANGE COLOR HERE */
    color: white;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  }
  
  .card__button {
    text-align: center;
    display: block;
    margin: 190px 65px;
    /* width: 60%; */
    height: 30px;
    /* border-radius: 20px; */
    /* background-color: rgba(255, 255, 255, 0.2); */
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    /* color: white; */
    opacity: 0;
    /* font-weight: bold; */
    /* letter-spacing: 0.8px; */
    transition: all 400ms ease;
  }
  
  /* .card__button:hover {
    color: rgb(0, 0, 50, 0.7);
    background-color: white;
    cursor: pointer;
  } */
  
  .trans__state {
    height: 100%;
  }
  
  i {
    margin-top: 4px;
    margin-right: 10px;
  }
  
  .hidden {
    opacity: 0;
    pointer-events: none;
  }
  
  .card__data {
    display: inline;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 10%;
  }
  
  .card__data--series {
    top: 230px;
    left: 5%;
  }
  
  .total {
    font-weight: normal;
    color: rgba(0, 0, 0, 0.7);
  }
  
  .card__label {
    font-size: 11px;
    color: rgba(0, 0, 0, 0.4);
  }
  </style>
  