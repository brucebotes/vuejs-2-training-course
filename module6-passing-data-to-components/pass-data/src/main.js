import Vue from "vue";
import App from "./App.vue";

// The eventBus must be created
// before the next Vue instance
// because it is referenced in the
// next instance
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasEmitted", age);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});

