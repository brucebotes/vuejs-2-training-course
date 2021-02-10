<template>
  <div>
    <h3>Some User Details</h3>
    <hr />
    <p>User loaded has id: {{ $route.params.id }}</p>
    <!-- clumbersome way of building a dynamic route
       -<router-link
       -  tag="button"
       -  :to="'/user/'+$route.params.id+'/edit'"
       -  class="btn btn-primary"
       ->Edit User</router-link>
    -->
    <!-- advanced way using name routes -->
    <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter was called - on component level");
    if (true) {
      next(); // user was authenticated and good to continue
    } else {
      next(false); // user failed authenication - abort
    }
  }
};
</script>
