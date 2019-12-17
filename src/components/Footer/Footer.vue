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
    },
    deny() {
      window.location = 'https://google.com';
    }
  }
}
</script>

<template>
  <cookie-law theme="dark-lime" v-show="notaccepted">
    Our website collects data when you register and login 
    <button @click="accept">Accept</button>
    <button @click="deny">Deny</button>
    <router-link to="/legal-notes">Click here for more info</router-link>
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
  button {
    display: block;
    margin: auto;
    color: grey;
    background-color: white;
    height: 40px;
    width: 18%;
    border: 1px solid rgba(214, 214, 214, 0.664);
    box-shadow: 1px 1px rgba(228, 228, 228, 0.603);
    border-radius: 40px;
  }
</style>
