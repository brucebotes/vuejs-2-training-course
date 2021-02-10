<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <button class="btn btn-primary" @click="navigateToHome">Navigate to Home Page</button>
    <hr />
    <!-- load the sub routes here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
