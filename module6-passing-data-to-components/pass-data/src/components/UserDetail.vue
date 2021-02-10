<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Computed User name: {{ reverseName }}</p>
        <p>Switched name: {{switched}}</p>
        <button v-on:click="switchName">Copy and switch</button>
        <button @click="resetName">Reset Name to Evie with custom event</button>
        <input type="text" v-model="newName"/>
        <button v-on:click="resetFn(newName)">Update with a new name</button>
        <p>User age is:  {{ userAge}}</p>
    </div>
</template>

<script>
  import {eventBus} from '../main'

  export default {
    props: {
      myName: {
        type: String,
        required: true
      },
      resetFn: Function,
      userAge: Number
    },
    data: function() {
      return{
        switched: this.myName,
        newName: ''
      }
    },
    methods: {
      switchName() {
        this.switched = this.myName.split("").reverse().join("")
      },
      resetName() {
        this.$emit('nameWasReset', 'Evie') // Emit a custom event to parent
      }
    },
    computed: {
      reverseName() {
        return this.myName.split("").reverse().join("")
      }
    },
    created() {
      eventBus.$on('ageWasEmitted', (age) => {
        this.userAge = age
      })
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
