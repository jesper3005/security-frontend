<script>
import VueRecaptcha from 'vue-recaptcha'
import { mapActions } from 'vuex'
import { captchaValidation } from '../../services/recaptcha-service'

export default {
  name: 'Captcha',
  components: { VueRecaptcha },
  methods: {
    ...mapActions('recaptcha', ['validate']),
    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute()
    },
    onVerify: function (response) {
      console.log('Verify: ' + response)
      this.validate(response.verify)
    },
    onExpired: function () {
      console.log('Expired')
    },
    resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
    },

}
}
</script>

<template>
  <div>
    <h1>Captcha</h1>
    <form @submit.prevent="onSubmit">
      <vue-recaptcha
        :loadRecaptchaScript="true"
        ref="recaptcha"
        @verify="onVerify"
        @expired="onExpired" 
        sitekey="6LduDsgUAAAAADAOldsQwNGYByrS77swxFdnKmbc"
      >
        <button>Click me</button>
      </vue-recaptcha>
    </form>
  </div>
</template>