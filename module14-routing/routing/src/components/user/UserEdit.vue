<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale is '{{ $route.query.locale }}'</p>
    <p>Analystics is '{{ $route.query.q }}'</p>
    <hr />
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some Data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave call entered - on component level");
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>
