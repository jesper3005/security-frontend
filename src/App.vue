<script>
import MainNavBar from './components/Nav/MainNavBar'
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    MainNavBar,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <main-nav-bar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
