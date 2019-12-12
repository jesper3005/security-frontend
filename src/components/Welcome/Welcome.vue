<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Created by Jesper Christensen <small><small><small><small>& also Michael Due</small></small></small></small></h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to The Turtle Troopers login page'
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
