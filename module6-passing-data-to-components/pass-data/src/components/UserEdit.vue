<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>My age is {{ userAge }}</p>
        <hr>
        <h3>Three different ways to update age in sibling components</h3>
        <button @click="editAge">Edit age with callback</button>
        <button @click="updateAge">Update age with custom event</button>
        <button v-on:click="emitAge">Update age with eventBus</button>
    </div>
</template>

<script>
  import {eventBus} from '../main'

  export default {
    props: {
      userAge: Number,
      ageFn: Function
    },
    methods: {
      editAge() {
        this.ageFn(60);
      },
      updateAge() {
        this.$emit('ageWasUpdated', 50)
      },
      emitAge() {
        this.userAge = 55
        // Emit the event direct
        eventBus.$emit('ageWasEmitted', this.userAge)
        // The event can also be triggered with a
        // globally shared function on the eventBus Vue instance
        eventBus.changeAge(this.userAge)
      }
    }
  }

</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
