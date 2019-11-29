<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Created by Jesper Christensen</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the Vue CLI webpack template'
    }
  }
}
</script>

<style scoped>
@import './Welcome'
</style>
