<script>
import FacebookLogin from 'facebook-login-vuejs'

export default {
  name: 'Facebook',
  components: { FacebookLogin },
  data () {
    return {
      facebookKey: this.facebookKey,
      personalID: this.personalID,
      email: this.email,
      name: this.name,
      FB: undefined,
    }
  },
  beforeMount() {
    this.facebookKey = process.env.FACEBOOK_KEY
  },
  methods: {
    getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email'},
        userInformation => {
          console.warn("Getting data from facebook", userInformation)
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if ( this.isConnected ) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()
      localStorage.setItem('facebookID', this.personalID)
    },
    onLogout() {
      this.isConnected = false
    }
  }
}
</script>

<template>
  <div>
    <h1>Facebook</h1>
    <facebook-login
      appId=''
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded"
    >
    </facebook-login>
    <p> {{ personalID }} </p>
    <p> {{ name }} </p>
    <p> {{ email }} </p>
  </div>
</template>