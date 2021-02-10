<template>
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li class="list-group-item" v-for="server in servers">
                      <app-server-item :server="server"></app-server-item>
                    </li>
                </ul>
            </div>
</template>

<script>
  import ServerItem from './ServerItem.vue'
  import {eventBus} from '../../main.js'

  export default {
    data: function() {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Normal'},
          {id: 5, status: 'Unkown'},
        ]
      }
    },
    components: {
        'app-server-item': ServerItem
    },
    created() {
      eventBus.$on('resetServer', (selectedServer) => {
          console.log('resetServer called')
          selectedServer.status = 'Normal'
      })

    }
  }
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>
