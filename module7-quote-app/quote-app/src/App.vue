<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>Live component is: {{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <h3 slot="title">{{ quoteTitle }}</h3>
            <p slot="content">A wonderful quote</p>
            <p>This content will be in the default slot</p>
          </component>
        </keep-alive>
        <!--
           -<app-quote>
           -  <h3 slot="title">{{ quoteTitle }}</h3>
           -  <p slot="content">A wonderful quote</p>
           -  <p>This content will be in the default slot</p>
           -</app-quote>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author";
import New from "./components/New";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style scoped>
/* styles passed to slot components */
h3 {
  color: blue;
}
p {
  font-weight: bold;
}
</style>
