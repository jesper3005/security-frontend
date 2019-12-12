<script>
import LoginNavBar from '../components/Nav/LoginNavBar'

export default {
  name: 'LoginPage',
  components: {
    LoginNavBar,
  }
}
</script>

<template>
  <div>
    <LoginNavBar/>
    <router-view></router-view>
  </div>
</template>