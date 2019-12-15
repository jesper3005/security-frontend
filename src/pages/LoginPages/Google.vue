<script>
import GoogleLogin from 'vue-google-login'

export default {
  name: 'Google',
  components: { GoogleLogin },
  data () {
    return {
      params: {
        client_id: ' 974518338417-gihnoffh8j9sh4bketlaecjpnmv87h81.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);

      console.log(googleUser.getBasicProfile())
    },
    onFailure() {
      alert("Bad bad bad")
    }
  }
}
</script>

<template>
  <div>
    <h1>Google</h1>
    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
  </div>
</template>