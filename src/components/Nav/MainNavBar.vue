<script>
import { router } from '../../router'

export default {
  name: 'MainNavBar',
  data () {
    return {
      isVerified: localStorage.getItem('verified'),
      isLoggedIn: localStorage.getItem('data')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("data");
      localStorage.setItem('verified', false)
      router.push('/');
      this.$router.go(0);
    }
  }
}
</script>

<template>
  <div class="navbar">
    <ul class="navbar-content">
      <!-- Left content -->

      <li>
        <img src="@/assets/TTT_logo.png" height="100" width="100"/>
      </li>

      <!-- Centered content -->
      <li>
        <router-link v-bind:to="'/'" :key="1">HJEM</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/hvem-er-vi'" :key="2">HVEM ER VI</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/profile'" :key="3" v-if="isVerified && isLoggedIn">BRUGER PROFIL</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/login'" :key="4" v-if="!isLoggedIn | !isVerified">LOG IND</router-link>
      </li>
      <li v-if="isLoggedIn && isVerified">
        <button class="logout" v-on:click="logout">Log out</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .navbar {
    max-height: 20%;
    margin: 0;
    overflow: hidden;
    background-color: #dedede;
  }
  .navbar-content {
    margin: 0;
    display: flex;
    padding: 0 0px;
  }
  .navbar-content li {
    display: flex;
    margin: auto;
    justify-content: center;
  }
  .navbar-content li:first-of-type {
    flex: 1 0 0;
    justify-content: left;
  }
  .navbar-content li:last-of-type {
    flex: 1 0 0;
    justify-content: right;
  }
  a {
    display: flex;
    position: relative;
    color: black;
    font-size: 20px;
    text-decoration: none;
    padding: 10px 25px;
    font-weight: bold;
    outline: 0 none !important;
  }
  svg {
    fill: #9CBEFF;
  }

  .logout {
    display: block;
    margin: auto;
    background-color: rgb(56, 56, 56);
    height: 45px;
    width: 200px;
    border: 1px solid rgba(214, 214, 214, 0.664);
    box-shadow: 1px 1px rgba(228, 228, 228, 0.603);
    border-radius: 40px;
    -moz-appearance:textfield;
    text-align: center;
    font-size: 20px;
    color: white;
}
</style>
