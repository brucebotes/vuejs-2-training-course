<template>
  <div>
    <h3>New Quote</h3>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("I was destroyed");
  },
  deactivated() {
    console.log("Deactivated...");
  },
  activated() {
    console.log("Activated...");
  }
};
</script>
<style></style>


