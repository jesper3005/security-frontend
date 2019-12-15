<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'Captcha',
  components: { VueRecaptcha },
  data () {
    return {
      sitekey: process.env.RECAPTCHA_PUBLIC_KEY
    }
  }
}
</script>

<template>
  <div>
    <h1>Captcha</h1>
    <vue-recaptcha sitekey="sitekey">
      <button>Click me</button>
    </vue-recaptcha>
  </div>
</template>