<template>
          <div class="col-xs-12 col-sm-6">
            <h3>Server details</h3>
              <template v-if="server">
                <p> Server #{{ server.id }}</p>
                <p> Status :{{ server.status }}</p> 
                <button v-on:click="onReset">Reset to Normal</button>
              </template>
              <p v-else>No details are available yet. Please select a server?</p>
          </div>
</template>

<script>
  import {eventBus} from '../../main.js'
  export default {
    data: function() {
      return {
        server: null
      }
    },
    methods: {
      onReset() {
        eventBus.resetStatus(this.server)
      }
    },
    created() {
      eventBus.$on('selectedServer', (server) => {
        this.server = server
      })
    }
  }

</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
