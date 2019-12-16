<script>
import GoogleLogin from 'vue-google-login'

export default {
  name: 'Google',
  components: { GoogleLogin },
  data () {
    return {
      params: {
        client_id: '974518338417-qgqi7bkct5h5fs1qtlvi26m0ta7b4o8g.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },
      user: {
        personalId: this.personalId,
        name: this.name,
        email: this.email
      }
    }
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);
      console.log(googleUser.getBasicProfile());
      this.user.personalId = googleUser.getBasicProfile().Eea;
      this.user.name = googleUser.getBasicProfile().ig;
      this.user.email = googleUser.getBasicProfile().U3;
    },
    onFailure() {
      alert("Something went wrong, please try again or use another login option.")
    }
  }
}
</script>

<template>
  <div>
    <div class="center-login">
      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
    </div>
    <p> <strong>ID:</strong> {{ user.personalId }} </p>
    <p> <strong>Name:</strong> {{ user.name }} </p>
    <p> <strong>Email:</strong> {{ user.email }} </p>
  </div>
</template>

<style scoped>
  .center-login {
    margin: auto;
    width: 15%;
    padding-top: 200px;
  }
</style>