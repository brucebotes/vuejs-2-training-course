<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>My name is: {{name}}</p>
        <p>My age is: {{age}}</p>
        <button @click="onChange">Change my name to Hersey</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
              <app-user-detail 
                :myName="name" 
                @nameWasReset="name = $event"
                :resetFn="onSetName"
                :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                  :userAge="age"
                  :ageFn="onSetAge"
                  @ageWasUpdated="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
      data: function () {
        return {
          name: 'Bruce',
          age: 20
        }
      },
      methods: {
        onChange: function () {
          this.name = 'Hersey'  
        },
        onSetName(value) {
          this.name = value
        },
        onSetAge(value) {
          this.age = value
        }
      },
      components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
      },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
