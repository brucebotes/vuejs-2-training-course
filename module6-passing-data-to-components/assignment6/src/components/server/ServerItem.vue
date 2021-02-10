<template>
  <div>
  <p>Server #{{ server.id }} status {{ server.status }}</p>
  <button @click="onClick">Select</button>
  </div>
</template>

<script>
  import {eventBus} from '../../main.js'
  export default {
    props: {
        server: Object
      },
    methods: {
      onClick() {
        eventBus.$emit('selectedServer', this.server)
      }
    }
  }
</script>
