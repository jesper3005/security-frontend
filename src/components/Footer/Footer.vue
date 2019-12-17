<script>
import CookieLaw from 'vue-cookie-law'

export default {
  name: 'Footer',
  components: { CookieLaw },
  data () {
    return {
      notaccepted: true
    }
  },
  methods: {
    accept() {
      this.notaccepted = false
    }
  }
}
</script>

<template>
  <cookie-law theme="dark-lime" v-show="notaccepted">
    Our website collects data when you register and login <button @click="accept">Accept</button><router-link to="/legal-notes">Click here for more info</router-link>
  </cookie-law>
</template>

<style scoped>
  .footer {
    height: 300px;
    margin-top: 200px;
    overflow: hidden;
    background-color: #444444;
  }
  h1 {
    padding: 5%;
    color: white;
  }
  a {
    color: white;
  }
</style>
