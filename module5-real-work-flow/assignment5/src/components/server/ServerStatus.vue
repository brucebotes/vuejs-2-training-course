<template>
  <div class="server-status">
    <p>Server Status: {{ status }}</p>
    <hr>
    <button v-on:click="changeStatus">Change status</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return{
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'Normal'
      }
    }
  }
</script>

<style>

.server-status {
  border: 1px solid black;
  padding: 1rem;
}
</style>

