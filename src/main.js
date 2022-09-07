import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
Vue.config.productionTip = false;
Vue.mixin({
  created: function () {
    this.gsap = gsap;
  },
});
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
Vue.config.ignoredElements = ["css-doodle"];
