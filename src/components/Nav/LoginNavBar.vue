<script>
export default {
  name: 'LoginNavBar'
}
</script>

<template>
  <div class="navbar">
    <ul class="navbar-content">
      <!-- Left content -->

      <li>
      </li>

      <!-- Centered content -->
      <li>
        <router-link v-bind:to="'/login/facebook'" :key="1">FACEBOOK</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/login/google'" :key="2">GOOGLE</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/login/captcha'" :key="3">CAPTCHA</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/login/our-login'" :key="3">OUR LOGIN</router-link>
      </li>

      <!-- Right Content -->
      <li>
      </li>

    </ul>
  </div>
</template>

<style scoped>
  .navbar {
    max-height: 20%;
    margin: 0;
    overflow: hidden;
    background-color: #d3d3d3;
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
  }
  svg {
    fill: #9CBEFF;
  }
</style>
